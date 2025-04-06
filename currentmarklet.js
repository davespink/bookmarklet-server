var bookmarkletCode = "(function(){var html='<div id="myDiv" style="position:absolute;top:0;left:0;z-index:9999;background-color:#f1f1f1;text-align:center;border:1px solid #d3d3d3;width:400px;padding:30px;"><div id="mydivheader" style="padding:10px;cursor:move;z-index:10;background-color:#2196F3;color:#fff;user-select:none;">Click here to move</div><textarea id="jsInput" rows="20" style="width:100%;margin-top:10px;padding:5px;resize:both;" placeholder="Type JavaScript here..."></textarea><button id="runBtn" style="margin-top:10px;background:#000;color:#fff;">Run</button><button id="closeBtn" style="margin-top:10px;background:#000;color:#fff;">Close</button><button id="wsBtn" style="margin-top:10px;background:#000;color:#fff;">Test WebSocket</button><button id="fetchBtn" style="margin-top:10px;background:#000;color:#fff;">Test Fetch</button><button id="snapBtn" style="margin-top:10px;background:#000;color:#fff;">Take Snapshot</button><p id="debug">Debug goes here</p></div>';var container=document.createElement('div');document.body.appendChild(container);container.innerHTML=html;var panel=document.getElementById('myDiv');var header=document.getElementById('mydivheader');var input=document.getElementById('jsInput');function dragElement(el,header){var x1=0,x2=0,y1=0,y2=0;header.onmousedown=function(e){e.preventDefault();e.stopPropagation();y1=e.clientX;y2=e.clientY;document.onmousemove=function(e){e.preventDefault();x1=y1-e.clientX;x2=y2-e.clientY;y1=e.clientX;y2=e.clientY;el.style.top=(el.offsetTop-x2)+'px';el.style.left=(el.offsetLeft-x1)+'px';};document.onmouseup=function(){document.onmousemove=null;document.onmouseup=null;};};el.onmousedown=function(e){e.stopPropagation();};}dragElement(panel,header);setTimeout(function(){input.focus();},0);document.getElementById('runBtn').addEventListener('click',function(){try{var code=input.value;var fn=new Function(code);fn();document.getElementById('debug').textContent='Code executed successfully!';}catch(e){document.getElementById('debug').textContent='Error: '+e.message;}});document.getElementById('closeBtn').addEventListener('click',function(){panel.remove();});document.getElementById('wsBtn').addEventListener('click',function(){var ws=new WebSocket('wss://ws.postman-echo.com/raw');ws.addEventListener('open',function(){ws.send('Hello, WebSocket!');});ws.addEventListener('message',function(e){console.log('Message:',e.data);ws.close();});ws.addEventListener('close',function(){console.log('WebSocket closed');});ws.addEventListener('error',function(e){console.error('WebSocket error:',e);});});document.getElementById('fetchBtn').addEventListener('click',function(){fetch('https://jsonplaceholder.typicode.com/posts/1').then(res=>res.ok?res.json():Promise.reject('Network error: '+res.statusText)).then(data=>console.log('Fetched:',data)).catch(e=>console.error('Fetch Error:',e));});document.getElementById('snapBtn').addEventListener('click',function(){fetch('https://your-server.com/snapshot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url:window.location.href})}).then(res=>res.ok?res.blob():Promise.reject('Snapshot failed: '+res.statusText)).then(blob=>{var imgUrl=URL.createObjectURL(blob);window.open(imgUrl,'_blank');document.getElementById('debug').textContent='Snapshot taken!';}).catch(e=>document.getElementById('debug').textContent='Snapshot Error: '+e.message);});})()";