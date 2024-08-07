---
sidebar_label: html
title: processing.html
---

HTML处理函数

#### extract_hyperlinks

```python
def extract_hyperlinks(soup: BeautifulSoup,
                       base_url: str) -> list[tuple[str, str]]
```

从BeautifulSoup对象中提取超链接

**参数**：

- `soup` _BeautifulSoup_ - BeautifulSoup对象
- `base_url` _str_ - 基础URL

**返回值**：

  List[Tuple[str, str]]: 提取的超链接列表

#### format_hyperlinks

```python
def format_hyperlinks(hyperlinks: list[tuple[str, str]]) -> list[str]
```

格式化超链接以供用户展示

**参数**：

- `hyperlinks` _List[Tuple[str, str]]_ - 需要格式化的超链接列表

**返回值**：

- `List[str]` - 格式化后的超链接字符串列表