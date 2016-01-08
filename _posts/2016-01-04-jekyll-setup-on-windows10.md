---
layout: post
title: Jekyll setup on Windows 10
excerpt: "Semi-automated workflow for setting up Jekyll on Windows 10."
modified: 2016-01-04
tags: [jekyll, tutorial, windows10]
comments: true
image:
  feature: sample-image-5.jpg
  credit: WeGraphics
  creditlink: http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/
---

<section id="table-of-contents" class="toc">
  <header>
    <h3>Overview</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->


This post covers my experience establishing a local environment for building and compiling a Jekyll site on Windows 10 (64).

## A troublesome task?
It's been said around that setting up a local development environment of Jekyll on Windows is quite troublesome; my experience was not so bad...

The reasoning behind the steps I outline below is well documented on the interwebs and the [Jeykyll site](http://jekyllrb.com/) with its [Jekyll on Windows page](http://jekyllrb.com/docs/windows/#installation) is a good place to start.

### My steps
This was mostly a CLI experience with [Chocolately](https://chocolatey.org/) with the exception of the Ruby DevKit install.

#### 1. Install Ruby
{% highlight shell-session %}
$ cinst ruby -y
{% endhighlight %}

#### 2. Install Ruby DevKit
The Choco package failed so I downloaded the DevKit from the [rubyinstaller.org/downloads](http://rubyinstaller.org/downloads/) page.  The instructions on the [Windows setup guide](http://jekyll-windows.juthilo.com/) helped out.

Navigate to the DevKit folder
{% highlight shell-session %}
  $ cd c:\tools\ruby-devkit-directory
{% endhighlight %}
Init the DevKit:
{% highlight shell-session %}
$ ruby dk.rb init
{% endhighlight %}
Now modify the DevKit config.yml in a text editor by defining the path to your installed Ruby.

Then you can install the devkit
{% highlight shell-session %}
  $ ruby dk.rb install
{% endhighlight %}

#### 3. Install Jekyll with github-pages compatible gems
{% highlight shell-session %}
  $ gem install github-pages
{% endhighlight %}

This installs lots of gems so takes a while...but produced the following satisfying output

`
49 gems installed
`

### Optional steps for syntax highlighting with Pygments

#### 4. Install Python
{% highlight shell-session %}
 $ cinst python2
{% endhighlight %}
and verify install with by querying the version:
{% highlight shell-session %}
  $ python -v
{% endhighlight %}

#### 5. Install Pygments via EasyInstall
Guided by [Yi Zeng](http://yizeng.me/2013/05/10/setup-jekyll-on-windows/) - thanks.

{% highlight shell-session %}
  $ PowerShell$ (Invoke-WebRequest https://bootstrap.pypa.io/ez_setup.py).Content | python -
{% endhighlight %}
and verify EasyInstall by querying the version:
{% highlight shell-session %}
  $ $ easy_install --version
{% endhighlight %}
now simply install Pygments:
{% highlight shell-session %}
 $ easy_install Pygments
{% endhighlight %}

### Test the Jekyll installation

1. $ jekyll new blog
2. $ cd blog
3. $ jekyll serve
4. $ start chrome "http://localhost:4000"

### Starting from a theme

1. $ jekyll new my-blog-name
2. $ cd my-blog-name
3. Copy zip contents to my-blog-name
4. $ gem install bundler
5. $ bundle update
6. $ bundle build
7. $ jekyll build
  * [booo the SSL cert issue for Ruby](http://stackoverflow.com/a/7536952) but Fletcher Nichol's [gist](https://gist.github.com/fnichol/867550) ruby script works.
8. $ jekyll serve
