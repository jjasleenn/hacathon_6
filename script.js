// Load notes on page load

window.onload = function () {

    displayNotes();
  
  };
   
  // Add new note
  
  function addNote() {
  
    const noteInput = document.getElementById("noteInput");
  
    const noteText = noteInput.value.trim();
   
    if (noteText === "") {
  
      alert("Please write something before adding a note.");
  
      return;
  
    }
   
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    notes.push(noteText);
  
    localStorage.setItem("notes", JSON.stringify(notes));
  
    noteInput.value = "";
  
    displayNotes();
  
  }
   
  // Display all notes
  
  function displayNotes() {
  
    const notesContainer = document.getElementById("notesContainer");
  
    notesContainer.innerHTML = "";
   
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
   
    notes.forEach((note, index) => {
  
      const noteDiv = document.createElement("div");
  
      noteDiv.className = "note";
  
      noteDiv.innerHTML = `
  <p>${note}</p>
  <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>`;
  
      notesContainer.appendChild(noteDiv);
  
    });
  
  }
   
  // Delete a specific note
  
  function deleteNote(index) {
  
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    notes.splice(index, 1);
  
    localStorage.setItem("notes", JSON.stringify(notes));
  
    displayNotes();
  
  }