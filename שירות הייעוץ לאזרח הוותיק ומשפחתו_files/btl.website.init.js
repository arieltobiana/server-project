function fixLayout() {

    if (location.href.toLowerCase().indexOf('archive') > 0 && $('.opener-txt').length > 0)
        $('.opener-txt').before("<b class='red'>לידיעתך, הגעת לארכיון של האתר, דף זה כבר לא תקף.</b>")


    if (localStorage.BtlMobile)
        FixMobilePdf();
}
function FixMobilePdf() {
    $("a[href*='.pdf']").each(function () {
        var elm = $(this);
        var loc = elm.attr('href');
        if (loc[0] == '/')
            loc = 'https://btlpdf.btl.gov.il' + loc;
        else
            loc = loc.replace('https://www.btl.gov.il', 'https://btlpdf.btl.gov.il')
        elm.attr('href', loc);
    });

    $("a[target]").removeAttr("target");

}

