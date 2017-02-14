import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import { browserHistory } from 'react-router';
import { BeerIcon } from '../../components/Icons';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.currentBar.id) {
      browserHistory.replace('/location');
    } else {
      browserHistory.replace('/products');
    }
  }

  render () {
    return (
      <div className={styles.Home}><BeerIcon className={styles.SvgIcon} /></div>
    );  
  }
}

function mapStateToProps(state) {
  return { 
    currentBar: state.reducer.currentBar
  }
}

export default connect(mapStateToProps)(Home);