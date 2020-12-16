import React from "react";
import style from "./Statistics.module.css";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <div className={style.container}>
      {title && <h2 className={style.title}>Upload stats</h2>}

      <div className={style.statistics}>
        <ul className={style.stat}>
          {stats.map(({ id, label, percentage }) => (
            <StatisticsItem key={id} label={label} percentage={percentage} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
