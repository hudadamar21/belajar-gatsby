import { graphql, Link } from "gatsby";
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { header, btn } from "../styles/home.module.css";

export default function Home({data}) {
  const image = getImage(data.file)
  return (
    <Layout>
      <div className={header}>
        <div>
          <h1>Design</h1>
          <h2>Develop & Deploy</h2>
          <p>UX designer & web developer based on indonesian</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={image} alt="banner"/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

