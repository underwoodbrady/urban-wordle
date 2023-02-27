# Urban-Wordle
React App recreation of popular Wordle game using words scaped from Urban Dictionary with Python.

## Folder Structure

### Python

Python utility functions for scaping urban dictionary, making API calls, and generating word lists

- getUrbanWordlist.py: Creates text file with urban dictionary words (a-z) of 5 length and more than 500 likes (can be customized using variables at the top of the file)
- pairDefinition.py: Grabs words from IN_FILE and using html parsing to pair the word with definition in an output file OUT_FILE
- convertToLower.py: Converts all letters in INPUT_FILE to lowercase in OUTPUT_FILE

### Urban-wordle

Client side code written using React and TailwindCSS. To start use:

    $cd urban-wordle
    $npm install
    $npm start
    
### Word_lists

Collection of word lists generated from webscraping and stored as individual letters to reduce runtime of getUrbanWordlist.py

### Filter-words

Secondary client side app written in React and TailwindCSS to assist in filtering unwanted words out from overall wordlist. Can change input file and then download output once complete. To start use:

    $cd filter-words
    $npm install
    $npm start

## Viewing Project

The project is currently live at https://www.urbanwordle.app/, or if running yourself you can see it at http://localhost:3000
