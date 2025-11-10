import Exams from '../../Components/GovernmentJobs/Exams'
import PreparationSection from '../../Components/GovernmentJobs/Preperation'
import Top from '../../Components/GovernmentJobs/Top'

function GovJobSearch() {
  return (
    <>
      <Top />
      <Exams />
      <PreparationSection />
      <h1 style={{ textAlign: "center", marginBottom: "25px", fontSize: "2rem", color: "black"}}>
        Stay connected! Exciting updates are coming soon....
      </h1>
    </>
  )
}

export default GovJobSearch