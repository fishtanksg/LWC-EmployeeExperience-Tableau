# Employee Experience using Tableau for analytics

This Lightning Web Component (LWC) repository contains code that achieves the following:
1. Defines specific Tableau dashboard in each component
2. Creates a new record in Salesforce onClick() of Tableau dashboard

## Background

This project is built to fill in the gap of Analytics as starting point in Employee Experience story.

It has been used as a demo for Opportunities.
[More setup details](https://drive.google.com/file/d/131bVVZmMBWJyVB_rBGMYxQJ1aPCnyLA_/view?usp=sharing)

### Demo Flow
- [Salesforce Employee Engagement Story](https://youtu.be/dCKR12bL_J8)
- [Employee Engagement with Analytics](https://youtu.be/7vFxH_51_Xw)

## Setup
Before you deploy this repository of code, take note of the following:

### LWC Setup Note #1

As we need to reference Tableau’s Javascript API, we need to upload the Javascript zip file as a Static Resource in Salesforce. 

Here’s where you get it:

- Check out [get started here](https://tinyurl.com/y79apbke) on what are the functions Tableau JS API can do
- Use this [public hosted Javascript file](https://tinyurl.com/ycdo8l99) to get zip file for static resource

### LWC Setup Note #2

In the Git Repository, refer to  supplierDashboard component for creating a record in Salesforce by clicking on Tableau dashboard.

1. Import Tableau JS file
2. renderedCallback() and initViz() 
  →  define which Tableau dashboard to render
3. listenToMarkSelection() 
  → listens to user interaction with Tableau
4. onMarkSelection()
  → triggers actions, in this case create a Case record in Salesforce


## Other Resources
- [Embedding Tableau into Salesforce: SAML with SF IDP under 5 Minutes](https://www.linkedin.com/pulse/embedding-tableau-salesforce-setup-saml-using-sf-idp-under-shih/)
- [Embedding Tableau into Salesforce: Recipe under 8 Minutes with URL filter](https://www.linkedin.com/pulse/embedding-tableau-salesforce-heres-your-8-minutes-recipe-fu-hua-shih/)
- [Embedding Tableau into Salesforce: Here's Your 2 Minutes Recipe to Demo](https://www.linkedin.com/pulse/embedding-tableau-salesforce-heres-your-2-minutes-recipe-fu-hua-shih/)
