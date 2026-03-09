import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Post from './Post';

const mockPost = {
  id: 'test-p1',
  author: {
    id: '1',
    name: 'Test User',
    username: '@testuser',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=test',
    isOnline: true,
  },
  content: 'This is a test post content for unit testing.',
  image: null,
  likes: 42,
  comments: [
    { id: 'tc1', author: { id: '2', name: 'Commenter', avatar: '', isOnline: false }, text: 'Great post!', time: '1h ago' },
  ],
  shares: 5,
  time: '2 hours ago',
};

function renderPost(post = mockPost) {
  return render(
    <MemoryRouter>
      <Post post={post} />
    </MemoryRouter>
  );
}

describe('Post Component', () => {
  test('renders post content', () => {
    renderPost();
    expect(screen.getByText('This is a test post content for unit testing.')).toBeInTheDocument();
  });

  test('renders author name', () => {
    renderPost();
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  test('like button increments count when clicked', () => {
    renderPost();
    const likeBtn = screen.getByRole('button', { name: /like/i });
    expect(screen.getByText('42 likes')).toBeInTheDocument();
    fireEvent.click(likeBtn);
    expect(screen.getByText('43 likes')).toBeInTheDocument();
  });

  test('like button decrements count when clicked again (unlike)', () => {
    renderPost();
    const likeBtn = screen.getByRole('button', { name: /like/i });
    fireEvent.click(likeBtn); // like (42 -> 43)
    fireEvent.click(likeBtn); // unlike (43 -> 42)
    expect(screen.getByText('42 likes')).toBeInTheDocument();
  });

  test('clicking comment button shows comment section', () => {
    renderPost();
    const commentBtn = screen.getByRole('button', { name: /comment/i });
    fireEvent.click(commentBtn);
    expect(screen.getByText('Great post!')).toBeInTheDocument();
  });

  test('submitting a comment adds it to the list', () => {
    renderPost();
    const commentBtn = screen.getByRole('button', { name: /comment/i });
    fireEvent.click(commentBtn);

    const input = screen.getByPlaceholderText('Write a comment...');
    fireEvent.change(input, { target: { value: 'My new comment' } });
    fireEvent.submit(input.closest('form'));

    expect(screen.getByText('My new comment')).toBeInTheDocument();
  });
});
