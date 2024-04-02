
// e.preventDefault(); // submit기능 해제


const $todoText = document.getElementById('todo-text');
// console.log($todoText);
// console.log($todoList);
const $add = document.getElementById('add')




// console.log($todoText.value);

function renderNewTodo(id, text){
  const $todoList = document.querySelector('.todo-list')
  const $newLi = document.createElement('li');
  $newLi.classList.add('todo-list-item');
  $newLi.dataset.id = id;
  $newLi.innerHTML = `
  <label class="checkbox">
                            <input type="checkbox">
                            <span class="text">${text}</span>
                        </label>
                        <div class="modify"><span class="lnr lnr-undo"></span></div>
                        <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
                        `;
                        $todoList.appendChild($newLi);
};

$add.addEventListener('click', e => {
  e.preventDefault();
  const $todoList = document.querySelectorAll('.todo-list li')
  const text = $todoText.value;

  if($todoText.value === ''){
    $todoText.placeholder = '필수 입력사항입니다!';
    $todoText.style.background = '#e20';
    
  }else{
    renderNewTodo($todoList.length+1 , text);
    $todoText.value = '';
  }

});

const $cheakBox = document.querySelector('checkbox')
$cheakBox.addEventListener('change' ,e => {
  const $todoList = document.querySelector('.todo-list')
  if(e.target.checkde){
    $todoList.style.color = 'gray';
    $todoList.style.textDecoration = 'line-through';
  }else{
    $todoList.style.color = '';
    $todoList.style.textDecoration = '';
  }
})