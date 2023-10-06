# NuvalenceTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

Project developed with Angular 16 and node 18

## A summary of the assignment

Develop the project using a lazy loading architecture using two components, the first is in charge of listing all the users and the second is in charge of viewing the details of the selected user, each component has its child standalone component which is in charge of a single task. I used Angular material.

## features I’ve implemented

I created the function `getUsers` inside user.services.ts to get all users using the endpoint.
In users.componente I created `getUsers()` to consume the function in my services to get users, `usersDetailsSelected()` to navigate to datails page and watch the user details and finally `totalUsersSelected()` to consume the endpoint by passing as a parameter the total number of users you want to get
In users-details.component I subscribe to a variable of type BehaviorSubject to obtain the user's data and send it to the child component.
Inside the child components i used `ngOnChanges` function to listen to which input has changed the data and refresh the data in the interface

If I had more time, perhaps I would have liked to make a search engine to filter a user from the table doing this would take me a couple more hours.

## Instalation

After cloning the project to your local machine, run `npm install` to install the project dependecies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
