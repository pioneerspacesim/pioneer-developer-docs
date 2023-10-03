---
title: Using Git and Github
category: contributing
---

# Using Git and Github

Developing on pioneer means using the version control tool 'git' and the [github](https://github.com/) website. git especially has a reputation for having a steep learning curve, so here we'll try to give you enough knowledge to be dangerous!

## Prerequisites

A working installation of git, a GitHub account, and comfort with using the command line of your chosen operating system.

The GitHub sign-up page is [here](https://github.com/signup/free). Make a note of your user name as you'll need it to make your local pioneer repository.

On Linux, git is available in all distributions using the standard tools such as APT, yum or emerge. Since there is a wide range of file browsers and graphical environments, this tutorial limits itself to the command line interface.

On Windows you have two options, [Git for Windows](http://msysgit.github.com/) aka msysgit, or [Github for Windows](http://windows.github.com/) which is essentially msysgit but with some extra stuff bundled. Some of which is good ([posh git](https://github.com/dahlbyk/posh-git)) and some of which is well, not (github's 'friendly' gui). Since both include the same command line tools and cross platform gui tools, either is fine for our purposes here. The github one may be more convenient to install.

On Mac OS X, git will have been installed with XCode as git is built into the XCode IDE. However, usage of git from from within an IDE isn't something I'm familiar with so isn't covered here. If you want to follow along with this document then if you elected to install the XCode command line tools, then the git commands below should work unaltered from a terminal window. If you didn't then you'll need to use `xcrun` to run the commands in terminal, either by adding `xcrun` in front of each of the commands or aliasing `git` and `gitk` to `xcrun git` and `xcrun gitk` in your `~/.profile`. Have a look at [this guide](http://www.cocoanetics.com/2012/07/you-dont-need-the-xcode-command-line-tools/) for details.

A clear and concrete introduction to git can be seen at this [Git Guide](https://rogerdudler.github.io/git-guide/)

### Configure git to sane global settings

First we need to [configure](http://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) git some. You probably want to run these commands:

`  git config --global user.name "Your Name"`  
`  git config --global user.email "you@example.com"`  
`  git config --global color.ui true`  
`  git config --global push.default simple`

Note, that each commit you do will be stamped by your name and email entered here.

Also, in our [Coding Conventions](./coding-conventions) we use 4 width tab indentation, but the "git diff" and "git show" tools assume 8 character wide tabs. This is fixed by:

`  git config --global core.pager 'less -x1,5'`

(the cryptic numbers are due to git using the first column for "+"/"-" to show inserted or removed lines)

## Creating your pioneer repositories

Git, as a version control system, stores all source files for Pioneer (or any other project you've chosen to manage with git) along with their histories in **repositories** (usually shortened to just 'repos'). These are areas of a computer's file system where has git has been told to track and manage changes to the files placed in them.

There are three different repositories that you mainly deal with when developing pioneer.

-   The `upstream` repo. This is the main Pioneer repository stored on GitHub. This is read-only except to the core team (and even they don't do their development there).
-   The `origin` repo. This is a public Pioneer repository personal to you, but stored on GitHub under your username, so other people can see the changes put into it. This is read-only to everyone except you.
-   The `local` repo. This is your personal Pioneer repository on your computer, not accessible by anyone else.

Before you can start developing you need to setup both your Pioneer `origin` and `local` repositories.

### Your origin repository

Your `origin` repository you make on GitHub. To do that, make sure that you're logged in there and go to the main [GitHub Pioneer page](https://github.com/pioneerspacesim/pioneer) in your web browser, and click the 'Fork' button at the top of that page: ![RTENOTITLE](./img/ForkPioneer.png)

GitHub will clank and whirr as it makes a copy of the main Pioneer repo under your username. Eventually it will finish, and you'll end up on page almost exactly like the main GitHub Pioneer page, but instead of being named `pioneerspacesim/pioneer` your copy is named `<your github user name>/pioneer`.

Having made your `origin` repo, you're now ready to make your local one.

### Your local repository

You make your `local` repository by cloning a copy of your new `origin` repository to your local machine.

At the command line, navigate to where on your filesystem you want to put your local git repos. For instance on Linux I put mine in `~/repos` whilst on Windows I put them in `c:\develop\github-repos`. You can move the folder at a later time without breaking anything. Once you're there execute the following command replacing `your github username` with, well, your github username.

`git clone https://github.com/<your-username>/pioneer.git`

Just like clicking Fork on the main Pioneer GitHub repo made a clone of it under your GitHub account, this makes a clone of that clone to your local machine. Expect this to take some time, just like before, as it copies all the files and the complete history of the project to your filesystem, only now it's sucking the data from GitHub to your machine, rather than copying things around within GitHub's data centre (so it will probably take even longer; however, a modern coputer does it on the order of minutes).

Eventually this operation will complete, and you'll have a shiny new directory named `pioneer` which git -- with a little encouragement -- will manage for you, your `local` repo.

We're almost done with repository setup, but there is one more thing we need to attend to. When you did `git clone`, it automatically set `origin` to point to your Pioneer repository on GitHub. However it didn't set `upstream` to point the main Pioneer Repository. We'll need to do that manually.

We must to be inside the repository to do this, in fact all the git commands from now on, you need to be inside a repository to execute any of the git commands shown. So enter the pioneer repository directory, before doing:

`git remote add upstream git://github.com/pioneerspacesim/pioneer.git`

...to define `upstream` as the main Pioneer repository. You'll notice you defined `upstream` as a `remote`, `origin` is also defined as a `remote`. We'll explain more about remotes later on.

You can now view the result of our commands, i.e. see how we link the `origin` to your git repo, and upstream to the central pioneer repository.

`git remote -v`

or for more details

`git remote show origin`

### Configure actions

You might notice that when you push code to your master branch in github, it will trigger the github actions/job, and start building Lua API documentation, as these settings were mirrored when you forked pioneer. You will likely get an error from GitHub Pages complaining you do not have "Pages enabled".

You probably want to disable triggering these actions. In your github repository, go to Settings -> Actions -> General, and turn off action runners.

## Basic operations

At this point you might want to consider searching for tutorials. There are many good ones on git out there. If you're familiar with svn look [here](http://git.or.cz/course/svn.html), and [this](http://marklodato.github.io/visual-git-guide/index-en.html) is a nice visual representation of different commands, which might be helpful. Basic git tutorials on youtube: [part 0](https://www.youtube.com/watch?v=vaNGbk6HN9Y), [part 1](https://www.youtube.com/watch?v=DQUcmNO4diQ). Below follows a few commands you will be using a lot, and be familiar with, but first make sure to delve into some tutorials. Git is a vast subject.

Show documentation of command

`git help <command>`

Create branch...

`git branch <branch-name>`

...and move into it:

`git checkout <branch-name>`

Or do both in one go

`git checkout -b <branch-name>`

Check what files have been changed (red), and which have been staged for commit (green)

`git status`

Add new or changed/modified file to be "staged"

`git add <file>`

and commit it (sometimes it's good to check "git status" first, to see what is staged)

`git commit`

Or do it all in one go (this will not add new files, just changed, already tracked files)

`git commit -a`

or

`git commit -am "This is my commit message"`

The two above commands (i.e. "git commit -a") will commit all changes seen when running the highly useful

`git diff`

### Show information

Investigating what you've done is always very useful, and instructive when learning git. To show your un-staged changes (changes not staged for commit)

`git diff`

One of the most used commands might be to list the commit history

`git log`  
`git log -p <file>`
`git log --oneline --graph`

and

`git show HEAD`  
`git show <commit>`

Or N commits back in history

`git show HEAD~<N>`

List local branches

`git branch`

List local branches, and show last commit on each

`git branch -v`

List local and remote (origin) branches, and show last commit on each

`git branch -va`

This is a nice graphical interface to git, that you might prefer

`gitk`

### Common fixes for mistakes

Here we outline highly useful knowledge for fixing very common mistakes or situations you will find often yourself in.

It's common to want to add/change or reword the last commit, simply `git add` if any changes and

`git commit --amend`

If you realize you did `git add` on a file that should not be included in the commit you are about to do, then un-stage it by:

`git reset HEAD`

If you need to undo a commit you have already made simply reset the branch to one step back

`git reset HEAD~`

or equivalently

`git reset HEAD~1`

These reset commands only operates on the git record, not removing any changed files from your hard drive.

If you already pushed the old commit to `origin` (your github), then you need to do a forced push

`git push -f origin `

## Updating your branches

Makes no changes on your local copy, but reads in what changes there are upstream. A safe command.

`git fetch upstream`

Or read in changes in all branches, and `-p` to purge, i.e. remove the lingering memory of branches that have been removed in origin

`git fetch --all -p`

Now we know what changes have been made to `upstream`, i.e. Pioneer space sims's master branch. Now to apply them to your master

`git checkout master`  
`git merge upstream/master`

Which is the same as

`git pull upstream master`

Now, your local master (on your HDD) is synced with upstream (Pioneer's), but you probably want to update your github, `origin`, master branch as well:

`git push origin master`

### Doing a hard reset

If you feel you've messed up your master branch, and just want to "start over", or get a clean copy from upstream Pioneer, you can do a hard reset. However, be ware that this is a dangerous command, as it will remove any changes on the branch it is run from and make it identical to whatever you reset it to.

`git checkout master`  
`git fetch --all`  
`git reset --hard upstream/master`

or if you want to reset your branch `my-branch` to how it looks in your github

`git reset --hard origin/my-branch`

Next, since a hard reset completely rewrites the commit history, when you push your updated master (or whatever branch), to origin, it might say that the two branches have conflicting history, thus you need to force push your fresh copy

`git push -f origin master`

## Pushing branch (smart way)

Normally to push your commit to your github, you might do:

`git push origin <branch name>`

However, it would be nice if your branch on your local git (on your HDD) and your origin (your github) know about each other, that they are the same. Luckily git allows this, by "tracking" the branch thus, typically the first time you push commits in your local branch to github you tell github to track it

`git push --set-upstream origin <branch name>`

Or shorter

`git push origin <branch name> -u`

Now, whenever you do the following commands from a tracked branch

`git push`

or

`git pull`

it will be from your local `<branch-foo>` to its remote copy on origin (github). Also, git will show which branch is ahead of which

`git branch -vva`

## Resolving Conflicts

Conflicts happen when git tries to apply a commit and that commit changes code on the same or neighboring lines of code as some other commit that it's trying to merge with. Typically this can happen when issuing commands such as `cherry-pick`, `rebase`, or `merge`. Once you get the hang of it, they're easy to resolve. Just read the error message git spits out, and run

`git status`

It will show some files that need to be manually edited. In the file it will show both versions of the lines conflicting. Edit the file to the way it should be then `git add <file> and then `git commit`.

## Making a pull request

Make a branch, push it to your Github repository, and you will get a "Compare / Open Pull Request" button when viewing your branch on your Github account if logged in. Press it, and write a description of the changes you've made. Mention what improves by the changes made in the pull request. (For more, see github documentat [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)). Also see [this tutorial](https://www.atlassian.com/git/tutorials/making-a-pull-request).

## Fixing/Updating your pull request

This addresses the case where you have opened a pull request on Github, only to realize (by yourself, or through a reviewer giving feedback) that you need to change something. Conveniently, Github tracks your branch so any change to it will also update the commits in your pull request.

For example, you make some new change to your branch, add and commit them:

`git commit -am "this is an additional commit"`

Then just push it to your branch:

`git push`

(Note: this assumes your local branch is set up to track your Github branch)

However, doing it like this is only recommended if the new commit actually adds something new to the branch, where it is logical to have it as a separate commit. If it is a bug fix for a previous commit in the same pull request, there is no need for us to see it in the master branch of pioneer once it is merged. Thus the following two subsections describe how to fix the commit log / history.

### Update / change last commit

The first case is the simplest: if you just want to change the last commit in your branch, because you realized some file was missing, or needed an edit.

Make your change, then run "git add" on the changed files. Now update the last commit by:

`git add <changed_file>`
`git commit --amend`

And push to your Github, but since the hash id of the last commit has changed, you need to force it

`git push -f`

Done.

Note this also lets you reword the commit message.

### Update / change commit in middle of the branch of the pull request

The second case covers if you need to edit commits further back in the commit history, or change order of commits or any other change.

The example case we use here has a git log looking like so:

`git log --oneline`  
`dd34lqe added final feature D`  
`cc5369b added third feature C`  
`bb1ed97 added second feature B`  
`a528f11 added initial feature A`

Now you want to fix a bug in your second commit for feature "B". Make your changes in your local branch, add them and commit. Your structure will now look like:

`git log --oneline`  
`98a9832 my bugfix for feature B`  
`dd34lqe added final feature D`  
`cc5369b added third feature C`  
`bb1ed97 added second feature B`  
`a528f11 added initial feature A`

The bug fix commit is redundant to see in the git log once in master, so we want to merge the bug fix commit with "bb1ed97 my second feature B" commit, so that *no one will ever know there was a bug in the first place*! You do this by "rebasing" your branch.

`git rebase -i a528f11`

This opens the rebase dialogue in your default editor for git (usually vim, emacs, or nano). It will show you the git history for all commits after (i.e. excluding) the commit a528f11 ("added initial feature A").

You will see in the editor something like this (don't be confused by the reverse order compared to git log command):

`pick bb1ed97 added second feature B `  
`pick cc5369b added third feature C  `  
`pick dd34lqe added final feature D  `  
`pick 98a9832 my bugfix for feature B`  
  
`# Commands:`  
`#  p, pick = use commit`  
`#  r, reword = use commit, but edit the commit message`  
`#  e, edit = use commit, but stop for amending`  
`#  s, squash = use commit, but meld into previous commit`  
`#  f, fixup = like "squash", but discard this commit's log message`  
`#  x, exec = run command (the rest of the line) using shell`  
`#`  
`# These lines can be re-ordered; they are executed from top to bottom.`  
`#`  
`# If you remove a line here THAT COMMIT WILL BE LOST.`  
`#`  
`# However, if you remove everything, the rebase will be aborted.`  
`#`  
`# Note that empty commits are commented out`  

Now just move the last line to be just below the commit we want it to fix, and mark it as a "fixup", which will merge it into the commit above it, and use its commit message:

`pick bb1ed97 added second feature B `  
`fixup 98a9832 my bugfix for feature B`  
`pick cc5369b added third feature C  `  
`pick dd34lqe added final feature D  `

Save, and quit, and hopefully git will report that the rebase was successful, and your git history will now be clean, but the commit hash (and code) for the "B feature" has changed, thus we need to force push the change to Github.

`git log --oneline`  
`dd34lqe added final feature D`  
`cc5369b added third feature C`  
`qq9860d added second feature B`  
`a528f11 added initial feature A`

`git push -f`

(again assuming your local branch is tracking the Github repo)

### Resolving Merge Conflicts

Sometimes while you're working on a Pull Request other code will be merged into master that touches a file you've been working on. 90% of the time there's nothing you need to do, but occasionally git can't simply resolve the two changes and you'll need to manually update your code.

The easiest way to update your branch with the changes from master is called a "merge commit", where you merge in the changes from master to your local branch. **DON'T DO THIS**. It creates a messy history and makes it extremely difficult to review your pull request, as there's now two copies of those changes to the master branch.

Instead, please run a git rebase on your local branch to keep the pull request changes small and ensure it can be easily merged:

`git fetch upstream master`  
`git rebase -i master`

## Getting other developer's branches

If you want to get a copy of a branch from another developer, be that to test it, or to `cherry-pick` (covered elsewhere) commits into your own branch.

First make a branch from your master, and jump into it. It can be named whatever.

`git checkout -b <branch-name> master`

Now pull the code in from the developer's branch named `<dev-branch>`

`git pull https://github.com/<developer-user-name>/pioneer.git <dev-branch>`

If there is a conflict, to accept all their changes:

`git pull -s recursive -X theirs https://github.com/<developer-user-name>/pioneer.git <dev-branch>`

If it's a developer you will often want to pull code from you can add him/her to your remote, just like you did with your own github `origin` and Pioneer's `upstream`.

`git remote -v`

add a new one, named `<remote>`.

`git remote add <remote> <url>`

`git remote update`  

`git checkout -b <branch-name> --track <remote>/<remote-branch-name>`

## Keeping things tidy

If branch is merged into master then it can safely be deleted

`git branch -d <branch-name>`

If branch is not in master, then a force remove can be made

`git branch -D <branch-name>`

`git push origin :<branch-name>`

`git clean -n`

`git clean -f`

## Cherry picking

If wanting a commit from someone else, e.g. to add to your own branch, you can pull down their branch to your machine, then from the branch you want it to, just do:

`git cherry-pick <commit-hash>`

To actually do the "pulling down" of their branch to your machine:

    git remote add dev-username git://path/to/dev-username/repo.git
    git fetch dev-username

You might also be inetersted in following future changes in dev-username's branch:

    git checkout --track dev-username/foo

Also, another useful tool, for those graphically inclined is:

`gitk`

**Warning**: cherry picking, although sometimes useful, can cause problems for other developers if you use them on commits that have already been published to github. Be careful and give sufficient warnings if you find you needing to use them in that situation.

## Pushing to upstream Pioneer master

So you have working knowledge of git, and have been deemed not (too) crazy to be given commit access to the pioneer source? Welcome! As this means you can merge your own -- and others -- code into pioneer master, there are a few things you might want to know.

### Guidelines for merge etiquette

The power to merge code on to a common code base requires mutual respect among the developers, and [fingerspitzengefühl](https://en.wikipedia.org/wiki/Fingerspitzengefühl) based on the knowledge they have of each other, such as what their typical response time is, and where their area of expertise, and (code) interest/disinterests lies. If these principles were put into writing they might look something like the following:

-   You still need to open pull requests (PR), and hold them open long enough for other developers to have a fair chance to have time to voice their opinion, and possibly/occasionally review it. Don't count on the latter though, you're responsible for what you break, and you are now expected to review your own code.

<!-- -->

-   An instant merge of a PR can be done from time to time when the change is trivial, and obviously "good", and/or working on code that is "your private realm" of the pioneer source, and/or when you or other person needs a feature in master as soon as possible, for the next build.

<!-- -->

-   Also, you may push a commit directly to master, with no PR, if the change is *very* trivial one-liner, for instance fixing a very silly error in just merged code.

<!-- -->

-   You may *not* ever do a forced push to pioneer master.

### How to merge a PR the proper/pedantic way

For those with push access to the [Pioneer repo](https://github.com/pioneerspacesim/pioneer) this is one way to push code to master. First make sure you have a resonable setup:

`git remote -v`  
` origin    https://github.com/myusername/pioneer.git (fetch)`  
` origin    https://github.com/myusername/pioneer.git (push)`  
` upstream  https://github.com/pioneerspacesim/pioneer.git (fetch)`  
` upstream  https://github.com/pioneerspacesim/pioneer.git (push)`

Also, it might be a god idea to clean your master branch, so you know it is identical to pioneer upstream, but do be warned, this will wipe your master branch, thus if you have commits that are not in their own branches, they will be lost (but retrievable through git reflog):

` git checkout master`  
` git reset --hard upstream/master`

(For future merges, a simple git pull will suffice, if you've kept your master branch clean)

Now get the branch from the contributor to your computer, by creating an aptly named branch, and then pulling the code from the contributor to this branch.

`git checkout -b name_of_branch_to_create`  
`git pull https://github.com/contributor_username/pioneer.git name_of_branch_user_has`

Now switch to your master, and merge it in, here we asume the branch you created was called "feature\_branch"

`git checkout master`  
`git merge --no-commit --no-ff feature_branch`

Document changes to Changelog.txt, then add it, so from the pioneer root folder, the path to Changelog wold just be:

`git add Changelog.txt`  
`git commit `

This has now included the Changelog edit into the merge commit. Now do a dry run:

`git push upstream master --dry-run`

Check that the right commits will be pushed with

`git log`

And let us do it for real this time:

`git push upstream master`

Please note: NEVER do a force push to pioneer master!

## Advanced

Collecting some advanced tricks for developers

### Push commit to someones PR

If you have push access to pioneer repo, then you also have push access to other contributor's pull requests.

Get the user's PR into a branch as usual:

` git checkout -b some_user-feature_branch master`  
` git pull https://github.com/some_user/pioneer.git feature_branch`

make your changes, now push:

` git push https://github.com/some_user/pioneer.git some_user-feature_branch:feature_branch`

### PR trick

For developers, or anyone interested, this trick will pull down all the pull requests from github, so you can easily switch to pull request, say, \#1234 by doing

` git checkout refs/pull/upstream/1234`

### Be a git pedantic?

Writing good [commit messages](https://github.com/RomuloOliveira/commit-messages-guide), and being pedantic has its values.

## Links and resources

-   [git-flight-rules](https://github.com/k88hudson/git-flight-rules) Lots of examples, and links to further resources
-   [Oh shit, git!](https://ohshitgit.com/) Fixing common mistakes in git
-   [git rebase in depth](https://git-rebase.io/) Good guide on how to clean up/fix your git commit history
