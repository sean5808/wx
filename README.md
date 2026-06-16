# SCRM HTML Prototype

一个纯静态 HTML 原型站点，包含 7 个一级菜单页面，并实现了：

- 公共样式抽取（`assets/css/base.css`、`assets/css/layout.css`）
- 公共菜单组件抽取（`components/menu.html` + `assets/js/menu.js`）
- 一级/二级菜单联动高亮（支持二级页面）

## 二级页面

- 拓客转化：获客外链、员工活码、客群活码、客户公海
- 客户管理：客户列表、客户列表（我的）、客户标签、客群标签
- 营销活动：客户群发、客群群发、朋友圈
- 内容中心：素材管理、话术管理、知识库管理
- 智能客服：智能客服、排班客服、投诉管理
- 系统管理：员工管理、权限管理、部门管理、操作日志

## 目录结构

```text
scrm/
  assets/
    css/
      base.css
      layout.css
    js/
      menu.js
  components/
    menu.html
  pages/
    leads-conversion.html
    customer-management.html
    marketing-campaigns.html
    content-center.html
    smart-service.html
    system-management.html
  scripts/
    smoke-test.ps1
  index.html
  run.ps1
```

## 快速运行

1. 安装 Python（用于启动本地静态服务）
2. 在项目根目录执行：

```powershell
.\run.ps1 -Port 8080
```

浏览器访问 `http://127.0.0.1:8080`。

## 基础检查

```powershell
.\scripts\smoke-test.ps1
```

该检查会验证核心页面、菜单组件和公共样式文件是否齐全。

