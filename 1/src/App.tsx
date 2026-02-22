import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'
import profileImage from './assets/profile.jpg'
import blogTechImage from './assets/projects/blog tech.jpeg'
import agenciaImage from './assets/projects/ag.jpeg'
import estiloImage from './assets/projects/est.jpeg'
import { useResponsive } from './hooks/useResponsive'
import { useMobileMenu } from './hooks/useMobileMenu'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isMobile } = useResponsive()
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#sobre', text: 'Sobre mim' },
    { href: '#projetos', text: 'Projetos' },
    { href: '#habilidades', text: 'Habilidades' },
    { href: '#contato', text: 'Contato', isButton: true }
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '1rem' : '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ 
          fontSize: isMobile ? '1.2rem' : '1.5rem', 
          fontWeight: 'bold' 
        }}>
          Nicole Zimmermann
        </div>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#333',
                padding: '0.5rem'
              }}
              aria-label="Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menu Mobile Overlay */}
            {isOpen && (
              <div style={{
                position: 'fixed',
                top: '70px',
                left: 0,
                right: 0,
                height: 'calc(100vh - 70px)',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '2rem',
                gap: '1.5rem',
                zIndex: 999
              }}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    style={{
                      color: link.isButton ? 'white' : '#333',
                      background: link.isButton ? '#007bff' : 'transparent',
                      padding: link.isButton ? '0.8rem 2rem' : '0',
                      borderRadius: link.isButton ? '25px' : '0',
                      textDecoration: 'none',
                      fontFamily: 'Comic Sans MS, cursive',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      textAlign: 'center',
                      minWidth: link.isButton ? '150px' : 'auto',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </>
        ) : (
          <nav style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: link.isButton ? 'white' : '#333',
                  background: link.isButton ? '#007bff' : 'transparent',
                  padding: link.isButton ? '0.8rem 2rem' : '0',
                  borderRadius: link.isButton ? '25px' : '0',
                  textDecoration: 'none',
                  fontFamily: 'Comic Sans MS, cursive',
                  fontWeight: 'bold',
                  fontSize: '1.4rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {link.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

function Hero() {
  const { isMobile, isTablet } = useResponsive()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: isMobile ? '1rem' : '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
          <h1 style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.8rem' : '3.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            Olá, eu sou <span style={{ color: '#ffd700' }}>Nicole Zimmermann</span>
          </h1>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : isTablet ? '1.8rem' : '2rem',
            fontWeight: 300,
            marginBottom: '1.5rem',
            opacity: 0.9
          }}>
            Desenvolvedor Full Stack
          </h2>
          <p style={{
            fontSize: isMobile ? '1.1rem' : isTablet ? '1.2rem' : '1.4rem',
            marginBottom: '2rem',
            maxWidth: isMobile ? '90%' : '600px',
            margin: '0 auto 2rem',
            opacity: 0.8,
            lineHeight: 1.6
          }}>
            Transformando ideias em soluções digitais incríveis com React, JavaScript e muito mais.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center'
          }}>
            <a href="#projetos" style={{
              background: '#ffd700',
              color: '#333',
              padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              fontSize: isMobile ? '0.9rem' : '1rem',
              minWidth: isMobile ? '150px' : 'auto',
              textAlign: 'center'
            }}>Meus Projetos</a>
            <a href="#contato" style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              fontSize: isMobile ? '0.9rem' : '1rem',
              minWidth: isMobile ? '150px' : 'auto',
              textAlign: 'center'
            }}>Fale Comigo</a>
          </div>
        </div>
        <div style={{
          display: 'flex',
          gap: isMobile ? '1rem' : '1.5rem',
          justifyContent: 'center',
          marginTop: '2rem'
        }}>
          <a href="https://github.com/Nicolezxfshd" target="_blank" rel="noopener noreferrer" style={{
            color: 'white',
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nicole-zimmermann-0452211b2/" target="_blank" rel="noopener noreferrer" style={{
            color: 'white',
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
      padding: '4rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          margin: '0 auto 2rem',
          overflow: 'hidden',
          border: '5px solid #007bff',
          boxShadow: '0 10px 30px rgba(0, 123, 255, 0.3)'
        }}>
          <img 
            src={profileImage} 
            alt="Nicole Zimmermann"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjNjY3ZWVhIi8+CjxjaXJjbGUgY3g9IjEyNSIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IndoaXRlIi8+CjxlbGxpcHNlIGN4PSIxMjUiIGN5PSIxODAiIHJ4PSI2MCIgcnk9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'
            }}
          />
        </div>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#333',
          marginBottom: '2rem'
        }}>
          Sobre mim!
        </h2>
        <p style={{
          fontSize: '1.4rem',
          lineHeight: 1.8,
          color: '#555',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Desenvolvedora Full Stack com foco em JavaScript, React e Next.js. Experiência na criação de aplicações web completas, desde a construção da interface até a estruturação da lógica e integração entre sistemas. Comprometida com código organizado, boas práticas e evolução contínua na área de tecnologia.
        </p>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projetos" style={{
      minHeight: '100vh',
      background: '#ffffff',
      padding: '4rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: '#333',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          MEUS PRINCIPAIS PROJETOS
        </h2>
        
        <div style={{
          background: '#f8f9fa',
          padding: '2rem',
          borderRadius: '15px',
          marginBottom: '2rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            width: '100%',
            height: '200px',
            marginBottom: '1.5rem',
            borderRadius: '10px',
            overflow: 'hidden',
            background: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={blogTechImage} 
              alt="BlogTech"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDgwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjBmMGYwIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjI0Ij5CbG9nVGVjaCBJbWFnZW08L3RleHQ+Cjwvc3ZnPgo='
              }}
            />
          </div>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 600,
            color: '#007bff',
            marginBottom: '1rem'
          }}>
            BlogTech
          </h3>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: 1.6,
            color: '#555',
            margin: 0
          }}>
            Um blog sobre tecnologia e programação que organiza artigos em categorias para facilitar a leitura. Publiquei ele na Vercel com deploy contínuo a partir do meu repositório. Usei React/Next.js (JavaScript) para a interface, CSS para o estilo, e a plataforma Vercel para hospedar online. O site apresenta diversos artigos sobre Node.js, React, CSS, DevOps e Next.js, com navegação intuitiva e layout responsivo.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://blog-tech-tawny.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                background: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = '#0056b3'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = '#007bff'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              🌐 Ver Projeto Online
            </a>
          </div>
        </div>
        
        <div style={{
          width: '100%',
          height: '2px',
          background: '#e0e0e0',
          margin: '2rem 0'
        }}></div>
        
        <div style={{
          background: '#f8f9fa',
          padding: '2rem',
          borderRadius: '15px',
          marginBottom: '2rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            width: '100%',
            height: '200px',
            marginBottom: '1.5rem',
            borderRadius: '10px',
            overflow: 'hidden',
            background: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={agenciaImage} 
              alt="Agência Criativa Web SASS 3.0"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDgwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjBmMGYwIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjI0Ij5BZ8OqbmNpYSBDcmlhdGl2YTwvdGV4dD4KPC9zdmc+Cg=='
              }}
            />
          </div>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 600,
            color: '#007bff',
            marginBottom: '1rem'
          }}>
            Agência Criativa Web SASS 3.0
          </h3>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: 1.6,
            color: '#555',
            margin: 0
          }}>
            Um site estático que simula uma página de agência criativa moderna. O foco foi aplicar e praticar conceitos de SASS (como variáveis, aninhamento e organização de estilos) para construir um layout limpo e responsivo junto com HTML. O projeto foi versionado no GitHub e demonstra minhas habilidades em estruturar e estilizar layouts profissionais com SASS e HTML.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://github.com/Nicolezxfshd/agencia-criativa-web-sass-3.0" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                background: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = '#0056b3'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = '#007bff'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <FaGithub />
              Ver no GitHub
            </a>
          </div>
        </div>
        
        <div style={{
          width: '100%',
          height: '2px',
          background: '#e0e0e0',
          margin: '2rem 0'
        }}></div>
        
        <div style={{
          background: '#f8f9fa',
          padding: '2rem',
          borderRadius: '15px',
          marginBottom: '2rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            width: '100%',
            height: '200px',
            marginBottom: '1.5rem',
            borderRadius: '10px',
            overflow: 'hidden',
            background: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={estiloImage} 
              alt="Estilo Livre"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
              onError={(e: any) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDgwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjBmMGYwIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjI0Ij5BZGl2aW5oZSB1bMOtIE7Dum1lcm88L3RleHQ+Cjwvc3ZnPgo='
              }}
            />
          </div>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 600,
            color: '#007bff',
            marginBottom: '1rem'
          }}>
            Estilo Livre
          </h3>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: 1.6,
            color: '#555',
            margin: 0
          }}>
            O repositório é um projeto de página web estática organizado com arquivos de conteúdo e estilo que demonstram aplicação prática de tecnologias de front-end, focado em estruturação e apresentação visual de uma interface. Ele contém principalmente HTML, usado para definir a estrutura e semântica da página, e CSS, empregado para estilização visual e layout, com essas duas linguagens constituindo a totalidade do código conforme as estatísticas do próprio GitHub (≈ 53,5 % HTML e ≈ 46,5 % CSS).
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://github.com/Nicolezxfshd/Estilo-Livre" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                background: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = '#0056b3'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = '#007bff'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <FaGithub />
              Ver no GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="habilidades" style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      padding: '4rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: '#333',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          💻 Habilidades Técnicas (Hard Skills)
        </h2>
        
        <div style={{
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#007bff',
            marginBottom: '1.5rem'
          }}>
            🖥️ Front-end
          </h3>
          <ul style={{
            fontSize: '1.3rem',
            lineHeight: 1.8,
            color: '#555',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.8rem' }}>HTML5 (estruturação semântica de páginas)</li>
            <li style={{ marginBottom: '0.8rem' }}>CSS3 (estilização e layout)</li>
            <li style={{ marginBottom: '0.8rem' }}>SASS / SCSS (pré-processador CSS)</li>
            <li style={{ marginBottom: '0.8rem' }}>JavaScript (manipulação do DOM e lógica de programação)</li>
            <li style={{ marginBottom: '0.8rem' }}>React (componentização e organização de interface)</li>
            <li style={{ marginBottom: '0.8rem' }}>Estruturação de projetos em componentes reutilizáveis</li>
          </ul>
        </div>
        
        <div style={{
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#007bff',
            marginBottom: '1.5rem'
          }}>
            🌐 Publicação e Versionamento
          </h3>
          <ul style={{
            fontSize: '1.3rem',
            lineHeight: 1.8,
            color: '#555',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.8rem' }}>Git e GitHub (controle de versão)</li>
            <li style={{ marginBottom: '0.8rem' }}>Deploy na Vercel</li>
            <li style={{ marginBottom: '0.8rem' }}>Organização de projetos para produção</li>
          </ul>
        </div>
        
        <div style={{
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#007bff',
            marginBottom: '1.5rem'
          }}>
            🧠 Lógica e Programação
          </h3>
          <ul style={{
            fontSize: '1.3rem',
            lineHeight: 1.8,
            color: '#555',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.8rem' }}>Manipulação de eventos</li>
            <li style={{ marginBottom: '0.8rem' }}>Estruturas condicionais</li>
            <li style={{ marginBottom: '0.8rem' }}>Variáveis e funções</li>
            <li style={{ marginBottom: '0.8rem' }}>Geração de números aleatórios</li>
            <li style={{ marginBottom: '0.8rem' }}>Controle de fluxo e validação de entrada</li>
          </ul>
        </div>
        
        <div style={{
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#007bff',
            marginBottom: '1.5rem'
          }}>
            🚀 Habilidades de Organização e Desenvolvimento
          </h3>
          <ul style={{
            fontSize: '1.3rem',
            lineHeight: 1.8,
            color: '#555',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.8rem' }}>Organização de código</li>
            <li style={{ marginBottom: '0.8rem' }}>Separação de responsabilidades (estrutura, estilo e lógica)</li>
            <li style={{ marginBottom: '0.8rem' }}>Modularização de estilos com SASS</li>
            <li style={{ marginBottom: '0.8rem' }}>Estruturação de layout responsivo</li>
            <li style={{ marginBottom: '0.8rem' }}>Leitura e interpretação de documentação</li>
          </ul>
        </div>
        
        <div>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#007bff',
            marginBottom: '1.5rem'
          }}>
            ✨ Habilidades Comportamentais (Soft Skills)
          </h3>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: 1.8,
            color: '#555',
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            E aqui você é mais forte do que imagina:
          </p>
          <ul style={{
            fontSize: '1.3rem',
            lineHeight: 1.8,
            color: '#555',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.8rem' }}>Persistência (mesmo com ansiedade, você continua estudando)</li>
            <li style={{ marginBottom: '0.8rem' }}>Autodidata</li>
            <li style={{ marginBottom: '0.8rem' }}>Capacidade de aprender rápido</li>
            <li style={{ marginBottom: '0.8rem' }}>Organização</li>
            <li style={{ marginBottom: '0.8rem' }}>Criatividade (seus projetos, seus vídeos, suas ideias)</li>
            <li style={{ marginBottom: '0.8rem' }}>Boa comunicação escrita</li>
            <li style={{ marginBottom: '0.8rem' }}>Resolução de problemas</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '4rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Fale Comigo
        </h2>
        
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          action="https://formspree.io/f/xqapdwzd"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#333',
              marginBottom: '0.8rem'
            }}>
              Nome
            </label>
            <input 
              type="text" 
              name="name"
              required
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.2rem',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e: any) => {
                e.target.style.borderColor = '#007bff'
              }}
              onBlur={(e: any) => {
                e.target.style.borderColor = '#e0e0e0'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#333',
              marginBottom: '0.8rem'
            }}>
              Email
            </label>
            <input 
              type="email" 
              name="email"
              required
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.2rem',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e: any) => {
                e.target.style.borderColor = '#007bff'
              }}
              onBlur={(e: any) => {
                e.target.style.borderColor = '#e0e0e0'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#333',
              marginBottom: '0.8rem'
            }}>
              Mensagem
            </label>
            <textarea 
              name="message"
              required
              rows={6}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.2rem',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                resize: 'vertical',
                minHeight: '150px'
              }}
              onFocus={(e: any) => {
                e.target.style.borderColor = '#007bff'
              }}
              onBlur={(e: any) => {
                e.target.style.borderColor = '#e0e0e0'
              }}
            />
          </div>
          
          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '1.2rem',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: 'white',
              background: '#007bff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#0056b3'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#007bff'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Enviar Mensagem
          </button>
        </form>
        
        <div style={{
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <p style={{
            fontSize: '1.2rem',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Ou me encontre nas redes sociais:
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '1rem'
          }}>
            <a 
              href="https://github.com/Nicolezxfshd" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'white',
                fontSize: '2rem',
                background: 'rgba(255, 255, 255, 0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/nicole-zimmermann-0452211b2/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'white',
                fontSize: '2rem',
                background: 'rgba(255, 255, 255, 0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
