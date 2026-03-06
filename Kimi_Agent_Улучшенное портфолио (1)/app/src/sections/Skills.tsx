import { useEffect, useRef, useState } from 'react';
import { DecorativeBlob } from '../components/DecorativePatterns';
import { 
  Palette, 
  Sparkles, 
  User, 
  Pencil, 
  Image, 
  PenTool, 
  Code, 
  Box,
  BarChart3,
  Monitor
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const artSkills = [
    { name: 'Digital Art', icon: Palette, color: 'from-red-600 to-red-400', level: 95 },
    { name: 'Anime Style', icon: Sparkles, color: 'from-yellow-600 to-yellow-400', level: 90 },
    { name: 'Character Design', icon: User, color: 'from-red-500 to-yellow-500', level: 88 },
    { name: 'Sketching', icon: Pencil, color: 'from-yellow-500 to-yellow-300', level: 92 },
  ];

  const techSkills = [
    { name: 'Photoshop', icon: Image, color: 'from-blue-600 to-blue-400', level: 85 },
    { name: 'CorelDRAW', icon: PenTool, color: 'from-green-600 to-green-400', level: 80 },
    { name: 'Web Development', icon: Code, color: 'from-purple-600 to-purple-400', level: 75 },
    { name: 'Blender', icon: Box, color: 'from-orange-600 to-orange-400', level: 65 },
    { name: 'Data Analysis', icon: BarChart3, color: 'from-teal-600 to-teal-400', level: 70 },
  ];

  const workExperience = [
    {
      title: 'Data Analyst',
      company: 'IT-компания',
      description: 'Анализ данных, визуализация, подготовка отчетов',
      period: 'Опыт менее года',
      icon: Monitor,
      color: 'from-red-600 to-yellow-500',
    },
  ];

  const professionalSkills = [
    'Создание сайтов, веб-программирование',
    'Разработка презентаций',
    'Работа с Photoshop, CorelDRAW',
    'Базовые знания Blender',
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen py-20 overflow-hidden paper-texture"
    >
      {/* Background */}
      <div className="absolute inset-0 pattern-lattice opacity-30" />
      <div className="absolute inset-0 pattern-clouds opacity-20" />
      
      <DecorativeBlob 
        className="top-20 -left-40" 
        color="from-red-600 to-red-400" 
        size="w-96 h-96" 
      />
      <DecorativeBlob 
        className="bottom-20 -right-40" 
        color="from-yellow-600 to-yellow-400" 
        size="w-80 h-80" 
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/sticker-phoenix.png" 
              alt="" 
              className="w-16 h-16 animate-wiggle sticker-shadow"
            />
            <div className="seal-chinese text-xl">技能</div>
            <img 
              src="/sticker-fireworks.png" 
              alt="" 
              className="w-16 h-16 animate-float sticker-shadow"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gradient-chinese mb-2 font-chinese">
            НАВЫКИ
          </h2>
          <p className="text-xl text-red-700 font-medium">专业技能 | Skills</p>
        </div>
        
        {/* Art Skills */}
        <div 
          className={`scroll-chinese rounded-lg p-8 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3 font-chinese">
            <Palette className="w-8 h-8 text-red-600" />
            Художественные навыки
            <span className="seal-chinese text-sm ml-auto">艺术</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artSkills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-yellow-400`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-red-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-4 bg-red-100 rounded-full overflow-hidden border border-red-200">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${400 + index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tech Skills */}
        <div 
          className={`scroll-chinese rounded-lg p-8 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3 font-chinese">
            <Code className="w-8 h-8 text-red-600" />
            Технические навыки
            <span className="seal-chinese text-sm ml-auto">技术</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techSkills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-yellow-400`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-red-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-4 bg-red-100 rounded-full overflow-hidden border border-red-200">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${600 + index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Work Experience */}
        <div 
          className={`scroll-chinese rounded-lg p-8 mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3 font-chinese">
            <Monitor className="w-8 h-8 text-red-600" />
            Опыт работы
            <span className="seal-chinese text-sm ml-auto">经验</span>
          </h3>
          {workExperience.map((work) => (
            <div key={work.title} className="flex items-start gap-4 group hover-lift p-4 rounded-lg transition-all">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${work.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border-2 border-yellow-400`}>
                <work.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">{work.title}</h4>
                <p className="text-red-600 font-medium">{work.company}</p>
                <p className="text-gray-600 mt-1">{work.description}</p>
                <span className="inline-block mt-2 px-4 py-1 bg-gradient-to-r from-red-100 to-yellow-100 text-red-700 rounded-full text-sm font-medium border border-red-200">
                  {work.period}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Professional Skills */}
        <div 
          className={`scroll-chinese rounded-lg p-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3 font-chinese">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            Профессиональные навыки
            <span className="seal-chinese text-sm ml-auto">专业</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg font-medium hover-lift cursor-default border-2 border-yellow-400 shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Decorative Stickers */}
        <div className="absolute right-10 top-1/4 hidden lg:block">
          <img 
            src="/sticker-fan.png" 
            alt="" 
            className="w-24 h-24 animate-wiggle sticker-shadow"
          />
        </div>
        <div className="absolute left-10 bottom-1/3 hidden lg:block">
          <img 
            src="/sticker-sakura.png" 
            alt="" 
            className="w-20 h-20 animate-float sticker-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
