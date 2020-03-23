# Docker基本指令
## 基础操作：

1 docker images 查看镜像信息列表 镜像是静态的

2 docker ps -a 查看运行中的所有容器

3 docker pull  [images]:[version]从dockerhub拉取指定镜像

4 docker run -p 8000:80 -tdi --privileged [imageID] [command]  后台启动docker,并指定宿主机端口和docker映射端口。

 -i:以交互模式运行容器，通常与 -t 同时使用；

 -d:后台运行容器，并返回容器ID；

-t:为容器重新分配一个伪输入终端，通常与 -i 同时使用；

--privileged 容器将拥有访问主机所有设备的权限

通常情况下 [command] 填下 /bin/bash 即可。

特殊情况下，如需要在centos镜像中使用systemctl . 则应添加--privileged 并设置[command ]为 init。

5 当镜像通过run 启动后，便会载入到一个动态的container(容器)中运行，此时若需要进入终端交互模式：

sudo docker exec -it [containerID] /bin/bash

交互模式中，使用  ctrl+p+q退出交互 保持运行,使用 exit命令退出并停止容器。

6 在容器非交互模式下，通过docker  start/stop 命令来启动/停止已部署的容器服务。

7 docker rm [containerID] 删除容器

8 docker rmi [imageID] 删除镜像

9 docker cp [YourHostFilePath] [containerID]:[DockerPath]  将宿主机内的指定文件传输至容器内部的指定地址。

## 镜像制作：

1  docker commit [containerID] [ImageName]:[Version] 将修改后的容器重新打包成镜像

2 docker commit -a "runoob.com" -m "my apache" a404c6c174a2 mymysql:v1 将容器a404c6c174a2 保存为新的镜像,并添加提交人信息和说明信息。

-a :提交的镜像作者；

 -c :使用Dockerfile指令来创建镜像；

 -m :提交时的说明文字；

 -p :在commit时，将容器暂停。

3 docker push [ImageID] [repertory_address]提交镜像到云仓库
