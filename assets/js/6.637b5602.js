(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{217:function(a,t,_){a.exports=_.p+"assets/img/java1-1.d8be2d80.png"},218:function(a,t,_){a.exports=_.p+"assets/img/java1-2.98723df2.png"},249:function(a,t,_){"use strict";_.r(t);var v=_(19),i=Object(v.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"java线程的6种状态及切换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java线程的6种状态及切换"}},[a._v("#")]),a._v(" Java线程的6种状态及切换")]),a._v(" "),v("p",[a._v("Java中线程的状态分为6种。")]),a._v(" "),v("blockquote",[v("ol",[v("li",[a._v("初始(NEW)：新创建了一个线程对象，但还没有调用start()方法。")]),a._v(" "),v("li",[a._v("运行(RUNNABLE)：Java线程中将就绪（ready）和运行中（running）两种状态笼统的称为“运行”。\n线程对象创建后，其他线程(比如main线程）调用了该对象的start()方法。该状态的线程位于可运行线程池中，等待被线程调度选中，获取CPU的使用权，此时处于就绪状态（ready）。就绪状态的线程在获得CPU时间片后变为运行中状态（running）。")]),a._v(" "),v("li",[a._v("阻塞(BLOCKED)：表示线程阻塞于锁。")]),a._v(" "),v("li",[a._v("等待(WAITING)：进入该状态的线程需要等待其他线程做出一些特定动作（通知或中断）。")]),a._v(" "),v("li",[a._v("超时等待(TIMED_WAITING)：该状态不同于WAITING，它可以在指定的时间后自行返回。")]),a._v(" "),v("li",[a._v("终止(TERMINATED)：表示该线程已经执行完毕。")])])]),a._v(" "),v("h2",{attrs:{id:"线程的状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程的状态"}},[a._v("#")]),a._v(" 线程的状态")]),a._v(" "),v("p",[v("img",{attrs:{src:_(217),alt:"avatar"}})]),a._v(" "),v("h3",{attrs:{id:"_1-初始状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始状态"}},[a._v("#")]),a._v(" 1. 初始状态")]),a._v(" "),v("p",[a._v("实现Runnable接口和继承Thread可以得到一个线程类，new一个实例出来，线程就进入了初始状态。")]),a._v(" "),v("h3",{attrs:{id:"_2-就绪状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-就绪状态"}},[a._v("#")]),a._v(" 2.就绪状态")]),a._v(" "),v("ol",[v("li",[a._v("就绪状态只是说你资格运行，调度程序没有挑选到你，你就永远是就绪状态。")]),a._v(" "),v("li",[a._v("调用线程的start()方法，此线程进入就绪状态。")]),a._v(" "),v("li",[a._v("当前线程sleep()方法结束，其他线程join()结束，等待用户输入完毕，某个线程拿到对象锁，这些线程也将进入就绪状态。")]),a._v(" "),v("li",[a._v("当前线程时间片用完了，调用当前线程的yield()方法，当前线程进入就绪状态。")]),a._v(" "),v("li",[a._v("锁池里的线程拿到对象锁后，进入就绪状态。")])]),a._v(" "),v("h3",{attrs:{id:"_3-运行中状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行中状态"}},[a._v("#")]),a._v(" 3.运行中状态")]),a._v(" "),v("p",[a._v("线程调度程序从可运行池中选择一个线程作为当前线程时线程所处的状态。这也是线程进入运行状态的唯一一种方式。")]),a._v(" "),v("h3",{attrs:{id:"_4-阻塞状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-阻塞状态"}},[a._v("#")]),a._v(" 4.阻塞状态")]),a._v(" "),v("p",[a._v("阻塞状态是线程阻塞在进入synchronized关键字修饰的方法或代码块(获取锁)时的状态。")]),a._v(" "),v("h3",{attrs:{id:"_5-等待"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-等待"}},[a._v("#")]),a._v(" 5.等待")]),a._v(" "),v("p",[a._v("处于这种状态的线程不会被分配CPU执行时间，它们要等待被显式地唤醒，否则会处于无限期等待的状态。")]),a._v(" "),v("h3",{attrs:{id:"_6-超时等待"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-超时等待"}},[a._v("#")]),a._v(" 6.超时等待")]),a._v(" "),v("p",[a._v("处于这种状态的线程不会被分配CPU执行时间，不过无须无限期等待被其他线程显示地唤醒，在达到一定时间后它们会自动唤醒。")]),a._v(" "),v("h3",{attrs:{id:"_7-终止状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-终止状态"}},[a._v("#")]),a._v(" 7.终止状态")]),a._v(" "),v("ol",[v("li",[a._v("当线程的run()方法完成时，或者主线程的main()方法完成时，我们就认为它终止了。这个线程对象也许是活的，但是，它已经不是一个单独执行的线程。线程一旦终止了，就不能复生。")]),a._v(" "),v("li",[a._v("在一个终止的线程上调用start()方法，会抛出java.lang.IllegalThreadStateException异常。")])]),a._v(" "),v("h2",{attrs:{id:"等待队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#等待队列"}},[a._v("#")]),a._v(" 等待队列")]),a._v(" "),v("ul",[v("li",[a._v("调用obj的wait(), notify()方法前，必须获得obj锁，也就是必须写在synchronized(obj) 代码段内。")]),a._v(" "),v("li",[a._v("与等待队列相关的步骤和图\n"),v("img",{attrs:{src:_(218),alt:"avatar"}})])]),a._v(" "),v("ol",[v("li",[a._v("线程1获取对象A的锁，正在使用对象A。")]),a._v(" "),v("li",[a._v("线程1调用对象A的wait()方法。")]),a._v(" "),v("li",[a._v("线程1释放对象A的锁，并马上进入等待队列。")]),a._v(" "),v("li",[a._v("锁池里面的对象争抢对象A的锁。")]),a._v(" "),v("li",[a._v("线程5获得对象A的锁，进入synchronized块，使用对象A。")]),a._v(" "),v("li",[a._v("线程5调用对象A的notifyAll()方法，唤醒所有线程，所有线程进入同步队列。若线程5调用对象A的notify()方法，则唤醒一个线程，不知道会唤醒谁，被唤醒的那个线程进入同步队列。")]),a._v(" "),v("li",[a._v("notifyAll()方法所在synchronized结束，线程5释放对象A的锁。")]),a._v(" "),v("li",[a._v("同步队列的线程争抢对象锁，但线程1什么时候能抢到就不知道了。")])]),a._v(" "),v("h2",{attrs:{id:"同步队列状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步队列状态"}},[a._v("#")]),a._v(" 同步队列状态")]),a._v(" "),v("ul",[v("li",[a._v("当前线程想调用对象A的同步方法时，发现对象A的锁被别的线程占有，此时当前线程进入同步队列。简言之，同步队列里面放的都是想争夺对象锁的线程。")]),a._v(" "),v("li",[a._v("当一个线程1被另外一个线程2唤醒时，1线程进入同步队列，去争夺对象锁。")]),a._v(" "),v("li",[a._v("同步队列是在同步的环境下才有的概念，一个对象对应一个同步队列。")])]),a._v(" "),v("h2",{attrs:{id:"常见方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见方法"}},[a._v("#")]),a._v(" 常见方法")]),a._v(" "),v("ol",[v("li",[a._v("Thread.sleep(long millis)，一定是当前线程调用此方法，当前线程进入TIMED_WAITING状态，但不释放对象锁，millis后线程自动苏醒进入就绪状态。作用：给其它线程执行机会的最佳方式。")]),a._v(" "),v("li",[a._v("Thread.yield()，一定是当前线程调用此方法，当前线程放弃获取的CPU时间片，但不释放锁资源，由运行状态变为就绪状态，让OS再次选择线程。作用：让相同优先级的线程轮流执行，但并不保证一定会轮流执行。实际中无法保证yield()达到让步目的，因为让步的线程还有可能被线程调度程序再次选中。Thread.yield()不会导致阻塞。该方法与sleep()类似，只是不能由用户指定暂停多长时间。")]),a._v(" "),v("li",[a._v("t.join()/t.join(long millis)，当前线程里调用其它线程t的join方法，当前线程进入WAITING/TIMED_WAITING状态，当前线程不会释放已经持有的对象锁。线程t执行完毕或者millis时间到，当前线程进入就绪状态。")]),a._v(" "),v("li",[a._v("obj.wait()，当前线程调用对象的wait()方法，当前线程释放对象锁，进入等待队列。依靠notify()/notifyAll()唤醒或者wait(long timeout) timeout时间到自动唤醒。")]),a._v(" "),v("li",[a._v("obj.notify()唤醒在此对象监视器上等待的单个线程，选择是任意性的。notifyAll()唤醒在此对象监视器上等待的所有线程。")])]),a._v(" "),v("p",[a._v("转载：https://blog.csdn.net/qq_22771739/article/details/82529874")])])}),[],!1,null,null,null);t.default=i.exports}}]);