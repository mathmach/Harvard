#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

#define BLOCK_SIZE 512

typedef uint8_t BYTE;

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./recover image\n");
        return 1;
    }

    char *infile = argv[1];

    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        fprintf(stderr, "Could not open %s.\n", infile);
        return 2;
    }

    BYTE buffer[512];
    int imageCount = 0;

    FILE *outptr = NULL;

    char filename[8];
    size_t bytesRead;

    do
    {
        bytesRead = fread(buffer, sizeof(BYTE), BLOCK_SIZE, inptr);

        bool isJpeg = buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0;

        if (isJpeg && outptr != NULL)
        {
            fclose(outptr);
            imageCount++;
        }

        if (isJpeg)
        {
            sprintf(filename, "%03i.jpg", imageCount);
            outptr = fopen(filename, "w");
        }

        if (outptr != NULL)
        {
            fwrite(buffer, sizeof(BYTE), bytesRead, outptr);
        }
    }
    while (bytesRead != 0 && !feof(inptr));

    fclose(outptr);
    fclose(inptr);

    return 0;
}