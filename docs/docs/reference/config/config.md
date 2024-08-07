---
sidebar_label: config
title: config.config
---

用于存储不同脚本访问的布尔标志状态的配置类。

## 配置对象

```python
class Config(metaclass=Singleton)
```

用于存储不同脚本访问的布尔标志状态的配置类。

#### __init__：

```python
def __init__() -> None
```

初始化 Config 类

#### set_fast_llm_model

```python
def set_fast_llm_model(value: str) -> None
```

设置快速语言模型（LLM）的值。

#### set_smart_llm_model

```python
def set_smart_llm_model(value: str) -> None
```

设置智能语言模型的值。

#### set_fast_token_limit

```python
def set_fast_token_limit(value: int) -> None
```

设置快速令牌限制的值。

#### set_smart_token_limit

```python
def set_smart_token_limit(value: int) -> None
```

设置智能令牌限制的值。

#### set_browse_chunk_max_length

```python
def set_browse_chunk_max_length(value: int) -> None
```

设置浏览网站命令的块最大长度值。

#### set_openai_api_key

```python
def set_openai_api_key(value: str) -> None
```

设置 OpenAI API 密钥的值。

#### set_debug_mode

```python
def set_debug_mode(value: bool) -> None
```

设置调试模式的值。

## APIKeyError 对象

```python
class APIKeyError(Exception)
```

当配置文件 config.py 或环境变量中未设置 API 密钥时引发的异常。

#### check_openai_api_key

```python
def check_openai_api_key(cfg) -> None
```

检查是否在 config.py 或环境变量中设置了 OpenAI API 密钥。

#### check_tavily_api_key

```python
def check_tavily_api_key(cfg) -> None
```

检查是否在 config.py 或环境变量中设置了 Tavily 搜索 API 密钥。

#### check_google_api_key

```python
def check_google_api_key(cfg) -> None
```

检查是否在 config.py 或环境变量中设置了 Google API 密钥。

#### check_serp_api_key

```python
def check_serp_api_key(cfg) -> None
```

检查是否在 config.py 或环境变量中设置了 SERP API 密钥。

#### check_searx_url

```python
def check_searx_url(cfg) -> None
```

检查是否在 config.py 或环境变量中设置了 Searx 的 URL。