import PrivateExams from '../../Components/PrivateJobs/PrivateExams'
import PrivatePreparation from '../../Components/PrivateJobs/PrivatePreparation'
import PrivateTop from '../../Components/PrivateJobs/PrivateTop'
import React from "react";

export default function PrivateJobSearch() {
  return (
    <>
    <PrivateTop />
    <PrivateExams />
    <PrivatePreparation />
    <h1 style={{ textAlign: "center", marginBottom: "25px", fontSize: "2rem", color: "black"}}>
        Stay connected! More resources are coming soon....
    </h1>
    </>
  )
}
