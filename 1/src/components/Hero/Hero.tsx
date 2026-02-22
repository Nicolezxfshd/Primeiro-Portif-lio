import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import '../../styles/Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Olá, eu sou <span>Seu Nome</span></h1>
          <h2>Desenvolvedor Full Stack</h2>
          <p>
            Transformando ideias em soluções digitais incríveis com React, JavaScript e muito mais.
          </p>
          <div className="cta-buttons">
            <a href="#projetos" className="btn primary-btn">Meus Projetos</a>
            <a href="#contato" className="btn secondary-btn">Fale Comigo</a>
          </div>
        </motion.div>

        <div className="social-icons">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:seu-email@exemplo.com">
            <HiOutlineMail />
          </a>
          <a href="/seu-curriculo.pdf" download>
            <BsFillPersonLinesFill />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
