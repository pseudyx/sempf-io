---
title: "Prioritization Frameworks"
meta_title: "Prioritization Frameworks"
description: "In this post, we take a step to the side and look at prioritization techniques for IT professionals, particularly for us as AWS Solutions Architects, who face an overwhelming array of tasks and responsibilities in our daily work. Gain insights into various prioritization frameworks, which can help you navigate the complex technology landscape more effectively. Not only do we explain these frameworks, we provide a real-world example of how to create a hybrid model tailored to individual needs. By understanding and implementing these strategies, SAs can enhance their productivity, make better decisions, and achieve a balance between short-term tasks and long-term goals. Moreover, we emphasize the importance of adaptability and continuous refinement in prioritization skills, making it an essential read for any SA looking to optimize their workflow and deliver high-value outcomes in our fast-paced world of IT and cloud solution development."
date: 2024-10-25T01:00:00Z
min: 15
image: "/images/banners/prioritization.png"
categories: ["AWS Solution Architect"]
author: 
tags: ["prioritization", "ways of working", "mindset", "frameworks"]
draft: false
source: "AWS Internal Wiki"
---

# Prioritization Frameworks 

## The Need for Prioritization 

In our last article, we took a look at what separates hype from trend and ultimately concluded that as Solutions Architects, it is our responsibility to navigate the technology landscape and focus our efforts on creating sustainable and impactful solutions that solve real-world problems. However, this puts a tremendous amount of work on our shoulders. As an IT professional, you have to understand and stay up to date with the constantly changing technology landscape, which means you must possess the ability to break down objectives into actionable tasks that we can comprehend. But as a Solution Architect, you are also required to go beyond merely understanding the "what" of change to get to "how" to design and develop solutions to business problems with said change. Not done yet. You're a Solution Architect at AWS, which means you are constantly bombarded with the organizational tasks — working with customers, troubleshooting issues, sharpening the saw, writing 2x2s, maintaining contribution logs, and possibly the worst: maintaining SalesForce hygiene. With overflowing calendars and endless to-do lists, it’s easy to feel overwhelmed with the amount of effort required just to stay afloat. This is where prioritization isn’t just a useful skill, it is essential for staying sane and delivering high-impact results.

Prioritization frameworks provide:

 - **Clarity and Focus**: They cut through the noise to highlight what matters most.
 - **Efficient Resource Allocation**: Focus on tasks that drive the most value.
 - **Better Decisions**: A systematic way to prioritize leads to more informed choices.
 - **Sustained Success**: Helps balance immediate tasks with long-term goals.

## Defining What Needs Prioritizing 

Not all tasks are created equal. Some directly impact customers and business outcomes, while others, like patching Isengard accounts that are not reporting to PVRE, are important but may not be immediately urgent. Understanding how to evaluate the volume and type of tasks in your inbox is essential.

Start by assessing both the business impact and the technical complexity of each task. The more clearly you can identify these, the more effective your prioritization process is likely to be. Does the task contribute to business outcomes? That is, does it directly affect revenue, customer satisfaction, or long-term strategy? What about technical complexity? Is the task straightforward or does it involve dependencies, new tools, or complex integrations? A customer request for performance optimization might have significant business impact but also has high technical complexity, making it a prime candidate for a prioritization framework.

## Popular Prioritization Frameworks 

There are several prioritization frameworks, and really you have to figure out which ones work for you and in what context. As you get used to these and understand when/where to use them, you may start choosing multiple frameworks! By the way, no matter which framework you use (even multiple), you must get good at triage. Triage is the idea (borrowed from medical use) of being able to sort through items. Did you know, this word was initially used to sort food products such as coffee? Anyway, let’s explore some of the frameworks.

1. **Eisenhower Matrix: Simple and Efficient**
This framework is a classic for a reason — it helps you quickly divide tasks into four categories: 1/ urgent and important, 2/ important but not urgent, 3/ urgent but not important, and 4/ neither urgent nor important. For example, a customer-facing outage? Urgent and important. Routine backups? Important, but probably not urgent (unless, of course, disaster strikes). Reading an email update about changes to report lines in another group that you don't interact with? Not urgent, and contextually not important.

![isenhower Matrix](/images/08-eisenhower-matrix.png)

2. **MoSCoW: Managing Project Scope**
This framework helps you prioritize tasks based on whether they are a: 1/ Must have, 2/ Should have, 3/ Could have, or 4/ Won’t have. Think about your goals for the year - you've probably used this mental model already. As you consider which Thought Leadership activities you absolutely MUST work on and which would be nice-to-have, you're using a version of this framework.

![MoSCoW](/images/08-moscow.png)

3. **RICE Scoring: Balancing Impact and Effort**
RICE (Reach, Impact, Confidence, and Effort) scoring is especially useful for product development and managing activities that require significant effort or time. Let’s say you're considering creating a PFR, it's useful to understand how many CIs you can pull in (Reach), how much it will improve customer experience and create revenue for AWS and partners (Impact), how sure you are that the feature will create the impact you seek (Confidence), and how hard it will be to implement for the service team and for you to continue to follow up with them (Effort). This helps you focus on the tasks that deliver the most value relative to the effort involved.

![RICE Scoring](/images/08-rice.png)

4. **Kano Model: Enhancing User Satisfaction**
The Kano Model helps you differentiate between features that customers and partners expect and those that will delight them (Basic need, Performance need, Excitement). If you're helping a customer launch an e-commerce capability, basic security is an expectation. However, adding advanced personalization features (GenAI anyone?) that respond to customer behavior? And making it cost efficient using Graviton and Spot? That’s something that could surprise and delight them.

![Kano](/images/08-kano.png)

5. **The LNO Framework**
This framework is an interesting way to consider what tasks are valuable and why. Leverage (L) tasks drive high returns such as building scale mechanisms that may deliver 10-100x returns. These tasks are where you should invest the most time. Neutral (N) tasks maintain momentum such as responding to routine customer queries. And Overhead (O) tasks are administrative, such as scheduling meetings, and should be completed quickly with minimal effort.

![LNO framework](/images/08-lno.png)

6. **Value vs. Effort matrix**
The value vs effort framework is commonly used in product/software development and directly measures the value of the task by the amount of effort to achieve the task, in essence: "is the juice worth the squeeze?". This framework helps to identify business value taks have. While some may seem essential, they may consume a lot of time and resources without promising much return on inventment. Finding a balance between value and effort can be pivotal.

![Value vs. Effort](/images/08-value-effort.png)

7. **Cynefin Framework**
Ready to go into Expert mode with navigating complexity? Not all problems can be neatly prioritized by effort and impact alone. Some require understanding the nature of the problem itself before even thinking about solutions. The Cynefin framework is a tool for navigating complexity by categorizing problems into different domains: 1/ simple, 2/ complicated, 3/ complex, and 4/ chaotic. Customer wants to build a basic AWS setup? Simple, because there's little uncertainty here. Customer struggling with high cloud costs and wants help? Complicated, because it requires expert analysis to solve. Customer wants to migrate from monolith to microservices? Complex, because the outcome is unpredictable (use feedback loops to optimize). Customer's e-commerce platform is down? Chaotic, and requires fast action before analysis (dig into root causes and apply a more methodical framework like **RICE** for longer-term fixes).

![Cynefin](/images/08-cynefin.png)

As you read through these frameworks, you may realize that you have used one or more of these in the past. As techies, we may consider digital tools to help us here, but sometimes the best way is to use physical artefacts and create visual mnemonics. Just picture a monitor with sticky notes on it!

## Building Your Own Hybrid Model 

Now that we’ve discussed several prioritization frameworks, how do you apply them? In reality, no one framework will solve all your prioritization needs. As an AWS Solutions Architect working with customers or partners (or both), you’ll often need to juggle different frameworks to balance both technical and business goals.

### Real-world example 

Handling prioritisation is not going to be the same for everyone all the time, but let's explore a real-world example of how I (Aaron) apply a hybrid prioritisation model:

At the highest strategic level, I start with the **MoSCoW Method** (Must have, Should have, Could have, Won't have) to develop my technical strategy for the year. This aligns with with my role goals as an SA and my team goals (Operational Plan), which typically fall into two broad areas: Thought Leadership and Partner Enablement (for those not in the Partner org, swap Partner with Internal Enablement here).

For Thought Leadership initiatives, I apply the **RICE model** to prioritize based on:

 - Reach: How many partners/customers (or internal orgs) will this impact?
 - Impact: What is the potential impact of the goal (desired outcomes, KPIs met, etc.)?
 - Confidence: How confident am I in being able to achieve the required outcome?
 - Effort: How much time will it take?

For Partner Engagement, I use the **Kano Model** to assess requirements based on partner capabilities and their customers' satisfaction:

 - Basic Needs (foundational capabilities)
 - Performance Needs (trend adoption & new capabilities)
 - Excitement Needs (Hype)

To further refine the priorities across both Thought Leadership and Partner Engagement, I employ a **Value vs. Effort matrix**. This helps identify quick wins and low-value tasks, ensuring I focusing on high-impact activities.

Finally, at the most granular level of day-to-day activities, I use the **Eisenhower Matrix** as a standard baseline for prioritization. This allows me to divide tasks into four quadrants based on urgency and importance, guiding my daily focus.

This hybrid approach allows me to cascade from high-level strategic priorities down to detailed, day-to-day task management. By combining these frameworks, I maintain a balance between short-term wins and long-term value, ensuring that I'm not only delivering what's important but also doing so in a way that aligns with both customer/partner needs and business strategy.

Given this high-level example, consider how you would apply your own hybrid model to achieve your long-term goals balanced by short-term wins and even urgent reactive tasks (like a customer outage). Would you use the same frameworks in the same way? why?

Remember, the key to an effective hybrid model is flexibility. As you gain experience, you'll learn which frameworks work best for different situations and how to seamlessly transition between them. This adaptability will allow you to navigate complex prioritization challenges while consistently delivering high-value outcomes to your customers and partners.

### A prescriptive approach, if you need it 
For those of you who like a prescriptive guide to prioritisation, here's a simple plan.

**Step 1: Define Objectives**

 - Identify Goals: Clearly outline short-term and long-term objectives.
 - Align Tasks: Ensure all tasks relate back to these goals.

**Step 2: Choose a Prioritization Framework**
(or multiple, reflect on the real-world example above)

 - *Eisenhower Matrix*: Classify tasks into four quadrants: urgent/important, important/not urgent, urgent/not important, not urgent/not important.
 - *MoSCoW Method*: Categorize tasks into Must have, Should have, Could have, and Won’t have.
 - *RICE Scoring*: Rate tasks based on Reach, Impact, Confidence, and Effort.

**Step 3: Gather Tasks**

 - Collect Incoming Tasks: Create a comprehensive list of all tasks and projects.
 - Include Stakeholder Input: Involve team members and stakeholders in identifying tasks.

**Step 4: Triage and Prioritize**

 - Use the Chosen Framework(s): Apply your selected method to categorize and prioritize tasks.
 - Consider Dependencies: Factor in any dependencies that might affect timing or execution.

**Step 5: Plan Execution**

 - Create a Schedule: Develop a timeline for completing prioritized tasks.
 - Assign Responsibilities (for teams): Designate team members to specific tasks based on expertise and capacity.

**Step 6: Monitor and Adjust**

 - Regular Check-Ins: Schedule weekly or bi-weekly reviews to assess progress.
 - Be Flexible: Adjust priorities as needed based on new information or changing circumstances.

**Step 7: Reflect and Improve**
 
 - Evaluate Outcomes: After completing tasks, reflect on what worked and what didn’t.
 - Gather Feedback: Collect input from self-reflection and the team to improve the prioritization process for the future.

## Prioritization Is a Skill 

Prioritization isn’t just about putting things in a to-do list. It is a skill that requires continuous refinement. The frameworks we’ve discussed give you the tools to evaluate tasks and allocate time effectively. The more you practice, the better you'll get at knowing which tasks need immediate attention and which can be delayed or delegated. A solid prioritization strategy not only makes you more productive, but also demonstrates to customers and stakeholders that you’re in control and always delivering high-value outcomes, even under pressure.

Even as you focus on the high value activities, don’t forget to manage your own cognitive load, the mental effort required to complete tasks. High-cognitive-load tasks, like preparing a technical proposal or managing complex AWS architecture discussions, consume significant mental resources. Grouping too many of these tasks back-to-back can overwhelm even the most skilled professional, resulting in slower decision-making and reduced creativity. To combat this, try to balance high-load tasks with lower-effort activities (like routine follow-ups or administrative work) throughout your day. This allows for mental recovery and avoids burnout. In addition to prioritizing based on impact, make sure your workload is sustainable by distributing mentally intensive tasks wisely.

## Conclusion 
Ultimately, mastering prioritization will elevate your effectiveness as an AWS Solutions Architect. Start today by evaluating your current workload: which framework can help you tackle the most important tasks? Get a buddy to join you and hold each other accountable to sticking with an approach for a little while. Apply these strategies, and you’ll not only boost productivity but also deliver real value to your customers and partners, even in the most demanding situations.
