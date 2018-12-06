# What is this?
These are greasemonkey scripts to make testing the StartSOLE webapp faster and easier. They are scripts that are run in your browser to make testing the webapp easier. They generally pre-fill forms with dummy data and mimic a user clicking around. After you install this in your browser, you'll get a popup on some pages in the StartSOLE web app that give you the option to prefill a form on a webpage with some content.

# Scripts

 * `greasemonkey-prefill-new-sole-lesson.js` - gives a popup on the Plan a Lesson page to prefill the content.
 * `greasemonkey-prefill-sole-reflection.js` - popup on the reflection page for a given sole lesson to prefill content.


# How do I install these?

## Install tampermonkey for Chrome

First you need to install a greasemonkey plugin for your browser. [Tampermonkey](https://tampermonkey.net/) is a good one for Chrome. Tampermonkey will give you an icon in your browser bar.

## Add the scripts to your browser

Open tampermonkey in your browser and go to the Dashboard. Click add script. Copy the code from one of the `.js` files in this repository and paste it into a new script. Save the script. That's all. Now when you go to webapp (either locally, on staging or on production) you should see a popup that asks if you want to prefill the form with data. Repeat this install process for each script in this repo.

## I need help!

Ask Drew if you need help getting it set up.
