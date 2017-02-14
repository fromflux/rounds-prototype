import React, { Component } from 'react';
import styles from './styles.css';
import { currencyGBP } from '../../common/formats';

export default class OrderFooter extends Component {
  render() {
    return (
      <div className={styles.OrderFooter}>
        <div className={styles.Label}>Total:</div>
        <div className={styles.Value}>{currencyGBP.format(this.props.total)}</div>
        <button className={styles.Button} onClick={this.props.onOrder}>Done</button>
      </div>
    );
  }
}

OrderFooter.propTypes = {
  total: React.PropTypes.number.isRequired,
  onOrder: React.PropTypes.func
};