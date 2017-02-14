import React from 'react';
import styles from './styles.css';
import { connect } from 'react-redux';
import AppHeader from '../../components/AppHeader';

const App = (props) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <AppHeader title="Rounds Prototype" />
      </header>
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
}

export default connect(null)(App);