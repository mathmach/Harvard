#include <cs50.h>
#include <string.h>
#include <math.h>
#include <stdio.h>

int main(void)
{
    string text = get_string("Text: ");
    int letterscount = 0;
    int wordcount = 1;
    int sentencecount = 0;

    for (int i = 0; i < strlen(text); i++)
    {
        if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z'))
        {
            letterscount++;
        }
        else if (text[i] == ' ')
        {
            wordcount++;
        }
        else if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            sentencecount++;
        }
    }
    float grade = 0.0588 * (100 * (float) letterscount / (float) wordcount) - 0.296 * (100 * (float) sentencecount /
                  (float) wordcount) - 15.8;
    if (grade < 16 && grade >= 0)
    {
        printf("Grade %i\n", (int) round(grade));
    }
    else if (grade >= 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Before Grade 1\n");
    }

}