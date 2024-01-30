# Polyteia-api-challenge

## Overview

The Polyteia API is a RESTful API that provides endpoints to manage fetch numeric and random data.


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Built With](#built-with)

## Features

- Fetch Numeric data stored from the database
- Fetch random numeric data
- Documentation

## Getting Started

### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm or yarn

### Installation

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:Jaman-dedy/mymo-api.git


2. **Navigate to the Project Directory:**

```bash
cd your-project

```

3. **Install Dependencies**

```bash
npm install

```
==>> Make sure the `.env` file before running docker
## Running the Server

2. **With docker**

```bash
- docker-compose up

or in background 

- docker-compose up -d

- npm run migration:run

- npm run seed:run  =>>> To pre-populate data in the db

```

2. **Locally**

```bash
- npm run start:dev

- npm run migration:run

- npm run seed:run  =>>> To pre-populate data in the db

```

## API Documentation

- [apiDoc](http://localhost:3000/api-docs)

## Built with

- [Nodejs](https://nodejs.org/en)
- [Nestjs](https://docs.nestjs.com/)
- [Swagger](https://docs.nestjs.com/openapi/introduction)