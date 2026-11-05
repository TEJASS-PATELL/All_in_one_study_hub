const governmentExamDetails = {
  eligibility: JSON.stringify(["Eligibility depends on the official notification.", "Check age, education, and category requirements before applying."]),
  examPattern: JSON.stringify(["Review the latest official syllabus and exam pattern."]),
  examDate: "Check official notification",
  fees: "As per official notification",
  attemptLimit: "As per official rules",
  salary: "As per post and pay level",
  examMode: "As announced by the recruiting authority",
};

export const demoGovernmentExams = [
  { ...governmentExamDetails, id: "demo-upsc", category: "Civil Services", title: "UPSC Civil Services Examination", desc: "Demo listing: explore the exam details and use the study-planning tools.", name: "UPSC", link: "https://upsc.gov.in" },
  { ...governmentExamDetails, id: "demo-gate", category: "Engineering", title: "Graduate Aptitude Test in Engineering (GATE)", desc: "Demo listing for engineering graduates preparing for postgraduate study and technical roles.", name: "GATE", link: "https://gate2025.iitr.ac.in" },
  { ...governmentExamDetails, id: "demo-neet", category: "Medical", title: "National Eligibility cum Entrance Test (NEET)", desc: "Demo listing for students exploring medical entrance preparation.", name: "NTA", link: "https://exams.nta.ac.in/NEET" },
  { ...governmentExamDetails, id: "demo-clat", category: "Law Exams", title: "Common Law Admission Test (CLAT)", desc: "Demo listing for undergraduate and postgraduate law entrance preparation.", name: "CLAT Consortium", link: "https://consortiumofnlus.ac.in" },
  { ...governmentExamDetails, id: "demo-ibps", category: "Banking & Finance", title: "IBPS Common Recruitment Process", desc: "Demo listing for candidates exploring public-sector bank recruitment.", name: "IBPS", link: "https://www.ibps.in" },
  { ...governmentExamDetails, id: "demo-nda", category: "Defense Exams", title: "National Defence Academy Examination", desc: "Demo listing for candidates interested in officer-entry defence examinations.", name: "UPSC", link: "https://upsc.gov.in" },
  { ...governmentExamDetails, id: "demo-rrb", category: "Railway Exams", title: "Railway Recruitment Board Exams", desc: "Demo listing for candidates exploring railway recruitment opportunities.", name: "Indian Railways", link: "https://www.rrbcdg.gov.in" },
  { ...governmentExamDetails, id: "demo-ctet", category: "Teaching & Education", title: "Central Teacher Eligibility Test (CTET)", desc: "Demo listing for aspiring teachers preparing for eligibility examinations.", name: "CTET", link: "https://ctet.nic.in" },
];

export const demoPrivateJobs = [
  { id: "demo-engineering", category: "Core Engineering", title: "Graduate Engineer Trainee", desc: "Demo role covering entry-level engineering opportunities and common hiring expectations.", syllabus: "Core engineering concepts and problem solving", selectionStage: "Application, aptitude test, technical interview", skills: "Engineering fundamentals, communication, teamwork", tips: "Review role requirements and practice explaining your projects." },
  { id: "demo-sales", category: "Sales & Marketing", title: "Sales and Marketing Associate", desc: "Demo role covering customer discovery, communication, and campaign fundamentals.", syllabus: "Sales fundamentals, market research, customer engagement", selectionStage: "Application, recruiter discussion, role interview", skills: "Communication, research, presentation", tips: "Prepare concise examples that show customer impact." },
  { id: "demo-finance", category: "Finance & Accounting", title: "Junior Finance Analyst", desc: "Demo role covering entry-level analysis, reporting, and finance operations.", syllabus: "Accounting fundamentals, spreadsheet analysis, reporting", selectionStage: "Application, aptitude test, finance interview", skills: "Excel, attention to detail, analytical thinking", tips: "Practice explaining how you validate figures and assumptions." },
  { id: "demo-support", category: "Customer Support", title: "Customer Support Associate", desc: "Demo role covering customer communication and issue resolution.", syllabus: "Product knowledge, support workflows, customer scenarios", selectionStage: "Application, communication assessment, interview", skills: "Empathy, writing, troubleshooting", tips: "Use clear examples of resolving a customer issue." },
  { id: "demo-hr", category: "Human Resources", title: "Human Resources Coordinator", desc: "Demo role covering recruitment coordination and employee support.", syllabus: "Recruitment basics, HR operations, workplace communication", selectionStage: "Application, recruiter screen, role interview", skills: "Organization, communication, confidentiality", tips: "Show how you handle sensitive information responsibly." },
  { id: "demo-design", category: "Design & Multimedia", title: "Junior Product Designer", desc: "Demo role covering user-centered design and portfolio-led hiring.", syllabus: "Design process, prototyping, accessibility, visual design", selectionStage: "Portfolio review, design exercise, interview", skills: "Figma, prototyping, user research", tips: "Walk through the decisions and outcomes in one portfolio project." },
];
