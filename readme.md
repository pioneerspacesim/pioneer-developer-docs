# Pioneer Developer Documentation

This repository houses the compiled documentation for Pioneer developers, presented in a wiki-like format using VitePress.

## Contributing

You can contribute to this information by editing the Markdown files contained in the repository. This repo uses Github-Flavored Markdown with [some extensions](https://vitepress.vuejs.org/guide/markdown) for maximum ease of editing. If you know how to format a Pull Request or Issue on Github, you'll be right at home when editing these docs.

You can edit these files one of two ways:

- Make changes directly through the Github editing interface. This doesn't provide the nicest preview support and some features (e.g. badges, containers, etc.) will not render correctly until the content is built and deployed to [dev.pioneerspacesim.net](https://dev.pioneerspacesim.net/), but it is the quickest edit loop possible.

- Clone the repository locally, then run the development server:
  - Run `yarn install` inside the repo root; this requires having `node` and `yarn` installed appropriately for your platform. There are tons of resources on the Web covering this.
  - Run `yarn dev` inside the repo root, then browse to [http://localhost:5000/](http://localhost:5000/). Changes to markdown files should be visible immediately after saving the file. If you change the site organization structure (new files, renamed files, changing categorization of files in the frontmatter), you'll need to restart the dev server to see the changes.
  - Once you are finished making changes, run `yarn build` to verify that the website will build correctly when deployed.

Once you have made changes, the preferred way to update the website is to push commits directly to the `master` branch. Force-pushing the `master` branch is disabled for non-administrators, so avoid rewriting history and prefer using revert commits if needed.

We grant direct push access to this repo to trustworthy contributors with a regular history of improving the documentation. If you do not have push access to the repo and would like to improve the documentation, please follow the "normal" Github workflow by opening a Pull Request of your changes via a fork of this repository.

## Writing Markdown

In addition to the VitePress [Markdown extensions](https://vitepress.vuejs.org/guide/markdown), we have support for [footnotes](https://github.com/markdown-it/markdown-it-footnote).

If needed, custom Vue Components can be authored to display data in reusable layouts.
