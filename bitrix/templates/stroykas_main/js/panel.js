(function($) {
    $(document).ready(function() {
        var $panel = $('#panel_setup');
        if ($panel.length) {
            var $sticker = $panel.children('#panel-sticker');
            var showPanel = function() {
                $panel.animate({
                    left: '+=320',
                }, 200, function() {
                    $(this).addClass('visible');
                });
            };
            var hidePanel = function() {
                $panel.animate({
                    left: '-=320',
                }, 200, function() {
                    $(this).removeClass('visible');
                });
            };
            $sticker
                .children('span').click(function() {
                    if ($panel.hasClass('visible')) {
                        hidePanel();
                    }
                    else {
                        showPanel();
                    }
                }).andSelf()
                .children('.close').click(function() {
                    $panel.remove();
                });
        }
    });
})(jQuery);
