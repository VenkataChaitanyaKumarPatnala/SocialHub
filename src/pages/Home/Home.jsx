import React, { useState, useEffect } from 'react';
import Post from '../../components/Post/Post';
import Stories from '../../components/Stories/Stories';
import Avatar from '../../components/common/Avatar/Avatar';
import Card from '../../components/common/Card/Card';
import { api } from '../../utils/api';
import { mockStories, mockUsers, currentUser } from '../../utils/mockData';
import styles from './Home.module.css';

function PostSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skHeader}>
        <div className={`skeleton ${styles.skAvatar}`} />
        <div className={styles.skLines}>
          <div className={`skeleton ${styles.skLine}`} style={{ width: '40%' }} />
          <div className={`skeleton ${styles.skLine}`} style={{ width: '25%' }} />
        </div>
      </div>
      <div className={`skeleton ${styles.skBody}`} />
      <div className={`skeleton ${styles.skImage}`} />
    </div>
  );
}

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const data = await api.fetchPosts();
        if (!cancelled) {
          setPosts(data);
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) {
          setError('Failed to load posts. Please try again.');
          setLoading(false);
        }
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className={styles.home}>
      {/* Stories */}
      <Card className={styles.storiesCard}>
        <Stories stories={mockStories} />
      </Card>

      {/* Create post box */}
      <Card className={styles.createPost}>
        <Avatar src={currentUser.avatar} alt={currentUser.name} size="md" online={true} />
        <button className={styles.createInput} id="create-post-btn">
          What's on your mind?
        </button>
      </Card>

      {/* Feed */}
      <div className={styles.feed}>
        {loading && Array.from({ length: 3 }).map((_, i) => <PostSkeleton key={i} />)}
        {error && (
          <div className={styles.errorBox}>
            <span>⚠️</span>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}
        {!loading && !error && posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      {/* Who to follow sidebar */}
      <aside className={styles.suggestions}>
        <Card padding={false}>
          <div className={styles.suggestHeader}>
            <h2>Who to Follow</h2>
          </div>
          {mockUsers.filter(u => !u.isFollowing).slice(0, 3).map(u => (
            <div key={u.id} className={styles.suggestItem}>
              <Avatar src={u.avatar} alt={u.name} size="sm" online={u.isOnline} />
              <div className={styles.suggestInfo}>
                <p className={styles.suggestName}>{u.name}</p>
                <p className={styles.suggestUser}>{u.username}</p>
              </div>
              <button className={styles.followBtn}>Follow</button>
            </div>
          ))}
        </Card>
      </aside>
    </div>
  );
}

export default Home;
