
# Git
## Git基本指令
### 1. Git基本配置
git config可以配置git的参数，可以使用git config --list查看已经配置的git参数。其中有三个级别的保存位置，--system、--global、--local，分别表示所有用户（本系统）、当前用户（全局）、本地配置（当前目录），默认使用--local。

* 1. 配置用户名及邮箱    
在使用Git提交前，必须配置用户名和邮箱，这些信息会永久保存到历史记录中。
```
git config --global user.name "niuniu"
git config --global user.email zyvj@qq.com
```
* 2. 其他配置   
文本编辑器配置
接下来要设置的是默认使用的文本编辑器。Git 需要你输入一些额外消息的时候，会自动调用一个外部文本编辑器给你用。默认会使用操作系统指定的默认编辑器，一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：
```
$ git config --global core.editor emacs
```
* 3. 差异分析工具   
在解决合并冲突时使用哪种差异分析工具。比如要改用 vimdiff 的话：
```
$ git config --global merge.tool vimdiff
```
Git 可以理解 kdiff3，tkdiff，meld，xxdiff，emerge，vimdiff，gvimdiff，ecmerge，和 opendiff 等合并工具的输出信息。当然，你也可以指定使用自己开发的工具。
### 2. 创建Git仓库
```
git init
```
### 3. 获得Git仓库
如果需要克隆远程仓库，可以使用git clone，比如：
```
git clone https://git.xxxx
```
### 4. 提交更新
* 1. 将代码放入暂存区
```
git add ./readme.me		将指定文件放到暂存区
git add ./		将所有修改和新建的文件放到暂存区
git add *.cpp        # add all cpp files
git add /home/code/  # add all files in /home/code
```
* 2. 将代码放入版本库
```
git commit --m "说明"	将暂存区的代码提交到版本库
git commit -all -m "说明"	将当前工作区和暂存区的所有文件提交到版本库
```
* 3. 查看当前状态
```
git status
```
### 5. 提交历史查看
可以使用git log查看当前工程的所有提交的日志。
```
git log		查看历史提交的日志
git log --online		查看简介版的日志
git log --stat      # 仅显示摘要选项
git log --pretty=oneline        # 定制记录格式
git log --graph     # 图像化分支和版本更新
```
### 6. 撤销更新
```
git reset --hard HEAD~0		回退到上一次提交代码的状态
git reset --hard HEAD~1		回退到上上次提交代码的状态
git reset --hard HEAD [版本号]		回退到指定版本号
git reflog		可以查看每一次切换版本的记录以及所有的版本号
```
### 7. 远程仓库
可以使用git remote查看当前的远程库。
git remote -v可以显示对应的克隆地址。（对于多个远程仓库很有用）

添加远程仓库
```
git remote add [short_name] [url]可以添加新的远程仓库
```

从远程仓库抓取数据
git fetch [remote-name]可以从远程仓库抓取数据到本地。
也可以使用git pull

推送数据到远程仓库
```
git push [remote_name] [branch_name]
```
默认使用origin和master。

查看远程仓库信息
```
git remote show origin
```
远程仓库的删除和重命名
```
git remote rename [old_name] [new_name]
git remote rm [remote_name]
```
### 8. 打Tags
可使用git tag显示当前库中的标签。

添加标签（含附注）
git tag -a v0.1 -m "my version 0.1"
使用如下命令查看Tag日志信息（指定对应标签的名字）
git show v0.1
也可使用SHA-1的提交表示创建tag：
git tag -a v0.2 [SHA-1] -m "my version 0.2"

分享标签
默认的，git push不会推送标签信息到远程仓库，需要通过命令显式推送。
git push origin v0.1
如果需要推送所有标签，使用
git push origin --tags

### 9. Git分支

1. 显示所有分支
```
git branch
```
2. 创建分支
```
git breach dev		创建一个叫dev的分支
```
3. 切换分支
```
git checkout dev		切换为dev分支
```
4. 合并分支
```
git merge dev		回到master分支，执行合并命令，进行合并
```
5. 删除分支
```
git breanch -d dev		回到master分支，执行删除分支命令，删除dev分支
```
**例如**：
创建及切换分支
可以使用下面命令直接切换并创建分支
```
git checkout -b testing
```
等价于
```
$ git branch testing    # 创建testing 分支
$ git checkout testing  # 切换到testing分支
```
注意切换分支时请保持工作目录没有未提交的修改。Git鼓励使用分支，处理完问题之后合并分支即可。

分支合并
将hotfix分支合并到master（主分支）上，需要通过下面命令：
```
$ git checkout master
$ git merge hotfix
```
合并之后可以使用git branch -d hotfix删除分支。
如果合并时存在冲突，需要手工修改。
### 10. 远程仓库管理
修改仓库名
一般来讲，默认情况下，在执行clone或者其他操作时，仓库名都是 origin 如果说我们想给他改改名字，比如我不喜欢origin这个名字，想改为 oschina 那么就要在仓库目录下执行命令:
```
git remote rename origin oschina
```
这样 你的远程仓库名字就改成了oschina，同样，以后推送时执行的命令就不再是 git push origin master 而是 git push oschina master 拉取也是一样的

添加一个仓库
在不执行克隆操作时，如果想将一个远程仓库添加到本地的仓库中，可以执行
```
git remote add origin  仓库地址
```
注意: 1.origin是你的仓库的别名 可以随便改，但请务必不要与已有的仓库别名冲突 2. 仓库地址一般来讲支持 http/https/ssh/git协议，其他协议地址请勿添加

查看当前仓库对应的远程仓库地址
```
git remote -v
```
这条命令能显示你当前仓库中已经添加了的仓库名和对应的仓库地址，通常来讲，会有两条一模一样的记录，分别是fetch和push，其中fetch是用来从远程同步 push是用来推送到远程

修改仓库对应的远程仓库地址
```
git remote set-url origin 仓库地址
```



