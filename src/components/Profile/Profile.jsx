import React, { useState } from 'react';
import Avatar from '../common/Avatar/Avatar';
import Button from '../common/Button/Button';
import styles from './Profile.module.css';

function Profile({ user }) {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing || false);
  const [followers, setFollowers] = useState(user.followers);

  const handleFollow = () => {
    if (isFollowing) {
      setFollowers((f) => f - 1);
    } else {
      setFollowers((f) => f + 1);
    }
    setIsFollowing((prev) => !prev);
  };

  const fmt = (n) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return n;
  };

  const isOwnProfile = user.id === '0';

  return (
    <div className={styles.profile}>
      <div className={styles.cover}>
        <img src={user.coverPhoto} alt="Cover" className={styles.coverImg} />
        <div className={styles.coverOverlay} />
      </div>

      <div className={styles.body}>
        <div className={styles.avatarRow}>
          <Avatar src={user.avatar} alt={user.name} size="xxl" online={user.isOnline} className={styles.avatar} />
          <div className={styles.headerActions}>
            {isOwnProfile ? (
              <Button variant="secondary" size="sm">✏️ Edit Profile</Button>
            ) : (
              <>
                <Button
                  variant={isFollowing ? 'secondary' : 'primary'}
                  size="sm"
                  onClick={handleFollow}
                  id={`follow-btn-${user.id}`}
                >
                  {isFollowing ? '✓ Following' : '+ Follow'}
                </Button>
                <Button variant="secondary" size="sm">💬 Message</Button>
              </>
            )}
          </div>
        </div>

        <div className={styles.info}>
          <h1 className={styles.name}>{user.name}</h1>
          <p className={styles.username}>{user.username}</p>
          {user.bio && <p className={styles.bio}>{user.bio}</p>}
          <div className={styles.details}>
            {user.location && <span>📍 {user.location}</span>}
            {user.joined && <span>📅 Joined {user.joined}</span>}
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{fmt(user.posts)}</span>
            <span className={styles.statLabel}>Posts</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>{fmt(followers)}</span>
            <span className={styles.statLabel}>Followers</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>{fmt(user.following)}</span>
            <span className={styles.statLabel}>Following</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
