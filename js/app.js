const ul = document.querySelector('ul')
const userInput = document.getElementById('input');
const addInputButton = document.getElementById('add-item');

const lis = ul.children;

function attachListItemButtons (li) {
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'up';
    li.appendChild(up);
    
    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'down';
    li.appendChild(down);
    
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = '✖︎';
    li.appendChild(remove);
  }
  
  for (let i = 0; i < lis.length; i++) {
    attachListItemButtons(lis[i])
  }
  
  ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.className === 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
        }
      
        if (event.target.className === 'up') {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;  
        let ul = li.parentNode;
          if (prevLi) {
        ul.insertBefore(li, prevLi)
          }
        }
         
        if (event.target.className === 'down'){
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
           if (nextLi) {
             ul.insertBefore(nextLi, li);
          }
         }
        }
  });

function inputValueLength () {
    return userInput.value.length;   
}

function createItem() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    attachListItemButtons(li);
    userInput.value = ''
}

function addListAfterClick () {
    if (inputValueLength() > 0) {
        createItem();
    }
}

function addListAfterKeyPress(e) {
    if (inputValueLength() > 0 && e.keyCode === 13) {
        createItem();
    }
}

addInputButton.addEventListener('click', addListAfterClick);
userInput.addEventListener('keypress', addListAfterKeyPress);