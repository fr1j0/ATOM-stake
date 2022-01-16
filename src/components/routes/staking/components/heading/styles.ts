import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  heading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    padding: '6rem 2rem 5rem 2rem',
    width: '100%',
    backgroundColor: '#171a1e',
    background:
      'linear-gradient(10deg, #27292b 15%, transparent 15%),linear-gradient(-10deg, #27292b 15%, transparent 15%), green',
  },
  icon: { width: '5.5rem', margin: '3rem' },
  title: { fontSize: '2.75rem', margin: '.5rem', textAlign: 'center' },
  description: {
    fontSize: '1rem',
    color: '#797979',
    textAlign: 'center',
    '& span': {
      display: 'block',
    },
  },
});

export default useStyles;
