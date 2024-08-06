# 开始使用
> **步骤 0** - 安装 Python 3.11 或更高版本。[查看这里](https://www.tutorialsteacher.com/python/install-python) 以获取逐步指南。

> **步骤 1** - 下载项目并导航至项目目录

```bash
$ git clone https://github.com/ResearchRAG/aipm-researcher.git 
$ cd gpt-researcher
```

> **步骤 3** - 使用两种方法设置 API 密钥：直接导出它们或将它们存储在 `.env` 文件中。

对于 Linux/临时 Windows 设置，请使用导出方法：

```bash
export OPENAI_API_KEY={您的OpenAI API密钥}
export TAVILY_API_KEY={您的Tavily API密钥}
```

对于更持久的设置，在当前 `gpt-researcher` 目录中创建一个 `.env` 文件，并输入环境变量（不带 `export`）。

- 对于 LLM 提供商，我们推荐使用 **[OpenAI GPT](https://platform.openai.com/docs/guides/gpt)**，但您可以使用任何其他 LLM 模型（包括开源模型）。要了解如何更改 LLM 模型，请参阅[文档](https://docs.gptr.dev/docs/gpt-researcher/llms)页面。
- 对于网络搜索 API，我们推荐使用 **[Tavily Search API](https://app.tavily.com)**，但您也可以通过更改 config/config.py 中的搜索提供程序为 `duckduckgo`、`google`、`bing`、`serper`、`searx` 等来选择其他搜索 API。然后添加相应的环境变量 API 密钥。

## 快速开始

> **步骤 1** - 安装依赖项

```bash
$ pip install -r requirements.txt
```

> **步骤 2** - 使用 FastAPI 运行代理

```bash
$ uvicorn main:app --reload
```

> **步骤 3** - 在任何浏览器中访问 http://localhost:8000，开始研究！

## 使用虚拟环境或 Poetry
根据您的熟悉程度选择：

### 虚拟环境

#### *建立带有激活/停用配置的虚拟环境*

使用 `venv` 包创建名为 `<your_name>` 的虚拟环境，例如 `env`。在 PowerShell/CMD 终端中执行以下命令：

```bash
python -m venv env
```

在 PowerShell/CMD 终端中使用以下激活脚本激活虚拟环境：

```bash
.\env\Scripts\activate
```

在 PowerShell/CMD 终端中运行以下停用脚本停用虚拟环境：

```bash
deactivate
```

#### *为虚拟环境安装依赖项*

激活 `env` 环境后，使用以下命令安装依赖项：

```bash
python -m pip install -r requirements.txt
```

<br />

### Poetry

#### *使用 Poetry 版本 `~1.7.1` 建立 Poetry 依赖项和虚拟环境*

安装项目依赖项，并同时为指定项目创建虚拟环境。执行此命令时，Poetry 读取项目的 "pyproject.toml" 文件以确定所需的依赖项及其版本，确保一致且隔离的开发环境。虚拟环境允许干净地分离项目特定的依赖项，防止与系统范围的包发生冲突，并实现整个项目生命周期中更简单的依赖项管理。

```bash
poetry install
```

#### *激活与 Poetry 项目关联的虚拟环境*

运行此命令后，用户将进入与项目关联的隔离环境中的 shell 会话，为开发和执行提供专用空间。此虚拟环境确保项目依赖项被封装，避免与系统范围的包发生冲突。激活 Poetry shell 对于无缝工作于项目至关重要，因为它确保使用正确版本的依赖项，并提供有利于高效开发和测试的受控环境。

```bash
poetry shell
```

### *运行应用程序*
在 *虚拟环境或 Poetry* 设置上通过执行以下命令启动 FastAPI 应用程序代理：
```bash
python -m uvicorn main:app --reload
```
在任何网络浏览器中访问 http://localhost:8000，开始探索你的研究！

<br />

## 使用 Docker 尝试

> **步骤 1** - 安装 Docker

按照 https://docs.docker.com/engine/install/ 上的说明操作

> **步骤 2** - 创建 `.env` 文件并输入您的 OpenAI 密钥，或者直接导出它

```bash
$ export OPENAI_API_KEY={您的API密钥}
```

> **步骤 3** - 运行应用程序

```bash
$ docker-compose up
```

> **步骤 4** - 在任何浏览器中访问 http://localhost:8000，开始研究！