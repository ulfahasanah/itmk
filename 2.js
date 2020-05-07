/*
There is a mobile game with stage. We wanna get the failure rate of each stage.

The failure rate is defined as follows;
Number of players who have reached the stage but have not yet cleared / Number of players who have reached the stage.

Complete the function to return an array containing the number of the stage in descending order of the highest failure rate,
when total stages N, an array users containing the stage in which the game user is currently playing are given as a parameter.
*/

/**
 Limitations
- N, total stages: 1 ~ 500
- users:
  The length of array users: 1 ~ 200,000
  users contain numbers 1 ~ N + 1.
- Each number in users represents the stage that the user is currently playing.
- Where (N + 1) represents the user who cleared the last stage (Nth stage).
- If there is a stage with the same failure rate, the smaller number of stages should be placed first.
- If there is no user who reaches the stage, the failure rate of the stage is 0. 
 **/

 /*
 Input and output examples
N: 5
users: [2,1,2,6,2,4,3,3]
answer: [3,4,2,1,5]

A total 8 users played stage one, and one of them was not clear the stage yet. Therefore, the failure rate of stage 1 is as follows.
Stage 1 failure rate: 1/8

A total 7 users played stage 2, 3 of which were not clear the stage yet. Therefore, the failure rate of stage 2 is as follows.
Stage 2 failure rate: 3/7

Likewise, the failure rates of the remaining stages are as follows.
Stage 3 failure rate: 2/4
Stage 4 failure rate: 1/2
Stage 5 failure rate: 0/1

Sort the number of stages by failure rate in descending order: [3,4,2,1,5]

N: 4
users: [4,4,4,4,4]
answer: [4,1,2,3]

Since all users are in the last stage, the failure rate of stage 4 is 1 and the failure rate of the remaining stages is 0.
If the failure rate is same, then the smaller number of stages should come first.
 */

/*
Level = 5
[2, 1, 2, 6, 2, 4, 3, 3]
[3, 4, 2, 1, 5]
1 == 1 >>>  1, 2, 2, 2, 3, 3, 4, 6 === 1/8
2 == 3 >>>  2, 2, 2, 3, 3, 4, 6 === 3/7
3 == 2 >>>  3, 3, 4, 6 === 2/4
4 == 1 >>>  4, 6 === 1/2
5 == 0 >>>  6 === 0


Level = 4
[4,4,4,4,4]
[4,1,2,3]
1 == 0 >>> 4,4,4,4,4 === 0
2 == 0 >>> 4,4,4,4,4 === 0
3 == 0 >>> 4,4,4,4,4 === 0
4 == 5 >>> 5/5 === 1
*/

function solution(N, users) {
    let arr = users.sort((a,b) => a - b)
    const objAnswer = {}
    for(let i = 1; i <= N; i++) { 
      let player = arr.filter(el => el === i)
      let rate = player.length/arr.length
      let index = arr.lastIndexOf(i)
      arr = arr.slice(index + 1)
      objAnswer[i] = rate
    }
    const sorted = Object.entries(objAnswer).sort((a,b) => b[1] - a[1])
    const answer = sorted.map(el => +el[0])
    return answer
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
console.log(solution(4, [4, 4, 4, 4, 4]))