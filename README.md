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
1. an official (natural language) name.

Then, also create:
2. `package.json` "name" -> _The "name" field contains your package's name and must be lowercase without any spaces. May contain hyphens, dots, and underscores._
3. source-code-friendly name variant with no whitespace characters
4. URL-friendly name variant with no whitespace characters, and lowercase characters only (hyphens allowed)

For this little web application:
1. Default Webapp 2024
2. `default-webapp-2024`
3. `defaultWebapp2024`
4. `defaultwebapp`

Let's bootstrap project development.
