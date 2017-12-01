define([], function() {
	return {
		hot: (function() {
			$.ajax({
				url: 'php/hot.php',
				dataType: 'json'
			}).done(function(done) {
				var $html = '';
				$html = '<ul class="remai">';
				for(var i = 0; i < 9; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#rmpp').html($html)

				$html = '<ul class="sige">';
				for(var i = 66; i < 70; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#xinsi').html($html)

				$html = '<ul class="swg">';
				for(var i = 53; i < 66; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#shiwuge').html($html)

				$html = '<ul class="nssige">';
				for(var i = 44; i < 48; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#nssige').html($html)

				$html = '<ul class="nsliuge">';
				for(var i = 37; i < 43; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#nsliuge').html($html)

				$html = '<ul class="nansige">';
				for(var i = 5; i < 11; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#nansige').html($html)

				$html = '<ul class="nansange">';
				for(var i = 21; i < 24; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#nansange').html($html)

				$html = '<ul class="mzsige">';
				for(var i = 37; i < 41; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#mzsige').html($html)

				$html = '<ul class="mzsange">';
				for(var i = 44; i < 47; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#mzsange').html($html)

				$html = '<ul class="lifesige">';
				for(var i = 5; i < 9; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#lifesige').html($html)

				$html = '<ul class="kidsige">';
				for(var i = 5; i < 9; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#kidsige').html($html)

				$html = '<ul class="seasige">';
				for(var i = 5; i < 9; i++) {
					$html += '<li>' +
						'<div>' +
						'<a href="../meilihui/details.html">' +
						'<img src="' + done[i][4] + '">' +
						'</a>' +
						'</div>' +
						'<div>' +
						'<span>' + done[i][2] + '</span>' +
						'<p>' + done[i][3] + '</p>' +
						'</div>' +
						'</li>';
				}
				$html += '</ul>';
				$('#seasige').html($html)

				/*window.onscroll=function(){//懒加载
						var ch=document.documentElement.clientHeight;//可视区的高
						var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;//滚动条件
						var minheight=aLi[getMinLi(aLi)].offsetHeight;//最小高度的li
						if(minheight<ch+scrolltop){
							createImg();
						}
					}*/

				//4.触发滚轮，让对应的楼梯，添加类名，进行切换标注。
				/*$('#loutinav li').each(function(){
					var $top=$('.louti').eq($(this).index()).offset().top+400;
					if($top>$scrolltop){
						$('#loutinav li').removeClass('active');
						$('#loutinav li').eq($(this).index()).addClass('active');
						return false;
					}
				})*/

			})
		})()
	}

})