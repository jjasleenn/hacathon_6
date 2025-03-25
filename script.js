
// Load notes from localStorage on page load

window.onload = function() {

  displayNotes();

};
 
function addNote() {

  const noteInput = document.getElementById('noteInput');

  const noteText = noteInput.value.trim();

  if (noteText === '') {

    alert('Note cannot be empty!');

    return;

  }
 
  let notes = JSON.parse(localStorage.getItem('notes')) || [];

  notes.push(noteText);

  localStorage.setItem('notes', JSON.stringify(notes));

  noteInput.value = '';

  displayNotes();

}
 
function deleteNote(index) {

  let notes = JSON.parse(localStorage.getItem('notes')) || [];

  notes.splice(index, 1);

  localStorage.setItem('notes', JSON.stringify(notes));

  displayNotes();

}
 
function displayNotes() {

  const notesContainer = document.getElementById('notesContainer');

  notesContainer.innerHTML = '';
 
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
 
  notes.forEach((note, index) => {

    const noteDiv = document.createElement('div');

    noteDiv.className = 'note';

    noteDiv.innerHTML = `

      ${note}
<button onclick="deleteNote(${index})">Delete</button>`;

    notesContainer.appendChild(noteDiv);

  });

} 






