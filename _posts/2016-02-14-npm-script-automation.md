---
layout: post
title: npm scripts for automation
excerpt: "example of automation node module publish steps"
modified: 2016-02-10
tags: [npm, automation, learnings]
comments: true
image:
  feature: aberfeldy.jpg
  credit: Steve-O-Cassels
---

I wanted an easy process for publishing changes to my simple node module.

## My learning...about using npm scripts for build automation
My requirements were very common:

* Failing tests to prevent publishing.
* The lib to be compiled to only when tests pass.
* Simple version management and releases to get tagged in the git repo.
* Avoiding Gulp as its overkill for my simple workflow (so far!).
* Avoid custom shell scripts and be platform independent.

So I've learned about some of the great features available in the [node scripts entry](https://docs.npmjs.com/misc/scripts):

* pre and post triggers
* version bumping

I added these scripts for automation to my simple node module:

{% highlight json %}
  "scripts": {
    "preversion": "npm test",
    "prepublish": "coffee -o lib/ -c src/calculator.coffee",
    "patch-release": "npm version patch && npm publish && git push --follow-tags",
    "minor-release": "npm version minor && npm publish && git push --follow-tags",
    "major-release": "npm version major && npm publish && git push --follow-tags",
    "test": "./node_modules/.bin/nodeunit tests"
  },
{% endhighlight %}

Which means I can do a patch version bump, test, publish to npm and tag the release in GitHub with:

{% highlight bash %}
  $ npm run patch-release
{% endhighlight %}

and get this output:

<figure>
  <a
  href="/images/npm-run-patch-release-output.png">
  <img
  src="/images/npm-run-patch-release-output.png">
  </a>
  <figcaption>
  Output from one command to version bump, test, publish to npm and tag the release on GitHub.
  </figcaption>
</figure>

### Related readings
Whilst learning this I came across some great resources on automation:

* Nice - albeit old - post from Keith Cirkel on the topic of [Npm as a build tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
  * Contains a good debate about npm scripts vs Gulp tasks
* Lin Clark's [github-pages-deploy](https://github.com/linclark/github-pages-deploy) and the related [npm blog post](http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm) is a good read.
  * This covers some discussion of [shebangs](https://en.wikipedia.org/wiki/Shebang_(Unix))
