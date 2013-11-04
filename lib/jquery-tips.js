
(function($) {
  $.fn.tips = function(opts) {
    var settings = $.extend({
      speed: 150,
      position: 'bottom'
    }, opts);

    return this.each(function() {
      var $this = $(this);

      var tip = $this.attr('data-tip');

      $this.hover(function() {
        var $container = $("<div class='tips-container tips-container-" + settings.position + "'>");
        $container.append($("<div class='tips-caret-" + settings.position + "'>"));
        $container.append($("<div class='tips-content'>").append(tip));

        $this.removeAttr('title');

        $container.appendTo($('body'));

        var tipWidth = $container.outerWidth();
        var elWidth  = $this.width();

        var elX = $this.offset().left;

        var elBottom = $this.offset().top + $this.outerHeight();

        $container.css('left', elX - (tipWidth - elWidth) / 2)
                  .css('top', elBottom)
                  .fadeIn(settings.speed);
      }, function() {
        $(".tips-container").fadeOut(settings.speed).delay().remove();
      });
    });
  }
})(jQuery);