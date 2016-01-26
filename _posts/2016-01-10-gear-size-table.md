---
layout: post
title: Bicycle Gear size and ratios
excerpt: "A hacky way to produce a gear size table in Jeckyll"
modified: 2016-01-04
tags: [jekyll, cycling, script]
comments: true
custom_js:
- gearsize
- gearsizerender
---

## What I learned
* How to wire in a client side application to a Jekyll site:
  * Using **_includes** as a component wrapper.
  * Using **_assets** to provide JavaScript libraries.
  * Using **forms** for interaction on a Jekyll site.
  * Using **Jekyll front matter** and **Liquid templates** to load page specific assets

### Version 1: HTML Template Element
This example uses an [HTML 5 template](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)

{% include _gear-size.html %}
