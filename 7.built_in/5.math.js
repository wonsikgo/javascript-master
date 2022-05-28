/* 
    수학 관련 함수들
    static properties, method
*/

console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI값

// static method
// 절대값
console.log(Math.abs(-10));

// 소수점 이하를 올림
console.log(Math.ceil(1.4));

// 소수점 이하를 내림
console.log(Math.floor(1.4));

// 소수점 이하를 반올림
console.log(Math.round(1.4));

// 정수만 반화
console.log(Math.trunc(1.5432));

// 최대, 최소값을 찾기
console.log(Math.max(1, 3, 4));
console.log(Math.min(1, 3, 4));

// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));

// 제곱근
console.log(Math.sqrt(9));

// 랜덤한 값을 반환 0 ~ 1 값을 반환 ( 0 보다는 크고 1보다는 작은 값 )
console.log(Math.random());

// 1 ~ 10
console.log(Math.trunc(Math.random() * 10 + 1));
