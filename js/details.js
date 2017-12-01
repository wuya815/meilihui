define(['jquery'], function() {
	return {
		//放大镜
		scale: (function() {
			//			$.ajax({
			//				url: 'php/hot.php',
			//				dataType: 'json',
			//			}).done(function(data) {
			//				//导入图片数据
			//			
			//				var $html3="<a></a></a></a><img src='"+data[46][4]+"'>"
			//				$("#left .left-shang").append($html2);
			////					$html+='</div>';
			////					$('#left').html($html)
			//			})
			$.ajax({
				url: "php/hot.php",
				dataType: 'json'
			}).done(function(data) {
				//				console.log(1);

				var $html3 = "<div class='zoom'></div><a class='zuo-page'></a><a class='you-page'></a><img class='zoompic' sid='" + data[55].sid + "' src='" + data[55].url + "'>"
				$("#left .left-shang").append($html3);

				$html4 = '<ul class="xlbt">';
				for(var i = 55; i < 60; i++) {
					$html4 += '<li>' +
						'<a>' +
						'<img src="' + data[i].url + '">' +
						'</a>' +
						'</li>';
				}
				$html4 += '</ul>';
				$('#left .xiao-lunbo').html($html4)

				/*$html6='<div class="xiangqing">';
						for(var i=55;i<60;i++){
							$html6+='<h3 class="title_en">'+
							data[i].title_en+
							'</h3>'+
							'<div class="title_cn>"'+
							data[i].title_cn+
							'</div>'+
							'<div class="price">'+
							data[i].price+
							'</div>'+
							'<div class="manjian">'+
							'满688全场免运'+
							'</div>'+
							'<div class="chima">'+
							'通用尺码'+
							'<br/>'+
							's--m--x--xx--xxx'+
							'</div>';
						}
				$html6+='</div>';*/

				$html6 = "<h3 class='title_en'>'" + data[55].title_en + "'</h3><div class='title_cn'>'" + data[55].title_cn + "'</div><div class='price'>" + data[55].price + "</div><div class='manjian'>满688全场免运</div><div class='chima'>通用尺码</br>s,m,x,xx,xxx</div>"
				$('#right .xiangqing').html($html6)

				/*$html6+="<div class='shuliang'>数量</div><div class='likemai'><button>-</button><span></span><button>+</button></div>"
					$('#right .xiangqing').html($html6)	*/

				$html6 += "<div class='shli'>数量</br></br><button>-</button><span class='shu'>1</span><button>+</button></div><a href='#' class='likemai'><span class='mai'>加入购物车</span></a>"
				$('#right .xiangqing').html($html6)

				$html5 = "<div class='bigscale'><img class='bigpic' src='" + data[55].url + "'></div>"
				$("#left").append($html5);

				$(".left-shang").on("mouseover", function() {
					$(".bigscale").show();
					$(".bigpic").show();
					$(".zoom").show();
				}).on("mouseout", function() {
					$(".bigscale").hide();
					$(".bigpic").hide();
					$(".zoom").hide();
				})

				var $bigbl = ($(".bigpic").width() / $(".zoompic").width())
				$("zoom").css({
					width: $(".zoompic").width() / $bigbl,
					height: $(".zoompic").height() / $bigbl,
				})

				$(".zoom").mousemove(function(e) {
					var $mleft = e.clientX - $(".zoompic").offset().left - ($(".zoom").width() / 2);
					var $mtop = e.clientY - $(".zoompic").offset().top - ($(".zoom").height() / 2 - $(window).scrollTop());
					if($mleft < 0) {
						$mleft = 0;
					} else if($mleft >= $(".zoompic").innerWidth() - ($(".zoom").width())) {
						$mleft = $(".zoompic").innerWidth() - ($(".zoom").width());
					}

					if($mtop <= 0) {
						$mtop = 0;
					} else if($mtop >= $(".zoompic").innerHeight() - ($(".zoom").width())) {
						$mtop = $(".zoompic").innerHeight() - ($(".zoom").width());
					}

					$(".zoom").css({
						left: $mleft + "px",
						top: $mtop + "px"
					})
					console.log($mleft, $bigbl)
					$(".bigscale .bigpic").css({
						left: -$mleft * $bigbl + "px",
						top: -$mtop * $bigbl + "px"
					})

				})

				/*function picgd(){
						if($picnum==-1){
							$(".left-xia .xiao-lunbo").animate({
								left:"0px",
							});
							$picnum=0;
							$(".left-xia .right-page").show();
							$(".left-xia .left").hide();
						}else if($picnum>=1){
							$(".xiao-lunbo .xlbt").animate({
								left:-($(".xiao-lunbo .xlbt").width()-$(".left-xia").width())+"px",
							},function() {
								if(parseInt($(".xiao-lunbo .xlbt").css("left"))*-1>=$(".xiao-lunbo .xlbt").width()-$(".zoom-start-otherpic").width()){
									// console.log(2);
									$(".xiao-lunbo .xlbt").animate({
										left:-($(".xiao-lunbo .xlbt").width()-$(".left-xia").width())+"px",
									})
									$(".left-xia .right-page").hide();
									$(".left-xia .left-page").show();
								}
							})

							$picnum=0;
						}

					}*/

				//完成点击图片列表,改变放大镜中的图片
				$(".xiao-lunbo li").on("click", function() {
					$(".xiao-lunbo li").css({
						border: "0",
					})
					$num = $(this).index();
					$(this).css({
						border: "1px solid #999",
					})
					var $src = $(this).find('img').attr("src");
					$(".zoompic").attr({
						src: $src,
					})
					$(".bigpic").attr({
						src: $src,
					})
				})

				var arrsid = [];
				var arrnum = [];

				function cookietoarray() {
					if(getCookie('cartsid')) {
						arrsid = getCookie('cartsid').split(',');
					} else {
						arrsid = [];
					}

					if(getCookie('cartnum')) {
						arrnum = getCookie('cartnum').split(',');
					} else {
						arrnum = [];
					}
				}

				var arrSid = [];
				var arrNum = [];
				//加入购物车

				$("#right .xiangqing .likemai").on("click", function() {

					if(getCookie("guest")) {
						alert(2)
						var asid = $("#right .xiangqing .left-shang .zoompic").attr("sid");
						console.log($("#right .xiangqing .left-shang .zoompic").attr("sid"))
						cookieToArray();
						if($.inArray(asid, arrSid) == -1) {
							arrSid.push(asid);
							addCookie("cartsid", arrSid.toString(), 7);
							arrNum.push(1);
							addCookie("cartnum", arrNum.toString(), 7);
						}
						/*else {
								var posi = $.inArray(asid, arrSid);
								var num3 = arrNum[posi];
								num3++;
								arrNum[posi] = num3;
								addCookie("shopnum", arrNum.toString(), 7);
							}*/
						//location.href = "cart.html"
					} else {
						$sid = $(".left-shang .zoompic").attr("sid");
						arrSid.push($sid);
						addCookie("cartsid", $sid, 7);
						addCookie("cartnum", 1, 7);
						location.href = "cart.html"
						//alert("请先登录!");
						//location.href = "login.html"
					}

				})

				function cookieToArray() {
					if(getCookie("shopsid")) {
						arrSid = getCookie("shopsid").split(",");
					} else {
						arrSid = [];
					}
					if(getCookie("shopnum")) {
						arrNum = getCookie("shopnum").split(",");
					} else {
						arrNum = [];
					}
				}

			});

		})()

		/*	var $html1="<img src="+data[0].url+">";
			var $html2="";
			var $num=0;
			for(var i=0;i<6;i++){
				$html2+="<li ssid='"+i+"'><img src="+data[i][4]+"></li>";
			}
			$("#zoom .zoom-start-smallpic").append($html1);
			$("#zoom .zoom-start-bigpic").append($html1);
			$("#zoom .zoom-start-otherpic .zoom-ul-box ul").append($html2);
			//给第一张图片添加图片框
			$(".zoom-start-otherpic .zoom-ul-box ul li").eq(0).css({
				border:"1px solid #999",
			})


			//改变ul整体宽度
			var $liwidth=$("#zoom .zoom-start-otherpic .zoom-ul-box ul li").outerWidth()+10;
			$("#zoom .zoom-start-otherpic .zoom-ul-box ul").css({
				width:$liwidth*$("#zoom .zoom-start-otherpic .zoom-ul-box ul li").length,
			})   */

		//放大镜的移入移出
		/*$(".zoom-start-smallpic").hover(function(){
			$(".small-scale").show();
			//计算比例 计算小放大镜的大小
			var $ratio=($(".zoom-start-bigpic img").width()/$(".zoom-start-smallpic img").width())
			$(".zoom-start-smallpic .small-scale").css({
				width:$(".zoom-start-bigpic").width()/$ratio,
				height:$(".zoom-start-bigpic").height()/$ratio,
			})
			$(this).mousemove(function(e){
				var $mleft=e.clientX-$(".zoom-blurb").offset().left-($(".small-scale").width()/2);
				//这里的高度需要减去网页scrollTop的高度
				var $mtop=e.clientY-$("#zoom").offset().top-($(".small-scale").height()/2-$(window).scrollTop());
				if($mleft<0){
					$mleft=0;
				}else if($mleft>=$(".zoom-start-smallpic").innerWidth()-($(".small-scale").width())){
					$mleft=$(".zoom-start-smallpic").innerWidth()-($(".small-scale").width());
				}
				if($mtop<=0){
					$mtop=0;
				}else if($mtop>=$(".zoom-start-smallpic").innerHeight()-($(".small-scale").width())){
					$mtop=$(".zoom-start-smallpic").innerHeight()-($(".small-scale").width());
				}
				$(".small-scale").css({
					left:$mleft+"px",
					top:$mtop+"px"
				})
				//移动大图
				$(".zoom-start-bigpic img").css({
					left:-$mleft*$ratio+"px",
					top:-$mtop*$ratio+"px"
				})
			})

			$(".zoom-start-bigpic").show();
		},function(){
			$(".small-scale").hide();
			$(".zoom-start-bigpic").hide();
		})

		var $otherulleft=$(".zoom-ul-box ul").css("left");
		if($otherulleft=="0px"){
			$(".zoom-start-otherpic #leftbtn").hide();
		}*/

		/*

				//放大镜下方的图片效果
				var $picnum=0;
				$(".zoom-start-otherpic #rightbtn").on("click",function(){
					$picnum++;
					picgd();
				})
				$(".zoom-start-otherpic #leftbtn").on("click",function(){
					$picnum--;
					picgd();
				})


			//放大镜下方图片列表效果
			//先判断后执行
			//先判断$picnum的值等于-1的时候(左边的按钮),让其left值等于0
			//在判断(右边按钮)的值
			//其中else if($picnum>=1)中的1可以改为其li的长度/一轮显示的图片个数()
				function picgd(){
						if($picnum==-1){
							$(".zoom-ul-box ul").animate({
								left:"0px",
							});
							$picnum=0;
							$(".zoom-start-otherpic #rightbtn").show();
							$(".zoom-start-otherpic #leftbtn").hide();
						}else if($picnum>=1){
							$(".zoom-ul-box ul").animate({
								left:-($(".zoom-ul-box ul").width()-$(".zoom-start-otherpic").width())+"px",
							},function() {
								if(parseInt($(".zoom-ul-box ul").css("left"))*-1>=$(".zoom-ul-box ul").width()-$(".zoom-start-otherpic").width()){
									// console.log(2);
									$(".zoom-ul-box ul").animate({
										left:-($(".zoom-ul-box ul").width()-$(".zoom-start-otherpic").width())+"px",
									})
									$(".zoom-start-otherpic #rightbtn").hide();
									$(".zoom-start-otherpic #leftbtn").show();
								}
							})

							$picnum=0;
						}

					}
				

				//完成点击图片列表,改变放大镜中的图片
				$(".zoom-ul-box ul li").on("click",function(){
					$(".zoom-ul-box ul li").css({
						border:"0",
					})
					$num=$(this).index();
					$(this).css({
						border:"1px solid #999",
					})
					var $src=$(this).find('img').attr("src");
					$(".zoom-start-smallpic img").attr({
						src:$src,
					})
					$(".zoom-start-bigpic img").attr({
						src:$src,
					})
				})
			})
		})(),*/

	}
})