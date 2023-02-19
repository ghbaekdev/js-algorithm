function solution(n) {
  let answer;
  answer = Math.ceil(n / 12); // (올림 / Math.floor는 내림 / )
  return answer;
}

console.log(solution(178));
