import React from "react";
import Jobitem from "./components/Jobitem";

const Joblistitems = ({ jobs }) => {
  return (
    <>
      {jobs.map((job) => (
        <Jobitem key={job.jobid} job={job} />
      ))}
    </>
  );
};

export default Joblistitems;