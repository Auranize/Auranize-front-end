import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';

type User = {
  name: string;
  username: string;
  avatar: string;
};

type PostType = {
  id: number;
  user: User;
  content: string;
  image: string | null;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
};

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [newPost, setNewPost] = useState<string>('');
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 1,
      user: {
        name: 'John Doe',
        username: 'johndoe',
        avatar: ''
      },
      content: 'Hello, this is a sample post!',
      image: null,
      likes: 10,
      comments: 5,
      shares: 2,
      timestamp: '2h ago'
    }
  ]);

  const handlePost = () => {
    if (newPost.trim()) {
      const newPostData: PostType = {
        id: posts.length + 1,
        user: {
          name: 'You',
          username: 'you',
          avatar: '' // or emoji/avatar string
        },
        content: newPost,
        image: null,
        likes: 0,
        comments: 0,
        shares: 0,
        timestamp: 'Just now'
      };
      setPosts([newPostData, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Header activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'home' ? (
            <div className="max-w-2xl mx-auto py-6 px-4">
              <CreatePost
                newPost={newPost}
                setNewPost={setNewPost}
                handlePost={handlePost}
              />
              <div className="space-y-6">
                {posts.map((post) => (
                  <Post key={post.id} post={post} onLike={handleLike} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Coming Soon</h3>
                <p className="text-gray-500">The {activeTab} section is under development.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
