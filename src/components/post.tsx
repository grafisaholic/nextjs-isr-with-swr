import React from 'react';
import { PostTypes } from '../../data/post';

const Post: React.FC<PostTypes> = props => {
  const { date, title, topic, id, stack } = props;
  return (
    <div className="px-3 py-2 rounded-md border border-gray-300 hover:shadow-xl hover:border-gray-500 duration-300">
      <div className="flex flex-row gap-2 items-center justify-between">
        <span className="text-xs font-semibold text-slate-400">{date}</span>
        <div className="flexflex-row">
          <span className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {stack}
          </span>
          <span className="bg-pink-200 text-pink-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {topic}
          </span>
        </div>
      </div>
      <h4 className="mt-2 font-semibold">{title}</h4>
    </div>
  );
};

export default Post;
