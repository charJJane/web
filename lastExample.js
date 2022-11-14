//lastExample.js

let person1 = {
    name: "홍길동",
    point: (Math.random()* 10).toFixed(1)
}
let person2 = {
    name: "김길동",
    point: (Math.random()* 10).toFixed(1)
}
let person3 ={
    name: "박길동",
    point: (Math.random()* 10).toFixed(1)
}
//두 사람 중 포인트 높은 사람의 이름 출력.

if(person1.point > person2.point){
    console.log(person1.point + '홍길동의 값이 더 높습니다.');
}else if(person1.point < person2.point) console.log(person2.point + '김길동의 값이 더 높습니다.');
//세 사람중 포인트 높은 사람의 이름을 출력.
//세 사람의 점수를 기준으로 정렬해 주세요.

/*while(true){
    let check = prompt('숫자를 입력하세요: ')
    if(person1.point > person2.point){
        console.log('홍길동의 값이 더 높습니다.');
    }else if(person1.point < person2.point){ console.log('김길동의 값이 더 높습니다.');
    }else break;
}
*/


