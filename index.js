function examOne(first, second) {
  // 매개변수가 문자열일 경우, 다음과 같은 문자열이 나타나도록 작성하시오.
  // "문자열 데이터를 입력하셨습니다."
  if(typeof(first) === 'number' && typeof(second === 'number')) {
    return first + second;
  }else if (typeof(first) === 'string' || typeof(second) === 'string') {
    return console.error("숫자를 입력해주세요.");
  }
}

function examTwo(first, second, third) {
  // 숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오.
  if(typeof(first) === 'number' && typeof(second) === 'number' && typeof(third) === 'number') {
    return first * second * third;
  } else {
    return console.error("숫자를 입력해주세요.");
  }
}

function examThree(str) {
  // 문자열만 실행되도록 타입을 확인하는 로직을 작성하시오.
  // length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if(typeof(str) === 'string') {
    let count = 0;
    // for of 문을 사용하여 순회하면서 각 문자마다 count 증가
    for (let charac of str) {
      count++;
    }
    return count;
  }else {
    return console.error("문자열을 입력하세요.");
  }
}

function examFour(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if(typeof(array === 'array')) {
    for(let i = 0; i < array.length; i++) {
      let min;
      min = array[0];
      if(array[i] < min) {
        min = array[i];
        return min;
      }
    }
  }else {
    return console.error("배열을 입력하시오.");
  }
}

function examFive(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
}

console.log(examOne(2,3)); // Question 1 덧셈 로직 만들기
console.log(examTwo(2, 3, 4)); // question 2 곱셈 로직 만들기
console.log(examThree("abcdefg")); // question 3 문자열 길이 구하기
console.log(examFour([3, 1, 4, 2])); // question 4 최솟값 판별하기
console.log(examFive([1, 2, 3])); // question 5 배열값 누산(총합)하기