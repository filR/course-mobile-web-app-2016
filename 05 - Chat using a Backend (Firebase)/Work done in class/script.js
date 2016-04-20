
// create new firebase app
var app = new Firebase('https://voll-coole-chatapp.firebaseio.com');

// write data to server
app.push({
    name: 'Trump',
    text: 'MAKING THE WEB COOL AGAIN'
});

// get last 20 and listen to updates
app.limitToLast(20).on('child_added', function (data) {
   data.val();
});
