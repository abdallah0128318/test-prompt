"use client";
import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const createPrompt = () => {
  const {data: session} = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [post, setPost] = useState({prompt: "", tag: ""})
  const router = useRouter();

  const createPost = async (e)=>{
    e.preventDefault();
    setIsSubmitting(true)
   try {
    const response = await fetch('api/prompts/new', {
      method: "POST",
      body: JSON.stringify({
        prompt: post.prompt,
        tag: post.tag,
        userId: session?.user.id})
    });
    // handle response here it may come with added data or error messages
    if(response.ok)
    {
      router.push('/');
    }
    else{
      const data = await response.json()
      console.log(data);
    }

   } 
   catch(error){
    // catch function just handles thrown error both built-in or customized error 
    // as long as error are thrown using "throw" keyword
    console.log(error.message)
  }
   finally{
    setIsSubmitting(false)
  }
  }

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      handleSubmit={createPost}
      isSubmitting={isSubmitting}
    />
  )
}

export default createPrompt