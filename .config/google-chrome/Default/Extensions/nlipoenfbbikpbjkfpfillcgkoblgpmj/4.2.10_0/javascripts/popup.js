var Bg=chrome.extension.getBackgroundPage(),mediaDevices=null;function sendMessageToTab(e,t,o){chrome.tabs.sendMessage(e,t,o)}function getCurrentTab(e,t){chrome.tabs.query(Object.assign({active:!0},e),function(e){t(e[0])})}"true"===localStorage["dark-mode"]&&$("body").addClass("dark-mode"),getAllAudioVideoDevices(function(e){mediaDevices=e});var recordingTimer=null;function updateTime(){$("#recording-view").find(".time").text(Bg.recordingTime)}chrome.cookies.getAll({url:"https://www.awesomescreenshot.com"},function(e){if(e){for(var t=0,o=e.length;t<o;t++)if("screenshot_personal_fullname"===e[t].name)var r=decodeURI(e[t].value);else if("screenshot_personal_type"===e[t].name)var c=e[t].value;r?($(".aws-info").find(".user-name").text(r).attr("title",r),$(".aws-info").show(),$(".aws-login").hide()):($(".aws-info").hide(),$(".aws-login").show()),"0"==c?$(".aws-user").removeClass("premium"):void 0===c?($(".aws-premium-icon").hide(),$(".aws-upgrade").hide()):$(".aws-user").addClass("premium")}}),$(document).ready(function(){chrome.windows.getCurrent(function(t){getCurrentTab({windowId:t.id},function(e){chrome.browserAction.getBadgeText({tabId:e.id},function(e){"New"==e&&(chrome.browserAction.setBadgeText({text:""}),chrome.tabs.create({url:"https://blog.awesomescreenshot.com/2019/07/30/whats-new-in-awesome-screenshot-4-2-1/"}),localStorage.newClickVersion=Bg.newClickVersion,t.close())})})}),$("#stop-entire-capture").on("click",function(){getCurrentTab({},function(e){sendMessageToTab(e.id,{action:"stop-entire-capture"})})});var r,c=!0;function o(e){$(".layout-view").hide(),$("#"+e).show()}function a(e){chrome.runtime.sendMessage(e)}$(".i18n").each(function(){var e=this.id;$(this).html(chrome.i18n.getMessage(e.replace(/-/,"")))}),$(".title").each(function(){var e=this.id;$(this).attr({title:chrome.i18n.getMessage(e.replace(/-/,"")+"_title")})}),function(){if(localStorage.msObj){var e=JSON.parse(localStorage.msObj),t=1==e.visible.enable?"Ctrl+Shift+"+e.visible.key:"Not set",o=1==e.selected.enable?"Ctrl+Shift+"+e.selected.key:"Not set",r=1==e.entire.enable?"Ctrl+Shift+"+e.entire.key:"Not set";$("#visible").find(".shortcut").remove().end().append("<span class='shortcut'>"+t+"</span>"),$("#selected").find(".shortcut").remove().end().append("<span class='shortcut'>"+o+"</span>"),$("#entire").find(".shortcut").remove().end().append("<span class='shortcut'>"+r+"</span>")}}(),!localStorage.capture_desktop||localStorage.capture_desktop,chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=e[0];(null==(r=t.url).match(/https?:\/\/*\/*/gi)||r.match(/https:\/\/chrome.google.com\/extensions/i)||r.match(/https:\/\/chrome.google.com\/webstore/i))&&$("#visible,#selected, #delay-capture, #entire").attr({title:"Not available in this page."}).addClass("disabled").unbind("click"),"complete"!=t.status&&($("#selected").attr({title:"Page still loading! Please wait."}).addClass("disabled"),c=!1),/http|https|file|ftp/.test(r.slice(0,5))||$("#visible").addClass("disabled").unbind("click")}),Bg.isRecording&&(o("recording-view"),Bg.isRecordingPaused&&$("#recording-view").find(".recording-action").addClass("paused"),recordingTimer=setInterval(updateTime,100)),chrome.runtime.onMessage.addListener(function(e,t,o){switch(e.action){case"enable_selected":if(r.match(/https:\/\/*\/*/gi))return void $("#selected").attr({title:"For security reason, Capture Selected Area doesn't work in https pages!"});c=!0,$("#selected").attr({title:""}).css({color:"#000"});break;case"shownew":case"closeWin":window.close();break;case"entireCaptureProgress":$("#entire-progress-percentage").text(e.percentage),$("#entire-progress").css("width",e.percentage),e.scrollNum&&9===e.scrollNum&&$("#stop-msg").show()}}),$("a").click(function(){var e=this.id;if("visible"==e&&(-1!=navigator.appVersion.indexOf("Chrome/11")&&/^file:\/\/*/.test(t)?alert("You can't capture local page's in Chrome beta!"):(a({action:e}),Bg.googleEvent("capture visible","capture")),window.close()),"delay-capture"!=e){if("entire"==e&&(a({action:e}),o("capturing-view"),Bg.googleEvent("capture entire","capture")),"selected"==e&&(a(c?{action:e}:{action:"https"}),Bg.googleEvent("capture selected","capture"),window.close()),"upload"==e){var t=chrome.runtime.getURL("")+"upload.html";chrome.tabs.create({url:t}),Bg.googleEvent("capture local","capture"),window.close()}if("record-video"==e&&(o("record-menu"),mediaDevices&&0===mediaDevices.audioInputDevices.length&&$(".record-option-microphone").addClass("no-device").find(".record-option-title").text("No microphone connected")),"my-videos"==e&&chrome.tabs.create({url:"/video-list.html"}),"option"==e){t=chrome.runtime.getURL("")+"option-react.html";chrome.tabs.create({url:t}),window.close()}if("help"==e){t=chrome.runtime.getURL("")+"feedback.html";chrome.tabs.create({url:t}),window.close()}"desktop"==e&&(Bg.beginDesktop(),Bg.googleEvent("capture desktop","capture"),window.close()),"collage"==e&&(chrome.tabs.create({url:chrome.runtime.getURL("")+"collage.html"}),window.close()),"donate"==e&&(chrome.tabs.create({url:chrome.runtime.getURL("")+"purchase.html"}),window.close()),"my-project"==e&&(chrome.tabs.create({url:"https://www.awesomescreenshot.com/getProjectList"}),window.close()),"my-account"==e&&(chrome.tabs.create({url:"https://www.awesomescreenshot.com/account"}),window.close()),"log-out"==e&&(chrome.tabs.create({url:"https://www.awesomescreenshot.com/user/loginOut"}),window.close()),"aws-login"==e&&(chrome.tabs.create({url:"https://www.awesomescreenshot.com/user/login"}),window.close()),"aws-info-upgrade"==e&&(Bg.googleEvent("upgrade from main menu","upgrade"),chrome.tabs.create({url:"https://www.awesomescreenshot.com/pricing?from=extMenu"}),window.close())}else-1!=navigator.appVersion.indexOf("Chrome/11")&&/^file:\/\/*/.test(t)?alert("You can't capture local page's in Chrome beta!"):(a({action:e}),Bg.googleEvent("capture delay","capture"),window.close())}),navigator.permissions.query({name:"microphone"}).then(function(e){"granted"===e.state&&(t=!0,"true"==localStorage.record_mic&&$("#record-mic").prop("checked",!0))}).catch(function(){}),$("#countdown-input").val(localStorage.record_countdown),$("#countdown-input").on("change",function(){localStorage.record_countdown=$(this).val()}),Bg.getPremium().then(function(e){e&&$(".record-tip").hide()}),$("input[name=record-type]").on("change",function(){localStorage.record_type=this.value,$(".record-type-item").find("label").removeClass("selected"),$("#record-type-"+this.value).parent().addClass("selected")}),$("#record-type-"+localStorage.record_type).trigger("click").trigger("change"),$("#record-mic").on("change",function(){$(this).prop("checked")?!0===t?localStorage.record_mic="true":chrome.tabs.create({url:"/getMic.html"}):localStorage.record_mic="false"}),$("#back-to-main").on("click",function(){o("main-menu")}),$("#record-stop").on("click",function(){Bg.stopStream()}),$("#record-pause").on("click",function(){$(this).parent().addClass("paused"),Bg.pauseScreenRecording()}),$("#record-resume").on("click",function(){$(this).parent().removeClass("paused"),Bg.resumeScreenRecording()}),$("#record-start").on("click",function(){var e=$("#record-mic").prop("checked"),t=$("input[name=record-type]:checked").val(),o=$("#countdown-input").val();a({action:"record",options:{isRecordMic:e,recordType:t,countdown:o}}),window.close()}),$("#upgrade-btn").on("click",function(){Bg.googleEvent("upgrade from recording menu","upgrade"),Bg.goToUpgrade()});var t=!1});