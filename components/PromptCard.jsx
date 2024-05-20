import Image from "next/image"
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
    // <section className="flex flex-wrap lg:max-w-1/3 md:max-w-1/2 h-auto">

    //   <div className="border border-black" >
    //     <Link href={`/profile?id=${item?.creator._id}`}>
    //     <Image
    //     className="rounded pr-1"
    //       src={item.creator.image}
    //       width={30}
    //       height={30}
    //       alt="profile image"
    //     />
    //     </Link>
    //   </div>
    //   <div className="border border-black">
    //     <p> {item.prompt} </p>
    //     <p> {item.tag} </p>
    //     {session?.user && session.user.id == item.creator._id && (
    //     <div>
    //       <button  onClick={()=> { handleEdit(item._id) }} >Edit</button>&nbsp;
    //       <button  onClick={ ()=>{handleDelete(item._id) } } >Delete</button>
    //     </div>
    //   )}
    //   </div>
     

    //   <div onClick={handleCopy} >
    //     <Image
    //       width={20}
    //       height={20}
    //       src={copied === item.prompt? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
    //       alt="icon image"
    //     />
    //   </div>

    // </section>

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





//   import React from 'react';
// import { FaEdit, FaTrash, FaCopy } from 'react-icons/fa';

// const Card = ({ profilePic, promptBody, tag }) => {
//   return (
    // <div className="bg-transparent border border-gray-200 rounded-lg shadow-md p-4 m-4 max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300 ease-in-out">
    //   <div className="flex items-center mb-4">
    //     <img
    //       src={profilePic}
    //       alt="Profile"
    //       className="w-10 h-10 rounded-full mr-3"
    //     />
    //     <div className="flex-1">
    //       <p className="text-gray-700 font-semibold">{tag}</p>
    //     </div>
    //     <button
    //       onClick={() => navigator.clipboard.writeText(promptBody)}
    //       className="text-gray-500 hover:text-gray-700"
    //       title="Copy Prompt"
    //     >
    //       <FaCopy />
    //     </button>
    //   </div>
    //   <p className="text-gray-600 mb-4">{promptBody}</p>
    //   <div className="flex justify-end space-x-4">
    //     <button
    //       onClick={() => alert('Edit functionality not implemented')}
    //       className="text-blue-500 hover:text-blue-700"
    //       title="Edit"
    //     >
    //       <FaEdit />
    //     </button>
    //     <button
    //       onClick={() => alert('Delete functionality not implemented')}
    //       className="text-red-500 hover:text-red-700"
    //       title="Delete"
    //     >
    //       <FaTrash />
    //     </button>
    //   </div>
    // </div>
//   );
// };


export default PromptCard

