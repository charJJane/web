//variable1.js
//객체(Object) = 복잡한 구조의 데이터 저장.
let person1 = {
    name: "홍길동",
    age: 20,
    height: 167.7,      //number 타입.
    marriage: false
}
console.log(person1.name);     //getter  홍길동이라는 name을 불러오겠습니다.
person1.name = "hongkildong";  //setter  hongkildong을 담아주겠습니다.
console.log(person1["age"]);   //console.log(person1.age);  20의 값
person1["age"] = 22;
console.log(person1["age"]);    // 22의 값
let field = "height" ;
console.log(person1[field]);    //167.7
field = "marriage" ;
console.log(person1[field]);    //false

// 여러건의 정보를 저장. 배열(Array) 사용 [] 
let scoreArray = [90, 80, 85, 70, 88];  //getter
console.log(scoreArray[0]);
scoreArray[0] = 95; //setter
console.log(scoreArray[2]);

//배열 + 객체. 묶어서 선언.
let 자바스크립트반 = [100];    //변수 한글 선언 가능.
console.log(자바스크립트반[0]);

//학생의 이름, 학생번호, 점수
let stud1 ={
    studName: '이가영',
    studNo: '1-001',
    score: 90
}
let stud2 ={
    studName: '문민희',
    studNo: '1-002',
    score: 93
}
let stud3 ={
    studName: '박혜진',
    studNo: '1-003',
    score: 95
}
let stud4 ={
    studName: '이재현',
    studNo: '1-004',
    score: 88
}

let ourClass = [stud1, stud2, stud3];
console.log(ourClass[0].studName);  //이름만 불러오고 싶을때.
console.log(ourClass[1].score == stud2.score);     //stud2의 점수와 비교 같으면 true
console.log(ourClass[2]["studNo"] == stud3.studNo);     //학생번호
ourClass[3] = stud4;

console.log(ourClass.length);    //배열의 크기 4개의 변수가 존재한다는 뜻. stud1~4
ourClass[4] = {
    studName: '김동견',
    studNo: '1-005',
    score: 89
}
console.log(ourClass.length);    //크기가 5개가 됨.

//ourClass 의 점수의 평균.
let average = (ourClass[0].score + ourClass[1].score + ourClass[2].score + ourClass[3].score + ourClass[4].score)/ourClass.length;
// ourClass[0].score == stud1.score 
console.log("우리반의 평균은 " +average+ "입니다.");




