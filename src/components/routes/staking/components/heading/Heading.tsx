import useStyles from './styles';
import cosmosImg from '../../../../../../assets/cosmos.svg';

const Heading = () => {
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <img className={classes.icon} src={cosmosImg} alt="" />
      <h2 className={classes.title}>Earn Cosmos ATOM</h2>
      <p className={classes.description}>
        <span>Staking allows you to earn ATOM like a savings account.</span>
        <span>Earnings are calculated based on your staked amount.</span>
      </p>
    </div>
  );
};

export default Heading;
