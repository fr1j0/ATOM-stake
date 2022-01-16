import { createUseStyles } from 'react-jss';
import Heading from './components/heading';
import Operations from './components/operations';

const useStyles = createUseStyles({
  staking: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
  },
});

const Staking = () => {
  const classes = useStyles();

  return (
    <div className={classes.staking}>
      <Heading />
      <Operations />
    </div>
  );
};

export default Staking;
