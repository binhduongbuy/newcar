document.addEventListener("backbutton",amintest, false);

var win_height = $(window).height();
    console.log($('body').delegate('.main_100,.nav_main').height());
    ab = (win_height*80)/100;
    $('#style').append("<style>.main_100,.nav_main{height:"+win_height+"px !important;}.content{height:"+ab+"px !important}</style>");
    $(window).on("resize",function(){
        var win_height = $(window).height();
        $('#style').append("<style>.main_100,.nav_main{height:"+win_height+"px !important;}.content{height:"+ab+"px !important}</style>");
    });
$(window).on('hashchange',function(){ 
    
    var win_height = $(window).height();
    console.log($('body').delegate('.main_100,.nav_main').height());
    ab = (win_height*80)/100;
    $('#style').append("<style>.main_100,.nav_main{height:"+win_height+"px !important;}.content{height:"+ab+"px !important}</style>");
    $(window).on("resize",function(){
        var win_height = $(window).height();
        $('#style').append("<style>.main_100,.nav_main{height:"+win_height+"px !important;}.content{height:"+ab+"px !important}</style>");
    });
    
    /****************************************/
       
    /****************************************/
    });
function amintest(){
                        
    
    
    /*============================================================*/
    
    /*============================================================*/
    
    var loc =   window.location.hash;
    loc = loc.replace("#/", "");
	var res = loc.split("/");

    if($.fancybox.isOpen)
	{
		$.fancybox.close();
		return false;
	}
    if(loc == "home" || loc == "")
    {
                                           
       var r = confirm("آیا برای خروج اطمینان دارید ؟");
        if (r == true) {
        navigator.app.exitApp(); 
       }
    } 
	else if(loc == "gallery/2" || loc == "gallery/1" || loc == "gallery/3" || loc == "gallery/4")
	{
		window.location.hash = "#/gallery";
		
	}
	else if(res[0]=="blogdetail")
	{
         window.location.hash = "#/blog";
	}
    else
    {
	   								
         window.location.hash = "#/";
    }
    return false;
}



function onLoad()
 {
    document.addEventListener("deviceready", onDeviceReady, true);
   
 }
function onDeviceReady(){
	
	
    
}
				
function getDeviceProperty()
{
  
}
 function exitFromApp()
{
    var r = confirm("آیا برای خروج اطمینان دارید ؟");
    if (r == true) {
        navigator.app.exitApp(); 
    } else {
       
    }
 	 
}


