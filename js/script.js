// function soma(a, b, c) {
//     console.log(a + b + c);

// }

// soma(3, 4, 1)


function soma(...termos) {
    let result = 0;

    for (let i = 0; i < termos.length; i++) {
        result += termos[i];
        
    }

    return result;
}