from cs50 import get_int


def main():
    while True:
        height = get_int("Height: ")
        if (height > 0 and height <= 8):
            break
        
    for blocks in range(1, height + 1):
        print(" " * (height - blocks), end="")
        print("#" * blocks)
        
    
main()
