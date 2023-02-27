function solution(my_string) {
 return    my_string.split('').map(Number).filter(ele=>!isNaN(ele)).sort((a,b) => a-b)

}