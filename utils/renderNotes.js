import { getNotes } from "../api";
import { editNotes } from "./editNote";
import { container, modal, textarea, saveBtn } from "../main";


export  async function renderNotes(element) {
  const notes = await getNotes()
  const htmlCode =  notes.map(note => (
    `<div class="note">
      <p>${note.content}</p>
      <p>${note.createdAt.slice(0, 16).replace("T", " ")}</p>
      <div class="icons-container">
        <i class="fa-solid fa-pen-to-square edit-icon" data-id=${note.id}></i>
        <i class="fa-solid fa-trash delete-icon" data-id=${note.id}></i>
      </div>
    </div>`
  )).join("")

  element.innerHTML = notes.length > 0 ?  htmlCode : `<p>Loading...</p>`
  attachEventHandlers()

  function attachEventHandlers() {
    document.querySelectorAll(".edit-icon").forEach(item => {
      item.addEventListener("click", async () => {
        const noteId = item.dataset.id
        const note = await editNotes.getNoteContent(noteId)
        editNotes.renderEditModal(modal, textarea, note.content)
        editNotes.updateNote(textarea, saveBtn, noteId)
        saveBtn.addEventListener("click", async () => {
          await editNotes.updateNote(noteId, textarea.value)
          modal.style.display = "none"
          await getNotes()
          renderNotes(container)
        })
      })
    })

  document.querySelectorAll(".delete-icon").forEach(item => {
    item.addEventListener("click", async () => {
      await editNotes.deleteNote(item.dataset.id)
      await getNotes()
      renderNotes(container)

    })
  })


}
  return element
}
