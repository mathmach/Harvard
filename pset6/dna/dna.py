from csv import reader, DictReader
from sys import argv


def main(argv):
    if len(argv) < 3:
        print("Usage: python dna.py sequence.txt database.csv")
        exit()

    dna = ""
    strs = {}

    with open(argv[2]) as dnaFile:
        for row in reader(dnaFile):
            dna = row[0]
            break
    
    with open(argv[1]) as peopleFile:
        for row in reader(peopleFile):
            dnaSequences = row
            dnaSequences.pop(0)
            break
    
    for item in dnaSequences:
        strs[item] = 1
    
    for key in strs:
        l = len(key)
        tempMax = 0
        temp = 0
        for i in range(len(dna)):
            while temp > 0:
                temp -= 1
                continue
    
            if dna[i: i + l] == key:
                while dna[i - l: i] == dna[i: i + l]:
                    temp += 1
                    i += l
    
                if temp > tempMax:
                    tempMax = temp
    
        strs[key] += tempMax

    with open(argv[1], newline='') as peopleFile:
        people = DictReader(peopleFile)
        result = "No match"
        for person in people:
            match = 0
            for dna in strs:
                if strs[dna] == int(person[dna]):
                    match += 1
                    
            if match == len(strs):
                result = person['name']
                break
    
        print(result)


main(argv)