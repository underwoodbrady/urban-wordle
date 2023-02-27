import wordList from "./official_words.txt";
import answerList from "./final_word_list2.txt";

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

export const createWordSet = async() => {
    let wordSet;
    await fetch(wordList)
    .then((response)=> response.text())
    .then((result) =>{
        wordSet  = new Set(result.split("\n")); 
    })

    return {wordSet};
}


export const createCorrectWord = async () =>{
    let correctWord;
    let correctDefinition;
    await fetch(answerList)
    .then((response) => response.text())
    .then((result) =>{
        const resultArr = result.split("\n");
        const wordArr = (resultArr[Math.floor(Math.random()*resultArr.length)]).split(":?-");
        correctWord = wordArr[0].toUpperCase();
        const capWord = wordArr[0].charAt(0).toUpperCase() + wordArr[0].slice(1); //Capitalized word
        const uppercaseWord = wordArr[0].toUpperCase();
        //Removes instances in word that exist in definintion
        correctDefinition = wordArr[1].replaceAll(wordArr[0], "_____").replaceAll(capWord, "_____").replaceAll(uppercaseWord, "_____");
    })
    return {correctWord, correctDefinition};
}

