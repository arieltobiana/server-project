
/*function ShowToolTip(str) {
    //alert("ToolTipDiv_" + str)
    var ToolTip = document.getElementById("ToolTipDiv_" + str);
    //alert(ToolTip.id + "\n" + "ToolTipDiv_" + str );
    if (ToolTip.length)
        ToolTip = ToolTip[0];

    ToolTip.style.display = '';
    ToolTip.style.left = (document.body.parentElement.scrollLeft + window.event.x) - ToolTip.style.pixelWidth;
    //alert(document.body.parentElement.scrollTop);
    ToolTip.style.top = document.body.scrollTop + window.event.y + 5;
    //ToolTip.style.left = (document.body.scrollLeft + window.event.x) - ToolTip.style.pixelWidth;  
    //ToolTip.style.top = document.body.scrollTop + window.event.y + 5;

}*/

function DisplayToolTip(ID)
{
 
    $("." + ID).removeClass("hiden");
}

function HideToolTip(ID) {

    $("." + ID).addClass("hiden");
}
function ShowToolTip(e, str) {
    ShowToolTip(e, str, 'he-il');
}
function ShowToolTip(e, btn,  str, lang) {
    var clientX;
    var clientY;
    
    if (window.event)
    {
        clientX = window.event.x
        clientY = window.event.y
    }
    else
    {
        clientX = e.clientX;
        clientY = e.clientY;
    }
        
    var ToolTip = document.getElementById("ToolTipDiv_" + str);
    if (ToolTip.length)
        ToolTip = ToolTip[0];
        
    var btnObj = $(btn);
    var btnOffset = btnObj.offset(); 
    ToolTip.style.top =  (btnOffset.top + btn.offsetHeight) + "px";
    
        
    /*LTR ==> ToolTip.style.left =  (btnOffset.left) + "px";*/
    //alert(btnOffset.left)
    ToolTip.style.left =  (btnOffset.left -170) + "px";
     //alert(screen.width)
   
    //var left = Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
    //ToolTip.style.left =  (left - btnOffset.left) + "px";
    
    //alert(left);
    
    //ToolTip.style.left = (left + clientX) + "px"; //- ToolTip.style.pixelWidth;
        
        
    //ToolTip.style.top = Math.max(document.body.scrollTop,document.documentElement.scrollTop); //+ window.event.y + 5;
    //ToolTip.style.display = '';
    
  /*  
    ToolTip.style.top = arrowOffset.top;
//    var arrowWidth = arrow.offsetWidth
*/
    //var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    
    /*if (lang == "en-us" || lang == "ru-ru" || lang == "fr-FR" || lang == "es")
        ToolTip.style.right = (document.body.parentElement.scrollRight + clientX) - ToolTip.style.pixelWidth;

    else
        ToolTip.style.left = (document.body.parentElement.scrollLeft + clientX) - ToolTip.style.pixelWidth;
    */
    ToolTip.style.display = '';
}


function CloseToolTip(ID) {
    var ToolTip = document.getElementById("ToolTipDiv_" + ID);
    if (ToolTip.length)
        ToolTip = ToolTip[0];
    ToolTip.style.display = 'none';
}


function ShowHelp(e)
{
   var sElement;
   if (document.all)           //IE
   {
     e = window.event;
     
     sElement =e.srcElement.id;
   }
   else
   {
        sElement =e.target.id;

   }
   
   
    var sUniqe = sElement.slice(0,sElement.length - 4);
    
    var ToolTip =document.getElementById(sUniqe + "_" + "ToolTipDiv");
    if (ToolTip.length)
        ToolTip = ToolTip[0];

	ToolTip.style.display = '';
	ToolTip.style.left = (document.body.parentNode.scrollLeft + e.x) - ToolTip.style.pixelWidth;  
	ToolTip.style.top = document.body.parentNode.scrollTop + e.y + 5;

}

function CloseHelp(e)
{
    
   var sElement;
   if (document.all)           //IE
   {
     e = window.event;
     
     sElement =e.srcElement.id;
   }
   else
   {
        sElement =e.target.id;

   }
   
    var sUniqe = sElement.slice(0,sElement.length - 4);
    
    var ToolTip = document.getElementById(sUniqe + "_" + "ToolTipDiv");
	if (ToolTip.length)
        ToolTip = ToolTip[0];
        //alert(ToolTip.style.display);
	ToolTip.style.display = 'none';
	
}
