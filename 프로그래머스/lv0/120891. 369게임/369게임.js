function solution(order) {
  let answer = 0;
  const orderStr = order.toString();

  for (let x of orderStr) {
    if (x === "0") {
      continue;
    } else if (x % 3 === 0) {
      answer++;
    }
  }
  return answer;
}