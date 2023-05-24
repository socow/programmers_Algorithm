function solution(numbers, hand) { 
    var answer = ''; 
    let keypad = {
        1: [1,1], 2: [1,2], 3: [1,3],
        4: [2,1], 5: [2,2], 6: [2,3],
        7: [3,1], 8: [3,2], 9: [3,3],
        '*': [4,1], 0: [4,2], '#': [4,3]
    }
    
    let currentLocationL = [4,1]; 
    let currentLocationR = [4,3];
    
    numbers.forEach(num => {
        let numLocation = keypad[num];
		
        if(numLocation[1] === 1){ // 왼손
            currentLocationL = numLocation;
            answer += 'L';
        } else if(numLocation[1] === 3) { // 오른손
            currentLocationR = numLocation;
            answer += 'R';
        } else {
            // 각 손가락의 위치 확인 가장 가까운 손가락 이동 둘 다 같은 거리라면 hand에 따라 결정
            let distanceL = getDistance(currentLocationL, numLocation);
            let distanceR = getDistance(currentLocationR, numLocation);
            if(distanceL === distanceR) {
                if(hand === 'left') {
                    currentLocationL = numLocation;
                    answer += 'L';
                } else { 
                    currentLocationR = numLocation;
                    answer += 'R'; 
                }
            } else if(distanceL < distanceR){
                currentLocationL = numLocation; 
                answer += 'L'; }
            else {
                currentLocationR = numLocation;
                  answer += 'R';
            }
        }
    })
    return answer; 
}
// 왼손 오른손 현재 위치에서 이동 위치까지의 거리구하는 함수
function getDistance(arr1, arr2){
    let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]); 
    return result; 
}