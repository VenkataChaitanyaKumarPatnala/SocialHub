import React, { useState } from 'react';
import Avatar from '../common/Avatar/Avatar';
import { currentUser } from '../../utils/mockData';
import styles from './Stories.module.css';

function Stories({ stories }) {
  const [viewed, setViewed] = useState({});

  const handleView = (id) => {
    setViewed((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className={styles.storiesWrap}>
      {/* My Story */}
      <div className={styles.story}>
        <div className={styles.addStory}>
          <Avatar src={currentUser.avatar} alt={currentUser.name} size="lg" online={true} />
          <span className={styles.addBtn}>+</span>
        </div>
        <p className={styles.storyName}>Your Story</p>
      </div>

      {stories.map((s) => (
        <button
          key={s.id}
          className={`${styles.story} ${styles.storyBtn}`}
          onClick={() => handleView(s.id)}
        >
          <div className={`${styles.ring} ${s.viewed || viewed[s.id] ? styles.viewed : ''}`}>
            <Avatar src={s.user.avatar} alt={s.user.name} size="lg" />
          </div>
          <p className={styles.storyName}>{s.user.name.split(' ')[0]}</p>
        </button>
      ))}
    </div>
  );
}

export default Stories;
