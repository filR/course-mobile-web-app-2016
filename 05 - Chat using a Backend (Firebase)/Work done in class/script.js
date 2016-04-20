
var app = new Firebase('https://voll-coole-chatapp.firebaseio.com');


app.push({
    name: 'Trump',
    text: 'MAKING THE WEB COOL AGAIN'
});


app.limitToLast(20).on('child_added', function (data) {
   console.log(data.val());    
});
