// 전역 변수 파일
//========= 전역 변수 영역 ========//

// 현재 수정모드에 진입하셨나요?
// let변수는 export하는 순간 const가 됨
// let isEnterEditMode = false; 

// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: '할 일 1',
    done: false,
  },
  {
    id: 2,
    text: '할 일 2',
    done: false,
  },
  {
    id: 3,
    text: '할 일 3',
    done: false,
  },
];


export{isEnterEditMode, todos};
