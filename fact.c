#include <stdio.h>

int main(int argc, char const *argv[])
{
    int i, n, factorial=1;
    printf("enter a number to calculate its factorial\n");
    scanf("%d", &n);
    for ( i = 1; i <= n; i++){
    
        factorial = factorial * i;}
       printf("the factorial of %d = %d", n, factorial);
       
    
    
    return 0;
}

