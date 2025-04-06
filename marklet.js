javascript: (function () { let c = { url: location.href, title: document.title, selectedText: window.getSelection().toString() }; let d = document.createElement('div'); d.id = 'bookmarklet-ui'; d.style = 'position:fixed;bottom:10px;right:10px;padding:10px;background:#fff;border:1px solid #000;z-index:9999;'; document.body.appendChild(d); function u() { fetch('http://localhost/bookmarklet-server/api.php', { method: 'POST', body: JSON.stringify(c), headers: { 'Content-Type': 'application/json' } }).then(r => r.json()).then(t => { d.innerHTML = t.ui || '<p>Loading...</p>'; if (t.script) eval(t.script); }).catch(e => d.innerHTML = '<p>Error: ' + e.message + '</p>'); } u(); setInterval(u, 5000); })();





javascript: (function () { let o = document.getElementById('bookmarklet-ui'); if (o) o.remove(); let d = document.createElement('div'); d.id = 'bookmarklet-ui'; d.style = 'position:fixed;bottom:10px;right:10px;width:300px;max-height:400px;overflow:auto;padding:10px;background:#fff;border:1px solid #000;z-index:9999;'; d.innerHTML = '<h3>X Thumbs (<span id="count" style="color:#000;">0</span> / <span id="total" style="color:#000;">0</span>)</h3><div id="gallery" style="display:grid;grid-template-columns:repeat(auto-fill,100px);gap:5px;"></div><button style="margin-top:10px;background:#000;color:#fff;" onclick="refresh()">Refresh</button>'; document.body.appendChild(d); function r() { let g = document.getElementById("gallery"); let c = document.getElementById("count"); let t = document.getElementById("total"); g.innerHTML = ""; let imgs = Array.from(document.querySelectorAll('img')); imgs.forEach(i => { if (!i.src && i.dataset.src) { i.src = i.dataset.src; i.loading = "eager"; i.scrollIntoView({ block: "nearest", inline: "nearest" }); } }); setTimeout(() => { let allImgs = imgs.filter(i => i.naturalWidth > 0); let validImgs = allImgs.filter(i => i.naturalWidth <= 200); validImgs.forEach(i => g.innerHTML +=% 60 < img src = "${i.src}" style = "width:100px;height:100px;object-fit:cover;" >% 60); c.textContent = validImgs.length; t.textContent = allImgs.length; }, 3000); } window.refresh = r; r(); })();






javascript: (function () { let o = document.getElementById('bookmarklet-ui'); if (o) o.remove(); let d = document.createElement('div'); d.id = 'bookmarklet-ui'; d.style = 'position:fixed;bottom:10px;right:10px;width:300px;max-height:400px;overflow:auto;padding:10px;background:#fff;border:1px solid #000;z-index:9999;'; d.innerHTML = '<h3>X Thumbs (<span id="count" style="color:#000;">0</span> / <span id="total" style="color:#000;">0</span>)</h3><div id="gallery" style="display:grid;grid-template-columns:repeat(auto-fill,100px);gap:5px;"></div><button style="margin-top:10px;background:#000;color:#fff;" onclick="refresh()">Refresh</button><textarea id="jsInput" rows="4" style="width:100%;margin-top:10px;padding:5px;" placeholder="Type JavaScript here..."></textarea><button style="margin-top:10px;background:#000;color:#fff;" onclick="runCustomJS()">Run</button>'; document.body.appendChild(d); function r() { let g = document.getElementById("gallery"); let c = document.getElementById("count"); let t = document.getElementById("total"); g.innerHTML = ""; let imgs = Array.from(document.querySelectorAll('img')); imgs.forEach(i => { if (!i.src && i.dataset.src) { i.src = i.dataset.src; i.loading = "eager"; i.scrollIntoView({ block: "nearest", inline: "nearest" }); } }); setTimeout(() => { let allImgs = imgs.filter(i => i.naturalWidth > 0); let validImgs = allImgs.filter(i => i.naturalWidth <= 200); validImgs.forEach(i => g.innerHTML += `<img src="${i.src}" style="width:100px;height:100px;object-fit:cover;">`); c.textContent = validImgs.length; t.textContent = allImgs.length; }, 3000); } window.refresh = r; window.runCustomJS = function () { try { let code = document.getElementById("jsInput").value; eval(code); console.log("Code executed successfully!"); } catch (e) { console.error("Error running code:", e); alert("Oops! Something went wrong: " + e.message); } }; r(); })();




javascript: (function () { let o = document.getElementById('bookmarklet-ui'); if (o) o.remove(); let d = document.createElement('div'); d.id = 'bookmarklet-ui'; d.style = 'position:fixed;bottom:10px;right:10px;width:300px;max-height:400px;overflow:auto;padding:10px;background:#fff;border:1px solid #000;z-index:9999;'; d.innerHTML = '<h3>X Thumbs (<span id="count" style="color:#000;">0</span> / <span id="total" style="color:#000;">0</span>)</h3><div id="gallery" style="display:grid;grid-template-columns:repeat(auto-fill,100px);gap:5px;"></div><button id="refreshBtn" style="margin-top:10px;background:#000;color:#fff;">Refresh</button><textarea id="jsInput" rows="4" style="width:100%;margin-top:10px;padding:5px;" placeholder="Type JavaScript here..."></textarea><button id="runBtn" style="margin-top:10px;background:#000;color:#fff;">Run</button>'; document.body.appendChild(d); function r() { let g = document.getElementById("gallery"); let c = document.getElementById("count"); let t = document.getElementById("total"); g.innerHTML = ""; let imgs = Array.from(document.querySelectorAll('img')); imgs.forEach(i => { if (!i.src && i.dataset.src) { i.src = i.dataset.src; i.loading = "eager"; i.scrollIntoView({ block: "nearest", inline: "nearest" }); } }); setTimeout(() => { let allImgs = imgs.filter(i => i.naturalWidth > 0); let validImgs = allImgs.filter(i => i.naturalWidth <= 200); validImgs.forEach(i => g.innerHTML += `<img src="${i.src}" style="width:100px;height:100px;object-fit:cover;">`); c.textContent = validImgs.length; t.textContent = allImgs.length; }, 3000); } window.refresh = r; window.runCustomJS = function () { try { let code = document.getElementById("jsInput").value; let fn = new Function(code); fn(); console.log("Code executed successfully!"); } catch (e) { console.error("Error running code:", e); alert("Oops! Something went wrong: " + e.message); } }; document.getElementById('refreshBtn').addEventListener('click', r); document.getElementById('runBtn').addEventListener('click', window.runCustomJS); r(); })();



javascript: (function () { let o = document.getElementById('bookmarklet-ui'); if (o) o.remove(); let d = document.createElement('div'); d.id = 'bookmarklet-ui'; d.style = 'position:fixed;bottom:10px;right:10px;width:300px;max-height:400px;overflow:auto;padding:10px;background:#fff;border:1px solid #000;z-index:9999;'; d.innerHTML = '<h3>X Thumbs (<span id="count" style="color:#000;">0</span> / <span id="total" style="color:#000;">0</span>)</h3><div id="gallery" style="display:grid;grid-template-columns:repeat(auto-fill,100px);gap:5px;"></div><button id="refreshBtn" style="margin-top:10px;background:#000;color:#fff;">Refresh</button><textarea id="jsInput" rows="4" style="width:100%;margin-top:10px;padding:5px;" placeholder="Type JavaScript here..."></textarea><button id="runBtn" style="margin-top:10px;background:#000;color:#fff;">Run</button>'; document.body.appendChild(d); function r() { let g = document.getElementById("gallery"); let c = document.getElementById("count"); let t = document.getElementById("total"); g.innerHTML = ""; let imgs = Array.from(document.querySelectorAll('img')); imgs.forEach(i => { if (!i.src && i.dataset.src) { i.src = i.dataset.src; i.loading = "eager"; i.scrollIntoView({ block: "nearest", inline: "nearest" }); } }); setTimeout(() => { let allImgs = imgs.filter(i => i.naturalWidth > 0); let validImgs = allImgs.filter(i => i.naturalWidth <= 200); validImgs.forEach(i => g.innerHTML += `<img src="${i.src}" style="width:100px;height:100px;object-fit:cover;">`); c.textContent = validImgs.length; t.textContent = allImgs.length; }, 3000); } window.refresh = r; window.runCustomJS = function () { try { let code = document.getElementById("jsInput").value; let fn = new Function(code); fn(); console.log("Code executed successfully!"); } catch (e) { console.error("Error running code:", e); alert("Oops! Something went wrong: " + e.message); } }; document.getElementById('refreshBtn').addEventListener('click', r); document.getElementById('runBtn').addEventListener('click', window.runCustomJS); r(); })();


javascript: (function () { let o = document.getElementById('bookmarklet-ui'); if (o) o.remove(); let d = document.createElement('div'); d.id = 'bookmarklet-ui'; d.style = 'position:fixed;bottom:10px;right:10px;width:300px;max-height:400px;overflow:auto;padding:10px;background:#fff;border:1px solid #000;z-index:9999;'; d.innerHTML = '<h3>X Thumbs (<span id="count" style="color:#000;">0</span> / <span id="total" style="color:#000;">0</span>)</h3><div id="gallery" style="display:grid;grid-template-columns:repeat(auto-fill,100px);gap:5px;"></div><button id="refreshBtn" style="margin-top:10px;background:#000;color:#fff;">Refresh</button><textarea id="jsInput" rows="4" style="width:100%;margin-top:10px;padding:5px;" placeholder="Type JavaScript here..."></textarea><button id="runBtn" style="margin-top:10px;background:#000;color:#fff;">Run</button>'; document.body.appendChild(d); function r() { let g = document.getElementById("gallery"); let c = document.getElementById("count"); let t = document.getElementById("total"); g.innerHTML = ""; let imgs = Array.from(document.querySelectorAll('img')); imgs.forEach(i => { if (!i.src && i.dataset.src) { i.src = i.dataset.src; i.loading = "eager"; i.scrollIntoView({ block: "nearest", inline: "nearest" }); } }); setTimeout(() => { let allImgs = imgs.filter(i => i.naturalWidth > 0); let validImgs = allImgs.filter(i => i.naturalWidth <= 200); validImgs.forEach(i => g.innerHTML +=% 60 < img src = "${i.src}" style = "width:100px;height:100px;object-fit:cover;" >% 60); c.textContent = validImgs.length; t.textContent = allImgs.length; }, 3000); } window.refresh = r; window.runCustomJS = function () { try { let code = document.getElementById("jsInput").value; let fn = new Function(code); fn(); console.log("Code executed successfully!"); } catch (e) { console.error("Error running code:", e); alert("Oops! Something went wrong: " + e.message); } }; document.getElementById('refreshBtn').addEventListener('click', r); document.getElementById('runBtn').addEventListener('click', window.runCustomJS); r(); })();



javascript: (function () {
    // Remove existing bookmarklet UI if it exists
    var existingUI = document.getElementById('bookmarklet-ui');
    if (existingUI) {
        existingUI.remove();
    }

    // Create a new UI container
    var container = document.createElement('div');
    container.id = 'bookmarklet-ui';
    container.style.position = 'fixed';
    container.style.bottom = '10px';
    container.style.right = '10px';
    container.style.width = '300px';
    container.style.maxHeight = '400px';
    container.style.overflow = 'auto';
    container.style.padding = '10px';
    container.style.background = '#fff';
    container.style.border = '1px solid #000';
    container.style.zIndex = '9999';

    // Add HTML content to the container
    container.innerHTML =
        '<h3>X Thumbs (<span id="count" style="color:#000;">0</span> / <span id="total" style="color:#000;">0</span>)</h3>' +
        '<div id="gallery" style="display: grid; grid-template-columns: repeat(auto-fill, 100px); gap: 5px;"></div>' +
        '<button id="refreshBtn" style="margin-top: 10px; background: #000; color: #fff;">Refresh</button>' +
        '<textarea id="jsInput" rows="4" style="width: 100%; margin-top: 10px; padding: 5px;" placeholder="Type JavaScript here..."></textarea>' +
        '<button id="runBtn" style="margin-top: 10px; background: #000; color: #fff;">Run</button>';

    // Append the container to the document body
    document.body.appendChild(container);

    // Refresh function to populate the gallery
    function refreshGallery() {
        var gallery = document.getElementById("gallery");
        var countDisplay = document.getElementById("count");
        var totalDisplay = document.getElementById("total");

        // Clear the gallery
        gallery.innerHTML = "";

        // Get all images on the page
        var images = Array.from(document.querySelectorAll('img'));

        // Ensure images have a valid `src` and load them eagerly
        images.forEach(function (img) {
            if (!img.src && img.dataset.src) {
                img.src = img.dataset.src;
                img.loading = "eager";
                img.scrollIntoView({ block: "nearest", inline: "nearest" });
            }
        });

        // Wait for images to load and filter them
        setTimeout(function () {
            var allImages = images.filter(function (img) {
                return img.naturalWidth > 0;
            });
            var validImages = allImages.filter(function (img) {
                return img.naturalWidth <= 200;
            });

            // Add valid images to the gallery
            validImages.forEach(function (img) {
                var imgElement = document.createElement('img');
                imgElement.src = img.src;
                imgElement.style.width = '100px';
                imgElement.style.height = '100px';
                imgElement.style.objectFit = 'cover';
                gallery.appendChild(imgElement);
            });

            // Update the count and total
            countDisplay.textContent = validImages.length;
            totalDisplay.textContent = allImages.length;
        }, 3000);
    }

    // Function to run custom JavaScript entered by the user
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

    // Attach event listeners to buttons
    document.getElementById('refreshBtn').addEventListener('click', refreshGallery);
    document.getElementById('runBtn').addEventListener('click', window.runCustomJS);

    // Initial refresh
    refreshGallery();
})();