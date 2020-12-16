import React from "react";
import style from "./FriendListItem.module.css";
// import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? style.online : style.offline;

  return (
    <li className={style.list}>
      <span className={status}></span>
      <img className={style.avatar} src={avatar} alt={name} />
      <span className={style.name}>{name}</span>
    </li>
  );
};

export default FriendListItem;

// StatisticsItem.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };
