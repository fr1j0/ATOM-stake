import { ChangeEvent, MouseEvent, useState } from 'react';
import useStyles from './styles';
import Transactions from './components/transactions';
import { Transaction } from './components/transactions/Transactions';
import linkImg from '../../../../../../assets/icon-link.svg';

const Operations = () => {
  const classes = useStyles();
  const DEFAULT_INPUT_VALUE = 0;

  const NETWORK_FEE = 0.0001;
  const APY = 1.05;

  const [ATOMBalance, setATOMBalance] = useState(100);
  const [fromValue, setFromValue] = useState(DEFAULT_INPUT_VALUE);
  const [toValue, setToValue] = useState(DEFAULT_INPUT_VALUE);
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);

  const updateValues = (value: number, type: 'from' | 'to') => {
    const newFrom =
      type === 'from'
        ? value || DEFAULT_INPUT_VALUE
        : ((value || DEFAULT_INPUT_VALUE) - (value > 0 ? NETWORK_FEE : 0)) /
          APY;

    const newTo =
      type === 'from'
        ? (value || DEFAULT_INPUT_VALUE) * APY - (value > 0 ? NETWORK_FEE : 0)
        : value || DEFAULT_INPUT_VALUE;

    setFromValue(newFrom);
    setToValue(newTo);
  };

  const onFromInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateValues(Number(e.target.value), 'from');
  };

  const onToInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateValues(Number(e.target.value), 'to');
  };

  const isValidTransaction = (value: number) => {
    return value > 0 && ATOMBalance - value >= 0;
  };

  const onStakeClick = (_e: MouseEvent<HTMLElement>) => {
    if (isValidTransaction(fromValue)) {
      const stakeTransaction = { date: new Date(), amount: fromValue };
      setTransactionsList([...transactionsList, stakeTransaction]);
      setATOMBalance((b) => b - fromValue);
    }
  };

  const quickStake = (percentage: number) => {
    setFromValue((ATOMBalance * percentage) / 100);
  };

  return (
    <div className={classes.operations}>
      <div className={classes.inputs}>
        <div className={classes.inputWrapper}>
          <p>Enter the amount</p>
          <input type="number" onChange={onFromInputChange} value={fromValue} />
        </div>
        <div className={classes.separator}>
          <img src={linkImg} alt="" />
        </div>
        <div className={classes.inputWrapper}>
          <p>Balance in 1 year</p>
          <input type="number" onChange={onToInputChange} value={toValue} />
        </div>
      </div>
      <div className={classes.quickSelector}>
        <ul>
          <li>
            <input type="button" value="25%" onClick={() => quickStake(25)} />
          </li>
          <li>
            <input type="button" value="50%" onClick={() => quickStake(50)} />
          </li>
          <li>
            <input type="button" value="ALL" onClick={() => quickStake(100)} />
          </li>
        </ul>
      </div>
      <div className={classes.operationsWrapper}>
        <Transactions list={transactionsList} />
        <input
          type="button"
          className={classes.cta}
          value="STAKE ATOM"
          onClick={onStakeClick}
        />
        <p className={classes.fee}>Network fee: {NETWORK_FEE} ATOM</p>
      </div>
    </div>
  );
};

export default Operations;
