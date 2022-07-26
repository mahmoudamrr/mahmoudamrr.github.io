import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Blog({ data }) {
  const { mdx } = data;
  const { frontmatter } = mdx;
  const post = data.mdx;

  return (
    <div style={{ padding: "2rem", margin: "2rem" }}>
      <Link to="/">back</Link>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        imageUrl
      }
    }
  }
`;
