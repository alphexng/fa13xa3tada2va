var headerbtn = $("#header button");
var sidenav = $("#sidenav");
headerbtn.click(function(){
    sidenav.fadeIn();
    headerbtn.css("display","none")
})
sidenav.find("button").click(function(){
    sidenav.fadeOut(200,function(){
        headerbtn.css("display","inline-block")
    });
})
