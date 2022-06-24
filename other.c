#include <stdio.h>

int main(int argc, char const *argv[])
{
    int i=0, n=7, f=1;
    for ( i = 1; i <=n; i++)
    {
        f *=i;
    }
    
    printf("the factorial of %d is %d", n, f);
    return 0;
}
