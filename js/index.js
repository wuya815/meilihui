/*define([],function(){

	return {
	lunbo:(function(){
		
		
		
		
	})(),
	
	
	
	}
});
*/
$(function() {
	$('.danav .xiaonav .daohang .yi').on('mouseover', function() {
		$('.xiala').stop().css({
			"display": "block",
			"left": "0px"
		});
		$('.yi').css('color', 'red')
	})
	$('.danav .xiaonav .daohang .er').on('mouseover', function() {
		$('.xiala').stop().css({
			"display": "block",
			"left": "80px"
		}).stop();
		$('.er').css('color', 'red')
	})
	$('.danav .xiaonav .daohang .san').on('mouseover', function() {
		$('.xiala').stop().css({
			"display": "block",
			"left": "160px"
		}).stop();
		$('.san').css('color', 'red')
	})
	$('.danav .xiaonav .daohang .si').on('mouseover', function() {
		$('.xiala').stop().css({
			"display": "block",
			"left": "245px"
		}).stop();
		$('.si').css('color', 'red')
	})
	$('.danav .xiaonav .daohang .wu').on('mouseover', function() {
		$('.xiala').stop().css({
			"display": "block",
			"left": "326px"
		}).stop();
		$('.wu').css('color', 'red')
	})
	$('.danav .xiaonav .daohang .liu').on('mouseover', function() {
		$('.xiala').stop().css({
			"display": "block",
			"left": "410px"
		}).stop();
		$('.liu').css('color', 'red')
	})
	$('.danav .xiaonav .daohang .qi').on('mouseover', function() {
		$('.qi').css('color', 'red')
	})

})

$('.danav .xiaonav .daohang li').on('mouseout', function() {
	$('.xiala').css('display', 'none');
	$('.danav .xiaonav .daohang a').css('color', 'white')
})

$(function() {
	$('.tab2').css('display', 'block');
	$('.tab1').css('display', 'none');
	$('button').click(function() { //给所有的按钮添加点击事件
		$(this).addClass('active').siblings('button').removeClass('active');
		$('.tabdiv .huodong').eq($(this).index('button')).css('display', 'block').siblings('.huodong').css('display', 'none');
	});
});

$(function() {
	$(window).scroll(function() {
		//获取scrolltop值
		var $scrolltop = $(window).scrollTop();
		if($scrolltop >= 120) {
			$('.danav').css({
				"width": "100%",
				"background": "#000",
				"position": "fixed",
				"top": "0px",
				"z-index": "9999"
			}); //fadeIn();
		} else if($scrolltop < 120) {
			$('.danav').css('position', 'relative');
		}
	})
})

$(function() {
	$(window).scroll(function() {
		//获取scrolltop值
		var $scrolltop = $(window).scrollTop();
		if($scrolltop >= 300) {
			$('#loutinav').fadeIn(500); //fadeIn();
		} else {
			$('#loutinav').fadeOut(500);
		}
		//4.触发滚轮，让对应的楼梯，添加类名，进行切换标注。
		$('#loutinav .louti').each(function() {
			var $top = $('.louti').eq($(this).index('#loutinav .louti')).offset().top + 300;
			if($top > $scrolltop) {
				$('#loutinav .louti').removeClass('active');
				$('#loutinav .louti').eq($(this).index('#loutinav .louti')).addClass('active');
				return false;
			}
		})

	});
	//2.点击楼梯，获取对应的楼层的top，将top赋值给(html,body)下面scrolltop
	//on(events,[selector],[data],fn)
	$('#loutinav .louti').not('.last').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		var $index = $(this).index(); //当前的索引
		var $top = $('.louti').eq($index).offset().top; //当前楼梯对应的楼层的top值
		$('html,body').animate({ //赋值 
			//document.documentElement.scrollTop || document.body.scrollTop
			scrollTop: $top
		}, 200);
	});
	//3.回到顶部
	$('.last').on('click', function() {
		$('html,body').animate({ //赋值 
			//document.documentElement.scrollTop || document.body.scrollTop
			scrollTop: 0
		});
	});
})

$(function() {
	var $index = 0; //当前索引
	var $qindex = 0; //前一个索引
	var $btn = $('.btn span');
	var $img = $('.scroll img');

	$btn.on('click', function(ev) {
		$index = $(this).index();
		imgscroll(ev);
		$qindex = $index;
	});

	$('.banner').hover(function() {
		$('.prev').show();
		$('.next').show();
	}, function() {
		$('.prev').hide();
		$('.next').hide();
	})

	$('.next').on('click', function(ev) {
		$index++;
		if($index > 5) {
			$index = 0;
			$qindex = 5;
		}
		imgscroll(ev);
		$qindex = $index;
	});

	$('.prev').on('click', function(ev) {
		$index--;
		if($index < 0) {
			$index = 5;
			$qindex = 0;
		}
		imgscroll(ev);
		$qindex = $index;
	});

	function imgscroll(ev) {
		$btn.eq($index).addClass('hover').siblings('span').removeClass('hover');
		if($index == 0 && $qindex == 5) {
			if(ev.target.nodeName == 'A') {
				$img.eq($qindex).animate({
					left: -1880
				});
				$img.eq($index).css('left', '820px').animate({
					left: 0
				})
			} else if(ev.target.nodeName == 'SPAN') {
				$img.eq($qindex).animate({
					left: 1880
				});
				$img.eq($index).css('left', '-1880px').animate({
					left: 0
				})
			}

		} else if($index == 5 && $qindex == 0) {
			if(ev.target.nodeName == 'A') {
				$img.eq($qindex).animate({
					left: 1880
				});
				$img.eq($index).css('left', '-1880px').animate({
					left: 0
				})
			} else if(ev.target.nodeName == 'SPAN') {
				$img.eq($qindex).animate({
					left: -1880
				});
				$img.eq($index).css('left', '1880px').animate({
					left: 0
				})
			}

		} else if($index > $qindex) {
			$img.eq($qindex).animate({
				left: -1880
			});
			$img.eq($index).css('left', '820px').animate({
				left: 0
			})
		} else if($index < $qindex) {
			$img.eq($qindex).animate({
				left: 1880
			});
			$img.eq($index).css('left', '-820px').animate({
				left: 0
			})
		}
	}

})