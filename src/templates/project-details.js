import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/project-details.module.css";
import { graphql } from 'gatsby';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, image } = data.markdownRemark.frontmatter
  const featuredImage = getImage(image)

  return (
    <Layout>
      <div className={styles.details}>
        <h1>{title}</h1>
        <h2>{stack}</h2>
        <div className={styles.featured}>
          <GatsbyImage image={featuredImage} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetail($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        stack
        title
        date
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`