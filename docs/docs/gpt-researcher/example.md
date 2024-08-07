# 代理示例

如果您有兴趣将 AIPM 研究者作为独立代理使用，您可以轻松地将其导入到任何现有的 Python 项目中。以下是一个调用代理生成研究报告的例子：

```python
from gpt_researcher import GPTResearcher
import asyncio

# 最好在脚本顶部定义全局常量
QUERY = "最新纳斯达克综合指数的详情是什么？"
REPORT_TYPE = "research_report"

async def fetch_report(query, report_type):
    """
    根据提供的查询和报告类型获取研究报告。
    """
    researcher = GPTResearcher(query=query, report_type=report_type, config_path=None)
    await researcher.conduct_research()
    report = await researcher.write_report()
    return report

async def generate_research_report():
    """
    这是一个示例脚本，执行异步主函数来运行研究报告。
    """
    report = await fetch_report(QUERY, REPORT_TYPE)
    print(report)

if __name__ == "__main__":
    asyncio.run(generate_research_report())
```

您可以进一步增强这个示例，使用返回的报告作为上下文，生成有价值的内容，如新闻文章、营销内容、电子邮件模板、通讯等。

您也可以使用 AIPM 研究者收集有关代码文档、商业分析、财务信息等的信息。所有这些都可以用于完成需要事实性和高质量实时信息的更复杂任务。