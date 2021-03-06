import React from 'react';
import styled from 'styled-components';
import Line from './common/line';
import github from '../images/icons/github-logo.svg';
import externalLink from '../images/icons/link.svg';
import device from '../utils/breakpoints';
import colors from '../utils/colors';

const ProjectCard = styled('div')`
  border-radius: 5px;
  border: 1.5px solid ${colors.lightgrey};
  box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
  padding: 3rem 2rem;

  .icons-wrapper {
    margin: 2rem auto 0 auto;
    display: flex;
    justify-content: space-around;
    width: 80%;
    padding: 0;

    @media only screen and (${device.tablet}) {
      width: 50%;
    }

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        height: auto;
        width: 50px;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const Projects = ({ projects }) => (
  <>
    <Line />
    <h2>Recent projects</h2>
    {projects.map(project => (
      <ProjectCard key={project.node.frontmatter.title}>
        <h3>{project.node.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: project.node.frontmatter.summary }} />
        <div className="icons-wrapper">
          <a href={project.node.frontmatter.githubURL}>
            <div className="icon">
              <img src={github} alt="" />
              <h5>Source</h5>
            </div>
          </a>
          <a href={project.node.frontmatter.url}>
            <div className="icon">
              <img src={externalLink} alt="" />
              <h5>Site Link</h5>
            </div>
          </a>
        </div>
      </ProjectCard>
    ))}
  </>
);

export default Projects;
