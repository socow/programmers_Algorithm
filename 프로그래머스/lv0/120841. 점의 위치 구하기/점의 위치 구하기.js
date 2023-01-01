function solution(dot) {
    var answer = '';
        [x,y] = dot;
    
    if( x > 0 && y > 0 ){
        answer = 1
    }else if(x < 0 && y > 0) {
        answer = 2        
    }else if(x < 0 && y < 0) {
        answer = 3        
    }else {
        answer = 4        
    }
    return answer;
}