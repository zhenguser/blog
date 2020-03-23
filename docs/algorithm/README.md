# 贪心算法
## 含义
贪心算法，又称贪婪算法(Greedy Algorithm)，是指在对问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优解出发来考虑，它所做出的仅是在某种意义上的局部最优解。  

贪婪算法是一种分阶段的工作，在每一个阶段，可以认为所做决定是最好的，而不考虑将来的后果。这种“眼下能够拿到的就拿”的策略是这类算法名称的来源。   

贪心算法没有固定的算法框架，算法设计的关键是贪心策略的选择。必须注意的是，贪心算法不是对所有问题都能得到整体最优解，选择的贪心策略必须具备无后效性，即某个状态以后的过程不会影响以前的状态，只与当前状态有关。所以对所采用的贪心策略一定要仔细分析其是否满足无后效性。
## 基本思路
>1. 建立数学模型来描述问题。
>2. 把求解的问题分成若干个子问题。
>3. 对每一子问题求解，得到子问题的局部最优解。
>4. 把子问题的解局部最优解合成原来解问题的一个解。
## 适用场景
贪心策略适用的前提是：局部最优策略能导致产生全局最优解。也就是当算法终止的时候，局部最优等于全局最优。
## 实现框架
从问题的某一初始解出发；    
while （能朝给定总目标前进一步）     
{   
利用可行的决策，求出可行解的一个解元素；    
}   
由所有解元素组合成问题的一个可行解；  
## 贪心策略
因为用贪心算法只能通过解局部最优解的策略来达到全局最优解，因此，一定要注意判断问题是否适合采用贪心算法策略，找到的解是否一定是问题的最优解。
如果确定可以使用贪心算法，那一定要选择合适的贪心策略；
## 算法实例
### 1.纸币找零问题
假设1元、2元、5元、10元、20元、50元、100元的纸币，张数不限制，现在要用来支付K元，至少要多少张纸币？  

贪心策略：   
* 每一步尽可能用面值大的纸币
```java
public static void greedyGiveMoney(int money) {
    System.out.println("需要找零: " + money);
    int[] moneyLevel = {1, 5, 10, 20, 50, 100};
    for (int i = moneyLevel.length - 1; i >= 0; i--) {
        int num = money/ moneyLevel[i];
        int mod = money % moneyLevel[i];
        money = mod;
        if (num > 0) {
            System.out.println("需要" + num + "张" + moneyLevel[i] + "块的");
        }
    }
}
```
### 2.广播台覆盖问题
假设存在如下表的需要付费的广播台，以及广播台信号可以覆盖的地区。 如何选择最少的广播台，让所有的地区都可以接收到信号？  

贪心策略：   
* 遍历所有的广播电台, 找到一个覆盖了最多未覆盖的地区的电台(此电台可能包含一些已覆盖的地区，但没有关系） 
* 将这个电台加入到一个集合中(比如ArrayList), 想办法把该电台覆盖的地区在下次比较时去掉。
* 重复第1步直到覆盖了全部的地区
```java
/**
    * @description:
    * @author: zhengqi
    * @date: 2020/3/4
    * @param broadcasts 广播电台
    * @param allAreas 索要覆盖的地区
    * @return:
    */
public static List<String > getOptimalResult(HashMap<String,HashSet<String>> broadcasts,
                                        HashSet<String> allAreas){
    //创建ArrayList, 存放选择的电台集合
    ArrayList<String> selects = new ArrayList<String>();

    //定义一个临时的集合， 在遍历的过程中，存放遍历过程中的电台覆盖的地区和当前还没有覆盖的地区的交集
    HashSet<String> tempSet = new HashSet<String>();
    //定义给maxKey ， 保存在一次遍历过程中，能够覆盖最大未覆盖的地区对应的电台的key
    //如果maxKey 不为null , 则会加入到 selects
    String maxKey = null;
    HashSet<String> maxValue = null; //存储有广播有效覆盖地区
    int maxSize = 0; //存储有广播有效覆盖地区数量
    while(allAreas.size() != 0) { // 如果allAreas 不为0, 则表示还没有覆盖到所有的地区
        //每进行一次while,需要
        maxKey = null;
        //遍历 broadcasts, 取出对应key
        for(String key : broadcasts.keySet()) {
            //每进行一次for
            tempSet.clear();
            //当前这个key能够覆盖的地区
            HashSet<String> areas = broadcasts.get(key);
            tempSet.addAll(areas);
            //求出tempSet 和   allAreas 集合的交集, 交集会赋给 tempSet
            tempSet.retainAll(allAreas);
            //如果当前这个集合包含的未覆盖地区的数量，比maxKey指向的集合地区还多
            //就需要重置maxKey
            // tempSet.size() >broadcasts.get(maxKey).size()) 体现出贪心算法的特点,每次都选择最优的
            if(tempSet.size() > 0 &&
                    (maxKey == null || tempSet.size() > maxSize)){
                maxKey = key;
                maxValue = broadcasts.get(maxKey);
                maxValue.retainAll(allAreas);
                maxSize = maxValue.size();
            }
        }
        //maxKey != null, 就应该将maxKey 加入selects
        if(maxKey != null) {
            selects.add(maxKey);
            //将maxKey指向的广播电台覆盖的地区，从 allAreas 去掉
            allAreas.removeAll(broadcasts.get(maxKey));
        }
    }
    return selects;
}
```
广播电台封装：
```java
//创建广播电台,放入到Map
HashMap<String,HashSet<String>> broadcasts = new HashMap<String, HashSet<String>>();
//将各个电台放入到broadcasts
HashSet<String> hashSet1 = new HashSet<String>();
hashSet1.add("北京");
hashSet1.add("上海");
hashSet1.add("天津");

HashSet<String> hashSet2 = new HashSet<String>();
hashSet2.add("广州");
hashSet2.add("北京");
hashSet2.add("深圳");

HashSet<String> hashSet3 = new HashSet<String>();
hashSet3.add("成都");
hashSet3.add("上海");
hashSet3.add("杭州");


HashSet<String> hashSet4 = new HashSet<String>();
hashSet4.add("上海");
hashSet4.add("天津");

HashSet<String> hashSet5 = new HashSet<String>();
hashSet5.add("杭州");
hashSet5.add("大连");

//加入到map
broadcasts.put("K1", hashSet1);
broadcasts.put("K2", hashSet2);
broadcasts.put("K3", hashSet3);
broadcasts.put("K4", hashSet4);
broadcasts.put("K5", hashSet5);
```
覆盖区封装：
```java
HashSet<String> allAreas = new HashSet<String>();
allAreas.add("北京");
allAreas.add("上海");
allAreas.add("天津");
allAreas.add("广州");
allAreas.add("深圳");
allAreas.add("成都");
allAreas.add("杭州");
allAreas.add("大连");
```