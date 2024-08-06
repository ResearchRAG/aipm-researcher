# 网站
本站采用 [Docusaurus 2](https://docusaurus.io/) 构建而成，这是一款现代静态网站生成器。
## 准备工作
本地构建和测试文档前，请先下载安装 [Node.js](https://nodejs.org/en/download/)，随后安装 [Yarn](https://classic.yarnpkg.com/en/)。
在 Windows 系统中，可通过 Node.js 自带的 npm 包管理器安装 Yarn：
```console
npm install --global yarn
```
## 安装步骤
```console
pip install pydoc-markdown
cd website
yarn install
```
## 本地开发
进入网站文件夹，执行以下命令：
```console
pydoc-markdown
yarn start
```
以上命令将启动本地开发服务器并打开浏览器窗口。大部分更改将实时显示，无需重启服务器。