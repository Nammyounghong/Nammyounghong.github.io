import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>About</h1> 
    <h2>홍남명</h2>
    <p>
      도시의 시공간에 애정을 쏟고 있습니다
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `