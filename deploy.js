let theHTML = `<div id="myDiv" style="position: absolute;  z-index: 9; background-color: #f1f1f1; text-align: center; border: 1px
solid #d3d3d3;width:400px;padding:30px">

<div id="mydivheader" style=" padding: 10px;
cursor: move;
z-index: 10;
background-color: #2196F3;
color: #fff;">Click here to move</div>


<textarea id="jsInput" rows="20" style="width: 100%; margin-top: 10px; padding: 5px;"
    placeholder="Type JavaScript here..."></textarea>

<button id="runBtn" style="margin-top: 10px; background: #000; color: #fff;">Run</button>
<button id="closeBtn" style="margin-top: 10px; background: #000; color: #fff;">Close</button>
<p id="debug">Debug goes here</p>

 </div>`;

var container = document.createElement('div');
document.body.appendChild(container);

container.innerHTML = theHTML;

theDiv = document.getElementById("myDiv");

dragElement(theDiv);


function doWebsoc() {



    const socket = new WebSocket('wss://ws.postman-echo.com/raw');


    socket.addEventListener('open', function () {
        console.log('WebSocket connection opened.');

        socket.send('Hello, WebSocket!');
    });


    socket.addEventListener('message', function (event) {
        console.log('Message from server:', event.data);

        socket.close();
    });

    socket.addEventListener('close', function () {
        console.log('WebSocket connection closed.');
    });


    socket.addEventListener('error', function (error) {
        console.error('WebSocket error:', error);
    });



}


doWebsoc();




function doEndPoint(){



    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched Data:', data);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });





}

doEndPoint();



function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {

        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {

        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {

        document.onmouseup = null;
        document.onmousemove = null;
    }
}



window.runCustomJS = function () {
    try {
        var code = document.getElementById("jsInput").value;
        var fn = new Function(code);
        fn();
        console.log("Code executed successfully!");
    } catch (e) {
        console.error("Error running code:", e);
        alert("Oops! Something went wrong: " + e.message);
    }
};

window.runClose = function () {
    alert(theDiv.style.top);
};

document.getElementById('runBtn').addEventListener('click', window.runCustomJS);
document.getElementById('closeBtn').addEventListener('click', window.runClose);

theDiv.top = "0px"; theDiv.left = "0px";


