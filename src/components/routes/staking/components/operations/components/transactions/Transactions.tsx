import dayjs from 'dayjs';
import useStyles from './styles';

export type Transaction = {
  date: Date;
  amount: number;
};

type Props = {
  list: Transaction[];
};

const Transactions = ({ list = [] }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.transactions}>
      {list.map((transaction, i) => {
        return (
          <div
            key={`transaction-${transaction.date.getTime()}`}
            className={classes.transaction}
          >
            <p className="date">
              {dayjs(transaction.date).format('MMM D, YYYY HH:mm:ss')}
            </p>
            <p className="amount">{transaction.amount} ATOM</p>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
