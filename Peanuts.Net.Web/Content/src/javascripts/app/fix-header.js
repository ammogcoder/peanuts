(function($) {
    $.fn.fixHeader = function() {
        return this.each(function() {
            var $this = $(this),
                $t_fixed;
            function init() {
                $t_fixed = $this.clone();
                $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
                resizeFixed();
            }
            function resizeFixed() {
                $t_fixed.find("th").each(function(index) {
                    $(this).css("width",$this.find("th").eq(index).outerWidth()+"px");
                });
            }
            function scrollFixed() {
                var offset = $(this).scrollTop()+120,
                    tableOffsetTop = $this.offset().top,
                    tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
                if(offset <= tableOffsetTop || offset > tableOffsetBottom)
                    $t_fixed.hide();
                else if(offset > tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
                    $t_fixed.show();
            }
            $(window).resize(resizeFixed);
            $(window).scroll(scrollFixed);
            init();
        });
    };

    $(function () {
        $(".js-table-header-fix").fixHeader();
    });
})(jQuery);
