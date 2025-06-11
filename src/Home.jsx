import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  add_to_paste,
  update_paste,
} from "./paste_slice"
import './Home.css'
import { useEffect } from "react"
import { useSelector } from "react-redux"

function Home() {
  const [title, set_title] = useState('');
  const [value, set_value] = useState('');
  const [search_params, set_search_params] = useSearchParams(); 
  const dispatch = useDispatch();

  const paste_id = search_params.get('paste_id');

  const all_pastes=useSelector((state)=>state.paste.pastes)

  useEffect(
    ()=>{
      if(paste_id){
        const paste=all_pastes.find((p)=>p._id===paste_id)
        set_title(paste.title)
        set_value(paste.content)
      }
    },[paste_id])

  function create_paste() {
    const paste = {
      title: title,
      content: value,
      _id: paste_id || Date.now().toString(36),
      created_at: new Date().toISOString(),
    };

    if (paste_id) {
      dispatch(update_paste(paste)); 
    } else {
      dispatch(add_to_paste(paste));
    }

    set_title('');
    set_value('');
    set_search_params({});
  }

  return (
    <div className="home">
      <div className="top">
      {/* Title */}
      <input
        type="text"
        placeholder="Enter the title here"
        value={title}
        onChange={(e) => set_title(e.target.value)}
        className="title"
      />

      {/* Button to create or update the paste */}
      <button onClick={create_paste} className="btn">
        {paste_id ? 'Update Paste' : 'Create Paste'}
      </button>
    </div>
      {/* Text area for content */}
      <div className="txtarea">
        <textarea
          placeholder="Enter your content here"
          value={value}
          onChange={(e) => set_value(e.target.value)}
          rows={10}
        />
      </div>
    </div>
  )
}

export default Home;
