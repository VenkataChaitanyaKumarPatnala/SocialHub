import React, { useState, useEffect } from 'react';
import Notification from '../../components/Notification/Notification';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import { api } from '../../utils/api';
import styles from './Notifications.module.css';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.fetchNotifications().then((data) => {
      setNotifications(data);
      setLoading(false);
    });
  }, []);

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Notifications {unreadCount > 0 && <span className={styles.count}>{unreadCount} new</span>}</h1>
        {unreadCount > 0 && (
          <Button variant="secondary" size="sm" onClick={markAllRead} id="mark-all-read-btn">
            ✓ Mark all as read
          </Button>
        )}
      </div>

      <Card padding={false}>
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={styles.skNotif}>
                <div className={`skeleton ${styles.skAvatar}`} />
                <div className={styles.skLines}>
                  <div className={`skeleton ${styles.skLine}`} style={{ width: '70%' }} />
                  <div className={`skeleton ${styles.skLine}`} style={{ width: '30%' }} />
                </div>
              </div>
            ))
          : notifications.map((n) => (
              <Notification key={n.id} notification={n} onMarkRead={markRead} />
            ))
        }
      </Card>
    </div>
  );
}

export default Notifications;
