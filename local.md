=== 2026-06-14 日记整理 ===

【学习进度】
- C语言第14章周末练习，完成两道编程题

【题目一：booksave.c（在教材代码基础上修改，<-- 标记处为修改内容）】

```c
/* booksave.c -- 在文件中保存结构中的内容 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h> // <--
#define MAXTITL 40
#define MAXAUTL 40
#define MAXBKS 10 /* 最大书籍数量 */
#define DELETE 1 // 标识删除的元素 <--

char * s_gets(char * st, int n);
int delete_or_modify(struct book *library, int count); // <--

struct book { /* 建立 book 模板 */
    char title[MAXTITL];
    char author[MAXAUTL];
    float value;
    bool deleted; // <--
};

int main(void)
{
    struct book library[MAXBKS]; /* 结构数组 */
    int count = 0;
    FILE * pbooks;
    int size = sizeof(struct book);

    if ((pbooks = fopen("book.dat", "r+b")) == NULL)
    {
        fputs("Can't open book.dat file\n", stderr);
        exit(1);
    }

    rewind(pbooks); /* 定位到文件开始 */
    while (count < MAXBKS && fread(&library[count], size, 1, pbooks) == 1)
    {
        if (count == 0)
            puts("Current contents of book.dat:");
        printf("%s by %s: $%.2f\n", library[count].title,
               library[count].author, library[count].value);
        count++;
    } // 展示已有内容 <--
    if (count == MAXBKS)
    {
        fputs("The book.dat file is full.", stderr);
        exit(2);
    }

    puts("Please add new book titles.");
    puts("Press [enter] at the start of a line to stop.");
    while (count < MAXBKS && s_gets(library[count].title, MAXTITL) != NULL
           && library[count].title[0] != '\0')
    {
        puts("Now enter the author.");
        s_gets(library[count].author, MAXAUTL);
        puts("Now enter the value.");
        scanf("%f", &library[count++].value);
        while (getchar() != '\n')
            continue; /* 清理输入行 */
        if (count < MAXBKS)
            puts("Enter the next title.");
    }
    for(int index=0;index<count;index++) // <--
        library[index].deleted = false;   /* 新书默认未删除 */ // <--
    count=delete_or_modify(library,count); // <--
    fclose(pbooks);
    pbooks = fopen("book.dat", "w+b");
    if (pbooks == NULL){
    fputs("Can't open book.dat file for writing\n", stderr);
        exit(1);
    }

    if (count > 0)
    {
        puts("Here is the list of your books:");
        for (int index = 0; index < count; index++) // <--
            printf("%s by %s: $%.2f\n", library[index].title,
                   library[index].author, library[index].value);
        fwrite(&library[0], size, count, pbooks); // <--
    }
    else
        puts("No books? Too bad.\n");

    puts("Bye.\n");
    fclose(pbooks);
    return 0;
}

char * s_gets(char * st, int n)
{
    char * ret_val;
    char * find;

    ret_val = fgets(st, n, stdin);
    if (ret_val)
    {
        find = strchr(st, '\n'); /* 查找换行符 */
        if (find)                /* 如果地址不是 NULL */
            *find = '\0';
        else
            while (getchar() != '\n')
                continue;        /* 清理输入行 */
    }
    return ret_val;
}
int delete_or_modify(struct book *library,int count){ // <--
    printf("未实现\n"); // <--
    return count; // <--
} // <--
```

【题目二：航班座位管理系统（完全自写）】

```c
#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#include <stdlib.h>
#define NAME 32
#define NUMBER 4
#define SEAT 12
typedef struct {
    char number[NUMBER];
    bool reservation;
    char first[NAME];
    char last[NAME];
} FLIGHT;
char* s_gets(char* st, int n);
void print_empty_seat_count(FLIGHT seats[]);
void print_empty_seat_list(FLIGHT seats[]);
void print_all_seat_list(FLIGHT seats[]);
void assign_customer_seat(FLIGHT seats[]);
void cancel_customer_seat(FLIGHT seats[]);

int main(void) {
    FLIGHT list[SEAT];
    char input[10];
    char ch;
    while (true) {
        printf("\n\nTo choose a function, enter its letter label:\n"
               "a) Show number of empty seats\n"
               "b) Show list of empty seats\n"
               "c) Show alphabetical list of seats\n"
               "d) Assign a customer to a seat assignment\n"
               "e) Delete a seat assignment\n"
               "f) Quit\n");
        if (s_gets(input, sizeof(input)) == NULL) break;
        ch = input[0];
        switch (ch) {
            case 'a': print_empty_seat_count(list); break;
            case 'b': break;
            case 'c': break;
            case 'd': break;
            case 'e': break;
            case 'f': return 0;
            default: printf("Invalid input, try again.\n");
        }
    }
    return 0;
}

char* s_gets(char* st, int n) {
    char* ret_val;
    char* find;

    ret_val = fgets(st, n, stdin);
    if (ret_val) {
        find = strchr(st, '\n');
        if (find) *find = '\0';
        else while (getchar() != '\n');
    }
    return ret_val;
}
void print_empty_seat_count(FLIGHT seats[]) {}
void print_empty_seat_list(FLIGHT seats[]) {}
void print_all_seat_list(FLIGHT seats[]) {}
void assign_customer_seat(FLIGHT seats[]) {}
void cancel_customer_seat(FLIGHT seats[]) {}
```

【备注】
- 周末集中推进C语言第14章作业
