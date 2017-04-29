1. 本文件无需部署

2. 先安装 package.json 中的node模块

可能需要全局安装 gulp，即 

npm i -g gulp

3. 然后安装 bower.json 中的模块

bower install 

需要全局安装bower

npm i -g bower 


4. 开发时需要启动 gulp 任务

监听代码并事实行编译

gulp

5. src目录中的 data 文件夹为假数据，直接放置到项目的 src 目录即可。

6. 浏览器输入http://localhost:1234/

利用gulp打包生成合并后的文件，该文件问打包后生成文件，所以没有hash值，导致该插件没有效果。
暂时的解决方案是修改源码，不使用hash算法，直接使用时间戳作为版本号。
将代码

try {
         data = fs.readFileSync(dependencyPath);
         hash = crypto.createHash('md5');
         hash.update(data.toString(), 'utf8');
          var _rev=new Date().getTime();
          line = line.replace(groups[2], _rev);
        }
修改为

 try {
          var _rev=new Date().getTime();
          line = line.replace(groups[2], _rev);
        }
即可