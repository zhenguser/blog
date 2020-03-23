# KMP算法
## 暴力匹配
```java
	/**
	 * @description:
	 * @author: zhengqi
	 * @date: 2020/3/1
	 * @param str1  主串
	 * @param str2  子串
	 * @return:
	 */
	public static int violenceMatch(String str1, String str2) {
		char[] s1 = str1.toCharArray();
		char[] s2 = str2.toCharArray();

		int s1Len = s1.length;
		int s2Len = s2.length;

		int i = 0; // i索引指向s1
		int j = 0; // j索引指向s2
		while (i < s1Len && j < s2Len) {// 保证匹配时，不越界

			if(s1[i] == s2[j]) {//匹配ok
				i++;
				j++;
			} else { //没有匹配成功
				//如果失配（即str1[i]! = str2[j]），令i = i - (j - 1)，j = 0。
				i = i - (j - 1);
				j = 0;
			}
		}
		
		//判断是否匹配成功
		if(j == s2Len) {
			return i - j;
		} else {
			return -1;
		}
	}
```


## KMP算法
### 部分匹配值
>1.在`aba`中，前缀集就是除掉最后一个字符`a`后的子串集合`{a,ab}`，同理后缀集为除掉最前一个字符`a`后的子串集合`{a,ba}`，那么两者最长的重复子串就是`a`，`k=1`;  
>2.在`ababa`中，前缀集是`{a,ab,aba,abab}`，后缀集是`{a,ba,aba,baba}`，二者最长重复子串是`aba`，`k=3`；   
>3.在`abcabcdab`中，前缀集是`{a,ab,abc,abca,abcab,abcabc,abcabcd,abcabcda,abcabcdab}`，后缀集是`{c,bc,abc,dabc,>cdabc,bcdabc,abcdabc,cabcdabc,bcabcdabc}`，二者最长重复的子串是`abc`,`k=3`；
### 求子串的部分匹配表
```java
	/**
	 * @description:
	 * @author: zhengqi
	 * @date: 2020/3/1
	 * @param dest 子串	
	 * @return:
	 */
	public static  int[] kmpNext(String dest) {
		//创建一个next 数组保存部分匹配值
		int[] next = new int[dest.length()];
		next[0] = 0; //如果字符串是长度为1 部分匹配值就是0
		for(int i = 1, j = 0; i < dest.length(); i++) {
			//当dest.charAt(i) != dest.charAt(j) ，我们需要从next[j-1]获取新的j
			//直到我们发现 有  dest.charAt(i) == dest.charAt(j)成立才退出
			//这时kmp算法的核心点
			while(j > 0 && dest.charAt(i) != dest.charAt(j)) {
				j = next[j-1];
			}
			
			//当dest.charAt(i) == dest.charAt(j) 满足时，部分匹配值就是+1
			if(dest.charAt(i) == dest.charAt(j)) {
				j++;
			}
			next[i] = j;
		}
		return next;
	}

```
### KMP算法
```java
	/**
	 * 
	 * @param str1 源字符串
	 * @param str2 子串
	 * @param next 部分匹配表, 是子串对应的部分匹配表
	 * @return 如果是-1就是没有匹配到，否则返回第一个匹配的位置
	 */
	public static int kmpSearch(String str1, String str2, int[] next) {
		
		//遍历 
		for(int i = 0, j = 0; i < str1.length(); i++) {
			
			//需要处理 str1.charAt(i) ！= str2.charAt(j), 去调整j的大小
			//KMP算法核心点, 可以验证...
			while( j > 0 && str1.charAt(i) != str2.charAt(j)) {
				j = next[j-1]; 
			}
			
			if(str1.charAt(i) == str2.charAt(j)) {
				j++;
			}			
			if(j == str2.length()) {//找到了 // j = 3 i 
				return i - j + 1;
			}
		}
		return  -1;
	}


```
