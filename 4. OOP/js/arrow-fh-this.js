
// 화살표함수와 this

const dog = {
  name: '뽀삐',
  regularFn: function() {
    console.log('regular: ', this);
  },
  arrowFn: () => {
    console.log('arrow: ', this);
  }
};

dog.regularFn();
dog.arrowFn();



console.log('==========================');

const cat = {
  name: '나비',
  introduce: function() {
    console.log(`introduce this: `, this);

    // 화살표 함수의 this는 scope체인 안의 this를 가리킴
    setTimeout(() => {
      console.log('setTimeout this: ', this);
    }, 2000);
  }
};

cat.introduce();

// 실제 사용 예시
$modal.addEventListener('click', function(e) {
    console.log(this); // $modal
  $ok.addEventListener('click', function(e) {
    console.log(this); // $ok
  });
  // 화살표 함수로 bind의 효과를 냄
  $cancel.addEventListener('click', (e) => {
    console.log(this); // $modal
  });
});