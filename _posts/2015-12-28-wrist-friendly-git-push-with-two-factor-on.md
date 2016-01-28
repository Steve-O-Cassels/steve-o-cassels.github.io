---
layout: post
title: Wrist friendly git push over https with two-factor on
excerpt: "Wrist friendly git push over https with two-factor on"
modified: 2016-01-01
tags: [git, prompt]
comments: true
---

Although this is documented on the interwebs, the following works as a prompt for me;


**Be guided by [stack-overflow](http://stackoverflow.com/questions/17659206/git-push-results-in-authent ication-failed) on this.**

1. Generate a [new personal access token](https://github.com/settings/tokens/new) on GitHub.
2. Ensure git credential-helper is set to wincred as follows:

  ``` $ git config -l ```

  <figure>
    <img
    src="/images/git-config-wincred.png">
    <figcaption>
    Output when git credential-helper is set to wincred
    </figcaption>
  </figure>

Not set? then set it with:

```$ git config credential-helper=wincred```

**Getting your token into the credential store**

The first time you push via https after setting to wincred make sure you do so in bash.
Whereupon you should be prompted for creds -

  * Enter your new access token as the password.

How do I know it worked?

  * Subsequent pushes should not ask for creds.
  * Check the windows credential store and you will now see your creds have been automatically saved for you.
