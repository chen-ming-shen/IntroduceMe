今天的编程作业：
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define MAX 5
#define LEN 81
char * s_gets(char *st,int n);
void eatline(void);
void function_a(void);
void function_b(void);
void function_c(void);
void function_d(void);
void quit(void);
typedef void (*VFp)(void);
int main(void){
    char line[LEN];
    char ch;
    int i=4;
    VFp list[MAX] = {function_a, function_b, function_c, function_d, quit};
    puts("Enter a string:");
    printf("a) aaaaaa\n"
               "b) bbbbbb\n"
               "c) cccccc\n"
               "d) dddddd\n"
               "q) quit!\n");
    while(s_gets(line,LEN)!=NULL && line[0]!='\0'){
        ch=line[0];
        puts("Enter a string:");
        printf("a) aaaaaa\n"
               "b) bbbbbb\n"
               "c) cccccc\n"
               "d) dddddd\n"
               "q) quit!\n");
        switch (ch){
            case 'a': i=0; break;
            case 'b': i=1; break;
            case 'c': i=2; break;
            case 'd': i=3; break;
            case 'q': i=4; break;
        }
        list[i]();
    }
    return 0;
}
void function_a(){
    printf("未实现!\n");
}
void function_b(){
    printf("未实现!\n");
}
void function_c(){
    printf("未实现!\n");
}
void function_d(){
    printf("未实现!\n");
}
void quit(){
    printf("未实现!\n");
    exit(1);
}
char *s_gets(char *st, int n) {
    char *ret_val = fgets(st, n, stdin);
    if (ret_val) {
        size_t idx = strcspn(st, "\n");
        if (st[idx] == '\n') st[idx] = '\0';
        else eatline();
    }
    return ret_val;
}
void eatline(void) {
    while (getchar() != '\n') continue;
}

