# Description

This project is a small POC of how Bit works. It contains examples of three components using different frameworks (Angular, React and Node). The framework used to create the workspace is Angular 13.

Each time a new component is created you must select the template to indicate which framework it will use to create it. Once this has done, the environment has to be assigned to that component. For instance, if you create the workspace using an Angular template (ng-workspace), all the componentes that you create will use the default environment (Angular in this case). So, even if you create a new component using a react template, the environment that it will use will be the default one. You will have to set the environment for that component.

https://bit.dev/docs/react/react-overview

# Welcome to your Bit Workspace

To get started straight away you can create a bit component, for example:

```bash
bit create ng-lib ui/ng-button --env teambit.angular/versions/angular-v13
```

Then you need to install the dependencies for the generated component:

```bash
bit install
```

And finally start the dev server

```bash
bit start
```

Open-up your browser on localhost:3000, or any other available port, and display your workspace with your components.
It may take a while to build the first time you run this command as it is building the whole user interface for your development environment.

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope.
It is where dependencies are found when you install anything.
It is also where you register aspects, bit extensions as well as apply the environments for your components.
This workspace has been setup so that all components use the Angular env. However you can create other components and apply other envs to them such as node, html, react and aspect envs.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components.


- **.gitignore**

Ignoring any files from version control
