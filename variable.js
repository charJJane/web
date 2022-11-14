
//변수 선언.
console.log("Hello, World"); //콘솔탭에 출력.
let name;  //name이라는 변수 선언.
name = "정지은"; // 변수 초기화. 변수에 값 할당
console.log(name); //number 타입
let age = 20;
console.log("이름은 " + name + "이고, 예전 나이는 " +age+ "입니다.");
let marriage = true;   //boolean 타입. true/false;
console.log("결혼 여부는 " + true);
marriage = false;

console.log(typeof name);
name=true;
console.log(typeof name);

//상수 선언.
const gender="Man";
// 에러남. 상수의 값은 변할 수 없어서. gender="Women";  
/* String name = "홍길동"
   int age= 20; */

   let name1 = "정지은";
   let height = 168;
   let weight = 63.2;
   console.log("이름은 "+name1+"이고, 키는 " +height+ "이고, 몸무게는 "+weight+ "입니다.");

//조건식.
let averageHeight = 165;
if(height > averageHeight){  //false/true 조건을 만족해야 출력.
    console.log(name1 + "의 키가 " + averageHeight + "보다 큽니다.");
}


//연산식. ( + - * / %)
let weight1 = 66.3;
let weight2 = 60.4;
let weight3 = 64.2;
let averageweight = (weight1 + weight2 + weight3) /3;
if(weight<averageweight){
    console.log("홍길동의 몸무게는 평균" +averageweight.toFixed(2)+ "보다 적습니다.")
}


