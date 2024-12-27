# SAMPTracker

**SAMPTracker** is a Node.js API that allows you to query **San Andreas Multiplayer (SA:MP)** servers for information about the server status, rules, and connected players. It uses the SA:MP UDP query protocol to retrieve real-time data from any accessible SA:MP server.

## Description

SAMPTracker provides an easy and efficient way to access information about SA:MP servers. Through this API, you can retrieve details like the server name, game mode, map, number of players online, and more.

This API is ideal for applications that need to monitor SA:MP servers, gather statistics, or display real-time server information.

## Features

- Retrieve basic server information (name, game mode, map).
- Query server rules (including lag, weather, etc.).
- Retrieve the list of players online.
- Support for servers with more than 100 players (without player details to improve performance).
- Customizable query parameters (port, timeout).

## Requirements

- Node.js (version 14 or higher)
- npm (Node.js package manager)

## Installation

### Clone the repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/v3laDev/SAMPTracker.git
cd SAMPTracker
```

## Install dependencies
Make sure you have Node.js installed. Then, install the project dependencies:
```
npm install
```

## Usage
Starting the server
To start the server, simply run the following command in your terminal:
```
node index.js
```
This will start the server at http://localhost:3000 by default. You can change the port in the index.js file if desired.

### API Endpoint

#### **GET `/query`**

Query information from a specific SA:MP server.

**Parameters:**
- `host` (required): The IP address or domain name of the SA:MP server.
- `port` (optional): The server's port (default is `7777`).
- `timeout` (optional): Timeout in milliseconds before the query expires (default is `1000`).

**Example request:**

```bash
curl "http://localhost:3000/query?host=127.0.0.1&port=7777"
```

## Response:
```
{
  "address": "127.0.0.1",
  "hostname": "My SA:MP Server",
  "gamemode": "Freeroam",
  "mapname": "Las Venturas",
  "passworded": false,
  "maxplayers": 100,
  "online": 50,
  "rules": {
    "lagcomp": true,
    "weather": 1
  },
  "players": [
    {
      "id": 1,
      "name": "Player1",
      "score": 1000,
      "ping": 50
    },
    {
      "id": 2,
      "name": "Player2",
      "score": 800,
      "ping": 40
    }
  ]
}
```

### Parameters Explanation

- **`host`**: The IP address or domain name of the SA:MP server you want to query (e.g., `127.0.0.1` or `example.com`).
- **`port`**: The port on which the SA:MP server is running. The default port is `7777` if not specified.
- **`timeout`**: The timeout value in milliseconds before the query expires. The default timeout is `1000` milliseconds (1 second).

### Response Fields

- **`address`**: The server's IP address.
- **`hostname`**: The name of the server.
- **`gamemode`**: The current game mode on the server.
- **`mapname`**: The current map name.
- **`passworded`**: Whether the server is password protected (`true` or `false`).
- **`maxplayers`**: The maximum number of players the server can accommodate.
- **`online`**: The current number of players online.
- **`rules`**: Server rules, such as:
  - **`lagcomp`**: Whether lag compensation is enabled (`true` or `false`).
  - **`weather`**: The current weather on the server, represented by a numeric value.
- **`players`**: A list of players currently online, with the following details:
  - **`id`**: The player's ID number.
  - **`name`**: The player's username.
  - **`score`**: The player's score.
  - **`ping`**: The player's ping in milliseconds.
