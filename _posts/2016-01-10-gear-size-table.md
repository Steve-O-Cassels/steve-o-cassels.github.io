---
layout: post
title: Bicycle Gear size and ratios
excerpt: "A hacky way to produce a gear size table in Jeckyll"
modified: 2016-01-04
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

### What I learned
How to wire in a client side application to a Jekyll site:

* Using **_includes** as a component wrapper.
* Using **_assets** to provide JavaScript libraries.
* Using **Jekyll front matter** and **Liquid templates** to load page specific assets
* Using **array comprehensions** in CoffeeScript

### Version 1: HTML Template and CoffeeScript
This example uses an [HTML 5 template](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)
and uses my [gear-size-calculator](https://github.com/Steve-O-Cassels/gear-size-calculator) Node Module to generate the gear-size data.

### UI-Features review
Well, it does the basics...

* Good: MVP done
* Good: Provides side by side comparison of two chainring and cassette alternatives
* Hmmm: in terms of an algorithm and a complete feature set, it does not take account of crank length - maybe the UI should provide comparison tables for this dimension
* Hmmm: Usability: Does not have a self executing render at page ready
* Hmmm: Usability: rendering on every drop down change sucks - Node's EventEmitter to the rescue
* Hmmm: gosh it ain't pretty


### Node-Module review
My [gear-size-calculator node module](https://github.com/Steve-O-Cassels/gear-size-calculator) can be installed with the npm - see the readme.

* Good: Node module written in CoffeeScript covered in Unit tests
* Good: Javascript libraries keep script separate from HTML
  * enables caching
  * hmmm: could cause version issues as the scripts are not time-stamped
* Good: uses [composibility](http://eloquentjavascript.net/05_higher_order.html#h_+NeFt8aXxf) and  [higher order functions](http://eloquentjavascript.net/05_higher_order.html)
* Hmmm: Private part of the class api is exposed in order to cover it in tests
so instead of this:
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

* Hmmm: no front-end timings
* Hmmm: not published
* Hmmm: Math extensions wrapped into the module

### Jekyll-integration review
The Node module is manually deployed into the site - this is not good.
Here are some improvements:

Make the render script a second node module, this would enable:

  * default configuration for range values for the end user to pick from
  * make it easier to deploy into different targets
  * testability of render via node dom
  * better eventing using Node's [Event Emitter](https://nodejs.org/api/events.html)

## Version 1 demo

{% include _gear-size.html %}
