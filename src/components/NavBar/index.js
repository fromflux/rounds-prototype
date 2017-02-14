import React, { Component } from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import { Link } from 'react-router';
import { BeerIcon, ListIcon, HistoryIcon, MenuListIcon } from '../Icons';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.NavBar}>
        <Link to="/order" className={classnames(styles.NavItem)} activeClassName={styles.active}>
          <BeerIcon />
          {this.props.productCount != null && this.props.productCount > 0 && <div className={styles.Quantity}>{this.props.productCount}</div>}
        </Link>
        <Link to="/products" className={classnames(styles.NavItem)} activeClassName={styles.active}>
          <MenuListIcon />
        </Link>
        <Link to="/history" className={classnames(styles.NavItem)} activeClassName={styles.active}>
          <HistoryIcon />
        </Link>
      </div>
    );
  }
}

NavBar.propTypes = {
  productCount: React.PropTypes.number
};

export default NavBar;