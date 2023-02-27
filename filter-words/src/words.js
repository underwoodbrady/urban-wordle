import answerList from "./output_test.txt";

export const createCorrectWord = async () =>{
    let wordArr = [];
    let defArr = [];
    await fetch(answerList)
    .then((response) => response.text())
    .then((result) =>{
        const resultArr = result.split("\n");
        let line;
        for(let i = 0, e = resultArr.length; i<e; i++){
            line = resultArr[i].split(":?-");
            wordArr.push(line[0])
            defArr.push(line[1]);
        }
    })
    return {wordArr, defArr};
}


let textFile = null;
export const createTextFile = (wordArr) =>{
    wordArr = wordArr.join("\n"); //Breaks up each word by a newline character
    const data = new Blob([wordArr], {type: 'text/plain'}); //Creates text file with each word on its own line

    if (textFile !== null) //Prevents memory leaks
        window.URL.revokeObjectURL(textFile);
    
    textFile = window.URL.createObjectURL(data);

    return textFile;
}