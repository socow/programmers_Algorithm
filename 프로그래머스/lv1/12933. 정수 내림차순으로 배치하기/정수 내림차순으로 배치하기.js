function solution(n) {
  // 들어온 숫자를 배열로 변환하기 위해 우선 문자열로 변환한다.
  // 118372 -> "118372"
  const str = n.toString();

  // split() 메서드를 이용해 문자열을 배열로 변환한다.
  // "118372" -> ["1", "1", "8", "3", "7", "2"]
  const arr = str.split("");

  // Array의 sort() 메서드를 이용해 문자를 정렬한다.
  // ["1", "1", "8", "3", "7", "2"] -> ["8", "7", "3", "2", "1", "1"]
  const sortedArr = arr.sort((a, b) => b - a);

  // join() 메서드를 이용해 배열을 문자열로 변환한다.
  // ["8", "7", "3", "2", "1", "1"] -> "873211"
  const sortedStr = sortedArr.join("");

  // 최종적으로 나온 정렬된 문자열 값을 정수로 변환 후 반환한다.
  // "873211" -> 873211
  return parseInt(sortedStr);
}

console.log(solution(118372)); // 873211