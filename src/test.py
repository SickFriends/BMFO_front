n,m = map(int,input().split())
arr = [[0 for col in range(n)] for row in range(n)]
def com(n,r):
    if(n == r or r == 0): return 1
    if(arr[n][r]) :return arr[n][r]
    arr[n][r] = com(n-1,r-1)+com(n-1,r)
    return arr[n][r]

print(com(n,m))
    
    