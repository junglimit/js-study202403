
const $todoText = document.getElementById('todo-text');
// console.log($todoText);
// console.log($todoList);
const $add = document.getElementById('add')

let isEnterEditMode = false;



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
  if(text.trim() === '' || text.length > 10){
    $todoText.placeholder = '필수 입력사항입니다! (10자 이내)';
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
// const $undo = document.querySelector('.lnr-undo');
// const $text = document.querySelector('.text');
// const $checkbox = document.querySelector('.checkbox')
// const $todoList = document.querySelector('.todo-list')

// $todoList.addEventListener('click', e => {
//   if(e.target.classList.contains('lnr-undo') === true){

//   // const target = e.target;
//   const isUndo = $undo.classList.contains('lnr-undo');
//   if(isUndo){
//   // 클릭하면 lnr-undo의 클래스를 lnr-checkmark-circle로 바꾼다
//   e.target.classList.replace('lnr-undo', 'lnr-checkmark-circle');
//   // 클릭하면 text를 지우고 modify-input클래스를 추가한다
//   const $input = document.createElement('input');
//   $input.setAttribute('type', 'text');
//   $input.classList.add('modify-input');
//   $checkbox.replaceChild($input, $text);
// } else{
//     $undo.classList.replace('lnr-checkmark-circle', 'lnr-undo');
//     $input.remove();
//     const $span = document.createElement('span');
//     $span.classList.add('text');
//     $checkbox.replaceChild($span, $text);
//   }
// }

// })


document.querySelector('.todo-list').addEventListener('click', (e) => {
  function toggleModifyMode($modifyBtn) {
    
    // 1. 수정 모드 진입
    // 1-1. span.lnr-undo를 span.lnr-checkmark-circle로 클래스 교체
    $modifyBtn.classList.toggle('lnr-undo');
    $modifyBtn.classList.toggle('lnr-checkmark-circle');
  
    // 지금 수정모드 진입상태인지 수정을해야하는 상태인지 확인
    const isModifying = $modifyBtn.classList.contains('lnr-checkmark-circle');
    // console.log(`현재 수정중인가? : ${isModifying}`);
  
    const $label = $modifyBtn.parentElement.previousElementSibling;
  
    if (isModifying) {
      // 1-2. span.text를 input.modify-input으로 태그 교체
      // 부모태그.replaceChild(새롭게들어올태그, 없어질태그);
      const $textSpan = $label.lastElementChild;
    
      const $modifyInput = document.createElement('input');
      $modifyInput.classList.add('modify-input');
      $modifyInput.setAttribute('type', 'text');
      // span.text의 텍스트를 input.modify-input에 저장
      $modifyInput.value = $textSpan.textContent;
  
      $label.replaceChild($modifyInput, $textSpan);
    } else {
      // 1-2-1. 교체된 input태그 내부에는 기존 span의 텍스트가 그대로 들어가야함
      // 2. 수정 완료 처리
      // input.modify-input에 있는 value를 읽어서 새로운 span.text를 생성하여 교체
      const $modifyInput = $label.querySelector('.modify-input');
      const $newTextSpan = document.createElement('span');
      $newTextSpan.classList.add('text');
      $newTextSpan.textContent = $modifyInput.value;
  
      $label.replaceChild($newTextSpan, $modifyInput);
  
    }
  
  }
  toggleModifyMode(e.target)
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
