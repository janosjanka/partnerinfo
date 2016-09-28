# Partnerinfo (www.partnerinfo.tv)

Partnerinfo is an Online Marketing & Content Management System supporting campaigns, contacts, newsletters, action links, workflows, analytics,
client-side routing, modules aka components + full-featured module designer, dependency resolution, and REST APIs for each part of the system.

In contrast to most of similar systems, it does not force you to use built-in and unchangable business functions with a bunch of checkbox controls.
You can simply create and inject your own activities using [C# Roslyn compiler](https://github.com/dotnet/roslyn) and design business workflows
in your favorite browser using pure HTML & JavaScript.

This project aimed to cover the following areas:

## Lightweight Workflows for Web Actions & HTML Activity Designer

- Pluggable business activities developed for fast, performance-critical web actions
- Standard control flow & business activities (sequence, condition, redirect, schedule, subscribe, sendMail, tagging, ...)
- Workflow designer written in pure HTML & JavaScript (a marketing specialist can also use it without having to know VS or C#)

## Action Links

An action link is a simple URL associated with a server-side workflow which can be called by executing a usual ASP.NET Web API action. When a user clicks a link or posts some form data performing either HTTP GET or POST requests, the engine invokes the specified workflow passing context data (identity, user agent, user data and other information) into it.

You can even add a custom URI segment to the end of action links to make those user-friendly or specify a contact for each action link to be able to measure activity of a given user, including your girl-friend :-)

## Contact Management & Tagging

The system enables you to easily get visitors supporting most of market leader social media authentication systems (e.g. Facebook, Google, Microsoft, Twitter, ...) or even using custom forms. Furthermore, it contains a business tagging system which enables you to add/remove (colored) tags from your contacts and send newsletters or perform some business operation based on your business tag-based rules. For instance, when someone clicks your YouTube video on your page, you can add a business tag 'He/she has seen the 1st video' extending it with a redirect action to the next video page. No hard-coded business actions !!!

## Newsletter Management

You can send an arbitrary number of newsletters specifying a group of contacts or even business tag filters. Both token replacement and background processing are supported.

## Content Management

You can easily create both layout and landing pages with a few clicks + drag & drop as you can do it in most of content management systems(?) This is not a big deal :-) The most important thing is that Partnerinfo uses pure JavaScript modules instead of slow server-side modules. If you are used to develop strongly JavaScript-based SPA applications, you will prefer a more user-experience oriented module system to legacy (server-side rendered) CMS modules. We created a few useful modules that can help you create modern web applications for your business with a minimal budget.

## Logging & Rule-based filters

## Collaboration

Similarly to Google Drive services, Partnerinfo also supports collaboration. One or more people can work on a project or site using ACL-based security. Each shareable resource can be associated with an Accesss Control List that defines who & what can do with a resource and its related parts.