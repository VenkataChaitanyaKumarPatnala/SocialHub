import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

function Layout({ children, notifCount }) {
  return (
    <div className={styles.layout}>
      <Header notifCount={notifCount} />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.main} id="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
