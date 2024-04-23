# Welcome to Open Cap Table Format (OCF) contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! We welcome all contributions,
whether they be feature requests, proposed features, bug fixes, etc..

In this guide you will get an overview of the contribution workflow from opening an issue, creating
a PR, reviewing, and merging the PR.

## New contributor guide

To get an overview of the project, read the [README](./README.md). Here are some resources to help
you get started with open source contributions:

-   [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
-   [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
-   [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
-   [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

# Types of contributions

You can contribute to OCF in several ways. This repo is a place to discuss and collaborate on Open
Cap Table Format! Our small, but mighty :muscle: technical working group team is maintaining this
repo. To preserve our bandwidth, off topic conversations will be closed.

### 1) Discussions

Discussions are where we have conversations.

If you'd like help troubleshooting a docs PR you're working on, have a great new idea, or want to
share something amazing you've learned in our docs, join us in
[discussions](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/discussions).

### 2) Issues

[Issues](https://docs.github.com/en/github/managing-your-work-on-github/about-issues) are used to
track tasks that contributors can help with.

If you've found something in the spec that should be updated, search open issues to see if someone
else has reported the same thing. If it's something new, open an issue and fill out the template.
We'll use the issue to have a conversation about the problem you want to fix.

#### Create a new issue

If you spot a problem with the project,
[search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments).
If a related issue doesn't exist, you can open a new issue using a relevant
[issue form](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/issues/new/choose).

#### Solve an issue

Scan through our
[existing issues](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/issues) to find
one that interests you. You can narrow down the search using `labels` as filters.

### 3) Pull requests for feature proposals and code edits

A
[pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
is a way to suggest changes in our repository.

We welcome all contributions, but, due to the volume of requests we receive and the need to develop
an industry-wide specification, we may not be able to accept all contributions and merge them into
our code base.

#### a) Make your change

1. Install [VSCode](https://code.visualstudio.com/) if you don't already use it, and the Prettier
   extension.

2. Create a working branch and start making your changes!

3. When you're finished with the changes, create a pull request, also known as a PR.

-   Fill the "Ready for review" template so that we can review your PR. This template helps
    reviewers understand your changes as well as the purpose of your pull request.
-   Don't forget to
    [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
    if you are solving one.
-   Once you submit your PR, a team member will review your proposal. We may ask questions or
    request for additional information.
-   We may ask for changes to be made before a PR can be merged, either using
    [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request)
    or pull request comments. You can apply suggested changes directly through the UI. You can make
    any other changes in your branch, then commit them to your branch.
-   As you update your PR and apply changes, mark each conversation as
    [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
-   If you run into any merge issues, checkout this
    [git documentation on addressing merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)
    to help you resolve merge conflicts and other issues.

## Caveats for Windows

This project can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix based systems use `\n`.
   Therefore when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support
   both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can
   be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and
   others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash)
   module, if you need forward slashes - like for constructing URLs - or ensure your code works with
   either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally
   preferred to write scripts in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with
   `msys`. While the suggestions below are not guaranteed to work and could possibly cause other
   issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
