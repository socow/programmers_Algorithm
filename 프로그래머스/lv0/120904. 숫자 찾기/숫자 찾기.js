function solution(num, k) {
  const answer = num.toString();
  if (answer.includes(k)) {
    return answer.indexOf(k) + 1;
  } else {
    return -1;
  }
};
