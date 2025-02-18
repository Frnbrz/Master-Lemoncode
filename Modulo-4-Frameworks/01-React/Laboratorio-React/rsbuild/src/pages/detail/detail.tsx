import React from "react";
import { Link, useParams } from "react-router-dom";

const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <header>
        <h2>Hello from Detail page</h2>
      </header>
      <h3>User Id: {id}</h3>
      <Link to="/list">Back to list page</Link>
    </>
  );
};

export default DetailPage
