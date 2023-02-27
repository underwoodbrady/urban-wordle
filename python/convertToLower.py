INPUT_FILE = "word_list.txt"
OUTPUT_FILE = "final_word_list.txt"


def main():

    with open(INPUT_FILE, 'r') as fileI:
        lines = fileI.readlines()
        with open(OUTPUT_FILE, 'a') as fileO:
            for line in lines:
                fileO.write(line.lower())

if __name__ == "__main__":
    main()