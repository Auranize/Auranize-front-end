import  { useState } from 'react';

type User = {
  name: string;
  username: string;
  avatar: string;
};

type Post = {
  id: number;
  user: User;
  content: string;
  image: string | null;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: {
        name: 'John Doe',
        username: '@johndoe',
        avatar: 'https://example.com/avatar.jpg',
      },
      content: 'Hello, this is a post!',
      image: null,
      likes: 10,
      comments: 5,
      shares: 2,
      timestamp: '2h ago',
    },
  ]);

  const handleLike = (postId: number) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Feed</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-4 border p-3 rounded">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-semibold">{post.user.name}</p>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          <p>{post.content}</p>
          <button
            className="text-blue-500 mt-2"
            onClick={() => handleLike(post.id)}
          >
            ❤️ {post.likes}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
