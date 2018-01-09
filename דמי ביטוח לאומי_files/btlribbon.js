function showSPDialog(pageUrl) {
    var options = { url: pageUrl, width: 400, height: 300 };
    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}

function getUrl() {
    var url = '/_layouts/15/BTL.Internal/HtmlCleannerPage.aspx?p=' + document.location.href;
    return url;
}