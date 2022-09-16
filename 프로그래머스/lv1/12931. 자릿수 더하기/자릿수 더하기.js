function solution(n) {
    let answer = 0;
    let result = String(n).split('')

    for (let i = 0; i < result.length; i++) {
        answer += parseInt(result[i])
    }
    return answer;
}
