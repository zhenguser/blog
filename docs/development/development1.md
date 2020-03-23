# Linux
## linux基本能指令
更改名称：`mv 要改的名称 改成的名称`
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