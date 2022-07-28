#include <bits/stdc++.h>
using namespace std;
int main()
{
    unordered_map<int, int> map;
    vector<int> v = {-1,0,1,2,-1,-4};
    for(int i=0;i<v.size();i++)
    {
        map[v[i]] = i;
    }
    for(auto it: map)
    {
        cout << it.first << " " << it.second << endl;
    }
}