angular.module('kiarash')
.controller('ContactController', function($scope) {
    
})
.directive('contactAs', function (){
		return {
			link: function($scope) {
                    
                /*==========================================================================*/
                    
                        
                $('#contact_us').submit(function(event){
                    //event.preventDefault;
                    /*Form validation*/
                    name =  $("input[name='name']").val();
                    tell = $("input[name='tell']").val();
                    email = $("input[name='email']").val();
                    text =  $("textarea[name='text']").val();
      
                    if( name== "" || tell == "" || email == "" || text == "")
                    {
                        text =  "یک یا چند فیلد خالی است" ;
                         $.fancybox.open( '<p class="alert">'+text+'</p>',{closeBtn  : false,});
                        return false;
                    }

                    if(name.length < 3)
                    {
                        text =  "نام باید بیشتر از 3 کارکتر باشد";
                        $.fancybox.open( '<p class="alert">'+text+'</p>',{closeBtn  : false,});
                        return false;
                    }
        
                    atpos = email.indexOf("@");
                    dotpos = email.lastIndexOf(".");
                    if (atpos < 1 || ( dotpos - atpos < 2 )) 
                    {
                        text =   "فرمت ایمیل وارد شده صحیح نیست" ;
                          $.fancybox.open( '<p class="alert">'+text+'</p>',{closeBtn  : false,});
                        return false;
                    }
                    if(text.length < 10 )
                    {
                        text =   "متن پیام کوتاه است" ;
                         $.fancybox.open( '<p class="alert">'+text+'</p>',{closeBtn  : false,});
                       
                        return false;
                    }
        
        
                    /*end Form validation*/
                    var form = $('form') ; 
                    var  url = $('form').attr("action");
                    var  form_data = form.serialize();
                    $.ajax({
                        url: url ,
                        type: 'GET',
                        data: form_data ,
                        success: function (response) {
                            if(response=="send"){
                                text = "پیام شما با موفقیت ارسال شد پس از بررسی دکتر قاسمی جواب پیام به ایمیل شما ارسال خواهد شد ";
                                $.fancybox.open( '<p class="alert">'+text+'</p>',{closeBtn  : false,});

                               form.trigger('reset');
                            }//end if
                        },
                        error: function () {
                                text =  "مشکل در ارسال اطلاعات لطفا مجدد تلاش کنید";
                                    $.fancybox.open( '<p class="alert">'+text+'</p>',{closeBtn  : false,});
                         
                        }
                    }); 
                    return false;
                });// end contact_us
    
                $('body').bind("click",function(){
                    $.mobile.loading('hide');
                });

                /*==========================================================================*/
                  
            },//end link
            
        }
});