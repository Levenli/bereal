$(function(){
	//名师评审	
	$('.msps-list li').hover(function () {
	    $(this).find('.msps-hover').removeClass('hidden');
	    $(this).find('img').css('transform','scale(1.2)');
	  },function () {
	    $(this).find('.msps-hover').addClass('hidden');
	    $(this).find('img').css('transform','scale(1)');
	  }
	);  
	 
	//十间坊实战赛-tab
	$('.room-tabbar li').on('mouseover',function(){
		var thisIndex=$(this).index();
		var $img=$('.room-img-box a');
		$img.eq(thisIndex).fadeIn().siblings().fadeOut();
		$('.tabbg').addClass('hidden');
	    $(this).find('.tabbg').removeClass('hidden');
	    $(this).addClass('tab-hover').siblings().removeClass('tab-hover');
	});
	
	//让你看见我-tab
	$('.see-tabbar li').on('mouseover',function(){
		var thisIndex=$(this).index();
		var $img=$('.see-img-box a');
		$img.eq(thisIndex).fadeIn().siblings().fadeOut();
		$('.tabbg02').addClass('hidden');
	    $(this).find('.tabbg02').removeClass('hidden');
	    $(this).addClass('tab-hover').siblings().removeClass('tab-hover');
	});
	 
})