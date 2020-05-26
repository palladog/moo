# Ghibli Movie Marathon App 
The perfect Studio Ghibli marathon companion! 

A React web app that fetches all movies from the [Studio Ghibli API](https://ghibliapi.herokuapp.com/), as well as movie posters from the [OMDb API](http://www.omdbapi.com/), for the user to read more about and rate after watching. After being rated, the movie can be found in the "Watched" page. All movies not rated can be seen in the "Not watched" page, to facilitate the movie marathon experience. 

The fetched API data, along with a "rating" key, is saved to ’localStorage’ and then updated whenever the user adds, updates, or removes a rating. 

## Developers
* [Omar Alsaif](https://github.com/OmarAlsaif)
* [Oscar Askfelt](https://github.com/oscaraskfelt)
* [Milo Bengtsson](https://github.com/palladog)

We have mainly coded using the [VS Code](https://code.visualstudio.com/) extension [Live Share](https://visualstudio.microsoft.com/services/live-share/), meaning that changes made by *all* developers are only saved to the local file of *one* developer. As a result, the repository contributions are skewed to one developer.

## Requirements
Make sure you have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed.

## Installation 
In this example, we're using `yarn`; however, other package managers (e.g. `npm`)

### `yarn`
Install all the dependencies listed within `package.json` in the local `node_modules` folder. Running yarn with no command is the same thing as running `yarn install`.

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Choice of Framework
[React JS](https://reactjs.org/) was chosen in large part because it is the framework the developers had the most experience with, but also since it is the one the developers wish to have *more* experience with. React is arguably the most widespread JavaScript framework right now, and in contrast to its close competitor [Angular JS](https://angular.io/), its popularity is still on the increase [1]. According to SimilarTech, React is in the lead of the top 10K sites, top 1M Sites as well as the entire web. In addition, State of JavaScript 2020's findings showed that 71% of those who have used React would use it again [2](https://2019.stateofjs.com/front-end-frameworks/). In summation, React is an attractive choice of framework.

Popularity aside, React has some drawbacks – mainly that it is not a complete framework like Angular is. React JS does not offer routing natively – something Angular does – although this can easily be rectified with a package that offers declarative routing, such as [React Router](https://reacttraining.com/react-router/). Although it requires importing an external package, using said package is easy (especially considering its extensive documentation). Moreover, for a small web app such as the Ghibli Movie Marathon App, a large and complete framework is not really a necessity.

Another reason for choosing React over Angular is in regards to the learning curve. Although React is not easy by any means, Angular is a huge library with complicated concepts that take time to learn. The process is made easier with TypeScript – an offshoot of JavaScript – since Angular is built on it and thus offers more up-to-date examples on it. However, since the framework can be implemented in regular JavaScript, one does not need to learn an unfamiliar programming language in order to use the framework. However, choosing a framework without needing to spend time to familiarize oneself with redundant concepts and a new language is preferable when there is a two-week project deadline.

In continuation of the learning curve subject, React is not the framework of choice had this been the deciding factor. [Vue JS](https://vuejs.org/) is easier to learn in comparison, owing to the syntax where the HTML, JavaScript, and CSS code of one component is all roomed in a single file in the same way that JavaScript and CSS would be written in a normal HTML document. React not only separates JavaScript, and CSS into different files, but also combines the three languages by having JavaScript files rendering HTML and changing CSS attributes. For this reason, React is more difficult to implement as a beginner – but considering the developers of this project has studied and practiced programming and web development for two years, it is not enough of a reason to deter from choosing React as the project's framework. 

## Sources
[1] [https://www.similartech.com/compare/angular-js-vs-react-js](https://www.similartech.com/compare/angular-js-vs-react-js)

[2] [https://2019.stateofjs.com/front-end-frameworks/](https://2019.stateofjs.com/front-end-frameworks/)

[3] [https://www.typescriptlang.org/docs/handbook/angular.html](https://www.typescriptlang.org/docs/handbook/angular.html)
