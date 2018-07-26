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
    let spaces = 0
    let result = ''
    // some error checks to handle some edge cases
    if (line.length>length){ return 'The line length cannot be shorter than the submitted text.'}
    if (typeof line != 'string') {return 'You must input a line of text enclosed in quotation marks.'}
    // iterate through input string to determine # of characters (chars) and spaces
    for (let i=0; i<line.length; i++){
        if (line[i]==' '){
            spaces += 1;
        } else {
            chars += 1;
        }
    }
    // calculate spacing needed to justify line
    const totalSpaces = (length - chars)
    const padding = Math.floor(totalSpaces / spaces)
    let extra = (totalSpaces % spaces)
    // construct result string adding extra spaces as required
    for (let i=0; i<line.length; i++){
        // concatenate normal characters to the result string
        if (line[i] != ' '){
            result += line[i]
        } else {
            // concatenate spaces between words according to calculated padding
            for (let x=0; x<padding; x++){
                result += ' '
                // if the total number of spaces to be distributed between words is odd, add an extra space between the leftmost two words
            }
            if (extra != 0) {
                result += ' '
                extra--
            }
        }
    }
        //print guideline to check spacing of output
        let guide = ""
        for (let y=1; y<=length; y++){
            guide += (y%10)
        }
        console.log(guide);
    return result
}

const line1 = "The quick brown fox jumps over the lazy dog."
console.log (justify(line1, 52));
console.log(justify(line1, 53));
console.log(justify(line1, 54));
console.log(justify(line1, 55));
console.log(justify(line1, 56));
console.log(justify(line1, 70));
console.log(justify(line1, 42));
console.log(justify(100, 50));
console.log(justify("", 40));