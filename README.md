# DishF5ve
使用前请先配置```server```文件夹下的```config.js```文件。


## API 列表
Method|route | 功能|返回格式
-|-|-|-|
```GET```|/weapp/catagory | 获取所有catagory的列表|JSON


## 数据库
#### Database Name: ```dish```
#### Table List:
**1. catagory表：**

| 字段名     | 字段类型    |   描述      |
|------------|-------------|-------------|
| id         | varchar(50) |             |
| cataName   | text        | 分类名称    |
| cataDetail | longtext    |             |
| createdAt  | bigint(20)  |             |
| updatedAt  | bigint(20)  |             |
| version    | bigint(20)  |             |
| imageUrl   | text        | 分类封面图片|
| type       | text        | 分类标准    |

