import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import Post from '../../components/Post/Post';
import { api } from '../../utils/api';
import { currentUser } from '../../utils/mockData';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const userData = id === '0' ? currentUser : await api.fetchUser(id);
        const userPosts = await api.fetchUserPosts(id === '0' ? undefined : id);
        if (!cancelled) {
          setUser(userData);
          setPosts(userPosts);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={`skeleton ${styles.skProfile}`} />
        <div className={`skeleton ${styles.skPost}`} />
        <div className={`skeleton ${styles.skPost}`} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <span>🔍</span>
          <h2>User not found</h2>
          <p>The profile you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Profile user={user} />
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.activeTab}`}>Posts</button>
        <button className={styles.tab}>Media</button>
        <button className={styles.tab}>Likes</button>
      </div>
      {posts.length === 0 ? (
        <div className={styles.emptyPosts}>
          <span>📝</span>
          <p>No posts yet</p>
        </div>
      ) : (
        <div className={styles.feed}>
          {posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
