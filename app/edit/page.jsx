"use client";
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';
import Form from '@components/Form';
const Edit = () => {
  const [prompt, setPrompt] = useState({});
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter()
const userId = useSearchParams().get('id')
  useEffect(  ()=>{
      const fetchPrompt = async ()=>{
        const res = await fetch(`/api/prompts/${userId}`);
        const data = await res.json();
        setPrompt(data)
    }
    fetchPrompt()
  }, [])

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setisSubmitting(true)
    const res = await fetch(`/api/prompts/${userId}`, {
      method: "PATCH",
      body: JSON.stringify({
        prompt: prompt.prompt,
        tag: prompt.tag 
       })
    })

    if(res.ok)
    {
      setisSubmitting(false)
      router.push("/")
    }
  }


  return (
    <div>
      <Form
        type="update" 
        handleSubmit={handleSubmit} 
        post={prompt}
        setPost={setPrompt}
        isSubmitting={isSubmitting}
      />
    </div>
  )
}

export default Edit