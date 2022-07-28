import { graphql } from "gatsby";
import React from "react";
import Layout from "../features/ui/layout";
import PostList from "./../features/post/post-list";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Index({ data }) {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Layout>
        <PostList posts={data.allStrapiPost.nodes} />
      </Layout>
    </>
  );
}

Index.propTypes = {
  data: PropTypes.array,
};

export const query = graphql`
  query GetPosts {
    allStrapiPost {
      nodes {
        title
        category {
          name
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(height: 250, width: 360)
            }
          }
        }
        description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
