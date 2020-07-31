#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 9

int preferences[MAX][MAX];

bool locked[MAX][MAX];
bool lock = true;

typedef struct
{
    int winner;
    int loser;
}
pair;

string candidates[MAX];
pair pairs[MAX * (MAX - 1) / 2];

int pair_count;
int candidate_count;

bool vote(int rank, string name, int ranks[]);
void record_preferences(int ranks[]);
void add_pairs(void);
void sort_pairs(void);
void lock_pairs(void);
void print_winner(void);

void validate(int j);
int compare_function(const void *a, const void *b);

int main(int argc, string argv[])
{
    if (argc < 2)
    {
        printf("Usage: ./tideman candidate1, candidate2 ...\n");
        return false;
    }
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        return false;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i] = argv[i + 1];
    }
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j < candidate_count; j++)
        {
            locked[i][j] = false;
            preferences[i][j] = 0;
        }
    }
    pair_count = 0;
    int voter_count = get_int("Number of voters: ");
    for (int i = 0; i < voter_count; i++)
    {
        int ranks[candidate_count];
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);
            if (!vote(j, name, ranks))
            {
                printf("Invalid vote.\n");
                return false;
            }
        }
        record_preferences(ranks);
        printf("\n");
    }

    add_pairs();
    sort_pairs();
    lock_pairs();
    print_winner();
}

bool vote(int rank, string name, int ranks[])
{
    for (int i = 0; i < candidate_count; i++)
    {
        if (strcmp(name,  candidates[i]) == 0)
        {
            ranks[rank] = i;
            return true;
        }
    }
    return false;
}

void record_preferences(int ranks[])
{
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = i + 1; j < candidate_count; j++)
        {
            preferences[ranks[i]][ranks[j]]++;
        }
    }
}

void add_pairs(void)
{
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = i + 1; j < candidate_count; j++)
        {
            if (preferences[i][j] > preferences[j][i])
            {
                pairs[pair_count].winner = i;
                pairs[pair_count].loser = j;
                pair_count++;
            }
            else if (preferences[i][j] < preferences[j][i])
            {
                pairs[pair_count].winner = j;
                pairs[pair_count].loser = i;
                pair_count++;
            }
        }
    }
}

void sort_pairs(void)
{
    qsort(pairs, pair_count, sizeof(pair), compare_function);
}

void lock_pairs(void)
{
    for (int i = 0; i < pair_count; i++)
    {
        locked[pairs[i].winner][pairs[i].loser] = true;

        validate(candidate_count);
        if (!lock)
        {
            locked[pairs[i].winner][pairs[i].loser] = false;
        }
        lock = true;
    }
}

void print_winner(void)
{
    int winner;
    int rank;

    for (int i = 0; i < candidate_count; i++)
    {
        rank = 0;
        for (int k = 0; k < candidate_count; k++)
        {
            if (locked[k][i] == false)
            {
                rank++;
            }
        }
        if (rank == candidate_count)
        {
            printf("%s\n", candidates[i]);
        }
    }
}

int compare_function(const void *a, const void *b)
{
    pair *x = (pair *) a;
    pair *y = (pair *) b;
    return (preferences[y->winner][y->loser] - preferences[x->winner][x->loser]);
}

void validate(int count)
{
    if (count > 0)
    {
        int r = 0;
        bool rank[count];
        for (int i = 0; i < count; i++)
        {
            rank[i] = false;
        }
        validate(count - 1);
        for (int i = 0; i < count; i++)
        {
            for (int j = 0; j < count; j++)
            {
                if (locked[i][j] == true)
                {
                    rank[i] = true;
                }
            }
        }
        for (int i = 0; i < count; i++)
        {
            if (rank[i] == true)
            {
                r++;
            }
        }
        if (r == count)
        {
            lock = false;
        }
    }
}
