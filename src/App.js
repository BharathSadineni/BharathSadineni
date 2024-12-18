import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ProjectVideo from './Project_Video.mp4';
import BingoVideo from './Bingo Recording.mp4';
import StudentManagerVideo from './Student_Manager.mp4';
import stac from './stac.png';
import mazelogo from './maze logo.avif';
import clientlogo from './clientlogo.png';



const AppWrapper = styled.div`
  background-color: #262626;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  overflow: hidden;
`;

const AnimatedSection = styled(motion.div)`
  padding: 50px 20px;
  text-align: center;
`;

const Line = styled.div`
  border-top: 2px solid #fff;
  width: 60%;
  margin: 20px auto;
`;

const Projects = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const AnimatedProjectCard = styled(motion.div)`
  width: 45%;
  min-height: 400px; /* Ensures uniform height for all cards */
  margin: 20px 0;
  background-color: #404040;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h2`
  margin-bottom: 10px;
`;

const ProjectMedia = styled.div`
  width: 100%;
  margin-bottom: 10px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  video {
    width: 100%;
    border-radius: 8px;
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 15px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const AnimatedSkills = styled(motion.div)`
  padding: 50px 20px;
  text-align: center;
`;

const SkillItem = styled.div`
  display: inline-block;
  margin: 0 20px;
`;

const AnimatedLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const AnimatedLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 15px;
  text-decoration: none;
`;

const ScrollToTop = styled(ScrollLink)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const App = () => {
  const sectionControls = useAnimation();
  const projectsControls = useAnimation();
  const skillsControls = useAnimation();
  const linksControls = useAnimation();

  const [sectionRef, sectionInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [linksRef, linksInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const animateOnScroll = async () => {
      if (sectionInView) await sectionControls.start({ opacity: 1, y: 0 });
      if (projectsInView) await projectsControls.start({ opacity: 1 });
      if (skillsInView) await skillsControls.start({ opacity: 1 });
      if (linksInView) await linksControls.start({ opacity: 1 });
    };

    animateOnScroll();
  }, [sectionInView, projectsInView, skillsInView, linksInView, sectionControls, projectsControls, skillsControls, linksControls]);

  const projects = [
    {
      title: 'Hybrid Stance Detection for Tweets',
      description:
        'This project implements a hybrid stance detection system designed to analyze and detect misinformation on Twitter. The system preprocesses tweet data, vectorizes text using TF-IDF, and generates features for accurate stance prediction. It allows users to analyze tweet content by selecting either predefined URLs or custom URLs provided by the user. The machine learning pipeline integrates Google Search, natural language processing (NLP), and an XGBoost-based classification model, achieving 87% accuracy in detecting tweet authenticity. A robust data workflow utilizing Playwright and BeautifulSoup enables efficient web scraping for real-time data processing.',
      github: 'https://github.com/BharathSadineni/Hybrid-Stance-Detection-for-Tweets',
      media: stac, // Using image instead of video
    },
    {
      title: 'Match Point',
      description:
        'Match Point is a React and Django-based project that allows users to connect together with other users based on their favorite sports and their individual traits such as age, skill-level, play-frequency, competitiveness, etc.',
      media: ProjectVideo,
    },
    {
      title: 'Customized Bingo Game',
      description:
        'A customizable Bingo game using Java that allows users to set their own card size and play with unique combinations of numbers. Implemented object-oriented programming concepts to ensure scalability and code reusability.',
      github: 'https://github.com/BharathSadineni/Customized_Bingo_Game',
      media: BingoVideo,
    },
    {
      title: 'Story Based Maze Game',
      description:
        'A story-based maze game built using Java, designed with intuitive algorithms for an immersive and challenging experience. Perfect for puzzle enthusiasts and Java developers looking to hone their skills.',
      github: 'https://github.com/BharathSadineni/Maze',
      media: mazelogo,  
    },
    {
      title: 'Concurrent Client Server System',
      description:
        'A secure client-server application with authentication functionality for user login. The project also includes a streamlined data pipeline to efficiently manage incoming and outgoing data.',
      github: 'https://github.com/BharathSadineni/Client-Server',
      media: clientlogo,
    },
    {
      title: 'Student Manager',
      description:
        'Java program utilizing full stack and OOP techniques. This application offers a user-friendly interface built with FXML to easily store and manage student information, including names, IDs, and subjects. The user can edit and update the data with ease and efficiency.',
      github: 'https://github.com/BharathSadineni/StudentManager',
      media: StudentManagerVideo,
    },
  ];

  const skills = ['React', 'TensorFlow', 'Django', 'Java', 'PyTorch', 'Node.js'];
  
  const ProjectMedia = styled.div`
  width: auto;
  height: ${(props) => (props.isStac ? '250px' : '600px')}; /* Conditional height */
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333; /* Optional: Background for uniformity */

  img, video {
    width: 100%; /* Make the media span the container's width */
    height: 100%; /* Make the media span the container's height */
    object-fit: cover; /* Ensures media scales uniformly while filling the container */
    border-radius: 8px; /* Optional: Adds rounded corners */
  }
`;


  return (
    <AppWrapper>
      <AnimatedSection ref={sectionRef} initial={{ opacity: 0, y: 50 }} animate={sectionControls} transition={{ duration: 1 }}>
        <h1>Hello!</h1>
        <p>
          I am Bharath Sadineni, an Artificial Intelligence Computer Science graduate from the University of Birmingham
        </p>
        <p>
          My academic journey has been marked by collaborative excellence within functional teams, contributing
          significantly to university projects. Proficient in React, Django, Java, and possessing a foundational
          understanding of C, I specialize in both front-end and back-end development. Furthermore, my expertise extends
          into the realms of machine learning and artificial intelligence, where I leverage tools such as TensorFlow,
          PyTorch, and scikit-learn to develop intelligent solutions.
        </p>
        <p>
          This portfolio serves as a curated collection of my projects and skills, offering a glimpse into my dedication
          to innovation and excellence across a spectrum of technologies.
        </p>
      </AnimatedSection>

      <Line />
    

      <h2 style={{ textAlign: 'center' }}>Projects</h2>

      <Projects ref={projectsRef} initial={{ opacity: 0 }} animate={projectsControls} transition={{ duration: 0.5 }}>
        {projects.map((project, index) => (
          <AnimatedProjectCard key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectMedia isStac={project.media === stac}>
  {project.media && (typeof project.media === 'string' && project.media.endsWith('.mp4') ? (
    <video controls>
      <source src={project.media} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={project.media} alt={project.title} />
  ))}
</ProjectMedia>


            <ProjectDescription>{project.description}</ProjectDescription>
            {project.github && (
              <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                <Icon>
                  <FaGithub />
                </Icon>
                GitHub Link
              </ProjectLink>
            )}
          </AnimatedProjectCard>
        ))}
      </Projects>

      <AnimatedSkills ref={skillsRef} initial={{ opacity: 0 }} animate={skillsControls} transition={{ duration: 0.5 }}>
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </AnimatedSkills>

      <Line />

      <AnimatedLinks ref={linksRef} initial={{ opacity: 0 }} animate={linksControls} transition={{ duration: 0.5 }}>
        <AnimatedLink href="https://github.com/BharathSadineni" target="_blank" rel="noopener noreferrer">
          <Icon>
            <FaGithub />
          </Icon>
          GitHub
        </AnimatedLink>
        <AnimatedLink href="https://www.linkedin.com/in/bharath-sadineni/" target="_blank" rel="noopener noreferrer">
          <Icon>
            <FaLinkedin />
          </Icon>
          LinkedIn
        </AnimatedLink>
      </AnimatedLinks>
    </AppWrapper>
  );
};

export default App;
