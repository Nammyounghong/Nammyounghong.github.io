/*import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>도시의 시공간을 공부합니다</h1>
    <div>
      <p></p>
      <Link to="/about/">
        {" "}
        <h2>Hong Nammyoung</h2>{" "}
      </Link>
      <p>nam is starting!</p>
      <img src="images/aachener_dom.jpg" alt="" height="400" />
      <Link to="/test/"> 자기소개</Link>
    </div>
  </Layout>
)*/

import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Posts
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
