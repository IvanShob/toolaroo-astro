---
title: Amazon CodeWhisperer
name: Amazon CodeWhisperer
description: Amazon's AI coding assistant with real-time code suggestions, security vulnerability scanning, and deep AWS integration — now called Amazon Q Developer.
category: coding
featured: false
rank: 4
url: https://aws.amazon.com/codewhisperer
pricingModel: Freemium
rating: 4.3
longDescription: "Amazon CodeWhisperer — now rebranded as Amazon Q Developer — is Amazon Web Services' AI-powered coding assistant that delivers real-time code suggestions, automated security scanning, and deep integration with the AWS cloud ecosystem. Originally launched as CodeWhisperer, the tool has been expanded and repositioned under the Amazon Q brand as part of AWS's broader generative AI initiative, though it continues to be widely referred to by its original name in developer communities and tooling documentation.\n\nThe assistant integrates directly with popular IDEs including Visual Studio Code, JetBrains IntelliJ, PyCharm, and AWS Cloud9, providing inline code completions as developers type. Its suggestions are context-aware — taking into account the current file, open tabs, and project structure — and are capable of generating single-line completions, multi-line function bodies, and complete class implementations from natural-language comments. CodeWhisperer supports 15 programming languages including Python, Java, JavaScript, TypeScript, C#, Go, Rust, and several others, making it broadly applicable across modern software stacks.\n\nOne of the tool's most distinctive features is its built-in security scanning capability. CodeWhisperer can analyse code for vulnerabilities aligned with the OWASP Top 10 and other common security frameworks, flagging issues like SQL injection risks, hardcoded credentials, improper input validation, and insecure cryptography patterns. This makes it particularly valuable for teams building on AWS where security compliance is a priority. The scanner works on the current file or the entire project and provides remediation suggestions alongside each identified issue.\n\nThe individual tier of Amazon Q Developer is free with no usage caps for code suggestions, giving individual developers access to a powerful AI assistant without cost. The Professional tier adds administrative controls, higher security scan quotas, and AWS Identity Center integration for enterprise team management. For teams already deeply invested in the AWS ecosystem — using services like Lambda, EC2, S3, and DynamoDB — CodeWhisperer's awareness of AWS APIs and SDK patterns provides particularly relevant and accurate suggestions that general-purpose coding assistants may not match."
features:
  - "Real-time AI code suggestions inside popular IDEs"
  - "Security vulnerability scanning aligned with OWASP Top 10"
  - "Support for 15 programming languages including Python, Java, and TypeScript"
  - "Deep AWS SDK and API pattern awareness for cloud development"
  - "Natural language to code generation from inline comments"
  - "Multi-line and full function body completion"
  - "Reference tracking for open-source code suggestions"
  - "IDE plugins for VS Code, JetBrains, Cloud9, and more"
useCases:
  - "Accelerating development of AWS Lambda functions and serverless applications"
  - "Scanning codebases for security vulnerabilities before deployment"
  - "Generating boilerplate code for AWS SDK integrations"
  - "Writing infrastructure-as-code with CloudFormation or CDK awareness"
  - "Speeding up Python, Java, and TypeScript development with inline completions"
  - "Onboarding new developers to AWS service patterns"
  - "Reducing repetitive coding work in enterprise Java or .NET projects"
  - "Improving code security posture in regulated industries"
pricing:
  "Individual Tier – Free": "Unlimited code suggestions, 50 security scans per user per month, reference tracking, all supported IDEs"
  "Professional Tier – $19/user/mo": "Higher security scan limits, SSO via AWS IAM Identity Center, admin dashboard, organisational policy controls"
pros:
  - "Free individual tier with no usage caps on code suggestions"
  - "Built-in security scanning is rare among AI coding assistants"
  - "Deep AWS API and SDK awareness for cloud developers"
  - "Reference tracker cites open-source origins of suggestions"
  - "Strong multi-language support across 15 languages"
cons:
  - "Less powerful for non-AWS general-purpose development compared to GitHub Copilot"
  - "IDE plugin experience can be less polished than competing tools"
  - "Security scan limits on the free tier may be restrictive for active projects"
  - "Brand transition to Amazon Q Developer has created some documentation confusion"
alternatives:
  - name: GitHub Copilot
    reason: More powerful general-purpose coding assistant with broader context awareness and Copilot Chat
  - name: Codeium
    reason: Completely free AI code completion with strong multi-language support and no AWS dependency
  - name: Tabnine
    reason: Privacy-focused AI autocomplete with on-premise deployment options for enterprise teams
faqItems:
  - question: "Is Amazon CodeWhisperer the same as Amazon Q Developer?"
    answer: "Yes — Amazon CodeWhisperer has been rebranded as Amazon Q Developer as part of AWS's generative AI product expansion. The coding assistant functionality remains, now under the Q Developer umbrella."
  - question: "Is the free tier of CodeWhisperer truly unlimited?"
    answer: "The free Individual tier provides unlimited code suggestions with no cap. Security scans are limited to 50 per user per month on the free plan."
  - question: "Does CodeWhisperer work outside of AWS projects?"
    answer: "Yes — it supports general-purpose development in 15 languages across any project type. However, its strongest differentiator is deep AWS SDK and API awareness for cloud development."
  - question: "How does CodeWhisperer handle open-source code licensing?"
    answer: "CodeWhisperer includes a reference tracking feature that flags suggestions resembling open-source code and identifies the originating licence, helping developers maintain compliance."
---
