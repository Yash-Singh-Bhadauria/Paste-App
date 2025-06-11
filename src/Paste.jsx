import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { remove_from_paste } from "./paste_slice";
import toast from "react-hot-toast";
import './Paste.css';
import { NavLink } from "react-router-dom";

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [search_term, set_search_term] = useState('');
  const dispatch = useDispatch();

  const filtered_data = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(search_term.toLowerCase())
  );

  function handle_delete(paste_id){
    dispatch(remove_from_paste(paste_id))
  }


  return (
    <div className="paste">
      {/* Search */}
      <input
        type="search"
        placeholder="Search"
        value={search_term}
        onChange={(e) => set_search_term(e.target.value)}
        className="search"
      />

      {/* Display Results */}
      <div className="space">
        {filtered_data.map((paste) => (
          <div key={paste?._id} className="res">
            <h3>{paste.title}</h3>

            <p>{paste.content}</p>

            <div className="btns">
              <button>
                <NavLink to={`/?paste_id=${paste?._id}`}>Edit</NavLink>
              </button>
              
              <button>
                <NavLink to={`/pastes/${paste?._id}`}>View</NavLink>
                
              </button>

              <button onClick={()=>handle_delete(paste?._id)}>
                Delete
              </button>

              <button onClick={()=>{navigator.clipboard.writeText(paste?.content)
                  toast.success('Content Copied')}}>
                Copy
              </button>

              <button>
                Share
              </button>
            </div>

            <div>
              {paste.createdAt}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Paste
