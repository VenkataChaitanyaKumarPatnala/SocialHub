import { mockPosts, mockNotifications, mockConversations, mockUsers } from './mockData';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const api = {
  async fetchPosts() {
    await delay(600);
    return [...mockPosts];
  },

  async fetchNotifications() {
    await delay(400);
    return [...mockNotifications];
  },

  async fetchConversations() {
    await delay(400);
    return [...mockConversations];
  },

  async fetchUser(id) {
    await delay(300);
    const user = mockUsers.find((u) => u.id === id);
    if (!user) throw new Error('User not found');
    return { ...user };
  },

  async fetchUserPosts(userId) {
    await delay(500);
    return mockPosts.filter((p) => p.author.id === userId);
  },

  async searchUsers(query) {
    await delay(200);
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return mockUsers.filter(
      (u) => u.name.toLowerCase().includes(q) || u.username.toLowerCase().includes(q)
    );
  },

  async searchPosts(query) {
    await delay(200);
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return mockPosts.filter((p) => p.content.toLowerCase().includes(q));
  },
};
