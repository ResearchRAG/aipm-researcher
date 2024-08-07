# LangGraph
[LangGraph](https://python.langchain.com/docs/langgraph) 是一个用于构建具有状态、多参与者应用程序的库，这些应用程序可以使用大型语言模型（LLMs）。
此示例使用 LangGraph 自动化对任何给定主题进行深入研究的过程。

## 使用案例
通过使用 LangGraph，可以通过利用具有特殊技能的多个代理，显著提高研究过程的深度和质量。
受到最近的 [STORM](https://arxiv.org/abs/2402.14207) 论文的启发，此示例展示了一个 AI 代理团队如何协作开展对给定主题的研究，从规划到发布。

平均运行生成一份 5-6 页的研究报告，支持多种格式，如 PDF、Docx 和 Markdown。

请注意：此示例仅使用 OpenAI API 以优化性能。

## 多代理团队
研究团队由 7 个 AI 代理组成：
- **人类** - 监督过程并为代理提供反馈的人类参与者。
- **主编** - 监督研究过程并管理团队。这是使用 LangGraph 协调其他代理的“主”代理。
- **研究员** (gpt-researcher) - 一个专门的自主代理，对给定主题进行深入研究。
- **编辑** - 负责规划研究大纲和结构。
- **审稿人** - 根据一组标准验证研究结果的正确性。
- **修订者** - 根据审稿人的反馈修订研究结果，直至满意。
- **作者** - 负责汇编和撰写最终报告。
- **发布者** - 负责以各种格式发布最终报告。

## 工作原理
通常，该过程基于以下阶段：
1. 计划阶段
2. 数据收集与分析
3. 审查与修订
4. 写作与提交
5. 发布

### 架构
<div align="center">
<img align="center" height="600" src="https://cowriter-images.s3.amazonaws.com/multi-agents-gptr.png"></img>
</div>
<br clear="all"/>

### 步骤
更具体地说（如架构图所示），该过程如下：
- 浏览器 (gpt-researcher) - 根据给定的研究任务，在互联网上进行初步研究。
- 编辑 - 根据初步研究规划报告大纲和结构。
- 对于每个大纲主题（并行）：
  - 研究员 (gpt-researcher) - 对子主题进行深入研究并撰写草稿。
  - 审稿人 - 根据一组标准验证草稿的正确性并提供反馈。
  - 修订者 - 根据审稿人反馈修订草稿，直至满意。
- 作者 - 汇编并撰写最终报告，包括引言、结论和参考文献部分。
- 发布者 - 将最终报告发布到多种格式，如 PDF、Docx、Markdown 等。

## 如何运行
1. 安装所需的软件包：
    ```bash
    pip install -r requirements.txt
    ```
3. 更新环境变量
   ```bash
   export OPENAI_API_KEY={您的 OpenAI API 密钥}
   export TAVILY_API_KEY={您的 Tavily API 密钥}
   ```
2. 运行应用程序：
    ```bash
    python main.py
    ```

## 使用方法
要更改研究查询并自定义报告，请编辑主目录中的 `task.json` 文件。
#### Task.json 包含以下字段：
- `query` - 研究查询或任务。
- `model` - 代理使用的 OpenAI LLM。
- `max_sections` - 报告中的最大部分数。每个部分是研究查询的一个子主题。
- `include_human_feedback` - 如果为 true，则用户可以向代理提供反馈。如果为 false，代理将自主工作。
- `publish_formats` - 发布报告的格式。报告将写入 `output` 目录。
- `source` - 进行研究的位置。选项：`web` 或 `local`。对于本地，请添加 `DOC_PATH` 环境变量。
- `follow_guidelines` - 如果为 true，研究报告将遵循以下指南。完成时间会更长。如果为 false，报告生成速度更快，但可能不遵循指南。
- `guidelines` - 报告必须遵循的指南列表。
- `verbose` - 如果为 true，应用程序将向控制台打印详细日志。

#### 示例：
```json
{
  "query": "人工智能是否处于炒作周期？",
  "model": "gpt-4o",
  "max_sections": 3, 
  "publish_formats": { 
    "markdown": true,
    "pdf": true,
    "docx": true
  },
  "include_human_feedback": false,
  "source": "web",
  "follow_guidelines": true,
  "guidelines": [
    "报告必须完全回答原始问题",
    "报告必须按照 APA 格式撰写",
    "报告必须用英语撰写"
  ],
  "verbose": true
}
```

## 部署

```shell
pip install langgraph-cli
langgraph up
```

从那里开始，请参阅[这里](https://github.com/langchain-ai/langgraph-example)的文档，了解如何使用流式和异步端点，以及游乐场。

## NextJS 前端应用程序

React 应用程序（位于 `frontend` 目录）是我们的前端 2.0，我们希望它也能在前端展示后端的强大功能。

它带来了许多新增功能，例如：
 - 拖放用户界面，用于上传和删除 GPTResearcher 用作本地文档的文件。
 - 设置 GPTR 环境变量的图形用户界面。
 - 通过后端模块或 Langgraph 云主机（目前为封闭测试版）触发多代理流程的能力。
 - 稳定性修复
 - 即将推出更多功能！

### 使用 Docker 运行 NextJS React 应用程序

> **步骤 1** - [安装 Docker](https://docs.gptr.dev/docs/gpt-researcher/getting-started#try-it-with-docker) 

> **步骤 2** - 克隆 '.env.example' 文件，将您的 API 密钥添加到克隆的文件中，并将文件保存为 '.env'

> **步骤 3** - 在 docker-compose 文件中注释掉您不想用 Docker 运行的服务。

```bash
$ docker-compose up --build
```

> **步骤 4** - 默认情况下，如果您在 docker-compose 文件中没有取消注释任何内容，此流程将启动 2 个进程：
 - 在 localhost:8000 上运行的 Python 服务器
 - 在 localhost:3000 上运行的 React 应用程序

在任何浏览器上访问 localhost:3000 并享受研究的乐趣！

### 使用 NPM 运行 NextJS React 应用程序

```bash
cd frontend
nvm install 18.17.0
nvm use v18.17.0
npm install --legacy-peer-deps
npm run dev
```