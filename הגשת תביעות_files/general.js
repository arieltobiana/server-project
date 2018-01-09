function OpenOrderForm(page, web) {
    if (page == undefined || page == '' || web == undefined || web == '') {
        //post=current_posting;
        return;
    }
    parameters = '?pageGuid=' + page + '&webGuid=' + web;
    //OpenModalWindow(https_enabled,true,site_prefix,'/SystemFiles/FormOrder.aspx',post,my_lang,'450','400',null)
    OpenModalWindow(false, true, 'SystemFiles/Forms/FormOrder.aspx', parameters, '500', '600', null)
}

function OpenForm(form, lang, type) {
    if (form == undefined || form == '') {
        //post=current_posting;
        return;
    }
    parameters = '?lang=' + lang + '&rtype=' + type;
    //OpenModalWindow(https_enabled,true,site_prefix,'/SystemFiles/FormOrder.aspx',post,my_lang,'450','400',null)
    page_name = 'SystemFiles/Forms/' + form
    height = "950"
    width = "500"
    if (type == '2') //general questions
        height = "510"
    if (type == '1' || type == '4') //pniot questions
        height = "650"
    if (lang == 'ru-RU') //russian
    {
        height = "650"
        width = "590"
    }
    OpenModalWindow(false, true, page_name, parameters, width, height, null)
}

function OpenPublicationOrder(page, web) {
    if (page == undefined || page == '' || web == undefined || web == '') {
        //post=current_posting;
        return;
    }

    parameters = '?pageGuid=' + page + '&webGuid=' + web;
    OpenModalWindow(false, true, 'SystemFiles/Forms/PublicationOrder.aspx', parameters, '500', '520', null)
}

function OpenModalWindow(https_enabled, is_https, page_name, parameters, width, height, arg_array) {
    var prefix = "";

    //if (location.hostname.toLowerCase() == "www.btl.gov.il" || location.hostname.toLowerCase() == "www2.btl.gov.il") {
    //    prefix = "https://" + location.hostname;
    //}


    //(is_https==true && https_enabled==true ?'https://':'http://') + site_prefix ;

    var dialog_path = prefix; //+'/SystemFiles/Dialog_Matefet.aspx'; CHANGE ON UPGRADE
    //    if(is_https==true && https_enabled==true)
    //        dialog_path =prefix+ '/Dialog_ssl.aspx';

    var path = prefix + '/' + page_name + parameters;
    //    if(current_posting !='' && current_posting !=undefined)
    //         path =path +'&current_posting='+current_posting
    //    if(my_lang !='')
    //	     path =path+'&lang='+my_lang 

    //if (document.all)    //IE

    //     var retVal = window.showModalDialog(dialog_path + '?path=' + path, arg_array, 'dialogHeight:' + height + 'px; dialogWidth:' + width + 'px;  edge: Raised; center: yes; help: No; resizable: yes; scroll: No; status: No;location:no')

    //   else             //firefox - always

    window.open(path, arg_array, 'height=' + height + 'px,width=' + width + 'px,directories=no,location=no,menubar=no,status=no,toolbar=no ,center=yes')

}

function CloseWindow() {
    window.close();
}
function replaceQueryString(keyParam, valueParam, OrginalUrl) {
    //debugger;

    var ReturnValue = '?';
    var query = '';

    var OrginalUrlAray = OrginalUrl.split('?');

    if (OrginalUrlAray.length == 2) {
        query = OrginalUrlAray[1];
    }

    ReturnValue = OrginalUrlAray[0] + '?';

    var parms = query.split('&');
    var HasUpdate = false;

    for (var i = 0; i < parms.length; i++) {

        var param = parms[i].split('=');

        if (param.length == 2) {
            if (param[0].toLowerCase() == keyParam.toLowerCase()) {
                param[1] = valueParam;
                HasUpdate = true;
            }
            ReturnValue += param[0] + '=' + param[1] + '&';
        }
    }

    if (HasUpdate == false) {
        ReturnValue += keyParam + '=' + valueParam + '&';
    }

    return ReturnValue.substring(0, ReturnValue.length - 1);
}

//pop-up menu
function DisplayTab(showNum, hideNum) {
    var btl_TabTdShow = document.getElementById("btl_TabTd" + showNum);

    if (btl_TabTdShow.className == 'btl_TabSelected') {
        return;
    }

    var btl_TabDivShow = document.getElementById("btl_TabDiv" + showNum);

    var btl_TabTdHide = document.getElementById("btl_TabTd" + hideNum);
    var btl_TabDivHide = document.getElementById("btl_TabDiv" + hideNum);


    btl_TabTdShow.className = 'btl_TabSelected';
    btl_TabDivShow.style.display = '';

    btl_TabTdHide.className = 'btl_Tab';
    btl_TabDivHide.style.display = 'none';

    //document.
    //btl_TabDivShow. //ComponentTitleLink
}

function ShowDiv() {
    var div = document.getElementById("DirectChannel_div");
    if (div != null) {
        div.style.display = "";
    }
}

function getStyle(el, styleProp) {
    var x = document.getElementById(el);
    if (x.currentStyle)
        var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
    return y;
}

function getStyle1(el, styleProp) {
    var x = el;
    if (x.currentStyle)
        var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
    return y;
}

function TopMenu_ShowNode(obj, arrow, offsetRight) {
    obj = document.getElementById(obj);

    if (obj == null)
        return;

    if (offsetRight == null)
        offsetRight = 0;

    obj.style.display = 'block';

    var arrowObj = $(arrow);

    var arrowOffset = arrowObj.offset();
    var arrowWidth = arrow.offsetWidth;
    var ObjWidth = obj.offsetWidth;


    if (getStyle1(document.body, 'direction') == 'rtl') {
        obj.style.left = (arrowOffset.left + arrowWidth - ObjWidth + 10) + 'px';
    }
    else {
        // obj.style.left = arrowOffset.left + (ObjWidth / 2) + 'px';
        obj.style.left = (arrowOffset.left + arrowWidth - (ObjWidth / 2)) + 'px';
    }

    obj.style.top = (arrowOffset.top + arrow.offsetHeight - 40) + 'px';
}

function TopMenu_HideNode(event, obj) {

    //debugger
    obj = document.getElementById(obj);
    if (obj == null) {
        return;
    }

    obj.style.display = 'none';
}


function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function ScrollToTop() {
    var frames = window.parent.document.getElementsByTagName('iframe');

    for (i = 0; i < frames.length; i++) {

        if (frames[i].contentWindow.location.href == window.location.href) {
            frames[i].scrollIntoView(true);
            return;
        }
    }
}


function GetValidDate(myYear, myMonth, myDay) {
    var year = parseInt(myYear);
    if (isNaN(year))
        return null;
    var month = parseInt(myMonth - 1); //month -1 cause javascript counts month from 0 to 11!
    if (isNaN(month)) return null;
    var day = parseInt(myMonth);
    if (isNaN(day)) return null;

    var myDate = new Date(year, month, day);

    if (myDate.getDate() != day || myDate.getMonth() != month || myDate.getFullYear() != year)
        return null;

    return myDate;

}

function ToggleClass(selector, myclass) {
    $(selector).toggleClass(myclass);
}

function FocusToTop() {
    document.getElementById('mainContent').focus();
    return;
}

function FocusOnMainContent()
{
    $('h1').attr('tabindex', '0');
    $('h1').focus();
    return;
}


function IsDefined(objClass) {
    // return typeof obj != 'undefined'
    return ($('.' + objClass).length > 0)

}



