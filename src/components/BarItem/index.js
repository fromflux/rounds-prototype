import React, { Component } from 'react';
import styles from './styles.css';

class BarItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelect(this.props.bar);
  }

  render() {
    return (
      <li className={styles.BarItem} onClick={this.handleClick}>
        <div>{this.props.bar.name}</div>
      </li>
    );
  }
}

BarItem.propTypes = {
  bar: React.PropTypes.shape({
    name: React.PropTypes.string
  }).isRequired,
  onSelect: React.PropTypes.func
};

export default BarItem;