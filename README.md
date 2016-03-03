# Vertically Compliant

This site is built on the great work of others in the community.

## Site Design
I started with the [Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes) theme, a two column responsive Jekyll theme perfect for powering your GitHub hosted blog.

## Checklist for going live

### Functional
Functional requirements.

#### User interaction
* [ ] Search
  * Achieved with ...[maybe not Google](http://jekyll.tips/tutorials/search/)
* [x] Comments with Disqus
  * Achieved out of the box with Minimal Mistakes theme - see config.yaml
* [x] Post Reading Time - this customisation was referenced from a [pull-request on minimal-mistakes](https://github.com/mmistakes/minimal-mistakes/pull/143)
* [x] Domain based emails: in my case provided by Domain Registrar.
* [ ] [Contact form with jotForm](http://pixelcog.com/blog/2013/jekyll-from-scratch-extending-jekyll/#contact-forms-with-jotform)
* [ ] [Author Marks](http://mattgemmell.com/author-marks/) from Matt Gemmell.
* [ ] [Today I Learned (TIL) Page](https://github.com/cagrimmett/jekyll-tools) from Chuck Grimmett and use of Tags

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
