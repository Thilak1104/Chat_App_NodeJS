var socket = io();

let button = document.getElementById('button');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');


button.onclick = function exec() {
    socket.emit('msg_send', {
        msg: inputMsg.value
    });
}


socket.on('msg_rcvd', (data) => {
    let limsg = document.createElement('li');
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
})
