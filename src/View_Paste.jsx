import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import toast from "react-hot-toast"
import './View_Paste.css'

function ViewPaste() {
  const { id } = useParams()
  const all_pastes = useSelector((state) => state.paste.pastes)
  const paste = all_pastes.find((p) => p._id === id)

  function handle_copy(){
    navigator.clipboard.writeText(paste.content)
    toast.success('Content Copied')
  }


  if (!paste) {
    return <div>Paste not found</div>
  }
  return (
    <div className="home">
      <div className="top">
        {/* Title */}
        <input
          type="text"
          value={paste.title}
          className="title"
          disabled
        />
        {/* Button to create or update the paste */}
      <button className="btn" onClick={handle_copy}>
        Copy
      </button>
      </div>

      {/* Text area for content */}
      <div className="txtarea" >
        <textarea
          value={paste.content}
          rows={10}
          disabled
        />
      </div>
    </div>
  )
}

export default ViewPaste
