// src/components/Card.jsx
import React from 'react';
import { FiCopy, FiEdit, FiTrash2 } from 'react-icons/fi';

const Card = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">{post.tag}</span>
        <FiCopy className="text-gray-600 cursor-pointer" />
      </div>
      <p className="text-gray-800 mb-4">{post.body}</p>
      <div className="flex justify-end space-x-2">
        <FiEdit className="text-blue-500 cursor-pointer" />
        <FiTrash2 className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
