import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import RoundList from '../../components/RoundList';
import NavBar from '../../components/NavBar';

export class History extends Component {
  constructor(props) {
    super(props);
  }

  getOrderCount() {
    return this.props.roundItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }

  render() {
    return (
      <div className={styles.History}>
        {this.props.history.length === 0 && <div className={styles.EmptyLabel}>No previous orders</div>}
        <RoundList rounds={this.props.history} />
        <NavBar productCount={this.getOrderCount()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    history: state.reducer.history,
    roundItems: state.reducer.roundItems
  }
}

export default connect(mapStateToProps)(History);