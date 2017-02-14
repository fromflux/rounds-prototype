import React, { Component } from 'react';
import styles from './styles.css';

import RoundItem from '../RoundItem';

export default class RoundList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.RoundList}>
        {this.props.rounds.map(item => (
          <RoundItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }
}

RoundList.propTypes = {
  rounds: React.PropTypes.array.isRequired
}