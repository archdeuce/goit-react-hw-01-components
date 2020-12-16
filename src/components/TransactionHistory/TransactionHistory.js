import React from "react";
import style from "./TransactionHistory.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";
import PropTypes from "prop-types";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className={style.container}>
      <table className={style.transactionHistory}>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
