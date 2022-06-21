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
  let initialValue = initial; // initial로 받은 parameter(0 또는 'ㅋ')를 initialValue에 저장

  // condition 함수에 initialValue를 넣었을 때, 참인 경우 계속 반복
  // 즉, 1번 case에서 condition 함수는 매개변수로 받은 val이 10 미만일 경우 true를 return
  while (condition(initialValue) === true) {
    // task 함수의 파라미터로 initialValue를 사용하여 task 함수 실행
    // 이때, initialValue는 task함수가 return하는 값으로 업데이트 필요
    initialValue = task(initialValue);
  }

  if (fin !== undefined) {
    // 매개변수 fin이 존재한다면
    fin(initialValue); // fin 함수에 initialValue를 파라미터로 넣고 fin 함수를 실행
  }
}

looper(
  0,
  (val) => val < 10,
  (val) => {
    console.log(val);
    return val + 1;
  }
);

looper(
  "ㅋ",
  (val) => val.length < 20,
  (val) => val + "ㅋ",
  (val) => console.log(val)
);

/* ----------------
참고
(val) => {
  console.log(val);
  return val + 1;
}
은

function foo(val) {
  console.log(val);
  return val + 1;
} 
와 같음
(위의 코드는 함수의 이름이 없는 것)
----------------*/
