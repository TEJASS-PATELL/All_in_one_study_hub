import ITJobsList from '../../Components/ITJobs/ITJobs'
import Itjobpeperation from '../../Components/ITJobs/Itjobpeperation'
import ITchannels from '../../Components/ITJobs/ITchannels'
import React from "react";

export default function ITJobsearch() {
  return (
    <>
    <ITJobsList />
    <ITchannels />
    <Itjobpeperation />
    <h1 style={{ textAlign: "center", marginBottom: "25px", fontSize: "2rem", color: "black"}}>
        Stay connected! Exciting updates are coming soon....
    </h1>
    </>
  )
}
