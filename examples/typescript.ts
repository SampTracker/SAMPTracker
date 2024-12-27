import query from 'samptracker';

interface Player {
    id: number;
    name: string;
    score: number;
    ping: number;
}

interface Rules {
    lagcomp: boolean;
    weather: number;
}

interface ServerInfo {
    address: string;
    hostname: string;
    gamemode: string;
    mapname: string;
    passworded: boolean;
    maxplayers: number;
    online: number;
    rules: Rules;
    players: Player[];
}

interface QueryOptions {
    host: string;
    port?: number;
    timeout?: number;
}

const options: QueryOptions = {
    host: '127.0.0.1',
    port: 7777,
    timeout: 1000
};

query(options, (error: string | null, response: ServerInfo) => {
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
