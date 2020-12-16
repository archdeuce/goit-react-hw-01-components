import React from "react";
import style from "./TransactionItem.module.css";
import PropTypes from "prop-types";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={style.type}>{type}</td>
      <td className={style.amount}>{amount}</td>
      <td className={style.currency}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
