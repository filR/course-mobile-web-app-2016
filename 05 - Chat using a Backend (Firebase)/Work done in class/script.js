
// create new firebase app
var app = new Firebase('https://voll-coole-chatapp.firebaseio.com');

// write data to server
app.push({
    name: 'Froggy',
    text: 'Where is my pong?!'
});

// get last 20 and listen to updates
app.limitToLast(20).on('child_added', function (data) {
   
//        <li>
//            <strong>Supraman:</strong>
//            Your breathe is minty.
//        </li>
    
    var name = data.val().name;
    var text = data.val().text;
    
    if (!name) {
        name = "Anonymous";
    }
    
    if (!text) {
        return;
    }
    
    var element = $('<li><strong>' + name +
                    '</strong>: ' + text + '</li>');
    
    $("#messages").append(element);
    
    
});
