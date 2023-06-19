/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { useListPostsQuery } from "../Api/pageSlice";

const PostCard = ({ content }) => {
  return (
    <div
      className="col-lg-4 mb-1 d-flex justify-content-center"
      key={content.id}
    >
      <div className="card w-50 p-2 logo ">
        <div className="card-body ">
          <h5 className="card-title">{content.title.slice(0, 10)}</h5>
          <p className="card-text">
            <img src={content.url} alt="" height="20px" width="20px" />
          </p>
        </div>
      </div>
    </div>
  );
};

const Pagination = () => {
  const [page, setPage] = useState(1);
  const {
    data: posts,
    isLoading,
    isFetching,
    isSuccess,
  } = useListPostsQuery(page);

  if (isLoading) {
    return <div>Loading</div>;
  } else if (isSuccess) {
    return (
      <div>
        <div><h1>Pagination</h1>
          <div
            style={{
              width: "%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            {posts?.map((item) => {
              return <PostCard content={item} key={item.id} />;
            })}
          </div>
          <button
            className="btn btn-secondary"
            disabled={page === 1 ? true : false}
            onClick={() => setPage(page - 1)}
            isLoading={isFetching}
          >
            Previous
          </button>
          <span className="m-5">{page}</span>
          <button
            className="btn btn-secondary"
            onClick={() => setPage(page + 1)}
            isLoading={isFetching}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
};
export default Pagination;
