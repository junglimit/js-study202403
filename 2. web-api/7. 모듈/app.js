
import { $btn as $button} from "./getDom.js" // 변수이름 충돌날때 as로 이름 변경가능
import { clickHandler } from "./event.js";
import  hahahoho  from "./pow.js"; // export default를 쓰면 중괄호 생략, 이름변경 마음대로 가능

const pow = () => {
  console.log('pow pow!');
}

const $btn = '123';

// console.log(`내가만든 btn: ${$btn}`);
// console.log(`불러온 btn:`,$button);

console.log(hahahoho.pow(5));
pow(); // 이름이 겹쳐도 export default를 써서 이름변경을 통해 충돌을 방지
console.log(hahahoho.add(3, 6));

// event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);
