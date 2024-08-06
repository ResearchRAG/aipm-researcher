# 故障排除
我们一直在努力提供更稳定的版本。如果您遇到任何问题，请首先查看我们已解决的问题，或者通过我们的[社区](https://roadmaps.feishu.cn/wiki/RykrwFxPiiU4T7kZ63bc7Lqdnch)向我们咨询。

### 模型：gpt-4 不存在
这与尚未获得使用 gpt-4 的权限有关。根据 OpenAI 的信息，它将在[7月底之前向所有人广泛开放](https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4)。

### 无法加载库 'gobject-2.0-0'

这个问题与我们用于从研究报告生成 PDF 的库WeasyPrint有关。请按照这个指南解决：https://doc.courtbouillon.org/weasyprint/stable/first_steps.html 

或者，您可以手动安装此包

如果是 MacOS 系统，您可以使用以下命令安装此库：
```bash
brew install glib gobject-introspection
```

如果是 Linux 系统，您可以使用以下命令安装此库：
```bash
sudo apt install libglib2.0-dev
```

**无法加载库 'pango'**

如果是 MacOS 系统，您可以使用以下命令安装此库：
```bash
brew install pango
```

如果是 Linux 系统，您可以使用以下命令安装此库：
```bash
sudo apt install libpango-1.0-0
```

**Mac M 芯片用户的解决方法**

如果上述解决方案不起作用，您可以尝试以下方法：
- 安装指向 brew 的 Python 3.11 的新版本：
```bash
brew install python@3.11
```
- 安装所需的库：
```bash
brew install pango glib gobject-introspection
```
- 安装所需的 AIPM 研究者 Python 包：
```bash
pip3.11 install -r requirements.txt
```
- 使用 Python 3.11 (通过 brew) 运行应用程序：
```bash
python3.11 -m uvicorn main:app --reload
```

**处理 URL 时出错**

我们使用 [Selenium](https://www.selenium.dev) 进行网站抓取。有些网站无法被抓取。在这些情况下，请重新启动并尝试再次运行。

**Chrome 版本问题**

许多用户因为 chromedriver 与最新版本的 Chrome 浏览器不兼容而遇到问题。

要使用 [slimjet](https://www.slimjet.com/chrome/google-chrome-old-version.php) 降级您的 Chrome 浏览器，请按照以下步骤操作。首先，访问该网站并向下滚动以找到可用的旧版 Chrome 版本的列表。选择您希望安装的版本，确保它与您的操作系统兼容。
一旦选择了所需版本，请点击相应的链接下载安装程序。在开始安装之前，卸载当前版本的 Chrome 以避免冲突。

重要的是要检查您降级到的版本是否有官方的 chromedriver 可用，在[chromedriver 官网](https://chromedriver.chromium.org/downloads)。

**如果上述方法都不起作用，您可以尝试使用我们的托管测试版**：[https://app.tavily.com](https://app.tavily.com)