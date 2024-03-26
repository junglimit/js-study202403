/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/

var userInfo = {
  userList: [{
          account: 'kim1234',
          password: 'kkk1234',
          username: '김두한'
      },
      {
          account: 'park9876',
          password: 'ppp9999',
          username: '박찬호'
      },
      {
          account: 'hong7766',
          password: 'hhh1234',
          username: '홍길동'
      },
  ]
};


    

     



// while(true){
//     for(var i of userInfo.userList){
//         var user = prompt('아이디를 입력하세요.')
//         if(user === i.account){
//             var userPassword = prompt('비밀번호를 입력하세요.')

//                 if(userPassword === i.password){
//                     alert(`${i.username}님 환영합니다~~!`)
//                     break;
//                 }else{
//                     alert('비밀번호가 틀렸습니다.')
//                     continue;
//                 }
            
//         }else{
//             alert('존재하지 않는 회원입니다.')
//             continue;
            
//         }
//     }break;

// }

/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/

var userInfo = {
    userList: [{
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한'
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호'
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동'
        },
    ]
  };
  

// 위 객체에서 배열만 추출
var userList = userInfo.userList;
while(true){
    // 계정을 입력받고 해당 계정이 존재하는지 확인
    var inputAccount = prompt('아이디를 입력하세요.'); // 사용자가 입력한 계정명

    // 회원목록 배열을 반복해서 입력한 계정명와 대조
    var foundUser = null;
    for(var user of userList){
        if(inputAccount === user.account){
            foundUser = user;
            break;
        } // else를 쓰면 전체 조회중에 맞지 않는 부분을 전부 출력함
    }

    if (foundUser != null){
        console.log('가입한회원');
        //비번 검증, 입력받기
        var inputPassword = prompt('비밀번호를 입력하세요.');
        if(inputPassword === foundUser.password){
            alert(`${foundUser.username}님 로그인 성공!!`);
            break;
        }else{
            alert('비밀번호가 틀렸습니다.');
        }
    }else{
        alert('존재하지 않는 회원입니다');
    }
}