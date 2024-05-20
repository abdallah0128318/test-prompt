import PromptCard from "./PromptCard"

const Feed = ({ prompts, handleDelete, handleEdit }) => {
 
  return (
    // <section className="flex w-full justify-between	items-center mt-4 flex-wrap">
    //  {prompts? prompts.map(item => (
    //    <PromptCard item={item} key={item._id} handleDelete={handleDelete} handleEdit={handleEdit}/> 
    //    ) ) : (
    //     <div className="width-1/2 mx-auto">
    //       No Prompts Found
    //     </div>
    //    )}
    // </section>

    <div className="flex justify-center gap-3 mt-5">
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