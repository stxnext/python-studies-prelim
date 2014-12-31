(function($) {

    function equalBox() {
        var $elements = $("html.desktop .equalBox > div");
        var height = 0;
        for( var i = 0; i < $elements.length; i+=3 ) {
            $elements.slice(i, i+3).each(function() {
                height = Math.max($(this).children(".box").height(), height);
            });
            $elements.slice(i, i+3).children(".box").height(height);
            height = 0;
        }
    }
    equalBox();

    // toggle
    function toggle_switch(){
    	$(".toggle_container:not(.active)").hide();
		$(".toggle").click(function(){
			$(this).toggleClass("active").next('.toggle_container').slideToggle("slow");
			return false;
		});
    }
    toggle_switch();

})(jQuery);