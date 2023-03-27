
# SWEAttendence

**Table of Contents**
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [SWEAttendence](#SWEAttendence)
	- [About](#About)
  - [Getting Started](#Getting-Started)
  - [Learn More](#Learn-More)

<!-- /TOC -->

![SWEAttendence](https://github.com/yueningh/SWEChallenge/blob/master/SWEAttendence%20preview.png)
<p align="right">
<sub>(Preview)</sub>
</p>

# About
## Inspiration
The inspiration for SWEAttendance was to create a more efficient and organized way of taking attendance for Society of Women Engineers (SWE) meetings and events. By digitizing the attendance process, I aimed to save time and reduce errors compared to traditional methods.


### SWE CHALLENGE STATEMENT

Currently, our method of taking attendance is performed manually and is very tedious. Keeping track of attendance is a big part of our organization because it determines who can run for certain positions and attend certain events, such as the National Conference. Your task is to design some way to streamline and automate the tracking of attendance.
Requirements/Conditions:
- The information it has to include: name, netID, class year, major
- Has to auto-update (cumulative number of attendances) - no duplicates (if someone accidentally fills it out twice for the same meeting, it won’t count the second time)
- Either have your own way to input attendance
- Returning members don’t have to input the same information every time
- Add ons &rarr; besides weekly general meetings, also record attendance during working hours (board meetings + committee times)

### What it does

SWEAttendance is a web-based attendance tracking application for SWE events. Members can easily log in to the application and indicate their attendance with just a few clicks. The attendance data is then securely stored in a database, which can be accessed by SWE leadership to keep track of member participation and engagement. By automating the attendance tracking process, SWEAttendance significantly reduces the administrative burden associated with managing events and allows SWE leadership to focus on creating engaging and productive events for their members.


### How I built it

SWEAttendance was developed using a combination of React, Express.js, HTML, and CSS. The user interface was created with React, while the backend server and database interactions were handled using Express.js. This integration allowed for a seamless user experience and efficient data management. The result is a web application that streamlines attendance tracking for Society of Women Engineers (SWE) events, saving time and reducing errors for SWE leadership.



# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
