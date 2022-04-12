# 一级、二级、三级封锁协议
        
在运用X锁和S锁对数据对象加锁时，还需要约定一些规则 ，例如何时申请X锁或S锁、持锁时间、何时释放等。称这些规则为封锁协议（Locking Protocol）。对封锁方式规定不同的规则，就形成了各种不同的封锁协议。不同的封锁协议，在不同的程度上为并发操作的正确调度提供一定的保证。
## 一级封锁协议
一级封锁协议是：事务T在修改数据R之前必须先对其加X锁，直到事务结束才释放。事务结束包括正常结束（COMMIT）和非正常结束   （ROLLBACK）。　   
一级封锁协议可以防止丢失修改，并保证事务T是可恢复的。使用一级封锁协议可以解决丢失修改问题。    
在一级封锁协议中，如果仅仅是读数据不对其进行修改，是不需要加锁的，它不能保证可重复读和不读“脏”数据。
## 二级封锁协议
二级封锁协议是：一级封锁协议加上事务T在读取数据R之前必须先对其加S锁，读完后方可释放S锁。    
二级封锁协议除防止了丢失修改，还可以进一步防止读“脏”数据。但在二级封锁协议中，由于读完数据后即可释放S锁，所以它不能保证可重复读。
### 三级封锁协议 
三级封锁协议是：一级封锁协议加上事务T在读取数据R之前必须先对其加S锁，直到事务结束才释放。   　　
三级封锁协议除防止了丢失修改和不读“脏”数据外，还进一步防止了不可重复读。   　
上述三级协议的主要区别在于什么操作需要申请封锁，以及何时释放。