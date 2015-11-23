# 一个基于简单的小工具用于生成文件的列表的json数据

前端小菜，由于只会一点node，所以写一个由于静态文件的目录生成的小工具


# 用法如下

将要需要的素材（图片或文件）发在public/database/下面，按自己的需要建立目录，所有的素材都安置好以后，之间点击run.bat(或者node app.js)将会在publc/data目录下生成文件目录的main.json文件，然后可以通过index.html来访问各个文件夹内容的url,一个是正常的url，一个是markdown的url。

**简单的栗子，只在database文件夹地下放置文件目录**也就是说是简单的两级目录


>public/database
>public/database/folder1
>public/database/folder2
>public/database/folder3
>.......
>public/database/foldern




当然database文件夹底下的文件名字是自己定义的。


## 然而这有什么用处呢？

最早想做这的时候是刚架起微博，想要在上面添加图片，直接上传图片会造成后台数据的增加，而更该死的博客架在了coding.net的演示功能上（免费的），只要一天没人访问服务就会挂起，然后静态的数据就丢了（后面是用七牛的静态空间解决的），所以图片的都是用的url添加的，但是网上的图片的url并不稳定，有些还会有访问限制。前不久学习github的事，了解它有一个github pages可以用来构建静态网页，那个它自然可以用来托管静态资源了。jekyll就是本地运行生成静态文件，然后托送到远程，github pages会实时更新这些静态资源。


所以啦现在我们所要做的和jekyll一样只要生成本地的静态的文件，然后推送到远程的pages虾就行了。

关于github pages可以自己查阅相关的文档，这里简单说明一下，github会允许每个账号创建一个个人的主页和许许多多的的项目主页（视项目稳定），项目主页对应username.github.io仓库 例如我的项目主页就是[http://kinglisky.github.io/](http://kinglisky.github.io/)对应的是我的项目仓库的**kinglisky.github.io**，然后我的PUB项目主页[http://kinglisky.github.io/PUB](http://kinglisky.github.io/PUB)对应的是我的PUB仓库的gh-pages分支,我也说的不是很清楚，小伙伴可以自行百度或谷歌。

所以我只要把本地静态数据推送远程仓库gh-pages底下，我就可已用写好index.html来访问main.json文件生成图片目录。

百闻不如一见，我的静态资源托管：[http://kinglisky.github.io/PUB](http://kinglisky.github.io/PUB)


我的博客[青鲤锦时](http://kingli.coding.io)


