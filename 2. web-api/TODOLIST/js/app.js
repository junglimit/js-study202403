
const $todoText = document.getElementById('todo-text');
// console.log($todoText);
// console.log($todoList);
const $add = document.getElementById('add')





// 추가 이벤트
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


  // text가 비어있는 상태로 클릭시
  if($todoText.value === ''){
    $todoText.placeholder = '필수 입력사항입니다!';
    $todoText.style.background = '#e20';
    
  }else{
    renderNewTodo($todoList.length+1 , text);
    $todoText.value = '';
  }

});


// 체크박스 이벤트
const $checkBox = document.querySelectorAll('.todo-list ')
$checkBox.forEach($checkBox => {
  $checkBox.addEventListener('change' ,e => {
    // if(!e.target.maches('.text'))return;
    
    const $text = e.target.parentElement.querySelector('.text');
    // console.log(e.target);
    if(!e.target.checked){
      $text.style.color = 'black';
      $text.style.textDecoration = 'none';
    }else {
      $text.style.color = 'gray';
      $text.style.textDecoration = 'line-through';
    }

})
});

// 수정기능

// lnr-undo클래스에 클릭 이벤트를 걸어준다
const $undo = document.querySelector('.lnr-undo');
const $text = document.querySelector('.text');
const $checkbox = document.querySelector('.checkbox')

$undo.addEventListener('click', e => {
  // 클릭하면 lnr-undo의 클래스를 lnr-checkmark-circle로 바꾼다
  $undo.classList.replace('lnr-undo', 'lnr-checkmark-circle');
  // 클릭하면 text를 지우고 modify-input클래스를 추가한다
  const $input = document.createElement('input');
  $input.setAttribute('type', 'text');
  $input.classList.add('modify-input');
  $checkbox.replaceChild($input, $text);
  // 새로 입력된 내용을 그 자리에 추가해준다
  $undo.addEventListener('click', e => {
    
  })
})









// 삭제기능

document.querySelector('.todo-list').addEventListener('click', e => {
  if(!e.target.matches('.remove span')) return;

  // 삭제 처리 진행
  // 클릭한 버튼이 포함된 li를 탐색
  const $targetLi = e.target.closest('.todo-list-item');

  // 화면에서 제거
  // document.querySelector('.todo-list').removeChild($targetLi);
  $targetLi.remove();
});
