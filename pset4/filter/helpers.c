#include "helpers.h"
#include <math.h>

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    float rgbGray;

    for (int i = 0; i < width; i++)
    {
        for (int j = 0; j < height; j++)
        {
            // averages the color intensity and then applies the same value to all the colors to get gray
            rgbGray = round((image[j][i].rgbtBlue + image[j][i].rgbtGreen + image[j][i].rgbtRed) / 3.000);

            image[j][i].rgbtBlue = rgbGray;
            image[j][i].rgbtGreen = rgbGray;
            image[j][i].rgbtRed = rgbGray;
        }
    }
}

// stops max value at 255 preventing overflow 
int limit(int RGB)
{
    if (RGB > 255)
    {
        RGB = 255;
    }
    return RGB;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    int sepiaBlue;
    int sepiaRed;
    int sepiaGreen;
    for (int i = 0; i < width; i++)
    {
        for (int j = 0; j < height; j++)
        {
            sepiaRed = limit(round(.393 * image[j][i].rgbtRed + .769 * image[j][i].rgbtGreen + .189 * image[j][i].rgbtBlue));
            sepiaGreen = limit(round(.349 * image[j][i].rgbtRed + .686 * image[j][i].rgbtGreen + .168 * image[j][i].rgbtBlue));
            sepiaBlue = limit(round(.272 * image[j][i].rgbtRed + .534 * image[j][i].rgbtGreen + .131 * image[j][i].rgbtBlue));

            image[j][i].rgbtBlue = sepiaBlue;
            image[j][i].rgbtGreen = sepiaGreen;
            image[j][i].rgbtRed = sepiaRed;
        }
    }
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    int temp[3];
    for (int j = 0; j < height; j++)
    {
        for (int i = 0; i < width / 2; i++)
        {
            temp[0] = image[j][i].rgbtBlue;
            temp[1] = image[j][i].rgbtGreen;
            temp[2] = image[j][i].rgbtRed;

            // swap pixels with the ones on the opposite side of the picture and viceversa
            image[j][i].rgbtBlue = image[j][width - i - 1].rgbtBlue;
            image[j][i].rgbtGreen = image[j][width - i - 1].rgbtGreen;
            image[j][i].rgbtRed = image[j][width - i - 1].rgbtRed;

            image[j][width - i - 1].rgbtBlue = temp[0];
            image[j][width - i - 1].rgbtGreen = temp[1];
            image[j][width - i - 1].rgbtRed = temp[2];
        }
    }
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    int sumBlue;
    int sumGreen;
    int sumRed;
    float counter;
    RGBTRIPLE temp[height][width];

    for (int i = 0; i < width; i++)
    {
        for (int j = 0; j < height; j++)
        {
            sumBlue = 0;
            sumGreen = 0;
            sumRed = 0;
            counter = 0.00;

            // sums values of the pixel and 8 neighboring ones, skips iteration if it goes outside the pic
            for (int k = -1; k < 2; k++)
            {
                if (j + k < 0 || j + k > height - 1)
                {
                    continue;
                }

                for (int h = -1; h < 2; h++)
                {
                    if (i + h < 0 || i + h > width - 1)
                    {
                        continue;
                    }

                    sumBlue += image[j + k][i + h].rgbtBlue;
                    sumGreen += image[j + k][i + h].rgbtGreen;
                    sumRed += image[j + k][i + h].rgbtRed;
                    counter++;
                }
            }

            // averages the sum to make picture look blurrier
            temp[j][i].rgbtBlue = round(sumBlue / counter);
            temp[j][i].rgbtGreen = round(sumGreen / counter);
            temp[j][i].rgbtRed = round(sumRed / counter);
        }
    }

    for (int i = 0; i < width; i++)
    {
        for (int j = 0; j < height; j++)
        {
            image[j][i].rgbtBlue = temp[j][i].rgbtBlue;
            image[j][i].rgbtGreen = temp[j][i].rgbtGreen;
            image[j][i].rgbtRed = temp[j][i].rgbtRed;
        }
    }
}
