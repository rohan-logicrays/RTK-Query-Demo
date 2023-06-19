/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { useListPostsQuery } from "../Api/scrollSlice";
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

const Scroll = () => {
  const [page, setPage] = useState(9);
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
        <div className="mt-5"><h1>Scroll</h1>
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
            onClick={() => setPage(page + 6)}
            isLoading={isFetching}
          >
            more
          </button>
        </div>
      </div>
    );
  }
};
export default Scroll;
