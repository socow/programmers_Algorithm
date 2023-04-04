function solution(n) {
    let pizzaBox = 6
    while(true) {
        if(pizzaBox % n === 0 ){
             break
        }  
        pizzaBox += 6
    } 

    return pizzaBox/6
}