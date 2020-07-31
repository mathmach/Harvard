from cs50 import get_string


def main():
    text = get_string("Text: ")
    letterscount = 0
    wordcount = 1
    sentencecount = 0

    for i in range(len(text)):
        if text[i].isalnum() == True:
            letterscount += 1
        elif text[i].isspace() == True:
            wordcount += 1
        elif (text[i] == '.' or text[i] == '!' or text[i] == '?'):
            sentencecount += 1
    
    grade = 0.0588 * (100 * letterscount / wordcount) - 0.296 * (100 * sentencecount / wordcount) - 15.8
    if (grade < 16 and grade >= 0):
        print(f"Grade {round(grade)}")
    elif (grade >= 16):
        print("Grade 16+")
    else:
        print("Before Grade 1")


main()
