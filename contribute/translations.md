---
title: Translations
category: contributing
---

# Translations

All text in Pioneer is translatable, and the game ships with several translations. Here's everything you need to know.

## For translators

All our translations are managed through [Transifex](https://transifex.com), a free web-based translation service. To start writing translations, sign up there, using [this link](https://www.transifex.com/signup/open-source/?join_project=pioneer), and then take a look at the [Pioneer project](https://www.transifex.com/projects/p/pioneer/). You can either use the web-interface, or download the full file, and edit off line, and then re-upload.

Changes to translations are automatically pulled into the master git repo, from transifex, twice per day, and from there to the builds when they're next run.

In Transifex you can subscribe to notifications for the languages or resources you're interested in. When new strings are added or modified, you'll be told about it.

If you want to translate Pioneer to an entirely new language, please [open an issue](https://github.com/pioneerspacesim/pioneer/issues) on the tracker and someone will create the translation for you.

English is the canonical language for Pioneer. As such, you can't directly modify the english strings through Transifex. If you want to change those, you'll need to make the change in source code hosted in git and submit a pull request like for a normal code change.

Untranslated strings will use the value from the English version.

You can leave comments in Transifex to help out other translators. You'll also see any notes left by the developers to help you translate a particular string.

If you're a new translator and you'd like your name included in AUTHORS.txt, please let us know!

## For mod developers

Each module should define its own translation resource, called `module-foo`.

To get at the strings for your module, do something like:

```lua
local Lang = require 'Lang'
local l = Lang.GetResource("module-foo")
```

Then you can get at the string by its token:

```lua
print(l.SOME_TRANSLATED_STRING)
```

While it is possible to load multiple translation resources to share strings, it's highly recommended that you don't do that. Stick to your own strings so that you don't have to track changes in other modules. Duplicates across resources are fine. Note that code that uses multiple resources won't be accepted into the main Pioneer repository unless you've checked it with a core developer first and it has a good reason.

Translations are [`chrome.i18n` JSON](https://developer.chrome.com/extensions/i18n.html) files. The format is fairly simple - a JSON object with tokens as keys and values of an object with two keys, `message` and `description`. `message` is the text that will appear in the game, while `description` provides instructions for the translator that will be displayed in Transifex. [Here](https://www.json.org/img/string.png) is a useful chart showing how characters are interpreted.

If you're submitting code that requires a new language you should only include `en.json`. Please tag **@impaktor** in your pull request so they can create a new resource in Transifex and make sure a language update is done at merge. If you don't do this then you'll break the game for non-English users.

## For core developers

The `core` resource is magical. If you add a string to it, you also need to add it to `LangStrings.inc.h` and recompile. It will then be available as `Lang::SOME_TRANSLATED_STRING`.
