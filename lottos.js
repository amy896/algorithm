// https://programmers.co.kr/learn/courses/30/lessons/77484

"use strict";

function solution(lottos, win_nums) {
  var answer = [];

  var numberOfLottos = lottos.filter((lotto) =>
    win_nums.includes(lotto)
  ).length;
  var numberOfZero = lottos.filter((x) => x === 0).length;

  var max =
    7 - (numberOfLottos + numberOfZero) === 7
      ? 6
      : 7 - (numberOfLottos + numberOfZero);
  var min = numberOfLottos < 2 ? 6 : 7 - numberOfLottos;

  answer.push(max);
  answer.push(min);

  return answer;
}
