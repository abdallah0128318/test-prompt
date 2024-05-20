//route:  http://localhost:3000
"use client";
import Feed from "@components/Feed"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
const Home = () => {
  const [prompts, setPrompts] = useState([]);
  const router = useRouter()
  useEffect(()=>{
    const getPrompts = async () => {
      const response = await fetch('/api/prompts', { cache: 'no-store' })
      const data = await response.json();
      setPrompts(data)
    }
    getPrompts();
  })


  const handleEdit = (id) => {
    router.push(`/edit?id=${id}`)
  }

  const handleDelete = async (id)=>{
    if(confirm("You sure u want to delete this prompt"))
      {
        const res = await fetch(`/api/prompts/${id}`, {method: "DELETE"})
        if(res.ok)
        {
          const newPosts = prompts.filter(post => post._id !== id)
          setPrompts(newPosts)
        }
      }
  }

  return (
    <section className="flex-center flex-row flex-wrap">
      <h1 className="head_text text-center">
        Discover & share
        <br className="lg:hidden" />
        <span className="orange_gradient">
          &nbsp;AI-Powered Prompts
        </span>
      </h1>
      <p className="text-center">
        Promptia is an open source AI prompting tool for modern world to discover, create and share creative prompts.
      </p>
      {prompts &&  <Feed prompts={prompts}   handleDelete={handleDelete} handleEdit={handleEdit}  />}
    </section>
  )
}

export default Home