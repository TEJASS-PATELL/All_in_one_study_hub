import './ITJobresources.css';
import { FaBook, FaCalculator, FaClipboardCheck, FaClock, FaCogs, FaComments, FaDatabase, FaGlobe, FaUserTie } from 'react-icons/fa';
import { FaFileAlt, FaCode, FaWrench, FaLaptopCode, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const resumePlatforms = [
    {
        name: 'NovoResume',
        url: 'https://www.novoresume.com/',
        description: 'Easy-to-use resume builder with modern templates.',
        features: [
            'ATS-friendly templates',
            'Section-by-section guidance',
            'Free & paid versions',
        ]
    },
    {
        name: 'Canva',
        url: 'https://www.canva.com/resumes/',
        description: 'Design your resume visually with drag-and-drop tools.',
        features: [
            'Creative templates',
            'Drag-and-drop editing',
            'Export as PDF or image',
        ]
    },
    {
        name: 'Zety',
        url: 'https://www.zety.com/resume-builder',
        description: 'AI-powered resume builder with customization.',
        features: [
            'AI suggestions while writing',
            'Cover letter builder',
            'Resume score system',
        ]
    },
    {
        name: 'Resume.io',
        url: 'https://www.resume.io/',
        description: 'Build and track resumes with beautiful layouts.',
        features: [
            'Track resume views',
            'Clean & modern templates',
            'Multiple export formats',
        ]
    },
    {
        name: 'Enhancv',
        url: 'https://enhancv.com/',
        description: 'Creative and personalized resume builder.',
        features: [
            'Visual & unique layout options',
            'Soft skills section',
            'Import LinkedIn profile',
        ]
    },
];
const codingPracticePlatforms = [
    {
        name: 'LeetCode',
        url: 'https://www.leetcode.com/',
        description: 'Best platform for DSA and coding interview questions.',
        features: [
            '2000+ coding problems',
            'Problems by companies',
            'Mock interview tool',
        ]
    },
    {
        name: 'HackerRank',
        url: 'https://www.hackerrank.com/',
        description: 'Coding challenges, contests, and skill assessments.',
        features: [
            'Topic-wise practice',
            'Certifications',
            'Weekly contests',
        ]
    },
    {
        name: 'GeeksforGeeks',
        url: 'https://practice.geeksforgeeks.org/',
        description: 'DSA problems for all levels with theory links.',
        features: [
            'Beginner to advanced problems',
            'Company-wise problem sets',
            'DSA courses + coding challenges',
        ]
    },
    {
        name: 'Codeforces',
        url: 'https://codeforces.com/',
        description: 'Competitive programming contests and problems.',
        features: [
            'Live coding contests',
            'Editorials & solutions',
            'Ranking system',
        ]
    },
    {
        name: 'InterviewBit',
        url: 'https://www.interviewbit.com/',
        description: 'Structured DSA learning platform for interview prep.',
        features: [
            'Topic-wise guided track',
            'Company-specific questions',
            'Progress tracking & streaks',
        ]
    },
];
const aptitudePlatforms = [
    {
        name: 'IndiaBix',
        url: 'https://www.indiabix.com/',
        description: 'Best for aptitude, logical reasoning, and verbal practice.',
        features: ['Topic-wise questions', 'Solved examples', 'Free to use'],
    },
    {
        name: 'PrepInsta',
        url: 'https://prepinsta.com/',
        description: 'All-in-one for aptitude + placements.',
        features: ['Company-specific questions', 'Detailed solutions', 'Paid + Free'],
    },
    {
        name: 'Testbook',
        url: 'https://testbook.com/aptitude',
        description: 'Topic-wise tests with performance tracking.',
        features: ['Mock tests', 'Topic quizzes', 'Mobile app available'],
    },
    {
        name: 'Freshersworld',
        url: 'https://www.freshersworld.com/online-test/aptitude-test',
        description: 'Simple aptitude practice with solutions.',
        features: ['Free practice sets', 'Basic level questions', 'Beginner-friendly'],
    },
    {
        name: 'CareerRide',
        url: 'https://www.careerride.com/aptitude-questions.aspx',
        description: 'Compact aptitude questions for quick revision.',
        features: ['Quick tests', 'Answer explanations', 'Easy navigation'],
    },
];
const mockInterviewPlatforms = [
    {
        name: 'Interviewing.io',
        url: 'https://interviewing.io/',
        description: 'Mock interviews with real engineers anonymously.',
        features: ['FAANG interviewers', 'Feedback system', 'Anonymous'],
    },
    {
        name: 'Pramp',
        url: 'https://www.pramp.com/',
        description: 'Free live peer-to-peer interviews.',
        features: ['Live sessions', 'Data structures & system design', 'Free'],
    },
    {
        name: 'Exercism',
        url: 'https://exercism.org/',
        description: 'Coding practice with mentoring.',
        features: ['Mentor feedback', 'Real code reviews', 'Structured tracks'],
    },
    {
        name: 'Gainlo',
        url: 'https://blog.gainlo.co/',
        description: 'Interview tips and mock interview advice.',
        features: ['Interview insights', 'Strategy tips', 'Free resources'],
    },
    {
        name: 'TechMockInterview',
        url: 'https://www.techmockinterview.com/',
        description: 'Schedule real mock interviews with professionals.',
        features: ['FAANG engineers', 'Paid sessions', 'Career advice'],
    },
];

const ITJobresources = () => {
    return (
        <div className="jobresou-container">
            <h1 className="jobresources-heading">Best Tools & Resources to Get an IT Job</h1>
            <p className="jobresources-subheading">
                Explore the most effective platforms for resume building, interview prep, upskilling, and job search — all in one place.
            </p>
            <section className="resources-section">
                <h2 className="section-heading"><FaFileAlt /> Top Resume Platforms</h2>
                <div className="card-jobresources">
                    {resumePlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                <p className="resume-note">
                    <strong>Note:</strong> Always keep your resume simple, clean, and ATS-friendly. Avoid fancy designs unless you're applying for a creative role.
                </p>
            </section>


            <section className="resources-section">
                <h2 className="section-heading"><FaCode /> Top Coding Practice Platforms</h2>
                <div className="card-jobresources">
                    {codingPracticePlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                {/* ✅ Note: Learning tip */}
                <p className="coding-note">
                    <strong>Note:</strong> Focus on <strong>quality over quantity</strong>. Solve fewer questions but understand the <strong>pattern</strong> deeply. Learn how to approach problems, not just memorize solutions.
                </p>
            </section>



            <section className="resources-section">
                <h2 className="section-heading"><FaCalculator /> Aptitude Practice Platforms</h2>
                <div className="card-jobresources">
                    {aptitudePlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                {/* ✅ Aptitude Learning Tip */}
                <p className="aptitude-note">
                    <strong>Note:</strong> Don't just memorize formulas — understand the logic behind each topic like percentages, ratios, or time & work. Practice with a timer and focus on improving speed + accuracy.
                </p>
            </section>

            <section className="resources-section">
                <h2 className="section-heading"><FaUserTie /> Mock Interview Platforms</h2>
                <div className="card-jobresources">
                    {mockInterviewPlatforms.map((item, index) => (
                        <div className="jobresourcescard" key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <ul className="jobresources-features">
                                {item.features.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>

                <p className="mock-note">
                    <strong>Note:</strong> Mock interviews help reduce fear and improve communication. Don’t wait to feel “ready” — start practicing early to build real confidence.
                </p>
            </section>
            <section className="main-resources-section">
                <h2 className="section-heading"><MdWork /> Most Important Things</h2>
                <ul>
                    <li><FaLinkedin className="icon" /> Build a professional <strong>LinkedIn Profile</strong></li>
                    <li><FaGithub className="icon" /> Push projects to <strong>GitHub</strong> regularly</li>
                    <li><FaCode className="icon" /> Make 2-3 strong <strong>Projects</strong></li>
                    <li><FaFileAlt className="icon" /> Customize <strong>Resume for each job</strong></li>
                    <li><FaBook className="icon" /> Master <strong>Data Structures & Algorithms (DSA)</strong></li>
                    <li><FaWrench className="icon" /> Be <strong>strong in your core field</strong> like Web Dev, ML, etc.</li>
                    <li><FaCogs className="icon" /> Learn basic <strong>System Design</strong> concepts</li>
                    <li><FaDatabase className="icon" /> Understand <strong>Databases</strong> & SQL queries</li>
                    <li><FaGlobe className="icon" /> Learn about <strong>Networking basics</strong></li>
                    <li><FaComments className="icon" /> Practice <strong>Behavioral Interview Questions</strong></li>
                    <li><FaLaptopCode className="icon" /> Consistently solve <strong>LeetCode / GFG</strong> problems</li>
                    <li><FaClipboardCheck className="icon" /> Give <strong>Mock Interviews</strong> to improve confidence</li>
                    <li><FaClock className="icon" /> Make a consistent <strong>Preparation Routine</strong></li>
                </ul>

            </section>
        </div>
    );
};

export default ITJobresources;
