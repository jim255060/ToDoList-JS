let newList = document.querySelector('#addNewListInput');
let lists = document.querySelector('#lists');

function addNewListBtn() {
  let list = document.createElement('li');
  let toDo = document.createElement('p');
  let doImg = document.createElement('img')
  let deleteImg = document.createElement('img');
  toDo.textContent = newList.value;

  doImg.src = './icons/do.png';
  doImg.className = 'doImg';
  doImg.onclick = done;

  deleteImg.src = './icons/delete.svg';
  deleteImg.className = 'deleteImg';
  deleteImg.onclick = deleteBtn;

  if (toDo.textContent.trim() === '') return;
  newList.value = '';

  list.append(doImg, toDo, deleteImg);
  lists.append(list);
}

function deleteBtn(e){
  e.target.parentElement.remove()
}

let isDone = true;
function done(e) {
  if (isDone) {
    e.target.src = './icons/done.png';
    isDone = false;
  }
  else {
    e.target.src = './icons/do.png';
    isDone = true;
  }
}