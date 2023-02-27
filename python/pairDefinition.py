from bs4 import BeautifulSoup
from urllib.request import urlopen
import re
import string

IN_FILE = "./python/final_word_list.txt" 
OUT_FILE = "./python/output_test.txt"

#Returns string definition by web scraping
def getDefinition(word):
    url = f"https://www.urbandictionary.com/define.php?term={word}"
    html = urlopen(url).read().decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")
    definition = soup.find("div", class_="meaning").text
    return definition

def main():
    printable = set(string.printable);
    with open(IN_FILE, 'r') as fileI:
        with open(OUT_FILE, 'a') as fileO:
            for line in fileI:
                line = line.rstrip('\n'); #Removes newline character from line
                definition = getDefinition(line) #Returns definition of word from urbandictionary
                definition = ''.join(definition.splitlines()); #Removes newline characters
                definition = ''.join(filter(lambda x: x in printable, definition)) #Removes non ascii characters
                fileO.write(f"{line}:?-{definition}\n")  #Writes line with definition into output file
                print(line)  

if __name__ == "__main__":
    main()