---
layout: post
author: tushar
title: Neural Network - should not be the first solution
category: [ Machine_Learning ]
image: assets/images/neural-network-image.webp
tags: [ featured ]
comments: true
---
Nowadays, we are seeing different complex applications of Neural Network based algorithms like OpenAI DALL-E, DeepFake, etc, which makes us think is it possible that ANNs (Artificial Neural Networks) can solve and are suitable for every problem? Let’s figure it out.

For those who don’t have an idea about what are Neural Networks, then in Layman's terms, it is an algorithm which is a replica of the Human Brain and tries to understand complex patterns in data easily. You can learn more about it [here](https://www.investopedia.com/terms/n/neuralnetwork.asp){:target="_blank"}.

Why is so much Hype around Neural Networks?
===========================================

There are possibly 2 reasons which are responsible for it: Data and Computational Power.

1.  **Data:** From the last decade, there is being exponential growth in Data collection recorded, which contains almost every behaviour, and pattern of activities observed regularly, and as Data increases, it makes ANNs more powerful and generalized to a unified set of equations.

2. **Computational Power:** As data is increasing, processing or computation power is also needed to be high, from the past couple of years, we have seen that major driver companies like Nvidia and Tesla had developed breakthroughs in computational hardware, which are not possible around 20–30 years ago, which becomes the most obvious reasons why ANNs not popular in that era.

Disadvantages of Neural Networks
================================

Even though they are powerful, still some properties of ANNs make them a difficult to use algorithms

1.  **Lack of Explainability (or Black Box):** In simple terms, we don’t have any idea why the model came up with this output, or what features emphasize to come up with it. This is the reason why some of the organizations involve decisions like for example, the user is not creditworthy, as they have to answer the user on what basis this decision has been taken, or if a user is blocked from social media, then the user must know the reason, which can only be provided by other algorithms like Decision Tree, Logistic Regression, etc.

![Explainability v/s Accuracy](/assets/images/explainability-accuracy.webp)

2\. **Development Timeframe:** Although there are some libraries and no-code platforms present which can help you develop the ANNs easily, many times you need to take control over the details like architecture and their parameters according to business needs, which can take weeks to come with up the desired solution, which can make you think, is it worth to work on the development of an algorithm for so long time, even though we can get the almost same performance with simple algorithms.

3\. **Computationally Expensive:** As we have seen in the last section, as Data is increasing, patterns are more getting difficult to find, which makes us a force to increase the architecture of ANNs, hence operations which make the hardware run for more time than usual, which costs both money and environment.

When to use Neural Networks over Traditional Algorithms
=======================================================

Now, it’s time to answer one of the toughest and most exciting problems that still exist in the Field of AI, and the answer is nothing is perfect. It totally depends upon the problem statement or business outcomes.

There might be some cases where performance like accuracy is more of interest as compared to the computational complexity of the algorithm, in that case, Neural Networks will outsource all other algorithms, whereas in cases where efficiency in terms of computations and memory or explainability is required, in that case, Traditional Algorithms like Linear Regression, SVMs, etc, are most suitable candidates.

**So what to do?** The best and simple solution while modelling is to start with less complex to highly complex models, and record metrics like performance, development time, and computational memory, after which based on stakeholders' tradeoffs decide the algorithm which suits the best.

So in this article, we have gone over different areas where ANNs are performing high, and relatively low to other algorithms. It is not just technical reasons, it also includes the business problem statements you are trying to solve. I hope it almost makes a clear picture in your mind, of why and when to use Neural Networks. So, let’s meet in another article over other questions we might generally have in the field of AI, till then I Tushar signing off!
