import { useState } from "react";
import { assets } from "../../assets/assets.js";

const projects = [
  {
    id: 1,
    name: "Edusity",
    category: "FrontEnd",
    backgroundImage: `${assets.edusity}`,
    url: "https://edusity-alpha-one.vercel.app/",
    github: "https://github.com/Anupsimha/Edusity", 
  },
  {
    id: 2,
    name: "Blog Website",
    category: "Backend",
    backgroundImage: `${assets.blogWeb}`,
    url: "https://blog-website-zqg3.onrender.com/",
    github: "https://github.com/Anupsimha/blog-website", 
  },
  {
    id: 3,
    name: "Chatify App",
    category: "MERN",
    backgroundImage: `${assets.chatify}`,
    url: "https://chatify-8ye1.onrender.com/login",
    github: "https://github.com/Anupsimha/chatify", 
  },
  {
    id: 4,
    name: "crypto-price-tracking-app",
    category: "Frontend",
    backgroundImage: `${assets.cryptoTracking}`,
    url: "https://crypto-price-tracking-app-rouge.vercel.app/",
    github: "https://github.com/Anupsimha/Crypto-Price-Tracking-App", 
  },
  {
    id: 5,
    name: "The Healthy Bowl",
    category: "Frontend",
    backgroundImage: `${assets.healthyBowl}`,
    url: "https://the-healthy-bowl.vercel.app/",
    github: "https://github.com/Anupsimha/The-HEALTHY-BOWL", 
  },
  {
    id: 6,
    name: "Gemini AI Clone",
    category: "FrontEnd",
    backgroundImage: `${assets.gemini}`,
    url: "https://gemini-ai-eight-dun.vercel.app/",
    github: "https://github.com/Anupsimha/Gemini-AI", 
  },
  {
    id: 7,
    name: "Email Subscription Form",
    category: "Frontend",
    backgroundImage: `${assets.emailsub}`,
    url: "https://email-subscription-form-five.vercel.app/",
    github: "https://github.com/Anupsimha/Email-Subscription-Form", 
  },
  {
    id: 8,
    name: "Weather App",
    category: "Frontend",
    backgroundImage: `${assets.weather}`,
    url: "https://weather-app-seven-blush-92.vercel.app/",
    github: "https://github.com/Anupsimha/Weather-App", 
  },
  {
    id: 9,
    name: "Travel-O-World",
    category: "Frontend",
    backgroundImage: `${assets.travel}`,
    url: "https://vercel.com/anupsimha2-gmailcoms-projects/travel-o-world",
    github: "https://github.com/Anupsimha/Travel-o-World", 
  },
  {
    id: 10,
    name: "EV-olution",
    category: "FrontEnd",
    backgroundImage: `${assets.evlotion}`,
    url: "https://evolution-navy.vercel.app/",
    github: "https://github.com/Anupsimha/evlotion", 
  },
  {
    id: 11,
    name: "Todo List",
    category: "Frontend",
    backgroundImage: `${assets.todo}`,
    url: "https://to-do-list-eta-rust-90.vercel.app/",
    github: "https://github.com/Anupsimha/To-Do-List", 
  },
  {
    id: 12,
    name: "Music Player App",
    category: "Frontend",
    backgroundImage: `${assets.musicPlayer}`,
    url: "https://music-player-one-dun.vercel.app/",
    github: "https://github.com/Anupsimha/Music-Player", 
  },
  {
    id: 13,
    name: "STOP WATCH",
    category: "Frontend",
    backgroundImage: `${assets.stopwatch}`,
    url: "https://qr-code-generator-nrmp.vercel.app/",
    github: "https://github.com/Anupsimha/QR-Code-Generator", 
  },
  {
    id: 14,
    name: "Razor-Pay Clone",
    category: "Frontend",
    backgroundImage: `${assets.razorPay}`,
    url: "https://razor-pay-clone-nine-sand.vercel.app/",
    github: "https://github.com/Anupsimha/RazorPay-Clone", 
  },
  {
    id: 15,
    name: "QR Code Generator",
    category: "Frontend",
    backgroundImage: `${assets.QRCode}`,
    url: "https://qr-code-generator-bay-seven.vercel.app",
    github: "https://github.com/Anupsimha/QR-Code-Generator-", 
  },
  {
    id: 16,
    name: "Calculator App",
    category: "Frontend",
    backgroundImage: `${assets.calculatorPro}`,
    url: "https://calculator-app-eta-two.vercel.app/",
    github: "https://github.com/Anupsimha/Calculator-App", 
  },
];

const Showcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Frontend", "MERN", "Backend", "UI/UX"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="w-[100%] h-screen -mt-11 flex flex-col justify-center items-start">
      <div className="relative top-16 left-5 w-[94.5%]">
        <div>
          <p className="text-3xl font-semibold">
            Project <span className="text-[#E79600]">Panorama</span>
          </p>
        </div>
        <div className="relative top-1 right-0 w-12 h-0.5 bg-white rounded-b-lg"></div>
        {/* Filter Buttons */}
        <div className="flex gap-4 my-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative right-5 px-6 py-2 text-xl font-semibold ${
                selectedCategory === category
                  ? "text-[#E79600] underline"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="w-full h-96 relative left-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const hasBackground = project.backgroundImage;
            return (
              <div
                key={project.id}
                className={`group relative w-96 h-64 rounded-xl shadow-md border border-purple-500 overflow-hidden cursor-pointer ${
                  hasBackground ? "bg-cover bg-center" : "bg-purple-700"
                }`}
                style={
                  hasBackground
                    ? { backgroundImage: `url(${project.backgroundImage})`,
                        backgroundSize: "cover",         // or "contain"
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }     
                    : {}
                }
              >
                {/* Dim Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Content to pop up */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
                  <div className="flex gap-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#E79600] text-black font-semibold rounded-full hover:bg-white transition"
                      >
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#E79600] text-black font-semibold rounded-full hover:bg-white transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;