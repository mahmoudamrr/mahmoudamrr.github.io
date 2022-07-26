/** @jsx jsx */
import { jsx } from "theme-ui";
import { Parallax } from "@react-spring/parallax";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Stack from "../components/stack";
import { graphql, Link } from "gatsby";
import Divider from "../elements/divider";
import Content from "../elements/content";

const Cara = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout>
    <Parallax pages={8}>
      <Hero offset={0} factor={1} />
      <About offset={1.5} factor={1} />
      <Articles edges={edges} offset={2.5} />
      <Projects offset={3.5} factor={1.7} />
      <Stack offset={6} factor={1} />
      <Contact offset={7} factor={1} />
    </Parallax>
  </Layout>
);

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Articles = ({ offset, factor = 1.5, edges }) => (
  <div>
    <Divider
      bg="background-color: #00DBDE;
background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
      zIndex={2}
    />
    <Content offset={offset}>
      <h1 style={{ fontSize: "4.5rem" }}>Articles</h1>
      {edges.map(({ node }, i) => {
        if (node.frontmatter.title) {
          return (
            <div
              key={i}
              className="my-5"
              sx={{
                width: `100%`,
                boxShadow: `lg`,
                position: `relative`,
                textDecoration: `none`,
                borderRadius: `lg`,
                px: [2, 3, 4],
                py: [4, 5],
                background:
                  "linear-gradient( 135deg, #92FFC0 10%, #002661 100%);",
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
                "&:hover": {
                  color: `white !important`,
                  transform: `translateY(-5px)`,
                  boxShadow: `xl`,
                },
              }}
            >
              <Link to={node.frontmatter.path} className="text-white">
                <div
                  sx={{
                    color: "white",
                    textTransform: `uppercase`,
                    letterSpacing: `wide`,
                    pt: 4,
                    fontSize: [4, 5],
                    fontWeight: `medium`,
                    lineHeight: 1,
                    marginBottom: '1rem'
                  }}
                >
                  {node.frontmatter.title}
                </div>
                <div style={{ fontSize: "1rem" }}>{node.frontmatter.date}</div>
              </Link>
            </div>
          );
        } else {
          return;
        }
      })}
    </Content>
  </div>
);
export default Cara;
