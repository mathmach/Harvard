# TODO
from cs50 import SQL
from csv import reader
from sys import argv


def main(argv):
    if len(argv) < 2:
        print("Usage: python import.py characters.csv")
        exit()
        
    db = SQL("sqlite:///students.db")

    with open(argv[1], newline='') as charactersFile:
        for character in reader(charactersFile):
            if character[0] == 'name':
                continue
            
            fullName = character[0].split()
            if len(fullName) < 3:
                db.execute("INSERT INTO students(first, middle, last, house, birth) VALUES(?, ?, ?, ?, ?)", 
                           fullName[0], None, fullName[1], character[1], character[2])

            else:
                db.execute("INSERT INTO students(first, middle, last, house, birth) VALUES(?, ?, ?, ?, ?)", 
                           fullName[0], fullName[1], fullName[2], character[1], character[2])
                

main(argv)