# 配置（Config）

config.py 文件允许您根据特定的需求和偏好定制 AIPM 研究员。

得益于我们出色的社区和贡献，AIPM 研究员支持多种语言模型（LLMs）和检索器（Retrievers）。
此外，AIPM 研究员还可以定制以适应各种报告格式（如 APA）、字数、研究迭代深度等。

AIPM 研究员默认推荐使用 [OpenAI](https://platform.openai.com/docs/overview) 进行 LLM 调用，以及使用 [Tavily API](https://app.tavily.com) 检索实时在线信息。

如下所示，OpenAI 仍然被视为卓越的 LLM。我们假设这种状况将维持一段时间，并且随着时间的推移，价格将继续下降，性能和速度将提高。

<div style={{ marginBottom: '10px' }}>
<img align="center" height="350" src="/img/leaderboard.png" />
</div>

默认的 config.py 文件可以在 `/gpt_researcher/config/` 找到。它支持多种选项，以根据您的需求定制 AIPM 研究员。
您还可以通过在 `config_file` 参数中添加路径来包含您自己的外部 JSON 文件 `config.json`。**请参考 config.py 文件以获得额外的未来支持**。

以下是当前支持的选项列表：

- **`检索器`**：用于检索资源的网络搜索引擎。默认为 `tavily`。选项：`duckduckgo`, `bing`, `google`, `serper`, `searx`。[查看这里](https://github.com/ResearchRAG/aipm-researcher/tree/master/gpt_researcher/retrievers) 以获取支持的检索器
- **`嵌入提供者`**：嵌入模型的提供者。默认为 `google`。选项：`ollama`, `huggingface`, `azureopenai`, `custom`。
- **`语言模型提供者`**：语言模型的提供者。默认为 `google`。选项：`google`, `ollama`, `groq` 等更多选项！
- **`快速语言模型`**：用于快速语言模型操作的模型名称，如摘要生成。默认为 `gemini-1.5-flash`。
- **`智能语言模型`**：用于智能操作的模型名称，如生成研究报告和推理。默认为 `gemini-1.5-pro`。
- **`快速令牌限制`**：快速语言模型响应的最大令牌限制。默认为 `2000`。
- **`智能令牌限制`**：智能语言模型响应的最大令牌限制。默认为 `4000`。
- **`浏览块最大长度`**：在网络资源中浏览的文本块的最大长度。默认为 `8192`。
- **`摘要令牌限制`**：生成摘要的最大令牌限制。默认为 `700`。
- **`温度`**：语言模型响应的采样温度，通常在 0 到 1 之间。较高的值会导致更多的随机性和创造性，而较低的值会导致更集中和确定性的响应。默认为 `0.55`。
- **`总字数`**：文档生成或处理任务的总字数限制。默认为 `800`。
- **`报告格式`**：生成报告的首选格式。默认为 `APA`。考虑格式如 `MLA`, `CMS`, `哈佛风格`, `IEEE` 等。
- **`最大迭代次数`**：查询扩展或搜索细化等过程的最大迭代次数。默认为 `3`。
- **`代理角色`**：代理的角色。这可能用于根据分配的角色定制代理的行为。没有默认值。
- **`最大子主题数`**：生成或考虑的最大子主题数。默认为 `3`。
- **`爬虫`**：用于收集信息的网络爬虫。默认为 `bs`（BeautifulSoup）。您也可以使用 [newspaper](https://github.com/codelucas/newspaper)。
- **`文档路径`**：读取和研究本地文档的路径。默认为空字符串，表示未指定路径。
- **`用户代理`**：网络爬取和网络请求的自定义用户代理字符串。
- **`内存后端`**：用于内存操作的后端，例如临时数据的本地存储。默认为 `local`。

要更改默认配置，您可以简单地在 `.env` 文件中添加上述命名的环境变量，或在本地项目目录中手动导出。

例如，要手动更改搜索引擎和报告格式：
```bash
export RETRIEVER=bing
export REPORT_FORMAT=IEEE
```
请注意，您可能需要导出其他环境变量并获取其他支持的搜索引擎检索器和语言模型提供者的 API 密钥。请参考您的控制台日志以获取进一步的帮助。
要了解更多关于额外的语言模型支持，您可以查看 [这里](/docs/gpt-researcher/llms) 的文档。

您还可以通过在 `config_file` 参数中添加路径来包含您自己的外部 JSON 文件 `config.json`。