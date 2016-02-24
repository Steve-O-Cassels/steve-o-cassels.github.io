# Vertically Compliant

This site is built on the great work of others in the community.

## Site Design
I started with the [Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes) theme, a two column responsive Jekyll theme perfect for powering your GitHub hosted blog.

## Minimal Mistakes is all about:

* Responsive templates. Looking good on mobile, tablet, and desktop.
* Gracefully degrading in older browsers. Compatible with Internet Explorer 8+ and all modern browsers.
* Minimal embellishments -- content first.
* Optional large feature images for posts and pages.
* Simple and clear permalink structure.
* [Custom 404 page](http://mmistakes.github.io/minimal-mistakes/404.html) to get you started.
* Support for Disqus Comments

See a [live version of Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes/) hosted on GitHub.

## Checklist for going live

### Functional
Functional requirements.

#### User interaction
* [ ] Search
  * Achieved with ...[maybe not Google](http://jekyll.tips/tutorials/search/)
* [x] Comments with Disqus
  * Achieved out of the box with Minimal Mistakes theme - see config.yaml
* [ ] Post Reading Time
  * GitHub pages compatible (read - no plugins) reading time is well [documented around the interwebs](https://www.google.co.uk/search?q=jekyll+reading+time&rlz=1C1GIWA_enGB646GB646&oq=jekyll+reading+time&aqs=chrome..69i57j69i65l2j69i59j69i60l2.2519j0j7&sourceid=chrome&es_sm=0&ie=UTF-8#q=jekyll+reading+time+without+plugins+github) and although [this looks cool](http://portfolio.johnpaulwhatnow.com/webdevelopment/jekyll-estimated-reading-time-liquid-no-plugins/) but I'd say [this is better](http://andytaylor.me/2013/04/07/reading-time/).
* [ ] Domain based emails.
* [ ] [Contact form with jotForm](http://pixelcog.com/blog/2013/jekyll-from-scratch-extending-jekyll/#contact-forms-with-jotform)
* [ ] [Author Marks](http://mattgemmell.com/author-marks/) from Matt Gemmell.

### Non-Functional
Non-Functional requirements.

#### Analytics
* [x] Google analytics

#### Page Speed
* [x] CSS compressed
  * Achieved out of the box with Minimal Mistakes theme - see config.yaml
* [x] Minified HTML
  * Thanks to [Anatol Broder](https://github.com/penibelst) for making this a simple setup with his [Jeykll Compress](https://github.com/penibelst/jekyll-compress-html).

#### Testability in Deployment Pipeline and CI
* [ ] Continuous Integration
  * [ ]  [Travis CI is phaareee for Open Source](https://travis-ci.com/plans)
* [ ] CoffeeScript / JavaScript asset tests

### Domain switch-on checklist
* [x] Add CNAME file to root and [do the other necessary bits](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/#use-your-own-domain).
  - The [Google Apps Toolbox](https://toolbox.googleapps.com/apps/main/) provides a handy online Dig to make [finding the IP of your repo easy](https://toolbox.googleapps.com/apps/dig/#A/steve-o-cassels.github.io).
* [x] Add Google Analytics tag
* [x] Add Social media links
* [x] Move extraneous or incomplete posts to _drafts
