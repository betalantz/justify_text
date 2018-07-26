/*
Justified Text Coding Problem
RealSelf
Lantz Warrick, applicant

This solution assumes that only one line at a time needs to be justified, and that the argument string does not
exceed the given line length, so it cannot handle 'word wrapping' or multi-line inputs.

Other possible edge cases this solution doesn't handle (due to time constraints) are strings with double-spaces
between words, or with extra spaces at the beginning or end.

String concatenation is not very space or time efficient, so on refactoring, I would be looking for more efficient
methods to create the output string, beginning with Javascript's .join() and .split() methods.
*/

function justify(line, length){
    // declaration of variables
    let chars = 0
    let wordGaps = 0
    let arr = Array.from(line)
    arr.forEach((char) => {
        if(char == ' ') { wordGaps++; }
        else { chars++; }
    })
    // console.log(wordGaps, chars);
    // arr.forEach((char) => console.log(char))
    let spaces = length - chars
    let justSpacing = Math.floor(spaces / wordGaps)
    let plug = ''
    while(justSpacing){
        plug += ' '
        justSpacing--
    }
    let addSpacing = spaces % wordGaps
    let result = arr.map((char, idx) => {
        if(char == ' ' && addSpacing) {
            // arr.splice(idx, 1, plug + ' ');
            char = plug + " "
            addSpacing--
        }
        else if(char == ' ') {char = plug}
        return char
    })
    //print guideline to check spacing of output
    let guide = ""
    for (let y=1; y<=length; y++){
        guide += (y%10)
    }
    console.log(guide);
    return result.join('')
}

const line1 = "The quick brown fox jumps over the lazy dog."
console.log(justify(line1, 52));
console.log(justify(line1, 53));
console.log(justify(line1, 54));
console.log(justify(line1, 55));
console.log(justify(line1, 56));
console.log(justify(line1, 70));
// console.log(justify(line1, 42));
// console.log(justify(100, 50));
// console.log(justify("", 40));