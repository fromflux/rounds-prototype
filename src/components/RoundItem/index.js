import React from 'react';
import styles from './styles.css';
import { currencyGBP } from '../../common/formats';

const RoundItem = ({ id, bar_id, ordered_at, total }) => {
  const date = new Date(ordered_at);
  const dateFormat = date.toLocaleDateString();
  const timeFormat = date.toLocaleTimeString();
  return (
    <li className={styles.RoundItem}>
      <div className={styles.Column}>{dateFormat}</div>
      <div className={styles.Column} style={{textAlign: 'center'}}>{timeFormat}</div>
      <div className={styles.Column} style={{textAlign: 'right'}}>{currencyGBP.format(total)}</div>
    </li>
  );
}

RoundItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  bar_id: React.PropTypes.number.isRequired,
  ordered_at: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default RoundItem;