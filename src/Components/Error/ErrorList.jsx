/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGetPostsQuery } from "../Api/errorSilce";

function ErrorList() {
  const [isGetData, setisGetData] = useState(true);

  const {
    isLoading,
    isError,
    error,
  } = useGetPostsQuery(1, {
    skip: isGetData,
  });

  let errorContent;
  if (isLoading) {
    errorContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
        <span>Loading...</span>
      </div>
    );
  } else if (isError) {
    errorContent = (
      <div className="alert alert-danger" role="alert">
        <button onClick={() => setisGetData(!isGetData)}>
          Remove Error
        </button>
        {error?.error}
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger" onClick={() => setisGetData(!isGetData)}>Fetch Error</button>
      </div>
    );
  }
  return <div>{errorContent}</div>;
}
export default ErrorList;
