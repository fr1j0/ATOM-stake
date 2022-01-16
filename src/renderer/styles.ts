import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      overflowX: 'hidden',
      fontFamily: 'Roboto',
      color: '#fff',
      backgroundColor: '#27292b',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    input: {
      '&:focus': {
        outline: 'none',
      },
    },
  },
});

export default useStyles;
