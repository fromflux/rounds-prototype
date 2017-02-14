import React from 'react';
import styles from './styles.css';

import { Link } from 'react-router';
import { AppMenuIcon } from '../Icons';

const AppHeader = ({ title }) => {
  return (
    <header className={styles.AppHeader}>
      <Link to="/location" className={styles.HeaderIcon} activeClassName={styles.active}>
        <AppMenuIcon />
      </Link>
      {title}
    </header>
  );
}

AppHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default AppHeader;