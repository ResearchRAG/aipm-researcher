---
sidebar_label: singleton
title: config.singleton
---

用于确保一个类只有一个实例的单例元类。

## 单例对象

```python
class Singleton(abc.ABCMeta, type)
```

用于确保一个类只有一个实例的单例元类。

#### __call__：

```python
def __call__(cls, *args, **kwargs)
```

单例元类的调用方法。

## 抽象单例对象

```python
class AbstractSingleton(abc.ABC, metaclass=Singleton)
```

用于确保一个类只有一个实例的抽象单例类。