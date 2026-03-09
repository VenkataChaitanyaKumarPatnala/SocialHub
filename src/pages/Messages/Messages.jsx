import React, { useState, useEffect } from 'react';
import MessageThread from '../../components/MessageThread/MessageThread';
import { api } from '../../utils/api';
import styles from './Messages.module.css';

function Messages() {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.fetchConversations().then((data) => {
      setConversations(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={`skeleton ${styles.skThread}`} />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <MessageThread conversations={conversations} />
    </div>
  );
}

export default Messages;
