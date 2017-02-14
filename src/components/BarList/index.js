import React from 'react';
import styles from './styles.css';

import BarItem from '../BarItem';

const BarList = ({ items, onSelect }) => {
  return (
    <ul className={styles.BarList}>
      {items.map(item => <BarItem key={item.id} bar={item} onSelect={onSelect} />)}
    </ul>
  );
}

BarList.propTypes = {
  items: React.PropTypes.array.isRequired,
  onSelect: React.PropTypes.func.isRequired
};

export default BarList;