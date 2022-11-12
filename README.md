# <img src="public/images/logo-cropped-2.jpg" style="height: 100px;"/> Waffle's Spot 

## Description

_Duration: 2.5 weeks, working part time_

I have a cat named Waffle. While I'm very good at remembering the annual vet visit, I'm not so good at remembering the smaller, repeated tasks that need to happen throughout the year to keep my cat happy and healthy. I built Waffle's Spot to provide myself and other pet owners with daily pet care reminders, as well as a space to record notes and instructions from vet appointments. 

I also have peace-of-mind knowing that I can share my pet's profile with pet-sitters when I go out of town, so they can easily see what needs to happen while I'm gone.

## Screen Shots

<img src="public/screenshots/user-home.jpg" style="height: 300px;"/> <img src="public/screenshots/pet-profile.jpg" style="height: 300px;"/> <img src="public/screenshots/reminders.jpg" style="height: 300px;"/>

<img src="public/screenshots/edit-add-care.jpg" style="height: 300px;"/> <img src="public/screenshots/add-care-task.jpg" style="height: 300px;"/> <img src="public/screenshots/edit-details.jpg" style="height: 300px;"/>

<img src="public/screenshots/vet-note.jpg" style="height: 300px;"/> <img src="public/screenshots/share-profile.jpg" style="height: 300px;"/> 

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [nodemon](https://nodemon.io/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

1. Create a database named `waffle_spot`.
2. The queries in the `database.sql` file are set up to create the necessary tables. The project is built on [PostgreSQL](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using [Postico](https://eggerapps.at/postico/) to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`.
4. Run `npm run server` in your terminal.
5. Run `npm run client` in your terminal.
6. The `npm run client` command will open up a new browser tab for you! Waffle's Spot was built to be compatible with Google Chrome and was designed to be viewed as a mobile application. For the best user interface experience, right click in the browser window, select 'Inspect', select the 'Toogle Device Toolbar' button in the upper right, and choose the iPhone 12 Pro view from the dropdown at the top of the window.

<img src="public/screenshots/toogle-device-toolbar.jpg" style="width: 400px;"/>

<img src="public/screenshots/device-dropdown.jpg" style="width: 400px;"/>

## Usage

Waffle's Spot makes it easier to remember the little things that keep pets healthy and happy. Whether you need to keep up with daily medications, want to a weekly reminder to clean the litter box, or just got new instructions from the vet, Waffle's Spot takes all of that info and lets you know what needs attention today.

Waffle's Spot also simplifies getting care for your pets while you're traveling. You can share pet profiles with anyone who has a Waffle's Spot account. Leaving pets at home can be tough, but, with Waffle's Spot, you have the relief of knowing that the pet-sitter can see exactly what needs to happen each day, and the pet-sitter has the convenience of a daily plan. 

## Built With

- [Node.js](https://nodejs.org/en/)
- [nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Material UI](https://mui.com/)
- [React Icons](https://www.npmjs.com/package/react-icons)
- JavaScript
- CSS
- HTML