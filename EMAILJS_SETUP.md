# EmailJS 配置指南

## 1. 注册 EmailJS 账号
1. 访问 [EmailJS官网](https://www.emailjs.com/)
2. 点击 "Sign Up" 注册账号
3. 选择免费计划（每月200封邮件）

## 2. 添加 Email 服务
1. 登录后，进入 "Email Services" 页面
2. 点击 "Add New Service"
3. 选择您的邮箱服务商（推荐 Gmail）
4. 按照指引完成邮箱授权

## 3. 创建 Email 模板
1. 进入 "Email Templates" 页面
2. 点击 "Create New Template"
3. 设置模板内容如下：

### 模板变量
```
发件人姓名: {{from_name}}
发件人邮箱: {{from_email}}
发件人电话: {{from_phone}}
公司名称: {{from_company}}
项目类型: {{project_type}}
消息内容: {{message}}
```

### 邮件模板示例
```
主题: 新的项目询价 - {{from_name}}

您好，

收到来自 {{from_name}} 的新项目询价：

联系信息：
- 姓名: {{from_name}}
- 邮箱: {{from_email}}
- 电话: {{from_phone}}
- 公司: {{from_company}}

项目信息：
- 项目类型: {{project_type}}
- 详细描述: {{message}}

请及时回复客户。

此邮件由 JKCE PROBUILD 网站自动发送。
```

## 4. 获取配置信息
配置完成后，您需要获取以下信息：

1. **Public Key**: 在 "Account" → "API Keys" 中找到
2. **Service ID**: 在 "Email Services" 中找到您创建的服务ID
3. **Template ID**: 在 "Email Templates" 中找到您创建的模板ID

## 5. 更新代码配置
将获取到的信息替换 `src/pages/Contact.jsx` 中的以下占位符：

```javascript
// 替换这些占位符
emailjs.init("YOUR_PUBLIC_KEY") // 替换为您的 Public Key

const result = await emailjs.send(
  'YOUR_SERVICE_ID', // 替换为您的 Service ID
  'YOUR_TEMPLATE_ID', // 替换为您的 Template ID
  {
    // ... 其他参数
  },
  'YOUR_PUBLIC_KEY' // 替换为您的 Public Key
)
```

## 6. 测试功能
1. 保存代码更改
2. 重新构建并部署项目
3. 访问联系页面测试表单提交功能

## 注意事项
- 免费计划每月限制200封邮件
- 确保邮箱服务配置正确
- 建议在正式使用前先测试邮件发送功能 