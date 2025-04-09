"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
// type03.ts
exports.tmp = '';
var textMsg1 = '텍스트 문자열입니다.';
var textMsg2 = '텍스트 문자열입니다.';
var num1 = 123;
var num2 = 123;
var user1 = {
    name: '이승아',
    age: 40,
};
// user1.age = 20;
var user2 = {
    name: '이도경',
    age: 30,
};
var isValidUser = function (user) { return user.id !== ''; };
var userA = {
    id: 'qwerty',
    password: 'qwe123'
};
var userB = {
    id: '',
    password: 'qwe123123'
};
console.log(isValidUser(userA)); // true
console.log(isValidUser(userB)); // false
// const exampleFunc = function(num): FuncType {
//   num *= 2;
//   return num;
// }
var exampleFunc = function (num) {
    num *= 2;
    return num;
};
var exampleFunc2 = function (num) {
    return [num, num];
};
// === 타입 별칭 사용 ===
//! 문제 1: 타입 어노테이션 사용
// 변수 age를 선언하고 숫자 타입으로 어노테이션을 지정
// 변수 isStudent를 선언하고 불리언 타입으로 어노테이션을 지정
// 위 두 변수에 적절한 값을 할당하고, 콘솔에 출력
var age;
var isStudent;
age = 30;
isStudent = true;
console.log("Age: ".concat(age, ", IsStudent: ").concat(isStudent)); // Age: 30, IsStudent: true
var product = {
    id: 'qwe123',
    name: '이승아',
    price: 4000
};
