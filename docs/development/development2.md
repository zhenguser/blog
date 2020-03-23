# Maven
## 搭建Maven私服
1.	下载一个nexus3的镜像
```
docker pull sonatype/nexus3
```
2.	将容器内部`/var/nexus-data`挂载到主机`/root/nexus-data`目录:
```
docker run -d -p 8081:8081 --name nexus -v /root/nexus-data:/var/nexus-data --restart=always sonatype/nexus3
```
3. 查看正在启动的日志 `docker attach 容器的id`
4. 关闭防火墙:
```
service  iptables stop
```
5. 获取密码：
```
docker exec -it 8a1dcfb84f53 bash
cat /nexus-data/admin.password
```
## 分发构件至远程仓库
mvn install 会将项目生成的构件安装到本地Maven仓库，mvn deploy 用来将项目生成的构件分发到远程Maven仓库。本地Maven仓库的构件只能供当前用户使用，在分发到远程Maven仓库之后，所有能访问该仓库的用户都能使用你的构件。   
我们需要配置POM的distributionManagement来指定Maven分发构件的位置，如下：
```xml
<project>       
  <distributionManagement>    
    <repository>    
      <id>nexus-releases</id>    
      <name>Nexus Release Repository</name>    
      <url>http://127.0.0.1:8080/nexus/content/repositories/releases/</url>    
    </repository>    
    <snapshotRepository>    
      <id>nexus-snapshots</id>    
      <name>Nexus Snapshot Repository</name>    
      <url>http://127.0.0.1:8080/nexus/content/repositories/snapshots/</url>    
    </snapshotRepository>    
  </distributionManagement>      
</project>    
```
Maven区别对待release版本的构件和snapshot版本的构件，snapshot为开发过程中的版本，实时，但不稳定，release版本则比较稳定。Maven会根据你项目的版本来判断将构件分发到哪个仓库。    
一般来说，分发构件到远程仓库需要认证，如果你没有配置任何认证信息，你往往会得到401错误。这个时候，如下在settings.xml中配置认证信息：
```xml
<settings>     
  <servers>    
    <server>    
      <id>nexus-releases</id>    
      <username>admin</username>    
      <password>admin123</password>    
    </server>    
    <server>    
      <id>nexus-snapshots</id>    
      <username>admin</username>    
      <password>admin123</password>    
    </server>      
  </servers>       
</settings>  
```
settings.xml中server元素下id的值必须与POM中repository或snapshotRepository下id的值完全一致。将认证信息放到settings下而非POM中，是因为POM往往是它人可见的，而settings.xml是本地的。

## build标签
```xml
<!-- build根标签 -->
<build>
  
  <!-- 指定打包文件名称（可用于除去jar文件版本号） -->
  <finalName>maven-build-demo</finalName>
  
  <!-- 指定过滤资源目录 -->
  <filters>
    <filter>${basedir}/profiles/test/test.properties</filter>
  </filters>
  
  <!-- 项目资源清单（可以配置多个项目资源） -->
  <resources>
    <!-- 项目资源  -->
    <resource>
      <!-- 资源目录（编译时会将指定资源目录中的内容复制到输出目录） -->
      <directory>src/main/resources</directory>
      <!-- 包含内容（编译时仅复制指定包含的内容） -->
      <includes>
        <include>*.properties</include>
        <include>*.xml</include>
        <include>*.json</include>
      </includes>
      <!-- 排除内容（编译时不复制指定排除的内容） -->
      <excludes>
        <exclude>*.txt</exclude>
      </excludes>
      <!-- 输出目录（默认为${build.outputDirectory}，即target/classes） -->
      <targetPath>${build.outputDirectory}</targetPath>
      <!-- 是否开启资源过滤（需要引入maven-resources-plugin插件）
       |   true：将用过滤资源（filters标签）中的内容 替换 资源中相应的占位符（${Xxxx}）内容
       |   false：不做过滤替换操作
       -->
      <filtering>true</filtering>
    </resource>
  </resources>
  
  <!-- 项目插件清单（需要用到什么插件，就添加什么插件） -->
  <plugins>
    <!-- 项目插件 -->
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
      <!-- 配置参数 -->
      <configuration>
        <!-- 设为可执行程序 -->
        <executable>true</executable>
      </configuration>
      <executions>
        <!-- 执行操作 -->
        <execution>
          <!-- 执行目标 -->
          <goals>
            <goal>repackage</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
    <!-- 项目插件 -->
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-resources-plugin</artifactId>
      <!-- 执行操作清单 -->
      <executions>
        <!-- 执行操作（示例说明：将项目的父级目录下的profiles下的指定文件复制到指定输出目录） -->
        <execution>
          <!-- 标识ID -->
          <id>copy-resources</id>
          <!-- 执行阶段 -->
          <phase>validate</phase>
          <!-- 执行目标（执行的操作） -->
          <goals>
            <goal>copy-resources</goal>
          </goals>
          <!-- 相关参数 -->
          <configuration>
            <outputDirectory>${basedir}/target/classes/</outputDirectory>
            <resources>
              <resource>
                <directory>${basedir}/../profiles</directory>
                <filtering>false</filtering>
                <includes>
                  <include>**/*.xml</include>
                  <include>*.json</include>
                </includes>
              </resource>
            </resources>
          </configuration>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```


