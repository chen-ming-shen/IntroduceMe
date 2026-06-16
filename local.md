=== 2026-06-16 日记整理 ===

【学习进度】
- C语言第14章：函数指针菜单系统，今日进一步优化交互体验

【代码】

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define MAX 5
#define LEN 81
char* s_gets(char *st, int n);
void eatline(void);
void function_a(void);
void function_b(void);
void function_c(void);
void function_d(void);
void quit(void);
typedef void (*VFp)(void);
int main(void) {
    char line[LEN];
    char ch;
    int i = 6;
    VFp list[MAX] = {function_a, function_b, function_c, function_d, quit};
    printf("\033[2J\033[H");
    puts("Enter a string:");
    printf("a) aaaaaa\n"
           "b) bbbbbb\n"
           "c) cccccc\n"
           "d) dddddd\n"
           "q) quit!\n");
    while (s_gets(line, LEN) != NULL) {
        ch = line[0];
        switch (ch) {
            case 'a': i = 0; break;
            case 'b': i = 1; break;
            case 'c': i = 2; break;
            case 'd': i = 3; break;
            case 'q': i = 4; break;
            default: printf("Invalid input, try again.\n");
        }
        if (i < 5) list[i]();
        printf("\n按回车键返回菜单...");
        while (getchar() != '\n');
        printf("\033[2J\033[H");
        puts("Enter a string:");
        printf("a) aaaaaa\n"
               "b) bbbbbb\n"
               "c) cccccc\n"
               "d) dddddd\n"
               "q) quit!\n");
    }
    return 0;
}
void function_a() { printf("未实现!\n"); }
void function_b() { printf("未实现!\n"); }
void function_c() { printf("未实现!\n"); }
void function_d() { printf("未实现!\n"); }
void quit() { exit(1); }
char *s_gets(char *st, int n) {
    char *ret_val = fgets(st, n, stdin);
    if (ret_val) {
        size_t idx = strcspn(st, "\n");
        if (st[idx] == '\n') st[idx] = '\0';
        else eatline();
    }
    return ret_val;
}
void eatline(void) { while (getchar() != '\n') continue; }
```

【改动说明】
- 新增 `printf("\033[2J\033[H")` ANSI转义序列清屏，菜单更干净
- `i` 初始值改为 6（越界值），配合 `if (i < 5)` 守卫，非法输入不触发任何函数
- switch 新增 `default` 分支，提示 `"Invalid input, try again."`
- 移除 `line[0]!='\0'` 空行退出条件，仅 `NULL`（EOF）时退出循环
- 每次功能执行后显示「按回车键返回菜单...」，手动清缓冲后重新渲染菜单
