# 检索器（Retriever）

检索器是用于为给定研究任务找到最相关文档的搜索引擎。
您可以指定您偏好的网络搜索或使用您选择的任何自定义检索器。

AIPM 研究员默认使用 [Tavily](https://app.tavily.com) 搜索引擎来检索搜索结果。
但您也可以通过设置 `RETRIEVER` 环境变量来使用其他搜索引擎。请注意，每个搜索引擎都有自己的 API 密钥要求和使用限制。

例如：
```bash
RETRIEVER=bing
```

您也可以通过逗号分隔的方式指定多个检索器。系统将按照指定的顺序依次使用每个检索器。

例如：

```bash
RETRIEVER=tavily, arxiv
```

感谢我们的社区，我们已集成了以下网络搜索引擎：
- [Tavily](https://app.tavily.com) - 默认
- [Bing](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) - 环境变量：`RETRIEVER=bing`
- [Google](https://developers.google.com/custom-search/v1/overview) - 环境变量：`RETRIEVER=google`
- [Serp API](https://serpapi.com/) - 环境变量：`RETRIEVER=serpapi`
- [Serper](https://serper.dev/) - 环境变量：`RETRIEVER=serper`
- [Searx](https://searx.github.io/searx/) - 环境变量：`RETRIEVER=searx`
- [Duckduckgo](https://pypi.org/project/duckduckgo-search/) - 环境变量：`RETRIEVER=duckduckgo`
- [Arxiv](https://info.arxiv.org/help/api/index.html) - 环境变量：`RETRIEVER=arxiv`
- [Exa](https://docs.exa.ai/reference/getting-started) - 环境变量：`RETRIEVER=exa`
- [PubMedCentral](https://www.ncbi.nlm.nih.gov/home/develop/api/) - 环境变量: `RETRIEVER=pubmed_central`

## 自定义检索器
您也可以通过设置 `RETRIEVER=custom` 环境变量来使用您选择的任何自定义检索器。
自定义检索器允许您使用任何提供 API 以检索文档的搜索引擎，这些搜索引擎广泛用于企业研究任务。

除了设置 `RETRIEVER` 环境变量外，您还需要设置以下环境变量：
- `RETRIEVER_ENDPOINT`：自定义检索器的端点 URL。
- 检索器所需的其他参数应以 `RETRIEVER_ARG_` 为前缀（例如，`RETRIEVER_ARG_API_KEY`）。

### 示例

```bash
RETRIEVER=custom
RETRIEVER_ENDPOINT=https://api.myretriever.com
RETRIEVER_ARG_API_KEY=YOUR_API_KEY
```

### 响应格式

为了使自定义检索器正确工作，端点的响应应该是以下格式：

```json
[
  {
    "url": "http://example.com/page1", 
    "raw_content": "页面 1 的内容"
  },
  {
    "url": "http://example.com/page2", 
    "raw_content": "页面 2 的内容"
  }
]
```

系统假定此响应格式，并相应地处理来源列表。

缺少检索器？欢迎通过提交问题或拉取请求在我们的 [GitHub]: https://github.com/ResearchRAG/aipm-researcher 页面上为此项目做出贡献。