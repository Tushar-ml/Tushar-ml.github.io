---
layout: post
author: tushar
title: "Near Real-Time Optimization of Notifications at LinkedIn"
categories: [ Machine_Learning ]
image: assets/images/real-time-optimization.webp
comments: true
---
In recent years, we have come across different social media applications (e.g. Facebook, LinkedIn, Whatsapp, Twitter), that provides enormous value to members, due to their high usage and engagement. As these types of applications are so-called **Social Media** requires users to visit and their engagement to work, they either engage users _organically_ (through their content without any extra effort) or by providing timely, highly content riched _notifications_.

As a result of increasing mobile penetration and the increasing amount of time spent on mobile phones, mobile traffic (primarily native app traffic) now accounts for the majority of usage, therefore, engaging the user through a mobile notification is a more feasible and promising action than emails.

There are two types of notifications: **Unfiltered** and **Filter-Eligible** Notifications. _Unfiltered notifications_ are product notifications like peer-to-peer messages, or connection invite notifications, which are sent always as they are not to be filtered based upon user behavior, action history on application, or interests. Unlike them, we have Filter-Eligible Notifications, which are those which are needed to be selected based on user behavior, interest, or action history. In this article, we will be focusing on filter-eligible notifications optimization like selection, volume, content, and time to send.

The major consideration when delivering such filter-eligible alerts is the usefulness we give to members by telling them about a certain occurrence. **While a high utility notification has the capacity to please a member, a low utility notification has the potential to irritate a member.** The member who publishes, shares, or responds will be referred to as an **actor**, and the member who receives a notice about the actor’s activity (i.e., the event) or sees it in her news feed will be referred to as the **recipient** or the viewer.

Feed Ranking v/s Notification Filtering
=======================================

In feed ranking, when recipient or viewer visits the application, our algorithm decide which content from the viewer’s network (i.e. actors) must be displayed on their feed. Likewise, in notification filtering, when actor takes an action, then our algo decide, which receipents from actor’s network should receive its notification. It means there is a difference of perspective.

![Feed Recommendation and Notification Filtering](/assets/images/feed_recommendation_notif.webp)

But, There are differences between them:

*   To rank a feed, we score a set of eligible updates for a given viewer, whereas for notifications, we score a set of eligible viewers for a given update.
*   When a viewer visits the site, the feed is ranked, whereas candidate notifications (for an actor’s network) are scored when an actor takes an action.
*   For feed, diversity and freshness are critical, whereas for notifications, timeliness and high precision are essential.

Notifications at LinkedIn
=========================

LinkedIn is the world’s largest professional network with more than 722 million members in over 200 countries. In order to achieve LinkedIn’s mission, which is to “_connect the world’s professionals to make them more productive and successful_”, we facilitate members connecting to one another and interacting in various forms.

Members can access the site through two primary channels: organically or through an email or mobile app notification. For the rest of this article, we will concentrate on members who use the mobile app, and thus on organic and notification-triggered visits to the app.

The Portfolio
-------------

One form of notification i.e. unfiltered are the ones where there is direct communication between one or small groups of members like sending or accepting invitations, messaging. These notifications are always sent, in every social media including LinkedIn.

Second form of notification i.e. filter-eligible notification, is about activities in recepient’s network (by actors). There are four types of **activity-based notifications** at LinkedIn:

*   **Shared-by-your-network:** When actor in your network share any update.
*   **Posted-by-your-network:** When actor in your network post any content.
*   **Talking-about:** When actor in your network likes or comment on update.
*   **Mentioned-in-the-news:** When actor in your network get in news, using named entity and search algorithms, they notify you about this.

The importance of timeliness is one of the most prominent features of this notification portfolio. It’s extremely valuable to be able to send a notification about a highly relevant activity as soon as it occurs. Due to the requirement of timely delivery, we must anticipate the quality of future activities and take special care to ensure that we only deliver the best activity-based notifications that will arise over a specific time period.

Notification Channels
---------------------

At LinkedIn, two different network channels: **in-app** notifications and **push** notifications. An in-app notification is a message which is deliver within the app, while push notification is a message which is sent to a mobile device to deliver pertinent information to members.

Every candidate notification’s decision-making process can be broken down into two steps: 1. Whether to send it as an in-app notification, and 2. Whether to send it as a push notification, but only if it’s also being sent as an in-app notification. **Channel selection** is the term for this decision-making process.

Notification Disablement
------------------------

When members are dissatisfied with the number of notifications they receive, they frequently disable them. The majority of members opt to turn off all app notifications.

The cost of such a disablement is high — first, because we’ve given the member a bad experience that may make her less likely to use the app in the future, and second, because we’ve lost the ability to surface timely and relevant information nuggets to the member.

These disablement is hard to model, therefore without increasing the complexity, they add them as a constraint.

Problem Formulation and Solution
================================

The goal of activity based notifications at LinkedIn is to inform the user about engaging and relevant activity in their network in a timely fashion. The process of determining which notification to send can be divided into three steps.

*   First, we determine who should receive an update and who should not.
*   Next, We use response prediction models to predict user engagement on candidate notifications to determine the relevance of each update.
*   These models are then used as part of an optimization problem to help us choose the best notifications for our members, either globally or individually.

![Steps to send notifications](/assets/images/steps_to_send_notif.webp)

Recipient Candidate Selection
-----------------------------

The recipient candidate selection for each update is the first step in determining which notifications to send. The candidate set is limited to members who follow or are connected to the actor in order to keep the notifications socially relevant. The following approaches to choose certain recipients:

*   We restrict recipients to members who have had interactions with the actor’s updates in the feed in recent history.
*   **Connection strength fanout:** Here, we limit recipients to members who either belong to the previous set or who are predicted to have a good connection strength, i.e. the connection strength is greater than a predefined threshold we use across LinkedIn applications (“Edge affinity” based fanout).

Response Prediction Models
--------------------------

We want to evaluate the update’s relevance for each candidate recipient and send only the most engaging notifications. Two alternative models to approach or capture this behaviour are:

*   **pClickPush**: A model that predicts the probability of an user clicking on the push update in the phone notifications tab.
*   **pClickInApp**: A model that is used to predict the probability of user interacting with the notification within LinkedIn notifications tab.

Using logistic regression models for response prediction, and use L2 regularization when training our models. For either model, let ui denote user u’s response to a notification i described by feature vector f\_ui , then the corresponding Bernoulli random variable Y is modeled by

![Equation for evaluating features](/assets/images/evaluating_feat.webp)

Features for Model
------------------

Four classes of features are being used to create the model:

*   **Actor Features:** The features for the user who performed the activity on the LinkedIn network.
*   **Item Features**: The features for the activity and the corresponding entity (article, image, video …).
*   **Recipient Features:** The features for the targeted recipient selected by Fanout. They are basically the same set of features as the actor features.
*   **Edge features:** features for the actor-recipient pair. For example, the affinity score between actor and recipient reflects the historical interactions between the two users in the feed.

Evaluation of Model
-------------------

*   The area under the receiver operating characteristic curve (AUC): This is to verify the classification accuracy of the model.
*   Observed to expected ratio (O/E ratio): This is to verify the scale of the model. This metric is computed as the number of positive test examples divided by the sum of predicted probabilities for all test examples.

In this article, we have covered the overall notification system at LinkedIn, along with the problem statements and solutions. In future article, we will be going through the Architecture or Notification System established at LinkedIn to actually apply this model to millions of users in real-time.

Source: [https://www.kdd.org/kdd2018/accepted-papers/view/near-real-time-optimization-of-activity-based-notifications](https://www.kdd.org/kdd2018/accepted-papers/view/near-real-time-optimization-of-activity-based-notifications)

Hope you like this article. Follow, Comment and Share with your community.
