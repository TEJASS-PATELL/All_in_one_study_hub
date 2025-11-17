import { FiExternalLink } from 'react-icons/fi';
import "./AITools.css";
import { FaRobot, FaImage, FaBook, FaFlask, FaCode, FaTasks, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const aiCategories = [
  {
    icon: FaRobot,
    category: "Chatbots",
    tools: [
      { name: "ChatGPT", link: "https://chat.openai.com/" },
      { name: "Gemini", link: "https://gemini.google.com/" },
      { name: "Claude", link: "https://claude.ai/" },
      { name: "Perplexity", link: "https://www.perplexity.ai/" },
      { name: "Copilot", link: "https://copilot.microsoft.com/" },
      { name: "YouChat", link: "https://you.com/" },
      { name: "Character AI", link: "https://beta.character.ai/" },
      { name: "Replika", link: "https://replika.com/" },
      { name: "Tidio", link: "https://www.tidio.com/" },
      { name: "Meta AI", link: "https://www.meta.ai/" },
    ],
  },
  {
    icon: FaImage,
    category: "Image Generators",
    tools: [
      { name: "DALL·E", link: "https://chat.openai.com/" },
      { name: "Firefly", link: "https://firefly.adobe.com/" },
      { name: "Stable Diffusion", link: "https://stability.ai/stable-diffusion" },
      { name: "Ideogram", link: "https://ideogram.ai/" },
      { name: "NightCafe", link: "https://nightcafe.studio/" },
      { name: "Wombo", link: "https://dream.ai/" },
      { name: "Craiyon", link: "https://www.craiyon.com/" },
      { name: "Recraft", link: "https://recraft.ai/" },
      { name: "Deep Dream", link: "https://deepdreamgenerator.com/" },
      { name: "Artbreeder", link: "https://www.artbreeder.com/" },
    ],
  },
  {
    icon: FaBook,
    category: "AI Study Tools",
    tools: [
      { name: "ChatGPT", link: "https://chat.openai.com/" },
      { name: "Perplexity", link: "https://www.perplexity.ai/" },
      { name: "Quizlet", link: "https://quizlet.com/" },
      { name: "ChatPDF", link: "https://www.chatpdf.com/" },
      { name: "Khanmigo", link: "https://www.khanacademy.org/khanmigo" },
      { name: "Socratic", link: "https://socratic.google.com/" },
      { name: "Liner", link: "https://getliner.com/" },
      { name: "Duolingo", link: "https://www.duolingo.com/" },
      { name: "ExplainLike5", link: "https://explainlikeimfive.io/" },
      { name: "Memory", link: "https://www.memory.com/flashcards" },
    ],
  },
  {
    icon: FaFlask,
    category: "Research & Science",
    tools: [
      { name: "Perplexity", link: "https://www.perplexity.ai/" },
      { name: "Consensus", link: "https://consensus.app/" },
      { name: "Elicit", link: "https://elicit.org/" },
      { name: "Semantic Scholar", link: "https://www.semanticscholar.org/" },
      { name: "ExplainPaper", link: "https://www.explainpaper.com/" },
      { name: "Connected Papers", link: "https://www.connectedpapers.com/" },
      { name: "NotebookLM", link: "https://notebooklm.google/" },
      { name: "Scite", link: "https://scite.ai/" },
      { name: "Liner", link: "https://getliner.com/" },
      { name: "WolframAlpha", link: "https://www.wolframalpha.com/" },
    ],
  },
  {
    icon: FaCode,
    category: "Code Assistants",
    tools: [
      { name: "Codeium", link: "https://codeium.com/" },
      { name: "Phind", link: "https://www.phind.com/" },
      { name: "Hugging Face", link: "https://huggingface.co/" },
      { name: "Playground", link: "https://platform.openai.com/playground" },
      { name: "Sourcery", link: "https://sourcery.ai/" },
      { name: "DeepCode", link: "https://www.deepcode.ai/" },
      { name: "Polycoder", link: "https://github.com/VictorSanh/polycoder" },
      { name: "Codecademy", link: "https://www.codecademy.com/" },
      { name: "ChatGPT", link: "https://chat.openai.com/" },
      { name: "IntelliCode", link: "https://visualstudio.microsoft.com/services/intellicode/" },
    ],
  },
  {
    icon: FaTasks,
    category: "Productivity",
    tools: [
      { name: "ChatGPT", link: "https://chat.openai.com/" },
      { name: "Grammarly", link: "https://www.grammarly.com/" },
      { name: "Otter", link: "https://otter.ai/" },
      { name: "Notion", link: "https://www.notion.so/product/ai" },
      { name: "Zapier", link: "https://zapier.com/" },
      { name: "Scribe", link: "https://scribehow.com/" },
      { name: "Evernote", link: "https://evernote.com/" },
      { name: "Trello", link: "https://trello.com/" },
      { name: "ClickUp", link: "https://clickup.com/" },
      { name: "IFTTT", link: "https://ifttt.com/" },
    ],
  },
  {
    icon: FaBriefcase,
    category: "Business AI Tools",
    tools: [
      { name: "Canva", link: "https://www.canva.com/ai-assistant/" },
      { name: "Firefly", link: "https://firefly.adobe.com/" },
      { name: "Tome", link: "https://tome.app/" },
      { name: "Guidde", link: "https://www.guidde.com/" },
      { name: "SlidesAI", link: "https://www.slidesai.io/" },
      { name: "Beautiful", link: "https://www.beautiful.ai/" },
      { name: "MagicSlides", link: "https://www.magicslides.app/" },
      { name: "ChatGPT", link: "https://chat.openai.com/" },
      { name: "HubSpot", link: "https://www.hubspot.com/products/crm/free" },
      { name: "PhotoRoom", link: "https://www.photoroom.com/" },
    ],
  },
  {
    icon: FaGraduationCap,
    category: "Education",
    tools: [
      { name: "ChatGPT", link: "https://chat.openai.com/" },
      { name: "Quizlet", link: "https://quizlet.com/" },
      { name: "Perplexity", link: "https://www.perplexity.ai/" },
      { name: "Notion", link: "https://www.notion.so/product/ai" },
      { name: "Otter", link: "https://otter.ai/" },
      { name: "MagicSchool", link: "https://www.magicschool.ai/" },
      { name: "Khanmigo", link: "https://www.khanacademy.org/khanmigo" },
      { name: "WolframAlpha", link: "https://www.wolframalpha.com/" },
      { name: "ChatPDF", link: "https://www.chatpdf.com/" },
      { name: "Socratic", link: "https://socratic.google.com/" },
    ],
  },
];

const AITools = () => {
  return (
    <section className="ai-section" aria-label="Top AI Tools by Category">
      <h1 className="section-title">Top AI Tools by Category</h1>
      <p className="ai-detail">
        Discover powerful <span>AI tools</span> for every task — from chatting with smart <span>AI assistants</span> to generating stunning <span>images, code, or research</span> with ease. Explore tools that simplify <span>studying, writing, designing, and coding</span> — all in one place.
        Whether you're a student, developer, or creator, AI boosts your <span>productivity, creativity, and learning</span> like never before.
        These tools are free, easy to use, and designed to help you do more in less time.
      </p>
      <div className="ai-cards-grid">
        {aiCategories.map((category, index) => (
          <div key={index} className="ai-category-card">
            <div className="ai-category-header">
              <category.icon className="ai-category-icon" />
              <h2 className="category-title">{category.category}</h2>
            </div>
            <ul className="tool-list">
              {category.tools.map((tool, idx) => (
                <li key={idx} className="tool-item">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-link-icon"
                    aria-label={`Open ${tool.name} website in new tab`}
                  >
                    &#9679;
                    <span className="tool-name">{tool.name}</span>
                  </a>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-link-icon"
                    aria-label={`Open ${tool.name} website in new tab`}
                  >
                    <FiExternalLink />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

  );
};

export default AITools;
