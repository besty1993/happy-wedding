(function(d,q){d.VPLShareManager=function(m){function n(a){(function(b,c,a){var d=b.getElementsByTagName(c)[0];b.getElementById(a)||(b=b.createElement(c),b.id=a,b.src="https://connect.facebook.net/en_US/sdk.js",d.parentNode.insertBefore(b,d))})(document,"script","facebook-jssdk");d.fbAsyncInit=function(){FB.init({appId:a,xfbml:!0,version:"v3.2"})}}var h=m.facebookAppId,p=VPLUtils.isMobile();VPLUtils.isEmpty(h)||"file:"==d.location.protocol||n(h);this.share=function(a,b,c){var f="https:"==d.location.protocol?
"https:":"http:",h=(d.screen.width-600)/2,n=(d.screen.height-300)/2,g=b.title||"",k=b.description||"",l=b.thumb||b.thumbDefault;c=b.share?b.share:d.location.href+c;VPLUtils.relativePath(l)||(l=VPLUtils.qualifyURL(b.thumb));if("facebook"==a){if(VPLUtils.isEmpty(m.facebookAppId)&&alert("Set Facebook api key in settings!"),d.FB){FB.ui({method:"share_open_graph",action_type:"og.shares",action_properties:JSON.stringify({object:{"og:url":c,"og:title":g,"og:description":k,"og:image":l}})},function(a){});
return}}else if("twitter"==a)var e=f+"//twitter.com/intent/tweet?url="+encodeURIComponent(c)+"&text="+encodeURIComponent(g);else if("googleplus"==a)e=f+"//plus.google.com/share?url="+encodeURIComponent(c);else if("tumblr"==a)e=f+"//www.tumblr.com/share/link?url="+encodeURIComponent(c)+"&amp;name="+encodeURIComponent(g)+"&amp;description="+encodeURIComponent(k);else if("reddit"==a)e=f+"//www.reddit.com/submit?url="+encodeURIComponent(c);else if("linkedin"==a)e=f+"//www.linkedin.com/shareArticle?mini=true&url="+
encodeURIComponent(c)+"&title="+encodeURIComponent(g)+"&summary="+encodeURIComponent(k)+"&source="+document.title;else if("digg"==a)e=f+"//digg.com/submit?url="+encodeURIComponent(c)+"&title="+encodeURIComponent(g);else if("pinterest"==a)e=f+"//www.pinterest.com/pin/create/button/?url="+encodeURIComponent(c)+"&media="+encodeURIComponent(l)+"&description="+encodeURIComponent(k);else if("whatsapp"==a){if(p){a=encodeURIComponent(g)+" - "+encodeURIComponent(c);d.location.href="whatsapp://send?text="+
a;return}alert(m.whatsAppWarning)}e&&d.open(e,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=300,left="+h+",top="+n)}}})(window,jQuery);