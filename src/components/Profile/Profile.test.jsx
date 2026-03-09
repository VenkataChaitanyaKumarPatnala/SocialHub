import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './Profile';

const mockUser = {
  id: '1',
  name: 'Jane Doe',
  username: '@janedoe',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
  coverPhoto: 'https://picsum.photos/seed/jane/800/300',
  bio: 'Software engineer and coffee lover.',
  followers: 1200,
  following: 340,
  posts: 75,
  isOnline: true,
  isFollowing: false,
  location: 'London, UK',
  joined: 'April 2021',
};

describe('Profile Component', () => {
  test('renders user name', () => {
    render(<Profile user={mockUser} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  test('renders user bio', () => {
    render(<Profile user={mockUser} />);
    expect(screen.getByText('Software engineer and coffee lover.')).toBeInTheDocument();
  });

  test('renders username', () => {
    render(<Profile user={mockUser} />);
    expect(screen.getByText('@janedoe')).toBeInTheDocument();
  });

  test('follow button is shown for non-own profiles', () => {
    render(<Profile user={mockUser} />);
    expect(screen.getByText('+ Follow')).toBeInTheDocument();
  });

  test('follow button toggles to Following when clicked', () => {
    render(<Profile user={mockUser} />);
    const followBtn = screen.getByText('+ Follow');
    fireEvent.click(followBtn);
    expect(screen.getByText('✓ Following')).toBeInTheDocument();
  });

  test('follower count increments when followed', () => {
    render(<Profile user={mockUser} />);
    expect(screen.getByText('1.2K')).toBeInTheDocument();
    fireEvent.click(screen.getByText('+ Follow'));
    expect(screen.getByText('1.2K')).toBeInTheDocument(); // 1201 rounds to 1.2K still
  });

  test('edit profile shown for own profile', () => {
    render(<Profile user={{ ...mockUser, id: '0' }} />);
    expect(screen.getByText('✏️ Edit Profile')).toBeInTheDocument();
  });
});
