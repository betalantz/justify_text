function justify(line, length){
    // declaration of variables
    let words = line.split(' ')
    let spacesNeeded = length - (line.length - words.length) - 1
    
    // so we don't add spaces to last word.
    let count = words.length - 1
    for(let i = 0; i < spacesNeeded; i++ ) {
        words[i % count] += ' ';
    }
    
    let result = words.join('');

    //print guideline to check spacing of output
    let guide = ""
    for (let y=1; y<=length; y++){
        guide += (y%10)
    }
    console.log(guide);
    return result
}
const line1 = "The quick brown fox jumps over the lazy dog."
console.log(justify(line1, 52));
console.log(justify(line1, 53));
console.log(justify(line1, 54));
console.log(justify(line1, 55));
console.log(justify(line1, 56));
console.log(justify(line1, 70));
