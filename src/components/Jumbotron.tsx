import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles<Theme, { bgImg?: string }>((theme: Theme) =>
  createStyles({
    jumbotronBg: ({ bgImg }) => ({
      height: '100%',
      backgroundImage: bgImg ? `url(${bgImg})` : undefined,
      backgroundColor: bgImg ? undefined : theme.palette.type !== 'dark' ? theme.palette.secondary.light : theme.palette.background.paper,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      filter: bgImg ? 'blur(6px) brightness(0.9)' : undefined,
      transform: bgImg ? 'scale(1.1)' : undefined,
    }),
    jumbotronText: {
      height: 280,
      color: 'white',
      position: 'absolute',
      transform: 'translate(0, -100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 2,
      padding: theme.spacing(2, 4),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
      },
    },
    jumbotronTitle: {
      fontWeight: 'bold',
    },
  })
);

interface Props {
  title: string | JSX.Element | JSX.Element[] | (string | JSX.Element | JSX.Element[])[];
  header?: string | JSX.Element | JSX.Element[] | (string | JSX.Element | JSX.Element[])[];
  subtitle?: string | JSX.Element | JSX.Element[] | (string | JSX.Element | JSX.Element[])[];
  image?: string;
}

function Jumbotron({ title, header, subtitle, image }: Props) {
  const classes = useStyles({ bgImg: image ?? undefined });

  return (
    <Box height={280} overflow="hidden">
      <Box className={classes.jumbotronBg} />
      <Box className={classes.jumbotronText}>
        {header ? <Typography variant="subtitle2">{header}</Typography> : null}
        <Typography variant="h2" className={classes.jumbotronTitle}>
          {title}
        </Typography>
        {subtitle ? <Typography variant="subtitle1">{subtitle}</Typography> : null}
      </Box>
    </Box>
  );
}

export default Jumbotron;
