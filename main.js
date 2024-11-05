import './style.css'
import {renderNotes} from "./utils/renderNotes.js"
import { sortNotes } from './utils/sortNotes.js'


document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="header">Notes</h1>
    <div class="container"></div>
      <button class="refresh-btn" type="button">Refresh</button>
    <div class="modal">
        <textarea class="note-text" placeholder="Take a note..."></textarea>
        <div class="form-btns">
          <button type="button" class="save-btn">Save</button>
          <button type="button" class="cancel-btn">Cancel</button>
        </div>
    </div>
  </div>
`

const container = document.querySelector(".container")
const modal =  document.querySelector('.modal')
const textarea = document.querySelector('.note-text')
const refreshBtn = document.querySelector(".refresh-btn")
const cancelBtn = document.querySelector(".cancel-btn")
const saveBtn = document.querySelector(".save-btn")
renderNotes(container)

cancelBtn.addEventListener("click", () => modal.style.display = "none")
refreshBtn.addEventListener("click", () => sortNotes())
export {container, modal, textarea, saveBtn}
