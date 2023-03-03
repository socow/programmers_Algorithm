function solution(box, n) {
    
    return box.map(a => a/n<<0).reduce((a,b) => a*b,1)
}