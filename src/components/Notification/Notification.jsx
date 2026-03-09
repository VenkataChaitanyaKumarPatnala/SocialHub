import React from 'react';
import Avatar from '../common/Avatar/Avatar';
import styles from './Notification.module.css';

const TYPE_ICONS = {
  like: '❤️',
  comment: '💬',
  follow: '👤',
  mention: '@',
  share: '↪️',
};

function Notification({ notification, onMarkRead }) {
  return (
    <div
      className={`${styles.notif} ${!notification.read ? styles.unread : ''}`}
      onClick={() => onMarkRead && onMarkRead(notification.id)}
    >
      <div className={styles.iconWrap}>
        <Avatar src={notification.actor.avatar} alt={notification.actor.name} size="md" />
        <span className={styles.typeIcon}>{TYPE_ICONS[notification.type] || '🔔'}</span>
      </div>
      <div className={styles.text}>
        <p className={styles.message}>
          <strong>{notification.actor.name}</strong> {notification.action}
          {notification.target && <span className={styles.target}> {notification.target}</span>}
        </p>
        <p className={styles.time}>{notification.time}</p>
      </div>
      {!notification.read && <span className={styles.dot} />}
    </div>
  );
}

export default Notification;
