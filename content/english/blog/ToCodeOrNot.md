---
title: "To Code or Not to Code"
meta_title: "To Code or Not to Code"
description: "In an era of rapid technological evolution, the question 'To Code or Not to Code' for Solutions Architects (SAs) has never been more pertinent. In this article we delve into why coding skills are no longer just a nice-to-have, but a crucial asset for SAs in today's cloud-driven landscape. We explore how hands-on coding experience enhances an SA's ability to design more effective and innovative solutions, bridging the gap between high-level strategy and practical implementation. With guidance on getting started in coding, emphasizing the importance of an experimental mindset, continuous learning, and embracing coding as a tool for exploration, innovation, and credibility-building."
date: 2024-11-22T05:00:00Z
min: 15
image: "/images/banners/toCodeOrNot.png"
categories: ["AWS Solution Architect"]
author: 
tags: ["code", "architecture", "solutions", "experimental", "mindset", "prototype", "innovation", "development"]
draft: false
source: "AWS Internal Wiki"
---

## That is the question!

For Solutions Architects (SA), the answer may be obvious, but you know from reading previous articles in [this series](/categories/aws-solution-architect/), that the real magic lies in asking “why”. Why is coding essential for an SA?

If you think back on the past 5 years of AWS service releases and feature enhancements, we have shifted focus from basic infrastructure building blocks to more advanced and managed services like Serverless Computing (Lambda), event-driven architecture (Amazon EventBridge) and development tools (AWS CDK, SAM, AWS Amplify). This evolution reflects an industry-wide push to simplify infrastructure and focus on application logic.

Considering this continuous evolution towards the logic layer, the role of an SA is becoming increasingly complex. Gone are the days when SAs could get by as high-level strategists alone. Today, coding isn’t just a nice-to-have, it is the key to understanding, innovating, and leading with credibility. This hands-on approach also aligns very well to enhance our understanding of the systems we design but also fosters an experimental mindset that is crucial for innovation and problem-solving.

## The Exploration of Coding

### Why Great SAs code

The idea that SAs don’t need to code often stems from hesitation related to overstepping boundaries ("I'm not allowed to provide code directly to my customer/partner, so I'm better off not doing it at all"). But this misses the point. Coding isn’t about delivering production-grade software—it’s about exploration. Writing code sharpens your understanding of the systems you design and allows you to experiment with new ideas through the exploration process much like we discussed in using Whiteboarding for [Breaking down Barries](/blog/1pic1000words/#breaking-down-barriers).

When you code, you gain firsthand experience with the challenges developers face — dead ends in documentation, unexpected API quirks, and integration issues. This insight allows you to design architectures that are more practical and efficient. By understanding the intricacies of implementation, we can make more informed decisions about architecture and technology choices. This is at the very core of the Amazon Leadership Principle (LP) Learn and Be Curious.

> Learn and Be Curious: Leaders are never done learning and always seek to improve themselves. They are curious about new possibilities and act to explore them.

Furthermore, in understanding the challenges that developer face, we are more likely to earn the respect and trust (Amazon LP: Earn Trust) of our customers/partners development teams. We can speak the same language, understand technical constraints, and provide more actionable advice. This credibility is invaluable when proposing architectural changes or guiding teams through complex implementations.

> Earn Trust: Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing. Leaders do not believe their or their team’s body odor smells of perfume. They benchmark themselves and their teams against the best.

However, coding as an SA does much more for us than just gaining insight into developer challenges or earning trust with our customer/partners development teams. Coding brings the power of exploration through experimentation into our own hands (keyboards), "The beauty of experiments is that they allow you to make progress through constant iteration, uncovering better ways to achieve your goals." - 
[Why Embrace an Experimental Mindset](/blog/experimentalmind/#why-embrace-an-experimental-mindset).

Coding skills enable us to quickly create proof-of-concepts or prototypes. This ability to experiment rapidly is crucial in today's fast-paced changing technology landscape. It allows us to test assumptions, explore new services, and validate architectural decisions before committing to full-scale implementations.

By writing code, we can more accurately assess the capabilities and limitations of various technologies and services. This hands-on experience is far more valuable than relying solely on documentation or third-party review.

### I want to code! But don’t know where to start

If you’re new to coding or looking to refresh your skills, here are practical steps to get started:

1. Set Clear Goals:

   Establish clear, achievable coding objectives. For example, aim to build a serverless application using AWS Lambda and API Gateway within a month.


1. Participate in Coding Workshops:

   Attend AWS-focused coding workshops or hackathons to gain hands-on experience with specific services and architectures.


1. Build Personal Projects:

   Develop side projects that utilize various AWS services. This allows you to experiment freely and gain deep insights into service integration and best practices.


1. Contribute to Collaborative or Open Source Projects:

   Find internal collaborative projects or AWS-related open-source projects and contribute code. This real-world experience is invaluable for understanding how large-scale systems are built and maintained.


1. Practice Infrastructure as Code:

   Master tools like AWS Cloud Development Kit (CDK) or CloudFormation Templates with Serverless Application Model or Serverless Framework to automate infrastructure deployment. This skill bridges the gap between traditional SA roles and modern DevOps practices.


1. Stay Updated with AWS Services:

   Regularly explore new AWS service announcements and try to implement them in small projects. This keeps your skills current and relevant.

Historically, this is what we would have suggested as a minimum to get started, but now as a result of GenAI capabilities, it has become even easier to get started with coding, with tools like Amazon Q Developer (Q Dev). Get yourself set up with Q Dev, then follow the steps above, using Q Dev to ask questions on what and how to integrate with AWS services or have Q Dev generate snippets for you and ask Q Dev to explain the code.

Side Note: The type of code you start with - Frontend Applications, Backend Services, CLI scripting - is less important than the objective of the coding. The intention is to get hands-on and experiment. The detail of what you're doing and how you're doing it is up to you. For instance if my objective is to understand how to integrate with a new services, whether I do it in a backend service, a frontend application, or a CLI script, is not important. The understanding of the integration is the value.

### Coding and the Experimental Mindset

Embracing an experimental mindset means staying curious and being open to failure. Remember, the ultimate aim is continuous learning, so don’t just focus on using the one language and framework you are familiar with, stay curious and always be willing to learn new technologies, languages, and frameworks. Set aside time regularly to explore new AWS services or features through hands-on experimentation.

Not every experiment will be successful, and that's okay. Sometimes the language or framework is harder than expected or sometimes the concept for the experiment wasn't the right approach. The key is to learn from each attempt and apply those lessons to future projects. Treat failures as valuable learning experiences rather than setbacks.

And treat your experiments as you would with entire projects, by making small incremental changes. Begin with small, manageable projects that allow you to test specific concepts or services. As you gain confidence, gradually increase the complexity of your experiments.

But above all, to support your learning and knowledge sharing, keep detailed notes of your coding experiments, including challenges faced, solutions found, and lessons learned. This documentation can be invaluable for future reference and for sharing knowledge with colleagues, customers/partners, and the community. And as an extension, engage with the developer community, participate in coding challenges, share your experiments with peers, learn from others. This collaborative approach can lead to new insights and innovative solutions.

## What do I do with my code?

OK, so you have done some exploration writing some application code to integrate with AWS services your customer/partner is investigating, and you want to help accelerate your customer/partners journey by providing them the insights you have learned through developing your proof of concept or prototype... Side note: We've heard many SAs complain that it is too difficult or the process for sharing code is too cumbersome, so they just stop there (or this has been the hurdle that has stopped them from starting to code), so lets dive into this.

Firstly, just because you built a prototype, doesn’t mean that your end-goal is to provide the code. A big part of what we as SAs do is Invent and Simplify (Amazon LP). So, think laterally, what else can (should) we do from the PoC or Prototype beside providing the code? Consider our role, what is our primary objective as a trusted advisor to our customer/partner? To provide guidance through Thought Leadership. This is where we as SAs can provide the most value of the lessons learned through the exploration of writing the code / developing the PoC or prototype. There is nothing stopping us from running a live demonstration of the PoC/prototype and while we are demoing the functional output, why not move to the Whiteboard to explore further? This is only one example of how we can use our code beyond sharing the code itself, other examples could be a presentation deck with recorded functional demo or a blog discussing the learning and providing high level integration guidance (1:many Thought Leadership).

> Invent and Simplify: Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by “not invented here.” As we do new things, we accept that we may be misunderstood for long periods of time.

This is how we provide the immediate value of our exploration of coding, without being thwarted by potential security and legal concerns around sharing the code. But ok, you've provided your thought leadership, and the customer/partner is intent on reviewing your code to help them learn. You have many options for sharing (based on 1:1 or 1:Many), but ultimately every pathway to sharing leads to requiring an automated review and a Content Security Review (CSR) by a Security Guardian, as code (not to be confused with sample commands, shell scripts, or functions that only perform read operations) is a minimum of medium risk. 

Once your code has been reviewed and approved, you are free to provide the code through the available options, some of which are: for 1:1 the content portal or for 1:Many through AWS-Samples or even guided workshops.

HINT: Follow Pythia for guidance. CSRs can take on average between 1 and 3 weeks for approval, so if you plan to share your code, then submit the review ticket as soon as you have created the code. But this is also why it's important to recognise that the true 'value' of code both for the SA and the customer/partner doesn't come from sharing the code itself, but from providing the learning and Thought Leadership as a result of the code.

### PoC or Prototype Code sharing is the objective

If your ultimate objective is merely to have a PoC or Prototype developed to share the code with your Customer/Partner, then this is a whole other discussion, however at a high level, consider engaging teams within AWS that are specifically designed for developing PoC/Prototypes and coding engagements, such as the PACE team or ProServe.

## Conclusion

In today's rapidly evolving tech landscape, SAs who can code have a significant advantage. By adopting an experimental mindset and consistently honing our coding skills, SAs can design more effective, efficient, and innovative solutions. This hands-on approach not only enhances our technical expertise but also improves our ability to communicate with development teams and drive successful project outcomes.

Remember, the goal isn't to become a full-time developer, but to have enough coding proficiency to experiment, prototype, and understand the implications of architectural decisions. By embracing this approach, SAs can truly bridge the gap between high-level design and practical implementation, leading to more robust and successful cloud solutions.

It is important to note that while AWS continues to develop higher-level abstractions, these higher-level services are built on top of AWS's core IaaS offerings, which also continnue to be enhanced and optimised, providing a spectrum of options, allowing customers to choose the right level of abstraction for thier specific needs, and therefor requiring SAs to remain profecient at these layers also... A discussion for another day.
