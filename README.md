# Default Webapp 2024
*Vercel/Vite/Vue/TypeScript/Tailwind*

My default (opinionated/favourite) setup for web application development—a single-page application (SPA) with client-side rendering, to be more precise. (I guess that statement (the opinionated/favourite part) will remain true one year or so after the date of the last commit...)

This is first and foremost a personal write-up. Yet, it will (maybe) end up like a "web project starter",
a well-documented starting-point for a project, like a boilerplate—or just a basic tutorial.
I will take a somewhat "naïve approach" when growing this codebase—arguing for and introducing features and tooling on the way as we go along, commit by commit, statement by statement.

A live version is hosted on Vercel, as:
>https://defaultwebapp.vercel.app

...

This repository/project is sort of an update of my previous "default webapp" projects:
- https://github.com/eirikt/default-webapp-elm-now (2018)
- https://github.com/eirikt/default-webapp-heroku (2014-2015)

It is a kind of personal code kata.



## Prerequisites
To be very basic and specific, the only prerequisites are:
- Some knowledge of English 😉
- A computer, a steady supply of electric power, and network connectivity 😉
- For the hosting service; an email account and an email client, signed in.


### Project name
Your project first and foremost you need:
1. an official (natural language) name

Then, also create:
2. `package.json` "name" -> _The "name" field contains your package's name and must be lowercase without any spaces.
   May contain hyphens, dots, and underscores._

3. Source-code-friendly name variant with no whitespace characters

4. URL-friendly name variant with no whitespace characters, and lowercase characters only (hyphens allowed)

For this little web application:
1. Default Webapp 2024
2. `default-webapp-2024`
3. `defaultWebapp2024`
4. `defaultwebapp`

Let's start developing software.



## Initiate project development
We will use PowerShell in this little web project bootstrapping walk-through.
(It won't be any big differences; in a POSIX shell, or even in <kbd>CMD</kbd>.)

Open PowerShell terminal by typing:
<kbd>WIN</kbd>+<kbd>powershell</kbd>


### pnpm
[pnpm](https://pnpm.io) is a new take on the default Node package manager, npm.
It is especially the dependency management that is the motivation for using pnpm instead of npm.
Also, it is a one-stop-shop when it comes to sourcing in all required tools into our project development setup,
and all dependencies into our project.

Check pnpm availability:
```shell
pnpm
```
If needed, install pnpm:
```shell
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```
Then open up a new terminal window.

Check version, and while at it, update `pnpm`:
```shell
pnpm --version
pnpm self-update
```


### Node.js
Check [Node.js](https://nodejs.org) availability:
```shell
pnpm env list
node --version
```

If needed, install Node.js, under pnpm management:
```shell
pnpm env use --global lts
```
Here we are installing Node.js LTS (Long-term support) version.


---


Now, let's get started.
Using your newly established project name (from above), create your project folder.
Go to project folder.


---


The default "build" folder for Vite is `dist`, so we will establish that routine from the get-go.
Our first "build step script" will be quite simple:
```shell
New-Item dist -Type Directory
```
...with, as of now, no content to deploy.

OK, the very first thing to do, is getting our new webapp online;
deploying the most basic version imaginable of our webapp to our hosting service of choice.
Let's start.



## Set up hosting service
We will use [Vercel](https://vercel.com) as a deployment service and hosting partner.
Other options are:
- [GitHub Pages](https://pages.github.com)
- [Netlify](https://www.netlify.com)
- [Cloudflare](https://www.cloudflare.com)
- [Fly](https://fly.io)
- [Railway](https://railway.app)
- [Render](https://render.com)

...and many more

Install Vercel client as a project-local dependency:
```shell
pnpm install vercel --save-dev
```

_Optional:_ Check version
```shell
pnpm vercel --version
```

_Optional:_ Check if you are signed in, and have other projects at Vercel already:
```shell
pnpm vercel project list
```
If not yet signed in, cancel the routine, or choose e.g. the "Continue with Email" option.
This will lead you to signing in (and creating an account at Vercel if you not already have one).
The default account plan is "Hobby", and is free of charge.
See https://vercel.com/pricing/

Sign in, if not already signed in:
```shell
pnpm vercel login <email address>
```

Then go straight to deploying the very first "version" of your web page:
```shell
pnpm vercel
```
State your project name; in our case: "defaultwebapp".
Set the directory where the code is located, to: "./dist".
Otherwise, stick to default options.

If you click on the "Production" link, it will respond with a `404 Not Found` as it is nothing there.
We need content.


### `index.html`
An `index.html` file is the default bootstrapping mechanism for both presenting a web page,
and for and loading a web application.

Create an `index.html` file.
```shell
New-Item index.html
Copy-Item .\index.html .\dist
```
Redeploy, directly to production, and have a look:
```shell
pnpm vercel --prod
```

Now, go to:
https://defaultwebapp.vercel.app

Now, the `404 Not Found` has turned into a `200 OK`.
We're on the right path, but we still need content.
Let's start with a "Hello World!".


### Hello World!
Every web app, no, wait; every information system should start with a "Hello World!" version!
Update the `index.html`:
```shell
Set-Content -Path .\index.html -Value "Hello World!"
Copy-Item .\index.html .\dist
```
Redeploy, and have a look.

Yes, we are live 👍

- (Web page size (at rest): 14 B)
- (Web page size (network): ~125 B)
- (Web page response time: ~50-100 ms)
- (**NB!** The project workspace folder is now (already) on 117 MB – due to the Vercel dependency)

[ [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/54d6f1506b7dc88dcea6d2f7ccbeda6573f6f9de) | [deployment](https://vercel.com/eirik-torskes-projects/defaultwebapp/6aCypC6Z3hLXE9Jt1UfEMbUyQ4fF) ]



## Set up development environment


### Version control, Git
Paramount for all software development is _version control_.
We will use [version control system](https://en.wikipedia.org/wiki/Version_control) [Git](https://en.wikipedia.org/wiki/Git), still the idiomatic choice after 15-20 years.
Git is a open [distributed version control system](https://en.wikipedia.org/wiki/Distributed_version_control), and has many [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) providers,
e.g., the prominent [GitHub](https://github.com).

[Install](https://git-scm.com) Git.

Create a repository in e.g., GitHub, and clone the repository.

Alternatively, create a local Git repository:
```shell
git init
```

We don't want to put all folders and files in under version control.
A `.gitignore` file was created during the initial Vercel usage above.
Add some more paths and files to it.
Looking a bit ahead of ourselves, we may e.g., ignore:
```
# Always ignore
.ssh

# Ignore generated/derived/downloaded stuff
/dist
/node_modules

# Ignore IDE/tools stuff
/.idea
/coverage

# Ignore other development stuff
/.vercel
LOG.md
```

[ [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/18fdb6f77c00aeb97acb47489e955efde82d0b72) ]


### EditorConfig, for common IDE behaviour
A nice (beloved) text editor (or a full-blown, hopefully not bloated, integrated development environment (IDE)),
is an integral part of a software developer's life.
Even we are somewhat restricting individual preferences in this setup, the IDE should be free of choice.
For "organizational scaling" concerns,
we are creating a common ground for IDEs with EditorConfig, IDE-agnostic editor configurations.
That consolidates e.g. issues like whitespace handling—important for avoiding unnecessary version differences.
So, the text editors/IDEs used by project developers should support EditorConfig internally or via a plugin.
Most commonplace text editors/IDEs have support for EditorConfig, either integrated, or via a plugin.

Create the `.editorconfig` file
```shell
New-Item .editorconfig
```

Add e.g. the following editor config:
```
# This file is for unifying the coding style for different editors and IDEs
# EditorConfig.org

# top-most EditorConfig file
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = crlf
trim_trailing_whitespace = true
insert_final_newline = true
```

[ [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/ef39a3a2de1e6829dadc7aab8923d548966cfc37) ]


---


For the next version, let's update the silly "Hello World!" with something a bit better;
a little project mission statement.
Update the `index.html` with:
```shell
Set-Content -Path .\index.html -Value "Default Webapp 2024 (v0.0.1)"
```

Also, before committing our first (real) version, let's update `package.json` with project name and version:
```json
{
  "name": "default-webapp-2024",
  "version": "0.0.1",
  "title": "Default Webapp 2024",
  ...
}
```


### Build scripts
With our little proof-of-concept web page (soon to be a _web app_) in place and released,
let us define some basic scripts and commands underpinning our development process and release process.
First fetch file handling tools:
```shell
pnpm install rimraf --save-dev
pnpm install copyfiles --save-dev
```

Update `package.json` with a `"scripts"` block containing e.g. something like:
```json
{
    ...
    "scripts": {
        "setup": "pnpm install",
        "clean": "pnpm rimraf --verbose dist",
        "build": "pnpm build:prod",
        "build:prod": "pnpm build:production",
        "build:production": "pnpm clean && pnpm copyfiles index.html dist",
        "deploy:staging": "pnpm build && pnpm vercel",
        "deploy:prod": "pnpm deploy:production",
        "deploy:production": "pnpm build:production && pnpm vercel --prod"
    },
    ...
}
```

The declared scripts are listed with the command:
```shell
pnpm run
```

Then deploy it to "staging" (a production-like environment):
```shell
pnpm deploy:staging
```

When everything seems good to go, deploy to production:
```shell
pnpm deploy:production
```
- (Web page size (at rest): 30 B)
- (Web page size (network): 140 B)
- (Web page response time: <50 ms)
- (The project workspace folder is now on 121 MB – due to Vercel and file handling tools)

[ [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/a0acd101b4a5132dedcb94a5c8088839e1d6b48d) | [deployment](https://defaultwebapp-itd9mwdfu-eirik-torskes-projects.vercel.app) ]


### Vue
Let us make this (static) _web page_ **dynamic**, turning it into a _web app_.
Then we will manipulate the browser DOM, and the only way to do that is via the browser's ECMAScript-based DOM API.
[Vue](https://vuejs.org) enables that, using a virtual DOM-based reactive template rendering.

Vue is a component-oriented web framework, revolving around _Vue components_, which is a quite flexible web component standard.
A _Vue component_ is simply said, an ECMAScript function returning a render function.
Render functions return virtual DOM (VDOM) nodes, possibly nested – which then become VDOM _trees_.
The virtual DOM is a programming concept where an ideal, or "virtual" representation of a UI is kept in memory and synced with the "real" DOM. The concept was pioneered by React, and has been adopted in many other frameworks with different implementations, including Vue.
Virtual DOM is more of a pattern than a specific technology, so there is no one canonical implementation.
We can illustrate the idea using a simple example:
```javascript
const vnode = {
  type: 'div',
  props: {
    id: 'hello'
  },
  children: [
    /* more vnodes */
  ]
}
```
Here, `vnode` is a plain JavaScript object (a "virtual node") representing a `<div>` HTML element.
It contains all the information that we need to create the actual HTML/DOM element.
It also contains more children vnodes, which makes it the root of a VDOM tree.
A runtime renderer can walk a virtual DOM tree and construct a real DOM tree from it.
This process is called mount.

So, at the high level, this is what happens when a Vue component is mounted:
1. **Compile:** Vue templates are compiled into render functions: functions that return VDOM trees.
   This step can be done either ahead-of-time via a build step, or on-the-fly by using the runtime compiler.

2. **Mount:** The runtime renderer invokes the render functions, walks the returned virtual DOM tree, and creates actual DOM nodes based on it.
   This step is performed as a reactive effect, so it keeps track of all reactive dependencies that were used.

3. **Patch:** When a dependency used during mount changes, the effect re-runs.
   This time, a new, updated Virtual DOM tree is created. The runtime renderer walks the new tree, compares it with the old one, and applies necessary updates to the actual DOM.

Vue's `createApp` function takes in, almost whatever, and returns a VDOM node (ala `vnode` above), possibly a VDOM tree.
It is quite flexible in regard to the input parameter.

It may be a function.
Then it is handled as the `render` function directly.

It may be an object.
If the object has just one function, it is handled as the `render` function.
If the object has more then one function, one of them must be named `render`.
The input object may also contain a _Vue template_, an HTML-like declarative view of the web page.
(Well, at least I think it's like this...)


---


We are moving from plain text to [**H**yper**t**ext **M**arkup **L**anguage (HTML)](https://no.wikipedia.org/wiki/HTML/), ensuring a proper browser DOM element for "hosting" our Vue-based web app:
```shell
Set-Content -Path .\index.html -Value @"
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const render = function () {
        return 'Default Webapp 2024 | Vue-Vite-Vercel (v0.1.0)'
    };
    Vue.createApp(render).mount('html');
</script>
"@
```
Execute the deployment routine, described above.

- (Web page size (at rest): 222 B)
- (Web page size (network): 171 KB (`vue.global.js`) + 384 B)
- (Web page response time: <50 ms)
- (The project workspace folder is still on 121 MB)
