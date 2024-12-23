# Default Webapp 2024
*Vercel/Vite/Vue/TypeScript/Tailwind*

My default (opinionated/favourite) setup for web application development in 2024—a single-page application (SPA) with client-side rendering, to be more precise.
Also, I believe this setup is rather ordinary/idiomatic.

This is first and foremost a personal write-up.
Yet, it will (maybe) end up like a "web project starter",
a well-documented starting-point for a project, like a boilerplate—or just a basic tutorial.
I will take a somewhat naïve approach when growing this codebase—arguing for and introducing features and tooling on the way as we go along, commit by commit, statement by statement.

A live version is hosted on Vercel, as:
>https://defaultwebapp.vercel.app

...

This repository/project is yet another iteration of previous "default webapp" projects:
- https://github.com/eirikt/default-webapp-elm-now (2018)
- https://github.com/eirikt/default-webapp-heroku (2014-2015)

It's a kind of personal code kata.



## Prerequisites
To be very basic and specific, the only prerequisites are:
- Some knowledge of English 😉
- A computer, a steady supply of electric power, and network connectivity 😉
- For the hosting service; an email account and an email client, signed in.
- Some programming experience, just some


### Project name
First and foremost your project needs:
1. an official (natural language) name

Then, also create a:
2. `package.json` "name"

   *The "name" field contains your package's name and must be lowercase without any spaces.
   It may contain hyphens, dots, and underscores.*

3. Source-code-friendly name variant with no whitespace characters.

4. URL-friendly name variant with no whitespace characters. Lowercase characters only (hyphens allowed).

For this little web application it is:
1. Default Webapp 2024
2. `default-webapp-2024`
3. `defaultWebapp2024`
4. `defaultwebapp`


### Code editor
Get a code editor, e.g. [Visual Studio Code](https://code.visualstudio.com), or one of JetBrains' editors.

Ok, let's publish a web app.



## Initiate project development
We will use PowerShell in this little web project bootstrapping walk-through.
(It won't be any big differences; in a POSIX shell, or even in <kbd>CMD</kbd>.)

On a Windows PC, open PowerShell terminal by typing:
<kbd>WIN</kbd>+<kbd>powershell</kbd>


### pnpm
[pnpm](https://pnpm.io) is a new take on the default Node package manager, **npm**.
It is especially the dependency management that is the motivation for using pnpm instead of npm.
Also, it is a one-stop-shop when it comes to sourcing in all required tools and dependencies into our project.

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
Here we are installing Node.js LTS (long-term support) version.


---


Now, let's get started.
Using your newly established project name (from above), create your project folder.
Go to project folder.

The default "build" folder for Vite is `dist`, so we will establish that routine from the get-go.
Our first "build step script" will be quite simple:
```shell
New-Item dist -Type Directory
```
...with, as of now, no content to deploy.

Nevertheless, the very first thing to do, is getting our new webapp online;
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

...and many more.

Install Vercel client as a project-local, development-only dependency:
```shell
pnpm install vercel --save-dev
```

_Optional:_ Check version:
```shell
pnpm vercel --version
```

_Optional:_ Check if you are signed in, and have other projects at Vercel already:
```shell
pnpm vercel project list
```
If not yet signed in, cancel the routine, or choose e.g., the "Continue with Email" option.
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
Set the directory where the code is located, to: "`./dist`".
Otherwise, stick to default options.

If you click on the "Production" link, it will respond with a `404 Not Found` as it is nothing there.
We need content...


#### `index.html`
An `index.html` file is the default bootstrapping mechanism for both presenting a web page,
and for loading a web application.

Create an `index.html` file:
```shell
New-Item index.html
Copy-Item .\index.html .\dist
```
Redeploy, directly to production:
```shell
pnpm vercel --prod
```

Have a look:
https://defaultwebapp.vercel.app

Now, the `404 Not Found` has turned into a `200 OK`.
We're on the right path, but we still need content.
Let's start with a "Hello World!".

<sub>[ <code>v0.0.1-SNAPSHOT</code>: [deployment](https://defaultwebapp-rlqbb0j1v-eirik-torskes-projects.vercel.app) ]</sub>


#### Hello World!
Every web app, no, wait–every information system should start with a "Hello World!" version!

Update the `index.html`:
```shell
Set-Content -Path .\index.html -Value "Hello World!"
Copy-Item .\index.html .\dist
```
Redeploy, and have a look.

Yes, we are live 👍
<p>
<sub>
- The project workspace folder is now (already) on 117 MB–due to the Vercel dependency<br/>
- Web page size (at rest): 14 B<br/>
- Web page size (network): ~125 B<br/>
- Web page response time: ~50-100 ms<br/>
</sub>
</p>

<sub>[ <code>v0.0.1-SNAPSHOT</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/54d6f1506b7dc88dcea6d2f7ccbeda6573f6f9de) | [deployment](https://defaultwebapp-44h74et6j-eirik-torskes-projects.vercel.app) ]</sub>



## Set up development environment


### Version control, Git
Paramount for all software development is _version control_.
We will use [version control system](https://en.wikipedia.org/wiki/Version_control) [Git](https://en.wikipedia.org/wiki/Git), still the idiomatic choice after 15-20 years.
Git is an open [distributed version control system](https://en.wikipedia.org/wiki/Distributed_version_control), and has many [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) providers,
e.g., the prominent [GitHub](https://github.com).

[Install](https://git-scm.com) Git.

Create a repository in GitHub, and clone the repository.

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


### EditorConfig, for common IDE behaviour
A nice (beloved) text editor (or a full-blown, hopefully not bloated, integrated development environment (IDE)),
is an integral part of a software developer's life.
We are restricting individual preferences to a certain degree in this setup,
but the IDE is personal and should be free of choice.
For "organizational scaling" concerns, we are creating a common ground for IDEs with EditorConfig, IDE-agnostic editor configurations.
That consolidates, e.g., issues like whitespace handling—important for avoiding unnecessary version differences.
So, the text editors/IDEs used by project developers should support EditorConfig internally or via a plugin.
Most commonplace text editors/IDEs have support for EditorConfig.

Create the `.editorconfig` file:
```shell
New-Item .editorconfig
```

Add, e.g., the following editor configurations:
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

...


For the next version, let's update the silly "Hello World!" with something a bit better;
a little project mission statement.

Update `index.html`:
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
With our little proof-of-concept web page (soon to be a *web app*) in place and released,
let us define some basic scripts and commands underpinning our development process and deployment routine.
First fetch some file handling tools:
```shell
pnpm install rimraf --save-dev
pnpm install copyfiles --save-dev
```

Update `package.json` with a `"scripts"` block containing e.g., something like:
```json
{
    ...
    "scripts": {
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

### Deployment routine
After the new version is completed in your local development environment:
1. Deploy it to "staging" (a production-like environment):
   ```shell
   pnpm deploy:staging
   ```
When everything seems good to go:
2. Update the "version" in `package.json`
3. Commit to version control
4. Deploy to production:
   ```shell
   pnpm deploy:production
   ```

**Notify your client that their web page (soon to be a *web app*) is up and running 🎉😄**
...the very, very first version of it, that is.

For a real web app, a personal domain name is (close to) mandatory.
We won't do that as part of our setup, at least not yet.
Anyway, the routines are described here:
https://vercel.com/docs/projects/domains/

<p>
<sub>
- The project workspace folder is now on 121 MB – due to Vercel and file handling tools<br>
- Web page size (at rest): 30 B<br/>
- Web page size (network): 140 B<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.0.1</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/a0acd101b4a5132dedcb94a5c8088839e1d6b48d) | [deployment](https://defaultwebapp-rly4wlysd-eirik-torskes-projects.vercel.app) ]</sub>



## Set up technology stack

### Vue
Let us make this (static) web page **dynamic**, turning it into a "*web app*".
Then we will manipulate the browser DOM, and the only way to do that is via the browser's ECMAScript-based DOM API.
[Vue](https://vuejs.org) enables that, using a virtual DOM-based reactive template rendering.

Vue is a component-oriented web framework, revolving around *Vue components*, which is a quite flexible web component standard.
A *Vue component* is, simply said, an ECMAScript function returning a render function.
Render functions return virtual DOM (VDOM) nodes, possibly nested–which then become VDOM *trees*.
The virtual DOM is a programming concept where an ideal, or "virtual" representation of the UI, is kept in memory and synced with the "real" DOM. The concept was pioneered by React, and has been adopted in many other frameworks with different implementations, including Vue.
Virtual DOM is more of a pattern than a specific technology, so there is no canonical implementation.
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
Here, `vnode` is a plain ECMAScript object (a "virtual node") representing a `<div>` HTML element.
It contains all the information that we need to create the actual HTML/DOM element.
It also contains more children vnodes, which makes it the root of a VDOM tree.
A runtime renderer can walk a virtual DOM tree and construct a real DOM tree from it.
This process is called *mounting*.

So, at the high level, this is what happens when a Vue component is mounted:
1. **Compile:** Vue templates are compiled into render functions: functions that return VDOM trees.
   This step can be done either ahead-of-time via a build step, or on-the-fly by using the runtime compiler.

2. **Mount:** The *runtime renderer* invokes the render functions, walks the returned virtual DOM tree, and creates actual DOM nodes based on it.
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
The input object may also contain a _Vue template_, a declarative HTML-like representation of the web page.


---


We are moving from plain text to [**H**yper**t**ext **M**arkup **L**anguage (HTML)](https://no.wikipedia.org/wiki/HTML/), ensuring a proper browser DOM element for "hosting" our Vue-based web app.

Update `index.html`:
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

**unpkg** is a fast, global [content delivery network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network/) for everything managed by npm/pnpm.
It can be used for quick and easy file loading from any package using a URL like:
```
unpkg.com/:package@:version/:file
```

**NB!**
We are deliberately declaring the network protocol in our external URLs,
instead of using [protocol-relative URLs](https://en.wikipedia.org/wiki/URL#prurl).
This is for security reasons.
The use of protocol-relative URLs may accidentally utilize HTTP, and by that cause so-called *mixed content*
which may make our web app vulnerable for [on-path attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 222 B<br/>
- Web page size (network): 171 KB (<code>vue.global.js</code>) + 384 B<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>
<p>
<sub>
We see that the size of our web app increases significantly with the integration of Vue.
Albeit, the startup time of our web app is not particularly affected...
</sub>
</p>

<sub>[ <code>v0.1.0</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/93b1a3b7a2aea4009783403c33d9822d6196af19) | [deployment](https://defaultwebapp-itd9mwdfu-eirik-torskes-projects.vercel.app) ]</sub>

...


It is more idiomatic and "appropriate" to create our own HTML element to put our Vue-based web content inside.

Update `index.html`:
```shell
Set-Content -Path .\index.html -Value @"
<div id="app"></div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const render = function () {
        return 'Default Webapp 2024 | Vue-Vite-Vercel (v0.1.1)'
    };
    Vue.createApp(render).mount('#app');
</script>
"@
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 222 B<br/>
- Web page size (network): 171 KB (<code>vue.global.js</code>) + 352 B<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.1</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/6c89fce2f8c5943537e57a4727619b777ead25db) | [deployment](https://defaultwebapp-gd8mwo6dj-eirik-torskes-projects.vercel.app) ]</sub>

...


It is maybe (well, yes, _maybe_) a bit more readable with a lambda-style anonymous render function.

Update `index.html`:
```shell
Set-Content -Path .\index.html -Value @"
<div id="app"></div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>Vue
    .createApp(() => 'Default Webapp 2024 | Vue-Vite-Vercel (v0.1.2)')
    .mount('#app')
</script>
"@
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 236 B<br/>
- Web page size (network): 171 KB (<code>vue.global.js</code>) + 311 B<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.2</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/df7b80b403ca8cdbc2b00b734d15989569bd9de6) | [deployment](https://defaultwebapp-q66434uln-eirik-torskes-projects.vercel.app) ]</sub>

...


Instead of just returning plain text, let us return a VNODE.
Vue has a `h` function, which takes in application state, and return a VNODE.
("h" for **h**yperscript, meaning "ECMAScript that produces HTML").
This name is inherited from conventions shared by many virtual DOM implementations.
A more descriptive name could be `createVNode()`,
but a shorter name helps when you have to call this function many times in a render function.

Update `index.html`:
```shell
Set-Content -Path .\index.html -Value @"
<div id="app"></div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>Vue
    .createApp(() => Vue.h(
        'h1',
        'Default Webapp 2024 | Vue-Vite-Vercel (v0.1.3)')
    )
    .mount('#app')
</script>
"@
```
Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 222 B<br/>
- Web page size (network): 171 KB (<code>vue.global.js</code>) + 343 B<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.3</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/59e7cdbfabd168aad440dae66fde53462cf0ab02) | [deployment](https://defaultwebapp-5qgv8rh1v-eirik-torskes-projects.vercel.app) ]</sub>

...


Or, by providing an object (a data structure/shape),
including state and a render function–for the Vue `createApp` function.

Replace `index.html` with:
```html
<div id="app"></div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>Vue
    .createApp({
        name: 'Default Webapp 2024',
        data() {
            return {
                title: 'Default Webapp 2024',
                version: '0.1.4',
            }
        },
        render() {
            return Vue.h(
                'h1',
                [
                    `${this.title} | Vue-Vite-Vercel (v${this.version})`,
                    []
                ]
            )
        }
    })
    .mount('#app')
</script>
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 568 B<br/>
- Web page size (network): 171 KB (<code>vue.global.js</code>) + 667 B<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.4</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/af90e6c368b12bcf13ba422cf648ef778cad3bf3) | [deployment](https://defaultwebapp-7w9rkmmee-eirik-torskes-projects.vercel.app) ]</sub>

...


Vue is available in many distributions.
Here we are just using the one that adds Vue as a global variable (`Vue`) within the DOM.
As we are writing/providing the render function ourselves, we are bypassing the somewhat expensive "compile" step, where Vue templates are compiled into render functions.
That means we can use the slightly slimmer Vue "runtime" distribution, where the compile step functions are omitted.

Execute:
```shell
(Get-Content .\index.html).Replace('vue.global.js', 'vue.runtime.global.js').Replace('0.1.4', '0.1.5') | Set-Content .\index.html
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 572 B<br/>
- Web page size (network): 121 KB (<code>vue.runtime.global.js</code>) + 697 B<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.5</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/c608fe2ad2297c5515a539aa128785cbef0d99e6) | [deployment](https://defaultwebapp-5loe7jdxg-eirik-torskes-projects.vercel.app) ]</sub>

...


A "production" version is also available.
Here the ECMAScript is minified and compacted, decreasing the download size even more.

Execute:
```shell
(Get-Content .\index.html).Replace('vue.runtime.global.js', 'vue.runtime.global.prod.js').Replace('0.1.5', '0.1.6') | Set-Content .\index.html
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 572 B<br/>
- Web page size (network): 48 KB (<code>vue.runtime.global.prod.js</code>) + 700 B<br/>
- Web page response time: <40 ms, a bit snappier<br/>
</sub>
</p>

<sub>[ <code>v0.1.6</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/6a2d9f8229177f3d8e2be78aea04178e3622b61b) | [deployment](https://defaultwebapp-gi9ztx2jk-eirik-torskes-projects.vercel.app) ]</sub>


#### ECMAScript Modules
ECMAScript Modules (ESM) is (after many years in the working) available and supported directly by the browser.
The web app must be organized as a set of ESM modules, and typically hosted alongside the `index.html` file.
In addition, the web app will also fetch common third-party ESM components, like Vue, via the browser.
This capability has been supported by most modern browsers since approximately 2020.

Nevertheless, bundled web app artifacts are still the idiomatic way of deploying/hosting web apps –
and we will also organize our wep app that way, in a bit.
A (pre)bundled web app requires a build step.

But, let us first try out ESMthe browser, without a build step:

Replace `index.html` with:
```html
<div id="app"></div>
<script type="module">
    import {createApp, h} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

    createApp({
        name: 'Default Webapp 2024',
        data() {
            return {
                title: 'Default Webapp 2024',
                version: '0.1.7',
            }
        },
        render() {
            return h(
                'h1',
                [
                    `${this.title} | Vue-Vite-Vercel (v${this.version})`,
                    []
                ]
            )
        }
    }).mount('#app')
</script>
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 592 B<br/>
- Web page size (network): 162 KB (<code>vue.esm-browser.js</code>) + 705 B<br/>
- Web page response time: <40 ms, feels a bit snappier)<br/>
</sub>
</p>

<sub>[ <code>v0.1.7</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/a57e38c2f580a157d43fc1c6dc6616b3bd322ce7) | [deployment](https://defaultwebapp-31c0nx56r-eirik-torskes-projects.vercel.app) ]</sub>

...


The browser ESM "distro" also has a "runtime-only" variant.

Execute:
```shell
(Get-Content .\index.html).Replace('vue.esm-browser.js', 'vue.runtime.esm-browser.js').Replace('0.1.7', '0.1.8') | Set-Content .\index.html
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 604 B<br/>
- Web page size (network): 117 KB (<code>vue.runtime.esm-browser.js</code>) + 713 B<br/>
- Web page response time: <40 ms, feels a bit snappier)<br/>
</sub>
</p>

<sub>[ <code>v0.1.8</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/c6748eb32ffe3912bc20b0c60e99f1a1ba12cfb4) | [deployment](https://defaultwebapp-o1w4ev1q8-eirik-torskes-projects.vercel.app) ]</sub>

...


...and a "production" variant; execute:
```shell
(Get-Content .\index.html).Replace('vue.runtime.esm-browser.js', 'vue.runtime.esm-browser.prod.js').Replace('0.1.8', '0.1.9') | Set-Content .\index.html
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 609 B<br/>
- Web page size (network): 48.3 KB (<code>vue.runtime.esm-browser.prod.js</code>) + 717 B<br/>
- Web page response time: <40 ms, feels a bit snappier<br/>
</sub>
</p>

<sub>[ <code>v0.1.9</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/a8cd136087c076d0a9e7783e151dc12a81320720) | [deployment](https://defaultwebapp-5cdn9ictn-eirik-torskes-projects.vercel.app) ]</sub>

...


Extending our simple placeholder page with some content;
a simple survey and status of the technology components we are planning to integrate into our web app.

Replace the render function with:
```javascript
render() {
    return [
        h(
            'h1',
            [
                `${this.title}`,
                []
            ]
        ),
        h(
            'h2', ['Technology stack status:',
                []
            ]
        ),
        h(
            'ul',
            ['',
                [
                    h('li', ['Git: ok']),
                    h('li', ['GitHub: ok']),
                    h('li', ['Vercel: ok']),
                    h('li', ['Vue: (ok)']),
                    h('li', ['Vite: -']),
                    h('li', ['TypeScript: -']),
                    h('li', ['Tailwind: -']),
                    h('li', ['Vitest: -']),
                    h('li', ['Pinia: -']),
                    h('li', ['HTTP APIs: -']),
                    h('li', ['TSC/ESLint: -'])
                ]
            ]
        ),
        h(
            'p', [
                `v${this.version}`,
                []
            ]
        )
    ]
}
```
And execute:
```shell
(Get-Content .\index.html).Replace('0.1.9', '0.1.10') | Set-Content .\index.html
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 1,6 KB<br/>
- Web page size (network): 47,4 KB (<code>vue.runtime.esm-browser.prod.js</code>) + 564 B<br/>
- Web page response time: <40 ms, feels a bit snappier<br/>
</sub>
</p>

<sub>[ <code>v0.1.10</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/40d664de2e4deea1573da88ec39ce450fd627d84) | [deployment](https://defaultwebapp-m5ewqy68y-eirik-torskes-projects.vercel.app) ]</sub>

...


Vue recommends using templates to build applications in the vast majority of cases.
There are situations where we need the full programmatic power of ECMAScript –
that's where we can use the render function.

It may seem tedious and cumbersome building the entire web app by functions,
but by using a functional programming style, declaring pure functions, and composing them – it is doable.
It will resemble [Elm](https://elm-lang.org)-style development.
(One example is the [previous default webapp project](https://github.com/eirikt/default-webapp-elm-now), which used Elm.)
One of the effects will be increased testability.
It can be argued that the readability may be a bit lower than using declarative markup language templates.

Anyway, we will choose the (seemingly) more idiomatic way of declarative markup language and Vue templates.
Vue templates use the "mustache" syntax (double curly braces).
This is Vue's basic form of data binding.

Replace the render function block with:
```vue
template: `
    <h1>{{this.title}}</h1>
    <h2>Technology stack status:</h2>
    <ul>
        <li>Git: ok</li>
        <li>GitHub: ok</li>
        <li>Vercel: ok</li>
        <li>Vue: (ok)</li>
        <li>Vite: -</li>
        <li>TypeScript: -</li>
        <li>Tailwind: -</li>
        <li>Vitest: -</li>
        <li>Pinia: -</li>
        <li>HTTP APIs: -</li>
        <li>TSC/ESLint: -</li>
    </ul>
    <p>v{{this.version}}</p>
  `
```
No, that won't work.
The "runtime" version we still are using does not support compiling Vue templates.
Remove the "runtime" in 'https://unpkg.com/vue@3/dist/vue.runtime.esm-browser.prod.js', and bump the version to 0.1.11:
```shell
(Get-Content .\index.html).Replace('vue.runtime.esm-browser.prod.js', 'vue.esm-browser.prod.js').Replace('0.1.10', '0.1.11') | Set-Content .\index.html
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 1,0 KB<br/>
- Web page size (network): 75,1 KB (<code>vue.esm-browser.prod.js</code>) + 1,1 KB<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.11</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/83a297900ff0443224fdaabc9b3786c3c3d9dab0) | [deployment](https://defaultwebapp-gz52pos5a-eirik-torskes-projects.vercel.app) ]</sub>


#### Complete `index.html` file with styling
Let us establish a complete HTML file, and play around with some styling.
It is much easier to do that with the HTML-like template syntax we now are using.
We are also using the web-idiomatic UTF-8 character encoding;
unlocking a vast array of multilingual letters, special characters, and "emojis".

Replace `index.html` with:
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<title>Default Webapp 2024</title>
<style>
    html {
        font-family: "Comic Sans MS", sans-serif;
    }
</style>
<div id="app"></div>
<script type="module">
    import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'

    createApp({
        name: 'Default Webapp 2024',
        data() {
            return {
                title: 'Default Webapp 2024',
                version: '0.1.12',
            }
        },
        template: `
        <h1>{{this.title}}</h1>
        <h3>Technology stack status:</h3>
        <ul>
            <li>Git: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>GitHub: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>Vercel: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>Vue: <span style="font-size: larger;font-weight: bolder;color: darkseagreen;">(✓)</span></li>
            <li>Vite: <span style="font-size: larger;color: red;">✗</span></li>
            <li>TypeScript: <span style="font-size: larger;color: red;">✗</span></li>
            <li>Tailwind: <span style="font-size: larger;color: red;">✗</span></li>
            <li>Vitest: <span style="font-size: larger;color: red;">✗</span></li>
            <li>Pinia: <span style="font-size: larger;color: red;">✗</span></li>
            <li>HTTP APIs: <span style="font-size: larger;color: red;">✗</span></li>
            <li>TSC/ESLint: <span style="font-size: larger;color: red;">✗</span></li>
        </ul>
        <p style="padding-top: 8px;font-family: monospace;color: grey;">v{{this.version}}</p>
        `
    }).mount('#app')
</script>
```
We are using the Comic Sans font, just for the fun of it.
(Sadly, it is mostly not available in mobile browsers...)

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 1,8 KB<br/>
- Web page size (network): 75,1 KB (<code>vue.esm-browser.prod.js</code>) + 730 B<br/>
- Web page response time: <60 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.12</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/e1433fda6c70553016361626ece4102d22fc7b62) | [deployment](https://defaultwebapp-knk2p8yrr-eirik-torskes-projects.vercel.app) ]</sub>

...


Before we move over to a "bundled build", let us investigate ESM in the browser some more.

Here, the `index.html` file loads `main.js` as an ESM (`type="module"`).
`main.js` then loads Vue as an ESM, and also `App.js`, which contains our content.
`App.js` is a _Vue component_, a `createApp`-compliant object with a _Vue template_.
Internally, Vue's `createApp` function will return a VDOM node, possibly a VDOM tree, which Vue uses when updating the DOM.

All initial application state can now be moved from `index.html` to `App.js`.

`index.html` will now look like this:
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<title>Default Webapp 2024</title>
<style>
    html {
        font-family: sans-serif;
    }
</style>
<div id="app"></div>
<script src="./main.js" type="module"></script>
```
...

`main.js`:
```shell
New-Item main.js
```
```javascript
import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import App from './App.js';

createApp(App).mount('#app');
```
...

`App.js`:
```shell
New-Item App.js
```
```javascript
export default {
    name: 'Default Webapp 2024',
    data() {
        return {
            title: 'Default Webapp 2024',
            version: '0.1.13',
        }
    },
    template: `
        <h1>{{this.title}}</h1>
        <h3>Technology stack status:</h3>
        <ul style="list-style-type: none;">
            <li>Git: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel">GitHub</a>: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>Vercel: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>Vue: <span style="font-size: larger;font-weight: bolder;color: darkseagreen;">(✓)</span></li>
            <li>Vite: <span style="font-size: larger;color: red;">✗</span></li>
            <li>TypeScript: <span style="font-size: larger;color: red;">✗</span></li>
            <li>Tailwind: <span style="font-size: larger;color: red;">✗</span></li>
            <li>Vitest: <span style="font-size: larger;color: red;">✗</span></li>
            <li>Pinia: <span style="font-size: larger;color: red;">✗</span></li>
            <li>HTTP APIs: <span style="font-size: larger;color: red;">✗</span></li>
            <li>TSC/ESLint: <span style="font-size: larger;color: red;">✗</span></li>
        </ul>
        <p style="padding-top: 8px;font-family: monospace;color: grey;">[ v{{this.version}} | <a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" style="font-family: monospace;color: grey;" target="_blank">Documentation</a> ]</p>
    `
};
```

...


We need to deploy all three files that comprise our wep app, so we must update our deployment script:
```shell
(Get-Content .\package.json).Replace('index.html ', 'index.html main.js App.js ').Replace('0.1.12', '0.1.13') | Set-Content .\package.json
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 2,0 KB<br/>
- Web page size (network): 75,1 KB (<code>vue.esm-browser.prod.js</code>) + 537 B (<code>index.html</code>) + 314 B (<code>main.js</code>) + 613 B (<code>App.js</code>)<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.13</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/d21882f6b8b852d70940ac169cc37ba82dc4091d) | [deployment](https://defaultwebapp-rih2176g4-eirik-torskes-projects.vercel.app) ]</sub>

**NB!**
Until noe we could have opened the webapp locally by just opening the `index.html` file in a browser locally.
Not anymore.
It will be effectively stopped by default [CORS}(https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) behavior.
E.g.:
```
Access to script at 'file:///C:/Users/User/Projects/defaultwebapp/dist/main.js' from origin 'null' has been blocked by CORS policy:
Cross origin requests are only supported for protocol schemes: chrome-extension, chrome-untrusted, data, edge, http, https, isolated-app.
```
It is possible to circumvent this by opening the browser with a flag,
or maybe with [data URLs](https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/data) and `modulepreload`,
but it is not really recommended.
Our workaround is a simple deployment routine.

...


With ESM, it is possible to preload modules.
This for preventing startup delay, caused by the browser-default deferred downloading of modules.

Replace `index.html` with:
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<title>Default Webapp 2024</title>
<style>
    html {
        font-family: sans-serif;
    }
</style>
<div id="app"></div>
<script src="./main.js" type="module"></script>
<!--
  To prevent waterfall-loading, we preload all the ESM files of our application.
-->
<link rel="modulepreload" href="https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js">
<link rel="modulepreload" href="./App.js">
```
(Closing tags for `<meta>` and `<link>` are not required.)

Bump the version:
```shell
(Get-Content .\App.js).Replace('0.1.13', '0.1.14') | Set-Content .\App.js
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is still on 121 MB<br/>
- Web page size (at rest): 2,0 KB<br/>
- Web page size (network): 75,1 KB (<code>vue.esm-browser.prod.js</code>) + 537 B (<code>index.html</code>) + 314 B (<code>main.js</code>) + 613 B (<code>App.js</code>)<br/>
- Web page response time: <40 ms<br/>
</sub>
</p>

<sub>[ <code>v0.1.14</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/f7a8aac85f849d4bde0e1b43653343d919928137) | [deployment](https://defaultwebapp-656rxkdbe-eirik-torskes-projects.vercel.app) ]</sub>


#### Viewport <meta> tag
One final thing before we move over to the "bundled build".
The "viewport" `<meta>` tag is used to control the viewport's size and shape.
The browser's viewport is the area of the window in which web content can be seen.
This may not be the same size as the rendered page.

Some mobile devices and other narrow screens render pages in a virtual window or viewport,
which is usually wider than the screen, and then shrink the rendered result down so it can all be seen at once.
Users can then zoom and pan to look more closely at different areas of the page.
This virtual viewport is a way to make non-mobile-optimized sites in general look better on narrow screen devices.
However, this mechanism is not so good for pages that are optimized for narrow screens using media queries.
The viewport <meta> element mitigates this problem of virtual viewport on narrow screen devices.

A typical mobile-optimized site contains something like the following:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Bump the version:
```shell
(Get-Content .\App.js).Replace('0.1.14', '0.1.15') | Set-Content .\App.js
```

Execute the deployment routine, described above.

<sub>[ <code>v0.1.15</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/b02bec76c64ed9b300553638316a299ba0baf658) | [deployment](https://defaultwebapp-cy9x4wa7g-eirik-torskes-projects.vercel.app) ]</sub>


### Vite
[Vite](https://vitejs.dev) is a new take on the building of ECMAScript-based project.
(For my part, I am happy to leave **webpack** behind...)
Vite is a great alternative; it almost feels like there is no build step at all.
Furthermore, you get incredible fast automatic ("hot") module reloading (HMR), which you can only get with sophisticated tooling.
Vite uses [esbuild](https://esbuild.github.io) (bundler) and [Rollup](https://rollupjs.org) (plugins) under the hood.

Install Vite:
```shell
pnpm install vite --save-dev
```

```shell
pnpm vite --version
```


#### Vite initial config
Vite is all about convention over configuration.
Even so, Vite is highly configurable.

```shell
New-Item vite.config.js
```

Add initial `vite.config.js`:
```javascript
import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        minify: false,
        terserOptions: {
            compress: false,
            mangle: false,
        },
        emptyOutDir: false
    },
    server: {
        port: 9090,
        strictPort: true
    }
});
```
For now, we're changing the development environment port.
Also, we are (temporarily) disabling Vite's minification process to have a look at the built artifacts.

Have a look at the complete Vite configuration options here:
https://vite.dev/config/


#### Internal development web server
Vite has an internal development web server, supporting HMR for an incredible fast developer feedback cycle.
Update `package.json` with a new script for the Vite "dev" web server:
```
"dev": "pnpm vite dev",
```

Open a new terminal window:
```shell
pnpm dev
```
This will spin up a Vite "dev" web server.
Navigate to the given dev URL, http://localhost:9090,
or just press `o + ENTER` which will open a browser window with your web app locally running.


#### Completing the deployment routine
Vite has two kinds of builds.
The default is *production*, but Vite also has the notion of a *staging* build.
We will extend our release routine wita "staging" step.

In `package.json`, update the "build" step, and add new "build:staging" and "staging" steps:
```
"build": "pnpm build:staging",
"build:staging": "pnpm clean && pnpm vite build --mode staging",
"staging": "pnpm build:staging && pnpm vite preview --open",
```
The "staging" step will be like "dev" step, but with a built and bundled web app.

In `package.json`, update the "build:production" and "deploy:staging":
```
"build:production": "pnpm clean && pnpm vite build",
"deploy:staging": "pnpm build:staging && pnpm vercel",
```

This means we can remove the "copyfiles" component dependency:
```shell
pnpm remove copyfiles
```

Have a look at the `pnpm-lock.yaml` file.
How is the addition of Vite and the removal of "copyfiles" reflected?

...


Run:
```shell
pnpm build
```
Have a look at the generated content in the `/dist/assets/` folder.

The `index.html` file looks quite similar.
The only difference is the reference to the generated `/dist/assets/*.js` file,
and a [Base64](https://en.wikipedia.org/wiki/Base64) version of `App.js`.
Do notice the [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) parameter added to the `<script>` tag.

Have a look at the built bundled web app before it is too late.
It will be rather unreadable in due course –
when we embed Vue into the built artifacts.


### Deployment routine (v2)
So, our new deployment routine is now:
1. Complete the new version using Vite's HMR functionality in your local development environment:
   ```shell
   pnpm dev
   ```
   Do test the build and built artifacts before deployment ("preview"):
   ```shell
   pnpm staging
   ```
2. When complete, deploy it to "staging" (a production-like environment):
   ```shell
   pnpm deploy:staging
   ```
When everything seems good to go:
3. Update the "version" in `package.json`
4. Commit to version control
5. Deploy to production:
   ```shell
   pnpm deploy:production
   ```
6. Test the new version in various browsers


---


Returning to our new version, mark Vite as "integrated" in our tech stack status.
And then bump the version:
```shell
(Get-Content .\App.js).Replace('0.1.15', '0.2.0') | Set-Content .\App.js
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is 140 MB<br/>
- Web page size (at rest): 2,9 KB (<code>index.html</code>) + 3,0 KB (bundle)<br/>
- Web page size (network): 74,4 KB (<code>vue.esm-browser.prod.js</code>) + 1,2 KB (bundle) + 1,5 KB (<code>index.html</code>)<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.2.0</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/dc792e68f0c8b651cb3349c135cef2af80f98b2f) | [deployment](https://defaultwebapp-lbioctv2z-eirik-torskes-projects.vercel.app) ]</sub>


### Project workspace folder structure
We have many more components to add to our web stack; a lot more files to add.
Our project workspace folder will very soon be getting rather intractable.
So, let us prepare for that.

This is a somewhat idiomatic folder structure for Vue-based web projects:
```
/dist
  ...
/public
  ...
/src
/src/assets
/src/scripts
/src/styles
/src/vue/components
/src/vue/directives
```

Execute:
```shell
New-Item public -Type Directory
New-Item src -Type Directory
cd .\src\
New-Item assets -Type Directory
New-Item scripts -Type Directory
New-Item styles -Type Directory
New-Item vue -Type Directory
cd .\vue\
New-Item components -Type Directory
New-Item directives -Type Directory
cd ..
cd ..
```

Move `main.js`:
```shell
git mv .\main.js .\src\scripts\main.js
```

Move `App.js`:
```shell
git mv .\App.js .\src\vue
```

*NB!* Leave the `index.html` in the project root folder.
It seems most happy living on the same level as `vite.config.js`.

Update file paths!

Bump the version:
```shell
(Get-Content .\src\vue\App.js).Replace('0.2.0', '0.2.1') | Set-Content .\src\vue\App.js
```
It is cumbersome and error-prone, having the version id several places...
We must mitigate that, later on.

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is 140 MB<br/>
- Web page size (at rest): 2,9 KB (<code>index.html</code>) + 3,0 KB (bundle)<br/>
- Web page size (network): 74,4 KB (<code>vue.esm-browser.prod.js</code>) + 1,2 KB (bundle) + 1,5 KB (<code>index.html</code>)<br/>
- Web page response time: <50 ms<br/>
</sub>
</p>

<sub>[ <code>v0.2.1</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/aaca2ac02e417b357b1c99568e4c5e88c2755aad) | [deployment](https://defaultwebapp-rf8akdjwe-eirik-torskes-projects.vercel.app) ]</sub>


### TypeScript
[TypeScript](https://www.typescriptlang.org) is a typed version of JavaScript/ECMAScript.
TypeScript transpiles to ECMAScript,
like a [lot of other web programming languages](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS).
TypeScript has gained a lot of traction and is by many regarded as the default web programming language.

Rename `vite.config.js`:
```shell
git mv .\vite.config.js .\vite.config.ts
```

Rewrite Vite configuration content:
```typescript
import type {UserConfig} from 'vite'

export default {
    build: {
        minify: false,
        terserOptions: {
            compress: false,
            mangle: false,
        },
        emptyOutDir: false
    },
    server: {
        port: 9090,
        strictPort: true
    }
} satisfies UserConfig
```

Rename `main.js`:
```shell
git mv .\src\scripts\main.js .\src\scripts\main.ts
```

Rename `App.js`:
```shell
git mv .\src\vue\App.js .\src\vue\App.ts
```

Mark TypeScript as "integrated" in our tech stack status.

Update file paths!

Optionally, do minor re-writes of the two files.

Bump the version:
```shell
(Get-Content .\src\vue\App.ts).Replace('0.2.1', '0.2.2') | Set-Content .\src\vue\App.ts
```

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is 140 MB<br/>
- Web page size (at rest): 2,9 KB (<code>index.html</code>) + 3,2 KB (bundle)<br/>
- Web page size (network): 74,4 KB (<code>vue.esm-browser.prod.js</code>) + 1,2 KB (bundle) + 1,5 KB (<code>index.html</code>)<br/>
- Web page response time: <60 ms<br/>
</sub>
</p>

<sub>[ <code>v0.2.2</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/fb7716fcadbde05c41746be69c185f935a862b09) | [deployment](https://defaultwebapp-lzdm3ynud-eirik-torskes-projects.vercel.app) ]</sub>


### Vue via Vite plugin (instead of via CDN)
Let us source Vue via Vite, so it will as a regular project dependency
(together with all the others in `package.json`).

This will be as using Vue as an ESM module.
It will be bundled together with our application and presentation logic by Vite.

Install Vue and then Vite's Vue plugin:
```shell
pnpm install vue --save-dev
pnpm install @vitejs/plugin-vue --save-dev
```

Update `vite.config.ts`, import Vue plugin:
```typescript
import vue from '@vitejs/plugin-vue'
```

And add Vue as a Vite build plugin:
```code
...
plugins: [
    vue()
],
...
```
Now, source Vue internally instead of from CDN; in `main.ts`:
```typescript
import {createApp} from 'vue/dist/vue.esm-bundler'
```
Yet another Vue distribution variant...
This one is custom-made for bundlers, like Vite.
It is ESM-based, and only fetching Vue features needed for this particular build.

Also, remove all `<link rel="modulepreload" ...>` from `index.html`
Update version in `package.json` and `App.ts` to 0.2.3 (still a cumbersome and error-prone routine...).

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is 157 MB<br/>
- Web page size (at rest): 315 B (<code>index.html</code>) + 438 KB (bundle)<br/>
- Web page size (network): 111 KB (bundle) + 426 B (<code>index.html</code>)<br/>
- Web page response time: 60-150 ms, considerably more latency...<br/>
</sub>
</p>

<sub>[ <code>v0.2.3</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/290356e5cda5433f0c7046635bacd1203bbe7aae) | [deployment](https://defaultwebapp-o7n6r9kxl-eirik-torskes-projects.vercel.app) ]</sub>

Have another look at the generated `.js` file in the `/dist/assets/` folder.
It has grown significantly, as Vue is embedded inside.

All kinds of minification routines are still deactivated in Vite.


---


### Vue components
Vue is a component-oriented web application framework.
This Vue component will contain the initial state,
and the initial visual components, which will be added/bound to the DOM by Vue.

Let us rewrite our `App.ts` Vue component to a [Vue Single-File Component (SFC)](https://vuejs.org/guide/scaling-up/sfc/).
SFC is a special file format that allows us to encapsulate the template, logic, and styling of a Vue component in a single file.
SFCs have a `.vue` suffix.

Let us promote our Vue component `App.ts` to our first (and main) Vue SFC.

Rename `App.ts`:
```shell
git mv .\src\vue\App.ts .\src\vue\App.vue
```

Replace our ESM typescripted content with:
```vue
<script setup lang='ts'>
    const title = 'Default Webapp 2024'
    const version = '0.3.0'

    const notIntegrated = '✗'
    const integrated = '✓'
</script>

<template>
    <h1>{{ title }}</h1>
    <p style="font-weight: bold;">Technology stack status:</p>
    <ul style="list-style-type: none;">
        <li>Git: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">GitHub</a>: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>GitHub: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>Vercel: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>Vue: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>Vite: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>TypeScript: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>Tailwind: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
        <li>Vitest: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
        <li>Pinia: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
        <li>HTTP APIs: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
        <li>TSC/ESLint: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
    </ul>
    <p style="padding-top: 8px;font-family: monospace;color: grey;">
        [
        v{{ version }} |
        <a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md"
           style="font-family: monospace;color: grey;" target="_blank">Documentation</a>
        ]
    </p>
</template>
```
Open a diff representation of the new content end the previous one.
Compare them.

Alter the imports in the top of the `main.ts` file:
```typescript
import {createApp} from 'vue'
import App from '../vue/App.vue'
...
```
As the web app startup now goes through a Vue component,
we can now reference Vue via the alias "vue", declared in the embedded Vue source.

Update version in `package.json` and `App.vue` to 0.3.0 (still a cumbersome and error-prone routine...).

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is 157 MB<br/>
- Web page size (at rest): 315 B (<code>index.html</code>) + 175 KB (bundle)<br/>
- Web page size (network): 45 KB (bundle) + 469 B (<code>index.html</code>)<br/>
- Web page response time: <40 ms, snappy again<br/>
</sub>
</p>

<sub>[ <code>v0.3.0</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/d0a576ab092e0189f886b9ffe6fd4aa8119487cc) | [deployment](https://defaultwebapp-3n16wx3fz-eirik-torskes-projects.vercel.app) ]</sub>


#### Project config state in Vue from 'package.json'
Update `App.vue` "script" part with:
```vue
...
<script setup lang='ts'>
    import packageJson from '../../package.json'

    const title = packageJson.title
    const version = packageJson.version
    ...
```

Update "version" in `package.json` (only) to 0.3.1.

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is 157 MB<br/>
- Web page size (at rest): 315 B (<code>index.html</code>) + 174 KB (bundle)<br/>
- Web page size (network): 45 KB (bundle) + 428 B (<code>index.html</code>)<br/>
- Web page response time: 60-150 ms, considerably more latency...<br/>
</sub>
</p>

<sub>[ <code>v0.3.1</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/0180c36e5b4711063a41bf53264fbbbc2fd1b237) | [deployment](https://defaultwebapp-5ivbl2dlt-eirik-torskes-projects.vercel.app) ]</sub>


#### Activating Vite's (default) minification routines
In `vite.config.ts`, remove the entire `build` object (for now).
Let us use Vite's default build routine.

Execute the deployment routine, described above.
<p>
<sub>
- The project workspace folder is 157 MB<br/>
- Web page size (at rest): 315 B (<code>index.html</code>) + 61 KB (bundle)<br/>
- Web page size (network): 25 KB (bundle) + 428 B (<code>index.html</code>)<br/>
- Web page response time: <40 ms, snappy again<br/>
</sub>
</p>

<sub>[ <code>v0.3.2</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/4b71b70bac641baa89f247713fb2833325538a27) | [deployment](https://defaultwebapp-2jxsoftru-eirik-torskes-projects.vercel.app) ]</sub>


---


### Tailwind
Traditionally, whenever you need to style something on the web, you write Cascading Style Sheets (CSS) code.
CSS is a (mostly) declarative domain-specific programming language.
CSS tend to end up in separate files with the `.css` suffix.

Tailwind is yet another attempt to standardize CSS utility class names in such a way that it actually works for all.
With Tailwind, you style elements by applying pre-existing classes *directly in your HTML*.

The main motivation is thoroughly argued for here:
https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

...


But before we start styling using Tailwind, let us see how our web app looks like without any styling;
or more correctly, with the browser's default styling.

Remove `<style>` tag from `index.html`, and remove all styling in `App.vue`.

Update version in `package.json` to 0.4.0.

Execute the deployment routine, described above.

Have a look at the web app, in different browsers.

<sub>[ <code>v0.4.0</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/89544a487e696937872a1e49aaa421a6f12b7c1a) | [deployment](https://defaultwebapp-nps8qb62j-eirik-torskes-projects.vercel.app) ]</sub>


---


Install Tailwind (`tailwindcss`) and its peer dependencies:
```shell
pnpm install tailwindcss --save-dev
pnpm install postcss --save-dev
pnpm install autoprefixer --save-dev
```

To load an ECMAScript Modules (ESM) as the default, (directly via npm),
set `"type": "module"` in the `package.json`.
(Another alternative is to use the `.mjs` file extension.)

Tailwind is integrated into the Vite build process via [PostCSS](https://postcss.org);
a tool for transforming CSS using ECMAScript.

Create initial PostCSS and Tailwind config files:
```shell
pnpm tailwindcss init --ts --postcss
```
(It seems that `postcss.config.js` is available as `.js` only.)

Add content file path in the generated `tailwind.config.ts` file:
```typescript
import type {Config} from 'tailwindcss'

export default {
    content: ['./src/vue/App.vue'],
    //plugins: [],
    //theme: {extend: {}}
} satisfies Config
```
...which tell Tailwind to scan our `App.vue` when creating our web app's styling.
(Configuration settings we don't yet need are commented out.)

Create initial application stylesheet `main.css` file:
```shell
New-Item ./src/styles/main.css
```
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Tailwind consists of three "layers":
1. "**base**"

    Base styles for specific HTML elements

2. "**components**"

    More complicated classes you want to add to your project that you’d still like to be able to override with utility classes.
    Traditionally these would be classes like card, btn, badge — that kind of thing.
    The components layer is also a good place to put custom styles for any third-party components you’re using.

3. "**utilities**"

    Your own custom utility classes

Finally, import the styling in `main.ts`:
```typescript
import '../styles/main.css'
```

I guess we now can mark Tailwind as "integrated", in `App.vue`:
```typescript
const tailwind = integrated
```

...


Now, the web app is styled with Tailwind's default theme, [Preflight](https://tailwindcss.com/docs/preflight).
It is an opinionated set of base styles for Tailwind projects, built on top of [modern-normalize](https://github.com/sindresorhus/modern-normalize),

The default Tailwind theme should be suitable as a starting point, even we have lost our heading style.
The header looks quite ...modest, to say the least.
The reason is that in the default Tailwind styling, headings are unstyled, and have the same font-size and font-weight as normal text.
The reason for this is two-fold the Tailwind project argues:
- It helps you avoid accidentally deviating from your type scale.
  By default, browsers assign sizes to headings that don’t exist in Tailwind’s default type scale,
  and aren’t guaranteed to exist in your own type scale.
- In UI development, headings should often be visually de-emphasized. Making headings unstyled by default means any styling you apply to headings happens consciously and deliberately.
  (See: https://tailwindcss.com/docs/preflight#headings-are-unstyled)

The same things are true for other important elements, like anchors.
So, it is correct to say that we are ready to employ Tailwind styling.
Our web app's styling is rebooted and reset!

...


Execute the deployment routine, described above.

Have a look at the generated `.js` and `.css` files in the `/dist/assets/` folder.
Open it in an IDE, and format it to make it human-readable.
The CSS file is Tailwind's default "reset" theming as mentioned above;
smoothing over cross-browser inconsistencies and making it easier for you to work within the constraints of your design system.

Have a look at the web app, in different browsers.
Now, they should look rather uniform, compared to the default browser styling.

<sub>[ <code>v0.4.1</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/dcb68f4f37bcc9865a2dbdd1032b43b3fd5b707c) | [deployment](https://defaultwebapp-osm9ydahc-eirik-torskes-projects.vercel.app) ]</sub>


---


Ok, let us add some (default) styles, in `main.css`:
```css
...
@layer base {
    html {
        @apply text-gray-600
    }

    h1 {
        @apply text-3xl font-semibold
    }

    h2 {
        @apply text-lg font-semibold
    }

    a {
        @apply underline
    }

    li > a {
        @apply no-underline
    }
}
@layer components {}
@layer utilities {}
```
Here we are modifying Tailwind's "base" layer:
1. Setting the font color to a dark gray
2. Modifying `h1` and `h2` elements
3. Modifying `a` element (underline marker only, and no underline in lists)

These will apply for all HTML elements in this Vue instance; our entire web app.

Execute the deployment routine, described above.

<sub>[ <code>v0.4.2</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/594575964df5404d054ac44c02cf2c10f5cc6464) | [deployment](https://defaultwebapp-7bt5oi1e4-eirik-torskes-projects.vercel.app) ]</sub>


---


As an example, let us use Tailwind's [recommended font](https://rsms.me/inter/).
Using a custom font is nice because it allows us to make the components look the same on all browsers and operating systems.

The easiest way is to first add it via the CDN, in `index.html`:
```html
<link rel="preconnect" href="https://rsms.me">
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
```

The `preconnect` keyword for the `rel` attribute of the `<link>` element is a hint to browsers that the user is likely to need resources from the target resource's origin.
Therefore the browser can likely improve the user experience by preemptively initiating a connection to that origin.
Preconnecting speeds up future loads from a given origin by preemptively performing part or all of the handshake (DNS+TCP for HTTP, and DNS+TCP+TLS for HTTPS origins).
`<link rel="preconnect">` will provide a benefit to any future cross-origin HTTP request, navigation or subresource.
It has no benefit on same-origin requests because the connection is already open.
If a page needs to make connections to many third-party domains, preconnecting them all can be counterproductive.
The <link rel="preconnect"> hint is best used for only the most critical connections.
For the others, just use `<link rel="dns-prefetch">` to save time on the first step—the DNS lookup.

Add "Inter var" to your "sans" font family in your Tailwind configuration.
Update `tailwind.config.ts` with:
```typescript
import defaultTheme from 'tailwindcss/defaultTheme'
```
and:
```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    }
  }
}
```
Here we are extending the `fontFamily.sans` configuration in the Tailwind theme (which is the default theme).
We are simply putting "Inter var" as the prioritized font,
with the rest of Tailwind's default theme's `fontFamily.sans` configuration as secondary alternatives.
It is added as a [destructured assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Execute the deployment routine, described above.

We see that the network load of our web app increases significantly with the introduction of the external font.
Albeit, the startup time of our web app is still not particularly affected.
The `preconnect` hint helps out here.
Also, browser-external fonts should be cached in the browser.
More on that later on.

<sub>[ <code>v0.4.3</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/4e79f1765cc603d733ea1c3109ced8845da1f6d8) | [deployment](https://defaultwebapp-hrd86lqz1-eirik-torskes-projects.vercel.app) ]</sub>


---


Add simple page layout to `App.vue`, using "semantic" HTML elements:
```vue
<template>
    <article>
        <header>
            <h1>{{ title }}</h1>
        </header>
        <hr/>
        <section>
            <div>
                <h2>Technology stack status</h2>
                <ul>
                    <li class="checked">Git</li>
                    <li><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">GitHub</a><span class="{{ checked }}"></span></li>
                    <li class="checked">Vercel</li>
                    <li class="checked">Vue</li>
                    <li class="checked">Vite</li>
                    <li class="checked">TypeScript</li>
                    <li class="checked">Tailwind</li>
                    <li class="unchecked">Vitest</li>
                    <li class="unchecked">Pinia</li>
                    <li class="unchecked">HTTP APIs</li>
                    <li class="unchecked">TSC/ESLint</li>
                </ul>
            </div>
        </section>
        <hr/>
        <footer>
            <span>
                <span class="code">v{{ version }}</span>
                <span class="text-gray-400"> | </span>
                <span class="text-sm text-gray-400"><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" target="_blank">Documentation</a></span>
            </span>
            <span>
                <span class="text-xs">Built: </span>
                <span class="code text-gray-400">{{ buildTimestamp }}</span>
            </span>
        </footer>
    </article>
</template>
```

Also, update script block, in `App.vue`:
```vue
<script setup lang='ts'>
    import packageJson from '../../package.json'

    const title = packageJson.title
    const version = packageJson.version
    const buildTimestamp = new Date()
</script>
```

This does not look particularly good.
It's all cramped together... we want to use the entire screen.
We need som styling.

To fix the page layout, we can use Tailwind's Flexbox classes.
Tailwind's Flexbox classes are more or less a one-to-one mapping of standard CSS Flexbox directives.

The `article` element represents an entire page in this application.
```html
<article class="flex flex-col justify-between h-dvh">
```
The Flexbox direction class `flex-col` aligns the flexbox items vertically.

The `h-*` Tailwind classes are utilities for setting the height of an element.
The `h-screen` class is equivalent to `height: 100vh;`.
The `h-svh` class is equivalent to `height: 100svh;`.

The `h-dvh` class is equivalent to `height: 100dvh;`
It will use the current viewport height, excluding user agent’s interface.
See: https://tennant.io/css-viewport-units-what-they-mean-vh-dvh-svh-etc/

The `section` HTML element represents a horizontal full-width box in this application.
```html
<section class="basis-full">
```
The `basis-*` Tailwind classes are utilities for controlling the initial size of flex items.
The `basis-full` class is equivalent to `flex-basis: 100%;`.

Also, add Flexbox to the footer.
Flexbox declarations may be arbitrarily nested:
```html
<footer class="flex flex-row justify-between">
```
(The Flexbox direction class `flex-row` is the default and may be omitted.)

...


We were using some extra CSS classes above.
Add them to `main.css`, as Tailwind "utilities" layer class extensions:
```css
...

@layer utilities {
    .capitalized::first-letter {
        text-transform: capitalize;
    }

    .unchecked {
        @apply after:content-['✗'] after:content-center after:font-bold after:text-xl after:text-red-600 after:ml-2
    }

    .checked {
        @apply after:content-['✓'] after:content-center after:font-bold after:text-xl after:text-green-600 after:ml-2
    }

    .code {
        @apply font-mono text-sm text-gray-400
    }

    .warning {
        @apply text-sm text-amber-500
    }

    .todo {
        @apply font-mono text-sm text-red-500
    }

    /* DEBUG */
    article, section, div, span, ul, li > * {
        /* Activate when needed*/
        border: 1px dotted red
    }
}
```
Some of the state is also moved from `App.vue` to the `checked`/`unchecked` classes.

Also, some handy "debug" style classes are added.
They are activated.
Deactivate/comment them out at will.

Execute the deployment routine, described above.

<sub>[ <code>v0.4.4</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/027c5ae3989fcb174c10fa2ae92516d71f192ba0) | (missing deployment) ]</sub>

...


Finally, add margins and padding to the web page.
In general, don't be afraid to add some decent margins.
Here we can play around with Tailwind's excellent support for responsive design, see https://tailwindcss.com/docs/responsive-design/.

**NB!**
*Use padding instead of margins for elements that are adjacent to the viewport's edges*.
According to the [box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/) margins operates outside the HTML element.
Because of this it may push the element outside the visible screen and cause scrolling bars to appear.

```vue
<template>
    <article class="flex flex-col justify-between h-dvh p-6">
        <header class="mt-4">
            <h1>{{ title }}</h1>
        </header>

        <hr class="my-2"/>

        <section class="basis-full my-4">
            <div>
                <h2>Technology stack status</h2>
                <ul class="mt-2 ms-4">
                    <li class="checked">Git</li>
                    <li><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">GitHub</a><span class="{{ checked }}"></span></li>
                    <li class="checked">Vercel</li>
                    <li class="checked">Vue</li>
                    <li class="checked">Vite</li>
                    <li class="checked">TypeScript</li>
                    <li class="checked">Tailwind</li>
                    <li class="unchecked">Vitest</li>
                    <li class="unchecked">Pinia</li>
                    <li class="unchecked">HTTP APIs</li>
                    <li class="unchecked">TSC/ESLint</li>
                </ul>
            </div>
        </section>

        <hr class="my-2"/>

        <footer class="flex flex-row justify-between">
            <span class="flex items-center">
                <span class="code">v{{ version }}</span>
                <span class="text-gray-400 mx-2"> | </span>
                <span class="text-sm text-gray-400"><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" target="_blank">Documentation</a></span>
            </span>
            <span>
                <span class="text-xs">Built: </span>
                <span class="code text-gray-400">{{ buildTimestamp }}</span>
            </span>
        </footer>
    </article>
</template>
```

Execute the deployment routine, described above.

<sub>[ <code>v0.4.5</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/46aa7d3dba11970a1dd29ef800cc5fbb2c7caf87) | [deployment](https://defaultwebapp-3hi5g5q53-eirik-torskes-projects.vercel.app) ]</sub>


### Graphics
Let's bring some shapes and colors into our page, e.g. by adding some logos.
For (minor) visual content, vector graphics (e.g. SVG files) and vector graphics-based fonts are preferred over binaries.


#### By file
Let's start at the top.
Download the SVG logo of git from https://git-scm.com/downloads/logos.
Add it to the `src/assets` folder.

Now, add it to the "Git" list item:
```vue
...
<li class="checked flex items-center h-8">
    <span class="code">[v0.0]</span>
    <span class="content-center ms-2">
        <a href="https://git-scm.com">
            <img src="/src/assets/git-logo-2color.svg" alt="Git" height="44px" width="44px"/>
        </a>
    </span>
</li>
...
```
Regarding the `public` folder vs. the `src/assets` folder...
Files containing static content such as images, sounds, fonts, icons, etc.
may either be put in the `public` folder or the `src/assets` folder.
The `public` folder is a special folder that contains static files that Vite does **not** process.
The files in the `public` folder are copied directly to the build folder without any modification.
Also, they are publicly available via a URL.
Files in the `src/assets` folder will be processed by Vite, e.g., minification/compression –
and embedded in the bundled version of the web app.

Binary files usually go into the `public` folder.
However, they may be placed in `src/assets` folder, so image manipulation can be used in the Vite build –
e.g., by [this](https://github.com/ElMassimo/vite-plugin-image-presets) Vite plugin.


#### By font
There are numbers of font sets available.
A well-known font set is [Font Awesome](https://fontawesome.com).
There we find e.g., the GitHub logo:
https://fontawesome.com/v6/icons/github?f=brands&s=solid

Install:
```shell
pnpm install @fortawesome/fontawesome-svg-core --save-dev
pnpm install @fortawesome/free-brands-svg-icons --save-dev
pnpm install @fortawesome/vue-fontawesome --save-dev
```

Update
`main.ts`:
```js
import {createApp} from 'vue'
import App from '../vue/App.vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import '../styles/main.css'

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
```

and `App.vue`:
```vue
...
import {faGithub} from "@fortawesome/free-brands-svg-icons";
...
<li class="checked flex items-center h-8">
    <span class="code text-gray-400">[v0.0]</span>
    <a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">
        <FontAwesomeIcon v-bind:icon="faGithub"
                         class="text-xl translate-y-0.5 ms-2"
        />
        <span class="ms-1.5">GitHub</span>
    </a>
</li>
...
<footer class="flex justify-between">
    <span class="flex items-center">
        <span class="code">v{{ version }}</span>
            <span>
                <a href="//github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" target="_blank">
                    <FontAwesomeIcon v-bind:icon="faGithub"
                                     class="mx-4 text-xl text-gray-400"
                    />
                </a>
            </span>
    </span>
    <span>
        <span class="code">Built: {{ buildTimestamp }}</span>
    </span>
</footer>
...
```
See: https://docs.fontawesome.com/web/use-with/vue


#### By embedding
Go to https://vercel.com/geist/icons, and copy e.g., the Vercel icon as an SVG.
Paste it directly in `App.vue`, alter the dimension, and maybe the position a little bit:
```vue
...
<li class="checked flex items-center h-8">
    <span class="code text-gray-400">[v0.0]</span>
    <a href="https://vercel.com" class="flex items-center" target="_blank">
        <svg class="ms-2"
             data-testid="geist-icon"
             stroke-linejoin="round"
             viewBox="0 0 16 16"
             height="18px"
             width="18px"
             style="color: currentcolor;"
        >
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
            />
        </svg>
        <span class="ms-1">Vercel</span>
    </a>
</li>
...
```


#### By Vue component
SVG files may easily be turned into a Vue component, of type Single File Component (SFC).
Create an SFC file:
```shell
New-Item ./src/vue/components/GitIcon.vue
```
Then copy the entire SVG file content into a `<template>` block.
Also, values in the SVG file can be parameterized, like:
```vue
<script setup lang='ts'>
const props = defineProps(['height', 'width'])
...
</script>

<template>
    ...
    <svg xmlns="http://www.w3.org/2000/svg" v-bind:height="height" v-bind:width="width" viewBox="0 0 219 92">
    ...
</template>
```
Now the component can be included with, e.g.:
```xml
<GitIcon height="2rem"
         width="2.5rem"
         class="ms-2"
/>
```

Execute the deployment routine, described above.

<sub>[ <code>v0.4.6</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/731a0c862a44541c10e7cacd89e8633d77b2d724) | [deployment](https://defaultwebapp-j8lbsjmhg-eirik-torskes-projects.vercel.app/) ]</sub>

...


Add the rest of the logo icon using one of the strategies above.
Source the SVG logos or image logos from the various component providers:
- https://vercel.com/geist/icons/
- https://github.com/vitest-dev/vitest/blob/main/docs/public/logo.svg
- https://tailwindcss.com/brand/
- https://www.typescriptlang.org/branding/

Execute the deployment routine, described above.

<sub>[ <code>v0.4.7</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/27f0e45b4b930f8b1ba83d77be761ca100b677d3) | [deployment](https://defaultwebapp-j8lbsjmhg-eirik-torskes-projects.vercel.app) ]</sub>

<sub>[ <code>v0.4.8</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/126af16dceb2eddf6f656e9b592e80bf85e7c75d) | [deployment](https://defaultwebapp-44u5gjzgm-eirik-torskes-projects.vercel.app) ]</sub>

<sub>[ <code>v0.4.9</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/b6d834acb7b8604f71834519570fa427de84c5ff) | [deployment](https://defaultwebapp-1stowfnur-eirik-torskes-projects.vercel.app) ]</sub>

...


#### Backgrounds
Another way of bringing some more "life" into our web app is by using background gradient colors,
e.g, via [Tailwind](https://tailwindcss.com/docs/gradient-color-stops).
Some neat "gradient generators" are available, like:
- https://www.creative-tim.com/twcomponents/gradient-generator
- https://www.tailwindgradient.com/
- https://tailscan.com/gradients
- https://gradienty.codes/
Have a look.

Another very "visual" trick is background images,
which Tailwind has [good support](https://tailwindcss.com/docs/background-image) for.
Together with backdrop effects like
[blur](https://tailwindcss.com/docs/backdrop-blur), and
[opacity](https://tailwindcss.com/docs/backdrop-opacity),
very nice backgrounds can be crafted.

As we will play around with background colors *dynamically*, in a short while–we won't use this functionality.

...


We will only add a simple gradient to our header,
a silly from-<span style="color:red;">red</span>-to-<span style="color:green;">green</span> ("not" to "ok") effect.

Execute the deployment routine, described above.

<sub>[ <code>v0.4.10</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/d36738ddf13f2e7cc64d40b2cd3d89786adc38e5) | [deployment](https://defaultwebapp-1stowfnur-eirik-torskes-projects.vercel.app) ]</sub>


---


### Favicon
Let us have a look at the internal well-being of our web app...
Click <kbd>F12</kbd> in the browser running our Vite development server.
Now, as a test, do a hard browser tab refresh: <kbd>CTRL</kbd>+<kbd>F5</kbd>
There are (annoying) `404 Not Found` response errors, complaining about missing favicon in the browser console.

The days of just having a simple tiny `favicon.ico` file are long gone.
Several image formats and types but also configuration files (e.g.: `browserconfig.xml` and `manifest.json`) are now necessary to have a nice favicon on all the available devices out there.
You can generate your favicon files using the generator at https://realfavicongenerator.net.
It provides all the necessary files, also code snippets for updating our `<head>` element.
For my favicon, I just picked one from https://favicon.io/emoji-favicons/, namely https://favicon.io/emoji-favicons/pear/.

Execute the deployment routine, described above.

<sub>[ <code>v0.5.0</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/9428e40de020cceed5b3600369d97643d6d67452) | [deployment](https://defaultwebapp-fpwn1yo64-eirik-torskes-projects.vercel.app/) ]</sub>


### Robots.txt
`robots.txt` is the filename used for implementing the Robots Exclusion Protocol –
a standard, used by websites, to indicate to visiting web crawlers and other web robots which portions of the website they are allowed to visit.

The "robots.txt" file can be used in conjunction with [sitemaps](https://en.wikipedia.org/wiki/Sitemaps),
another robot inclusion standard for websites.

Execute the deployment routine, described above.

<sub>[ <code>v0.5.2</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/628e53bc01a980d96ea6aa2a8e55604150af3e74) | [deployment](https://defaultwebapp-m5bokp3mw-eirik-torskes-projects.vercel.app) ]</sub>


### Humans.txt
`humans.txt` (https://humanstxt.org) is an attempt to "balance" the `robots.txt` with a more human-oriented "info-file".
*robots.txt is for machines, humans.txt is for humans*, as the world wide web is intended for.
It is a place for expressing gratitude to authors of all tools that are helpful when creating your software projects.

It has gained little traction, it seems, but we'll include it anyway.

Execute the deployment routine, described above.

<sub>[ <code>v0.5.3</code>: [commit](https://github.com/eirikt/default-webapp-vue-vite-vercel/commit/420cb311bf3067c449dad0c12910c8867ec4d1cf) | [deployment](https://defaultwebapp-lqsxf0qaw-eirik-torskes-projects.vercel.app) ]</sub>

...


Other initiatives in this webapp "info-file" ball park are:
- https://en.wikipedia.org/wiki/Security.txt
- https://en.wikipedia.org/wiki/Ads.txt
