(function () {





    const controlPanelHTML = `
      <div id="myDiv" style="position: absolute; top: 0; left: 0; z-index: 9999; background-color: #f1f1f1; text-align: center; border: 1px solid #d3d3d3; width: 400px; padding: 30px;">
        <div id="mydivheader" style="padding: 10px; cursor: move; z-index: 10; background-color: #2196F3; color: #fff;">Click here to move</div>
        <textarea id="jsInput" rows="20" style="width: 100%; margin-top: 10px; padding: 5px; resize: both;" placeholder="Type JavaScript here..."></textarea>
        <button id="runBtn" style="margin-top: 10px; background: #000; color: #fff;">Run</button>
        <button id="closeBtn" style="margin-top: 10px; background: #000; color: #fff;">Close</button>
        <button id="wsBtn" style="margin-top: 10px; background: #000; color: #fff;">Test WebSocket</button>
        <button id="fetchBtn" style="margin-top: 10px; background: #000; color: #fff;">Test Fetch</button>
        <p id="debug">Debug goes here</p>
      </div>
    `;
  
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = controlPanelHTML;
  
    const panel = document.getElementById('myDiv');
    const jsInput = document.getElementById('jsInput');
  
    dragElement(panel);
  
    jsInput.focus();
  
    function testWebSocket() {
      const socket = new WebSocket('wss://ws.postman-echo.com/raw');
  
      socket.addEventListener('open', () => {
        console.log('WebSocket connection opened.');
        socket.send('Hello, WebSocket!');
      });
  
      socket.addEventListener('message', (event) => {
        console.log('Message from server:', event.data);
        socket.close();
      });
  
      socket.addEventListener('close', () => {
        console.log('WebSocket connection closed.');
      });
  
      socket.addEventListener('error', (error) => {
        console.error('WebSocket error:', error);
      });
    }
  
    function fetchEndpoint() {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched Data:', data);
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
        });
    }
  
    function dragElement(element) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      const header = document.getElementById(`${element.id}header`) || element;
  
      header.onmousedown = dragMouseDown;
  
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = drag;
      }
  
      function drag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = `${element.offsetTop - pos2}px`;
        element.style.left = `${element.offsetLeft - pos1}px`;
      }
  
      function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  
    function runCustomJS() {
      try {
        const code = jsInput.value;
        const fn = new Function(code);
        fn();
        console.log('Code executed successfully!');
        document.getElementById('debug').textContent = 'Code executed successfully!';
      } catch (error) {
        console.error('Error running code:', error);
        document.getElementById('debug').textContent = `Error: ${error.message}`;
      }
    }
  
    function closePanel() {
      console.log(`Panel position - Top: ${panel.style.top}, Left: ${panel.style.left}`);
      panel.remove();
    }
  
    document.getElementById('runBtn').addEventListener('click', runCustomJS);
    document.getElementById('closeBtn').addEventListener('click', closePanel);
    document.getElementById('wsBtn').addEventListener('click', testWebSocket);
    document.getElementById('fetchBtn').addEventListener('click', fetchEndpoint);
 
 
  })();