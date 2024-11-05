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
e.g. the prominent [GitHub](https://github.com).

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
