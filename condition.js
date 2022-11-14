//condition.js

let score = parseInt(Math.random() * 60) + 40;      //40~100 임의의 정수값.
let pass = "";
if(score >= 60){
    pass = "합격";
} else {
    pass = "불합격";
}

pass = (score >= 60) ? "합격" : "불합격";     //조건이 2가지인 경우에만 사용. 맞으면 ? 아니면 : 
console.log(pass);


score = 80;
//if 조건문이 하나이고 조건을 4개의 조건으로 한번만 실행.

if(score >= 90) {           
    pass = "C";
}else if(score >=80){         //조건문의 순서에 따라 결과값이 달라질 수 있음. 위에서부터 읽음
        pass = "B";
}else if(score >=70){         
    pass = "A";
}else{         
    pass = "D";
}

console.log(pass);

// 95, 85, 75 인 경우 A+ B+ C+ 출력

score= parseInt(Math.random() * 30) +70;
if(score >= 95){
    pass = "A+";
}else if(score >= 90){
    pass = "A";
}else if(score >= 85){
        pass = "B+";
}else if(score >= 80){
    pass = "B";
}else if(score >= 75){
    pass = "C+";
}else if(score >= 70){
    pass = "C";}
    
console.log(pass);



