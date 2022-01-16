import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <ul className={classes.navBarItems}>
        <li className={classes.navBarItem}>Overview</li>
        <li className={`${classes.navBarItem} ${classes.navBarItemActive}`}>
          Earn ATOM
        </li>
        <li className={classes.navBarItem}>Unstake</li>
        <li className={classes.navBarItem}>Claim Reward</li>
        <li className={classes.navBarItem}>In Progress</li>
      </ul>
    </div>
  );
};

export default Navbar;
