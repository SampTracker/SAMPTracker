const query = require('samptracker');

const options = {
    host: '127.0.0.1',
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
