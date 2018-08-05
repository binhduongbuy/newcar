angular.module('kiarash')
.controller('BmiController', function($scope) {
    
})
.directive('bmIndex', function (){
		return {
			link: function($scope) {
                    
                /*==========================================================================*/
                    
                        
                $('#contact_us').submit(function(event){
                    //event.preventDefault;
                    /*Form validation*/
                    weight =  $("input[name='name']").val();
                    height = $("input[name='tell']").val();
					
                    if( weight == "" || height == "")
                    {
                        text =  "یک یا چند فیلد خالی است" ;
                         $.fancybox.open( '<p class="alert">'+text+'</p>',{closeBtn  : false,});
                        return false;
                    }
                    height = (parseInt(height)/100);
					height = height*height;
                    weight =  parseInt(weight);
                    bmi = weight/height;
					$('#bmi').text('شاخص توده بدنی شما : '+(bmi.toFixed(2)));
					if(bmi<18.5)
					{
						$('#result').text('شما دچار لاغری شدید هستید');
					}
					else if(bmi >= 18.5 && bmi <= 24.9)
					{
						$('#result').text('وزن شما طبیعی است');
					}
					else if(bmi > 24.9 && bmi <= 29.9)
					{
						$('#result').text('شما اضافه وزن دارید');
					}
					else 
					{
						$('#result').text('شما دچار چاقی شدید هستید');
					}
					
                    return false;
                });// end bmi
    
               

                /*==========================================================================*/
                  
            },//end link
            
        }
});