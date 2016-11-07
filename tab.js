// JavaScript Document)
window.onload=function(){
    fntab("pic1",'onmouseover');
    fntab("pic2",'onclick');
function fntab(id,evt){
   var oPic=document.getElementById(id);
   var oP=oPic.getElementsByTagName('p')[0];	
   var oSpan=oPic.getElementsByTagName('span')[0];	
   var oImg=oPic.getElementsByTagName('img')[0];	
   var oUl=oPic.getElementsByTagName('ul')[0];	
   var aLi=oUl.getElementsByTagName('li');	
   var num=0;
   var arrImg=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
   var arrText=['第一张图','第二张图','第三张图','第四张图'];
   alert(arrText.length)
	for(var i=0;i<arrImg.length;i++){
		oUl.innerHTML+='<li>'+(i+1)+'</li>';
	}
	 function tab(){
	    oSpan.innerHTML=(num+1)+'/'+arrImg.length;
	    oP.innerHTML=arrText[num];
	    oImg.src=arrImg[num];
	    for(var i=0;i<aLi.length;i++){
		   aLi[i].className='';
	    }
	    aLi[num].className="hover";
	 }
	 tab();
	 for(var i=0;i<aLi.length;i++){
		 aLi[i].index=i;
		 aLi[i][evt]=function(){
	        num=this.index;
            tab();
		}
	 }
	 
	 
	 
	 
	 
	 
	 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 	
 
 
 
 
}