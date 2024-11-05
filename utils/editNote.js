import { getNote, handleUpdate, handleDelete } from "../api";

function handleNotes() {
  return {
    getNoteContent: async function(id)  {
      console.log(id)
      const note = await getNote(id)
      console.log(note)
      return note
    },

    renderEditModal: async function(modal, textarea, content) {
      modal.style.display = "block"
      textarea.value = content
    },

    updateNote: async function(noteId, content) {
      try {
        await handleUpdate(noteId, content)
      } catch (error) {
      }
    },

    deleteNote: async function(noteId) {
      try {
        await handleDelete(noteId)
      } catch (error) {
      }
    },

  }
}

export const editNotes = handleNotes()
