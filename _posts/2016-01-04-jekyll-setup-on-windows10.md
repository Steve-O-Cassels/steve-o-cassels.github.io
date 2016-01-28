---
layout: post
title: Jekyll setup on Windows 10
excerpt: "Semi-automated CLI workflow for setting up GitHub-Pages compatible Jekyll on Windows 10."
modified: 2016-01-04
tags: [jekyll, tutorial, windows10]
comments: true
image:
  feature: sample-image-5.jpg
  credit: WeGraphics
  creditlink: http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/
---

{% include _toc.html %}

This post covers my experience establishing a local environment for building and compiling a GitHub-Pages compatible Jekyll site on Windows 10 (64).

## A troublesome task?
It's been said around that setting up a local development environment of Jekyll on Windows is quite troublesome; my experience was not so bad...

The reasoning behind the steps I outline below is well documented on the interwebs and the [Jeykyll site](http://jekyllrb.com/) with its [Jekyll on Windows page](http://jekyllrb.com/docs/windows/#installation) is a good place to start.

### My steps
This was mostly a CLI experience with [Chocolately](https://chocolatey.org/) with the exception of the Ruby DevKit install.

#### 1. Install Ruby
{% highlight bash %}
$ cinst ruby -y
{% endhighlight %}

#### 2. Install Ruby DevKit
The Choco package failed so I downloaded the DevKit from the [rubyinstaller.org/downloads](http://rubyinstaller.org/downloads/) page.  The instructions on the [Windows setup guide](http://jekyll-windows.juthilo.com/) helped out.

Navigate to the DevKit folder
{% highlight bash %}
$ cd c:\tools\ruby-devkit-directory
{% endhighlight %}
Init the DevKit:
{% highlight bash %}
$ ruby dk.rb init
{% endhighlight %}
Now modify the DevKit config.yml in a text editor by defining the path to your installed Ruby.

Then you can install the devkit
{% highlight bash %}
  $ ruby dk.rb install
{% endhighlight %}

#### 3. Install Jekyll with github-pages compatible gems
Here's the current dependency list of [github-pages compatible Ruby gems](https://pages.github.com/versions/).
{% highlight bash %}
  $ gem install github-pages
{% endhighlight %}

This installs lots of gems so takes a while...but produced the following satisfying output

`
49 gems installed
`

### Optional steps for syntax highlighting with Pygments

#### 4. Install Python
{% highlight bash %}
$ cinst python2
{% endhighlight %}
and verify install with by querying the version:
{% highlight bash %}
$ python -v
{% endhighlight %}

#### 5. Install Pygments via EasyInstall
Guided by [Yi Zeng](http://yizeng.me/2013/05/10/setup-jekyll-on-windows/) - thanks.

{% highlight bash %}
$ PowerShell$ (Invoke-WebRequest https://bootstrap.pypa.io/ez_setup.py).Content | python -
{% endhighlight %}
and verify EasyInstall by querying the version:
{% highlight bash %}
$ easy_install --version
{% endhighlight %}
now simply install Pygments:
{% highlight bash %}
$ easy_install Pygments
{% endhighlight %}

### Test the Jekyll installation

{% highlight bash %}
$ jekyll new blog
$ cd blog
$ jekyll serve
$ start chrome "http://localhost:4000"
{% endhighlight %}

### Starting from a theme

{% highlight bash %}
$ jekyll new my-blog-name
$ cd my-blog-name
# Copy zip contents to my-blog-name then...
$ gem install bundler
$ bundle update
$ bundle build
$ jekyll build
{% endhighlight %}

**TroubleShooting Jekyll Build**

At this point in my initial setup I got an error on my first build:

* [booo the SSL cert issue for Ruby](http://stackoverflow.com/a/7536952) but Fletcher Nichol's [gist](https://gist.github.com/fnichol/867550) ruby script works.

After which I could
{% highlight bash %}
$ jekyll serve
{% endhighlight %}
