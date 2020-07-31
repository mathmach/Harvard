
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdio.h>

bool validate(string key);

int main(int argc, string argv[])
{
    if (argc == 2)
    {
        string key = argv[1];
        if (validate(key) == true)
        {
            string abecedary = "abcdefghijklmnopqrstuvwxyz";
            string plaintext = get_string("plaintext: ");
            int charlength = strlen(plaintext);
            string ciphertext = plaintext;
            for (int i = 0; i < charlength; i++)
            {
                if (isupper(plaintext[i]) != 0)
                {
                    for (int j = 0; j < 26; j++)
                    {
                        if (abecedary[j] == tolower(plaintext[i]))
                        {
                            ciphertext[i] = toupper(key[j]);
                            break;
                        }
                    }
                }
                else if (islower(plaintext[i]) != 0)
                {
                    for (int j = 0; j < 26; j++)
                    {
                        if (abecedary[j] == plaintext[i])
                        {
                            ciphertext[i] = tolower(key[j]);
                            break;
                        }
                    }
                }
            }
            printf("ciphertext: %s\n", ciphertext);
            return 0;
        }
        else
        {
            return 1;
        }
    }
    else
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }
}

bool validate(string key)
{
    if (strlen(key) == 26)
    {
        char usedcharactes[26];
        for (int i = 0; i < strlen(key); i++)
        {
            if (isalpha(key[i]) > 0)
            {
                usedcharactes[i] = tolower(key[i]);
                for (int j = i - 1; j > 0; j--)
                {
                    if (usedcharactes[j] == tolower(key[i]))
                    {
                        printf("Key must not contain repeated characters.\n");
                        return false;
                    }
                }
            }
            else
            {
                printf("Key must only contain alphabetic characters.\n");
                return false;
            }
        }
        return true;
    }
    else
    {
        printf("Key must contain 26 characters.\n");
        return false;
    }
}