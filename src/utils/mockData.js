export const mockUsers = [
  {
    id: '1',
    name: 'Alex Rivera',
    username: '@alex_rivera',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    coverPhoto: 'https://picsum.photos/seed/cover1/800/300',
    bio: 'Full-stack developer 🚀 | Coffee addict ☕ | Open source enthusiast',
    followers: 2847,
    following: 412,
    posts: 134,
    isOnline: true,
    isFollowing: false,
    location: 'San Francisco, CA',
    joined: 'January 2022',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    username: '@priya_s',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    coverPhoto: 'https://picsum.photos/seed/cover2/800/300',
    bio: 'UX Designer ✨ | Making the web beautiful one pixel at a time',
    followers: 5120,
    following: 289,
    posts: 87,
    isOnline: true,
    isFollowing: true,
    location: 'New York, NY',
    joined: 'March 2021',
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    username: '@marcusj',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    coverPhoto: 'https://picsum.photos/seed/cover3/800/300',
    bio: 'Photographer 📸 | Traveler 🌍 | Capturing life one shot at a time',
    followers: 12400,
    following: 670,
    posts: 312,
    isOnline: false,
    isFollowing: false,
    location: 'Austin, TX',
    joined: 'June 2020',
  },
  {
    id: '4',
    name: 'Sofia Chen',
    username: '@sofia_chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia',
    coverPhoto: 'https://picsum.photos/seed/cover4/800/300',
    bio: 'Data Scientist 📊 | AI enthusiast 🤖 | Python lover',
    followers: 3200,
    following: 155,
    posts: 67,
    isOnline: true,
    isFollowing: true,
    location: 'Seattle, WA',
    joined: 'September 2021',
  },
  {
    id: '5',
    name: 'Jordan Williams',
    username: '@jordanw',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
    coverPhoto: 'https://picsum.photos/seed/cover5/800/300',
    bio: 'Startup founder | Building the future 💡 | Speaker & Mentor',
    followers: 8900,
    following: 502,
    posts: 201,
    isOnline: false,
    isFollowing: false,
    location: 'Boston, MA',
    joined: 'May 2019',
  },
];

export const currentUser = {
  id: '0',
  name: 'You (Demo User)',
  username: '@demo_user',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Demo',
  coverPhoto: 'https://picsum.photos/seed/cover0/800/300',
  bio: 'React learner 🌱 | Building cool things | Month 2 of the journey!',
  followers: 421,
  following: 98,
  posts: 23,
  isOnline: true,
  location: 'Your City',
  joined: 'March 2026',
};

export const mockPosts = [
  {
    id: 'p1',
    author: mockUsers[1], // Priya
    content: 'Just finished redesigning the onboarding flow for our app. The conversion rate increased by 40%! 🎉 Sometimes the smallest UX changes make the biggest impact. What do you think of the new design?',
    image: 'https://picsum.photos/seed/post1/600/400',
    likes: 284,
    comments: [
      { id: 'c1', author: mockUsers[0], text: 'This looks amazing Priya! 🔥', time: '2h ago' },
      { id: 'c2', author: mockUsers[3], text: 'Love the color palette you chose!', time: '1h ago' },
    ],
    shares: 47,
    time: '3 hours ago',
    timestamp: Date.now() - 3 * 60 * 60 * 1000,
  },
  {
    id: 'p2',
    author: mockUsers[2], // Marcus
    content: 'Golden hour at the Grand Canyon. No filter needed when nature does the work. 🌅',
    image: 'https://picsum.photos/seed/canyon/600/400',
    likes: 1893,
    comments: [
      { id: 'c3', author: mockUsers[4], text: 'Breathtaking shot!', time: '4h ago' },
    ],
    shares: 312,
    time: '5 hours ago',
    timestamp: Date.now() - 5 * 60 * 60 * 1000,
  },
  {
    id: 'p3',
    author: mockUsers[0], // Alex
    content: 'Hot take: Most apps are over-engineered. The best code is code you don\'t have to write. Just shipped a feature in 50 lines that would have taken 500 using a heavy framework. KISS principle forever. 💻',
    image: null,
    likes: 521,
    comments: [
      { id: 'c4', author: mockUsers[3], text: 'Totally agree! Simplicity is underrated.', time: '6h ago' },
      { id: 'c5', author: mockUsers[1], text: 'Depends on the scale though!', time: '5h ago' },
      { id: 'c6', author: mockUsers[4], text: 'Both sides have valid points.', time: '3h ago' },
    ],
    shares: 83,
    time: '8 hours ago',
    timestamp: Date.now() - 8 * 60 * 60 * 1000,
  },
  {
    id: 'p4',
    author: mockUsers[3], // Sofia
    content: 'Our new ML model achieves 97.3% accuracy on the benchmark dataset using only 10% of the training data! Efficiency > brute force every time. Paper link in bio 🤖📊',
    image: 'https://picsum.photos/seed/data/600/350',
    likes: 742,
    comments: [],
    shares: 156,
    time: '1 day ago',
    timestamp: Date.now() - 24 * 60 * 60 * 1000,
  },
  {
    id: 'p5',
    author: mockUsers[4], // Jordan
    content: 'We just crossed $1M ARR! 🎊 18 months ago we were building in a tiny apartment with 0 customers. To everyone who said it couldn\'t be done — thank you for the fuel. The journey is just beginning.',
    image: null,
    likes: 3241,
    comments: [
      { id: 'c7', author: mockUsers[0], text: 'Congrats Jordan! Inspiring!', time: '22h ago' },
      { id: 'c8', author: mockUsers[1], text: 'Crushing it! 🙌', time: '20h ago' },
    ],
    shares: 521,
    time: '1 day ago',
    timestamp: Date.now() - 26 * 60 * 60 * 1000,
  },
];

export const mockNotifications = [
  { id: 'n1', type: 'like', actor: mockUsers[1], action: 'liked your post', target: 'your latest photo', time: '2 min ago', read: false },
  { id: 'n2', type: 'follow', actor: mockUsers[2], action: 'started following you', target: null, time: '15 min ago', read: false },
  { id: 'n3', type: 'comment', actor: mockUsers[0], action: 'commented on your post', target: '"Love this design..."', time: '1 hour ago', read: false },
  { id: 'n4', type: 'like', actor: mockUsers[3], action: 'liked your comment', target: null, time: '2 hours ago', read: true },
  { id: 'n5', type: 'mention', actor: mockUsers[4], action: 'mentioned you in a post', target: '"Shoutout to @demo_user..."', time: '5 hours ago', read: true },
  { id: 'n6', type: 'follow', actor: mockUsers[0], action: 'started following you', target: null, time: '1 day ago', read: true },
  { id: 'n7', type: 'comment', actor: mockUsers[2], action: 'replied to your comment', target: '"Totally agree!"', time: '2 days ago', read: true },
];

export const mockConversations = [
  {
    id: 'conv1',
    user: mockUsers[1], // Priya
    lastMessage: 'Hey! Did you check out the new design I shared?',
    time: '2 min ago',
    unread: 3,
    messages: [
      { id: 'm1', senderId: '2', text: 'Hey! Did you check out the new design I shared?', time: '2:34 PM' },
      { id: 'm2', senderId: '0', text: 'Just did! Looks absolutely amazing 🔥', time: '2:35 PM' },
      { id: 'm3', senderId: '2', text: 'Thanks! I was going for a more minimal approach this time.', time: '2:35 PM' },
      { id: 'm4', senderId: '2', text: 'Hey! Did you check out the new design I shared?', time: '3:01 PM' },
    ],
  },
  {
    id: 'conv2',
    user: mockUsers[0], // Alex
    lastMessage: 'Let me know when you want to pair program!',
    time: '1 hour ago',
    unread: 0,
    messages: [
      { id: 'm5', senderId: '1', text: 'Hey, working on any cool projects?', time: '10:15 AM' },
      { id: 'm6', senderId: '0', text: 'Building this social media dashboard actually!', time: '10:20 AM' },
      { id: 'm7', senderId: '1', text: 'Nice! Let me know when you want to pair program!', time: '10:22 AM' },
    ],
  },
  {
    id: 'conv3',
    user: mockUsers[4], // Jordan
    lastMessage: 'We should grab coffee and chat about the startup!',
    time: '3 hours ago',
    unread: 1,
    messages: [
      { id: 'm8', senderId: '5', text: 'Loved your latest post about React!', time: '8:00 AM' },
      { id: 'm9', senderId: '0', text: 'Thanks Jordan, means a lot from you!', time: '8:30 AM' },
      { id: 'm10', senderId: '5', text: 'We should grab coffee and chat about the startup!', time: '9:00 AM' },
    ],
  },
];

export const mockStories = [
  { id: 's1', user: mockUsers[1], viewed: false },
  { id: 's2', user: mockUsers[2], viewed: false },
  { id: 's3', user: mockUsers[0], viewed: true },
  { id: 's4', user: mockUsers[3], viewed: false },
  { id: 's5', user: mockUsers[4], viewed: true },
];
