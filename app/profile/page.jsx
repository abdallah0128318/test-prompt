"use client";
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Feed from "@components/Feed";
import { useSearchParams, useRouter } from "next/navigation";

const Profile = () => {
  const userId = useSearchParams().get('id')
  const {data: session } = useSession()
  const [userPosts, setUserPosts] = useState([])
  const router = useRouter()
  useEffect(()=>{
    const fetchInfo = async ()=>{
      const res = await fetch(`/api/users/${userId}/posts`)
      const data = await res.json();
      setUserPosts(data)
    }
    try {
      if(session?.user) fetchInfo();
    } catch (error) {
      console.log(error);
    }
  }, [userId])


  

  const handleEdit = (id) => {
    router.push(`/edit?id=${id}`)
  }



  const handleDelete = async (id)=>{
    if(confirm("You sure u want to delete this prompt"))
      {
        const res = await fetch(`/api/prompts/${id}`, {method: "DELETE"})
        if(res.ok)
        {
          const newPosts = userPosts.filter(post => post._id !== id)
          setUserPosts(newPosts)
        }
      }
  }


  return (
    <section>
      <p className="text-center">
        user posts
      </p>
      {userPosts &&  <Feed prompts={userPosts} handleDelete={handleDelete} handleEdit={handleEdit} />}
    </section>
    
  )
}

export default Profile