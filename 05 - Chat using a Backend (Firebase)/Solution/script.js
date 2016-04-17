// See: https://www.firebase.com/docs/web/examples.html

var messagesRef = new Firebase('https://voll-coole-chatapp.firebaseio.com/');

// html elements
var messageField = $('#messageInput');
var nameField = $('#nameInput');
var messageList = $('#messages');


// when user hits enter
messageField.keypress(function (e) {
    
    if (e.keyCode == 13) { // enter
        
        var username = nameField.val();
        var message = messageField.val();

        // save data to firebase
        messagesRef.push({
            name: username,
            text: message
        });
        
        // empty message
        messageField.val('');
    }
});


// listen for new messages
messagesRef.limitToLast(20).on('child_added', function (snapshot) {

    // get data for message
    var data = snapshot.val();
    var username = data.name || 'anonymous';
    var message = data.text;

    // create html element for message
    var messageElement = $('<li>');
    var nameElement = $('<strong class="user"></strong>')
    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    // insert message in dom
    messageList.append(messageElement)

    // scroll to last message
    messageList[0].scrollTop = messageList[0].scrollHeight;
});
