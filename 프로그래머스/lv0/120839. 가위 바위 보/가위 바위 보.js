function solution(rsp) {
  var answer = "";
  let arr = rsp.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") answer += "5";
    if (arr[i] === "2") answer += "0";
    if (arr[i] === "5") answer += "2";
  }
  return answer;
}