//forloop.js

/*초기값; 조건식; 증감치/감소치
for(let i=0; i<5; i ++){            i += 1  == i++;
    console.log(i);                  0,1,2,3,4 가 반복출력
     i++;  이곳에 위치해도 됨. i += 2; -> 1,3,5,7,9 다섯번 반복
}  


for(let i=10; i>=0; ){            
    console.log(i);                 
    i --;   // i-= 2;  -> 10,8,6,4,2 다섯번 반복 , 감소치
}  



//for: 1~10
for(let i=1; i<=10; i++){
    console.log(i);
}
console.log('end of for');


//for 1,3,5,7,9 출력
for(let i=1; i<10;){
    console.log(i);
    i += 2;
}
console.log('end of for');


//for 2,4,6,8,10
for(let i=2; i<=10;){
    console.log(i);
    i += 2;
}
console.log('end of for');


//for 1부터 시작 1씩 증가시키는데 2,4,6,8,10
for(let i=1; i<=10; i++){
    if(i % 2 == 0)
        console.log(i);
} 
console.log('end of for');

//for 1부터 시작 1씩 증가시키는데 1,3,5,7,9
for(let i=1; i<=10; i++){
    if(i % 2 == 1)
        console.log(i);
} 
console.log('end of for');

//for 1부터 시작 1씩 증가시키는데 1,2,3,4,5,6,7,8,9,10
let sum =0;
for(let i=1; i<=10; i++){
    sum += i;
    console.log(i);
} 
console.log('end of for');

let sum =0;
for(let i=1; i<=10; i++){
    sum += i;
} 
console.log(sum);
console.log('end of for');     //합한 값 55 출력;


let sum=0;
for(let i=1; i<=10; i++){
    if(i % 2 == 0){          // i % 2 == 1 이면 홀수의 합 25 출력
        sum += i;
    }
} 
console.log(sum);            // 짝수의 합 30 출력   
console.log('end of for');


for(let i = 1; i <= 9; i++){
    console.log("3 *" +i + "=" + (3*i));
}
console.log('end of for');


for(let k=2; k<=9; k++){                                       //2단부터 9단까지 반복
    let dan = k;
    for(let num=1; num <= 9; num++){
        console.log(dan +"*" + num + "="+ (dan * num));
    }
}
console.log('end of for');


document.write('<table border=1>');
for(let k=2; k<=5; k++){                                        
    let dan = k;
    for(let num=1; num <= 9; num++){
        document.write('<tr>');
        console.log(dan +"*" + num + "="+ (dan * num));
        document.write('<td> ' + dan + ' </td><td> * </td><td>' +num+ ' </td><td> = </td><td> '+ (dan*num) + '</td>');
        document.write('</tr>');
    }
}  
document.write('</table>')        //k단까지 표형식으로 출력 . 구구단
console.log('end of for');
*/

let fruits = [  {fname:"Apple", price: 1000},
                {fname:"Banana", price:1500}, 
                {fname:"Cherry", price:2000},
                {fname:"Melon", price:1700},
                {fname:"Tomato", price:1200},
                {fname:"Mango", price:1900},
                {fname:"BlueBerry", price:2200}];

                document.write('<table>')
                document.write('<thead><tr><th>과일</th><th>가격</th></thead>')
                //tbody 작성.
                document.write('<tbody>')
                /*for(i=0; i<=6; i++){
                    
                    document.write("<tr><th>" +fruits[i].fname+ "</th><th>" +fruits[i].price+ "</th></tr>" );
                }
                배열과 쓸 때는 몇번 반복하겠다고 명시하지 않고
                */
                for(let fruit of fruits){
                    //fruit => {fname: 'Apple', price: 1000}
                    console.log('과일: ' + fruit.fname + ", 가격:" +fruit.price);
                //document.write("<tr><th>" +fruits[i].fname+ "</th><th>" +fruits[i].price+ "</th></tr>" );
                }
                document.write('</tbody>')
                document.write('<table>')

                
