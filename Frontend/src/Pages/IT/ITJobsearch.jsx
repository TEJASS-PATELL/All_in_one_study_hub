import ITJobsList from '../../components/ITJobs/ITJobs'
import Itjobpeperation from '../../components/ITJobs/Itjobpeperation'
import ITchannels from '../../components/ITJobs/ITchannels'
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
