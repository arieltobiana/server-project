

function InitConceptsTooltips() {
    $('.tooltiped.concepts').each(function () {
        var elm = $(this);
        var id = elm.attr('id');
        var t = elm.find(".tooltip");
        var opt = {};
        if (elm.hasClass("interactive"))
            opt = {interactive: true };
        if (t.length) {
            var Tid = t.attr('id');
            dynToolTip('#' + id , '#' + Tid, opt);
        }
    });
}


$(document).ready(function () {
    InitConceptsTooltips();
});

function dynToolTip(input, tip, opts) {
    var $input = jQuery(input);
    var $tip = jQuery(tip);
    if ($input.length == 0)
        return;
    $input.data('opts', opts);
    jQuery(document).ready(function () {
        $tip.addClass("hiden");
        $input.on({
            focus: function () {
                  $tip.attr("aria-hidden", "false");
                $tip.removeClass("hiden");
            },
            blur: function () {
                $tip.attr("aria-hidden", "true");
                if (opts.interactive) {             
                    setTimeout(function () { 
                        if( $(tip + " a " ).is(":focus")) //if the link inside the tootip is focused, don't close the tip
                            return;
                        $tip.addClass("hiden");
                        }, 300)
                }
                else
                    $tip.addClass("hiden");
            }

        });
        if (opts.interactive) {
            $(tip + " a ").on({
                blur: function () {

                    $tip.addClass("hiden");
                }

            });
        }

        $input.keydown(function (ev) {
            if (ev.which == 27) {
                  $tip.attr("aria-hidden", "true");
                $tip.addClass("hiden");
                ev.preventDefault();
                return false;
            }
        });

    });

}
