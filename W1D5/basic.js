function multipleOfThree(myArray) {
    for(let e of myArray) {
        if(e%3==0) {
            console.log(e)
        }
    }
}

function isPalindrome(str) {
    let result
    for(let i = 0,  j = str.length-1; i>str.length/2;i++, j--) {
        console.log("h")
        if(str.charAt(i) !=str.charAt(j)) {
            result = false;
        } else{
            result = true
        }
    }
    return result;
}

function remove(array, value) {

    for(let i =0; i<array.length-1; i++) {
        if(array[i] == value) {
            array.splice(i,1)
        }
    }
    return array;
}

function

let array = ['apple', 'grapes', 'banana', 'apple', 'grapes']


console.log(remove(array,'apple'))