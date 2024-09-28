---
title: "Systems Thinking Part 2: Infinity"
meta_title: ""
description: "Continuing our exploration through the mental construct of Systems Thinking, we have looked at the intrinsic interconnectivity of all elements within a system and discussed the nature of feedback loops as the driving force behind emergent behaviors and unintended consequences. In this part 2 of Systems Thinking we discuss the significance of systems boundaries, the importance of recognizing and defining the boundaries in order to understand its scope, scale, and interactions with its environment, and we introduce the \"infinite mindset\" a concept that emphasizes the importance of adapting, evolving, and thriving in an ever-changing environment, rather than focusing solely on achieving specific short-term goals."
date: 2024-08-30T05:00:00Z
min: 15
image: "/images/banners/system-thinking.png"
categories: ["AWS Solution Architect", "Systems Design"]
author: 
tags: ["systems", "mindset", "philosophy"]
draft: false
---

In [part 1](/blog/systemsthinking1/), we delved into the concept of systems thinking, emphasizing the intrinsic interconnectivity of all elements within a system. Central to this understanding is the recognition of feedback loops as the driving force behind emergent behaviors and unintended consequences. As we continue to navigate the complexities of systems thinking in solution architecture, it becomes increasingly evident that while interconnectivity is a fundamental principle, we must also acknowledge the existence and significance of boundaries within systems. Just as the interplay of components shapes system behavior, the delineation of boundaries plays a crucial role in defining the scope, scale, and interactions of a system with its environment.

## To infinity and beyond 

Understanding the definition of a system is a good place to start. Especially in understanding the process of defining a systems boundary - anything inside the boundary is the system and anything outside is the external environment. Understanding how to recognize and define boundaries means that we can step into any system to define its subsystems by applying the same system characteristics in a recursive loop until we have defined each individual element.

We can also do this in the other direction. Let's do that together. As we zoom out from the system, we begin to see its external environment and the boundary that separates them. If we zoom out further, we can see a boundary surrounding that external environment - showing us that our system is merely a subsystem in a larger and more complex system. As we continue to zoom out, we see additional broader (and sometimes overlapping) boundaries that form systems of inter-related subsystems. As an example, say we define our system as our team. The environment that our team exists in is within the boundary of the department, just as we as individuals are a subsystem of our team governed by our team policies and procedure. Our team is a subsystem of department that interacts with other teams within the department, all of which is governed by the departmental policies and procedures. Taking a wider view again, the department exists within the bounds of the... you get the idea. This example only works because of how we defined the boundaries, in this case: the org structure. But what if we use the same system 'our team', and define a different boundary? Our team interacts within the bounds of our office with other teams. So, our office is the boundary. The office exists within the bounds of the building ... and we are off again.

_Has your brain exploded from this stack overflow of visualizing infinite overlapping boundaries yet?_
_This is the paradigm of Systems Thinking._

At its core, Systems Thinking is about understanding reality through interconnected lenses rather than isolated events or parts. The central idea is that things, observable events or occurrences, known as 'phenomena', can be understood by examining the larger context or environment (wider system) that they are embedded within. This in essence is taking a macro view of emergence, the idea that the whole is greater than the sum of its parts, and that emergent behaviors have an upstream effect on downstream interconnected or interrelated systems. To understand something, you need to look at it in relation to the larger system.

Let’s go back to our [flower example](/blog/systemsthinking1/#everything-everywhere-all-at-once) from our previous article. To understand why a flower opens at different times each year, we need to look not just at the flower itself but the entire ecosystem it inhabits. A systems perspective helps illuminate root causes, intended and unintended consequences of policies, and leverage points for effective actions.

This ability to step back and view a system from ever wider lenses, to be externally aware, and to recognize the interrelation of things, helps retrain our brains back to our intuitive understanding of systems and the infinite paradigm of systems boundaries (at least until our brains explode!). But let’s not forget about another infinite lens: time. Time is required to observe the events in a system to identify and understand the patterns of behavior and how the parts of a system evolve.

Therefore, long-term thinking is a crucial aspect of Systems Thinking, which recognizes that systems are complex, interconnected, and evolving over time. Applying long-term thinking to systems involves considering the potential long-term consequences and implications of decisions, actions, and interventions within the system. In other words, consider the longer-term "so what" of our decisions or actions.

As an example, many natural resources, such as forests, fisheries, and water supplies, are complex systems that require long-term thinking for their effective management. Short-term exploitation or overuse of these resources can lead to their depletion or degradation, which can have far-reaching and long-lasting consequences for the environment, economy, and society. Have you heard the story of how [wolves change rivers](https://www.yellowstonepark.com/things-to-do/wildlife/wolf-reintroduction-changes-ecosystem/)?

This holistic approach aims to meet current needs while preserving the integrity and resilience of the resource system for future generations, rather than pursuing short-term gains at the expense of long-term sustainability. This is core to the _Ownership_ LP.

>**Ownership**: Leaders are owners. They think long term and don’t sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say “that’s not my job.”

In his book The Infinite Game, Simon Sinek introduces the concept of the "infinite mindset," based on ideas from James P. Carse's discussion on the concept of there being two kinds of games: finite and infinite.

>"There are at least two kinds of games: finite and infinite. A finite game is played for the purpose of winning, an infinite game for the purpose of continuing the play." - **James P. Carse**

Simon applies the concept to the topics of business and leadership, challenging the traditional finite mindset focused solely on winning or achieving specific goals. The infinite mindset recognizes that true success lies in the ability to consistently adapt, evolve, and thrive in an ever-changing environment. 

Understanding the "infinite mindset” provides a unique perspective on Systems Thinking by emphasizing the dynamic and ongoing nature of systems. In contrast to finite games with defined rules, boundaries, and a clear endpoint, infinite games are characterized by an endless horizon, where the objective is not to win or lose but to perpetuate the game itself. This concept resonates deeply with the principles of Systems Thinking, which recognizes that systems are complex, interconnected, and constantly evolving.

The Infinite Game highlights the importance of adapting and adjusting to changing circumstances, much like Systems Thinking acknowledges the dynamic nature of systems.  It also emphasizes the significance of collaboration and cooperation, values that are equally essential in Systems Thinking. A shared understanding fosters a holistic perspective, enabling us to consider the broader implications of our actions and decisions on the overall system.

By embracing this mindset, we can develop a deeper appreciation for the intricate web of relationships and feedback loops that shape our world. As Solutions Architects, we can transcend the constraints of short-term thinking and cultivate a deeper understanding of the interconnected nature of systems, ultimately enabling us to make more informed decisions and foster sustainable and resilient solutions.


## Infinity is a feedback loop 

So far, we have covered the philosophy of Systems Thinking, but how do you apply this to your job as a Solutions Architect?

We believe the answer lies in the combination of knowing where to define the boundaries and embracing an experimental mindset (try and learn / fail fast / two way doors). One common approach is to map out a Causal Loop Diagram to understand the elements and interrelationships between them, used in conjunction with a Behavior Over Time Diagram (BOT) used to graph the behavior of variables over time to gain insights into reinforcing and balancing processes (we covered this in our thought experiment in part 1).

In the context of AWS Solutions, one of the potential answers is [DevOps](https://aws.amazon.com/devops/what-is-devops/). The feedback loop that provides a sustained intervention for the evolution of the system. Or more specifically, [Continuous Integration](https://aws.amazon.com/devops/continuous-integration/) and [Continuous Delivery](https://aws.amazon.com/devops/continuous-delivery/) (CI/CD) in the context of DevOps for the functional AWS solution. In this context, the system boundary of the solution, is not the function output of the business requirement, but rather the process that allows the functional output the ability to consistently adapt and evolve as business requirements change. 

### Thought experiment continued

Consider our [thought experiment from part 1](/blog/systemsthinking1/#thought-experiment-optimization-of-solution-architecture-finding-the-feedback-loops); We provided a very basic example of solving the business requirements, skipping the finer details of the non-functional requirements, but went through iterations of changes to the solution. How would you have deployed our initial solution? Likely, depending on the skill and/or preference of the customer, you would have developed some form of IaC expressed in CloudFormation Templates, CDK, or Terraform.

As an initial deployment of a solution, this is a common practice and efficient way of developing and deploying a solution. But how would you have handled the iterative changes from design one to design two? There were some fundamental changes to the services we chose, and if design one was in production, how do you roll design two out to production with minimal impact to operation? Think of solutions you have worked on previously. Did you consider potential future changes to the solution? What about the other situation - where you may have inherited someone else's solution. Was the initial SA considering future changes to the solution?

This is where understanding different but interrelated system is important. Had we developed our solution in IaC and included a CI/CD pipeline to manage the deployment of incremental changes, the effort required for the initial deployment may not have been any different. However, with the deployment pipeline mechanisms in place, the effort required for subsequent design changes is dramatically reduced, and in turn the efficiency of developing and deploying changes into the system is increased.

The importance of the DevOps and CI/CD example is on the nature of interrelated systems (remember from part 1, [[Pi skilling: interrelated area of depth>>AWS.Miscellaneous.TGIFF.SysThinkInterconnectivity.WebHome]]), and demonstrating how using interrelated systems as interventions in the primary systems' feedback loops can have a longer lasting positive impact than simply solving the immediate issues (or symptoms). For this example, take it from a Distributed Systems AoD, in matters of distributed systems (and a higher level abstraction: cloud solutions), DevOps is part of the system, irrespective of functional or non-functional business requirements. In order to avoid the "Growth and Underinvestment" and "Tragedy of the Commons" archetypes, proactively design for sustainable, resilient, and adaptable systems that allow for evolution as requirements change over time.

## Call to Action

We've spent two articles talking about Systems Thinking, mostly because this is a really important mental construct to understand and master on your journey to becoming a great Solution Architect.

The principles of Systems Thinking and the infinite mindset offer a powerful paradigm shift for Solutions Architecture. By embracing these concepts, we can move beyond narrow, short-term solutions and instead create enduring systems that continuously evolve and generate value for all stakeholders. This is the essence of designing for re-usable solutions (Design Wins). It is a call to action for Solutions Architects to broaden our perspectives, think holistically, and embrace the infinite game.


## Insightful Reads 

* [The Infinite Game](https://www.amazon.com.au/Infinite-Game-Simon-Sinek/dp/0241385636) - Simon Sinek
* [The Systems Thinker](https://thesystemsthinker.com/)
* [Systems: Definition and Observation](/blog/systemcharacteristics/)