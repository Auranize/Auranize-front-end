// components/CreatePost.tsx
import React from 'react';
import { Plus } from 'lucide-react';

type Props = {
  newPost: string;
  setNewPost: (value: string) => void;
  handlePost: () => void;
};

const CreatePost: React.FC<Props> = ({ newPost, setNewPost, handlePost }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
        JD
      </div>
      <div className="flex-1">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's happening?"
          className="w-full resize-none border-0 placeholder-gray-500 text-lg focus:outline-none focus:ring-0"
          rows={3}
        />
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-blue-500 hover:text-blue-600">
              <Plus className="w-5 h-5 mr-1" />
              <span className="text-sm">Photo</span>
            </button>
          </div>
          <button
            onClick={handlePost}
            disabled={!newPost.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CreatePost;
