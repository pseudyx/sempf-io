---
title: "Why vs How"
meta_title: "Understanding the underlying reasons"
description: "The ability to ask \"why\" and \"so what\" emerges as a cornerstone of effective critical thinking and fosters innovation in providing comprehensive value as a trusted advisor. Understanding the underlying reasons (\"why\") behind business requirements, problems, or tasks is crucial for effective problem-solving, decision-making, and designing meaningful solutions. By employing techniques like the \"5 Whys\" analysis and digging deeper into the root causes, one can uncover hidden assumptions, interconnected issues, and develop more sustainable solutions that truly address underlying business needs. Furthermore, considering broader implications through the lens of \"so what\" allows architects to take a holistic, systems-level view, ensuring that practical implementations align with deeper motivations and long-term consequences. This approach not only fosters introspection, analysis, and continuous learning but also enhances personal growth and goal-setting. SAs should challenge the status quo, question assumptions, and seek a profound understanding of the \"why\" and \"so what\" behind tasks, processes, and goals, as it enables well-informed decision-making and the delivery of thoughtful, sustainable solutions that provide comprehensive value."
date: 2024-08-02T05:00:00Z
min: 25
image: "/images/banners/why-how.png"
categories: ["AWS Solution Architect"]
author: 
tags: ["mindset", "analysis"]
draft: false
source: "AWS Internal Wiki"
---

In the [last article](/blog/savgreatsa/), we discussed that the very heart of being a great Solution Architect (SA) lies in the ability to apply critical thinking skills effectively. The core of critical thinking comes down to two questions: "why" and "so what".

We live in a fast-paced world of endless tasks and constant distractions and it is easy to fall into the trap of doing things simply because that’s how they’ve always been done. But what if we paused for a moment and asked the most fundamental question: "Why?" At its core, asking "why" challenges the status quo. It forces us to dig deeper, to question assumptions, and to seek a more profound understanding of the tasks, processes, and goals we often take for granted. This question isn’t just a tool for curiosity; it’s the cornerstone of critical thinking and innovation. Simon Sinek, in his groundbreaking work ["Start with Why,"](https://www.amazon.com.au/Start-Why-Simon-Sinek/dp/1591844517) emphasizes that great leaders and organizations inspire action by starting with a clear sense of purpose. When we understand and communicate our "why," we create a compelling vision that resonates with others and drives meaningful action. Simon has made a career out of stating the obvious, and as much as we are unsure what to think of him, he is correct here. By asking "why," we ensure that we are not just blindly following procedures but are making informed decisions based on a thorough understanding of the situation.

At Amazon, the "why" question lies at the core of our Learn and Be Curious Leadership Principle (LP). It drives us to seek a deep understanding of the situational context, problem statement, potential solutions, and consequences of any actions. By asking "Why," you gather information, define the challenge clearly, explore different approaches, and consider the implications of each option. This inquisitive mindset fosters introspection, analysis, continuous learning, and well-informed decision-making.

> Learn and Be Curious: Leaders are never done learning and always seek to improve themselves. They are curious about new possibilities and act to explore them.

"So what" is the cousin of the "why" question, challenging you to look beyond the situation and to consider the consequences. It prompts us to look beyond the immediate direct consequences and consider the wider implications, ripple effects, and potential unintended consequences (second or third order consequences are sneaky like that). By asking "so what," we adopt a strategic and big-picture perspective, assessing the long-term impacts on various stakeholders, systems, and processes. This holistic approach enables you to make comprehensive decisions that account for the broader context and long-term ramifications. If you skip the "so what," you might end up with complexity and messiness you have to clean up down the line: a five-minute decision can take five months to fix. 

If we want to be trusted advisors to our customers, we need to not just provide facts but we need to provide analysis and insights. Things like: what is the implication of what we had found from our analysis? Or what is the data actually telling us? And of course, why should our audience care about what we have to say? Consider an example. Suppose I am reviewing the architecture of a data pipeline system and I told you: “20% of all data being migrated is being sent to a DLQ to be reviewed". That may be true, but…​ so what? Is this a good thing? Is it expected? What if instead, I said: "20% of all data being migrated is being sent to a DLQ to be reviewed. This is concerning because that means there’s data issues in our source systems and also the manual processes to review this data means the DLQ is filling up, thereby continually increasing costs." Clearly, the second answer provides more value and meaning, conveys a deeper understanding of the data and the problem, and builds more confidence with the audience.

How you spend your time is critical. Understanding the rationale ("why") and implications ("so what") behind tasks or activities means you can ensure effective prioritization and allocation of time and resources, ultimately even questioning whether the chosen activity was truly worthwhile or if it inadvertently led to forgoing other potentially more valuable opportunities (opportunity cost). Asking "why" also leads to situations where we can improve existing mechanisms by applying the _Invent and Simplify LP_.

> Invent and Simplify: Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by “not invented here.” As we do new things, we accept that we may be misunderstood for long periods of time.

## How: In what manner or way? 

As an SA, your role is to design technical solutions that address specific business requirements or problems by bridging the gap between business needs and technological capabilities. It is crucial to understand the "why" of the business requirement or problem domain, and the "so what" of the potential technology solution. Knowing the "why" inherently leads to the "how" of providing a technical solution within the bounds of the wider context ("so what").

Knowing "how" to solve a problem is crucial, because it provides the practical skills and techniques necessary to address the requirements and problem domain. Knowing the "how" involves understanding the steps, procedures, algorithms, or strategies that can lead to a solution. Understanding the "how" of the technology domain, such as infrastructure management, or the development process equips us with the ability to create adaptable and scalable solutions that can accommodate changing requirements and growth. It also provides insight into testing, validation, and quality control measures, leading to the delivery of high-quality, reliable, and robust solutions. Without this, we can not truly Insist on the Highest Standards (LP), as without knowing what is capable ("how"), we have no standard to measure against.

> Insist on the Highest Standards: Leaders have relentlessly high standards — many people may think these standards are unreasonably high. Leaders are continually raising the bar and drive their teams to deliver high quality products, services, and processes. Leaders ensure that defects do not get sent down the line and that problems are fixed so they stay fixed.

Furthermore, technological solutions often involve multiple stakeholders, and knowing the "how" of the procurement, management, or development process facilitates effective communication, collaboration, and coordination among team members, ensuring a shared understanding and alignment of goals. This is core to the Dive Deep LP, understanding how to operate at all levels and staying connected to the details while auditing frequently encourages iterative cycles of feedback, evaluation, and refinement, enabling continuous improvement and optimization of the solution and development practices.

> Dive Deep: Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdote differ. No task is beneath them.

This all talks to the importance of knowing "how", which ultimately is the non-functional properties of a technological solution that provide the functional output to a business requirement or problem. Without this knowledge, even if we understand the rationale ("why") behind solving a problem, we may lack the means to arrive at a viable solution. However, if lacking the knowledge of "how" to solve a problem is at one end of a spectrum, then having many options of "how" is at the other end of the spectrum.

Ask five different domain specialists to solve the same problem, and you will get five different solutions. It’s like giving an ingredient to five different chefs and asking them to create a dish with it. Each chef, with their unique culinary background, expertise, and creativity, will craft a distinct and flavorful dish, reflecting their individual styles and interpretations of the ingredient. Similarly, different SAs bring their diverse perspectives and approaches to solving problems and they will solve the same problem differently. So, which is the right solution? As long as they meet the functional requirements of the problem, they are all correct. However, don’t assume that because there is more than one way to do it, that you should do it every which way. Once you understand the "why", you can then determine the best way to do it.


## Why: For what reason, purpose, or cause? 

Understanding why a problem needs to be solved is crucial as it provides the context, motivation, and justification for the problem-solving effort. Knowing the underlying reasons or objectives behind solving a problem fosters a deeper understanding for the problem’s significance and implications. What if the problem we are providing a solution for is the downstream symptom of another upstream problem? Should we solve the symptom or the source of the problem?

Digging deeper into the "why" of the requirement or problem is fairly standard in manufacturing and industrial processes. Within IT, we often find it in areas such as technical support and development bug fixing, where the problem being solved may be a negative affect from a cause that is not evident. You’ve probably heard of Root Cause Analysis (RCA). RCA is used to identify the root cause of a problem, that is, the factor that was the source of the problem. A factor is considered the "root cause" of a problem if removing it prevents the problem from recurring. As SAs developing AWS cloud workloads (platform-based distributed systems), we tend to apply RCA to our designs to develop [reactive systems](https://docs.aws.amazon.com/whitepapers/latest/reactive-systems-on-aws/characteristics-of-reactive-systems.html), [self-adaptive systems](https://ieeexplore.ieee.org/document/8599519), [self-organized systems](http://www.scholarpedia.org/article/Self-organization), and [complex adaptive systems](https://www.sciencedirect.com/topics/neuroscience/complex-adaptive-system) with the goal of reacting quickly to events in order to alleviate the effects of the problem as soon as possible. This is a very effective way of solving problems or repairing faults by treating the symptoms under known and understood conditions.

### 5xWhy? 

The proactive nature of RCA means we analyze the root cause of the very problem we are designing for, which can lead to more thoughtful and meaningful solutions. Often, this is because we take the business requirements or problem domain at face value. Perhaps this stems from a belief that the customer would not provide their requirements without having first done thorough analysis, or perhaps you don’t (yet) have a deep enough understanding of the problem domain. Either way, we often focus on designing a solution to meet the provided requirement.

So how can we apply RCA before we even begin designing a solution? Start by questioning the very requirements or business problem, to uncover their root cause and understand the underlying requirement(s) - it is at this point where we find the true "best" solution to the problem that our five domain specialists from earlier are trying to solve.

To achieve this, there are a number of RCA techniques available such as, [Fishbone diagram](https://www.cms.gov/medicare/provider-enrollment-and-certification/qapi/downloads/fishbonerevised.pdf) analysis, [Failure Mode & Effects Analysis](https://safetyculture.com/topics/fmea/), [Pareto Analysis](https://asq.org/quality-resources/pareto), [fault tree analysis](https://sixsigmastudyguide.com/fault-tree-analysis/), but the most effective and widely used in quickly getting to the root cause, for proactive solutions design is the Five Why ("5 Whys") analysis.

[The "5 Whys"](https://en.wikipedia.org/wiki/Five_whys) technique is based on the principle that most problems are often the result of a chain of events or causes, and by digging deeper into each subsequent cause, one can eventually arrive at the root cause. The process involves asking "why?" at least five times, or until the root cause is revealed. The number ‘5’ comes from the anecdotal observation that five iterations of asking why is usually sufficient enough to reveal the root cause. Like all observations, it may take more or less iterations, depending on the depth and complexity of the problem.

In theory, the method is simple. Define a problem then drill down to its root cause by asking "why?" five times. Then, when a counter-measure becomes apparent, follow it through to prevent the issue from recurring. A counter-measure is an action or set of actions that seeks to prevent the problem from arising again, while a solution may just seek to deal with the symptom. In practice, poor or improper use of the technique can result in incorrect or superficial counter-measures. For the most effective use of the "5 Whys" technique, there are two factors that are often missed that can improve the outcome.

**Factor 1: Thorough investigation**

It may seem obvious to conduct a thorough investigation of the initial problem/symptom. However, a step that is often missed is to gather people who are familiar with the specifics of the problem domain, specifically people familiar with the processes or interactions of the business requirements for the problem domain (Subject Matter Experts (SMEs)).

Carrying out an investigation of the problem to gather data with SMEs supports gathering all relevant interactions of the problem domain, such as standard operating procedures, regulations or compliance requirements, integrations and dependencies. Attempting to answer, with as much detail, the W5H: What, When, Where, Who, Which, How.

**Factor 2: Causal network**

A common misconception of the "5 Whys" technique is that each "why" is a simple single step from one problem to its cause and so on five times. The first "why" is actually about identifying any number of possible causes to the problem description, and subsequent "whys" are about mapping a network to illustrate the causal dependencies of all the nodes in the network.

![Find the root cause](/images/02-root-cause.png)

These two factors are key to an effective "5 whys" analysis. By using the information derived from a thorough investigation and mapping out the causal network, a clear understanding of the problem domain will be revealed. This is crucial to the correct use of any root cause technique.

The 5 Whys technique is particularly valuable because it encourages a structured and systematic approach to problem-solving, forcing participants to move beyond superficial explanations and dig deeper into the underlying causes. By repeatedly asking "why", we can uncover hidden assumptions, uncover interconnected issues, and ultimately develop more effective and sustainable solutions.

### Root Cause or Deep Dive? 

It’s important to note that the "5 Whys" technique should be used in conjunction with other problem-solving methods and should not be treated as a one-size-fits-all solution. In complex situations, additional root cause analysis tools and techniques or other forms of analysis may be required to fully understand and address the root causes of a problem.

While "5 Whys" has had success in the automotive industry it has received criticism for being too basic and not complex enough for other industries, to analyze to the depth that is needed to ensure solutions are identified and the problem is fixed.

There are several reasons for this criticism:

* Tendency for investigators to stop at symptoms rather than going on to lower-level root causes.

* Inability to go beyond the investigator's current knowledge – the investigator cannot find causes that they do not already know.

* Lack of support to help the investigator provide the right answer to "why" questions.

* Results are not repeatable – different people using five whys come up with different causes for the same problem.

* Tendency to isolate a single root cause, whereas each question could elicit many different root causes.

* Considered a linear method of communication for what is often a non-linear event.

Some of these criticisms are addressed in the above "5 whys" two factors, by making sure to include SMEs and following a cause-effect network approach. These criticisms highlight the typically narrow scope of RCA, concentrating on a particular problem or incident, trying to trace back the chain of events and conditions that led to the issue. Broader analysis methods such as [Systems Analysis](https://study.com/learn/lesson/systems-analysis-function-examples.html) or methodologies like [Six Sigma](https://www.mindtools.com/aoafmra/six-sigma) focus on the entire system, including its inputs, processes, outputs, and interactions with other systems or the environment, using metrics to measure baselines and monitor change progress towards improvement goals.

Systems Analysis employs various techniques like system modeling, simulation, data analysis, and stakeholder analysis to understand the system’s structure, behavior, and dynamics with the aim to improve the overall performance, efficiency, and effectiveness of a system by identifying bottlenecks, redundancies, or areas for optimization.

RCA typically results in recommendations for counter-measures to address the identified root causes and prevent future occurrences of the problem, while Systems Analysis often leads to recommendations for system redesign, process improvements, or changes to enhance the overall system performance and meet stakeholder requirements.

While RCA and Systems Analysis have different focuses and approaches, they are complementary techniques. Systems Analysis can provide a broader understanding of the system’s context, which can aid in identifying potential root causes during an RCA. Conversely, the insights gained from an RCA can contribute to a more comprehensive Systems Analysis by highlighting specific areas or components that require further examination or improvement.


## Solution vs Self 

So far we have been talking about the "why" and "so what" in the context of solutions, projects, and technology. But what about orienting towards oneself? We all complain about too many meetings and admin - but which of them are useful and which are not? This is an area where the "why" and "so what" can direct us. In a recent group conversation amongst SAs, an SA was expressing dissatisfaction about having to update SFDC and that "it’s a waste of my time". To be fair, what they wanted to do was to spend that time with their customer, a commendable desire. But when another SA pressed them on why they had to maintain SFDC, the SA admitted that even though they didn’t want to do it, they could see how it helped the organization understand what was happening with that account (aka they understood the "so what").

Similarly, each of us sets ambitious goals every year. These goals are usually one of two things: outcome goals (revenue, lighthouse account wins, etc) and input goals (# of 1:1s, # of 1:manys, thought leadership assets, etc). But often, these goals are assigned to us. What we as ICs have control over is how we apply these input goals into initiatives that (hopefully) result in the outcome goals. Here’s an illustration of how to think about your goals - this has helped many SAs so far, hopefully it’s useful to you. When planning for your goals, and the initiatives that you want to run consider the "why" you want to run them and "so what" will the outcome be? The guidance for setting your initiatives, is always to have a mix of 'high confidence' (know you can achieve) initiatives with a few experiments - how you split that depends on your role and your domain.

![Goal setting once you understand the why](/images/02-goal-setting.png)

## Summary 

As an SA, it is often easier to not fight inertia, especially as there are so many demands on our time. But asking "why" gives you the assurance that you are focusing on the correct things. Asking the "so what" gives you confidence to understand the implications.

While we have discussed the importance of understanding the underlying "why", this does not take away the importance of knowing the "how". Having both "how" and "why" knowledge is ideal. When we understand both the practical steps and the reasons behind taking an action, we can take a holistic perspective towards creating an outcome. This combination also gives you the flexibility to adapt and innovate when faced with new or unexpected challenges.

### Call to action 

When working with your partners or customers, try using the "5 Whys" technique to help build up your understanding of the business requirements and problem domain. It can often direct you quickly to the root cause of a problem or underlying reason for a requirement. so try it before you embark on a more in-depth approach such as Systems Analysis or Six Sigma. In the least, you will learn about your partner and customers business and processes earning trust that you understand their requirements and problem domain, and best case scenario you help them uncover aspects of their business that they weren’t aware they can improve on.

Think back to your goals and your plans for the year. How did you define those plans, and were your goals aligned to them? If yes, awesome. If not, think about how you could be more intentional as you get closer to the end of the year. Start thinking about your likely goals and initiatives for next year, what do you want to run? Remember the guidance is always have a mix of 'high confidence' with a few experiments.

## Some WHY questions to play with 

* Why... is this a problem / challenge?

* Why... is it relevant to me / others?

* Why... should people know about this?

* Why... will people be influenced by this?

* Why... is it this way? And for so long?

* Why... have we allowed this to happen?

* Why... is there a need for this?

* Why... now?
