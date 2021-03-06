var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var serveStatic = require('serve-static');

server.listen(3000);

app.use(serveStatic('public'));

io.on('connection', function (socket) {
  // socket.emit('news', { hello: 'world', h:34, s:23, l:12 });
  socket.on('my other event', function (data) { console.log(data); });

  setInterval(function() { 
    socket.emit('triggerPhrase', {
      x:getRandomInt(0, 1920), 
      y:getRandomInt(0, 1080), 
      quoteNumber:getRandomInt(0, 113), 
      h:getRandomInt(0, 360), 
      s:getRandomInt(0, 100), 
      l:getRandomInt(0, 100)}) 
  }, 5000);  
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

