import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const exams = await prisma.exam.createMany({
    data: [
      {
        title: "GATE",
        desc: "The Graduate Aptitude Test in Engineering (GATE) is an all-India examination conducted jointly by IITs and IISc for admission to postgraduate programs like M.Tech, MS, and Ph.D. The GATE exam is also used by many Public Sector Undertakings (PSUs) for recruitment of engineers. The exam evaluates a candidate's understanding of undergraduate-level subjects in engineering and science, along with the ability to solve real-world engineering problems. It is considered one of the most prestigious exams for engineering graduates in India.",
        link: "https://gate.iitk.ac.in/",
        name: "GATE Official Website",
        category: "Engineering",
        eligibility: JSON.stringify([
          "Age Limit: There is no upper age limit for GATE. Any engineering graduate can apply.",
          "Minimum Qualification: A Bachelor's degree in Engineering/Technology (B.E/B.Tech/B.Sc) or equivalent from a recognized university. Final-year students of the qualifying degree can also apply.",
          "Other Requirements: Candidates should have a valid GATE score for PSU recruitment."
        ]),
        examPattern: JSON.stringify([
          "Type of Questions: Consists of multiple-choice questions (MCQs) and numerical answer type (NAT) questions.",
          "Assessment: The questions assess candidates' comprehension of engineering concepts, including mathematics, analytical reasoning, and technical knowledge in various engineering subjects.",
          "Duration: GATE has a 3-hour time duration.",
          "Structure: Divided into sections based on the selected engineering discipline."
        ]),
        fees: 'General/OBC: ₹2000 , SC/ST/PwD/Female : ₹1000',
        attemptLimit: "No limit",
        salary: "Typical fresh PSU jobs through GATE offer between ~₹5 lakhs and ~₹15 lakhs per annum. With experience and in larger PSUs the CTC may go up to ~₹14 lakhs or more.",
        examMode: "Online (Computer Based Test)",
        examDate: "The GATE exam is usually conducted in February every year. For instance, GATE 2026 is scheduled for February 7, 8, 14, and 15, 2026. Candidates are advised to regularly check the official website time to time for the latest updates and any changes in the schedule."
      },
      {
        title: "UPSC ESE (IES)",
        desc: "The Engineering Services Examination (ESE), also known as IES, is one of the most competitive exams conducted by the Union Public Service Commission (UPSC). It is aimed at recruiting Class-1 engineering officers in government ministries and departments, including Indian Railways, CPWD, and various other government organizations. The exam tests candidates' technical knowledge, analytical skills, and engineering aptitude for officer-level roles. Successful candidates are appointed to prestigious posts, offering excellent career growth opportunities.",
        link: "https://www.upsc.gov.in/",
        name: "UPSC ESE Website",
        category: "Engineering",
        eligibility: JSON.stringify([
          "Age Limit: 21-30 years (Age relaxation is available for candidates from SC/ST, OBC, and other reserved categories as per government rules).",
          "Minimum Qualification: A Bachelor's degree in Engineering (B.E/B.Tech) from a recognized university.",
          "Other Requirements: Candidates should have completed or be in the final year of their engineering degree in one of the relevant disciplines (Civil, Mechanical, Electrical, Electronics & Telecommunication Engineering)."
        ]),
        examPattern: JSON.stringify([
          "Stage I: Preliminary Exam - Objective type questions. (Paper-I: General Studies and Engineering Aptitude, Paper-II: Engineering Discipline Specific)",
          "Stage II: Mains Exam - Descriptive type questions. (Two conventional papers in Engineering Discipline Specific)",
          "Stage III: Personality Test (Interview).",
          "Assessment: The exam covers subjects related to the specific engineering discipline, general studies, and engineering aptitude. The interview is designed to assess the candidate's personality and technical knowledge in depth."
        ]),
        fees: 'General/OBC : ₹200 , Female/SC/ST/PwD : No fees',
        attemptLimit: "No restriction, subject to age limit",
        salary: "For entry-level engineering officers (Class-1 Gazetted) recruited via ESE, the basic pay starts around ₹56,100/month (Level 10) with gross salary including allowances typically ~₹60,000-₹65,000/month at the beginning.",
        examMode: "Offline (Pen & Paper Based) for Mains, Prelims is OMR based.",
        examDate: "The UPSC Engineering Services Examination (ESE) is held in multiple stages — Preliminary, Mains, and Interview. The Preliminary Exam for ESE 2026 is scheduled for February 8, 2026 (Sunday). Candidates should visit the official UPSC website regularly for official notifications, timetable updates, and admit card details."
      },
      {
        title: "SSC JE",
        desc: "The Staff Selection Commission (SSC) Junior Engineer (JE) exam is held for recruitment to various engineering positions in government ministries and departments. This includes posts in CPWD (Central Public Works Department), MES (Military Engineering Services), BRO (Border Roads Organization), and others. The SSC JE exam is an opportunity for engineers to work in the public sector, handling the planning, designing, and implementation of various civil, mechanical, and electrical projects.",
        link: "https://ssc.nic.in/",
        name: "SSC Official Website",
        category: "Engineering",
        eligibility: JSON.stringify([
          "Age Limit: Up to 30 years for CPWD & CWC, Up to 32 years for MES (Varies by department and post, age relaxation available as per government norms for reserved categories).", // More specific
          "Minimum Qualification: A Bachelor's degree or a Diploma in Civil, Electrical, Mechanical Engineering, or a related discipline from a recognized university or institution.",
          "Other Requirements: Some positions may require specific qualifications or work experience as detailed in the notification."
        ]),
        examPattern: JSON.stringify([
          "Paper 1: Computer-based test (CBT) with objective-type questions.",
          "  - General Intelligence & Reasoning (50 Marks)",
          "  - General Awareness (50 Marks)",
          "  - Part A: General Engineering (Civil & Structural) OR Part B: General Engineering (Electrical) OR Part C: General Engineering (Mechanical) (100 Marks)",
          "Paper 2: Descriptive type test (Written examination) to assess the candidate's technical knowledge in their engineering discipline. (300 Marks, 2 hours)",
          "Assessment: The exam assesses a candidate's understanding of basic engineering principles and their ability to solve engineering problems."
        ]),
        fees: 'General/OBC : ₹100 , Women/SC/ST/PwD/ESM : No fees',
        attemptLimit: "No limit, subject to age and eligibility criteria",
        examDate: "The SSC Junior Engineer (JE) examination is usually conducted once a year. The Paper 1 (Computer-Based Test) is generally held between October and November, while Paper 2 (Descriptive Test) is conducted a few months later, typically in December or January. The exact dates can vary each year depending on SSC's annual exam calendar. Candidates are strongly advised to regularly visit the official SSC website to check the latest notifications, exam schedules, and admit card release updates.",
        salary: "The average in-hand salary of an SSC Junior Engineer ranges between ₹44,000 – ₹52,000 per month at the entry level, depending on the posting city and allowances. The pay scale is as per Level-6 (₹35,400 – ₹1,12,400) under the 7th Central Pay Commission. In addition to the basic pay, JEs receive DA, HRA, TA, and other government benefits such as pension, medical facilities, and annual increments, making the overall gross salary approximately ₹60,000 – ₹65,000 per month.",
        examMode: "The SSC Junior Engineer (JE) examination is conducted in **two stages** — Paper 1 is a **Computer-Based Test (CBT) conducted online**, and Paper 2 is a **Descriptive Written Exam conducted offline (pen-and-paper mode)** at designated examination centres."
      },
      {
        title: "ISRO Scientist/Engineer Exam",
        desc: "The ISRO Scientist/Engineer exam is held to recruit engineers for the prestigious Indian Space Research Organisation (ISRO). Engineers selected through this exam are assigned roles in ISRO’s satellite missions, rocket development, space exploration projects, and more. This exam is considered one of the most sought-after exams in the country for those aspiring to work in the space sector. Successful candidates contribute directly to India’s space research and development initiatives.",
        link: "https://www.isro.gov.in/Careers.html",
        name: "ISRO Careers",
        category: "Engineering",
        eligibility: JSON.stringify([
          "Age Limit: Generally 28 years (can be 30 for some posts, age relaxation for SC/ST/OBC/PwD categories as per government rules).",
          "Minimum Qualification: A first-class B.E/B.Tech degree or equivalent in a relevant engineering discipline (e.g., Electronics, Mechanical, Computer Science) with an aggregate minimum of 65% marks or CGPA 6.84/10.",
          "Other Requirements: Candidates might also be recruited through GATE scores for certain positions/disciplines."
        ]),
        examPattern: JSON.stringify([
          "Selection Process: Typically involves a written test followed by an interview.",
          "Written Test: Multiple-choice questions that assess candidates' knowledge in their respective engineering disciplines.",
          "  - The test evaluates analytical reasoning, technical problem-solving, and subject knowledge.",
          "Interview: Based on the written test results, selected candidates are called for interviews to assess personality and in-depth technical knowledge.",
          "GATE Score Based Recruitment: For some posts, ISRO also shortlists candidates based on their GATE scores followed by an interview."
        ]),
        fees: 'General/OBC/EWS : ₹250 (Application Fee) + ₹500 (Processing fee if appearing for written test, refundable for certain categories who appear) , Women/SC/ST/PwD/Ex-Servicemen : No Application Fee (Processing fee may apply and be refundable)',
        attemptLimit: "No specific limit mentioned, subject to age and eligibility criteria",
        salary: "The average starting salary of an ISRO Scientist/Engineer 'SC' is approximately ₹85,000 to ₹90,000 per month, including allowances such as DA, HRA, and TA. The basic pay is set at Level 10 (₹56,100 – ₹1,77,500) as per the 7th Pay Commission. With experience, promotions to higher levels (e.g., Scientist 'SD', 'SE', etc.) can increase the gross salary to over ₹1.5 lakh per month. Additional benefits include medical facilities, provident fund, pension, and housing allowance.",
        examMode: "Online (Computer Based Test) for written exam",
        examDate: "The ISRO Scientist/Engineer exam is generally conducted between April and June each year, depending on the recruitment cycle and vacancies. However, exact exam dates vary by discipline and are announced through the official notification. Candidates are advised to regularly check the ISRO careers portal for the latest updates and recruitment schedules."
      },
      {
        title: "DRDO Scientist ‘B’ (CEPTAM/DRDO RAC)",
        desc: "The Defence Research and Development Organisation (DRDO) conducts the Scientist ‘B’ recruitment through the CEPTAM (Centre for Personnel Talent Management) exam and/or through GATE scores via RAC (Recruitment & Assessment Centre). The DRDO Scientist ‘B’ exam is a prestigious opportunity for engineers who wish to contribute to India’s defense and military research programs. Scientists recruited through this exam are involved in cutting-edge research in the fields of weapons, aeronautics, communication systems, and more.",
        link: "https://www.drdo.gov.in/careers / https://rac.gov.in/", // Added RAC link
        name: "DRDO Official Site / RAC Website",
        category: "Engineering",
        eligibility: JSON.stringify([
          "Age Limit: Not exceeding 28 years for General category (relaxation for SC/ST/OBC candidates as per government norms). Upper age limit can be higher for specific disciplines or Ph.D. holders.",
          "Minimum Qualification: First Class Bachelor's degree in Engineering/Technology in the relevant discipline from a recognized university. OR Master's degree in Science for some posts.",
          "Other Requirements: Candidates must have a valid GATE score for most disciplines (recruitment via RAC). For some specific roles or through CEPTAM (non-gazetted), a separate written exam might be conducted."
        ]),
        examPattern: JSON.stringify([
          "Recruitment through GATE (via RAC):",
          "  - Shortlisting based on valid GATE scores in the respective discipline.",
          "  - Personal Interview for shortlisted candidates.",
          "  - Final selection based on GATE score (80% weightage) and Interview (20% weightage) - this can vary.",
          "Recruitment through CEPTAM (if applicable for Scientist B, though CEPTAM mostly handles other posts):",
          "  - Tier I: Screening Test (Objective type).",
          "  - Tier II: Main Exam (Descriptive type, for some posts).",
          "  - Interview for shortlisted candidates.",
          "Written Test (if conducted directly by RAC for specific disciplines without GATE):",
          "  - Objective or descriptive type questions assessing technical knowledge.",
          "  - Followed by an interview."
        ]),
        fees: 'General/EWS/OBC male candidates : ₹100 (for RAC) , SC/ST/PwD/Women candidates : No fees (for RAC)',
        attemptLimit: "No specific limit mentioned, subject to age and GATE validity/exam notification",
        salary: "The salary for DRDO Scientist ‘B’ is based on Pay Level 10 (₹56,100 – ₹1,77,500) as per the 7th CPC. The initial in-hand salary is approximately ₹85,000 – ₹95,000 per month including allowances such as Dearness Allowance (DA), House Rent Allowance (HRA), and Transport Allowance (TA). The total salary may vary depending on the posting location and applicable government benefits.",

        examDate: "The DRDO Scientist ‘B’ (RAC/CEPTAM) recruitment is not conducted on a fixed schedule. Vacancies are announced as per requirement, typically once every 1–2 years. Candidates should regularly check the official DRDO and RAC websites for the latest updates on application release, exam dates, and interview schedules.",
        examMode: "Primarily through GATE scores (Online) followed by Interview. If written exam by RAC/CEPTAM, it's usually Online (CBT)."
      },

      {
        title: "BARC OCES/DGFS",
        desc: "The Bhabha Atomic Research Centre (BARC) conducts the Orientation Course for Engineering Graduates and Science Postgraduates (OCES) and DAE Graduate Fellowship Scheme (DGFS) exam for recruitment to the post of Scientific Officer. The OCES/DGFS program provides an opportunity for engineers and science postgraduates to work in the field of nuclear science and technology at BARC and other DAE units. Selected candidates undergo a one-year OCES program or a two-year DGFS M.Tech program at select institutes before placement.",
        link: "https://barcocesexam.in/",
        name: "BARC OCES Portal",
        category: "Engineering/Science",
        eligibility: JSON.stringify([
          "Age Limit: General Category - 26 years; OBC - 29 years; SC/ST - 31 years (age relaxation for PwD categories). For DGFS, age limits might slightly differ.",
          "Minimum Qualification: B.E./B.Tech./B.Sc. (Engineering)/5-year Integrated M.Tech. with a minimum of 60% aggregate marks in one of the specified engineering disciplines. OR M.Sc. in relevant science disciplines with specific requirements.",
          "Other Requirements: Candidates can apply based on Online Examination conducted by BARC OR through GATE scores."
        ]),
        examPattern: JSON.stringify([
          "Selection Process: Two-fold process:",
          "  1. Screening: Either through an Online Examination conducted by BARC OR based on GATE score.",
          "  2. Selection Interviews: Candidates shortlisted based on Online Exam or GATE score are called for Selection Interviews.",
          "Online Examination:",
          "  - Consists of multiple-choice questions.",
          "  - Duration: Typically 2 hours.",
          "  - Syllabus: Based on the candidate's engineering/science discipline.",
          "  - Negative marking is applicable.",
          "GATE Score Based Shortlisting:",
          "  - Candidates with valid GATE scores in eligible disciplines can opt for shortlisting based on their scores.",
          "Selection Interview:",
          "  - In-depth assessment of technical knowledge and aptitude."
        ]),
        fees: 'Male (General/OBC) : ₹500 , Female/SC/ST/PwD/DoDpkia (Dependents of Defence Personnel Killed in Action) : No fees',
        attemptLimit: "No specific limit mentioned, subject to age and eligibility",
        salary: "During training, OCES trainees receive a stipend of ₹55,000 per month along with a one-time book allowance of ₹18,000. DGFS fellows also receive ₹55,000 per month along with reimbursement of M.Tech. tuition fees and project-related expenses. After successful completion of the training program, candidates are appointed as Scientific Officer ‘C’ in Level 10 of the Pay Matrix (₹56,100 – ₹1,77,500), with a gross monthly salary of approximately ₹1,05,000 – ₹1,10,000 including allowances such as DA, HRA, and TA.",

        examDate: "The BARC OCES/DGFS exam is typically conducted once every year, usually between March and April for the online test, followed by interviews around May–June. However, the exact schedule may vary each year based on administrative decisions. Candidates are advised to regularly check the official BARC OCES portal for the latest updates regarding notification release, exam dates, and interview schedules.",

        examMode: "Online (Computer Based Test) for BARC Exam"
      },
      {
        title: "NEET-PG",
        desc: "The National Eligibility cum Entrance Test for Postgraduate (NEET-PG) is a nationwide examination conducted by the National Board of Examinations in Medical Sciences (NBEMS) for admission to MD, MS, and PG Diploma courses in India. It serves as a single-window entrance test for various postgraduate medical programs across government and private medical colleges. The exam assesses candidates' understanding of medical concepts and clinical knowledge acquired during the MBBS course.",
        link: "https://nbe.edu.in/",
        name: "NEET-PG Official Website",
        category: "Medical",
        eligibility: JSON.stringify([
          "Candidates must possess an MBBS degree or a provisional MBBS pass certificate recognized under the Indian Medical Council Act.",
          "They should have a permanent or provisional registration certificate issued by the Medical Council of India or State Medical Council.",
          "Completion of a one-year internship on or before the prescribed date is mandatory."
        ]),
        examPattern: JSON.stringify([
          "Format: Computer-based test (CBT).",
          "Number of Questions: 200 multiple-choice questions (MCQs).",
          "Duration: 3 hours and 30 minutes.",
          "Marking Scheme: +4 marks for each correct answer, -1 mark for each incorrect response.",
          "Unattempted Questions: No negative marking."
        ]),
        fees: 'General/OBC : ₹4250 , SC/ST/PwD : ₹3250',
        examMode: "Online (Computer Based Test)",
        attemptLimit: "No limit on the number of attempts, subject to eligibility criteria.",
        salary: "Postgraduate medical residents admitted through NEET-PG receive a monthly stipend that typically ranges between ₹45,000 and ₹1,00,000, depending on the state and institution. Government medical colleges generally offer stipends on the higher end of this range. After completing PG programs (MD/MS), doctors earn significantly higher salaries based on specialization, experience, and place of employment — ranging from ₹1 lakh to ₹3 lakh per month in government setups, and often higher in private hospitals.",
        examDate: "The NEET-PG exam is generally conducted once every year, typically in March or April, with results released within a few weeks. For the 2025 session, the exam is expected to follow a similar timeline. However, candidates should regularly check the official NBEMS website for notifications regarding registration, admit cards, and the exact examination schedule, as dates may vary based on official announcements or policy changes."
      },
      {
        title: "AIIMS INI-CET",
        desc: "The Institute of National Importance Combined Entrance Test (INI-CET) is conducted by AIIMS, New Delhi, for admission to postgraduate medical courses such as MD, MS, DM (6 years), MCh (6 years), and MDS at AIIMS and other Institutes of National Importance. The exam evaluates candidates' knowledge and aptitude in various medical subjects and is held twice a year, in January and July sessions.",
        link: "https://www.aiimsexams.ac.in/",
        name: "AIIMS INI-CET Official Website",
        category: "Medical",
        eligibility: JSON.stringify([
          "Candidates must have completed an MBBS degree for MD/MS/DM(6 years)/MCh(6 years)/MD (Hospital Administration), and BDS degree for MDS from a recognized university.",
          "They must have completed the required period of 12 months compulsory rotating internship/practical training on or before the specified date for the respective session.",
          "A minimum of 55% aggregate marks for General/OBC/EWS candidates and 50% for SC/ST candidates is required in the qualifying examination."
        ]),
        examPattern: JSON.stringify([
          "Format: Computer-based test (CBT).",
          "Number of Questions: 200 multiple-choice questions (MCQs).",
          "Duration: 3 hours (180 minutes).",
          "Marking Scheme: +1 mark for each correct answer, -1/3 mark for each incorrect response.",
          "Unattempted Questions: No negative marking."
        ]),
        fees: 'General/OBC/Foreign National/OCI : ₹4,000 , SC/ST/EWS : ₹3,200 , PwBD : Exempted',
        examMode: "Online (Computer Based Test)",
        attemptLimit: "No limit on the number of attempts.",
        salary: "Postgraduate residents selected through the AIIMS INI-CET exam receive a monthly stipend ranging from ₹90,000 to ₹1,20,000 or more during their training period as Junior Residents across Institutes of National Importance (such as AIIMS, JIPMER, PGIMER, and NIMHANS). After completing their postgraduate studies (MD/MS/MDS), doctors’ salaries vary significantly depending on specialization, experience, and whether they work in government or private hospitals, typically ranging between ₹1.2 lakh and ₹3 lakh per month.",

        examDate: "The AIIMS INI-CET exam is conducted twice a year — for the January session and the July session. The January session is usually held in November of the preceding year, while the July session typically takes place in May. Candidates are advised to check the official AIIMS Exams website regularly for updates on registration, admit cards, and confirmed exam schedules, as official dates are subject to change based on notifications released by AIIMS, New Delhi."

      },
      {
        title: "UPSC CMS",
        desc: "The Union Public Service Commission Combined Medical Services Examination (UPSC CMS) is conducted for the recruitment of Medical Officers in various organizations under the Government of India, such as the Indian Railways, Municipal Corporation, and others. The exam assesses candidates' medical knowledge and suitability for Group A medical officer posts in central government services.",
        link: "https://upsc.gov.in/",
        name: "UPSC CMS Official Website",
        category: "Medical",
        eligibility: JSON.stringify([
          "Candidates must have passed the written and practical parts of the final MBBS Examination.",
          "The upper age limit is 32 years as of August 1 of the examination year, with relaxations for various categories as per government norms.",
          "Candidates must be citizens of India or meet other nationality criteria as specified by UPSC."
        ]),
        examPattern: JSON.stringify([
          "Part I: Computer-Based Examination (500 marks total).",
          "  - Paper I: General Medicine and Pediatrics (250 marks, 2 hours duration, 120 questions).",
          "  - Paper II: Surgery, Gynecology & Obstetrics, and Preventive & Social Medicine (250 marks, 2 hours duration, 120 questions).",
          "  - Type of Questions: Multiple Choice Questions (MCQs).",
          "  - Negative Marking: Yes, 1/3rd of the marks assigned to that question will be deducted.",
          "Part II: Personality Test (Interview) for candidates qualifying Part I (100 marks)."
        ]),
        fees: 'General/OBC Male : ₹200 , Female/SC/ST/PwBD : Exempted',
        examMode: "Part I: Online (Computer Based Test), Part II: Offline (Interview)",
        attemptLimit: "No restriction on the number of attempts subject to age limit and eligibility.",
        salary: "Selected candidates through the UPSC Combined Medical Services Examination (CMS) are appointed as Assistant Divisional Medical Officers, General Duty Medical Officers, or equivalent posts under various Government of India organizations such as the Railways, Ordnance Factories, and Municipal Corporations. The salary is as per Pay Level 10 of the 7th CPC Pay Matrix (₹56,100 – ₹1,77,500) along with Non-Practicing Allowance (NPA) and other benefits such as DA, HRA, and TA. The gross monthly salary typically ranges between ₹95,000 and ₹1,10,000 at the start of service, depending on the posting city and allowances.",

        examDate: "The UPSC Combined Medical Services (CMS) Examination is generally conducted once every year, typically in July. The notification is released around April, and the results are declared in stages — written test results followed by interview results. Candidates should regularly check the official UPSC website for the exact schedule, as the dates for notification release, admit card availability, and examination are officially confirmed by the Union Public Service Commission closer to the event."

      },
      {
        title: "ESIC IMO",
        desc: "The Employees' State Insurance Corporation (ESIC) conducts the Insurance Medical Officer (IMO) Grade-II examination to recruit medical officers for ESIC hospitals and dispensaries. The selection process includes a written examination followed by an interview, assessing candidates' medical knowledge and suitability for the role.",
        link: "https://www.esic.gov.in/",
        name: "ESIC Official Website",
        category: "Medical",
        eligibility: JSON.stringify([
          "Candidates must possess an MBBS degree from a recognized university included in the first or second schedule or Part-II of the third schedule (other than licentiate qualifications) to the Indian Medical Council Act, 1956.",
          "Completion of compulsory rotating internship.",
          "The upper age limit is not exceeding 35 years (relaxations for various categories as per government norms).",
          "Candidates must be registered with the Medical Council of India or State Medical Council."
        ]),
        examPattern: JSON.stringify([
          "Phase I: Written Examination (Computer Based Test).",
          "  - Part 1: General Medicine & Pediatrics (100 questions, 100 marks).",
          "  - Part 2: Surgery, Gynaecology & Obstetrics, Preventive & Social Medicine (100 questions, 100 marks).",
          "  - Total Questions: 200 questions.",
          "  - Total Marks: 200 marks.",
          "  - Duration: 2 hours (120 minutes).",
          "  - Negative Marking: Yes, 0.25 marks for each wrong answer.",
          "Phase II: Interview (50 marks) for candidates shortlisted from the written exam."
        ]),
        fees: 'General/OBC : ₹500 , SC/ST/PwBD/Departmental Candidates/Female Candidates/Ex-Servicemen : ₹250 (Refundable upon appearing in the exam)',
        examMode: "Written Exam: Online (Computer Based Test); Interview: Offline",
        attemptLimit: "No specific limit mentioned, subject to age and eligibility criteria.",
        examDate: "The ESIC IMO exam is not conducted annually. The last recruitment exam was held on 30 March 2022. For upcoming notifications, candidates should regularly visit the official ESIC website for updates on exam schedules, application dates, and admit card releases.",
        salary: "Pay Level-10 of the 7th CPC Pay Matrix (₹56,100 – ₹1,77,500) plus Non-Practicing Allowance (NPA) and other admissible allowances. The initial in-hand salary is approximately ₹95,000 to ₹1,15,000 per month depending on posting location and allowances."
      },
      {
        title: "State PSC Medical Officer",
        desc: "State Public Service Commissions (PSCs) conduct examinations to recruit Medical Officers for state government hospitals and health departments. The selection process typically includes a written examination followed by an interview, assessing candidates' medical knowledge and suitability for the role within the state's healthcare system.",
        link: "https://mppsc.mp.gov.in/",
        name: "MPPSC Official Website (Example - Varies by State)",
        category: "Medical",
        eligibility: JSON.stringify([
          "Candidates must possess an MBBS degree or equivalent qualification recognized by the Medical Council of India/National Medical Commission.",
          "Permanent registration with MCI/NMC or State Medical Council.",
          "Age limit: Typically 21 to 40/45 years (varies by state, relaxations for various categories as per state government norms).",
          "Knowledge of local language may be required for some states."
        ]),
        examPattern: JSON.stringify([
          "Selection Process: Generally includes a Written Examination and an Interview.",
          "Written Examination (Objective Type/MCQs):",
          "  - Syllabus covers various medical subjects (e.g., Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, FMT, Medicine, Surgery, OBG, Pediatrics, PSM, etc.).",
          "  - May also include General Knowledge or state-specific topics.",
          "  - Duration and Marks: Vary by state.",
          "Interview: To assess personality, suitability, and in-depth knowledge.",
          "Exact pattern, subjects, marks distribution, and negative marking vary by State PSC."
        ]),
        fees: 'General/Other State candidates : ₹500 (plus portal charges) , SC/ST/OBC(NCL)/PH candidates of MP : ₹250 (plus portal charges) , Correction Charge : ₹50',
        examMode: "Usually Offline (OMR based) or Online (CBT) for written exam; Interview is Offline. Varies by state.",
        attemptLimit: "Generally no limit on attempts, subject to age and eligibility. Varies by state.",
        salary: "Medical Officers recruited through various State Public Service Commissions (PSCs) are typically placed in Pay Level 10 to Level 12 of the respective state pay matrix, along with Non-Practicing Allowance (NPA) and other government benefits. The initial gross salary usually ranges between ₹70,000 and ₹1,20,000 per month, depending on the state, posting location, and experience. Additional allowances such as HRA, DA, and transport allowances are also provided, making the total remuneration attractive for government healthcare positions.",

        examDate: "The State PSC Medical Officer exams are conducted at different times by individual State Public Service Commissions. Each state releases its own official notification detailing the exam dates, application schedule, and interview timelines. Typically, notifications are published between January and August, and the written exams are held within 2–3 months afterward. Candidates are advised to regularly check the respective State PSC official websites (e.g., MPPSC, UPPSC, TNPSC, etc.) for the latest updates, as exam dates and processes vary by state and year."

      },
      {
        title: "NEET MDS",
        desc: "The National Eligibility cum Entrance Test for Master of Dental Surgery (NEET MDS) is a national-level entrance examination conducted by the National Board of Examinations in Medical Sciences (NBEMS) for admission to postgraduate dental courses (MDS) in India. It serves as a single-window entrance test for various dental postgraduate programs across government and private dental colleges. The exam assesses candidates' understanding of dental concepts and clinical knowledge acquired during the BDS course.",
        link: "https://nbe.edu.in/",
        name: "NEET MDS Official Website",
        category: "Medical",
        eligibility: JSON.stringify([
          "Candidates must possess a Bachelor of Dental Surgery (BDS) degree awarded by a university or institute in India and recognized by the Dental Council of India (DCI).",
          "They should have a provisional or permanent registration certificate issued by the DCI or State Dental Council (SDC).",
          "Completion of a one-year compulsory rotatory internship from a DCI recognized/approved college/institute on or before the prescribed date (e.g., June 30, 2024 for NEET MDS 2024)."
        ]),
        examPattern: JSON.stringify([
          "Format: Computer-based test (CBT).",
          "Number of Questions: 240 multiple-choice questions (MCQs), divided into Part A (100 Qs) and Part B (140 Qs).",
          "Duration: 3 hours (180 minutes). No separate time for Part A and Part B.",
          "Marking Scheme: +4 marks for each correct answer, -1 mark for each incorrect response (25% negative marking).",
          "Unattempted Questions: No mark deduction.",
          "Syllabus: Includes Pre-Clinical, Clinical, and Paraclinical topics from the BDS curriculum."
        ]),
        fees: 'General/OBC/EWS : ₹4250 , SC/ST/PwD : ₹3250',
        examMode: "Online (Computer Based Test)",
        attemptLimit: "No limit on the number of attempts, subject to eligibility.",
        salary: "During the MDS program, students usually receive a stipend ranging from ₹40,000 to ₹90,000 per month depending on the state, institution, and department. Government dental colleges generally offer higher stipends than private institutions. After completing MDS, dentists can earn between ₹80,000 to ₹2,00,000+ per month depending on specialization, years of experience, and type of employment — whether in government hospitals, private clinics, or through independent practice.",

        examDate: "The NEET MDS exam is conducted once a year by the National Board of Examinations in Medical Sciences (NBEMS), typically in March. The official notification is generally released around December–January, followed by the online application process. Admit cards are issued about 1–2 weeks before the exam. Candidates should regularly check the official NBEMS website (https://nbe.edu.in/) for the latest updates, as exam dates, application windows, and result timelines are subject to change each year."

      },
      {
        title: "FMGE",
        desc: "The Foreign Medical Graduate Examination (FMGE), also known as the Medical Council of India Screening Test, is a licensure examination conducted by the National Board of Examinations in Medical Sciences (NBEMS) for Indian citizens or Overseas Citizens of India (OCI) who have obtained their medical degrees from colleges outside India and wish to practice medicine in the country. The exam assesses the candidate's knowledge and understanding of medical subjects to ensure they meet the standards required to practice medicine in India.",
        link: "https://nbe.edu.in/",
        name: "FMGE Official Website (NBEMS)",
        category: "Medical",
        eligibility: JSON.stringify([
          "Candidates must be citizens of India or Overseas Citizens of India (OCI).",
          "They must possess a primary medical qualification (MBBS equivalent) from a university/institution outside India, confirmed by the Indian Embassy concerned.",
          "The degree must be recognized by the respective medical authority of that country and listed in the World Directory of Medical Schools.",
          "Candidates must have obtained an eligibility certificate from the National Medical Commission (NMC) prior to applying for the FMGE (if applicable, based on admission date to foreign medical course)."
        ]),
        examPattern: JSON.stringify([
          "Format: Computer-based test (CBT).",
          "Number of Questions: 300 multiple-choice questions (MCQs).",
          "Structure: Divided into two parts (Part A and Part B) of 150 questions each.",
          "Duration: Each part is 2 hours and 30 minutes (150 minutes). Total 5 hours.",
          "Marking Scheme: +1 mark for each correct answer.",
          "Negative Marking: No negative marking.",
          "Qualifying Marks: Candidates must score at least 150 out of 300 marks to pass."
        ]),
        fees: 'All Candidates : ₹7,080 (including GST)',
        examMode: "Online (Computer Based Test)",
        attemptLimit: "No limit on the number of attempts.",
        salary: "After clearing the FMGE and completing the mandatory one-year internship, candidates become eligible to practice medicine in India. During internship, stipends generally range between ₹20,000 to ₹45,000 per month depending on the state and institution. After obtaining permanent registration, doctors can earn between ₹70,000 to ₹2,00,000 per month in government or private hospitals. With experience or independent practice, earnings can exceed ₹3–5 lakh per month depending on specialization and location.",
        examDate: "The FMGE is conducted twice every year by the National Board of Examinations in Medical Sciences (NBEMS) — once in June and once in December. The official notification, application schedule, and admit card release dates are announced on the NBEMS website (https://nbe.edu.in/). Candidates are advised to check the official website regularly for updates, as exam dates may vary slightly each session.",
      },
      {
        title: "Judicial Services Examination (PCS-J)",
        desc: "The Provincial Civil Services – Judicial (PCS-J) examination is an entry-level test for law graduates aspiring to become Civil Judges (Junior Division) in various state judiciaries. It assesses candidates' understanding of civil and criminal law, as well as their aptitude for judicial service.",
        link: "https://www.allahabadhighcourt.in/ (Example: UP) or respective State PSC/High Court website",
        name: "Example: UP Judicial Service Civil Judge (Junior Division) Exam",
        category: "Law Exams",
        eligibility: JSON.stringify([
          "Bachelor's degree in Law (LLB) from a university established by law in India and recognized by the Bar Council of India.",
          "Enrollment as an Advocate under the Advocates Act, 1961 (may not be mandatory for all states at the time of application but often required before joining).",
          "Age limit typically between 22 to 35/38 years (varies by state, relaxations applicable).",
          "Proficiency in the local language of the state may be required."
        ]),
        examPattern: JSON.stringify([
          "Preliminary Examination: Objective type (MCQs) with papers on General Knowledge and Law. Negative marking may apply. This is a screening test.",
          "Main Examination: Descriptive/Written type with papers on Law (Civil, Criminal, Procedural, Local Laws), General Knowledge, and Language (English, local language).",
          "Viva-Voce (Personal Interview): For candidates qualifying the Main Examination, to assess suitability, personality, and legal acumen."
        ]),
        fees: 'General/OBC/EWS : ₹125 (Exam fee ₹100 + Online processing fee ₹25) , SC/ST (of UP) : ₹65 (Exam fee ₹40 + Online processing fee ₹25) , PwD (of UP) : ₹25 (Online processing fee only) , Ex-Servicemen (of UP) : ₹65 (Exam fee ₹40 + Online processing fee ₹25)',
        examMode: "Preliminary: Offline (OMR based) or Online (CBT) depending on state. Main: Offline (Written). Interview: Offline.",
        attemptLimit: "Varies by state (some have attempt limits, many are limited by age).",
        examDate: "The Judicial Services (PCS-J) Examination is conducted by individual State Public Service Commissions or High Courts, depending on the state. The exam schedule varies across states and is not uniform nationwide. Typically, notifications are released once every 1–2 years, depending on vacancies. Candidates should regularly check the official websites of their respective State Public Service Commission or High Court for the latest updates regarding application dates, examination schedules, and admit card releases.",

        salary: "The salary of a Civil Judge (Junior Division) varies slightly by state but generally follows the National Judicial Pay Commission’s recommendations. The starting basic pay is approximately ₹77,840 per month (Pay Level J-1), which can rise up to ₹1,36,520 with experience and promotions. Including allowances such as Dearness Allowance (DA), House Rent Allowance (HRA), and other state-specific benefits, the gross monthly salary ranges from ₹1,00,000 to ₹1,50,000 or more, depending on the state and posting."

      },
      {
        title: "CLAT PG (LL.M. Admissions and PSU Recruitment)",
        desc: "The Common Law Admission Test for Postgraduate (CLAT PG) is a national-level entrance exam for admission to LL.M. programs in National Law Universities (NLUs) and for recruitment by some Public Sector Undertakings (PSUs) for legal positions.",
        link: "https://consortiumofnlus.ac.in/",
        name: "CLAT PG Portal",
        category: "Law Exams",
        eligibility: JSON.stringify([
          "An LLB Degree or an equivalent examination with a minimum of 50% of marks or its equivalent grade in case of candidates belonging to General/OBC/PwD/NRI/PIO/OCI categories.",
          "Minimum of 45% of marks or its equivalent grade in case of candidates belonging to SC/ST categories.",
          "Candidates appearing in the qualifying examination in April/May of the exam year are also eligible to apply."
        ]),
        examPattern: JSON.stringify([
          "Format: Centre-based, offline test.",
          "Duration: 2 hours (120 minutes).",
          "Type of Questions: Objective type, Multiple Choice Questions (MCQs).",
          "Number of Questions: 120 questions.",
          "Total Marks: 120 marks.",
          "Marking Scheme: +1 mark for each correct answer.",
          "Negative Marking: -0.25 marks for each incorrect answer.",
          "Syllabus: Comprehension based questions from subjects like Constitutional Law, Jurisprudence, Administrative Law, Law of Contract, Torts, Family Law, Criminal Law, Property Law, Company Law, Public International Law, Tax Law, Environmental Law, Labour & Industrial Law."
        ]),
        fees: 'General/OBC/PwD/NRI/PIO/OCI : ₹4,000 , SC/ST/BPL : ₹3,500',
        examMode: "Offline (Pen and Paper based)",
        attemptLimit: "No upper age limit or attempt limit.",
        examDate: "The CLAT PG examination is usually conducted once every year in the month of December. The application process typically begins around July–August, with admit cards released in November. Candidates should regularly check official notifications for any updates regarding the exact exam date, as schedules may vary slightly each year. The exam is conducted in offline, pen-and-paper mode across multiple test centres in India.",

        salary: "For LL.M. admissions through CLAT PG, there is no direct salary component, as it serves as an entrance test for postgraduate law programs in National Law Universities. However, for Public Sector Undertaking (PSU) recruitment through CLAT PG scores, the pay scale usually falls under E1 or E2 grade, with a basic pay ranging from ₹60,000 to ₹1,80,000 per month. Including allowances and benefits, the gross annual salary can range from ₹9 lakh to ₹20 lakh or more, depending on the PSU and position."

      },
      {
        title: "Assistant Prosecution Officer (APO)",
        desc: "The Assistant Prosecution Officer exam is conducted by various State Public Service Commissions to recruit legal professionals responsible for conducting prosecutions on behalf of the state in criminal cases in subordinate courts.",
        link: "https://uppsc.up.nic.in/ (Example: UPPSC)",
        name: "Example: UPPSC APO",
        category: "Law Exams",
        eligibility: JSON.stringify([
          "Bachelor's degree in Law (LLB) from a recognized university.",
          "Age limit typically between 21 to 40 years (varies by state, relaxations applicable).",
          "Some states may require practice as an advocate for a certain period."
        ]),
        examPattern: JSON.stringify([
          "Preliminary Examination: Objective type (MCQs) covering Law and General Studies/General Knowledge. Negative marking may apply.",
          "Main Examination: Descriptive/Written type covering Law subjects (e.g., IPC, CrPC, Evidence Act, Police Act/Regulations) and General Knowledge/Hindi.",
          "Interview: For candidates qualifying the Main Examination."
        ]),
        fees: 'General/OBC/EWS : ₹125 , SC/ST (of the state) : ₹65 , PwD (of the state) : ₹25',
        examMode: "Preliminary: Offline (OMR) or Online (CBT). Main: Offline (Written). Interview: Offline. (Varies by state)",
        attemptLimit: "Generally limited by age, but some states might have attempt restrictions. Varies by state.",
        examDate: "The Assistant Prosecution Officer (APO) examination is typically conducted once every 1–2 years, depending on the vacancy cycle announced by the respective State Public Service Commission. For example, in Uttar Pradesh, the UPPSC APO exam process usually starts with notification releases around January–March, prelims held in mid-year (June–August), and mains/interview stages later in the year. The exact dates vary by state and official notification.",

        salary: "The Assistant Prosecution Officer is a Class-II Gazetted Officer post under the state government. The pay scale generally corresponds to Level 7 or Level 8 of the state pay matrix, with an initial basic pay ranging from ₹44,900 to ₹1,42,400 depending on the state. The gross monthly salary typically falls between ₹60,000 and ₹90,000 including allowances such as DA, HRA, and other benefits."

      },
      {
        title: "Delhi Higher Judicial Services Examination (DHJS)",
        desc: "The Delhi Higher Judicial Services Examination is conducted by the High Court of Delhi to recruit experienced advocates for the position of District Judges. It aims to select candidates with substantial legal practice for higher judiciary roles.",
        link: "https://delhihighcourt.nic.in/",
        name: "Delhi HJS Exam",
        category: "Law Exams",
        eligibility: JSON.stringify([
          "Must be a citizen of India.",
          "Must have been continuously practicing as an Advocate for not less than 7 years as on the last date of receipt of applications.",
          "Age limit: Must have attained the age of 35 years and have not attained the age of 45 years as on a specified date (relaxations applicable as per norms)."
        ]),
        examPattern: JSON.stringify([
          "Preliminary Examination (DHJS Pre): Objective type (MCQs) covering General Knowledge, Current Affairs, English Language, and Law (Constitutional Law, CPC, CrPC, IPC, Evidence Act, Contract Law, etc.). Minimum qualifying marks apply. This is a screening test.",
          "Main Examination (DHJS Mains): Descriptive/Written type consisting of papers on General Knowledge & Language, Law-I (Civil Law), Law-II (Criminal Law), and Law-III (Mixed subjects).",
          "Viva-Voce (Interview): For candidates who qualify the Main Examination. Minimum qualifying marks apply."
        ]),
        fees: 'General : ₹2000 , SC/ST/PwD : ₹500',
        examMode: "Preliminary: Offline (OMR). Main: Offline (Written). Interview: Offline.",
        attemptLimit: "No specific limit on attempts mentioned, subject to age and eligibility.",
        examDate: "The Delhi Higher Judicial Services (DHJS) Examination is conducted by the High Court of Delhi based on vacancy availability. The recruitment cycle usually occurs every 1–2 years. For the latest session, the DHJS 2024 Notification was released in April 2024, with the Preliminary Examination held on May 12, 2024, and the Mains Examination conducted in July 2024. Candidates are advised to regularly check the official Delhi High Court website for updates regarding future notifications, as exact dates vary with each recruitment cycle.",

        salary: "The District Judge (Entry Level) under the Delhi Higher Judicial Services receives a pay scale of ₹1,44,840 – ₹1,94,660 (Level J-5) as per the National Judicial Pay Commission. Including Dearness Allowance (DA), House Rent Allowance (HRA), and other judicial perks, the gross monthly salary is approximately ₹2,00,000 – ₹2,50,000+ initially. Additional benefits include official accommodation, vehicle allowance, medical benefits, and other privileges as applicable to higher judicial officers."

      },
      {
        title: "SEBI Grade A Legal Officer Examination",
        desc: "The Securities and Exchange Board of India (SEBI) conducts the Grade A (Assistant Manager) - Legal Stream Examination to recruit legal professionals responsible for regulatory, compliance, and enforcement activities in the securities market.",
        link: "https://www.sebi.gov.in/careers.html",
        name: "SEBI Careers",
        category: "Law Exams",
        eligibility: JSON.stringify([
          "Master’s Degree in Law from a recognized University / Institute OR Bachelor’s Degree in Law from a recognized University / Institute.",
          "Age limit: Not exceeding 30 years as on a specified date (relaxations applicable as per norms)."
        ]),
        examPattern: JSON.stringify([
          "Phase I (Online Screening Exam - 200 Marks):",
          "  - Paper 1 (100 Marks, 60 mins): MCQs on General Awareness, English Language, Quantitative Aptitude, Test of Reasoning.",
          "  - Paper 2 (100 Marks, 40 mins): MCQs on specialized subject related to Legal stream.",
          "  - Aggregate cut-off of 40%.",
          "Phase II (Online Examination - 200 Marks):",
          "  - Paper 1 (100 Marks, 60 mins): English (Descriptive Test - Precis Writing, Essay writing, Comprehension).",
          "  - Paper 2 (100 Marks, 40 mins or as specified): MCQs on specialized subject related to Legal stream.",
          "  - Aggregate cut-off of 50% (weightage of 1/3rd for Paper 1 and 2/3rd for Paper 2).",
          "Phase III: Interview. (Candidates shortlisted based on Phase II marks)."
        ]),
        fees: 'General/OBC/EWS : ₹1,000 (Application fee including intimation charges) , SC/ST/PwBD : ₹100 (Intimation charges only)',
        examMode: "Online (Phase I & Phase II), Offline (Interview)",
        attemptLimit: "No specific restriction, subject to age and eligibility criteria.",
        examDate: "The SEBI Grade A (Legal) Examination is conducted based on vacancy availability—typically every 1–2 years. The latest SEBI Grade A Legal Officer recruitment was announced in June 2023, with Phase I held on July 5, 2023, and Phase II on September 9, 2023. The next recruitment cycle is expected in 2025, depending on SEBI’s manpower requirements. Aspirants should regularly check the SEBI Careers portal for official updates and notification releases.",

        salary: "The SEBI Grade A Legal Officer (Assistant Manager) is placed in the pay scale of ₹44,500–₹89,150 (17 years) as per SEBI’s pay structure. Including allowances such as Dearness Allowance, Local Allowance, Grade Allowance, and others, the gross monthly emoluments are approximately ₹1,49,500 per month without accommodation and around ₹1,11,000 per month with SEBI-provided housing. Employees also receive benefits like leave fare concession, medical expenses, education allowance, and performance-linked incentives."

      },
      {
        title: "IBPS Specialist Officer (Law Officer - Scale I)",
        desc: "The Institute of Banking Personnel Selection (IBPS) conducts the Specialist Officer (SO) Examination for the recruitment of Law Officers (Scale I) in various public sector banks. These officers handle legal affairs, documentation, compliance, and regulatory matters for the banks.",
        link: "https://www.ibps.in/",
        name: "IBPS SO Law Officer",
        category: "Law Exams",
        eligibility: JSON.stringify([
          "A Bachelor Degree in Law (LLB) and enrolled as an advocate with Bar Council.",
          "Age limit: Typically 20 to 30 years (relaxations applicable as per norms)."
        ]),
        examPattern: JSON.stringify([
          "Preliminary Examination (Qualifying Nature):",
          "  - English Language (50 Qs, 25 Marks, 40 mins).",
          "  - Reasoning (50 Qs, 50 Marks, 40 mins).",
          "  - General Awareness with Special Reference to Banking Industry (50 Qs, 50 Marks, 40 mins).",
          "  - Total: 150 Qs, 125 Marks, 120 mins.",
          "Main Examination:",
          "  - Professional Knowledge (Law) (60 Qs - Objective type, 60 Marks, 45 mins).",
          "Interview: Conducted for candidates shortlisted from Main Examination."
        ]),
        fees: 'General/OBC/EWS : ₹850 , SC/ST/PwBD : ₹175',
        examMode: "Online (Preliminary and Main Exams), Offline (Interview)",
        attemptLimit: "No restriction on the number of attempts, subject to age limit.",
        salary: "The IBPS Law Officer (Scale I) is placed in the Junior Management Grade Scale-I (JMGS-I) with a basic pay of ₹48,480 and increments as ₹48,480–₹2,000(7)–₹62,480–₹2,340(2)–₹67,160–₹2,680(7)–₹85,920. Including Dearness Allowance, House Rent Allowance, Special Allowance, and other benefits, the gross monthly salary is approximately ₹70,000–₹85,000 depending on the posting location.",

        examDate: "As per the official IBPS Specialist Officer (SO) 2025 schedule, the Preliminary Examination for Law Officer (Scale I) will be held on August 30, 2025, while the Main Examination is scheduled for November 9, 2025. The detailed notification and application process are expected to release in June–July 2025 on the IBPS official website ."

      },
      {
        title: "All India Bar Examination (AIBE)",
        desc: "The All India Bar Examination is conducted by the Bar Council of India to assess an advocate's capability to practice the profession of law in India. Passing the AIBE is mandatory for an advocate to obtain a Certificate of Practice, allowing them to practice in any court in India.",
        link: "https://allindiabarexamination.com/",
        name: "AIBE Official Website",
        category: "Law Exams",
        eligibility: JSON.stringify([
          "Must have a 3-year or 5-year LLB degree from a BCI recognized institution.",
          "Must be enrolled as an Advocate with any State Bar Council.",
          "There is no age limit to appear for AIBE."
        ]),
        examPattern: JSON.stringify([
          "Format: Offline, Open Book Examination (Bare Acts without notes are usually allowed, subject to BCI guidelines for each exam).",
          "Number of Questions: 100 multiple-choice questions (MCQs).",
          "Duration: 3 hours and 30 minutes.",
          "Marking Scheme: +1 mark for each correct answer.",
          "Negative Marking: No negative marking.",
          "Syllabus: Covers a wide range of law subjects including Constitutional Law, IPC, CrPC, CPC, Evidence Act, Family Law, Company Law, Professional Ethics, etc. (around 19 subjects)."
        ]),
        fees: 'General/OBC : ₹3,500 + ₹60 (Bank Transaction Charges approx.) , SC/ST : ₹2,500 + ₹60 (Bank Transaction Charges approx.)',
        examMode: "Offline (Pen and Paper based - OMR)",
        attemptLimit: "No limit on the number of attempts.",
        salary: "The All India Bar Examination (AIBE) is a qualifying exam conducted by the Bar Council of India, not a recruitment test, so there is no fixed salary associated with it. However, after passing AIBE and obtaining the Certificate of Practice, newly enrolled advocates generally earn around ₹25,000–₹35,000 per month (₹3–₹4 lakh per annum) initially. Income increases significantly with experience, specialization, and client base, especially in corporate or litigation practice.",

        examDate: "As per the official schedule, the All India Bar Examination (AIBE XX - 2025) is expected to be conducted on November 30, 2025, in offline (pen-and-paper) mode. The official notification was released in September 2025, and the admit cards will be available in mid-November 2025 on the official website."
      },
      {
        title: "IBPS PO (Probationary Officer)",
        desc: "The IBPS PO exam is conducted by the Institute of Banking Personnel Selection to recruit Probationary Officers/Management Trainees (PO/MT) in various public sector banks across India. The selection process includes Preliminary and Main examinations followed by an interview. Successful candidates are appointed as Assistant Managers in participating banks.",
        link: "https://www.ibps.in/",
        name: "IBPS Official Site",
        category: "Banking & Finance",
        eligibility: JSON.stringify([
          "Age Limit: 20 to 30 years (age relaxation applicable for reserved categories).",
          "Educational Qualification: A Degree (Graduation) in any discipline from a University recognised by the Govt. Of India or any equivalent qualification recognized as such by the Central Government.",
          "Candidates must possess valid Mark-sheet / Degree Certificate that he/ she is a graduate on the day he / she registers and indicate the percentage of marks obtained in Graduation while registering online."
        ]),
        examPattern: JSON.stringify([
          "Phase I: Preliminary Examination (Online - Objective Type):",
          "  - English Language (30 Qs, 30 Marks, 20 mins).",
          "  - Quantitative Aptitude (35 Qs, 35 Marks, 20 mins).",
          "  - Reasoning Ability (35 Qs, 35 Marks, 20 mins).",
          "  - Total: 100 Qs, 100 Marks, 1 hour. (Sectional timings and cutoffs apply).",
          "Phase II: Main Examination (Online - Objective & Descriptive Type):",
          "  - Objective Tests (200 Marks, 3 hours):",
          "    - Reasoning & Computer Aptitude (45 Qs, 60 Marks, 60 mins).",
          "    - General/ Economy/ Banking Awareness (40 Qs, 40 Marks, 35 mins).",
          "    - English Language (35 Qs, 40 Marks, 40 mins).",
          "    - Data Analysis & Interpretation (35 Qs, 60 Marks, 45 mins).",
          "  - Descriptive Test (25 Marks, 30 mins): English Language (Letter Writing & Essay).",
          "Phase III: Interview (100 Marks). Conducted by participating banks and coordinated by Nodal Bank in each State/ UT with the help of IBPS."
        ]),
        fees: 'General/OBC/EWS : ₹850 (inclusive of GST) , SC/ST/PwBD : ₹175 (inclusive of GST)',
        examMode: "Online (Preliminary and Main Exams), Offline (Interview)",
        attemptLimit: "Generally no specific limit on attempts, subject to age eligibility. Some banks might have internal policies but not for appearing in IBPS PO.",
        salary: "The IBPS Probationary Officer (PO) is placed in the pay scale of ₹48,480–₹2,000(7)–₹62,480–₹2,340(2)–₹67,160–₹2,680(7)–₹85,920. Including allowances like Dearness Allowance, House Rent Allowance, Special Allowance, and others, the gross monthly salary is around ₹90,000, while the in-hand pay typically ranges between ₹74,000–₹76,000 depending on the posting city and bank policies.",

        examDate: "The IBPS PO Examination is conducted annually, with the Preliminary Exam usually held between August–September and the Main Exam in October. The detailed schedule is released by IBPS around June–July each year on its official website (https://www.ibps.in/)."

      },
      {
        title: "SBI PO (Probationary Officer)",
        desc: "The State Bank of India conducts the SBI PO exam to recruit Probationary Officers for its branches nationwide. The selection process includes Preliminary and Main examinations followed by a Psychometric Test, Group Exercise, and Interview. Candidates who clear all stages are appointed as Probationary Officers in SBI.",
        link: "https://sbi.co.in/web/careers",
        name: "SBI Careers",
        category: "Banking & Finance",
        eligibility: JSON.stringify([
          "Age Limit: 21 to 30 years as on a specified date (age relaxation applicable for reserved categories).",
          "Educational Qualification: Graduation in any discipline from a recognised University or any equivalent qualification recognised as such by the Central Government.",
          "Final year/semester students can also apply provisionally, subject to the condition that, if called for an interview, they will have to produce proof of having passed the graduation examination on or before a specified date."
        ]),
        examPattern: JSON.stringify([
          "Phase I: Preliminary Examination (Online - Objective Type - 100 Marks, 1 hour):",
          "  - English Language (30 Qs, 30 Marks, 20 mins).",
          "  - Quantitative Aptitude (35 Qs, 35 Marks, 20 mins).",
          "  - Reasoning Ability (35 Qs, 35 Marks, 20 mins).",
          "  - (Sectional timings apply. No sectional cut-off mentioned usually).",
          "Phase II: Main Examination (Online - Objective & Descriptive Type - 250 Marks):",
          "  - Objective Tests (200 Marks, 3 hours):",
          "    - Reasoning & Computer Aptitude (40 Qs, 50 Marks, 50 mins).",
          "    - Data Analysis & Interpretation (30 Qs, 50 Marks, 45 mins).",
          "    - General/ Economy/ Banking Awareness (50 Qs, 60 Marks, 45 mins).",
          "    - English Language (35 Qs, 40 Marks, 40 mins).",
          "  - Descriptive Test (50 Marks, 30 mins): English Language (Letter Writing & Essay).",
          "Phase III: Psychometric Test, Group Exercise (20 marks) & Interview (30 marks) - Total 50 Marks."
        ]),
        fees: 'General/OBC/EWS : ₹750 , SC/ST/PwBD : Nil',
        examMode: "Online (Preliminary and Main Exams), Offline (Group Exercise & Interview)",
        attemptLimit: "General/EWS: 4 attempts. General/EWS (PwBD): 7 attempts. OBC: 7 attempts. OBC (PwBD): 7 attempts. SC/ST/SC(PwBD)/ST(PwBD): No restriction.",
        salary: "The SBI PO is placed in the Junior Management Grade Scale-I with a starting basic pay of ₹48,480 (plus four advance increments) on the pay scale ₹48,480-2,000/7-₹62,480-2,340/2-₹67,160-2,680/7-₹85,920. Including allowances (DA, HRA, CCA, etc.) the gross monthly salary in metro cities is approximately ₹90,000+, with in-hand pay around ₹80,000 depending on posting location.",

        examDate: "The SBI PO examination cycle is conducted annually; the Preliminary Exam is typically held in August, and the Main Exam usually in September."
      },
      {
        title: "RBI Grade B Officer",
        desc: "The Reserve Bank of India conducts the RBI Grade B exam to recruit officers in Grade ‘B’ (General), DEPR (Department of Economic and Policy Research), and DSIM (Department of Statistics and Information Management). This prestigious position involves roles in monetary policy formulation, financial supervision, research and currency issuance. The selection process includes Phase I and II examinations followed by an interview.",
        link: "https://opportunities.rbi.org.in/",
        name: "RBI Opportunities",
        category: "Banking & Finance",
        eligibility: JSON.stringify([
          "Age Limit: 21 to 30 years (age relaxation applicable for reserved categories, M.Phil./Ph.D. candidates).",
          "Educational Qualification (Grade B - General): Bachelor's degree with a minimum of 60% marks (50% for SC/ST/PwBD) or equivalent grade. OR Post-Graduation with minimum 55% marks (pass class for SC/ST/PwBD).",
          "DEPR/DSIM streams have specific Master's degree requirements in Economics/Econometrics/Statistics/Mathematical Economics/Finance etc."
        ]),
        examPattern: JSON.stringify([
          "Phase I (Online - Objective Type - 200 Marks, 120 mins - For Grade B General):",
          "  - General Awareness (80 Qs, 80 Marks).",
          "  - English Language (30 Qs, 30 Marks).",
          "  - Quantitative Aptitude (30 Qs, 30 Marks).",
          "  - Reasoning (60 Qs, 60 Marks).",
          "  - (Sectional and overall cutoffs apply).",
          "Phase II (Online - Objective & Descriptive Type - For Grade B General):",
          "  - Paper I: Economic & Social Issues (50% Objective - 50 Marks, 30 mins; 50% Descriptive - 50 Marks, 90 mins).",
          "  - Paper II: English (Writing Skills - Descriptive) (100 Marks, 90 mins).",
          "  - Paper III: Finance & Management (50% Objective - 50 Marks, 30 mins; 50% Descriptive - 50 Marks, 90 mins).",
          "Interview (75 Marks - For Grade B General)."
        ]),
        fees: 'General/OBC/EWS : ₹850 (+18% GST) , SC/ST/PwBD : ₹100 (+18% GST) , Staff@RBI : Nil',
        examMode: "Online (Phase I & Phase II), Offline (Interview)",
        attemptLimit: "General Category: 6 attempts. SC/ST/OBC/PwBD: No restriction (subject to age limit).",
        salary: "The RBI Grade B Officer starts with a basic pay of ₹78,450 per month in the scale ₹78,450-4050(9)-1,14,900-EB-4050(2)-1,23,000-4,650(4)-1,41,600 over approx. 16 years. Including allowances (DA, HRA, special allowance, local allowance etc.), the gross emoluments are approximately ₹1,50,000 per month initially.",

        examDate: "The Reserve Bank of India Grade B examination is conducted annually; typically the online Phase I (Preliminary) is held in **October**, and Phase II (Mains) in **December** for the General stream."

      },
      {
        title: "NABARD Grade A Officer (RDBS/Rajbhasha/Legal)",
        desc: "The National Bank for Agriculture and Rural Development (NABARD) conducts the Grade A exam to recruit Assistant Managers in Rural Development Banking Service (RDBS), Rajbhasha Service, and Legal Service. The role involves policy planning, implementation, and monitoring related to agriculture and rural development, or specialized functions. The selection process includes Preliminary and Main examinations followed by an interview.",
        link: "https://www.nabard.org/content1.aspx?id=597",
        name: "NABARD Careers",
        category: "Banking & Finance",
        eligibility: JSON.stringify([
          "Age Limit: 21 to 30 years (age relaxation applicable for reserved categories).",
          "Educational Qualification (RDBS - General): Bachelor’s Degree in any subject from a recognized University with a minimum of 60% marks (SC/ST/PWBD applicants - 55%) in aggregate OR Post Graduate degree with a minimum of 55% marks (SC/ST/PWBD applicants - 50%) in aggregate OR Ph.D.",
          "Specific educational qualifications for specialized disciplines under RDBS, Rajbhasha, and Legal."
        ]),
        examPattern: JSON.stringify([
          "Phase I: Preliminary Examination (Online - Objective Type - 200 Marks, 120 mins - Qualifying Section & Merit Section):",
          "  - Qualifying Section: Test of Reasoning (20 Qs), English Language (30 Qs), Computer Knowledge (20 Qs), Quantitative Aptitude (20 Qs), Decision Making (10 Qs).",
          "  - Merit Section: General Awareness (20 Qs), Eco & Soc. Issues (with focus on Rural India) (40 Qs), Agriculture & Rural Development (with focus on Rural India) (40 Qs).",
          "Phase II: Main Examination (Online - Objective & Descriptive Type):",
          "  - Paper I (Common for all posts): General English (Descriptive - Online) (100 Marks, 90 mins).",
          "  - Paper II (For Generalist RDBS): Economic and Social Issues & Agriculture and Rural Development (Objective - 50 Marks, 30 mins; Descriptive - 50 Marks, 90 mins, 6 questions to be attempted - 2 of 15 marks, 2 of 10 marks).",
          "  - Paper II (For Specialist Disciplines): Stream Specific Paper (Objective & Descriptive).",
          "Phase III: Interview (50 Marks)."
        ]),
        fees: 'General/OBC/EWS (Application Fee + Intimation Charges) : ₹800 , SC/ST/PwBD (Intimation Charges only) : ₹150 , Staff@NABARD : Nil',
        examMode: "Online (Phase I & Phase II), Offline (Interview)",
        attemptLimit: "No restriction mentioned, subject to age and eligibility criteria.",
        salary: "The NABARD Grade A Officer begins with a basic pay of ₹44,500 per month in the scale ₹44,500-2,500(4)-54,500-2,850(7)-74,450-EB-2,850(4)-85,850-3,300(1)-89,150 (over approx. 17 years). Including allowances like DA, HRA, CCA etc., the gross emoluments are around ₹1,00,000 per month initially.",

        examDate: "The National Bank for Agriculture and Rural Development Grade A exam is typically held annually with the Preliminary (Phase I) exam conducted around **September–October** and the Main (Phase II) exam in **October–November**. "

      },
      {
        title: "SEBI Grade A Officer (General Stream)",
        desc: "The Securities and Exchange Board of India (SEBI) conducts the Grade A (Assistant Manager) exam for various streams including General, Legal, Information Technology, Research, and Official Language. The role involves regulatory functions, market surveillance, and investor protection in the securities market. The selection process includes Phase I and II examinations followed by an interview.",
        link: "https://www.sebi.gov.in/index.html",
        name: "SEBI Opportunities",
        category: "Banking & Finance",
        eligibility: JSON.stringify([
          "Age Limit: Maximum 30 years as on a specified date (age relaxation applicable for reserved categories).",
          "Educational Qualification (General Stream): Master's Degree in any discipline, OR Bachelor’s Degree in Law, OR Bachelor’s Degree in Engineering from a recognized university/institute OR CA /CFA / CS / CWA."
        ]),
        examPattern: JSON.stringify([
          "Phase I (Online Screening Exam - 200 Marks total):",
          "  - Paper 1 (100 Marks, 60 mins): MCQs on General Awareness, English Language, Quantitative Aptitude, Test of Reasoning (Qualifying with 30% cut-off).",
          "  - Paper 2 (100 Marks, 40 mins): MCQs on Commerce, Accountancy, Management, Finance, Costing, Companies Act, Economics (Qualifying with 40% cut-off).",
          "  - Aggregate cut-off of 40% to be shortlisted for Phase II.",
          "Phase II (Online Examination - 200 Marks total):",
          "  - Paper 1 (100 Marks, 60 mins): English (Descriptive Test - Precis Writing, Essay writing, Comprehension). (Cut-off 30%).",
          "  - Paper 2 (100 Marks, 40 mins for MCQs, may include numericals): MCQs on subjects of Paper 2 of Phase I. (Cut-off 40%).",
          "  - Aggregate cut-off of 50% in Phase II (weightage of 1/3rd for Paper 1 and 2/3rd for Paper 2).",
          "Phase III: Interview. (Weightage for final selection: Phase II marks - 85%, Interview - 15%)."
        ]),
        fees: 'General/OBC/EWS : ₹1,000 (Application fee including intimation charges) , SC/ST/PwBD : ₹100 (Intimation charges only)',
        examMode: "Online (Phase I & Phase II), Offline (Interview)",
        attemptLimit: "No specific restriction, subject to age and eligibility criteria.",
        salary: "The SEBI Grade A Officer (Assistant Manager, General Stream) pay scale is ₹62,500–₹3,600(4)–₹76,900–₹4,050(7)–₹1,05,250–EB–₹4,050(4)–₹1,21,450–₹4,650(1)–₹1,26,100 (over 17 years). Including allowances such as Dearness Allowance, Grade Allowance, Special Allowance, etc., the gross monthly emoluments are approximately ₹1,84,000 without accommodation and around ₹1,43,000 with SEBI-provided housing.",

        examDate: "The SEBI Grade A examination cycle is typically conducted annually, with the online screening (Phase I) exam usually held in **July–August**, and the main (Phase II) exam in **August–September** (with interview afterwards)."

      },
      {
        title: "IBPS Clerk",
        desc: "The IBPS Clerk exam is conducted by the Institute of Banking Personnel Selection to recruit clerical staff (Customer Support & Sales) in various public sector banks (excluding SBI). The selection process includes Preliminary and Main examinations. Successful candidates are appointed as clerks in participating banks based on state-wise merit.",
        link: "https://www.ibps.in/",
        name: "IBPS Official Site",
        category: "Banking & Finance",
        eligibility: JSON.stringify([
          "Age Limit: 20 to 28 years (age relaxation applicable for reserved categories).",
          "Educational Qualification: A Degree (Graduation) in any discipline from a University recognised by the Govt. Of India or any equivalent qualification recognized as such by the Central Government.",
          "Computer Literacy: Operating and working knowledge in computer systems is mandatory i.e. candidates should have Certificate/Diploma/Degree in computer operations/Language/should have studied Computer / Information Technology as one of the subjects in the High School/College/Institute.",
          "Proficiency in the Official Language of the State/UT (candidates should know how to read/ write and speak the Official Language of the State/UT) for which vacancies a candidate wishes to apply is preferable."
        ]),
        examPattern: JSON.stringify([
          "Phase I: Preliminary Examination (Online - Objective Type - 100 Marks, 1 hour):",
          "  - English Language (30 Qs, 30 Marks, 20 mins).",
          "  - Numerical Ability (35 Qs, 35 Marks, 20 mins).",
          "  - Reasoning Ability (35 Qs, 35 Marks, 20 mins).",
          "  - (Sectional timings and cutoffs apply).",
          "Phase II: Main Examination (Online - Objective Type - 200 Marks, 160 mins):",
          "  - General/ Financial Awareness (50 Qs, 50 Marks, 35 mins).",
          "  - General English (40 Qs, 40 Marks, 35 mins).",
          "  - Reasoning Ability & Computer Aptitude (50 Qs, 60 Marks, 45 mins).",
          "  - Quantitative Aptitude (50 Qs, 50 Marks, 45 mins).",
          "  - (Sectional cutoffs may apply. Marks of Main exam considered for final merit)."
        ]),
        fees: 'General/OBC/EWS : ₹850 (inclusive of GST) , SC/ST/PwBD/EXSM : ₹175 (inclusive of GST)',
        examMode: "Online (Preliminary and Main Exams)",
        attemptLimit: "No restriction on the number of attempts, subject to age limit.",
        examDate: "The notification is generally released in June–July. The Preliminary Exam is usually held in August–September, and the Main Exam is conducted in October each year.",
        salary: "Basic Pay: ₹19,900 (₹17,900 plus two advance increments admissible to graduates). Pay Scale: ₹17900-1000/3-20900-1230/3-24590-1490/4-30550-1730/7-42660-3270/1-45930-1990/1-47920. Gross Salary: Approximately ₹30,000 – ₹35,000 per month initially in metro cities (varies by bank and location).",
      },
      {
        title: "SBI Clerk (Junior Associate)",
        desc: "The State Bank of India conducts the SBI Clerk exam to recruit Junior Associates (Customer Support & Sales) for its branches across India. The selection process includes Preliminary and Main examinations, followed by a test of specified opted local language. Candidates who clear all stages are appointed as clerks in SBI.",
        link: "https://sbi.co.in/web/careers",
        name: "SBI Careers",
        category: "Banking & Finance",
        eligibility: JSON.stringify([
          "Age Limit: 20 to 28 years as on a specified date (age relaxation applicable for reserved categories).",
          "Educational Qualification: Graduation in any discipline from a recognised University or any equivalent qualification recognised as such by Central Government.",
          "Candidates having integrated dual degree (IDD) certificate should ensure that the date of passing the IDD is on or before the specified date.",
          "Knowledge of specified opted local language of the state is required."
        ]),
        examPattern: JSON.stringify([
          "Phase I: Preliminary Examination (Online - Objective Type - 100 Marks, 1 hour):",
          "  - English Language (30 Qs, 30 Marks, 20 mins).",
          "  - Numerical Ability (35 Qs, 35 Marks, 20 mins).",
          "  - Reasoning Ability (35 Qs, 35 Marks, 20 mins).",
          "  - (Sectional timings apply. No sectional cut-off mentioned usually).",
          "Phase II: Main Examination (Online - Objective Type - 200 Marks, 2 hours 40 mins):",
          "  - General/ Financial Awareness (50 Qs, 50 Marks, 35 mins).",
          "  - General English (40 Qs, 40 Marks, 35 mins).",
          "  - Quantitative Aptitude (50 Qs, 50 Marks, 45 mins).",
          "  - Reasoning Ability & Computer Aptitude (50 Qs, 60 Marks, 45 mins).",
          "  - (Sectional cutoffs may apply. Marks of Main exam considered for final merit).",
          "Test of specified opted local language: For candidates qualifying Main Exam but not having studied the opted local language in 10th or 12th standard."
        ]),
        fees: 'General/OBC/EWS : ₹750 , SC/ST/PwBD/ESM/DESM : Nil',
        examMode: "Online (Preliminary and Main Exams)",
        attemptLimit: "No restriction on the number of attempts.",
        salary: "Basic Pay: ₹19,900 (₹17,900 plus two advance increments admissible to graduates). Pay Scale: ₹17900-1000/3-20900-1230/3-24590-1490/4-30550-1730/7-42660-3270/1-45930-1990/1-47920. Gross Salary: Approximately ₹32,000 – ₹37,000 per month initially in metro cities (varies by location and allowances).",

        examDate: "The SBI Clerk notification is generally released in November–December. The Preliminary Exam is usually held in January, and the Main Exam is conducted around February–March each year."

      },





      {
        title: "NDA (UPSC)",
        desc: "The National Defence Academy (NDA) exam is conducted by UPSC twice a year for Class 12 pass candidates who wish to join the Indian Army, Navy, or Air Force as officers. It is a prestigious entry route into the Indian Armed Forces for young aspirants.",
        link: "https://www.upsc.gov.in/",
        name: "UPSC NDA Portal",
        category: "Defense Exams",
        eligibility: JSON.stringify([
          "Age Limit: 16.5 to 19.5 years (Unmarried male and female candidates).",
          "Educational Qualification: ",
          "  - For Army Wing: 12th Class pass of the 10+2 pattern of School Education or equivalent examination conducted by a State Education Board or a University.",
          "  - For Air Force and Naval Wings: 12th Class pass with Physics, Chemistry and Mathematics of the 10+2 pattern of School Education or equivalent."
        ]),
        examPattern: JSON.stringify([
          "Stage I: Written Examination (Objective Type):",
          "  - Paper I: Mathematics (300 marks, 2.5 hours duration).",
          "  - Paper II: General Ability Test (GAT) (600 marks, 2.5 hours duration). GAT includes Part A: English (200 Marks) and Part B: General Knowledge (Physics, Chemistry, General Science, History & Freedom Movement, Geography, Current Events - 400 Marks).",
          "  - Negative Marking: Yes, 1/3rd of marks for wrong answers.",
          "Stage II: SSB Interview (900 marks):",
          "  - Conducted for candidates who qualify the written exam.",
          "  - Includes psychological aptitude tests and intelligence tests."
        ]),
        fees: 'General/OBC : ₹100 , SC/ST/Female/Wards of JCOs/NCOs/ORs : ₹0',
        examMode: "Written Exam: Offline (Pen and Paper based); SSB Interview: Offline",
        attemptLimit: "No limit on attempts, subject to age eligibility.",
        salary: "Cadets receive a fixed stipend of ₹56,100 per month during the training period at the National Defence Academy and subsequent academies. On commissioning as Lieutenant, pay is at Level 10 (₹56,100 – ₹1,77,500) plus Military Service Pay (MSP) of ₹15,500 and various allowances as applicable.",

        examDate: "The UPSC NDA exam is conducted twice a year — NDA (I) is usually held in **April**, and NDA (II)** in **September**. Notifications are generally released in **December** and **May** respectively."

      },
      {
        title: "CDS (UPSC)",
        desc: "The Combined Defence Services (CDS) exam is conducted by UPSC for graduates aspiring to join the Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), and Officers’ Training Academy (OTA). It’s held twice a year.",
        link: "https://www.upsc.gov.in/",
        name: "CDS Official Site",
        category: "Defense Exams",
        eligibility: JSON.stringify([
          "Age Limit: ",
          "  - IMA & INA: 19 to 24 years (Unmarried male candidates).",
          "  - AFA: 20 to 24 years (Unmarried male candidates).",
          "  - OTA (Men & Women): 19 to 25 years (Unmarried male and female candidates, also specific provisions for widows of defence personnel).",
          "Educational Qualification: ",
          "  - IMA/OTA: Degree from a recognised University or equivalent.",
          "  - INA: Degree in Engineering from a recognised University/Institution.",
          "  - AFA: Degree of a recognised University (with Physics and Mathematics at 10+2 level) or Bachelor of Engineering."
        ]),
        examPattern: JSON.stringify([
          "For IMA, INA, AFA (Objective Type):",
          "  - English (100 marks, 2 hours).",
          "  - General Knowledge (100 marks, 2 hours).",
          "  - Elementary Mathematics (100 marks, 2 hours).",
          "For OTA (Objective Type):",
          "  - English (100 marks, 2 hours).",
          "  - General Knowledge (100 marks, 2 hours).",
          "SSB Interview: For candidates who qualify the written exam (Marks for IMA/INA/AFA - 300; OTA - 200).",
          "Negative Marking: Yes, 1/3rd of marks for wrong answers in written exam."
        ]),
        fees: 'General/OBC Male : ₹200 , SC/ST/Female : ₹0',
        examMode: "Written Exam: Offline (Pen and Paper based); SSB Interview: Offline",
        attemptLimit: "No limit on attempts, subject to age eligibility.",
        salary: "Candidates selected through the CDS exam receive a stipend of ₹56,100 per month during their training at the respective academies (IMA, INA, AFA, OTA). On commissioning as Lieutenant (or equivalent rank), officers are placed in Pay Level 10 with a salary range of ₹56,100 – ₹1,77,500 per month, plus Military Service Pay (MSP) of ₹15,500 and additional allowances depending on posting and branch.",

        examDate: "The UPSC CDS exam is conducted twice a year — CDS (I) is generally held in **April**, and CDS (II)** in **September**. Notifications are usually released around **December** for CDS (I) and **May–June** for CDS (II)."

      },
      {
        title: "AFCAT",
        desc: "The Air Force Common Admission Test (AFCAT) is conducted by the Indian Air Force for recruitment of officers in Flying Branch, Ground Duty (Technical and Non-Technical) branches.",
        link: "https://afcat.cdac.in/",
        name: "AFCAT Portal",
        category: "Defense Exams",
        eligibility: JSON.stringify([
          "Age Limit:",
          "  - Flying Branch: 20 to 24 years.",
          "  - Ground Duty (Technical & Non-Technical): 20 to 26 years.",
          "Educational Qualification:",
          "  - Flying Branch: Graduates (any discipline) with 60% marks and Physics & Maths at 10+2 level OR B.E/B.Tech with 60% marks.",
          "  - Ground Duty (Technical): Aeronautical Engineering (Electronics/Mechanical) degree with 60% marks.",
          "  - Ground Duty (Non-Technical): Graduation (any discipline) with 60% marks / B.Com with 60% marks / MBA/MCA or MA/MSc degree in English/Physics/Maths/Chemistry/Stats/International relations/International studies/Defence studies etc. with 50% marks and 60% in graduation."
        ]),
        examPattern: JSON.stringify([
          "AFCAT Written Test (Online - Objective Type):",
          "  - Sections: General Awareness, Verbal Ability in English, Numerical Ability, Reasoning and Military Aptitude Test.",
          "  - Total Questions: 100.",
          "  - Total Marks: 300.",
          "  - Duration: 2 hours.",
          "  - Marking Scheme: +3 for correct, -1 for incorrect.",
          "Engineering Knowledge Test (EKT) (For Ground Duty - Technical Branch):",
          "  - Subjects: Mechanical, Computer Science, Electrical & Electronics.",
          "  - Total Questions: 50.",
          "  - Total Marks: 150.",
          "  - Duration: 45 minutes.",
          "AFSB (Air Force Selection Board) Testing: For candidates qualifying written exam.",
          "  - Stage I: Officer Intelligence Rating Test, Picture Perception and Discussion Test.",
          "  - Stage II: Psychological tests, Group tests, and Interview."
        ]),
        fees: 'All Categories : ₹550 + GST (as of AFCAT 01/2024)',
        examMode: "Written Exam (AFCAT & EKT): Online (Computer Based Test); AFSB Testing: Offline",
        attemptLimit: "No limit on attempts, subject to age and eligibility.",
        salary: "During training at the Air Force Academy, cadets receive a stipend of ₹56,100 per month. On commissioning as Flying Officer, the pay scale is Level 10 (₹56,100 – ₹1,77,500) with Military Service Pay (MSP) of ₹15,500 per month. Flying Branch officers additionally receive Flying Allowance of ₹11,250 per month along with other applicable allowances (such as Technical, Field Area, and Transport allowances).",

        examDate: "The AFCAT exam is conducted twice every year — **AFCAT 1** is usually held in **February**, and **AFCAT 2** in **August**. Notifications are generally released around **December** for AFCAT 1 and **June** for AFCAT 2."

      },
      {
        title: "Agniveer Scheme",
        desc: "The Agnipath or Agniveer scheme is a short-term recruitment initiative for young individuals to serve in the Indian Army, Navy, or Air Force for a period of 4 years, offering training, experience, and post-service benefits.",
        link: "https://joinindianarmy.nic.in/ (Army), https://joinindiannavy.gov.in/ (Navy), https://agnipathvayu.cdac.in/ (Air Force)",
        name: "Join Indian Army/Navy/Air Force (Agnipath)",
        category: "Defense Exams",
        eligibility: JSON.stringify([
          "Age Limit: 17.5 to 21 years (upper age limit was relaxed to 23 for the first recruitment year 2022).",
          "Educational Qualification: Varies by force and trade.",
          "  - Army Agniveer (GD): Class 10th Matric with 45% marks in aggregate and 33% in each subject.",
          "  - Army Agniveer (Technical): 10+2/Intermediate Exam Pass in Science with Physics, Chemistry, Maths and English with min 50% marks in aggregate and 40% in each subject.",
          "  - Navy Agniveer (SSR): Qualified in 10+2 examination with Maths & Physics and at least one of these subjects:- Chemistry/Biology/Computer Science.",
          "  - Air Force Agniveer (Vayu): 10+2 or equivalent with Mathematics, Physics and English with minimum 50% marks in aggregate and 50% marks in English OR 3 years Diploma in Engineering."
        ]),
        examPattern: JSON.stringify([
          "Varies by force (Army, Navy, Air Force) and specific trade.",
          "Indian Army Agniveer:",
          "  - Phase I: Online Common Entrance Exam (CEE) - Objective MCQs based on trade.",
          "  - Phase II: Recruitment Rally (Physical Fitness Test, Physical Measurement Test, Medical Examination).",
          "Indian Navy Agniveer (SSR/MR):",
          "  - Stage I: Shortlisting based on 10+2 marks (SSR) or Class 10 (MR) followed by INET (Indian Navy Entrance Test - Agniveer) - Computer-based exam.",
          "  - Stage II: Written Examination (Offline), Physical Fitness Test (PFT), and Medical Examination.",
          "Indian Air Force Agniveer (Vayu):",
          "  - Phase I: Online Test (Objective MCQs - English, Physics, Mathematics as per 10+2 CBSE syllabus; or English, Reasoning & General Awareness - RAGA).",
          "  - Phase II: Physical Fitness Test (PFT), Adaptability Test-I & II, Medical Examination."
        ]),
        fees: 'All Categories (Army CEE) : ₹250 (Exam Fee) , All Categories (Air Force) : ₹550 + GST (as of STAR 01/2025)',
        examMode: "Online (for initial written tests usually); Physical and Medical tests are Offline.",
        attemptLimit: "No specific limit on attempts, subject to age and eligibility criteria for each recruitment rally/cycle.",
        salary: "Agniveers receive a progressive monthly salary structure: ₹30,000 in the 1st year (in-hand ₹21,000), ₹33,000 in the 2nd year (in-hand ₹23,100), ₹36,500 in the 3rd year (in-hand ₹25,550), and ₹40,000 in the 4th year (in-hand ₹28,000). After completion of 4 years, a Seva Nidhi package of approximately ₹10.04 lakhs (tax-free) is provided, including individual and government contributions with interest. Around 25% of Agniveers may be retained for permanent service based on performance and organizational requirements.",

        examDate: "Agniveer recruitments for the Army, Navy, and Air Force are conducted **annually**, generally in **April–July** for the first cycle and **October–December** for the second cycle. Exact exam dates vary by force and recruitment rally schedule."

      },
      {
        title: "INET (Indian Navy Entrance Test)",
        desc: "INET was conducted by the Indian Navy for officer-level entry into Executive, Technical, and Education branches for graduates and engineering students. (Note: For some entries, INET has been replaced by direct SSB shortlisting based on graduation marks or other national level exams like CDS/NDA).",
        link: "https://www.joinindiannavy.gov.in/",
        name: "Join Indian Navy",
        category: "Defense Exams",
        eligibility: JSON.stringify([
          "Age Limit: Typically 19 to 25 years (varies by specific entry type and branch).",
          "Educational Qualification: B.E/B.Tech for most Executive and Technical entries; Graduation with specific subjects for Education branch or other specialized entries."
        ]),
        examPattern: JSON.stringify([
          "INET Exam (if conducted for specific entries):",
          "  - Computer-based examination.",
          "  - Sections: English, Reasoning & Numerical Ability, General Science & Mathematical Aptitude, and General Knowledge.",
          "  - Duration: Typically 2 hours.",
          "  - Total Marks: 400 (100 questions, 4 marks each).",
          "  - Negative Marking: Yes (1 mark deducted for each wrong answer).",
          "SSB Interview: For candidates qualifying INET or shortlisted directly based on academic merit."
        ]),
        fees: 'General/OBC : ₹215 (approx. when INET was active) , SC/ST/Female : ₹0 (approx. when INET was active)',
        examMode: "Online (Computer Based Test for INET); SSB Interview: Offline.",
        attemptLimit: "Subject to age and specific entry scheme notifications.",
        salary: "Officers selected through INET receive a stipend of ₹56,100 per month during training. After commissioning as Sub Lieutenant, salary is at Level 10 (₹56,100 - ₹1,77,500) plus Military Service Pay (MSP) of ₹15,500 and various allowances such as flying, diving, or technical pay depending on the branch and posting.",

        examDate: "INET (if conducted) is usually held **once a year**, typically between **February and April**. However, in recent years, many Navy officer entries have shifted to **direct SSB shortlisting**, so candidates should check official notifications for updated schedules."

      },
      {
        title: "Territorial Army Officer",
        desc: "The Territorial Army provides an opportunity for employed professionals to serve in a military capacity without having to quit their primary occupation. It’s a part-time commitment to serve the nation.",
        link: "https://www.jointerritorialarmy.gov.in/",
        name: "Territorial Army Official Site",
        category: "Defense Exams",
        eligibility: JSON.stringify([
          "Age Limit: 18 to 42 years as on the date of application.",
          "Educational Qualification: Graduate from any recognized university.",
          "Employment: Must be gainfully employed (including self-employed) or ex-service officers.",
          "Nationality: Citizen of India."
        ]),
        examPattern: JSON.stringify([
          "Stage I: Screening (Written Exam and Interview for civilian candidates).",
          "  - Written Exam (Objective Type - OMR Based):",
          "    - Paper I: Reasoning (50 Qs, 50 Marks) & Elementary Mathematics (50 Qs, 50 Marks). Duration: 2 hours.",
          "    - Paper II: General Knowledge (50 Qs, 50 Marks) & English (50 Qs, 50 Marks). Duration: 2 hours.",
          "    - Qualifying Marks: Minimum 40% in each part and overall average of 50% in each paper.",
          "    - Negative Marking: Yes.",
          "  - Preliminary Interview Board (PIB).",
          "Stage II: Service Selection Board (SSB) Interview.",
          "Stage III: Medical Board."
        ]),
        fees: 'All Categories : ₹200 (May vary, check notification)',
        examMode: "Written Exam: Offline (OMR Based); Interviews: Offline.",
        attemptLimit: "No specific limit, subject to age and eligibility criteria.",
        salary: "During periods of embodiment or training, Territorial Army Officers receive pay and allowances equivalent to Regular Army officers of the same rank — starting at Level 10 (₹56,100 - ₹1,77,500) plus Military Service Pay (MSP) and applicable allowances.",

        examDate: "The Territorial Army Officer exam is typically conducted **once a year**, generally between **July and October**, depending on official notifications released by the Indian Army."

      },
      {
        title: "UPSC Civil Services Examination (IAS/IPS/IFS)",
        desc: "The UPSC Civil Services Examination is the most prestigious and competitive exam in India, conducted annually by the Union Public Service Commission to recruit officers for top-level administrative services including IAS, IPS, IFS, and IRS. It is suitable for graduates aspiring to serve the nation through governance and policy implementation.",
        link: "https://upsc.gov.in/",
        name: "UPSC Official Site",
        category: "Civil Services",
        eligibility: JSON.stringify([
          "Age Limit: 21 to 32 years (relaxation for reserved categories as per rules).",
          "Educational Qualification: A bachelor’s degree in any discipline from a recognized university."
        ]),
        examPattern: JSON.stringify([
          "Stage 1: Preliminary Examination (Objective Type - Qualifying):",
          "  - Paper I: General Studies (200 marks, 2 hours). Cutoff based on this paper.",
          "  - Paper II: CSAT (Civil Services Aptitude Test) (200 marks, 2 hours). Qualifying paper (minimum 33% marks).",
          "  - Negative Marking: Yes, 1/3rd of marks for wrong answers.",
          "Stage 2: Mains Examination (Descriptive Type - Written):",
          "  - Paper A: Compulsory Indian Language (300 marks, Qualifying).",
          "  - Paper B: English (300 marks, Qualifying).",
          "  - Paper I: Essay (250 marks).",
          "  - Paper II to V: General Studies I to IV (250 marks each).",
          "  - Paper VI & VII: Optional Subject Papers I & II (250 marks each).",
          "  - Total for Merit: 1750 marks.",
          "Stage 3: Interview (Personality Test) (275 marks)."
        ]),
        fees: 'General/OBC Male : ₹100 , SC/ST/PwD/Female : ₹0',
        examMode: "Preliminary: Offline (OMR based); Mains: Offline (Written); Interview: Offline",
        attemptLimit: "General/EWS: 6 attempts. OBC: 9 attempts. SC/ST: No restriction (subject to age limit). PwBD candidates get relaxation.",
        salary: "The starting pay for IAS/IPS/IFS officers is at Level 10 of the Pay Matrix (₹56,100 per month) plus DA, HRA, and TA. The gross initial salary generally ranges between ₹80,000 to ₹1,00,000+ per month depending on posting location and allowances.",

        examDate: "The UPSC Civil Services Examination is conducted **annually** — the **Preliminary Exam is usually held in May or June**, the **Mains Exam in September or October**, and the **Interview/Personality Test between February and April** of the following year."

      },
      {
        title: "State Public Service Commission (PSC) Exams",
        desc: "State PSC exams like UPPSC, MPPSC, BPSC, etc., are conducted by individual state commissions for recruitment into state-level administrative posts such as SDM, Deputy Collector, DSP, and Tehsildar. These exams follow a similar structure to UPSC but are limited to state governance roles.",
        link: "https://uppsc.up.nic.in/ (Example for UPPSC)",
        name: "UPPSC Portal (Example)",
        category: "Civil Services",
        eligibility: JSON.stringify([
          "Age Limit: Usually 21 to 40 years (varies by state, with relaxation rules).",
          "Educational Qualification: Bachelor’s degree from a recognized university.",
          "Domicile requirement for some states or for certain relaxations."
        ]),
        examPattern: JSON.stringify([
          "Typically conducted in three stages (varies by state):",
          "1. Preliminary Exam: Objective type papers, usually General Studies and sometimes an Aptitude/State-specific paper. Qualifying in nature.",
          "2. Mains Exam: Descriptive/Written papers including General Studies, Essay, Language papers (English, Regional Language), and Optional Subjects (varies by state).",
          "3. Interview: Personality assessment for candidates qualifying Mains.",
          "Specific paper patterns, subjects, and marking schemes vary significantly between states."
        ]),
        fees: 'General/OBC/EWS : ₹125 (UPPSC - Exam fee ₹100 + Online processing ₹25) , SC/ST (of the state) : ₹65 (UPPSC - Exam fee ₹40 + Online processing ₹25) , PwD (of the state) : ₹25 (UPPSC - Online processing only)',
        examMode: "Preliminary: Offline (OMR) or Online (CBT). Mains: Offline (Written). Interview: Offline. (Varies by state)",
        attemptLimit: "Varies by state. Some states have attempt limits, others are limited by age.",
        salary: "The salary structure for State Public Service Commission (PSC) officers varies by state and post. Generally, officers start at Level 8 to Level 12 in the state pay matrix, equivalent to a pay band of ₹56,100 – ₹1,77,500 per month, with gross earnings (including DA, HRA, and other allowances) ranging from ₹60,000 to ₹1,20,000+ monthly depending on the state and posting.",

        examDate: "Most State PSC exams are conducted **annually or biennially**, depending on the state’s schedule. The **Preliminary Exams are usually held between March and July**, **Mains between September and December**, and **Interviews in the following year** after Mains results."

      },
      {
        title: "CAPF (Assistant Commandants)",
        desc: "The UPSC CAPF exam recruits Assistant Commandants for Central Armed Police Forces such as CRPF, BSF, CISF, ITBP, and SSB. It is ideal for candidates interested in leadership roles in India's armed police services.",
        link: "https://upsc.gov.in/",
        name: "CAPF Info",
        category: "Civil Services",
        eligibility: JSON.stringify([
          "Age Limit: 20 to 25 years (relaxation for SC/ST/OBC and other categories as per rules).",
          "Educational Qualification: Bachelor’s degree in any discipline from a recognized university.",
          "Physical Standards: Must meet prescribed physical and medical standards."
        ]),
        examPattern: JSON.stringify([
          "Stage 1: Written Examination:",
          "  - Paper I: General Ability and Intelligence (250 Marks, 2 hours, Objective Type - MCQs).",
          "  - Paper II: General Studies, Essay and Comprehension (200 Marks, 3 hours, Descriptive Type).",
          "Stage 2: Physical Standards Test (PST) / Physical Efficiency Test (PET) and Medical Standards Test (MST). (Qualifying nature).",
          "Stage 3: Interview/Personality Test (150 Marks)."
        ]),
        fees: 'General/OBC Male : ₹200 , SC/ST/Female : ₹0',
        examMode: "Written Exam Paper I: Offline (OMR); Paper II: Offline (Written). PST/PET/MST & Interview: Offline.",
        attemptLimit: "No specific limit on attempts mentioned by UPSC, subject to age eligibility.",
        salary: "Assistant Commandants in CAPF are placed at Pay Level 10 (₹56,100 – ₹1,77,500) with additional allowances such as DA, HRA, Transport, and Risk Allowances. The gross entry-level salary generally ranges between ₹80,000 to ₹95,000+ per month depending on the posting area and force (CRPF, BSF, CISF, ITBP, or SSB).",

        examDate: "The UPSC CAPF (Assistant Commandant) exam is conducted **once every year**, usually with the **written exam in August**, followed by **PET/Medical tests between October and December**, and the **Interview/Personality Test between March and May** of the next year."

      },
      {
        title: "EPFO (EO/AO & APFC)",
        desc: "UPSC conducts recruitment for Employees' Provident Fund Organisation (EPFO) Officers including Enforcement Officer (EO)/Accounts Officer (AO) and Assistant Provident Fund Commissioner (APFC) roles. These positions involve regulatory, compliance, and accountancy functions related to EPF laws.",
        link: "https://upsc.gov.in/",
        name: "EPFO Recruitment Notification",
        category: "Civil Services",
        eligibility: JSON.stringify([
          "Age Limit: EO/AO - Maximum 30 years; APFC - Maximum 35 years (relaxation applicable).",
          "Educational Qualification (EO/AO): Bachelor’s degree in any stream.",
          "Educational Qualification (APFC): Degree from a recognized University or equivalent. Desirable: Diploma in Company Law/ Labour Laws/ Public Administration."
        ]),
        examPattern: JSON.stringify([
          "Recruitment Test (RT - Objective Type - MCQs):",
          "  - Duration: 2 hours.",
          "  - Marks: Usually 100 marks (or scaled to a total, e.g., 300 for APFC).",
          "  - Syllabus (EO/AO): General English, Indian Freedom Struggle, Current Events & Developmental Issues, Indian Polity & Economy, General Accounting Principles, Industrial Relations & Labour Laws, General Science & knowledge of Computer applications, General Mental Ability & Quantitative Aptitude, Social Security in India.",
          "  - Syllabus (APFC): Similar to EO/AO but may have more depth and additional topics like Statistics, Insurance.",
          "  - Negative Marking: Yes, 1/3rd of marks for wrong answers.",
          "Interview: For candidates shortlisted based on RT marks. (Weightage for RT and Interview is typically 75:25 for final merit)."
        ]),
        fees: 'General/OBC/EWS Male : ₹25 , SC/ST/Female/PwBD : ₹0',
        examMode: "Recruitment Test: Offline (Pen and Paper based - OMR); Interview: Offline.",
        attemptLimit: "No limit on attempts, subject to age eligibility.",
        salary: "For EO/AO posts, the pay scale is Level 8 (₹47,600 – ₹1,51,100) with an initial gross salary of around ₹85,000+ per month including allowances. For APFC posts, the pay scale is Level 10 (₹56,100 – ₹1,77,500) with an initial gross salary of approximately ₹1,00,000+ per month depending on location and allowances.",

        examDate: "The UPSC EPFO EO/AO and APFC exams are **conducted as per vacancy cycle**, not annually. The **Recruitment Test (RT)** is usually scheduled between **May and July**, followed by the **Interview round** around **October to December** in the same or following year."

      },
      {
        title: "Indian Forest Service (IFoS)",
        desc: "The Indian Forest Service (IFoS) exam, conducted by UPSC, is meant for recruiting officers to manage India's forests and wildlife. It requires a science background and is highly suitable for candidates passionate about environmental and ecological work.",
        link: "https://upsc.gov.in/",
        name: "IFoS Details",
        category: "Civil Services",
        eligibility: JSON.stringify([
          "Age Limit: 21 to 32 years (relaxation for reserved categories).",
          "Educational Qualification: Bachelor's degree with at least one of the following subjects: Animal Husbandry & Veterinary Science, Botany, Chemistry, Geology, Mathematics, Physics, Statistics, Zoology, or a Bachelor's degree in Agriculture, Forestry or in Engineering."
        ]),
        examPattern: JSON.stringify([
          "Stage 1: Civil Services (Preliminary) Examination (Objective Type): Same as UPSC CSE Prelims. Candidates need to opt for IFoS and qualify this stage.",
          "Stage 2: IFoS Mains Examination (Descriptive Type - Written):",
          "  - Paper I: General English (300 marks).",
          "  - Paper II: General Knowledge (300 marks).",
          "  - Paper III, IV, V, VI: Two Optional Subjects to be selected from a list (each subject has two papers, 200 marks each). Total 4 optional papers, 800 marks.",
          "  - Total for Mains: 1400 marks.",
          "Stage 3: Interview (Personality Test) (300 marks)."
        ]),
        fees: 'General/OBC Male : ₹100 (for Prelims) , SC/ST/Female/PwD : ₹0',
        examMode: "Preliminary: Offline (OMR); Mains: Offline (Written); Interview: Offline.",
        attemptLimit: "Same as UPSC CSE attempts (General/EWS: 6, OBC: 9, SC/ST: No limit till age limit).",
        salary: "Indian Forest Service (IFoS) officers start at Level 10 of the Pay Matrix (₹56,100 – ₹1,77,500) with additional allowances such as DA, HRA, and transport benefits. The gross starting salary is around ₹80,000 – ₹1,00,000+ per month depending on posting location and allowances.",

        examDate: "The IFoS exam follows the same timeline as the UPSC Civil Services Examination — the **Preliminary Exam** is usually held in **May or June**, the **Mains Exam** in **November or December**, and the **Interview (Personality Test)** in **April–June** of the following year."

      },
      {
        title: "UPSC Indian Economic Service (IES) / Indian Statistical Service (ISS)",
        desc: "IES/ISS exam is conducted by UPSC to recruit specialists in Economics and Statistics for various Indian ministries and departments. Candidates work on policy planning, data analysis, and economic administration.",
        link: "https://upsc.gov.in/",
        name: "UPSC IES/ISS",
        category: "Civil Services",
        eligibility: JSON.stringify([
          "Age Limit: 21 to 30 years (relaxation applicable).",
          "Educational Qualification:",
          "  - IES: Post-graduate degree in Economics/Applied Economics/Business Economics/Econometrics from a recognized university.",
          "  - ISS: Bachelor's degree with Statistics/Mathematical Statistics/Applied Statistics as one of the subjects OR a Master's degree in Statistics/Mathematical Statistics/Applied Statistics."
        ]),
        examPattern: JSON.stringify([
          "Part I: Written Examination (Descriptive Type - 1000 marks total):",
          "  - General English (100 marks).",
          "  - General Studies (100 marks).",
          "  - IES: General Economics-I, II, III (200 marks each), Indian Economics (200 marks).",
          "  - ISS: Statistics-I, II (200 marks each - Objective Type), Statistics-III, IV (200 marks each - Descriptive Type).",
          "Part II: Viva Voce (Interview - 200 marks)."
        ]),
        fees: 'General/OBC Male : ₹200 , SC/ST/Female/PwD : ₹0',
        examMode: "Written Exam: Offline (Descriptive, some ISS papers objective); Interview: Offline.",
        attemptLimit: "No specific limit mentioned by UPSC, subject to age eligibility.",
        salary: "Officers selected through the UPSC IES/ISS examination are appointed in the Junior Time Scale with Pay Level 10 (₹56,100 – ₹1,77,500) under the 7th CPC, along with applicable DA, HRA, and other government allowances. The gross initial monthly salary typically ranges between ₹80,000 to ₹95,000+, depending on posting location and benefits.",

        examDate: "The UPSC IES/ISS examination is conducted **annually**, with the **written exam usually held in June**, followed by the **interview or viva-voce between October and December** of the same year."

      },
      {
        title: "Indian Information Service (IIS) via UPSC CSE",
        desc: "The Indian Information Service (IIS) officers are responsible for managing public information and media relations for the Government of India. Recruited through UPSC CSE, they work in PIB, Doordarshan, All India Radio, and various ministries.",
        link: "https://upsc.gov.in/",
        name: "IIS via UPSC CSE",
        category: "Civil Services",
        eligibility: JSON.stringify([
          "Same as UPSC CSE: Age 21 to 32 years (relaxation for reserved categories) and a bachelor’s degree in any stream."
        ]),
        examPattern: JSON.stringify([
          "Follows the complete UPSC Civil Services Examination (CSE) structure:",
          "1. Preliminary Examination (Objective Type - Qualifying).",
          "2. Mains Examination (Descriptive Type - Written).",
          "3. Interview (Personality Test).",
          "Allocation to IIS cadre is based on the candidate's rank in the CSE, preference indicated, and vacancy availability."
        ]),
        fees: 'General/OBC Male : ₹100 , SC/ST/Female/PwD : ₹0',
        examMode: "Same as UPSC CSE: Prelims (Offline OMR), Mains (Offline Written), Interview (Offline).",
        attemptLimit: "Same as UPSC CSE (General/EWS: 6, OBC: 9, SC/ST: No limit till age).",
        salary: "Indian Information Service (IIS) officers start at the Junior Time Scale, Pay Level 10 (₹56,100 – ₹1,77,500) under the 7th CPC, along with DA, HRA, and transport allowances. The gross entry-level salary typically ranges from ₹80,000 to ₹95,000+ per month depending on posting and city classification.",

        examDate: "The Indian Information Service (IIS) recruitment follows the **UPSC Civil Services Examination (CSE) schedule**, with the **Preliminary Exam usually held in May or June**, the **Mains Exam around September to December**, and the **Interview/Personality Test between February and April** of the following year."

      },
      {
        title: "Indian Trade Service (ITS) via UPSC CSE",
        desc: "The Indian Trade Service (ITS) is a Group 'A' service under the Ministry of Commerce and Industry, responsible for international trade policy formulation, promotion, and regulation. Officers are selected through the UPSC Civil Services Exam.",
        link: "https://upsc.gov.in/",
        name: "ITS via UPSC CSE",
        category: "Civil Services",
        eligibility: JSON.stringify([
          "Same as UPSC CSE: 21 to 32 years (relaxation for reserved categories) and graduate from a recognized university."
        ]),
        examPattern: JSON.stringify([
          "Follows the complete UPSC Civil Services Examination (CSE) structure:",
          "1. Preliminary Examination (Objective Type - Qualifying).",
          "2. Mains Examination (Descriptive Type - Written).",
          "3. Interview (Personality Test).",
          "Allocation to ITS cadre is based on the candidate's rank in the CSE, preference indicated, and vacancy availability."
        ]),
        fees: 'General/OBC Male : ₹100 , SC/ST/Female/PwD : ₹0',
        examMode: "Same as UPSC CSE: Prelims (Offline OMR), Mains (Offline Written), Interview (Offline).",
        attemptLimit: "Same as UPSC CSE (General/EWS: 6, OBC: 9, SC/ST: No limit till age).",
        salary: "Indian Trade Service (ITS) officers start at the Junior Time Scale, Pay Level 10 (₹56,100 – ₹1,77,500) under the 7th CPC, along with DA, HRA, and transport allowances. The gross entry-level salary typically ranges from ₹80,000 to ₹95,000+ per month depending on posting and city classification.",
        examDate: "The ITS recruitment follows the UPSC Civil Services Exam schedule — the Preliminary Exam is usually held in May or June, the Mains Exam between September and December, and the Interview/Personality Test between February and April of the following year.",
      },

      {
        title: "Railway Recruitment Board Non-Technical Popular Categories (RRB NTPC)",
        desc: "The RRB NTPC exam recruits candidates for various non-technical posts such as Clerk, Typist, Station Master, and Goods Guard in Indian Railways. It is one of the largest government recruitment exams in India.",
        link: "https://indianrailways.gov.in/",
        name: "RRB NTPC",
        category: "Railway Exams",
        eligibility: JSON.stringify([
          "Undergraduate Posts: 12th pass or equivalent from a recognized board.",
          "Graduate Posts: Bachelor's degree in any discipline from a recognized university.",
          "Age Limit: 18 to 33 years (relaxation for reserved categories)."
        ]),
        examPattern: JSON.stringify([
          "1. CBT Stage 1 (Objective - Common for all).",
          "2. CBT Stage 2 (Objective - Post-specific).",
          "3. Typing Skill Test/Computer Based Aptitude Test (for certain posts).",
          "4. Document Verification and Medical Examination."
        ]),
        fees: 'General/OBC : ₹500 (₹400 refunded after appearing in CBT) , SC/ST/Female/Transgender/Minorities/EBC : ₹250 (₹250 refunded after appearing in CBT)',
        examMode: "Online Computer-Based Test (CBT).",
        attemptLimit: "No fixed attempt limit; subject to age eligibility.",
        salary: "For undergraduate posts, the starting basic pay is ₹19,900 (Level 2). For graduate-level posts, the pay ranges from ₹29,200 (Level 5) to ₹35,400 (Level 6). Including allowances, the monthly in-hand salary typically falls between ₹28,000 – ₹48,000 depending on post and location.",
        examDate: "RRB NTPC exam notifications are generally released between May and June, and the CBT stages are held during July to September of the recruitment year."
      },
      {
        title: "Railway Recruitment Board Assistant Loco Pilot (RRB ALP)",
        desc: "The RRB ALP exam recruits candidates for the post of Assistant Loco Pilot who assist in driving and maintaining locomotives across Indian Railways. It is a technical and safety-critical position.",
        link: "https://indianrailways.gov.in/",
        name: "RRB ALP",
        category: "Railway Exams",
        eligibility: JSON.stringify([
          "Educational Qualification: Matriculation/SSLC plus ITI or Diploma in Mechanical/Electrical/Electronics/Automobile Engineering.",
          "Age Limit: 18 to 30 years (relaxation for reserved categories)."
        ]),
        examPattern: JSON.stringify([
          "1. CBT Stage 1 (Objective - Screening).",
          "2. CBT Stage 2 (Technical + General).",
          "3. Computer-Based Aptitude Test (for Loco Pilot only).",
          "4. Document Verification and Medical Exam."
        ]),
        fees: 'General/OBC : ₹500 (₹400 refunded after CBT) , SC/ST/Female/Transgender/Minorities/EBC : ₹250 (₹250 refunded after CBT)',
        examMode: "Online Computer-Based Test (CBT).",
        attemptLimit: "No fixed attempt limit; subject to age eligibility.",
        salary: "Assistant Loco Pilots are placed in Pay Level 2 with a basic pay of ₹19,900 per month under the 7th CPC. Including DA, HRA, and running allowance, the gross monthly salary usually ranges from ₹35,000 – ₹42,000 depending on posting and duty hours.",
        examDate: "RRB ALP exams are usually conducted between April and June, with notifications released in the first quarter (January–March) of the year."
      },
      {
        title: "Railway Recruitment Board Junior Engineer (RRB JE)",
        desc: "The RRB JE exam recruits candidates for technical posts such as Junior Engineer, Depot Material Superintendent, and Chemical & Metallurgical Assistant in various departments of Indian Railways.",
        link: "https://indianrailways.gov.in/",
        name: "RRB JE",
        category: "Railway Exams",
        eligibility: JSON.stringify([
          "Educational Qualification: Diploma/Degree in Engineering or relevant stream from a recognized institution.",
          "Age Limit: 18 to 33 years (relaxation for reserved categories)."
        ]),
        examPattern: JSON.stringify([
          "1. CBT Stage 1 (Objective).",
          "2. CBT Stage 2 (Technical Subject-based).",
          "3. Document Verification and Medical Examination."
        ]),
        fees: 'General/OBC : ₹500 (₹400 refunded after CBT) , SC/ST/Female/Transgender/Minorities/EBC : ₹250 (₹250 refunded after CBT)',
        examMode: "Online Computer-Based Test (CBT).",
        attemptLimit: "No fixed attempt limit; based on age eligibility.",
        salary: "Junior Engineers are appointed in Pay Level 6 (₹35,400 – ₹1,12,400) under the 7th CPC. Including DA, HRA, and TA, the gross in-hand salary ranges from ₹45,000 – ₹55,000 per month depending on posting location.",
        examDate: "RRB JE exam notifications are usually released around July to September, with CBTs conducted between September and November in most recruitment cycles."
      },
      {
        title: "Railway Recruitment Board Group D Exam (RRB Level 1)",
        desc: "The RRB Group D exam recruits candidates for various Level 1 posts such as Track Maintainer, Helper, and Assistant in technical departments of Indian Railways.",
        link: "https://indianrailways.gov.in/",
        name: "RRB Group D",
        category: "Railway Exams",
        eligibility: JSON.stringify([
          "Educational Qualification: 10th pass (Matriculation) or ITI from NCVT/SCVT recognized institution.",
          "Age Limit: 18 to 33 years (relaxation for reserved categories)."
        ]),
        examPattern: JSON.stringify([
          "1. Computer-Based Test (CBT) - Objective type.",
          "2. Physical Efficiency Test (PET).",
          "3. Document Verification and Medical Examination."
        ]),
        fees: 'General/OBC : ₹500 (₹400 refunded after CBT) , SC/ST/Female/Transgender/Minorities/EBC : ₹250 (₹250 refunded after CBT)',
        examMode: "Online Computer-Based Test (CBT).",
        attemptLimit: "No fixed attempt limit; based on age eligibility.",
        salary: "RRB Group D employees are appointed in Pay Level 1 with a basic pay of ₹18,000 per month under the 7th CPC. Including DA, HRA, and other benefits, the gross monthly salary typically ranges from ₹22,000 – ₹25,000 depending on location.",
        examDate: "The RRB Group D examination is typically conducted between October and December, with official notifications usually released around July to August each year."
      },
      {
        title: "Railway Recruitment Board Paramedical Categories Exam",
        desc: "The RRB Paramedical exam recruits candidates for various healthcare and technical positions in Indian Railways such as Staff Nurse, Pharmacist, Lab Assistant, Health Inspector, and others. These roles support the medical departments across railway zones and hospitals.",
        link: "https://indianrailways.gov.in/",
        name: "RRB Paramedical Categories",
        category: "Railway Exams",
        eligibility: JSON.stringify([
          "Educational Qualification: Varies by post — minimum qualification ranges from 10+2 with Science to a Bachelor’s Degree or Diploma in relevant paramedical field (e.g., Nursing, Pharmacy, Lab Technology).",
          "Age Limit: Generally 18 to 33 years (may vary by post; relaxation for reserved categories)."
        ]),
        examPattern: JSON.stringify([
          "1. Computer-Based Test (CBT) - Objective type, single stage.",
          "2. Document Verification.",
          "3. Medical Fitness Examination."
        ]),
        fees: 'General/OBC : ₹500 (₹400 refunded after CBT) , SC/ST/Female/Transgender/Minorities/EBC : ₹250 (₹250 refunded after CBT)',
        examMode: "Online Computer-Based Test (CBT).",
        attemptLimit: "No fixed attempt limit; subject to age eligibility.",
        salary: "The salary varies by post — for example, Staff Nurse (Level 7) receives ₹44,900 per month basic pay, Pharmacist (Level 5) ₹29,200, and Lab Assistant (Level 3) ₹21,700. Including allowances, the gross monthly salary typically ranges between ₹35,000 – ₹60,000 depending on post and city of posting.",
        examDate: "RRB Paramedical exams are generally conducted between June and August, with notifications usually released between March and May in the recruitment year."
      },
      {
        title: "Central Teacher Eligibility Test (CTET)",
        desc: "The Central Teacher Eligibility Test is conducted by the Central Board of Secondary Education (CBSE) as a national-level exam to determine eligibility for teaching posts in central government schools (e.g., Kendriya Vidyalaya Sangathan, Navodaya Vidyalaya Samiti).",
        link: "https://ctet.nic.in/",
        name: "CTET",
        category: "Teaching & Education",
        eligibility: JSON.stringify([
          "Paper I: For classes I to V – 12th pass + D.El.Ed/B.Ed or equivalent.",
          "Paper II: For classes VI to VIII – Graduate + B.Ed or equivalent.",
          "No upper age limit; however eligibility conditions as per notification apply."
        ]),
        examPattern: JSON.stringify([
          "Paper I (Primary Stage) – Online objective type (150 questions).",
          "Paper II (Elementary Stage) – Online objective type (150 questions).",
          "Marks: +1 for correct; No negative marking.",
          "Qualifying certificate valid for life (or as per latest rules)."
        ]),
        fees: 'General/OBC : ₹1000 (approx) , SC/ST/PH : ₹500 (approx)',
        examMode: "Online (Computer Based Test)",
        attemptLimit: "No fixed attempt limit (subject to eligibility rules).",
        salary: "Teachers recruited through CTET-eligible posts in central schools start with pay scales: for PRT ~ ₹35,400 basic pay (as per 7th CPC) and for TGT/PGT higher; gross monthly salary typically ranges from ~₹44,900 to ~₹1,42,400 depending on level and experience. :contentReference[oaicite:4]{index=4}",
        examDate: "The CTET is usually conducted **twice a year**, with notifications released around **March–April** for the July session and **September–October** for the December session; exams held in **July** and **December** respectively. :contentReference[oaicite:5]{index=5}"
      },
      {
        title: "State Teacher Eligibility Test (TET)",
        desc: "The Teacher Eligibility Test (TET) is conducted by individual State Education Departments (e.g., UPTET, HTET, CTET etc) to recruit teachers in state government schools for classes I–VIII.",
        link: "Varies by state (e.g., upbasiceduboard.gov.in for UPTET)",
        name: "State TET (e.g., UPTET/HTET)",
        category: "Teaching & Education",
        eligibility: JSON.stringify([
          "For primary level: 12th pass + D.El.Ed or equivalent.",
          "For upper-primary level: Graduate + B.Ed or equivalent.",
          "Age limit varies by state; typically 18 to 40 years (relaxation for reserved categories)."
        ]),
        examPattern: JSON.stringify([
          "Paper I: For classes I to V – objective type.",
          "Paper II: For classes VI to VIII – objective type.",
          "Total marks and duration vary by state.",
          "No negative marking in many states."
        ]),
        fees: 'General/OBC : ₹600–₹1000 (approx) , SC/ST/PH : ₹300–₹500 (approx)',
        examMode: "Online or Offline (depending on state) Computer/OMR mode.",
        attemptLimit: "No fixed attempt limit; depends on state rules.",
        salary: "Permanent teachers recruited via TET in state government schools come under pay scales which depending on level (PRT/TGT) start at basic pay ~₹35,400 (for PRT) and ~₹44,900 (for TGT) per month as per 7th CPC; gross salary typically ~₹42,000-₹60,000 monthly. :contentReference[oaicite:12]{index=12}",
        examDate: "State TET exams are typically held annually or biennially; notification months vary by state but often in **January–March**, and exams held in **June–October**. :contentReference[oaicite:13]{index=13}"
      },
      {
        title: "Bihar Teacher Recruitment Examination (TRE) / Secondary Level Teacher Recruitment",
        desc: "The Bihar Public Service Commission (BPSC) conducts the Teacher Recruitment Examination (TRE) for recruitment of Primary/Middle/Secondary Teacher posts in Bihar government schools.",
        link: "https://bpsc.bih.nic.in/",
        name: "BPSC TRE",
        category: "Teaching & Education",
        eligibility: JSON.stringify([
          "For Primary Teacher: 10+2 + D.El.Ed / B.El.Ed or equivalent.",
          "For Middle/Secondary Teacher: Graduate + B.Ed or equivalent.",
          "Age limit typically 18 to 37 years (relaxation as per categories)."
        ]),
        examPattern: JSON.stringify([
          "Stage I: Written Exam (Objective type) for eligibility.",
          "Stage II: Written/Descriptive for subject wise (depending on post).",
          "Stage III: Interview/Document Verification."
        ]),
        fees: 'General/OBC : ₹600 (approx) , SC/ST/PH : ₹300 (approx)',
        examMode: "Online Computer Based Test / Offline depending on notification.",
        attemptLimit: "No defined attempt limit; age limit applies.",
        salary: "Teachers recruited under BPSC TRE are paid as per Bihar state pay scales; starting salaries for Primary/Upper Primary teachers are around ₹25,000-₹35,000 per month in early years; with experience the gross monthly salary can go higher. :contentReference[oaicite:16]{index=16}",
        examDate: "The BPSC TRE is usually conducted every few years; the notification is often issued around **January–March**, and the written exam generally in **April–June**. :contentReference[oaicite:17]{index=17}"
      },
      {
        title: "University Grants Commission National Eligibility Test (UGC-NET)",
        desc: "The UGC‑NET is conducted by the National Testing Agency (NTA) on behalf of the University Grants Commission. It determines eligibility for Assistant Professorship and Junior Research Fellowship in Indian universities and colleges.",
        link: "https://ugcnet.nta.nic.in/",
        name: "UGC NET",
        category: "Teaching & Education",
        eligibility: JSON.stringify([
          "Master’s degree or equivalent with at least 55% (50% for reserved categories).",
          "No age limit for Assistant Professor eligibility; age-limit applies for JRF as per notification."
        ]),
        examPattern: JSON.stringify([
          "Paper I: General Aptitude (100 questions, 100 marks).",
          "Paper II: Subject-specific (each candidate chooses one subject; 100 questions, 200 marks).",
          "Marks: +2 for correct answer; -0.5 for wrong answer (in some sessions)."
        ]),
        fees: 'General/OBC : ₹1000 (approx) , SC/ST/PH : ₹500 (approx)',
        examMode: "Online (Computer Based Test)",
        attemptLimit: "No fixed attempt limit.",
        salary: "Assistant Professors recruited via UGC NET typically come in pay scale Level 10 (₹56,100 – ₹1,77,500) plus allowances; starting gross monthly salary is approximately ₹80,000-₹95,000+ depending on institution and city. :contentReference[oaicite:9]{index=9}",
        examDate: "The UGC NET is usually conducted **twice a year**, with the exam months around **June** and **December** (notifications earlier). :contentReference[oaicite:10]{index=10}"
      },
      {
        title: "Kendriya Vidyalaya Sangathan (KVS) Teacher Recruitment",
        desc: "Kendriya Vidyalaya Sangathan (KVS) conducts recruitment for various teaching posts including PRT, TGT, and PGT across Kendriya Vidyalayas in India. These teachers work under the Ministry of Education, Government of India, and handle CBSE-affiliated school education.",
        link: "https://kvsangathan.nic.in/",
        name: "KVS Teacher Recruitment",
        category: "Teaching & Education",
        eligibility: JSON.stringify([
          "PRT: 12th + D.El.Ed or B.El.Ed or equivalent and CTET Paper I qualified.",
          "TGT: Bachelor’s Degree in the concerned subject + B.Ed and CTET Paper II qualified.",
          "PGT: Master’s Degree in concerned subject + B.Ed from a recognized university."
        ]),
        examPattern: JSON.stringify([
          "1. Written Examination (Objective Type – Computer Based Test).",
          "2. Interview/Skill Test (depending on the post).",
          "3. Document Verification and Medical Examination."
        ]),
        fees: 'General/OBC : ₹1000 , SC/ST/PwD/Female : ₹0',
        examMode: "Online Computer-Based Test (CBT) followed by an Interview.",
        attemptLimit: "No fixed attempt limit; can apply till upper age limit is reached.",
        salary: "Salary as per 7th CPC: PRT – Pay Level 6 (₹35,400–₹1,12,400), TGT – Pay Level 7 (₹44,900–₹1,42,400), PGT – Pay Level 8 (₹47,600–₹1,51,100) plus allowances.",
        examDate: "KVS recruitment exam is usually held once every 1–2 years, with notifications commonly released between December and February."
      },
      {
        title: "Navodaya Vidyalaya Samiti (NVS) Teacher Recruitment",
        desc: "The Navodaya Vidyalaya Samiti (NVS) conducts recruitment for PGTs, TGTs, and miscellaneous category teachers for Jawahar Navodaya Vidyalayas across India. It is an autonomous body under the Ministry of Education, Government of India.",
        link: "https://navodaya.gov.in/",
        name: "NVS Teacher Recruitment",
        category: "Teaching & Education",
        eligibility: JSON.stringify([
          "TGT: Bachelor’s Degree in concerned subject with B.Ed and CTET Paper II qualified.",
          "PGT: Master’s Degree in subject with B.Ed from a recognized university.",
          "Music/Art/Physical Education: Degree/Diploma in respective field from recognized institution."
        ]),
        examPattern: JSON.stringify([
          "1. Computer-Based Test (Objective Type).",
          "2. Interview/Skill Test (for selected posts).",
          "3. Document Verification."
        ]),
        fees: 'General/OBC/EWS : ₹1500 (PGT) / ₹1000 (TGT) , SC/ST/PwD/Female : ₹0',
        examMode: "Online CBT followed by Interview or Skill Test.",
        attemptLimit: "No attempt limit; subject to upper age limit.",
        salary: "As per 7th CPC – TGT: Pay Level 7 (₹44,900–₹1,42,400), PGT: Pay Level 8 (₹47,600–₹1,51,100) plus allowances and residential accommodation benefits.",
        examDate: "NVS recruitment is typically held once every 1–2 years; notifications often released between June and September."
      },


    ],
    skipDuplicates: true
  })
  console.log(exams);
}

main().catch((e) => console.log(e)).finally(async () => { await prisma.$disconnect()});

export default prisma;


