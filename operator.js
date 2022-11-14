//operator.js 연산
// +, -, *, /, %  더하기 빼기 곱하기 나누기 나머지 연산

//let num1 = 10; let num2 = 10;
let num1 = num2 = 10;

let result = num1 +num2;
console.log("결과값 " + result);             //20
console.log("결과값 " + num1 + num2);        //1010  두 문자를 나열. 합친값 x
console.log("결과값 " + (num1 + num2));        //연산 우선순위 지정. 합친값 20
console.log("결과값 " + (num1 - num2));        // 뺀 값
console.log("10" -num1);                      // 0     유연하게 계산 ㅇ 
console.log(num1 / num2);                     // 1 나눈 값
console.log(num1 % num2);                     // 0 나머지의 값
console.log(num1 % 3);                        // 나머지 1 


Math.random();                            //0~1 사이의 임의의 난수. 0.34586212
Math.random() * 30;                       //0~30 사이의 임의 난수.
num1 = parseInt(Math.random() *30);       //정수만 표현
console.log(num1);                        //Math.random 랜덤의 숫자가 들어가기 때문에 계속 값이 바뀜
 

//num2의 변수에는 1~50 까지의 임의 수를 생성해서 할당.
//result 에는 = num1 + num2; 두 수의 합이 60을 넘어서면 "60보다 큰 수입니다." 출력
num2 = parseInt(Math.random() *50) +1;         //1~50
num1 = parseInt(Math.random() *30) +1;         

result = num1 + num2;
if(num1+num2 >= 60){
    console.log("60보다 큰 수입니다.");
}
/*if (result >= 60){
    console.log("60보다 큰 수입니다.");
}
*/


//값을 누적하여 연산.
let sum = 0;
sum = sum + num1;   
sum = sum + num1;
sum += num1;

sum = sum-num1;
sum -= num1;

sum *= num1; 
sum /= num1;
sum %= num1;

sum="";
sum += "Hello";      //문자열의 앞뒤를 연결하겠습니다. "" + "Hello"
sum += "<span> World</span>";     // "" + "Hello" + "World"
console.log(sum);
document.write(sum);


let fruits = [ "Apple", "Banana", "Cherry"];      // list 형식으로 나열됨
sum = "<ul>";    // 초기화
sum += "<li>" + fruits[0] + "</li>";
sum += "<li>" + fruits[1] + "</li>";
sum += "<li>" + fruits[2] + "</li>";
sum += "</ul>";
document.write(sum);

/*
let fruits1 = [  {fname:"Apple", price: 1000},
                 {fname:"Banana", price:1500}, 
                 {fname:"Cherry", price:2000}];
sum = "<table border=1><tbody>";
sum += "<tr><td>" +fruits1[0].fname+ "</td><td>" +fruits1[0].price + "</td></tr>" ;
sum += "<tr><td>" +fruits1[1].fname+ "</td><td>" +fruits1[1].price + "</td></tr>" ;
sum += "<tr><td>" +fruits1[2].fname+ "</td><td>" +fruits1[2].price + "</td></tr>" ;
sum += "</tbody></table>"


    document.write(sum);
*/

let fruits2 = [  {fname:"Apple", price: 1000},
{fname:"Banana", price:1500}, 
{fname:"Cherry", price:2000},
{fname:"Melon", price:1700},
{fname:"Tomato", price:1200},
{fname:"Mango", price:1900},
{fname:"BlueBerry", price:2200}];

sum = "<table border=1><tbody>";
if(fruits2[0].price >= 1500){
    sum += "<tr><td>" +fruits2[0].fname+ "</td><td>" +fruits2[0].price + "</td></tr>" ;
}else if(fruits2[1].price >= 1500){
    sum += "<tr><td>" +fruits2[1].fname+ "</td><td>" +fruits2[1].price + "</td></tr>" ;
}else if(fruits2[2].price >= 1500){
    sum += "<tr><td>" +fruits2[2].fname+ "</td><td>" +fruits2[2].price + "</td></tr>" ;
}else if(fruits2[3].price >= 1500){
    sum += "<tr><td>" +fruits2[3].fname+ "</td><td>" +fruits2[3].price + "</td></tr>" ;
}else if(fruits2[4].price >= 1500){
    sum += "<tr><td>" +fruits2[4].fname+ "</td><td>" +fruits2[4].price + "</td></tr>" ;
}else if(fruits2[5].price >= 1500){
    sum += "<tr><td>" +fruits2[5].fname+ "</td><td>" +fruits2[5].price + "</td></tr>" ;
}else if(fruits2[6].price >= 1500){
    sum += "<tr><td>" +fruits2[6].fname+ "</td><td>" +fruits2[6].price + "</td></tr>" ;
}
sum += "</tbody></table>";
document.write(sum);









