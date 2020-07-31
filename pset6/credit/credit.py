from cs50 import get_float


def main():
    while True:
        cardnumber = get_float("Number: ")
        if (cardnumber > -1):
            break
        
    count = 2
    first_two_digit = cardnumber
    while(first_two_digit > 100):
        first_two_digit //= 10
        count += 1
      
    temp = cardnumber
    sum = 0
    for i in range(1, count + 1):
        digit = temp % 10
        if (i % 2 == 0):
            if (digit * 2 > 9):
                sum += (digit * 2) - 9
            else:
                sum += digit * 2
        else:
            sum += digit
        temp //= 10
    
    flag = True if (sum % 10 == 0) else False
    if (count == 15 and (first_two_digit == 34 or first_two_digit == 37) and flag):
        print("AMEX\n")
    elif (count == 16 and (first_two_digit > 50 and first_two_digit < 56) and flag):
        print("MASTERCARD\n")
    elif ((count == 13 or count == 16) and (first_two_digit // 10 == 4) and flag):
        print("VISA\n")
    else:
        print("INVALID\n")


main()
