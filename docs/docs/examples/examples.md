# 示例

### 运行 PIP 包

```python
from gpt_researcher import GPTResearcher
import asyncio

async def main():
    """
    这是一个示例脚本，展示了如何运行研究报告。
    """
    # 查询主题
    query = "最新纳斯达克综合指数的详情是什么？"

    # 报告类型
    report_type = "research_report"

    # 初始化研究员
    researcher = GPTResearcher(query=query, report_type=report_type, config_path=None)
    # 对给定的查询进行研究
    await researcher.conduct_research()
    # 编写报告
    report = await researcher.write_report()
    
    return report

if __name__ == "__main__":
    asyncio.run(main())
```