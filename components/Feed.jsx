import PromptCard from "./PromptCard"

const Feed = ({ prompts, handleDelete, handleEdit }) => {
  return (
    <div className="">
      {prompts? prompts.map(item => (
       <PromptCard item={item} key={item._id} handleDelete={handleDelete} handleEdit={handleEdit}/> 
       ) ) : (
        <div className="width-1/2 mx-auto">
          No Prompts Found
        </div>
       )}
    </div>
  )
}

export default Feed