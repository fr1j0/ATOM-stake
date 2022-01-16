import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  transactions: {
    width: '50vw',
  },
  transaction: {
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    padding: '1.5rem',
    margin: '.75rem 0',
    width: '100%',
    backgroundColor: '#171a1e',
    borderRadius: '.5rem',
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
    '& p': {
      margin: 0,
    },
    '& .amount': {
      color: '#aa8dff',
    },
  },
});

export default useStyles;
