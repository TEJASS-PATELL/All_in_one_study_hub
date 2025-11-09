import React from 'react'
import CompanyScroller from '../Components/CompanyScroller'
import ITJobsList from '../Components/ITJobs'
import Itjobpeperation from '../Components/ITJobs/Itjobpeperation'
import ITchannels from '../Components/ITchannels'

export default function ITJobsearch() {
  return (
    <>
    <ITJobsList/>
    <ITchannels />
    <Itjobpeperation />
    </>
  )
}
