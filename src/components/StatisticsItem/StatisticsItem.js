import React from "react";
import style from "./StatisticsItem.module.css";
import randomColor from "../../colors";
import PropTypes from "prop-types";

const StatisticsItem = ({ label, percentage }) => {
  const color = randomColor();

  return (
    <li className={style.item} style={{ backgroundColor: color }}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
