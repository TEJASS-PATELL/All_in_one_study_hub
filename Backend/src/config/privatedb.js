import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
    const privatejob = await prisma.privateJob.createMany({
        data: [
            {
                title: "Mechanical Design Engineer – CAD & Manufacturing",
                desc: "As a Mechanical Design Engineer, you will be responsible for creating 2D and 3D CAD models, preparing detailed engineering drawings, and collaborating with manufacturing teams to bring designs into production. You will optimize designs for cost, performance, and manufacturability using tools like SolidWorks, AutoCAD, or Creo, and must understand GD&T and material properties.",
                category: "Core Engineering",
                syllabus: "Aptitude, Engineering Drawing, Manufacturing Processes, Strength of Materials, Machine Design, GD&T, CAD Tools (SolidWorks/Creo/AutoCAD).",
                selectionStage: "Aptitude Test → Technical Interview → HR Interview (may include CAD skill test or portfolio review).",
                skills: "SolidWorks, AutoCAD, CATIA, GD&T, Material Selection, Design Optimization, Team Collaboration.",
                tips: "Revise key design concepts, practice CAD modeling daily, study past design case studies, and prepare a project portfolio showing your work."
            },
            {
                title: "Electrical Maintenance Engineer – Industrial Systems",
                desc: "An Electrical Maintenance Engineer ensures smooth operation and upkeep of electrical systems in industrial plants. Responsibilities include troubleshooting, preventive maintenance, and handling breakdowns in motors, transformers, PLCs, and power distribution units. Knowledge of electrical safety standards and control systems is crucial.",
                category: "Core Engineering",
                syllabus: "Electrical Machines, Power Systems, Control Systems, PLC Programming, Basic Electronics, Safety & Maintenance Practices.",
                selectionStage: "Written Test (Aptitude + Electrical Basics) → Technical Interview → HR Interview.",
                skills: "PLC, SCADA, Power Distribution, Electrical Safety, Troubleshooting, Circuit Design.",
                tips: "Focus on practical electrical concepts, learn maintenance logs and SOPs, and be prepared to discuss past troubleshooting experiences."
            },
            {
                title: "Civil Project Manager – Construction & Infrastructure",
                desc: "A Civil Project Manager oversees large construction and infrastructure projects, managing teams, contractors, budgets, and timelines. The role requires ensuring compliance with safety, design standards, and environmental regulations while coordinating resources efficiently.",
                category: "Core Engineering",
                syllabus: "Project Management, Structural Analysis, Construction Materials, Estimation & Costing, Environmental Engineering, Contracts & Tenders.",
                selectionStage: "Aptitude + Technical Test → Project Case Study or GD → HR Interview.",
                skills: "MS Project, AutoCAD Civil 3D, Estimation, Team Leadership, Vendor Management, Communication Skills.",
                tips: "Gain hands-on site experience, understand contract documents, and strengthen leadership & communication skills for handling teams."
            },
            {
                title: "Automation Engineer – Industrial Control Systems",
                desc: "An Automation Engineer designs and implements control systems that improve production efficiency. The role involves PLC/SCADA programming, robotics integration, and sensor configuration. Familiarity with industrial IoT and Industry 4.0 technologies is a plus.",
                category: "Core Engineering",
                syllabus: "Control Systems, PLC Programming, SCADA, Industrial Networking, Sensors & Actuators, Embedded Systems, Electrical Circuits.",
                selectionStage: "Aptitude Test → Technical Interview (PLC/SCADA Questions) → HR Interview.",
                skills: "PLC, SCADA, HMI, Robotics, IoT, Industrial Communication, Problem Solving.",
                tips: "Learn PLC ladder logic practically, study automation case studies, and prepare for scenario-based troubleshooting questions."
            },
            {
                title: "Robotics Engineer – Industrial Applications",
                desc: "A Robotics Engineer is responsible for designing, programming, and maintaining robotic systems in manufacturing environments. The work includes automation integration, robotics programming, testing, and ensuring operational safety and precision.",
                category: "Core Engineering",
                syllabus: "Robotics Fundamentals, Sensors, Kinematics, Control Systems, Embedded Systems, C/C++, Python, ROS Framework.",
                selectionStage: "Aptitude + Programming Test → Technical Interview (Robotics & Control Systems) → HR Interview.",
                skills: "ROS, Python, C++, Embedded Systems, Kinematics, Mechatronics, Control Theory.",
                tips: "Build robotics mini-projects, master ROS basics, understand sensor integration, and prepare to demonstrate automation logic practically."
            },
            {
                title: "Junior Accountant – Accounts Payable & Receivable",
                desc: "As a Junior Accountant, you will manage bookkeeping, accounts payable/receivable, journal entries, and bank reconciliations. This entry-level role suits B.Com or M.Com graduates looking to start a career in accounting. Familiarity with Tally ERP and MS Excel is essential.",
                category: "Finance & Accounting",
                syllabus: "Basic Accounting Principles, Journal Entries, Ledger Posting, GST, TDS, MS Excel Formulas, Tally ERP.",
                selectionStage: "Aptitude Test → Accounting/Excel Test → HR Interview.",
                skills: "Tally, MS Excel, Accounting Entries, Reconciliation, GST Knowledge, Attention to Detail.",
                tips: "Revise fundamental accounting concepts, practice Excel shortcuts, and prepare for scenario-based questions on journal entries."
            },
            {
                title: "Accounts Executive – General Ledger",
                desc: "The Accounts Executive handles general ledger activities, vendor reconciliations, monthly closings, and expense tracking. Candidates with 1–3 years of experience or exposure to ERP tools like SAP, Oracle, or QuickBooks are preferred.",
                category: "Finance & Accounting",
                syllabus: "General Ledger Accounting, Accounts Payable/Receivable, Trial Balance, Financial Reporting, ERP Basics, MS Excel.",
                selectionStage: "Written Test (Accounting + Aptitude) → Technical Interview → HR Interview.",
                skills: "SAP, Oracle, Tally, Excel (Pivot Tables, VLOOKUP), Financial Reporting, Analytical Thinking.",
                tips: "Understand journal posting cycles, learn to prepare a trial balance, and practice Excel-based data tasks commonly used in audits."
            },
            {
                title: "Audit Associate – Internal & External Audit",
                desc: "As an Audit Associate, you’ll assist audit teams in examining internal controls, preparing audit schedules, and verifying compliance with accounting standards. Suitable for B.Com, CA Inter, or CMA Inter students/freshers.",
                category: "Finance & Accounting",
                syllabus: "Auditing Principles, Internal Controls, Accounting Standards, Risk Assessment, Sampling Techniques, Excel Reporting.",
                selectionStage: "Aptitude/Technical Test → Case Study Discussion → HR Interview.",
                skills: "Audit Documentation, Risk Analysis, MS Excel, Accounting Standards (AS/IND AS), Communication.",
                tips: "Revise basic auditing procedures, understand sample audit report formats, and stay updated with current statutory audit norms."
            },
            {
                title: "Tax Associate – Direct & Indirect Tax",
                desc: "A Tax Associate assists in GST filing, TDS calculations, and income tax return preparation. The role requires strong understanding of taxation laws and compliance requirements.",
                category: "Finance & Accounting",
                syllabus: "Income Tax, GST, TDS, Corporate Taxation, Accounting Standards, Excel for Tax Computations.",
                selectionStage: "Aptitude + Taxation Test → Technical Interview → HR Round.",
                skills: "GST Filing, TDS Return Preparation, Tax Computation, Excel, Tally, Compliance Documentation.",
                tips: "Practice real-life tax return examples, revise tax slabs, and understand filing processes and deadlines."
            },
            {
                title: "Financial Analyst – Entry Level (FP&A)",
                desc: "As a Financial Analyst, you’ll work on budgeting, forecasting, and financial data analysis for management decisions. Ideal for MBA Finance or CFA Level 1 candidates with analytical and Excel/Power BI skills.",
                category: "Finance & Accounting",
                syllabus: "Financial Statements, Ratio Analysis, Budgeting, Forecasting, Excel (Formulas, Dashboards), Power BI/Tableau.",
                selectionStage: "Aptitude Test → Case Study/Excel Assessment → HR Interview.",
                skills: "Financial Modeling, Excel, Power BI, Data Analysis, Forecasting, Presentation Skills.",
                tips: "Learn to analyze balance sheets and cash flows, build financial dashboards, and interpret business KPIs effectively."
            },
            {
                title: "Payroll Associate – HR & Finance Support",
                desc: "Payroll Associates are responsible for employee salary processing, maintaining attendance data, and ensuring statutory compliance like PF, ESI, and TDS deductions.",
                category: "Finance & Accounting",
                syllabus: "Payroll Management, Statutory Compliance, Income Tax, Excel Formulas, Employee Records, Salary Structure.",
                selectionStage: "Aptitude + Payroll/Excel Test → HR Interview.",
                skills: "Excel (Payroll Templates), Tally Payroll, PF/ESI/TDS Rules, Confidential Data Handling, Time Management.",
                tips: "Understand payslip components, learn statutory compliance rules, and practice Excel automation for salary sheets."
            },
            {
                title: "Accounts Assistant – Entry Level",
                desc: "An Accounts Assistant supports daily financial operations, including invoice entry, petty cash handling, and assisting with monthly closing activities. Ideal for fresh B.Com/M.Com graduates.",
                category: "Finance & Accounting",
                syllabus: "Basic Accounting, Ledger Entries, Bank Reconciliation, GST Basics, MS Excel, Journal Entries.",
                selectionStage: "Aptitude + Excel Test → Technical Interview → HR Interview.",
                skills: "Tally, Excel, Bookkeeping, Reconciliation, Data Entry, Communication.",
                tips: "Revise accounting basics, practice Excel daily, and gain exposure to Tally or similar accounting software."
            },
            {
                title: "Billing & Invoicing Executive",
                desc: "The Billing Executive generates invoices, tracks client payments, and ensures timely billing and proper documentation. Accuracy and Excel proficiency are essential.",
                category: "Finance & Accounting",
                syllabus: "Billing Process, GST, Excel Formulas, Data Management, Accounting Basics, Client Coordination.",
                selectionStage: "Aptitude/Excel Test → Technical Interview → HR Interview.",
                skills: "MS Excel, Billing Software, Communication, Accuracy, Time Management.",
                tips: "Learn to prepare professional invoices, manage payment follow-ups, and ensure timely reconciliation with clients."
            },

            {
                title: "Aerospace Engineer – Aircraft & Space Systems",
                desc: "As an Aerospace Engineer, you will work on the design, development, and testing of aircraft, spacecraft, and propulsion systems. This role involves aerodynamic modeling, simulation, and system integration to enhance safety, fuel efficiency, and performance. Collaboration with R&D and manufacturing teams is key to achieving sustainable aerospace innovations.",
                category: "Core Engineering",
                syllabus: "Aerodynamics, Thermodynamics, Propulsion Systems, Flight Mechanics, Materials Science, CAD/CAM, Control Systems.",
                selectionStage: "Aptitude Test → Technical Test → Technical + HR Interview.",
                skills: "CATIA, ANSYS, MATLAB, CFD Tools, SolidWorks, Problem Solving, Analytical Thinking.",
                tips: "Focus on core subjects like propulsion and fluid mechanics, learn simulation tools, and stay updated on space research trends."
            },
            {
                title: "Multimedia Designer",
                desc: "As a Multimedia Designer, you will create engaging visuals, animations, and interactive media for websites, marketing campaigns, and digital platforms. The role demands creativity, visual storytelling, and proficiency in multiple design software.",
                category: "Design & Multimedia",
                syllabus: "Graphic Design Principles, Animation Basics, Motion Graphics, Typography, UI Design, Storyboarding.",
                selectionStage: "Portfolio Submission → Design Aptitude Test → HR Interview.",
                skills: "Adobe Photoshop, After Effects, Premiere Pro, Illustrator, Figma, Creativity, Time Management.",
                tips: "Build a strong digital portfolio, stay updated with design trends, and learn animation or motion graphics to stand out."
            },
            {
                title: "Graphic Designer",
                desc: "A Graphic Designer is responsible for creating visual content for marketing materials, websites, social media, and branding campaigns. The role requires creative thinking and attention to visual aesthetics.",
                category: "Design & Multimedia",
                syllabus: "Design Principles, Color Theory, Branding, Typography, Layout Design, Image Editing.",
                selectionStage: "Portfolio Review → Design Task → HR Interview.",
                skills: "Adobe Photoshop, Illustrator, Canva, Creativity, Branding, Communication.",
                tips: "Work on real-life design projects, improve your sense of color and balance, and showcase your designs on platforms like Behance or Dribbble."
            },
            {
                title: "UI/UX Designer",
                desc: "As a UI/UX Designer, you will design user interfaces, conduct usability testing, and enhance overall digital user experience. The goal is to create intuitive, accessible, and visually appealing applications or websites.",
                category: "Design & Multimedia",
                syllabus: "User Research, Wireframing, Prototyping, Interaction Design, Design Thinking, Usability Testing.",
                selectionStage: "Portfolio + Case Study Review → Design Challenge → HR Interview.",
                skills: "Figma, Adobe XD, User Research, Wireframing, UX Writing, Prototyping, Communication.",
                tips: "Build detailed UX case studies, learn about accessibility guidelines, and practice user flow mapping with real-world apps."
            },
            {
                title: "Video Editor",
                desc: "A Video Editor is responsible for editing and assembling recorded footage into finished projects that align with creative vision. You’ll work on advertisements, short films, and digital marketing content.",
                category: "Design & Multimedia",
                syllabus: "Editing Techniques, Storytelling, Color Grading, Audio Syncing, Transitions, Motion Graphics.",
                selectionStage: "Portfolio/Showreel Review → Editing Task → HR Interview.",
                skills: "Adobe Premiere Pro, After Effects, Final Cut Pro, DaVinci Resolve, Storytelling, Attention to Detail.",
                tips: "Focus on pacing and transitions, practice color grading, and create a demo reel showcasing your best edited clips."
            },
            {
                title: "HR Recruiter",
                desc: "As an HR Recruiter, you will be responsible for sourcing, screening, and hiring candidates for various technical and non-technical positions. You’ll collaborate with hiring managers, manage interviews, and ensure a smooth onboarding process.",
                category: "Human Resources",
                syllabus: "Recruitment Process, Screening & Shortlisting, Interview Techniques, ATS Tools, Communication Skills.",
                selectionStage: "Resume Screening → HR Interview → Final Managerial Round.",
                skills: "Communication, Negotiation, MS Excel, HR Tools (Naukri, LinkedIn Recruiter, Zoho Recruit), Candidate Assessment.",
                tips: "Build a strong understanding of job descriptions, improve interview questioning skills, and maintain candidate relationships."
            },
            {
                title: "Talent Acquisition Specialist",
                desc: "A Talent Acquisition Specialist develops strategies to attract and hire top talent. You’ll handle end-to-end recruitment, employer branding, and workforce planning for different departments.",
                category: "Human Resources",
                syllabus: "Strategic Hiring, Employer Branding, Market Research, Talent Mapping, HR Analytics.",
                selectionStage: "Profile Shortlisting → Technical HR Round → Strategy Discussion/Case Study.",
                skills: "Sourcing, Networking, Data Analysis, ATS Software, Strategic Planning.",
                tips: "Focus on proactive sourcing, maintain a talent pipeline, and align hiring strategies with company goals."
            },
            {
                title: "HR Generalist",
                desc: "The HR Generalist manages overall HR operations including payroll, performance management, employee engagement, and compliance. You’ll act as a bridge between employees and management.",
                category: "Human Resources",
                syllabus: "Payroll Processing, Employee Relations, HR Policies, Statutory Compliance, Performance Appraisal.",
                selectionStage: "HR Round → Case Scenario Discussion → Management Interview.",
                skills: "Communication, HRIS Tools, Payroll Systems, Problem Solving, Employee Engagement.",
                tips: "Understand labor laws, learn HR documentation, and build empathy-driven communication with employees."
            },
            {
                title: "Compensation & Benefits Manager",
                desc: "As a Compensation & Benefits Manager, you will design and manage employee salary structures, incentives, and benefits programs to ensure fair and competitive pay across the organization.",
                category: "Human Resources",
                syllabus: "Compensation Planning, Salary Benchmarking, Payroll Management, Benefits Administration, Taxation Basics.",
                selectionStage: "Technical HR Interview → Compensation Case Study → Final Round.",
                skills: "Excel, HR Analytics, Payroll Software, Budget Planning, Analytical Thinking.",
                tips: "Study industry salary trends, ensure compliance with compensation laws, and design performance-based incentive models."
            },
            {
                title: "Learning & Development Manager",
                desc: "The Learning & Development (L&D) Manager is responsible for identifying skill gaps, creating training modules, and improving employee performance through structured learning programs.",
                category: "Human Resources",
                syllabus: "Training Needs Analysis, Instructional Design, Leadership Development, Soft Skills Training, E-learning Tools.",
                selectionStage: "HR Discussion → Presentation Round → Final Leadership Interview.",
                skills: "Training Design, Communication, Project Management, LMS Tools, Coaching Skills.",
                tips: "Design measurable training outcomes, use feedback tools effectively, and focus on leadership skill development."
            },
            {
                title: "Customer Support Advisor – Voice & Non-Voice Process",
                desc: "As a Customer Support Advisor, you will manage customer interactions through calls, chat, or email. Your goal will be to resolve issues promptly and ensure a positive customer experience.",
                category: "Customer Support",
                syllabus: "Communication Skills, CRM Tools, Problem Solving, Email Etiquette, Time Management.",
                selectionStage: "Communication Test → Role Play/Mock Call → HR Interview.",
                skills: "Active Listening, Patience, CRM Software (Zendesk, Freshdesk), MS Office, Multitasking.",
                tips: "Focus on empathy and clarity in responses, improve typing speed, and learn how to de-escalate tough customer interactions."
            },
            {
                title: "Animator",
                desc: "An Animator creates 2D and 3D animations for films, games, and digital platforms. You’ll bring characters, scenes, and objects to life using motion, storytelling, and design principles.",
                category: "Design & Multimedia",
                syllabus: "2D/3D Animation Principles, Storyboarding, Character Design, Motion Dynamics, Rendering & Lighting.",
                selectionStage: "Portfolio/Animation Reel Review → Animation Task → HR Interview.",
                skills: "Blender, Maya, After Effects, Toon Boom, Creativity, Storytelling.",
                tips: "Master animation fundamentals like timing and spacing, practice short character animations, and build a strong animation showreel."
            },
            {
                title: "Customer Support Specialist – Online Platforms",
                desc: "As a Customer Support Specialist, you will assist users through chat, email, or phone to resolve technical or service-related issues. You’ll maintain quality standards, ensure customer satisfaction, and escalate unresolved problems when necessary.",
                category: "Customer Support",
                syllabus: "Customer Communication, Product Knowledge, Ticket Handling, CRM Tools, Email Writing, Problem Solving.",
                selectionStage: "Online Test → Communication Round → HR Interview.",
                skills: "CRM Software (Zendesk, Freshdesk), Typing Speed, Communication Skills, Troubleshooting, Multitasking.",
                tips: "Develop product knowledge, practice customer empathy, and maintain calm under pressure during customer interactions."
            },
            {
                title: "Customer Support Executive – Client Interaction",
                desc: "In this role, you’ll handle customer inquiries, complaints, and service requests through various channels. You’ll document interactions, follow up for resolution, and ensure a great customer experience.",
                category: "Customer Support",
                syllabus: "Customer Query Handling, Verbal Communication, Call Handling, CRM Tools, Email Etiquette.",
                selectionStage: "Aptitude Test → Voice/Non-Voice Assessment → HR Interview.",
                skills: "Communication, Problem Solving, Active Listening, MS Office, Data Entry Accuracy.",
                tips: "Improve communication tone, handle irate customers professionally, and learn company product FAQs thoroughly."
            },
            {
                title: "Customer Service Supervisor – Team Lead Role",
                desc: "As a Customer Service Supervisor, you will manage a team of support executives, oversee daily operations, ensure service-level compliance, and mentor team members to improve performance.",
                category: "Customer Support",
                syllabus: "Team Management, Quality Monitoring, Performance Metrics, Coaching Skills, Escalation Handling.",
                selectionStage: "Leadership Assessment → Managerial Interview → HR Interview.",
                skills: "Team Leadership, Reporting, Call Quality Analysis, Motivation Skills, CRM System Management.",
                tips: "Develop leadership and communication skills, monitor metrics like AHT & CSAT, and mentor your team for excellence."
            },
            {
                title: "Customer Support Associate – Entry Level",
                desc: "As a Customer Support Associate, you will provide assistance to customers, process basic service requests, and guide users through problem-solving steps. Ideal for freshers entering the customer service industry.",
                category: "Customer Support",
                syllabus: "Basic Communication, Call Etiquette, Email Writing, CRM Software Usage, Issue Resolution.",
                selectionStage: "Telephonic Round → Communication Test → HR Interview.",
                skills: "Active Listening, Data Entry, Patience, Adaptability, Time Management.",
                tips: "Be polite and professional, improve communication tone, and practice clear articulation during support calls."
            },
            {
                title: "Technical Support Representative – IT & Software",
                desc: "As a Technical Support Representative, you’ll provide assistance to users facing software, app, or device issues. You’ll troubleshoot problems, log incidents, and escalate critical bugs to engineers.",
                category: "Customer Support",
                syllabus: "Technical Troubleshooting, Networking Basics, Operating Systems, Ticket Logging, Remote Support Tools.",
                selectionStage: "Technical Test → Problem-Solving Round → HR Interview.",
                skills: "Basic Networking, Windows/Linux OS, Troubleshooting, Remote Tools (TeamViewer), Communication.",
                tips: "Strengthen basic IT knowledge, practice logical troubleshooting, and explain solutions clearly to non-technical users."
            },
            {
                title: "Helpdesk Support Executive – IT & Telecom",
                desc: "The Helpdesk Support Executive will handle customer tickets related to IT and telecom issues. You’ll reset accounts, respond to service requests, and escalate unresolved queries.",
                category: "Customer Support",
                syllabus: "Ticket Management, System Troubleshooting, Networking Fundamentals, Communication, Documentation.",
                selectionStage: "Technical Aptitude Test → Practical Scenario → HR Interview.",
                skills: "Helpdesk Tools (JIRA, ServiceNow), Hardware Basics, Customer Handling, Email Communication, Problem Solving.",
                tips: "Focus on accuracy while documenting issues, maintain clear communication, and gain hands-on exposure to IT support tools."
            }, {
                title: "Chat Support Executive – E-commerce",
                desc: "Handle customer queries via live chat and email for order tracking, refunds, and complaints. This role is suitable for freshers or candidates with up to 2 years of non-voice process experience. Strong written communication skills are required.",
                category: "Customer Support",
                syllabus: "Customer Communication, E-commerce Workflow, Refund/Order Management, Email Etiquette, Chat Etiquette.",
                selectionStage: "Typing & Grammar Test → Chat Simulation Round → HR Interview.",
                skills: "Written Communication, Typing Speed, Empathy, Product Knowledge, CRM Tools (Zendesk, Freshdesk).",
                tips: "Focus on tone and accuracy during chats, stay calm under pressure, and practice handling multiple conversations efficiently."
            },
            {
                title: "Customer Success Associate – SaaS Products",
                desc: "Work with software product users to ensure smooth onboarding, resolve queries, and improve customer satisfaction. Suitable for graduates with 1–4 years of experience in SaaS support, account management, or client relations.",
                category: "Customer Support",
                syllabus: "SaaS Fundamentals, Client Communication, CRM Tools, Onboarding Workflow, Data Analysis Basics.",
                selectionStage: "Product Knowledge Test → Case Study Discussion → HR Interview.",
                skills: "Customer Relationship Management, Product Demos, Problem Solving, CRM Software (HubSpot, Salesforce), Excel.",
                tips: "Understand product workflows deeply, focus on proactive client engagement, and track metrics like churn & retention."
            },
            {
                title: "Sales & Marketing Analyst I – Market Research & Strategy",
                desc: "As a Sales & Marketing Analyst, you will be responsible for gathering and analyzing market data, identifying growth opportunities, and providing insights to support sales strategies. You will track competitor performance, monitor customer behavior, and evaluate the effectiveness of marketing campaigns.",
                category: "Sales & Marketing",
                syllabus: "Market Research, Data Analytics, CRM Tools, Excel & Power BI, Sales Forecasting, Marketing Metrics.",
                selectionStage: "Aptitude Test → Data Case Study → Technical/HR Interview.",
                skills: "Analytical Thinking, Excel/Google Sheets, CRM (Zoho/Salesforce), Market Analysis, Presentation Skills.",
                tips: "Develop Excel dashboards, practice interpreting data insights, and understand marketing KPIs like CAC & ROI."
            },
            {
                title: "Regional Sales & Marketing Professional – Electrical Products",
                desc: "Oversee sales and marketing operations in a specific region, focusing on electrical and industrial products. Responsibilities include channel partner management, distributor coordination, regional demand planning, and execution of promotional activities.",
                category: "Sales & Marketing",
                syllabus: "Sales Planning, Channel Management, Negotiation Skills, Product Knowledge, Market Research.",
                selectionStage: "Field Sales Round → Technical/Product Discussion → HR Interview.",
                skills: "B2B Sales, Distributor Handling, Communication, CRM, Market Analysis, Presentation Skills.",
                tips: "Focus on client relationships, understand industrial products, and stay updated on competitor activities and pricing."
            },
            {
                title: "Sales & Marketing Executive – BFSI Sector",
                desc: "Responsible for driving customer acquisition and revenue growth in the BFSI (Banking, Financial Services, and Insurance) sector. Includes lead generation, product presentations, client relationship management, and executing targeted marketing campaigns.",
                category: "Sales & Marketing",
                syllabus: "Sales Process, Financial Products, Lead Generation, CRM Tools, Marketing Communication.",
                selectionStage: "Aptitude Test → Sales Pitch Assessment → HR Interview.",
                skills: "Negotiation, Lead Conversion, Financial Awareness, CRM Tools, Communication, Client Management.",
                tips: "Understand banking and insurance products, improve sales pitch delivery, and focus on long-term client relationships."
            },
            {
                title: "Sales & Marketing Manager – Business Growth Leadership",
                desc: "As a Sales & Marketing Manager, you will lead a team of professionals to achieve sales targets and execute integrated marketing campaigns. You will be responsible for developing go-to-market strategies, managing budgets, overseeing digital campaigns, and driving brand awareness.",
                category: "Sales & Marketing",
                syllabus: "Sales Strategy, Marketing Planning, Budgeting, Team Leadership, Digital Marketing, Market Research.",
                selectionStage: "Aptitude & Strategy Test → Case Study Round → HR & Leadership Interview.",
                skills: "Leadership, Negotiation, Sales Planning, Campaign Management, Analytics, CRM Tools, Communication.",
                tips: "Develop leadership and analytical skills, understand data-driven marketing, and prepare to discuss previous campaign strategies with measurable outcomes."
            },
            {
                title: "Marketing & Sales Executive – Campaigns & Client Acquisition",
                desc: "The Marketing & Sales Executive will focus on implementing marketing strategies and achieving sales growth through client engagement. Responsibilities include social media promotions, attending client meetings, organizing events, and preparing reports on campaign effectiveness.",
                category: "Sales & Marketing",
                syllabus: "Marketing Basics, Sales Techniques, Client Communication, Digital Campaigns, Social Media Marketing.",
                selectionStage: "Aptitude & Communication Test → Marketing Case Study → HR Interview.",
                skills: "Communication, Social Media Management, Lead Generation, Event Planning, Reporting, Presentation Skills.",
                tips: "Stay confident in client interactions, learn to use marketing tools like Canva & Google Analytics, and keep updated with social media trends."
            },
            {
                title: "Digital Marketing Specialist – SEO & Performance Campaigns",
                desc: "As a Digital Marketing Specialist, you will be responsible for planning and executing digital campaigns across SEO, SEM, social media, and email marketing. You will analyze campaign performance, optimize content for better rankings, and generate leads through paid and organic channels.",
                category: "Sales & Marketing",
                syllabus: "SEO, SEM, Google Ads, Meta Ads, Analytics Tools, Email Marketing, Content Optimization.",
                selectionStage: "Digital Marketing Test → Campaign Strategy Discussion → HR Interview.",
                skills: "SEO Tools (Ahrefs, SEMrush), Google Ads, Meta Ads, Analytics, Content Strategy, Lead Generation.",
                tips: "Master keyword research, understand ad metrics (CTR, CPC, ROI), and maintain a strong digital portfolio showcasing campaign results."
            },
            {
                title: "Business Development Manager – B2B & Client Acquisition",
                desc: "The Business Development Manager will focus on generating new business opportunities, building long-term client relationships, and driving revenue growth. You will identify new markets, pitch products or services, and negotiate contracts.",
                category: "Sales & Marketing",
                syllabus: "B2B Sales, Negotiation Techniques, Market Research, Client Acquisition, Business Communication.",
                selectionStage: "Sales Pitch Test → Client Interaction Simulation → HR Interview.",
                skills: "Networking, Negotiation, Market Analysis, CRM Tools (HubSpot, Zoho), Presentation Skills, Strategy Planning.",
                tips: "Develop persuasive pitch decks, focus on long-term relationship building, and track your sales metrics to discuss in interviews."
            },
            {
                title: "Brand Manager – Consumer & Retail Marketing",
                desc: "As a Brand Manager, you will be responsible for managing brand positioning, launching campaigns, and ensuring consistent messaging across all channels. You will work closely with creative teams, oversee advertising budgets, and analyze consumer behavior to strengthen brand identity.",
                category: "Sales & Marketing",
                syllabus: "Brand Management, Consumer Behavior, Advertising, Campaign Planning, Product Positioning, Market Analysis.",
                selectionStage: "Brand Strategy Presentation → Marketing Scenario Test → HR Interview.",
                skills: "Branding, Market Research, Creativity, Budget Management, Analytical Skills, Team Coordination.",
                tips: "Understand consumer psychology, study successful branding case studies, and prepare to discuss measurable results from past campaigns."
            },
        ],
        skipDuplicates: true
    })
    console.log(privatejob);
}

main().catch((e) => console.log(e)).finally(async () => {
        await prisma.$disconnect()
    });

export default prisma;
