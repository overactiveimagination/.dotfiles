var youtube_prefix="ba9b_",google_prefix="c822_";function getList(t){return new Promise(function(e,i){$.ajax({type:"GET",url:"https://preview.diigo.com/api/v3/awe/upload/?user_id="+t,dataType:"json",success:function(t){e(t)},error:function(t,e){i([t,e])}})})}function initList(){DB.init().then(DB.getAll.bind(DB)).then(function(t){buildList(t)}),$("#delete-all").on("click",function(t){t.preventDefault(),confirm("Are you sure to delete all the recordings?")&&DB.deleteAll().then(updateList)})}function updateList(){DB.getAll().then(buildList)}function buildList(t){var n=$("#video-container");if(n.empty(),t.length){var r=$("#video-item-template").html();t.forEach(function(t){var e=t.detail,i=$(r);i.find("a").attr("href",chrome.runtime.getURL("/video.html?id="+t.id)),i.find(".thumbnail-img").attr("src",e.thumbnailUrl),i.find(".title").text(e.title).attr("title",e.title),i.find(".duration").text(e.duration),i.find(".size").text(e.size),i.attr("data-id",t.id),i.find(".delete-icon").on("click",function(){confirm("Are you sure to delete this recording?")&&DB.delete(t.id).then(updateList)}),e.youtubeUrl&&i.addClass("shared_youtube"),e.gDriveUrl&&i.addClass("shared_gDrive"),i.appendTo(n)})}}initList();