# 常见开发指令
## GIT指令
* 查看分支：git branch   
* 创建分支：git branch name   
* 切换分支：git checkout name    
* 创建+切换分支：git checkout –b name   
* 合并某分支到当前分支：git merge name   
* 删除分支：git branch –d name   
* 第一次推送master分支：git push -u origin master   
* 推送master分支：git push origin master   
* 指定本地dev分支与远程origin/dev分支的链接：git branch --set-upstream dev origin/dev   
* 查看下历史记录：git log
* 获取到版本号：git reflog 
* 回退到上一个版本：git reset --hard HEAD^
* 回退到前100个版本：git reset --hard HEAD~100
* 通过版本号回退：git reset --hard 版本号
* 工作区做的修改全部撤销或恢复commit之前所删除的文件：git checkout --readme.txt（注：添加到暂缓区的不能撤销）

生成SSH密钥：ssh-keygen -t rsa –C “youremail@example.com”

* 创建并切换分支：git checkout -b 分支 （相当于：git branch 分支，git checkout 分支）
* 把dev分支上的内容合并：git merge dev 
* 禁用”Fast forward”模式合并：git merge –no-ff -m “注释” dev

| 命令             | 作用            |
| :---------------:|:---------------:|
| git diff         | 工作区 vs 暂存区 |
| git diff head    | 工作区 vs 版本库 |
| git diff --cached| 暂存区 vs 版本库 |

* 在dev分支上做开发，就必须把远程的origin的dev分支到本地来，于是可以使用命令创建本地dev分支：git checkout –b dev origin/dev
## Docker指令
### Docker容器信息
>* 查看docker容器版本
>docker version
>* 查看docker容器信息
>docker info
>* 查看docker容器帮助
>docker --help
### 镜像操作
**2.1、镜像查看**
>* 列出本地images
docker images
>* 含中间映像层
docker images -a
## Linux指令
更改名称：`mv 要改的名称 改成的名称`
mv
# Linux
## Linux系统配置静态IP地址
1. 获取ipd地址：
```
dhclient
```
2. 查看ip地址：
```
ip addr
```
3. 修改IP地址:
```
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```
4. 修改文件内容,将`ONBOOT=no`改为`ONBOOT=yes`，表示网卡随系统一起启动，将`BOOTPROTO=dhcp`改为`BOOTPROTO=static`，dhcp表示自动获取IP地址，static表示手动设置静态IP地址。   
增加这几行内容：
```
IPADDR=192.168.30.128
NETMASK=255.255.255.0
GATEWAY=192.168.30.1
DNS1=119.29.29.29
```
5. 重启网络服务:
```
systemctl restart network.service
```
## Linux安装Docker
1. 通过`uname -r`命令查看你当前的内核版本:
```
uname -r
```
2. 使用 root 权限登录 Centos。确保 yum 包更新到最新:
```
yum -y update
```
3.	卸载旧版本(如果安装过旧版本的话):
```
yum remove docker docker-common docker-selinux docker-engine
```
4. 安装需要的软件包，`yum-util`提供`yum-config-manager`功能，另外两个是`devicemapper`驱动依赖:
```
yum install -y yum-utils device-mapper-persistent-data lvm2
```
5. 添加阿里云的docker源
```
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
6.	可以查看所有仓库中所有docker版本，并选择特定版本安装:
```
yum list docker-ce --showduplicates | sort -r
```
7.	安装docker:
```
yum install docker-ce-17.12.0.ce
```
8.	启动并加入开机启动:
```
systemctl start docker
systemctl enable docker
```
9.	验证安装是否成功(有client和service两部分表示docker安装启动都成功了):
```
docker version
```
