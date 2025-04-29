# 📦 Wallapop-Practice

## ✅ Prerequisites

This project depends on the [**sparrest.js**](https://github.com/kasappeal/sparrest.js) repository to simulate a REST API.

## ⚙️ Setup Instructions

1. Clone this repository (`Wallapop-Practice`) on your computer.

2. Clone also the [**sparrest.js**](https://github.com/kasappeal/sparrest.js) repository:

```bash
git clone https://github.com/kasappeal/sparrest.js
Inside the sparrest.js directory, install the dependencies:
```

```
cd sparrest.js
npm install
```
Start the server in sparrest.js with:

```
npm start
```

***Copy the db.json file included in this repository (Wallapop-Practice) to the sparrest.js directory, replacing the one just created in sparrest. The project should start on port 8000 at http://localhost:8000.***

Make sure that the db.json file has the following minimum structure:

```
{
  “users": [ ],
  “products": [ ]
}
```

To start the project wallapop you can do it using live server using:

```
  npx install live-server
``` 

Once this is done, the server will be ready and you will be able to use Wallapop-Practice. **http://localhost:8080**