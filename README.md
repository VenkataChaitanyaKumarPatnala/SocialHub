# SocialHub — Social Media Dashboard

A modern, full-featured social media dashboard built with React. Designed with a premium aesthetic featuring glassmorphism, smooth animations, and full dark/light mode support.

![SocialHub Dashboard Preview](./preview.png)

## ✨ Features

- **📰 Home Feed** — Scrollable post feed with skeleton loading states and a "Who to Follow" sidebar
- **❤️ Like / Unlike** — Toggle likes with animated state changes
- **💬 Comments** — Expand inline comment threads and post new replies
- **📖 Stories bar** — Horizontal story avatars with viewed/unviewed ring indicators
- **🔔 Notifications** — Real-time badge count, mark-all-as-read, and per-notification read state
- **💬 Messages** — Threaded conversation list with full chat interface and send capability
- **👤 User Profiles** — Cover photo, bio, stats (posts/followers/following), and follow/unfollow
- **🔍 Search** — Debounced live search with user dropdown results
- **🌙 Dark / Light Mode** — Seamlessly toggles between themes, persisted via `localStorage`
- **💀 Skeleton Loaders** — Shimmer placeholders during data fetch
- **📱 Responsive Design** — Works on desktop, tablet, and mobile

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| View | React 18 + JSX |
| Routing | React Router v6 |
| State | React Hooks (`useState`, `useEffect`, `useContext`) |
| Theme | Context API + `useLocalStorage` custom hook |
| Styling | CSS Modules + CSS Custom Properties |
| Fonts | Inter (Google Fonts) |
| Data | Mock data with simulated async API (`utils/api.js`) |

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Avatar/        # Sized avatar with presence dot
│   │   ├── Button/        # Variant buttons (primary, secondary)
│   │   ├── Card/          # Surface container
│   │   └── Modal/         # Accessible overlay
│   ├── Header/            # Top nav with search + theme toggle
│   ├── Sidebar/           # Left navigation
│   ├── Layout/            # Page layout shell
│   ├── Post/              # Post card with like/comment
│   ├── Profile/           # Profile header card
│   ├── Notification/      # Notification list item
│   ├── MessageThread/     # Conversation + chat pane
│   └── Stories/           # Horizontal stories bar
├── pages/
│   ├── Home/              # Feed page
│   ├── ProfilePage/       # User profile
│   ├── Notifications/     # Notifications list
│   └── Messages/          # Messaging UI
├── context/
│   └── ThemeContext.js    # Dark/light theme provider
├── hooks/
│   └── useLocalStorage.js # Persist state to localStorage
├── utils/
│   ├── api.js             # Mock async data layer
│   └── mockData.js        # Sample users, posts, notifications, messages
└── styles/
    └── globals.css        # CSS variables, resets, animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
git clone <your-repo-url>
cd social-media-dashboard
npm install
```

### Running Locally

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

### Running Tests

```bash
npm test
```

Tests are located alongside components in `*.test.jsx` files:
- `Post.test.jsx` — Like toggle, comment submission
- `Button.test.jsx` — Variant rendering, disabled state
- `Profile.test.jsx` — Follow/unfollow interaction

## 🎨 Theming

All colors are defined as CSS custom properties in `styles/globals.css`. Switch themes by toggling the `.theme-dark` class (handled automatically via `ThemeProvider`).

| Variable | Light Mode | Dark Mode |
|----------|-----------|-----------|
| `--bg-primary` | `#f0f2f5` | `#0f1117` |
| `--bg-secondary` | `#ffffff` | `#1a1d27` |
| `--accent-primary` | `#6366f1` | `#818cf8` |

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start dev server |
| `npm test` | Run test suite |
| `npm run build` | Build for production |
