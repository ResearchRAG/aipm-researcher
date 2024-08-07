# 配置语言模型（LLM）

如[介绍](/docs/gpt-researcher/config)中所述，由于其卓越的性能和速度，OpenAI 是默认的语言模型（LLM）。话虽如此，AIPM 研究员支持各种开源/闭源 LLM，您可以通过添加 `LLM_PROVIDER` 环境变量和相应的配置参数轻松在它们之间切换。
当前支持的 LLM 有 `openai`、`google`（Gemini）、`azureopenai`、`ollama`、`anthropic`、`mistral`、`huggingface` 和 `groq`。

使用任何模型至少需要更新 `LLM_PROVIDER` 参数并传递 LLM 提供者 API 密钥。您可能还需要更新 `SMART_LLM_MODEL` 和 `FAST_LLM_MODEL` 环境变量。
要了解更多支持定制选项，请看[这里](/gpt-researcher/config)。

**请注意**：AIPM 研究员在 GPT 模型上进行了优化和大量测试。其他一些模型可能会遇到上下文限制错误和意外响应。
请在我们的[Discord 社区](https://discord.gg/DUmbTebB)频道提供任何反馈，以便我们更好地改进体验和性能。

下面您可以找到如何配置各种支持的 LLM 的示例。

## 自定义 OpenAI
使用 [llama.cpp 服务器](https://github.com/ggerganov/llama.cpp/blob/master/examples/server/README.md#quick-start) 创建本地 OpenAI API。

### 自定义 OpenAI API LLM
```bash
# 使用自定义 OpenAI API LLM 提供者
LLM_PROVIDER="openai"

# 设置自定义 OpenAI API url
OPENAI_BASE_URL="http://localhost:1234/v1"
# 设置自定义 OpenAI API 密钥
OPENAI_API_KEY="您的密钥"

# 指定自定义 OpenAI API llm 模型  
FAST_LLM_MODEL="gpt-4o-mini"
# 指定自定义 OpenAI API llm 模型  
SMART_LLM_MODEL="gpt-4o"
```
### 自定义 OpenAI API 嵌入
```bash
# 使用自定义 OpenAI API 嵌入提供者
EMBEDDING_PROVIDER="custom"

# 设置自定义 OpenAI API url
OPENAI_BASE_URL="http://localhost:1234/v1"
# 设置自定义 OpenAI API 密钥
OPENAI_API_KEY="您的密钥"

# 指定自定义 OpenAI API 嵌入模型   
OPENAI_EMBEDDING_MODEL="custom_model"
```

### Azure OpenAI
```bash
EMBEDDING_PROVIDER="azureopenai"
AZURE_OPENAI_API_KEY="您的密钥"
```

## Ollama

AIPM 研究员支持 Ollama LLM 和嵌入。您可以选择其中之一或全部。
使用 [Ollama](http://www.ollama.com)，您可以设置以下环境变量

```bash
# 将 Ollama 用作 LLM 和嵌入提供者
LLM_PROVIDER=ollama

# 要使用的 Ollama 端点
OLLAMA_BASE_URL=http://localhost:11434

# 指定 Ollama 支持的 LLM 模型之一
FAST_LLM_MODEL=llama3
# 指定 Ollama 支持的 LLM 模型之一 
SMART_LLM_MODEL=llama3 
# 要使用的温度，默认为 0.55
TEMPERATURE=0.55
```

**可选** - 您也可以使用 ollama 进行嵌入
```bash
EMBEDDING_PROVIDER=ollama
# 指定 Ollama 支持的嵌入模型之一 
OLLAMA_EMBEDDING_MODEL=nomic-embed-text
```

## Groq

GroqCloud 提供高级 AI 硬件和软件解决方案，旨在实现惊人的快速 AI 推理性能。
要在 GPT-Researcher 中利用 Groq，您将需要一个 GroqCloud 账户和一个 API 密钥。（_注：__ Groq 有一个非常 _慷慨的免费层_。）

### 注册
- 您可以在此处注册：[https://console.groq.com/login](https://console.groq.com/login) 
- 登录后，您可以在此处获取 API 密钥：[https://console.groq.com/keys](https://console.groq.com/keys) 

- 一旦您拥有 API 密钥，您需要使用变量名 `GROQ_API_KEY="*********************"` 添加到您的 `系统环境`。

### 更新环境变量
最后，您需要配置 GPT-Researcher 提供者和模型变量：

```bash
# 要使用 Groq，将 llm 提供者设置为 groq
LLM_PROVIDER=groq
GROQ_API_KEY=[您的密钥]

# 设置 Groq 支持的 LLM 模型之一
FAST_LLM_MODEL=Mixtral-8x7b-32768

# 设置 Groq 支持的 LLM 模型之一
SMART_LLM_MODEL=Mixtral-8x7b-32768 

# 要使用的温度，默认为 0.55
TEMPERATURE=0.55
```

_注：__ 截至本文档撰写之时（2024 年 5 月），Groq 提供的语言模型包括：

* Llama3-70b-8192
* Llama3-8b-8192
* Mixtral-8x7b-32768
* Gemma-7b-it

## Anthropic
[Anthropic](https://www.anthropic.com/) 是一家专注于 AI 安全和研究的公司，也是 Claude 的创造者。此页面涵盖了 Anthropic 模型与 LangChain 之间的所有集成。

```bash
LLM_PROVIDER=anthropic
ANTHROPIC_API_KEY=[您的密钥]
```

然后，您可以定义快速和智能 LLM 模型，例如：
```bash
FAST_LLM_MODEL=claude-2.1
SMART_LLM_MODEL=claude-3-opus-20240229
```

## Mistral
注册 [Mistral API 密钥](https://console.mistral.ai/users/api-keys/)。
然后更新相应的环境变量，例如：
```bash
LLM_PROVIDER=mistral
ANTHROPIC_API_KEY=[您的密钥]
FAST_LLM_MODEL=open-mistral-7b
SMART_LLM_MODEL=mistral-large-latest
```

## Together AI
[Together AI](https://www.together.ai/) 提供了一个 API，可以在几行代码中查询 [50+ 领先的开源模型](https://docs.together.ai/docs/inference-models)。
然后更新相应的环境变量，例如：
```bash
LLM_PROVIDER=together
TOGETHER_API_KEY=[您的密钥]
FAST_LLM_MODEL=meta-llama/Llama-3-8b-chat-hf
SMART_LLM_MODEL=meta-llama/Llama-3-70b-chat-hf
```

## HuggingFace
这种集成需要一些额外的工作。按照[此指南](https://python.langchain.com/v0.1/docs/integrations/chat/huggingface/)了解更多。
按照上述教程后，更新环境变量：

```bash
LLM_PROVIDER=huggingface
HUGGINGFACE_API_KEY=[您的密钥]
FAST_LLM_MODEL=HuggingFaceH4/zephyr-7b-beta
SMART_LLM_MODEL=HuggingFaceH4/zephyr-7b-beta
```

## Google Gemini
[此处](https://ai.google.dev/gemini-api/docs/api-key) 注册以获取 Google Gemini API 密钥并更新以下环境变量：

请确保将快速和智能模型更新为相应的有效 Gemini 模型。
```bash
LLM_PROVIDER=google
GOOGLE_API_KEY=[您的密钥]
```