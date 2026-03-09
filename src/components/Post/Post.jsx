import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar/Avatar';
import { currentUser } from '../../utils/mockData';
import styles from './Post.module.css';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    if (isLiked) {
      setLikes((l) => l - 1);
    } else {
      setLikes((l) => l + 1);
    }
    setIsLiked((prev) => !prev);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment = {
      id: `c-new-${Date.now()}`,
      author: currentUser,
      text: commentText.trim(),
      time: 'just now',
    };
    setComments((prev) => [...prev, newComment]);
    setCommentText('');
  };

  const formatNumber = (n) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return n;
  };

  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <Link to={`/profile/${post.author.id}`} className={styles.authorLink}>
          <Avatar src={post.author.avatar} alt={post.author.name} size="md" online={post.author.isOnline} />
        </Link>
        <div className={styles.authorInfo}>
          <Link to={`/profile/${post.author.id}`} className={styles.authorName}>{post.author.name}</Link>
          <p className={styles.meta}>{post.author.username} · {post.time}</p>
        </div>
        <button className={styles.moreBtn} title="More options">⋯</button>
      </div>

      <p className={styles.content}>{post.content}</p>

      {post.image && (
        <div className={styles.imageWrap}>
          <img src={post.image} alt="Post content" className={styles.postImage} loading="lazy" />
        </div>
      )}

      <div className={styles.stats}>
        <span>{formatNumber(likes)} likes</span>
        <span>{comments.length} comments · {formatNumber(post.shares)} shares</span>
      </div>

      <div className={styles.actions}>
        <button
          id={`like-btn-${post.id}`}
          className={`${styles.actionBtn} ${isLiked ? styles.liked : ''}`}
          onClick={handleLike}
        >
          {isLiked ? '❤️' : '🤍'} Like
        </button>
        <button
          id={`comment-btn-${post.id}`}
          className={styles.actionBtn}
          onClick={() => setShowComments((prev) => !prev)}
        >
          💬 Comment
        </button>
        <button className={styles.actionBtn}>↪️ Share</button>
      </div>

      {showComments && (
        <div className={styles.commentsSection}>
          {comments.map((c) => (
            <div key={c.id} className={styles.comment}>
              <Avatar src={c.author.avatar} alt={c.author.name} size="xs" />
              <div className={styles.commentBubble}>
                <span className={styles.commentAuthor}>{c.author.name}</span>
                <span className={styles.commentText}>{c.text}</span>
                <span className={styles.commentTime}>{c.time}</span>
              </div>
            </div>
          ))}

          <form className={styles.commentForm} onSubmit={handleComment}>
            <Avatar src={currentUser.avatar} alt={currentUser.name} size="xs" online={true} />
            <input
              type="text"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className={styles.commentInput}
              id={`comment-input-${post.id}`}
            />
            <button type="submit" className={styles.sendBtn} disabled={!commentText.trim()}>➤</button>
          </form>
        </div>
      )}
    </article>
  );
}

export default Post;
