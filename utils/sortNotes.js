import { getNotes } from "../api";
import { container } from "../main";


export async function sortNotes() {
  const notes = await getNotes()
  const sortedNotes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  const htmlCode =  sortedNotes.map(note => (
    `<div class="note">
      <p>${note.content}</p>
      <p>${note.createdAt.slice(0, 16).replace("T", " ")}</p>
      <div class="icons-container">
        <i class="fa-solid fa-pen-to-square edit-icon" data-id=${note.id}></i>
        <i class="fa-solid fa-trash delete-icon" data-id=${note.id}></i>
      </div>
    </div>`
  )).join("")

  container.innerHTML = htmlCode
  return container
}
