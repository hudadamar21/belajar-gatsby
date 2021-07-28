import React from 'react'
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from '../../components/Layout'
import { portfolio, project } from "../../styles/projects.module.css";

function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.site.siteMetadata.contact

  const projectList = projects.map(project => {
    const { slug, title, stack, dateFromNow } = project.frontmatter
    const image = getImage(project.frontmatter.image)
    return (
      <Link to={`/projects/${slug}`} key={project.id}>
        <GatsbyImage image={image} alt="title"/>
        <h3>{title}</h3>
        <p>{stack}</p>
        <small><p>{dateFromNow}</p></small>
      </Link>
    )
  })

  return (
    <Layout>
      <div className={portfolio}>
        <h1>Portfolio</h1>
        <h2>Project & Website I've Created</h2>
        <div className={project}>
          {projectList}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Projects {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          dateFromNow: date(fromNow: true)
          date
          image {
            childImageSharp {
              gatsbyImageData(
                width: 150
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`

export default Projects