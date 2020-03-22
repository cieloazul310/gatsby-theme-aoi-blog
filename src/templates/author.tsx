import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import AuthorBox from '../components/AuthorBox';
import PageNavigation, { createNavigationProps } from '../components/PageNavigation';
import DrawerPageNavigation from '../components/DrawerPageNavigation';
import BlogListTemplate from './blog-list';

import { AuthorQuery, SitePageContext } from '../../graphql-types';

interface Props {
  data: AuthorQuery;
  pageContext: SitePageContext;
}

function AllPostsTemplate({ data, pageContext }: Props) {
  const { authorsJson } = data;
  const { edges } = data.allMdx;
  const { numPages, currentPage, fieldValue, type, previous, next } = pageContext;
  const avatar = authorsJson.avatar && authorsJson.avatar.childImageSharp ? authorsJson.avatar.childImageSharp.fluid.src : null;

  return (
    <Layout
      title={fieldValue}
      jumbotron={<Jumbotron title={fieldValue} header={type} subtitle={`${edges.length} posts`} image={avatar} />}
      drawerContents={<DrawerPageNavigation {...createNavigationProps(previous, next, '/author')} />}
    >
      <AuthorBox author={authorsJson} disableLink p={2} />
      <BlogListTemplate edges={edges} numPages={numPages} currentPage={currentPage} basePath={`/author/${fieldValue}`} />
      <PageNavigation {...createNavigationProps(previous, next, '/author')} center={{ to: '/author/', title: 'Author' }} />
    </Layout>
  );
}

export default AllPostsTemplate;

export const authorQuery = graphql`
  query author($fieldValue: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" }, frontmatter: { author: { name: { eq: $fieldValue } } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            author {
              name
            }
          }
        }
      }
    }
    authorsJson(name: { eq: $fieldValue }) {
      id
      name
      description
      twitter
      url
      github
      avatar {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`;
