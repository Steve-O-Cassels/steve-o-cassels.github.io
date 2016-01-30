---
layout: post
title: Bicycle Gear size and ratios
excerpt: "A hacky way to render a gear-size-table using CoffeeScript and HTML 5 templates in Jeckyll"
modified: 2016-01-30
tags: [jekyll, cycling, script]
comments: true
custom_js:
- gear-size
- gear-size-render
---

{% include _toc.html %}

## Calculating gear sizes
This has been [done many times before on the interwebs](https://www.google.co.uk/webhp?hl=en#hl=en&q=bike+gear+size+calculator) but its fun - [Sheldon Brown's calculator being one](http://www.sheldonbrown.com/gears/) I have referred to for years.

The math is lightweight and the features just rich enough to make it an interesting problem for client side development - both in terms of features and usability.  Sheldon has done us a great service by providing a nicely documented thought process and nomenclature not to mention the math for calculating gear sizes.
Feature wise we often see:

1. [gear size tables in inches](http://www.sheldonbrown.com/gloss_g.html#gearinch) or meters
2. [ratios in one form](http://www.sheldonbrown.com/gain.html) or another
3. distance travelled
4. speed at x crank revolutions for a given gear size

and so on.

### Version 1: MVP via HTML Template and CoffeeScript
This example uses an [HTML 5 template](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)
and uses my [gear-size-calculator](https://github.com/Steve-O-Cassels/gear-size-calculator) Node Module to generate the gear-size data.

### UI-Features / Requirements
1. Provide UI that enables side by side comparison of two chainring and cassette alternatives - to compare apples to apples use a standard gear ratio..
2. Provide gear ratio in the traditional club rider vernacular, **Gear Inches**, see quote below.
3. Provide summary information about the inputs that made the gear size in inches - mouse hover tips
4. Render gear-size from these inputs
  * Chainring teeth
  * Sprocket teeth
  * Bare rim diameter
  * Tyre size

Gear Inches specification by Sheldon:

> [Gear inches is] the diameter of the drive wheel, times the size of the front sprocket divided by the size of the rear sprocket

#### Improvements
1. Provide an alternative comparison via other algorithms e.g.
    * Gear size in meters
    * Gear ratio that derives from crank length - as Sheldon suggested
    * Speed at 100 revs for a given gear
2. Provide means to render entire gear table as opposed to chainring-cassette comparison mode    
2. Usability: rendering on every drop down change sucks
3. Improve hover styling


### Implementation summary

1. Computation code and rendering code separated
2. Gear-size computation authored in my [gear-size-calculator](https://github.com/Steve-O-Cassels/gear-size-calculator) Node module.
3. Computation code and unit-tests in CoffeeScript
4. Rendering code kept distinct from HTML template via JavaScript library

#### Improvements
1. Rendering code not implemented via TDD
2. Rendering and Computation code not versioned so could cause cache version issues as the scripts are not time-stamped e.g. forcing updates to end-user
3. Computation code has a promiscuous API overly exposing private API members to enable unit-testing those private methods.

  Instead of this:
  {% highlight coffee-script %}
  class GearSize.Calculator
    generateGearSizes: generateGearSizes
    generateGearSizesInInches: generateGearSizesInInches
    getGearSizeInInches: getGearSizeInInches
    getGearRatio: getGearRatio
    getCircumference: getCircumference
    getRimAndTyreCircumference: getRimAndTyreCircumference
    getRimAndTyreDiameter: getRimAndTyreDiameter
    mmToInches: mmToInches
    mmToCm: mmToCm
  {% endhighlight %}

  it should just expose one method to the web app:
  {% highlight coffee-script %}
  class GearSize.Calculator
    generateGearSizes: generateGearSizes
  {% endhighlight %}
  This could be resolved by using the [sandbox feature of nodeunit](https://github.com/caolan/nodeunit#sandbox-utility) for testing the private api parts.

4. No front-end timings for comparison and evaluating regression
5. Node Computation module not published
6. Node Computation module does not validate inputs to the public Api
6. Math extensions wrapped into the Node module

### Jekyll-integration review
This is where it gets hacky...did I say it's a WiP aka MVP?

#### Problems
1. Manual intervention required to deploy computation script
2. Rendering library is untested
3. Rending library is not easy to import to another project, versioned & etc
4. Rendering library code suffers from repetition and general lack of readability
5. Default values for render template are hard wired instead of from configuration

#### Improvements
1. Use Browserify to web-enable the node module(s) used
2. Provide Gulp automation for the build process
2. Make the render script a second private node module to enable:
  * default configuration for range values for the end user to pick from
  * make it easier to deploy into different targets
  * testability of render via node dom
  * better eventing using Node's [Event Emitter](https://nodejs.org/api/events.html)

### What I learned

How to wire in a client side application to a Jekyll site:

* Using **_includes** as a component wrapper.
* Using **_assets** to provide JavaScript libraries.
* Using **Jekyll front matter** and **Liquid templates** to load page specific assets
* Using **array comprehensions** in CoffeeScript
* Using **node-unit**

## Version 1 demo

{% include _gear-size.html %}
