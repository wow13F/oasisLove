                                                                 API 接口文档
注，本文所有接口请求方式皆为post请求，需配置请求头：header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},

**注册**

说明：调用此接口传入用户名、邮箱、密码，可注册账号<br>

***必选参数***

username：用户名

password：密码

email：邮箱

接口地址 : http://127.0.0.1:3007/api/reguser

**验证用户名是否被占用**

***必选参数***

username：用户名

接口地址 : http://127.0.0.1:3007/api/isUser


**登录**

注,在调用成功后，必须保存token。

***必选参数***


username：值可以是用户名或者邮箱

password：密码

接口地址 : http://127.0.0.1:3007/api/login

**搜索好友/群**

说明：此接口及以下接口都需要在请求头header中配置一个 Authorization,值为在调用登录接口后返回的 token。例如在uniapp 项目中可以通过 uni.getStorageSync('token') 来获取token

***必选参数***

username: 用户名或者群名

接口地址 : http://127.0.0.1:3007/my/friendsSearch

****
# 标题语法
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
---------
# 段落语法
I really like useing Markdown.

ithink I'll user it do format all of my docments from now on.
---
# 换行语法
在一行的末尾添加两个或多个空格，然后按回车键  
就能看到了

---
# 强调语法
要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。  
**我是粗体**
	*下划线*
***粗体加下划线***

---
# 引用语法

要创建块引用，请在段落前添加一个 > 符号。

> 我是引用

1.first

2.second










