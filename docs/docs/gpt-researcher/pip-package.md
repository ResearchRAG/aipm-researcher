# PIP 包
[![PyPI 版本](https://badge.fury.io/py/gpt-researcher.svg)](https://badge.fury.io/py/gpt-researcher) 
[![在 Colab 中打开](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ResearchRAG/aipm-researcher/blob/master/examples/pip-run.ipynb) 

🌟 **激动人心的消息！** 现在，您可以无缝地将 `gpt-researcher` 集成到您的应用程序中！

## 安装 AIPM 研究者的步骤

按照以下简单步骤开始使用：

0. **先决条件**：确保您的机器上安装了 Python 3.10+ 💻
1. **安装 gpt-researcher**：从 [PyPi](https://pypi.org/project/gpt-researcher/) 获取官方包。

```bash
pip install gpt-researcher
```

2. **环境变量**：创建一个包含您的 OpenAI API 密钥的 .env 文件，或者直接导出它。

```bash
export OPENAI_API_KEY={您的OpenAI API密钥}
```

```bash
export TAVILY_API_KEY={您的Tavily API密钥}
```

3. **在您自己的代码库中开始使用 AIPM 研究者**

## 示例用法 📝

```python
from gpt_researcher import GPTResearcher
import asyncio

async def get_report(query: str, report_type: str) -> str:
    researcher = GPTResearcher(query, report_type)
    research_result = await researcher.conduct_research()
    report = await researcher.write_report()
    return report

if __name__ == "__main__":
    query = "巴黎奥运会可能获得奖牌榜第一的国家的是那个？"
    report_type = "research_report"

    report = asyncio.run(get_report(query, report_type))
    print(report)
```

## 特定示例 🌐

### 示例 1：研究报告 📚

```python
query = "可再生能源技术的最新发展"
report_type = "research_report"
```

### 示例 2：资源报告 📋

```python
query = "2023 年顶级 AI 会议列表"
report_type = "resource_report"
```

### 示例 3：大纲报告 📝

```python
query = "关于 AI 在教育中影响的文章大纲"
report_type = "outline_report"
```

## 与 Web 框架集成 🌍

### FastAPI 示例

```python
from fastapi import FastAPI
from gpt_researcher import GPTResearcher
import asyncio

app = FastAPI()

@app.get("/report/{report_type}")
async def get_report(query: str, report_type: str) -> dict:
    researcher = GPTResearcher(query, report_type)
    research_result = await researcher.conduct_research()
    report = await researcher.write_report()
    return {"report": report}

# 运行服务器
# uvicorn main:app --reload
```

### Flask 示例

**先决条件**：使用 async extra 安装 flask。

```bash
pip install 'flask[async]'
```

```python
from flask import Flask, request
from gpt_researcher import GPTResearcher

app = Flask(__name__)

@app.route('/report/<report_type>', methods=['GET'])
async def get_report(report_type):
    query = request.args.get('query')
    researcher = GPTResearcher(query, report_type)
    research_result = await researcher.conduct_research()
    report = await researcher.write_report()
    return report

# 运行服务器
# flask run
```

**运行服务器**

```bash
flask run
```

**示例请求**

```bash
curl -X GET "http://localhost:5000/report/research_report?query=巴黎奥运会可能获得奖牌榜第一的国家的是那个？"
```

**注意**：上述代码片段仅为示例。您可以根据需要进行定制。

## 获取器和设置器
如果您对获取研究的更多细节感兴趣，可以使用以下获取器：

### 获取研究来源
来源是收集研究信息所使用的 URL。

```python
source_urls = researcher.get_source_urls()
```

### 获取研究上下文
上下文是研究中检索到的所有信息。它包括来源及其对应的内容。

```python
research_context = researcher.get_research_context()
```

### 获取研究成本
成本是研究过程中消耗的令牌数量。

```python
research_costs = researcher.get_costs()
```

### 设置详细模式
您可以设置详细模式以获取更详细的日志。

```python
researcher.set_verbose(True)
```

### 添加成本
您也可以在研究过程中添加成本，以便跟踪外部使用的成本。

```python
researcher.add_costs(0.22)
```