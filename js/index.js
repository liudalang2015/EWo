
//��ʾ����
function check(obj){
	//��ȡ����
	$(obj).focus(function(){		
		var txt_value=$(this).val();//��ȡ��ַ�ı����ֵ			
		if(txt_value==this.defaultValue){//"this.defaultValue"���ǵ�ǰ�ı����Ĭ��ֵ	defaultValue����jQuery�������
			$(this).val('');
		}			
	});
	
	//ʧȥ����
	$(obj).blur(function(){	//�൱��Javascript�е�onblur()����
		var txt_value=$(this).val();
		if(txt_value==''){
			$(this).val(this.defaultValue);
		}			
	});		
}

$(function(){
	
	function swip(css){
		var tabsSwiper = new Swiper(css+' .swiper-container',{
			speed:500,
			onSlideChangeStart: function(){
				$(css+" .tabs div .active").removeClass('active');
				$(css+" .tabs div a").eq(tabsSwiper.activeIndex).addClass('active');
			}
		});
		
		$(css+" .tabs div a").on('touchstart mousedown',function(e){
			e.preventDefault()
			$(css+" .tabs .active").removeClass('active');
			$(this).addClass('active');
			tabsSwiper.swipeTo($(this).index());
		});
		
		$(css+" .tabs div a").click(function(e){
			e.preventDefault();
		});
	}
	
	eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2 0=3.4(\'5\');6(0){1(\'.7\');1(\'.8\')}',9,9,'oFt|swip|var|document|getElementById|ft|if|tabSwitch|tabSwitchB'.split('|'),0,{}));
	
	(function(){
		check($('.sinput'));
			  
	})();
	
	
	$("#top h2").addClass('animated bounceInDown');
	$("#footerNav span").addClass('animated bounceInUp');
	$("#footerNav em").addClass('animated bounceInDown');
	
});

