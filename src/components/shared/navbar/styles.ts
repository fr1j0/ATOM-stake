import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navBar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1d1d',
  },
  navBarItems: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    margin: 0,
    listStyleType: 'none',
  },
  navBarItem: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    padding: '2rem',
    color: '#575656',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff',
    },
    position: 'relative',
  },
  navBarItemActive: {
    color: '#fff',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '35%',
      right: '35%',
      height: 3,
      display: 'block',
      background: '#89cff0',
    },
  },
});

export default useStyles;
