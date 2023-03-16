

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDo();
    form.reset();
  });
});


function createToDo () {
  const task = document.getElementById('new-task-description').value;
  const p = document.createElement('p');
  const priority = document.getElementById('priority-level').value;
  handleP(p, priority);
  p.textContent = `${task} `;
  const button = document.createElement('button');
  button.textContent = 'X';
  button.addEventListener('click', deleteItem);
  p.appendChild(button);
  
};

function deleteItem (e) {
  e.target.parentNode.remove();
}

function handleP (item, urgency) {
  if (urgency === 'high') {
    item.style.color = 'red';
    document.querySelector('#high-priority').appendChild(item);
  } else if (urgency === 'medium') {
    item.style.color = 'orange';
    document.querySelector('#medium-priority').appendChild(item);
  } else {
    item.style.color = 'green';
    document.querySelector('#low-priority').appendChild(item);
  };
}

