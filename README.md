# NinjaOne React Showcase

> :warning: **The repo is public while being evaluated, please notify me after cloning the project, so I can change it to private.**

This repo organizes the source code of the NinjaOne React Showcase.

:rocket: [LIVE DEMO](https://thiagohiguchi.github.io/ninjaone-client/)
The first request from the backend API might take a while due to limitations of the platform.


The project has a simple SPA architecture with the following stack:

- [Vite](https://vitejs.dev/): A fast build tool that helps you develop React applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [DaisyUI](https://daisyui.com/): A plugin for Tailwind CSS that provides a set of ready-to-use components.
- [Cypress](https://www.cypress.io/): A powerful end-to-end testing framework that makes it easy to test your web applications in an automated and reliable way. Cypress provides fast, reliable tests with real-time feedback and detailed error reporting.
- [Storybook](https://storybook.js.org/): A development environment for UI components that allows you to build, test, and document your UI components in isolation.
- [ESLint](https://eslint.org/): A pluggable linting utility for JavaScript and JSX that enforces coding best practices and helps catch errors.
- [Prettier](https://prettier.io/): An opinionated code formatter that ensures consistent code style across your project.
- [i18next](https://react.i18next.com/): A internationalization framework.
- Structure: Project structured inspired by [React Modern Template](https://github.com/ignatiosdev/React-Vite-Tailwind-DaisyUI-Storybook-Boilerplate).
- UI Design: Provided by NinjaOne, via [figma](https://www.figma.com/design/B3tlX0vhKn1io0ajJdIGtV/NinjaOne-React-Dev-Showcase).
- Frontend Hosting: [GH Pages](https://www.github.com/)
- Backend Hosting: [Render](https://www.render.com/) - [Live API Endpoint](https://ninjaone-backend.onrender.com)


## Project Design

The project is organized using an Atomic Design approach, which categorizes elements into three levels based on their complexity and relationships with one another. Additionally, several key files and variables are implemented to enhance code readability and maintainability. 
Additionally, the project is mobile first and fully responsive.

## Getting Started

Follow the styp-by-step below to setup your local environment.


```bash
# clone the repo
git clone https://github.com/thiagohiguchi/ninjaone-client.git

# install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:5173/ninjaone-client/](http://localhost:5173/ninjaone-client/) with your browser to see the result.

You can start editing the page by modifying `src.App.jsx`. The page auto-updates as you edit the file.

The devices data is provided by a REST API, which is available though the [devicesTask_serverApp](https://github.com/NinjaRMM/devicesTask_serverApp) application, deployed [here](https://ninjaone-backend.onrender.com) for a live demo.

### Additional Scripts

In the project directory, you can run the following scripts:

```bash

# builds the production-ready optimized bundle.
npm run build

# runs ESLint to check for linting errors and warnings.
npm run lint

# starts a server to preview the built application.
npm run preview

# starts Storybook to develop and test UI components.
npm run storybook

# builds Storybook for production.
npm run build-storybook

# setup the local dev environment and run the cypress testing suite
npm run cypress:open
```

## Cool Features

- :white_check_mark: Device filters
- :white_check_mark: Device sorting
- :white_check_mark: CRUD device
- :white_check_mark: Fully responsive
- :white_check_mark: Support i18n (multiple languages)
- :white_check_mark: Deploy & CI/CD
- :white_check_mark: Storybook setup
- :white_check_mark: Initial e2e testing (Cypress)
- :white_check_mark: README
- :white_check_mark: Basic validations
- :white_check_mark: Connect to API
- :white_check_mark: Navigation fully accessible


## Next steps

- [ ] Deployment via CI/CD
- [ ] Add 400 and 500 error pages
- [ ] Better support to meta data
- [ ] Improve linting config
- [ ] Fix Dropdown closing behavior
- [ ] Improve transitions & animations
- [ ] Full support to TypeScript
- [ ] Refactor 'validateFields'
- [ ] Improve accessibility
- [ ] Improve tests coverage
And much, much, much more.