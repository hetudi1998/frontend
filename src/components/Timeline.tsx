import threeDTool1 from '../assets/exp/3d1.svg';
import threeDTool2 from '../assets/exp/3d2.svg';
import threeDTool3 from '../assets/exp/3d3.svg';
import threeDTool4 from '../assets/exp/3d4.svg';
import graphic1 from '../assets/exp/graphic1.svg';
import graphic2 from '../assets/exp/graphic2.svg';
import graphic3 from '../assets/exp/graphic3.svg';
import aiTool1 from '../assets/exp/ai1.svg';
import aiTool2 from '../assets/exp/ai2.svg';
import aiTool3 from '../assets/exp/ai3.svg';

const experiences = [
  {
    title: 'Writer & Director',
    company: 'Siya: The Magic Within'
  },
  {
    title: 'Art Direction',
    company: 'Netflix original (Serious Men)'
  },
  {
    title: 'Vfx Compositing',
    company: 'Envision Vfx'
  },
  {
    title: 'Creative Director',
    company: 'Boat Media house'
  }
];

const skills = [
  {
    title: 'Compositing & 3D Tools',
    icons: [threeDTool1, threeDTool2, threeDTool3, threeDTool4],
    progress: '90%'
  },
  {
    title: 'Graphic Design & Editing',
    icons: [graphic1, graphic2, graphic3],
    progress: '85%'
  },
  {
    title: 'AI Tools For Filmmaking',
    icons: [aiTool1, aiTool2, aiTool3],
    progress: '80%'
  }
];

export default function ResumeTimeline() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24 min-h-screen flex items-center parallax-container">
      <div className="parallax-background"></div>
      <div className="flex flex-col lg:flex-row lg:justify-between w-full transform-gpu perspective-1000 gap-8 lg:gap-12">
        {/* Left Column - Work Experience */}
        <div className="w-full lg:w-1/2 lg:pr-12 relative mb-12 lg:mb-0 hover:translate-z-12 transition-transform duration-300">
          <h2 className="text-xl lg:text-2xl font-bold text-indigo-900 mb-8 lg:mb-12 transform hover:scale-105 transition-transform duration-300">WORK EXPERIENCE</h2>
          <div className="relative">
            <div className="absolute h-full w-0.5 bg-purple-600 left-1"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 lg:mb-16 relative pl-8 lg:pl-12">
                <div className="absolute left-0 -ml-2 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-purple-900"></div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                <p className="text-base lg:text-lg text-gray-700">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Skills with 3D cards */}
        <div className="w-full lg:w-1/2 lg:pl-12 transform hover:translate-z-12 transition-transform duration-300">
          <h2 className="text-xl lg:text-2xl font-bold text-indigo-900 mb-8 lg:mb-12 transform hover:scale-105 transition-transform duration-300">SKILL AND EXPERTISE</h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-8 lg:mb-16">
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-6">{skill.title}</h3>
              <div className="flex space-x-4 mb-4 lg:mb-6 overflow-x-auto">
                {skill.icons.map((icon, i) => (
                  <img key={i} src={icon} alt={`${skill.title} ${i + 1}`} className="h-10 lg:h-12 w-auto" />
                ))}
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                  style={{ width: skill.progress }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}