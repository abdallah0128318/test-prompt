import Link from "next/link"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { FaEdit, FaTrash, FaCopy } from 'react-icons/fa';
const PromptCard = ({ item, handleDelete, handleEdit}) => {
  const [copied, setCopied]  = useState("")
  const {data : session} = useSession();
  const handleCopy = ()=>{
    setCopied(item.prompt)
    navigator.clipboard.writeText(item.prompt)
    setTimeout( ()=>{setCopied("")} ,3000)
  }
  return (

    <div className="bg-transparent border border-gray-200 rounded-lg shadow-md p-4 max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <Link
          href={`/profile?id=${item?.creator._id}`}
         >
        <img
          src={item.creator.image}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        </Link>
        <div className="flex-1">
          <p className="text-gray-700 font-semibold">{item.tag}</p>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(item.prompt)}
          className="text-gray-500 hover:text-gray-700"
          title="Copy Prompt"
        >
          <FaCopy />
        </button>
      </div>
      <p className="text-gray-600 mb-4">{item.prompt}</p>
      {session?.user && session.user.id == item.creator._id && (
          <div className="flex justify-end space-x-4">
          <button
            onClick={() => handleEdit(item._id)}
            className="text-blue-500 hover:text-blue-700"
            title="Edit"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(item._id)}
            className="text-red-500 hover:text-red-700"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      )}
      
    </div>

  )}
export default PromptCard

