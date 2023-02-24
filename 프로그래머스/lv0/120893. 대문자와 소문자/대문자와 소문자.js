function solution(my_string) {

    let arr = []; // 결과를 담을 빈 배열 생성

for (let i = 0; i < my_string.length; i++) { // 각 문자를 순회하면 확인
	if (my_string[i] === my_string[i].toUpperCase()) { // 해당 글자가 대문자면
		arr.push(my_string[i].toLowerCase()); // 소문자로 바꾸어서 넣고
	} else { // 대문자가 아니라면, 소문자라면
		arr.push(my_string[i].toUpperCase()); // 대문자로 바꾸어서 넣기
	}
}
return arr.join("");
}