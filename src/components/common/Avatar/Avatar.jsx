import React from 'react';
import styles from './Avatar.module.css';

function Avatar({ src, alt, size = 'md', online = null, className = '' }) {
  return (
    <div className={`${styles.wrapper} ${styles[size]} ${className}`}>
      <img
        src={src || `https://api.dicebear.com/7.x/avataaars/svg?seed=${alt}`}
        alt={alt}
        className={styles.img}
      />
      {online !== null && (
        <span className={`${styles.dot} ${online ? styles.online : styles.offline}`} />
      )}
    </div>
  );
}

export default Avatar;
