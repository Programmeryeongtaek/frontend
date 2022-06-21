/*5월 26일
배열을 입력받으면 해당 배열을 뒤집은 배열을 반환하는 함수를 작성해 보세요.
*/

const arr = ['어린 양 각뜨기', '석용이형 겸직', '의하형 감사'];

// [글자 뒤집기]
function arrayReverse(arr) {
    const reverse = [];
    for (const item of arr) {
        reverse.unshift(item);
    }
    return reverse
}

function stringReverse(str) {
    let result = ''
    for (const letter of str) {
        result = letter + result
    }
    return result
}

console.log(arrayReverse(arr))
console.log(stringReverse('hello'))