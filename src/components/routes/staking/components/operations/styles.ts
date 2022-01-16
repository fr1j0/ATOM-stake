import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  operations: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#27292b',
  },
  inputs: {
    display: 'flex',
    padding: '0 1.5rem',
    maxHeight: '10rem',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '& p': {
      margin: 0,
      fontSize: '.8rem',
      color: '#8e8e8e',
      textTransform: 'uppercase',
    },
    '&:first-child': {
      alignItems: 'end',
      '& input': {
        textAlign: 'right',
        paddingRight: 0,
      },
    },
    '&:last-child': {
      alignItems: 'start',
      '& input': {
        paddingLeft: 0,
      },
    },
    '& input': {
      marginTop: '1rem',
      fontSize: '4rem',
      border: 'none',
      backgroundColor: 'transparent',
      color: '#aa8dff',
      padding: '0 1rem',
      width: '40vw',
      '&::-webkit-inner-spin-button': {
        display: 'none',
      },
    },
  },
  separator: {
    display: 'flex',
    justifyContent: 'center',
    width: '8rem',
    position: 'relative',
    '& img': {
      width: '1.25rem',
      marginTop: '.25rem',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '5%',
      bottom: '70%',
      width: 1,
      display: 'block',
      background: '#616161',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '75%',
      bottom: 0,
      width: 1,
      display: 'block',
      background: '#616161',
    },
  },
  operationsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  cta: {
    cursor: 'pointer',
    padding: '.9rem 8vw',
    borderRadius: '2rem',
    fontSize: '.8rem',
    fontWeight: 'bold',
    background:
      'linear-gradient(to right, #e38dff,rgb(133, 46, 254), rgb(106, 0, 255))',
    border: 'none',
    color: '#fff',
    '&:hover': {
      background: 'linear-gradient(to right, #e38dff,rgb(106, 0, 255))',
    },
    position: 'sticky',
    bottom: '4rem',
    opacity: 0.9,
  },
  quickSelector: {
    margin: '2rem',
    '& ul': {
      display: 'flex',
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      '& li': {
        cursor: 'pointer',
        fontSize: '.8rem',
        fontWeight: 'bold',
        color: '#797979',
        backgroundColor: '#0b0b0b',
        transition: 'background-color .3s',
        '&:first-child': {
          borderRadius: '2rem 0 0 2rem',
        },
        '&:last-child': {
          borderRadius: '0 2rem 2rem 0',
        },
        '&:not(:last-child)': {
          borderRight: '1px solid #2e2e2e',
        },
        '&:hover': {
          color: '#151515',
          backgroundColor: '#ebebeb',
        },
        '& input': {
          all: 'unset',
          width: '100%',
          padding: '.85rem 3vw',
        },
      },
    },
  },
  fee: {
    color: '#8e8e8e',
    margin: '1rem 0 2rem 0',
    fontSize: '.8rem',
  },
});

export default useStyles;
