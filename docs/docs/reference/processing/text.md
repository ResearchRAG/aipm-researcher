---
sidebar_label: text
title: processing.text
---

文本处理函数

#### split_text

```python
def split_text(text: str,
               max_length: int = 8192) -> Generator[str, None, None]
```

将文本分割成长度不超过指定最大长度的多个块。

**参数**：

- `text` _str_ - 要分割的文本
- `max_length` _int, 可选_ - 每个文本块的最大长度，默认为 8192。

**生成**：

- `str` - 下一个文本块。

**引发**：

- `ValueError` - 如果文本长度超过最大长度。

#### summarize_text

```python
def summarize_text(url: str,
                   text: str,
                   question: str,
                   driver: Optional[WebDriver] = None) -> str
```

使用 OpenAI API 对文本进行摘要。

**参数**：

- `url` _str_ - 文本的 URL。
- `text` _str_ - 要摘要的文本。
- `question` _str_ - 向模型提出的的问题。
- `driver` _WebDriver_ - 用于滚动页面的 webdriver。

**返回值**：

- `str` - 文本的摘要。

#### scroll_to_percentage

```python
def scroll_to_percentage(driver: WebDriver, ratio: float) -> None
```

滚动到页面的指定百分比位置。

**参数**：

- `driver` _WebDriver_ - 要使用的 webdriver。
- `ratio` _float_ - 要滚动到的百分比。

**引发**：

- `ValueError` - 如果比率不在 0 到 1 之间。

#### create_message

```python
def create_message(chunk: str, question: str) -> Dict[str, str]
```

为聊天补全创建消息。

**参数**：

- `chunk` _str_ - 要摘要的文本块。
- `question` _str_ - 要回答的问题。

**返回值**：

  Dict[str, str]: 要发送到聊天补全的消息。

#### write_to_file

```python
def write_to_file(filename: str, text: str) -> None
```

将文本写入文件。

**参数**：

- `text` _str_ - 要写入的文本。
- `filename` _str_ - 要写入的文件名。