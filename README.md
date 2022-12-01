
![Logo](https://iab.it/wp-content/uploads/2022/02/instilla-1.png)





# Instilla Sales Taxes Project

A test project consisting of a Products Catalogue, a Cart and a Receipt generator.

[![JAVASCRIPT](https://img.shields.io/badge/-JAVASCRIPT-yellow)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/-CSS-blue)](https://developer.mozilla.org/es/docs/Web/CSS)
[![HTML](https://img.shields.io/badge/-HTML-orange)](https://developer.mozilla.org/es/docs/Web/HTML)


## Author

- [@gastipaz](https://www.github.com/gastipaz)


## Demo

https://instilla-project.herokuapp.com/


## How to run the project locally

Clone the project

```bash
  git clone --single-branch --branch main https://github.com/gastipaz/instilla.git
```

Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start API server

```bash
  npm start
```

Next

Return to main directory

```bash
  cd ..
```

Install dependencies

```bash
  npm install
```

Start client server

```bash
  npm start
```
Always start the API server before the client. Otherwise ajax api calls won't be successful.

----------

There's a second branch "deployment" that's optimized for a Production Environment.

If you would like to clone that branch to run it locally you can, but the process is different:


Clone the project

```bash
  git clone --single-branch --branch deployment https://github.com/gastipaz/instilla.git
```

Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start API server

```bash
  npm start
```

If you make any changes to the code and want to see them reflected locally:

Go to the main directory and install the dependencies with
```bash
  npm install
```
then build the project
```bash
  npm run build
```
copy the contents of the "build" folder
```bash
  /your_main_directory/build
```
and replace the content of the "public" folder that's inside the server directory
```bash
  /server/public
```
then cd into the server directory and run 
```bash
  npm start
```