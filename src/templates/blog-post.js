import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
      />
      <div className="text-gray-500 text-xs px-6" id="start">{post.frontmatter.date}</div>
      <h1 className="text-4xl text-green-400 mb-8 px-6 space-y-4">{post.frontmatter.title}</h1>
      <div className="text-white text-base mb-8 px-6 space-y-4" dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`