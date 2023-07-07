# Openclassrooms - Projet 13 - Argent Bank

Argent Bank is an application dedicated to banking sector

![JavaScript](https://img.shields.io/badge/Language-JavaScript-f7df1e)
![React](https://img.shields.io/badge/Framework-React-5ed3f3)
![Redux](https://img.shields.io/badge/State_Manager-Redux--Tool--Kit-764abc)
![styled-components](https://img.shields.io/badge/Styles-styled--component_-ff69b4)

### Features description :

```
- The user can visit the homepage.
- The user can log in to the system.
- The user can log out of the system.
- The user can only view information related to their own profile after successful login.
- The user can modify the profile and save the data in the database.
```

---

---

## Prerequisites

**NodeJS :** (version 12)

**MongoDB Community Server**

**npm :** (version 7.24.0) / **yarn :** (version 1.22.18)

---

---

## Backend _Installation - Run locally_

### 1 - Clone the repo onto your computer

`git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git`

### 2 - Open a terminal window in the cloned project and run the following commands

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

#### _Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database._

---

---

### API documentation

#### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

```
Tony Stark
- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

Steve Rogers
- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`
```

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Frontend _Installation - Run locally_

### 1 - Clone this repository in a new terminal and move to directory

`git clone https://github.com/TimotheGonin/timothe_gonin_13_042023.git`

### 2 - Open a terminal window in the cloned project and run the following commands

```bash
# Install dependencies
npm install / yarn

# Start local dev server
npm run start / yarn start
```

#### _Then navigate to [https://localhost:3001](https://localhost:3001)_

---

---
