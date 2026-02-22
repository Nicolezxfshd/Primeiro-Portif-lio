import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiGit, SiGithub } from 'react-icons/si';
import '../styles/About.module.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
    { name: 'React', icon: <SiReact />, level: 80 },
    { name: 'HTML5', icon: <SiHtml5 />, level: 90 },
    { name: 'CSS3', icon: <SiCss3 />, level: 85 },
    { name: 'Git', icon: <SiGit />, level: 75 },
    { name: 'GitHub', icon: <SiGithub />, level: 80 },
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">Um pouco sobre quem sou e o que faço</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>Desenvolvedor Full Stack em Formação</h3>
            <p>
              Sou estudante de Desenvolvimento Full Stack, com foco em criar interfaces modernas, 
              funcionais e responsivas. Tenho experiência com React, JavaScript, HTML e CSS, e estou 
              em constante aprendizado para aprimorar minhas habilidades e boas práticas de desenvolvimento.
            </p>
            <p>
              Gosto de transformar ideias em soluções digitais organizadas, com atenção à usabilidade 
              e à experiência do usuário. Busco oportunidades para crescer na área de tecnologia, 
              colaborar em projetos reais e evoluir profissionalmente.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaCode />
                </div>
                <h4>Código Limpo</h4>
                <p>Escrevo código organizado, limpo e de fácil manutenção.</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FaLaptopCode />
                </div>
                <h4>Design Responsivo</h4>
                <p>Sites que funcionam perfeitamente em qualquer dispositivo.</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FaMobileAlt />
                </div>
                <h4>Mobile-First</h4>
                <p>Desenvolvimento focado na melhor experiência em dispositivos móveis.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3>Minhas Habilidades</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
