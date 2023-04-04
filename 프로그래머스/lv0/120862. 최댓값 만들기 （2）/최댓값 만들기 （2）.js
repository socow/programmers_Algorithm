
2
3
4
5
6
7
8
9
10
11
function solution(numbers) {
    const N = numbers.length;

    numbers.sort((a,b) => a - b);

    return Math.max(
        numbers[N-1] * numbers[N-2],
        numbers[0] * numbers[1]
    )
}
