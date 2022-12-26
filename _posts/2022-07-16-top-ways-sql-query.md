---
title: Ways to write optimized SQL Queries in industry
date: 2022-07-16 00:00:00 Z
categories:
- Data_Science
- SQL
- Tutorial
tags:
- featured
layout: post
image: assets/images/optimize-query-blog.webp
comments: true
---

SQL is the most used language in the industries nowadays for maintaining the increasing data fuel to have a data-driven approach in their growth and It is becoming very important to write optimized and efficient queries to achieve this.

Why it is important to produce optimized queries?
=================================================

Nowadays, due to increasing demands of the products and services, companies are shifting to cloud services majorly on Google Cloud Platform, Amazon Web Services, and Microsoft Azure. All the data produced by the company get stored on these platforms and Data related teams in the companies using these services to produce insights related to services and products.

Imagine a company that has a record of dealing **4 Million** Transactions and produces about 5–6 TB of Data every day on the cloud. Now consider a case where GCP charges for $0.5/GB of the query. If you want to see the whole data in a go, you have to process 6000 GB, we should pay about $0.5/GB \* 6000 GB = **$3000 (Rs. 2,10,000) for just one query.**

Also, If an inefficient query contains errors, it will deplete the resources of the production database, resulting in terrible performance or loss of service for other users. It’s crucial to optimize your queries for the least impact on database performance.

So, In this article, we will be covering many ways to write cost-efficient and optimized code.

Ways to optimize the query
==========================

1\. Select Columns instead of Select \*
---------------------------------------

It is one of the most common practices to get familiar with the database we look over all the columns, even if we don’t require it.

Considering a database having 50 Columns and you just want 5 Columns, so you are processing 10x more data which is actually required.

```sql
#Inefficient
SELECT * FROM Employee;

#Efficient 
SELECT first_name,last_name from Employee;
```

2\. Create joins with INNER JOIN not WHERE
------------------------------------------

Consider the below query, where we are joining two tables based on employee id from employee and metadata department table

```sql
SELECT employee.name, department.name  
FROM employee,department  
WHERE employee.id = department.emp_id
```

Now in this query, **WHERE** will be acting as a **CROSS JOIN,** means first it will cross join both the tables and then filter those rows having employee id same in both the table. Consider we have 1000 records in both tables, so first, it will create a table of 10,00,000 records and then filter out the required records. **It is very inefficient. So efficient way is:**

```sql
SELECT employee.name, department.name  
FROM employee  
INNER JOIN department  
ON employee.id = department.emp_id
```

3\. Use WHERE instead of HAVING to apply filters
------------------------------------------------

We have two options to filter in query whether first filter and then group or group and then filter.

**Group and then Filter:** For example, let’s assume 200 sales have been made in the year 2016, and we want to query for the number of sales per customer in 2016. This query would pull 1,000 sales records from the Sales table, then filter for the 200 records generated in the year 2016, and finally count the records in the dataset.

```sql
SELECT Customers.CustomerID, Customers.Name, Count(Sales.SalesID)  
FROM Customers  
   INNER JOIN Sales  
   ON Customers.CustomerID = Sales.CustomerID  
GROUP BY Customers.CustomerID, Customers.Name  
HAVING Sales.LastSaleDate BETWEEN 1/1/2016 AND 12/31/2016
```

**Filter and then Group:** It will limit the record and then group by the elements. This query would pull the 200 records from the year 2016, and then count the records in the dataset. The first step in the **HAVING** clause has been eliminated.

```sql
SELECT Customers.CustomerID, Customers.Name, Count(Sales.SalesID)  
FROM Customers  
  INNER JOIN Sales  
  ON Customers.CustomerID = Sales.CustomerID  
WHERE Sales.LastSaleDate BETWEEN 1/1/2016 AND 12/31/2016
GROUP BY Customers.CustomerID, Customers.Name
```

But, I’m not saying we should not use HAVING at all. **HAVING** should only be used when filtering on an aggregated field. In the query above, we could additionally filter for customers with greater than 5 sales using a HAVING statement.

```sql
SELECT Customers.CustomerID, Customers.Name, Count(Sales.SalesID)  
FROM Customers  
   INNER JOIN Sales  
   ON Customers.CustomerID = Sales.CustomerID  
WHERE Sales.LastSaleDate BETWEEN 1/1/2016 AND 12/31/2016 
GROUP BY Customers.CustomerID, Customers.Name  
HAVING Count(Sales.SalesID) > 5
```

**4\. Use LIMIT to sample query results**

When we have to write queries and want to see the results to check desired outputs, we can sample by using LIMIT so that it will not have to process the whole record just for the sample.

```sql
SELECT name, age  
FROM employee  
LIMIT 5
```

Conclusion
==========

Therefore, we have seen different ways to optimize our code, if they are more other ways, please mentioned them in the below comments. They will be covered in upcoming articles. To get more like these articles please follow and like this post so it can get maximum reach to desired ones.  
Thank you
