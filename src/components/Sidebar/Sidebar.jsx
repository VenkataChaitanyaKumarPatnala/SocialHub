import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../common/Avatar/Avatar';
import { currentUser } from '../../utils/mockData';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { to: '/', icon: '🏠', label: 'Home', end: true },
  { to: `/profile/${currentUser.id}`, icon: '👤', label: 'My Profile' },
  { to: '/notifications', icon: '🔔', label: 'Notifications' },
  { to: '/messages', icon: '💬', label: 'Messages' },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navLabel}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.profile}>
        <Avatar src={currentUser.avatar} alt={currentUser.name} size="sm" online={true} />
        <div className={styles.profileInfo}>
          <p className={styles.profileName}>{currentUser.name}</p>
          <p className={styles.profileUser}>{currentUser.username}</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
