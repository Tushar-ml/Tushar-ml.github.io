---
title: Why I chose to switch from Pandas to PySpark
categories:
- Machine_Learning
- PySpark
tags:
- featured
layout: post
author: tushar
image: assets/images/pyspark-over-pandas.webp
comments: true
---

In recent years, we have seen an increase in data, and as result, it increases the computational time and memory as well. Tools like Pandas which works sequentially fail to achieve the result in the required time in case of large datasets.

There are some packages which can parallelize the pandas operation like Dask, Swift, Ray, etc. Parallelizing the pandas processes causes a lot of speed up but there are certain memory limitations related to memory caused by your system as Pandas load your dataframe into the memory, even if it is not required at that particular instance. This can be a huge problem in the case of desktop systems as we need to keep the UI live.

We need a framework which can solve the above problems, and achieve parallelization under the given memory limitations. [Spark](https://spark.apache.org/) solves some of these problems, under some given thresholds. It is able to achieve faster processing speeds and uses a concept called lazy evaluation (as the name suggests it evaluates data when required), which solves some of the limitations caused by the memory.

Advantages of PySpark over Pandas
=================================

1.  Pandas perform operations on a single machine, whereas PySpark performs operations on multiple machines which makes it **100x times faster\*\*** than Pandas for large datasets.
2.  Pandas adhere to Eager Execution, which means that tasks are completed as soon as possible whereas Pyspark follows **Lazy Execution** which means that a task is not executed until an action is performed.
3.  Pandas DataFrames are incapable of constructing a scalable application, but PySpark DataFrames are **ideal for developing scalable applications.**
4.  The Pandas DataFrame does not guarantee fault tolerance, but PySpark **DataFrame assures fault tolerance.**

When to use PySpark or Pandas?
==============================

As I mentioned earlier, PySpark is 100x faster than Pandas, it is just a half-truth. Pandas and Pyspark have the same runtime for the initial GB of data, as shown in the benchmark below.

For the initial phase up to 20 GB, they are having the same slope, but as file size increased, Pandas goes out of memory and PySpark was able to complete the job successfully.

![Benchmark of PySpark and Pandas](/assets/images/pandas-pyspark-comparison.webp)

Therefore, for small datasets of 10–12 GB, you can prefer Pandas over PySpark due to the same runtime and less complexity, and above that, you have to work using PySpark.

Limitations of PySpark
======================

Everything which is good at something lacks behind in the other areas. This is also the case with PySpark. Some of the limitations of Pyspark are:

1.  PySpark has a higher latency, which results in lower throughput.
2.  The consumption of memory is very high.
3.  Fewer algorithms and libraries are developed to work with PySpark.

From the above discussion, we can conclude that as Data is increasing, the need for more frameworks like PySpark is increasing, which can handle such processes with ease, and if you are an Aspiring Data Scientist, you should start learning about PySpark.
