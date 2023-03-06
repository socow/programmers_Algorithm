function solution(d, budget) {
    let answer = 0;
    d.sort((a,b)=>(a-b));
    for(let count of d){
        if(count > budget) break;
        else{
            budget -= count;
            answer ++;
        }
    }
        return answer;
}