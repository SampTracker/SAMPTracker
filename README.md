# SAMPTracker

## **A Node.js package for retrieving detailed information from SA-MP servers.**

## Installation
```bash
npm install samptracker
```

## Options
- host: The IP address or hostname of the SA-MP server.
- port: The port number of the SA-MP server (default: 7777).
- timeout: The timeout in milliseconds (default: 1000).

# Example Zone
## Code
```javascript
const query = require('samptracker');

const options = {
    host: 'play.orynix-rp.com',
    port: 7777,
    timeout: 1000
};

query(options, (error, response) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Server Information:', response);
        console.log('Players Online:', response.online);
        if (response.players && response.players.length > 0) {
            console.log('Players:', response.players);
        }
    }
});

````

## Response
```javascript
Server Information: {
  address: 'play.orynix-rp.com',
  port: 7777,
  hostname: 'Orynix RolePlay #1 | Chat de Voz | ROL',
  gamemode: 'Roleplay en espaρol',
  mapname: 'Espaρol v1.0, P#1',
  passworded: false,
  maxplayers: 150,
  online: 0,
  rules: {
    lagcomp: true,
    mapname: 'San Andreas',
    version: '0.3.7-R2',
    weather: 14,
    weburl: 'orynix-rp.com/web/',
    worldtime: '12:00'
  },
  players: []
}
Players Online: 0
```

## Data Returned
```
address: The IP address of the server.
port: The port of the server.
hostname: The hostname of the server.
gamemode: The current gamemode.
mapname: The current map.
passworded: Indicates if the server is password protected.
maxplayers: The maximum number of players.
online: The number of players currently connected.
rules: An object containing server rules.
players: An array of player objects (if online is less than 100).
```

