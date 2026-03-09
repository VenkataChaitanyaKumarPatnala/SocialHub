import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Avatar from '../common/Avatar/Avatar';
import { currentUser } from '../../utils/mockData';
import { api } from '../../utils/api';
import styles from './Header.module.css';

function Header({ notifCount = 0 }) {
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim()) {
        const users = await api.searchUsers(searchQuery);
        setSearchResults(users);
        setShowSearch(true);
      } else {
        setSearchResults([]);
        setShowSearch(false);
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleResultClick = (userId) => {
    setShowSearch(false);
    setSearchQuery('');
    navigate(`/profile/${userId}`);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoIcon}>◈</span>
        <span className={styles.logoText}>SocialHub</span>
      </Link>

      <div className={styles.searchWrap} ref={searchRef}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            id="header-search"
            type="text"
            placeholder="Search people & posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => { setSearchQuery(''); setShowSearch(false); }}>✕</button>
          )}
        </div>
        {showSearch && searchResults.length > 0 && (
          <div className={styles.searchDropdown}>
            <p className={styles.searchLabel}>People</p>
            {searchResults.map((u) => (
              <button key={u.id} className={styles.searchResult} onClick={() => handleResultClick(u.id)}>
                <Avatar src={u.avatar} alt={u.name} size="sm" online={u.isOnline} />
                <div>
                  <p className={styles.resultName}>{u.name}</p>
                  <p className={styles.resultUser}>{u.username}</p>
                </div>
              </button>
            ))}
          </div>
        )}
        {showSearch && searchResults.length === 0 && searchQuery && (
          <div className={styles.searchDropdown}>
            <p className={styles.noResults}>No results for "{searchQuery}"</p>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button
          id="theme-toggle"
          className={styles.iconBtn}
          onClick={toggleTheme}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <Link to="/notifications" className={styles.notifBtn} id="notif-btn">
          <span>🔔</span>
          {notifCount > 0 && <span className={styles.badge}>{notifCount > 9 ? '9+' : notifCount}</span>}
        </Link>

        <div className={styles.avatarWrap}>
          <button className={styles.avatarBtn} onClick={() => setShowDropdown(!showDropdown)} id="user-menu-btn">
            <Avatar src={currentUser.avatar} alt={currentUser.name} size="sm" online={true} />
          </button>
          {showDropdown && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownUser}>
                <Avatar src={currentUser.avatar} alt={currentUser.name} size="md" />
                <div>
                  <p className={styles.dropdownName}>{currentUser.name}</p>
                  <p className={styles.dropdownUsername}>{currentUser.username}</p>
                </div>
              </div>
              <hr className={styles.divider} />
              <Link to="/profile/0" className={styles.dropdownItem} onClick={() => setShowDropdown(false)}>👤 My Profile</Link>
              <Link to="/messages" className={styles.dropdownItem} onClick={() => setShowDropdown(false)}>💬 Messages</Link>
              <hr className={styles.divider} />
              <button className={styles.dropdownItem} onClick={toggleTheme}>{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
