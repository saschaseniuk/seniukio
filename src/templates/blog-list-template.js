import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const slug = node.fields.slug;
          const excerpt = node.excerpt;
          const date = node.frontmatter.date;
          return (
            <div key={node.fields.slug} className="mb-8 mx-2 p-3 rounded morph">
              <div className="text-gray-500 text-xs">{date}</div>
              <Link to={slug + "#start"}>
                <h1 className="text-2xl font-semibold text-green-400 leading-tight mb-4 hover:text-red-500 hover:underline">
                  {title}
                </h1>
              </Link>
            </div>
          );
        })}
        <ul className="px-8 pb-8 flex justify-between">
          {!isFirst && (
            <Link to={"/blog/" + prevPage} rel="prev" className="mr-auto">
              ← Zurück in die Zukunft
            </Link>
          )}

          {!isLast && (
            <Link to={"/blog/" + nextPage} rel="next" className="ml-auto">
              Ab in die Vergangenheit →
            </Link>
          )}
        </ul>
      </Layout>
    );
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          excerpt
        }
      }
    }
  }
`