import React from "react";
import { graphql } from 'gatsby'
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import seniukBackground from "../images/seniuk_background.jpg";

function IndexPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO
        title="Home"
      />
      <div className="morph mx-6">
        <img
            alt="Sascha Seniuk Background"
            className="block w-full mx-auto mb-8"
            src={seniukBackground}
          />
      </div>
      
      <div className="text-white text-base mb-8 px-6 space-y-4">
        <p>
          Nach verschiedenen Positionen in Vertrieb und Handel hat meine frühe Leidenschaft für alles technische wieder überhand genommen. So durfte ich in der Vergangenheit an vielen spannenden Projekten mitarbeiten. Dazu zählen kleine wie große Betriebe, bis hin zu Projekten mit Unternehmen, die heute unser aller Leben beeinflussen. Dabei helfen mir die gesammelten Erfahrungen zusammen mit meinem Engagement in Gesellschaft und Politik das große Ganze der Digitalisierung im Blick zu behalten und meinen Kunden ein guter Berater zu sein.
        </p>
        <p>
          Diese Seite soll für mich als Sammlung meiner Gedanken, Ideen und Projekte dienen. Ich teile mein Wissen gerne und bin offen für Diskussionen. Wenn Du Interesse an einer Zusammenarbeit hast freue ich mich über deine Nachricht.
        </p>
      </div>
      <section className="">

      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="mb-8 mx-2 p-3 rounded morph">
            <p className="text-gray-500 text-xs">{node.frontmatter.date}</p>
            <Link
              to={node.fields.slug}
            >
              <h1 className="text-xl font-semibold text-green-400 leading-tight mb-4 hover:text-red-500 hover:underline">{node.frontmatter.title}</h1>
            </Link>
            <p className="text-base">{node.excerpt}</p>
            <Link
              to={node.fields.slug}
            >
              <button className="text-green-400 my-4 hover:text-red-500 hover:underline">mehr</button>
            </Link>
              
          </div>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(limit: 3, sort: {fields: [frontmatter___date, frontmatter___title], order: DESC}) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    markdownRemark {
      id
    }
  }
`

export default IndexPage;
