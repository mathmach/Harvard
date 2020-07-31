# TODO
from cs50 import SQL
from sys import argv
        

def main(argv):
    if len(argv) < 2:
        print("Usage: python roster.py house")
        exit()

    db = SQL("sqlite:///students.db")
    students = db.execute("SELECT * FROM students WHERE house = (?) ORDER BY last", argv[1])

    for student in students:
        if student['middle'] != None:
            print(f"{student['first']} {student['middle']} {student['last']}, born {student['birth']}")
            
        else:
            print(f"{student['first']} {student['last']}, born {student['birth']}")
                

main(argv)