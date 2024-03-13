# Portfolio

This project is my personal portfolio developed with Vue.js and node.js.

## Description

The portfolio is designed to show information about me, my personal projects, courses done, links to social networks and a contact form.

## Technologies Used

- **Vue.js**: Framework for building the user interface.
- **Node.js and Express:** For the contact form backend.
- **HTML/CSS/SCSS:** For the structure and styling of the application.
- **Git:** For project version control.
- **GitHub:** Platform for storing and managing the project repository.
- **AWS:** Possibly to deploy the application in the cloud.

## Prerequisites

Before you start, make sure you have the following items installed:

- [Node.js](https://nodejs.org/): Required to run Vue.js applications.
- [Git](https://git-scm.com/): Used for version control and repository cloning.

## Project Setup

Follow these steps to configure and run the project locally:

### 1. Clone the Repository

````bash
git clone https://github.com/LuisArostegui/Portfolio.git
````

### 2. Intall dependencies

```bash
cd Portfolio
npm install
```

### 3. View the Project

Open your browser and visit: [http://localhost:8080/](http://localhost:8080/)

### 4. Others commands

#### Compiles and hot-reloads for development

```bash
npm run serve
```

#### Compiles and minifies for production

```bash
npm run build
```

#### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# More information

## SCSS Naming Convention

In this project, we follow a naming convention known as BEM (Block Element Modifier) for our SCSS (Sassy CSS) styles. BEM is a methodology that helps create reusable and maintainable CSS code by organizing class names in a structured manner.

### BEM Structure

-**Block (B)**: Represents the main component or module.
-**Element (E)**: Represents a part of the block that has no standalone meaning.
-**Modifier (M)**: Represents a variant or state of the block or element.

### Example

Let's take the following SCSS class as an example:

```scss
.header {
  &__container {
    // Styles for the container element inside the header block
  }

  &__image-container {
    // Styles for the image container element inside the header block
  }

  &__text-container {
    // Styles for the text container element inside the header block
  }

  // Other styles for the header block
}
```
