
function OpenCloseDiv(id) {
    title = $("." + id + "_title");
    title.toggleClass("closedLink");

    div = $("." + id);

    div.toggleClass("hidden");

    if (title.hasClass("closedLink")) {
        title.attr('aria-expanded', true);
        div.attr('aria-hidden', false);
    }
    else {
        title.attr('aria-expanded', false);
        div.attr('aria-hidden', true);
    }
}

function OpenCloseDivs(tbAllid, tbid)
{
    //var obj0 = document.getElementById(tbAllid);
    //var allId = obj0.value.split(";");
    //var m_tbid=tbid;
    //this.open=CloseAll;
    //this.close=OpenAll;
    //this.OpenAll=OpenAll;
    //this.CloseAll=CloseAll;
    //this.ChangeDivs=ChangeDivs;
    //this.init = init;
}
function init()
{

}
function ChangeDivs()
{
//alert("ChangeDivs");
   var objid = document.getElementById(m_tbid);
   var allChangeId = objid.value.split(";");
   for (i=0;i<allChangeId.length;i+=1)
   {
   if(allChangeId[i]!="")
   {
	var changeDiv= new ChangeDiv(allChangeId[i],m_tbid);
	changeDiv.change();
	}
   }
}

function OpenAll()
 {
   for (i=0;i<allId.length;i+=1)
   {
   if(allId[i]!="")
   {
	    var changeDiv= new ChangeDiv(allId[i],m_tbid);
	    changeDiv.open()
	}
   }

	
 }
 function CloseAll()
 {
   for (i=0;i<allId.length;i+=1)
   {
   if(allId[i]!="")
   {
	    var changeDiv= new ChangeDiv(allId[i],m_tbid);
	    changeDiv.close();
	}
   }

	
 }
 



function ChangeDiv(id,tbid)
 {
	var obj0 = document.getElementById(tbid);
 	var idString = id + ';' ;
	var obj1 = document.getElementById('ItemDesc_close_' + id);
	/*alert(obj1);
	if(obj1==null)
	    obj1 = document.getElementById('ItemDesc_' + id);*/
	var obj2 = document.getElementById('ItemDesc_open_' + id);
	var objPlus = document.getElementById('ItemPlus_' + id);
    var objMinus = document.getElementById('ItemMinus_' + id);
    
	
	this.Change=Change;
	this.open=open;
	this.close=close;

	function Change()
	{
		if(obj1.style.display == '') /*open*/
		{
   		    open();	
		} 
		else  /*close*/
		{
   		     close();
 		}
	}
	function open()
	 {
		if(obj0!=null) obj0.value = obj0.value + idString ;
		obj1.style.display ='none';
   	
   	    if(obj2!=null) 	obj2.style.display='';
   		if(objPlus!=null) objPlus.style.display ='';
        if(objMinus!=null) objMinus.style.display ='none';

	 }
	function close()
	 {

		if(obj0!=null) obj0.value = replace(obj0.value,idString,"") ;

	    obj1.style.display='';
     		
     	if(obj2!=null) 	obj2.style.display='none';
     	if(objPlus!=null)  objPlus.style.display ='none';
        if(objMinus!=null) objMinus.style.display ='';
	}
 }
 function replace(string,text,by)
  {
var strLength = string.length, txtLength = text.length;
if ((strLength == 0) || (txtLength == 0)) return string;
var i = string.indexOf(text);
if ((!i) && (text != string.substring(0,txtLength))) return string;
if (i == -1) return string;
var newstr = string.substring(0,i) + by;
if (i+txtLength < strLength)
newstr += replace(string.substring(i+txtLength,strLength),text,by);
return newstr;
}

