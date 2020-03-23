# 普里姆算法(Prim)
## 介绍
普里姆算法是图结构中寻找最小生成树的一种算法。所谓生成树，即为连通图的极小连通子图，其包含了图中的n个顶点，和n-1条边，这n个顶点和n-1条边所构成的树即为生成树。当边上带有权值时，使生成树中的总权值最小的生成树称为最小代价生成树，简称最小生成树。最小生成树不唯一，且需要满足一下准则： 
>1. 只能使用图中的边构造最小生成树
>2. 具有n个顶点和n-1条边
>3. 每个顶点仅能连接一次，即不能构成回路
## 创建图
```java
class MGraph {
	int verxs; //表示图的节点个数
	char[] data;//存放结点数据
	int[][] weight; //邻接矩阵
	
	public MGraph(int verxs) {
		this.verxs = verxs;
		data = new char[verxs];
		weight = new int[verxs][verxs];
	}
}
```
## prim算法
```java
/**
    * 
    * @param graph 图
    * @param v 表示从图的第几个顶点开始生成'A'->0 'B'->1...
    */
public void prim(MGraph graph, int v) {
    //visited[] 标记结点(顶点)是否被访问过
    int visited[] = new int[graph.verxs];
    //把当前这个结点标记为已访问
    visited[v] = 1;
    //h1 和 h2 记录两个顶点的下标
    int h1 = -1;
    int h2 = -1;
    int minWeight = 10000; //将 minWeight 初始成一个大数，后面在遍历过程中，会被替换
    for(int k = 1; k < graph.verxs; k++) {//因为有 graph.verxs顶点，普利姆算法结束后，有 graph.verxs-1边
        
        //这个是确定每一次生成的子图 ，和哪个结点的距离最近
        for(int i = 0; i < graph.verxs; i++) {// i结点表示被访问过的结点
            for(int j = 0; j< graph.verxs;j++) {//j结点表示还没有访问过的结点
                if(visited[i] == 1 && visited[j] == 0 && graph.weight[i][j] < minWeight) {
                    //替换minWeight(寻找已经访问过的结点和未访问过的结点间的权值最小的边)
                    minWeight = graph.weight[i][j];
                    h1 = i;
                    h2 = j;
                }
            }
        }
        //找到一条边是最小
        System.out.println("边<" + graph.data[h1] + "," + graph.data[h2] + "> 权值:" + minWeight);
        //将当前这个结点标记为已经访问
        visited[h2] = 1;
        //minWeight 重新设置为最大值 10000
        minWeight = 10000;
    }
}
```