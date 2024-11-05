

async function getNotes() {
  try {
    const response = await fetch("https://6729c3ec6d5fa4901b6e4018.mockapi.io/note")
    if(!response.ok) {
      throw new Error("There was a problem with your request")
    }
    const data = await response.json()
    console.log(data)
    return data
  }
  catch(error) {
    console.error("Error:", error)
  }
}

async function getNote(id) {
  try {
    const response = await fetch(`https://6729c3ec6d5fa4901b6e4018.mockapi.io/note/${id}`)
    if(!response.ok) {
      throw new Error("There was a problem with your request")
    }
    const data = await response.json()
    return data

  } catch (error) {
    console.error(error)

  }
}


async function handleUpdate(id, content) {
  try {
    const response = await fetch(`https://6729c3ec6d5fa4901b6e4018.mockapi.io/note/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        content: content,
        createdAt: new Date()
      })
    })

    if (!response.ok) {
      throw new Error('Failed to update note')
    }

    const data =  await response.json()
    return data
  } catch (error) {
    console.error( error)

  }
}


async function handleDelete(id, content) {
  try {
    const response = await fetch(`https://6729c3ec6d5fa4901b6e4018.mockapi.io/note/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!response.ok) {
      throw new Error('Failed to update note')
    }

    const data =  await response.json()
    return data
  } catch (error) {
    console.error( error)

  }
}

export {getNotes, getNote, handleUpdate, handleDelete }
