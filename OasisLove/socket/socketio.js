import io from 'socket.io-client'

let socket = io.connect('http://192.168.137.1:8082');
module.exports = socket;