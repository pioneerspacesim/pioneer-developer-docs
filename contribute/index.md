---
title: Contributor Guide
category: outline
order: 0
---

<!-- TODO: remove this or link to the appropriate subsection of the design document -->
[Roadmap]: ../design-document/

[forum]: https://forum.pioneerspacesim.net
[issues]: https://github.com/pioneerspacesim/pioneer/issues

# Contributor Guide

Pioneer is primarily developed and maintained by a [team of core contributors](../design-document/team.md) who have been active and working on the project for a long time. We are always happy to work with new contributors, whether you want to fix a few bugs or language strings or tackle a larger problem in the code in collaboration with other developers.

This guide presents an overview of how you can contribute to Pioneer, as well as providing resources to quickly get new contributors set up to make changes and test development builds of the game.

For technical and detailed information about working with the game or art pipeline, see the [Content Workflow](../workflow/) docs.

## Effectively Contributing

The most important aspect of contributing to Pioneer is maintaining good communication. Adding new features or changes to Pioneer requires not only the effort of the person doing the contribution, but also the effort of the rest of the development team to review the contribution and ensure it's compatible with the intended design of Pioneer. To make this as smooth as possible, it's important to communicate at multiple stages:

1. **Informally bounce ideas off people to see if they are worth bringing to the attention of the entire community:**
    - [**IRC**](./communicating.md#irc) - the most feedback. Engine room of opensource projects and used for collaboration *exclusively* by a lot of contributors.
    - [**Forums**][forum] - good for long-form discussion of a proposal, but don't expect much engagement if the idea isn't relevant to the design document or current scope of development.
2. **Put favorably received ideas up for discussion:**
    - [**Issue tracker**][issues] - discuss bugs, is focused enough to allow immediate solution. Issues can be addressed in PRs by other developers or yourself.
    - **Forums, IRC** - discuss implementation details and determine concrete goals for the idea.
    - **WIP Pull Request** - propose a solution demonstrated in code. If accepted, this can be expanded to the final implementation.
3. **Document or implement discussed and accepted ideas:**
    - [**Design Document**](/design-document) to record long-term goals and provide information for future development.
    - **Pull Request** - full implementation of discussed idea; subject to further code review and refinement.
    - **Issue tracker** - create multiple issues containing focused and implementable tasks to divide up a fully-accepted plan.

See [How to Communicate](./communicating.md) for more information.

## Report bugs

Believe it or not, but most developers don't have time to actually play the game. Thus, bug reporting is the most important part where you as a player can help the community. When you encounter something that seems strange or odd in the game, please report it, preferably to our [Issue Tracker][issues], but you can also stop by the [IRC channel](https://web.libera.chat/#pioneer) or the [dev forum](https://forum.pioneerspacesim.net/), although devforum isn't quite the place for bug reports.

Our issue tracker on Github uses [Github-Flavored Markdown][gfm] for typesetting text, as does the guide you're reading!

  [gfm]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Art Creation

If you think you can improve or contribute with something to the game then please feel free post on the [dev forum](https://forum.pioneerspacesim.net/), or pay a visit to the IRC channel. All contributions that improve the game are most welcome.

### Concept Art

There are some [articles in the works](../design-document/#visual-direction) about the intended style of Pioneer. And a [sketch topic on the dev forums](https://forum.pioneerspacesim.net/viewtopic.php?f=3&t=31). Basically every model in the game could (should) start it's life as concept sketch, especially if it's properly iterated.

-   City buildings/domes for worlds without atmosphere
-   Landing pads / ground station
-   Orbital space stations
-   Ships

### 2D Graphics

-   Face generation (currently (2015-06) [being undertaken](https://forum.pioneerspacesim.net/viewtopic.php?f=3&t=218) by Evarchart)
-   Ship textures and patterns
-   Medals / ribbons for future military missions for 3-4 different factions
-   Various icons and logos
-   Ship Equipment icons (similar to commodity market icons)

### 3D Modelling

If you know how to create 3D models (or are willing to learn), then we always need more of the following.

-   City buildings/domes for worlds without atmosphere
-   Landing pads / ground station
-   Orbital space stations
-   Ships
-   Cockpits (WIP feature)

See the tutorials and documentation in the [Content Workflow](../workflow/) section for further details.

## Code

Pioneer uses two different programming languages (not counting various configuration files). The main/core part is written in c++, which requires knowledge in this area to contribute. However, the functionality of the core is exported into the scripting language Lua, used by pioneer. Lua is easy to learn, once one has grasped the basic programming concept of if-statements and for-loops, making it perfect for the novice willing to learn basic programming. We have a category for [Category:Ideas](https://pioneerwiki.com/wiki/Category:Ideas), as well as a [Roadmap][Roadmap], both brainstorming where we want to go, although these two pages can be slightly stale.

### C++

See [Getting Started with Development](./getting-started), and have a look at the [issue tracker](https://github.com/pioneerspacesim/pioneer/issues) for feature requests and [Roadmap][Roadmap] for further details, or if you think there's a bug you can track down. On MS Windows VS2019 is the most popular IDE and is maintained. For GNU/Linux most developers use Vim or GNU/Emacs.

### Lua

Lua is easy to learn even for inexperienced programmers, and it will let you easily add new content to the game, such as missions, ads on the BBS, or events that are triggered by various actions from the player.

If you don't know how to use github (used for submitting and reviewing code contributions), someone on IRC or the dev forum can create a pull/merge request for you, since learning github can be a daunting task for a beginner.

Toget started, see [Scripting and Mission Creation](Scripting_and_Mission_Creation "wikilink"), or just dig into the code we have. `data/modules/DonateToCranks` is a simple, easy to read Lua script that implements the donation charity on the BBS. For a full mission `data/modules/DeliverPackage.lua` is recommended.

Here are some ideas for missions that can be implemented with the [Lua API](https://codedoc.pioneerspacesim.net/) we have today:

-   EASY: Extend Taxi missions to systems so far away they require multiple jumps.
-   EASY: Reverse delivery mission: go to X and pick up \<something> bring back here.
-   EASY: Science mission: Scoop x tonnes of Hydrogen samples from a star atmosphere, or mininglaser for rocky planet.
-   EASY/MEDIUM: Spy/tail/track mission: follow a ship and report to which station it lands.
-   Some kind of distress signal / rescue pilot?
-   Towing service?
-   Something that makes use of persistant characters. Maybe find a missing person, or someone on crew contracts is lost by someone somewhere else?

### Perl

If you know perl (or want to learn it), you can help improve, and extend the IRC-bot [jameson](https://github.com/robn/jameson/issues) used in the pioneer IRC channel.

### HTML/Web

If you feel like improving our homepage or documentation, then feel free to dig in.

- [Website Source](https://github.com/pioneerspacesim/pioneer-hugo)
- [Developer Documentation](https://github.com/pioneerspacesim/pioneer-developer-docs)

## Help gather information

It helps the developers greatly to know the goal they're working towards. You can help with brainstorming on various topics, and gather information:

-   Hipparcos and Tycho-2 catalogue data of star position in some, easy to parse, raw text format. We/FluffyFreak need this to make the stars (on the skybox/backdrop) seen when flying to reflect their actual positions. See [dev forum post](https://forum.pioneerspacesim.net/viewtopic.php?f=3&t=302) for more info.
-   Edit the wiki page detailing how [Commodity Prices](Commodity_Prices "wikilink") should be goverened by planet environments, etc. See various posts on dev forum, like [Rethinking the planets](https://forum.pioneerspacesim.net/viewtopic.php?f=3&t=201) and [Life in Pioneer](https://forum.pioneerspacesim.net/viewtopic.php?f=3&t=145&start=20), [Unorthodox orbital configurations](https://forum.pioneerspacesim.net/viewtopic.php?f=3&t=204) (about Lagrange points), and [this](https://forum.pioneerspacesim.net/viewtopic.php?p=2275#p2275) post.

## Writing

Anyone proficient in English may help out with writing, either for the in game content, or for the wiki.

-   One sentence description of each piece of ship equipment (to be shown in the game when selecting the item to buy).
-   Description of each ship equipment here on the wiki
-   Background (short and long) of star systems, like the ones seen when clicking on Epsilon Eridani in game.

## Wiki maintenance

If you know English you can help write tutorials, manuals, info on systems, locations, equipment, ships, and proofreading for the [User Wiki](https://pioneerwiki.com/).

-   Update outdated images showing the old user interfaces.
-   Update / fix currently (2014-06) broken links to images of ships

See [Getting started](https://pioneerwiki.com/wiki/Getting_started) for wiki howto.

## Documentation

If you know both English and Lua, you can help to improve the documentation of the Lua API and modules. Pioneer uses [Natural Docs](https://naturaldocs.org) to generate the [Lua API](https://codedoc.pioneerspacesim.net) documentation resource. Natural Docs syntax is very simple and effectively self-documenting, and there are many modules in the game that could use much better documentation.

Simply add Natural Docs comments in Lua files, and submit the changes via Pull Request to the Pioneer repository.

## Translate

If you know a language other than English you can help out with [Translations](./translations) of the game. Even the ones that are [translated](https://www.transifex.com/projects/p/pioneer/) could need improvements.

