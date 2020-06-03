 //别忘了引入jq库
 var OriginTitle = document.title;
console.log(OriginTitle)
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/funny.ico");
         document.title = 'qwq人捏';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/favicon.ico");
         document.title = '尔入我梦来' ;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 3000);
     }
 });
