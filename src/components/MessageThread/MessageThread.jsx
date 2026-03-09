import React, { useState } from 'react';
import Avatar from '../common/Avatar/Avatar';
import { currentUser } from '../../utils/mockData';
import styles from './MessageThread.module.css';

function MessageThread({ conversations }) {
  const [activeConv, setActiveConv] = useState(conversations[0] || null);
  const [messages, setMessages] = useState(activeConv?.messages || []);
  const [inputText, setInputText] = useState('');

  const selectConv = (conv) => {
    setActiveConv(conv);
    setMessages(conv.messages);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newMsg = {
      id: `msg-${Date.now()}`,
      senderId: '0',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
  };

  return (
    <div className={styles.thread}>
      {/* Conversation List */}
      <div className={styles.convList}>
        <div className={styles.listHeader}>
          <h2 className={styles.listTitle}>Messages</h2>
        </div>
        {conversations.map((conv) => (
          <button
            key={conv.id}
            className={`${styles.convItem} ${activeConv?.id === conv.id ? styles.active : ''}`}
            onClick={() => selectConv(conv)}
          >
            <Avatar src={conv.user.avatar} alt={conv.user.name} size="md" online={conv.user.isOnline} />
            <div className={styles.convInfo}>
              <div className={styles.convTop}>
                <span className={styles.convName}>{conv.user.name}</span>
                <span className={styles.convTime}>{conv.time}</span>
              </div>
              <div className={styles.convBottom}>
                <span className={styles.convLast}>{conv.lastMessage}</span>
                {conv.unread > 0 && <span className={styles.unreadBadge}>{conv.unread}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Chat pane */}
      {activeConv ? (
        <div className={styles.chat}>
          <div className={styles.chatHeader}>
            <Avatar src={activeConv.user.avatar} alt={activeConv.user.name} size="sm" online={activeConv.user.isOnline} />
            <div>
              <p className={styles.chatName}>{activeConv.user.name}</p>
              <p className={styles.chatStatus}>{activeConv.user.isOnline ? '🟢 Online' : '⚫ Offline'}</p>
            </div>
          </div>

          <div className={styles.messages}>
            {messages.map((msg) => {
              const isMe = msg.senderId === '0';
              return (
                <div key={msg.id} className={`${styles.msgRow} ${isMe ? styles.me : ''}`}>
                  {!isMe && <Avatar src={activeConv.user.avatar} alt={activeConv.user.name} size="xs" />}
                  <div className={`${styles.bubble} ${isMe ? styles.bubbleMe : styles.bubbleThem}`}>
                    <p>{msg.text}</p>
                    <span className={styles.msgTime}>{msg.time}</span>
                  </div>
                  {isMe && <Avatar src={currentUser.avatar} alt={currentUser.name} size="xs" />}
                </div>
              );
            })}
          </div>

          <form className={styles.inputRow} onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className={styles.msgInput}
              id="message-input"
            />
            <button type="submit" className={styles.sendBtn} disabled={!inputText.trim()}>➤</button>
          </form>
        </div>
      ) : (
        <div className={styles.empty}>Select a conversation to start chatting</div>
      )}
    </div>
  );
}

export default MessageThread;
