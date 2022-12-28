function solution(absolutes, signs) {
    return absolutes.reduce((ac, v, i) => ac + (signs[i] ? +v : -v), 0);
}