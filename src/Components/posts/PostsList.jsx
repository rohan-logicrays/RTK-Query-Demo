/* eslint-disable react/prop-types */
import {  useState } from "react";
import { useGetPostsQuery } from "../Api/apiSlice";
const PostCard = ({ content }) => {
  return (
    <div
      className="col-lg-4 mb-1 d-flex justify-content-center"
      key={content.id}
    >
      <div className="card w-50 p-2">
        <div className="card-body">
          <h5 className="card-title">{content.title.slice(0, 10)}</h5>
          <p className="card-text">
            <img src={content.url} alt="" height="20px" width="20px" />
          </p>
        </div>
      </div>
    </div>
  );
};
function PostsList() {
  const [isGetData, setisGetData] = useState(true);

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery(1, {
    skip: isGetData,
  });


  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
        <span>Loading...</span>
      </div>
    );
  } else if (isSuccess) {
    return (
      <>
   
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            flexDirection: "row",
            overflowX: "auto",
          }}
        >
          {" "}
          {posts?.map((item) => {
            return <PostCard content={item} key={item.id} />;
          })}
        </div>
      </>
    );
  } else if (isError) {
    <div className="alert alert-danger" role="alert">
      {error?.error}
    </div>;
  } else {
    return (
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => setisGetData(!isGetData)}
        >
          Fetch Data
        </button>
        
      </div>
    );
  }
  return;
}
export default PostsList;
