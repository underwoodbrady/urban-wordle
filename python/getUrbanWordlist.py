from bs4 import BeautifulSoup
from urllib.request import urlopen
from datetime import datetime
import requests
import re

#Program to generate wordlist based on two parameters MIN_LIKES and WORD_SIZE
#Pulls data from www.urbandictionary.com/browse.php?character={C}
#Will go through all letters in LETTER_LIST by default
#Appends data to word_list.txt separated by \n characters

MIN_LIKES = 500
WORD_SIZE = 5
LETTER_LIST = ['Z']

#Returns page based on letter and page number
def getPage(letter:str, pageNum:int):
    url = f"https://www.urbandictionary.com/browse.php?character={letter}&page={pageNum}"
    #print(url)
    page = urlopen(url)
    html = page.read().decode("utf-8")
    return BeautifulSoup(html, "html.parser")

#Returns words on page of given word length (Can pass multiple params or none)
# 1 params: returns all words on a page
# 2 params: returns all words of given length
# 3 params: returns all words between a minVal and a maxVal
# 4+ params: throw error
def getWords(page: BeautifulSoup, *wordLength:int):
    idList = {}

    list = page.find("main").find('ul').find_all('li')
    for li in list:
        a = li.find('a').string
        if a:
            a.replace(" ", "")
            if (a.isalnum() and len(a) == WORD_SIZE and re.sub('[^A-Za-z]+', '', a) == a):
                idList[getID(a)] = a

    return checkLikesWithID(idList)

#Gets Id of word for API calls
def getID(word: str):
    url = f"https://www.urbandictionary.com/define.php?term={word}"
    html = urlopen(url).read().decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")
    firstThumb = soup.find("div", class_="thumbs")

    return firstThumb['data-defid']

#Returns array of words with likes greater than MIN_LIKES (Default: 500)
def checkLikesWithID(idList:dict):
    finalArr = []

    idString = ",".join(idList);
    response = requests.get(f"https://api.urbandictionary.com/v0/uncacheable?ids={idString}")

    #As long as API call doesn't fail return thumbs up
    if(response.status_code != 200):
        return []
    else:
        json = response.json()
        for thumb in json['thumbs']:
            if(thumb['up'] > MIN_LIKES):
                finalArr.append(idList[f"{thumb['defid']}"])

    return finalArr

#Prints current date and time
def printDateTime():
    now = datetime.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    print(dt_string)

#Driver function to generate wordlist 
def main():
    printDateTime()

    for letter in LETTER_LIST:
        print("Current letter: ", letter)
        pageNum = 15
        finalWords = []

        pageNext = True

        #If there is a next page check for words and add to word list
        while(pageNext):
            #Gets page and checks if theres a reference to next page
            page = getPage(letter, pageNum)
            pageNext = page.find("a", {"rel":"next"});

            words = getWords(page)
            for word in words:
                finalWords.append(word)

            print(f"{pageNum}: {words}")
            pageNum = pageNum +1

        with open("./python/word_list.txt", 'a') as file:
            for word in finalWords:
                file.write(word.lower() + "\n")

    printDateTime()

#Only execute if directly called
if( __name__ == "__main__"):
    main()
