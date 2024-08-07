# 定制化研究（Tailored Research）
AIPM 研究员软件包允许您根据需求定制研究，例如针对特定来源或本地文档进行研究，并可指定代理提示指令以进行研究。

### 针对特定来源的研究 📚

您可以通过提供 URL 列表来指定 AIPM 研究员要研究的来源。然后，AIPM 研究员将在提供的来源上进行研究。

```python
from gpt_researcher import GPTResearcher
import asyncio

async def get_report(query: str, report_type: str, sources: list) -> str:
    researcher = GPTResearcher(query=query, report_type=report_type, source_urls=sources)
    await researcher.conduct_research()
    report = await researcher.write_report()
    return report

if __name__ == "__main__":
    query = "人工智能的最新进展是什么？"
    report_type = "research_report"
    sources = ["https://en.wikipedia.org/wiki/Artificial_intelligence", "https://www.ibm.com/watson/ai"]

    report = asyncio.run(get_report(query, report_type, sources))
    print(report)
```

### 指定代理提示 📝

您可以指定代理提示指令，以指导研究的方向并定制报告的布局。
只需将提示作为 `query` 参数传递给 `GPTResearcher` 类，并使用 "custom_report" 作为 `report_type`。

```python
from gpt_researcher import GPTResearcher
import asyncio

async def get_report(prompt: str, report_type: str) -> str:
    researcher = GPTResearcher(query=prompt, report_type=report_type)
    await researcher.conduct_research()
    report = await researcher.write_report()
    return report
    
if __name__ == "__main__":
    report_type = "custom_report"
    prompt = "研究人工智能的最新进展，并以 APA 格式提供详细报告，包括来源。"

    report = asyncio.run(get_report(prompt=prompt, report_type=report_type))
    print(report)
```

### 本地文档研究 📄
您可以通过提供文档路径，指导 AIPM 研究员对本地文档进行研究。当前支持的文件格式包括：PDF、纯文本、CSV、Excel、Markdown、PowerPoint 和 Word 文档。

*步骤 1*：添加环境变量 `DOC_PATH` 指向您的文档所在文件夹。

例如：

```bash
export DOC_PATH="./my-docs"
```

*步骤 2*：在创建 `GPTResearcher` 类的实例时，将 `report_source` 参数作为 `"local"` 传递。

AIPM 研究员将在提供的文档上进行研究。

```python
from gpt_researcher import GPTResearcher
import asyncio

async def get_report(query: str, report_type: str, report_source: str) -> str:
    researcher = GPTResearcher(query=query, report_type=report_type, report_source=report_source)
    await researcher.conduct_research()
    report = await researcher.write_report()
    return report
    
if __name__ == "__main__":
    query = "根据我的文档，你能告诉我关于我自己的一些信息吗？"
    report_type = "research_report"
    report_source = "local" # "local" 或 "web"

    report = asyncio.run(get_report(query=query, report_type=report_type, report_source=report_source))
    print(report)
```

### LangChain 文档研究 🦜️🔗
您可以指导 AIPM 研究员对一系列 langchain 文档实例进行研究。

例如：

```python
from langchain_core.documents import Document
from typing import List
from gpt_researcher import GPTResearcher
from langchain_postgres.vectorstores import PGVector
from langchain_openai import OpenAIEmbeddings
from sqlalchemy import create_engine
import asyncio

CONNECTION_STRING = 'postgresql://someuser:somepass@localhost:5432/somedatabase'

def get_retriever(collection_name: str, search_kwargs: Dict[str, str]):
    engine = create_engine(CONNECTION_STRING)
    embeddings = OpenAIEmbeddings()

    index = PGVector.from_existing_index(
        use_jsonb=True,
        embedding=embeddings,
        collection_name=collection_name,
        connection=engine,
    )

    return index.as_retriever(search_kwargs=search_kwargs)

async def get_report(query: str, report_type: str, report_source: str, documents: List[Document]) -> str:
    researcher = GPTResearcher(query=query, report_type=report_type, report_source=report_source, documents=documents)
    await researcher.conduct_research()
    report = await researcher.write_report()
    return report

if __name__ == "__main__":
    query = "根据我的文档，关于“犀利商学人商业计划书”你能告诉我什么？"
    report_type = "research_report"
    report_source = "langchain_documents"

    # 使用 LangChain 检索器获取有关奶酪的所有文档
    langchain_retriever = get_retriever("cheese_collection", {"k": 3})
    documents = langchain_retriever.invoke("关于商业计划书的所有文档")
    report = asyncio.run(get_report(query=query, report_type=report_type, report_source=report_source, documents=documents))
    print(report)
```