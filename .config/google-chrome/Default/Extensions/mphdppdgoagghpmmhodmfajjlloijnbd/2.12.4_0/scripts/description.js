chrome.runtime.onMessage.addListener(function(e,t,n){if("getDescription"==e.method){var o=window.getSelection().toString();if(!o||""==o){var r=document.getElementsByTagName("meta");for(i=0;i<r.length;i++)if("description"===r[i].getAttribute("name")){o=r[i].getAttribute("content");break}}n({data:o})}});
//# sourceMappingURL=description.js.map
