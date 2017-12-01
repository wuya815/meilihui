$(function(){
	 $('.main .zhuce .user-input').blur(function(){
             	var re=/^1[3|4|5|7|8]\d{9}$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
				if(re.test($('.main .zhuce .user-input').val())==false){
				$('.main .zhuce .huming').css('display','block')
				}else{
					$('.main .zhuce .huming').css('display','none')
				}
             })
	 
	
    $('.main .zhuce .word-input').blur(function(){
             	var re1=/\w{6,20}/;
				if(re1.test($('.main .zhuce .word-input').val())==false){
				$('.main .zhuce .mi').css('display','block')

				}else{
					$('.main .zhuce .mi').css('display','none')
				}
				
             })
    
    $('.main .zhuce .phone-input').blur(function(){
             	var re1=/^1[3|4|5|7|8]\d{9}$/;
				if(re1.test($('.main .zhuce .phone-input').val())==false){
				$('.main .zhuce .rephone').css('display','block')
				}else{
					$('.main .zhuce .rephone').css('display','none')
				}
             })
	
    
    function RandColor(){
            	var a="#"+Math.floor(Math.random()*256).toString(16)+Math.floor(Math.random()*256).toString(16)+Math.floor(Math.random()*256).toString(16);
            	return a;
            } 
           
         $('.main .zhuce .Rand').css('color',RandColor())
           
          $('.main .zhuce .Randx').click(function(){
         var x = 100;
         var y = 1;
         var rand = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0))+parseInt(Math.random() * (x - y + 1) + y)+String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
         
         $('.main .zhuce .Rand').html(rand);
         function RandColor(){
            	var a="#"+Math.floor(Math.random()*256).toString(16)+Math.floor(Math.random()*256).toString(16)+Math.floor(Math.random()*256).toString(16);
            	return a;
            } 
           
         $('.main .zhuce .Rand').css('color',RandColor())
          })
           
            $('.main .zhuce .re4').blur(function(){
             	
				if( $('.main .zhuce .re4').val()!=$('.main .zhuce .Rand').html()){
				$('.main .zhuce .mess5').css('display','block')
				}else{
					$('.main .zhuce .mess5').css('display','none')
					//$('.main .zhuce .mess5').html('验证正确')
				}
             })     
            
           /*	$('#con .boxL .re2').blur(function(){
             	var re1=/[\da-zA-Z]{6}/;
				if(re1.test($('#con .boxL .re2').val())==false){
				$('#con .boxL .mess2').css('display','block')
				}else{
					$('#con .boxL .mess2').css('display','none')
				}
             })
           $('#con .boxL .re3').blur(function(){
             	
				if($('#con .boxL .re3').val()!=$('#con .boxL .re2').val()){
				$('#con .boxL .mess3').css('display','block')
				}else{
					$('#con .boxL .mess3').css('display','none')
				}
             })
           $('#con .boxL .re5').blur(function(){
             	var re2=/^1[345678]\d{9}$/;
				if(re2.test($('#con .boxL .re5').val())==false){
				$('#con .boxL .mess4').css('display','block')
				}else{
					$('#con .boxL .mess4').css('display','none')
				}
             }) */
	
	
	
	
})