import { createSlice } from "@reduxjs/toolkit"
import toast from 'react-hot-toast'

const initialState = {
  pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    add_to_paste: (state, action) => {
      const paste = action.payload
      state.pastes.push(paste)
      localStorage.setItem('pastes', JSON.stringify(state.pastes))
      toast.success('Paste Successfully Created')
    },

    update_paste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste Successfully Updated');
      }
    },

    reset_all_paste: (state) => {
      state.pastes = [];
      localStorage.removeItem('pastes')
      toast.success('All Pastes Reset')
    },

    remove_from_paste: (state, action) => {
      const paste_id = action.payload
      const index = state.pastes.findIndex((item) => item._id === paste_id)
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.pastes))
        toast.success('Paste Successfully Removed')
      }
    }
  }
})

export const {add_to_paste,update_paste,reset_all_paste,remove_from_paste,} = pasteSlice.actions;

export default pasteSlice.reducer
