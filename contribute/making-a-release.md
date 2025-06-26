---
title: Making a Release
category: contributing
---

# Making a Release

This details the release process of pioneer, written for the developer team, as the knowledge of best practice is distributed over many individuals, and memory fades with the time between each release.

(For players, we recommend those who are able, to [compile the game from master](https://pioneerwiki.com/wiki/FAQ#Build_from_source), to get and try the latest features, and help report bugs.)

Pioneer is in continuous development, and technically, has never had any hardened "stable" releases. However, as of 2019, we aim to make a periodic release that bundles many new features and that has undergone a feature-freeze to find bugs, prior its release.

Due to tradition, we try to not let it be more than one year between each official release. [Happenstance](https://github.com/pioneerspacesim/pioneer/issues/4496#issuecomment-459761900) has made that date be February 3rd each year. (Possibly, [pi-day](https://en.wikipedia.org/wiki/Pi_Day) would be better suited?)

## Prepare

- In the weeks leading up the release date, finish up pull requests, merge them and then focus on ironing out bugs.
- Announce to [translators](https://www.transifex.com/pioneer/communication/?q=project%3Apioneer/) on Transifex that we have a release incoming, and give a deadline for getting new translations included. (Possibly also tweet it?). (devs with transifex-access: impaktor, robn, jpab, ecraven, sturnclaw).


## Release Checklist

Things that need to be done for release

- Ensure that transifex bot is synchronizing (ecraven), if not, run manually (impaktor, sturnclaw)

- Ensure the Changelog, AUTHORS, README and other docs are up to date.

- Start to draft a new [release](https://github.com/pioneerspacesim/pioneer/releases) a few days in advance. Go through entire [Changelog](https://github.com/pioneerspacesim/pioneer/blob/master/Changelog.txt) from last release, categorize all changes into into _Major_ and _Minor_ features, and include all bug fixes under its own _Bugfixes / Tweaks_. [Good release notes](https://refactoringenglish.com/chapters/release-announcements/) does more than just describe what the development team has done (changelog), instead focus how it benefits the player:
- Focus is on things relevant and exciting to the player, e.g. do not include internal code refactor changes
- Why is the user experience better now compared to previous version
- What new gameplay is available?
- What has become easier, faster, or better looking?
- Bugs: avoid focusing on the flaw that has been fixed or the absence of the bug, but instead focus on improved user experience
- Include screenshots, preferably highlighting the part of i interest with a red box or arrow

- Last merge before release:
  - bump `s_saveVersion` (if needed),
  - update `set(PIONEER_VERSION "YYYYMMDD")` to the current release version near top of [CMakeLists.txt](https://github.com/pioneerspacesim/pioneer/blob/master/CMakeLists.txt).
  - see notes in [SAVEBUMP.txt](https://github.com/pioneerspacesim/pioneer/blob/master/SAVEBUMP.txt) on changes pending the bump
  - make sure Changelog.txt is updated, and
  - add the release text to [NEWS.md](https://github.com/pioneerspacesim/pioneer/blob/master/NEWS.md) file.

- To publish, simply create a tag (either in the draft release, or push manually), of form `YYYYMMDD`. Github will start a new github action, and build windows and GNU/Linux binaries, and attach to the release notes. Note: once build is done, ensure the build artifacts have correct names: `pioneer-<YYYYMMDD>-<win.exe|linux.tar.gz>`.

::: details Click for code for manual push of tag
```shell
 git fetch --all -p
 git rebase upstream/master
 git tag YYYYMMDD
 # (avoid "git push --tags", as it will push all tags)
 git push upstream YYYYMMDD
```
:::

- Need to trigger re-build our home page manaully, by "Actions" tab -> "Deploy Hugo Site to pages" -> "Run workflow" drop down menu: [github repo](https://github.com/pioneerspacesim/pioneer-hugo/actions/workflows/hugo-pages.yml)

- [Flatpack](https://github.com/flathub/net.pioneerspacesim.Pioneer/)
  - Update [recipe](https://github.com/flathub/net.pioneerspacesim.Pioneer/blob/master/net.pioneerspacesim.Pioneer.json) like [so](https://github.com/flathub/net.pioneerspacesim.Pioneer/pull/4)
  - Version tag & date
  - [This](https://flathub.org/repo/appstream/net.pioneerspacesim.Pioneer.flatpakref) link always points to latest flatpack

## Announce

- Post to [SSC](https://spacesimcentral.com/community/pioneer/) player community forum (impaktor, Nozmajner, & co)
- Post to [discord](https://discord.com/invite/RQQe3A7) (Nozmajner, sturnclaw)
- Post on [Mastodon](https://mstdn.games/@pioneerspacesim) at [https://mstdn.games](https://mstdn.games/) (Nozmajner)
- Post to [Reddit](https://www.reddit.com/r/pioneerspacesim) (Nozmajner)
- Post to [itch](https://pioneerspacesim.itch.io/pioneer) (wkfo, Nozmajner, FluffyFreak, ElonSatosh)
- [Tweet](https://twitter.com/pioneerspacesim/) it (impaktor)
- Make a [Youtube](https://www.youtube.com/@pioneerspacesim) community post / or even a trailer video?

## Monitor downloads

- Monitor [download counts](https://api.github.com/repos/pioneerspacesim/pioneer/releases) from the release.

::: details Code for seeing downloads
```shell
  `curl -s https://api.github.com/repos/pioneerspacesim/pioneer/releases | egrep '"name"|"download_count"'`
```
:::

- Itch tracs its own downloads
- Flathub [shows](https://flathub.org/apps/net.pioneerspacesim.Pioneer) cumulative downloads
- (Sourceforge has public download stats)

## Misc

Old/obsolete practices currently not in use / maintained

- [Here](https://www.internalpointers.com/post/build-binary-deb-package-practical-guide) is a guide for building deb-packages, might be worth considering in the future.
- We no longer upload to [sourceforge](https://sourceforge.net/projects/pioneerspacesim/files/), if we would like to, this falls on FluffyFreak
- Post to [moddb](https://www.moddb.com/games/pioneer/downloads) ([geraldine](https://spacesimcentral.com/community/profile/geraldine/)/[miggy4000](https://www.moddb.com/members/miggy4000))
- OSX build [salborrelli](https://github.com/salborrelli), [Philbywhizz](https://github.com/Philbywhizz) (currently on ice)
