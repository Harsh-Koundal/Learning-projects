const notes = document.querySelector('.text');
const createNote = document.getElementById('notes');

window.addEventListener('load',()=>{
  const savedNotes = JSON.parse(localStorage.getItem('myNotes')) || [];
  savedNotes.forEach(element => {
    createNoteBox(element);
  });
})
createNote.addEventListener('click', () => {
    createNoteBox('');
    saveAlllNotes();
    });
function createNoteBox(textValue = '') {
  
  const container = document.createElement('div');
  container.classList.add('note-container');

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Notes';
  textarea.value = textValue;


  const button = document.createElement('button');
  button.textContent = 'Delete';


 
  container.appendChild(textarea);
  container.appendChild(button);


  notes.appendChild(container);
  notes.appendChild(document.createElement('br'));

  textarea.addEventListener('input', saveAlllNotes);

  button.addEventListener('click', () => {
    notes.removeChild(container);
    saveAlllNotes();
  });

}
const saveAlllNotes = ()=>{
  const allTextares = document.querySelectorAll('.note-container textarea');
  const data = Array.from(allTextares).map(t=>t.value);
  localStorage.setItem('myNotes',JSON.stringify(data));
}
