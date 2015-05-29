(function($){
	$.scrollTo=function(to, duration, func){
		if(!to) to=0;
		else if(to==='end') to=$(document).height();
		else if(isNaN(to) && (to=$(to).offset()) ) to=to.top;
		$('html, body').animate({ scrollTop: to }, duration,func);
	}
	$.fn.scrollTo = function(duration, func){
		$.scrollTo(this,duration, func);
		return this;
	};
})(jQuery);
