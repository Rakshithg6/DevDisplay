import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';
import { Footer } from '../components/Footer/Footer';
import LOGO from './WordMark.png';
import PoweredByDevDisplay from './PoweredByDevDisplay.png';
import Card from '../components/Card';

const Hero = () => {
  return (
    <section className="hero-section mt-20 flex flex-col  items-center justify-center text-white sm:min-h-screen ">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <p className="text-md bg-[rgba(255, 255, 255, 0.14)] group relative mx-auto mb-10 w-fit overflow-hidden rounded-full border border-white p-2 text-center">
          <span className="animate-border-glow absolute inset-0"></span>
          <a
            href="https://github.com/codeaashu/DevDisplay"
            target="_blank"
            rel="noreferrer"
            className="custom-font relative z-10 text-white transition-all duration-300 group-hover:text-blue-300"
          >
            We're Open Source 🌟 Star Now
          </a>
        </p>

        <style>
          {`
  @font-face {
            font-family: "MerriweatherSans-SemiBold";
            src: url('/fonts/MerriweatherSans-SemiBold.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
            
  @keyframes border-glow {
    0% {
      transform: rotate(0deg) translateX(-100%);
      opacity: 0.4;
    }
    50% {
      transform: rotate(180deg) translateX(100%);
      opacity: 0.3;
    }
    100% {
      transform: rotate(360deg) translateX(-100%);
      opacity: 0.4;
    }
  }

  @keyframes border-pulse {
    0% {
      border-color: rgba(0, 172, 255, 0.5);
      box-shadow: 0 0 10px rgba(0, 172, 255, 0.3);
    }
    50% {
      border-color: rgba(0, 172, 255, 0.8);
      box-shadow: 0 0 20px rgba(0, 172, 255, 0.6);
    }
    100% {
      border-color: rgba(0, 172, 255, 0.5);
      box-shadow: 0 0 10px rgba(0, 172, 255, 0.3);
    }
  }

  .animate-border-glow {
    position: absolute;
    width: 250%;
    height: 250%;
    background: linear-gradient(90deg, rgba(0, 172, 255, 0.6), rgba(1, 114, 142, 0.9), rgba(0, 172, 255, 0.6));
    top: -75%;
    left: -75%;
    opacity: 0.5;
    filter: blur(10px);
    animation: border-glow 4s infinite linear;
  }

  .group:hover .animate-border-glow {
    opacity: 0.8;
    filter: blur(15px);
  }

  .group:hover {
    animation: border-pulse 1.5s infinite;
  }

  .custom-font {
    font-family: "MerriweatherSans-SemiBold", sans-serif;
  }
  `}
        </style>
        <img src={LOGO} alt="Dev Display" className="my-4 h-auto w-[600PX] text-5xl font-bold" />
        <h1 className="custom-font my-4 text-4xl tracking-widest md:text-4xl">
          One Platform for Global Developers to Fulfill All The Tech Needs
        </h1>
        <p className="custom-font text-md md:text-md mx-auto my-4 max-w-4xl text-[#00a6fb]">
          {' '}
          CONNECT ▸ COLLAB ▸ CODE ▸ CREATE ▸ CONQUER
        </p>
      </div>
      <div className="mb-[-80%] mt-2 xs:mb-[-22%] sm:mb-[-15%] md:mb-[-12%] lg:mb-[-10%] xl:mb-[-16%] 2xl:mb-[-14%]">
        {' '}
        {/* Changed mt-4 to mt-2 */}
        <Globe />
      </div>
      <div className="mb-20"></div>
    </section>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem; /* Smaller font size */
  border-radius: 12px; /* Smaller border radius */
  border: none;
  padding: 1px; /* Smaller padding */
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
  position: relative;
  transition:
    background 0.3s,
    transform 0.3s;
  animation: zoom 3s ease-in-out infinite;
  margin-top: 16px; /* Add margin to increase space */

  &:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  &::after {
    content: '';
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
    transition: box-shadow 0.3s;
  }

  &:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 50px; /* Smaller blob size */
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle 60px at 0% 100%, #3fe9ff, #0000ff80, transparent);
    box-shadow: -10px 10px 30px #0051ff2d;
    transition:
      background 0.3s,
      box-shadow 0.3s;
  }

  &:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 10px 20px; /* Smaller inner padding */
    border-radius: 12px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
  }

  &:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    background: radial-gradient(circle 60px at 0% 100%, #00e1ff1a, #0000ff11, transparent);
    position: absolute;
    transition: opacity 0.3s;
  }

  &:hover .inner::before {
    opacity: 0;
  }

  @keyframes zoom {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const StyledDot = styled.div`
  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 0;
    top: 0;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0% {
      top: 0;
      right: 0;
    }
    25% {
      top: 0;
      right: calc(100% - 5px);
    }
    50% {
      top: calc(100% - 5px);
      right: calc(100% - 5px);
    }
    75% {
      top: calc(100% - 5px);
      right: 0;
    }
    100% {
      top: 0;
      right: 0;
    }
  }
`;

const TechFeatures = () => {
  return (
    <section className="tech-features-section mt-[60%] max-w-[80%] px-4 py-16 text-white xs:mt-0">
      <div className="mx-auto my-12 max-w-[80%] text-center ">
        <h2 className="custom-font my-6 text-4xl font-bold text-[#00a6fb]">Discover The Range of Features</h2>
        <p className="custom-font mx-auto my-12 mb-8 max-w-3xl text-xl">
          Whatever you need as a techy, DevDisplay has it all.
        </p>
      </div>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
        <StyledDot>
          <a
            href="/opportunities"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Opportunities</h3>
                <p>Explore various career and learning opportunities in the tech industry.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/opportunities')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/Resources"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Resources</h3>
                <p>Access a wide range of learning resources, tools, and libraries to boost your skills.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/Resources')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/ProjectShowcase"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Project Showcase</h3>
                <p>Showcase your projects, get feedback, and inspire others to collaborate.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/ProjectShowcase')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/Discussions"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Tech Discussion</h3>
                <p>Engage in tech discussions, share ideas, and stay updated on the latest trends.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/Discussions')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/IdeaSubmission"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Ideas Submission</h3>
                <p>Submit your innovative ideas, get feedback, and explore collaborations.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/IdeaSubmission')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/PortfolioIdeas"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Portfolio Ideas</h3>
                <p>Get inspired with creative ideas to enhance your portfolio and make an impact.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/PortfolioIdeas')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/PortfolioBuilder"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Portfolio Building</h3>
                <p>Learn the best practices to build a standout portfolio that impresses recruiters.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/PortfolioBuilder')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/ResumeBuilder"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Resume Building</h3>
                <p>Create a professional resume with tips and templates tailored to the tech industry.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/ResumeBuilder')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/AIToolsHub"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">AI Tools Hub</h3>
                <p>The ultimate hub for powerful and innovative AI tools, all in one place.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/AIToolsHub')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/journeys"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Journeys Page</h3>
                <p>
                  Explore inspiring stories of achievers, their challenges, and the strategies that led them to success.
                </p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/journeys')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/IndustryTrends"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Industry Trends</h3>
                <p>
                  Share regular articles and videos on industry trends, expert insights, and career advice to keep
                  engaged.
                </p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/IndustryTrends')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/AiCareer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">AI Career Guide</h3>
                <p>Get AI-powered career recommendations tailored to your skills, interests, and goals.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/AiCareer')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>
      </div>

      {/*Powered By DevDisplay */}
      <div className="my-8 flex justify-center">
        <img src={PoweredByDevDisplay} alt="Dev Display" className="h-auto w-[600px] text-5xl font-bold" />
      </div>

      {/* Tech Projects Powered by DevDisplay */}
      <div className="my-8 grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
        <StyledDot>
          <a
            href="https://github-legacy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">GitHub Legacy</h3>
                <p>Transform your GitHub journey into a professional resume in seconds</p>
              </div>
              <StyledButton
                onClick={() => {
                  window.location.href = 'https://github-legacy.vercel.app';
                  window.open('_blank');
                }}
              >
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/Library"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">DevDisplay Library</h3>
                <p>Coming Soon - OpenSource ui component library!</p>
              </div>
              <StyledButton onClick={() => window.open('#', '_blank')}>
                <div className="blob1" />
                <div className="inner">Visit Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/OnlineCompiler"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Online Compiler</h3>
                <p>Coming Soon - Online Compiler where you can run your code online!</p>
              </div>
              <StyledButton onClick={() => window.open('#', '_blank')}>
                <div className="blob1" />
                <div className="inner">Visit Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/TechQuiz"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Tech Quiz</h3>
                <p>Coming Soon - Test your tech knowledge on DevDisplay!</p>
              </div>
              <StyledButton onClick={() => window.open('#', '_blank')}>
                <div className="blob1" />
                <div className="inner">Visit Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>
      </div>

      {/*Adding New Features */}
      <StyledDot>
        <a
          href="https://github.com/codeaashu/DevDisplay"
          className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Suggest a new feature idea!</h3>
              <p>
                Suggest new features you'd love to see on DevDisplay. We believe innovation is limitless. As a
                contributor, you're encouraged to think beyond and add new, innovative features that can make a
                difference in the tech ecosystem. Think outside the box and introduce features that can be revolutionary
                for tech enthusiasts worldwide. If you spot a gap in the tech world, DevDisplay can be the solution.
              </p>
            </div>
            <StyledButton onClick={() => window.open('#', '_blank')}>
              <div className="blob1" />
              <div className="inner">Visit Now</div>
            </StyledButton>
          </div>
          <div className="dot" />
        </a>
      </StyledDot>
    </section>
  );
};

// <StyledDot>
// <a
//   href="/https://github.com/codeaashu/DevDisplay"
//   className="project-card mt-6 block rounded-lg bg-gray-800 p-6 text-center shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
// >
//   <div className="custom-font project-card-inner rounded-lg p-[2px]">
//     <h3 className="mb-4 text-2xl font-semibold">
//       <span className="text-blue-400">Suggest a new feature idea!</span>
//     </h3>
//     <p>
//       Suggest new features you'd love to see on DevDisplay. We believe innovation is limitless. As a contributor,
//       you're encouraged to think beyond and add new, innovative features that can make a difference in the tech
//       ecosystem. Think outside the box and introduce features that can be revolutionary for tech enthusiasts
//       worldwide. If you spot a gap in the tech world, DevDisplay can be the solution.
//     </p>
//     <StyledButton onClick={() => window.open('#', '_blank')}>
//           <div className="blob1" />
//           <div className="inner">Visit Now</div>
//         </StyledButton>
//       </div>
//       <div className="dot" />
//     </a>
//   </StyledDot>

const supporters = [
  { name: 'Digital Ocean', logo: '/assets/SupportedBy/DigitalOcean.png' },
  { name: 'Git Book', logo: '/assets/SupportedBy/GitBookLight_1.png' },
  { name: 'Melt CD', logo: '/assets/SupportedBy/meltcd.png' },
  { name: 'Microsoft for Startups', logo: '/assets/SupportedBy/MicrosoftForStartups.png' },
  { name: 'MSME', logo: '/assets/SupportedBy/MSME.png' },
  { name: 'Notion', logo: '/assets/SupportedBy/Notion.png' },
  { name: 'Peerlist', logo: '/assets/SupportedBy/Peerlist.png' },
  { name: 'Product Hunt', logo: '/assets/SupportedBy/ProductHunt.png' },
  { name: 'Vercel', logo: '/assets/SupportedBy/Vercel.png' },
];

export const SupportedBy = () => {
  return (
    <div className="py-20">
      <h2 className="custom-font my-10 text-center text-4xl font-bold text-[#00a6fb]">Supported By</h2>

      <div className="relative mx-auto flex max-w-[99vw] space-x-8 overflow-x-hidden">
        {/* First Marquee */}
        <div className="animate-marquee flex space-x-8">
          {supporters.map((sponsor, index) => (
            <div key={index} className="flex h-[100px] w-[200px] flex-shrink-0 items-center justify-center">
              <img src={sponsor.logo} alt={sponsor.name} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Second Marquee */}
        <div className="animate-marquee2 absolute top-0 flex space-x-8">
          {supporters.map((sponsor, index) => (
            <div
              key={index + supporters.length}
              className="flex h-[100px] w-[200px] flex-shrink-0 items-center justify-center"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="background-wrapper bg-gray-400">
      <Navbar />
      <Hero />
      <TechFeatures />
      {/* <Card />  */}
      <SupportedBy />
      <Footer />
    </div>
  );
};

export default Home;
