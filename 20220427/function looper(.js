/**
 * 초기값으로 시작해서, 지정한 조건이 참인 동안 작업을 실행하고,
 * 조검이 거짓이 되면 마무리 작업을 실행하는 함수입니다.
 *
 * initial: 내부 변수의 초기값
 * condition: 내부 변수를 입력으로 받아, 반복을 계속할지 말지를 반환하는 함수
 * task: 내부 변수를 입력으로 받아, 작업을 실행한 후 결과를 반환하는 함수. 실행 결과는 내부 변수에 다시 대입되어야 함
 * fin: 반복이 끝났을 때 내부 변수를 입력으로 받아 실행되는 동작, undefined일 수 있음
 */
 function looper(initial, condition, task, fin) {
    // 이 함수를 구현하세요.
    let i = initial; // 0, ㅋ 로 설정하게끔 하려면 intiial 로 해야 한다.
    if(i=0, i<10, i++) {
      console.log(i);
      return i + 1;
    } 
    if(i='ㅋ', i.length<20, i++) {
      i + 'ㅋ';
      console.log(i);
    }

  }
  
  // 0 1 2 3 4 5 6 7 8 9 를 출력
  looper(
    0,
    (val) => val < 10,
    (val) => {
      console.log(val);
      return val + 1;
    }
  );
  
  // ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 를 출력
  looper(
    'ㅋ',
    (val) => val.length < 20,
    (val) => val + 'ㅋ',
    (val) => console.log(val)
  );



















//function looper(initial, condition, task, fin) {}

function looper(initial, condition, task, fin) {
    initial = 0;
    condition = initial < 10;
    task = console.log(initial);
}



// 0,1,2,3,4,5,6,7,8,9가 출력
looper(
    0,
    (val) => val < 10,
    (val) => {
        console.log(val);
        return val + 1;
    }
);

// ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ를 출력
looper(
    'ㅋ',
    (val) => val.length < 20,
    (val) => val + 'ㅋ',
    (val) => console.log(val)
);