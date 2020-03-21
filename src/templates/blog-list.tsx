import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import ListItemLink from 'gatsby-theme-aoi/src/components/ListItemLink';
import { AdInFooter } from '../components/ads';
import { Mdx } from '../../graphql-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      justifyContent: 'center'
    }
  })
);

interface Props {
  edges: {
    node: Pick<Mdx, 'id' | 'fields' | 'frontmatter'>;
  }[];
  numPages: number;
  currentPage: number;
  basePath: string;
}

function BlogListTemplate({ edges, numPages, currentPage, basePath }: Props) {
  const classes = useStyles();
  return (
    <>
      <List>
        {edges.map(({ node }) => (
          <ListItemLink
            key={node.id}
            to={node.fields.slug}
            primaryText={node.frontmatter.title}
            secondaryText={`${node.frontmatter.date} post by ${node.frontmatter.author.name}`}
            divider
          />
        ))}
      </List>
      <Box textAlign="center" px={2} py={4}>
        <Pagination
          classes={classes}
          count={numPages}
          defaultPage={currentPage}
          color="primary"
          renderItem={(item: any) => (
            <PaginationItem component={GatsbyLink} to={`${basePath}/${item.page === 1 ? '' : `${item.page}`}`} {...item} />
          )}
        />
      </Box>
      <AdInFooter />
    </>
  );
}

export default BlogListTemplate;
