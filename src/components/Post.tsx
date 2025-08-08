import React from 'react';
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
} from 'lucide-react';

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

type PostProps = {
  post: PostType;
  onLike: (postId: number) => void;
};

const Post: React.FC<PostProps> = ({ post, onLike }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
          {post.user.avatar}
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
          <p className="text-sm text-gray-500">
            @{post.user.username} · {post.timestamp}
          </p>
        </div>
      </div>
      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>

    <p className="text-gray-900 mb-4 leading-relaxed">{post.content}</p>

    {post.image && (
      <div className="mb-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl h-64 flex items-center justify-center text-6xl">
        {post.image}
      </div>
    )}

    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <button
        onClick={() => onLike(post.id)}
        className="flex items-center space-x-2 text-gray-500 hover:text-red-500 group"
      >
        <div className="p-2 rounded-full group-hover:bg-red-50">
          <Heart className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium">{post.likes}</span>
      </button>
      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 group">
        <div className="p-2 rounded-full group-hover:bg-blue-50">
          <MessageCircle className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium">{post.comments}</span>
      </button>
      <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 group">
        <div className="p-2 rounded-full group-hover:bg-green-50">
          <Share className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium">{post.shares}</span>
      </button>
      <button className="p-2 text-gray-500 hover:text-yellow-500 hover:bg-yellow-50 rounded-full">
        <Bookmark className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default Post;
