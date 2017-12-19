var windowsize;
var $window = $(window);

function checkWidth() {windowsize = $window.width();}
checkWidth();
$(window).resize(checkWidth);

var windowStartupMobile = windowsize < 768 ? true : false;
//console.log(windowsize);

window.onresize = function(event) {
	if(windowStartupMobile){
		if(windowsize >= 768)
			location.reload();
	}
	else{
		if(windowsize < 768)
			location.reload();
		preleader();
	}
};

function preleader(){
	$(function(){
		$('#status').fadeOut('fast');
		$('#preloader').delay(250).fadeOut('slow', function() {
			$(this).addClass('none');
		});
		$('body').delay(1000).css({'overflow':'visible', 'height': 'auto'});
	});
}
jQuery(document).ready(function ($) {
	$(window).scroll(function (event) {
		var scroll1 = $(window).scrollTop();
		if(scroll1>130){
		  $("body").addClass("scrolled");
		}
		else{
		  $("body").removeClass("scrolled");
		}
		// Do something
	});
    $(window).load(function() {
		if(windowsize<768){
			var callback = function(){
				$('nav#main-navigation').mmenu({
					extensions	: [ 'effect-slide-menu', 'pageshadow' ],
					searchfield	: {
						placeholder: "Ne aramıştınız?"
						},
					counters	: true,
					dividers		: {
						fixed 	: true
					},
					navbar 		: {
						title		: ''
					},
					navbars		: [
						 {
							position	: 'top',
							content		: '<a href="/" style="padding-bottom:0; padding-top:10px;"><img src="/img/logo.png" style="max-height:60px; width:auto;"></a>',
							height: 2
						},{
							position	: 'top',
							content		: [
								'prev',
								'title',
								'home'
							]
						}, {
							position	: 'bottom',
							content		: [
								'<div class="socialitem twitter"><a href="https://twitter.com/netiletisim" target="_blank"><i class="fa fa-twitter"></i></a></div>',
								'<div class="socialitem facebook"><a href="https://www.facebook.com/netiletisim" target="_blank" style="margin-left:10px;"><i class="fa fa-facebook"></i></a></div>',
          '<div class="socialitem instagram"><a href="https://linkedin.com/netiletisim" target="_blank" style="margin-left:10px;"><i class="fa fa-linkedin"></i></a></div>',
          '<div class="socialitem youtube"><a href="https://youtube.com/netiletisim" target="_blank" style="margin-left:10px;"><i class="fa fa-youtube"></i></a></div>',
          '<div class="lngitem" style="padding-right:17px"><a href="/en" title="English" class="button tiny-btn">EN</a></div>',
          '<div class="lngitem"><a href="/tr" title="Türkçe" class="button tiny-btn">TR</a></div>'
							]
						},
						{
							position	: 'bottom',
							content		: [ '<form name="frmSearch" id="frmSearch" method="post" action="' + searchurl + '"><input type="text" id="txtSearch" name="txtSearch" placeholder="' + searchplaceholdertxt + '"><button type="submit" name="submit"><i class="fa fa-search"></i></button></form>' ]
						}
					]
				});
				$('nav#main-navigation').removeClass("navigation");
			}
			loadCSS("/css/jquery.mmenu.all.css");
			loadScript("/js/jquery.mmenu.min.all.js", callback);

			$(".icerik table").each(function(index, element) {
				$(this).wrap('<div class="table-container"></div>');
			});
		}
		else{
			preleader();
		}
    });
	
	$(".icerik").fitVids();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn('slow');
			if($(window).scrollTop() + $(window).height() >= $(document).height()-80) {
            	$('.scroll-top a').css({"bottom":"80px"});
        	}
			else{
            	$('.scroll-top a').css({"bottom":"40px"});
			}
        } else {
            $('.scroll-top').fadeOut('slow');
        }
    }); 

    $('.scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.local').click(function () {
        var ele = $(this);
        var location = $(ele).attr('href');

        $('html, body').animate({
            scrollTop: $(location).offset().top
        }, 1000);
    });

    $('.fancy').fancybox();
    $('.fancyvideo').fancybox({
		type: "iframe",
		maxWidth	: 640,
		maxHeight	: 360,
		fitToView	: false,
		width: 640,
		height: 360
		});

    $('.ttip-top').tooltip({
        position: {
            my: 'center bottom-15',
            at: 'center top',
            using: function (position, feedback) {
                $(this).css(position);
                $('<div>')
                    .addClass('arrow')
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });

    $('.ttip-bottom').tooltip({
        position: {
            my: 'center bottom+40',
            at: 'center bottom',
            using: function (position, feedback) {
                $(this).css(position);
                $('<div>')
                    .addClass('arrow')
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });

	var showcaseslider = $('#showcase').bxSlider({
	  nextText: '<img src="/img/arrow-blue-right.png">',
	  prevText: '<img src="/img/arrow-blue-left.png">',
      auto: true,
      autoHover: true,
	  pagerCustom: '#sh-pager',
	  onSliderLoad: function(currentIndex){
		  $(".showcase .caption").eq(1).addClass("showcap");
	  },
	  onSlideBefore: function($slideElement, oldIndex, newIndex){ 
		$(".showcase .caption").removeClass("showcap");
	  },
	  onSlideAfter: function($slideElement, oldIndex, newIndex){ 
		$(".caption", $slideElement).addClass("showcap");
		//console.log(newIndex);
	  }
	});
	
	var customerMaxSlide = 5;
	var customerSlideWidth = 135;
	if(windowsize>=768 && windowsize<=991){
		customerMaxSlide = 4;
		customerSlideWidth = 120;
	}
	if(windowsize<768){
		customerMaxSlide = 2;
		customerSlideWidth = 120;
	}
	if(windowsize<480){
		customerMaxSlide = 2;
		customerSlideWidth = 90;
	}
	var customerslider = $('#customerslider').bxSlider({
	  nextText: '<img src="/img/arrow-big-thin-right-black.png">',
	  prevText: '<img src="/img/arrow-big-thin-left-black.png">',
	  auto: ($(".customerslider li").length > customerMaxSlide) ? true: false,
	  autoHover: true,
	  minSlides: 2,
	  maxSlides: customerMaxSlide,
	  moveSlides: 1,
	  slideWidth: customerSlideWidth,
	  slideMargin: 30,
	  pager: false
	});
	
	var productMaxSlide = 4;
	var productSlideWidth = 230;
	if(windowsize>=768 && windowsize<=991){
		productMaxSlide = 3;
		productSlideWidth = 190;
	}
	if(windowsize<768){
		productMaxSlide = 2;
		productSlideWidth = 120;
	}
	if(windowsize<480){
		productMaxSlide = 2;
		productSlideWidth = 90;
	}
	var productslider = $('#productslider').bxSlider({
	  nextText: '<img src="/img/arrow-big-thin-right-black.png">',
	  prevText: '<img src="/img/arrow-big-thin-left-black.png">',
	  auto: ($(".productslider li").length > productMaxSlide) ? true: false,
	  autoHover: true,
	  minSlides: 2,
	  maxSlides: productMaxSlide,
	  moveSlides: 1,
	  slideWidth: productSlideWidth,
	  slideMargin: 30,
	  pager: false
	});
	
	$('ul.quickTree').quickTree();
	
	$(".printbtn").click(function (e) {
        e.preventDefault();
        window.print();
    });
	
	$('#share').sharrre({
        share: { facebook: true, twitter: true, googlePlus: true },
        buttons: { googlePlus: { size: 'medium', annotation: 'bubble', lang: 'tr-TR', }, facebook: { layout: 'button_count', lang: 'tr-TR' }, twitter: { count: 'horizontal', lang: "tr", via:"netiletisim" } },
        enableHover: false,
        enableCounter: false,
        enableTracking: true
    });
    $('#sharebuttons').sharrre({
        share: {
            twitter: true,
            facebook: true,
            googlePlus: true,
            digg: false,
            delicious: false,
            stumbleupon: true,
            linkedin: true,
            pinterest: true
        },
        buttons: {
            twitter: {via: "netiletisim"}
        },
        template: '<div class="box"><span class="sharetitle">' + paylas_title + '</span><a href="#" class="facebook"><i class="fa fa-facebook-square"></i></a><a href="#" class="twitter"><i class="fa fa-twitter-square"></i></a><a href="#" class="googleplus"><i class="fa fa-google-plus-square"></i></a><a href="#" class="stumbleupon"><i class="fa fa-stumbleupon"></i></a><a href="#" class="linkedin"><i class="fa fa-linkedin-square"></i></a><a href="#" class="pinterest"><i class="fa fa-pinterest-square"></i></a></div>',
        enableHover: false,
        enableTracking: true,
        render: function (api, options) {
            $(api.element).on('click', '.twitter', function () {
                api.openPopup('twitter');
            });
            $(api.element).on('click', '.facebook', function () {
                api.openPopup('facebook');
            });
            $(api.element).on('click', '.googleplus', function () {
                api.openPopup('googlePlus');
            });
            $(api.element).on('click', '.stumbleupon', function () {
                api.openPopup('stumbleupon');
            });
            $(api.element).on('click', '.linkedin', function () {
                api.openPopup('linkedin');
            });
            $(api.element).on('click', '.pinterest', function () {
                api.openPopup('pinterest');
            });
        }
    });
	
	var duyurucookieValue = Cookies.get("netiletisimozelduyuru");
    if (duyurucookieValue != "1") {
        $.ajax({
            type: "GET",
            url: "/" + dilStr + "/ozel-duyuru",
            cache: false,
            success: function (data) {
                if (data != "") {
                    var dataArray = data.split("|");
                    $.fancybox.open({
                        href: dataArray[0],
                        helpers: {
                            title: { type: 'inside' },
                            buttons: {}
                        },
                        afterShow: function () {
                            if (dataArray.length > 0) {
                                $("img.fancybox-image").click(function () {
                                    window.location.href = dataArray[1];
                                }).css({ "cursor": "pointer" });
                            }
                        }
                    });
                    //console.log(data);
                    Cookies.set("netiletisimozelduyuru", "1");
                }
            }
        });
    }
	onScrollInit( $('.os-animation') );
});
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
 
    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var osTrigger = ( trigger ) ? trigger : osElement;
 
    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '90%'
    });
  });
}
function getSayfa(adres){
	var strText = null;
	var rndTime = new Date();
	var rndTime2 = rndTime.toTimeString().replace(" ", "");
	var gonderUrl = adres + '&rnd=' + rndTime2;
	$.ajax({
		url: gonderUrl,
		async: false, dataType: 'text',
		success: function(text) {
			strText = text;
		}, 
		error: function(http, message, exc) {
			strText = null;
	}});
	//alert(strText);
	return strText;
}
function Trim(value)
{
    value = value.match(/^\s*(\S+(\s+\S+)*)\s*$/);
    return (value == null) ? "" : value[1];
}
function fillcheckTemizle(FormName, FieldName, CheckValue, fieldText, fieldHidden)
{
	var strSecenek="";
	var strSecenekID="";
	if(!document.forms[FormName])
		return;
	var objCheckBoxes = document.forms[FormName].elements[FieldName];
	if(!objCheckBoxes)
		return;
	var countCheckBoxes = objCheckBoxes.length;
	if(!countCheckBoxes){
		if(objCheckBoxes.checked){
			strSecenek=arrayList[0];
			strSecenekID=objCheckBoxes.value;
			}
		}
	else{
		// set the check value for all check boxes
		for(var i = 0; i < countCheckBoxes; i++){
			if(objCheckBoxes[i].checked){
				if(strSecenek==""){
					strSecenek=arrayList[i];
					strSecenekID=objCheckBoxes[i].value;
				}
				else{
					strSecenek=strSecenek+" - "+arrayList[i];
					strSecenekID=strSecenekID+","+objCheckBoxes[i].value;
				}
			}
		}
	}
	if(strSecenek==""){
		alert(en_az_bir_oge);
		return false;
	}
	else{
		//alert(strSecenek);
		//alert(strSecenekID);
		if(document.getElementById(fieldText) && document.getElementById(fieldHidden)){
		document.getElementById(fieldText).value = strSecenek;
		document.getElementById(fieldHidden).value = strSecenekID;
		$(function(){
			$('#fillField').dialog('close');
		});
		}
		return false;
	}
}
function pick(id, isim, fieldText, fieldHidden) {	
	if(document.getElementById(fieldText) && document.getElementById(fieldHidden)){
	document.getElementById(fieldText).value = isim;
	document.getElementById(fieldHidden).value = id;
	$(function(){
		$('#fillField').dialog('close');
	});
	}
}
function fillIn(anaparentID,parentID,catID,hiddenText,hiddenID,kolon,anaID,anaVar,fieldType,aciklama)
{
	var hiddenTextVal="";
	var hiddenIDVal="";
	var anaIDVal="";

	if(hiddenText!="")
		hiddenTextVal = document.getElementById(hiddenText).value;
	if(hiddenID!="")
		hiddenIDVal = document.getElementById(hiddenID).value;
	if(anaID!="")
		anaIDVal = document.getElementById(anaID).value;
	if(anaIDVal=="0" || anaIDVal==""){
			alert(lutfen_once_title + aciklama + seciniz_title);
		}
	else{
	var dest = "/fill?baba=3012&anaparentID="+anaparentID+"&parentID="+parentID+"&catID="+catID+"&hiddenText="+hiddenTextVal+"&hiddenID="+hiddenIDVal+"&fieldText="+hiddenText+"&fieldHidden="+hiddenID+"&kolon="+kolon+"&anaID="+anaIDVal+"&anaVar="+anaVar+"&fieldType="+fieldType;
	$(function(){
	var siraReturn = getSayfa(dest);
	//alert(siraReturn);
	var siralamaAlaniID = document.getElementById("fillField");
	siralamaAlaniID.innerHTML = siraReturn;

	$('#fillField').dialog({
		width: 600,
		autoOpen: false,
		title: "",
		zIndex: 6000,
		modal: true
	});
	$('#fillField').dialog('open');
	});
	}
	return false;
}
function fillIn2(anaparentID,parentID,catID,hiddenText,hiddenID,kolon,anaID,anaVar,fieldType,aciklama)
{
	var hiddenTextVal="";
	var hiddenIDVal="";
	var anaIDVal="";

	if(hiddenText!="")
		hiddenTextVal = document.getElementById(hiddenText).value;
	if(hiddenID!="")
		hiddenIDVal = document.getElementById(hiddenID).value;
	if(anaID!="")
		anaIDVal = document.getElementById(anaID).value;
	if(anaIDVal=="0" || anaIDVal==""){
			alert(lutfen_once_title + aciklama + seciniz_title);
		}
	else{
	var dest = "/fill2?baba=3012&anaparentID="+anaparentID+"&parentID="+parentID+"&catID="+catID+"&hiddenText="+hiddenTextVal+"&hiddenID="+hiddenIDVal+"&fieldText="+hiddenText+"&fieldHidden="+hiddenID+"&kolon="+kolon+"&anaID="+anaIDVal+"&anaVar="+anaVar+"&fieldType="+fieldType;
	$(function(){
	var siraReturn = getSayfa(dest);
	//alert(siraReturn);
	var siralamaAlaniID = document.getElementById("fillField");
	siralamaAlaniID.innerHTML = siraReturn;

	$('#fillField').dialog({
		width: 600,
		autoOpen: false,
		title: "",
		zIndex: 6000,
		modal: true
	});
	$('#fillField').dialog('open');
	});
	}
	return false;
}
function ilceReset()
{
	document.getElementById('ilceID').value="";
	document.getElementById('ilce').value="";
}
function selectTemizle2(FormName, FieldName, CheckValue)
{
	if(!document.forms[FormName])
		return;
	var objCheckBoxes = document.forms[FormName].elements[FieldName];
	if(!objCheckBoxes)
		return;
	objCheckBoxes.options[0].selected = CheckValue;
}
function selectTemizle(FormName, FieldName, CheckValue)
{
	if(!document.forms[FormName])
		return;
	var objCheckBoxes = document.forms[FormName].elements[FieldName];
	if(!objCheckBoxes)
		return;
	var countCheckBoxes = objCheckBoxes.options.length;
	for(var i = 0; i < countCheckBoxes; i++)
		objCheckBoxes.options[i].selected = CheckValue;
}
function checkTemizle(FormName, FieldName, CheckValue)
{
	if(!document.forms[FormName])
		return;
	var objCheckBoxes = document.forms[FormName].elements[FieldName];
	if(!objCheckBoxes)
		return;
	var countCheckBoxes = objCheckBoxes.length;
	if(!countCheckBoxes)
		objCheckBoxes.checked = CheckValue;
	else
		// set the check value for all check boxes
		for(var i = 0; i < countCheckBoxes; i++)
			objCheckBoxes[i].checked = CheckValue;
}
function degerTemizle(FormName, FieldName)
{
	if(!document.forms[FormName])
		return;
	var objField = document.forms[FormName].elements[FieldName];
	if(!objField)
		return;
	objField.value="";
}

function replace2(s, from1, to1) {
	var p,str;
	str=s;
	p = str.indexOf(from1);
	while (p > -1) {
		str=str.substring(0, p) + to1 + str.substring(p+from1.length);
		p = str.indexOf(from1);
	}
	return str;
}
function replaceTR(value)
{
    var newValue = value;
	newValue = replace2(newValue, "ğ", "g");
	newValue = replace2(newValue, "ü", "u");
	newValue = replace2(newValue, "ş", "s");
	newValue = replace2(newValue, "ı", "i");
	newValue = replace2(newValue, "ö", "o");
	newValue = replace2(newValue, "ç", "c");
	newValue = replace2(newValue, "Ğ", "G");
	newValue = replace2(newValue, "Ü", "U");
	newValue = replace2(newValue, "Ş", "S");
	newValue = replace2(newValue, "İ", "I");
	newValue = replace2(newValue, "Ö", "O");
	newValue = replace2(newValue, "Ç", "C");
    return newValue;
}

function Amount_onkeypress(e) {	
	var key; 
	if(window.event){ key = event.keyCode;}else if(event.which){ key = event.which;} return (key == 13 || key == 8 || key == 9 || (key >= 48 && key < 58) );
	}

/*
function Amount_onkeypress2(e) {	
	var key; 
	if(window.event){ key = event.keyCode;}else if(event.which){ key = event.which;} return (key == 44 || key == 13 || key == 8 || key == 9 || (key >= 48 && key < 58) );
	}

*/
function Amount_onkeypress2(e, obj) {	
	var key = (window.Event) ? e.which : e.keyCode;
	var deger = obj.value;
	var virgulYok = false;
	if (deger.indexOf(",")<0)
		virgulYok = true;
	  if(((key<48 || key>57) && key!=8 && key!=13 && key!=44) || (!virgulYok && key==44)) 
	  	return false;
	}

function Amount_onkeyup(thisis) {
	var tempstr,newstr,str,i,str2 ;
	var commapos,aftercomma,commacount;
	i=0;
	str = thisis.value;
	while ((str.length>1)&&(str.substr(0,1)=='0')){
		str=str.substr(1);
	}
	if (str.indexOf(",")<0){
	
		str=replace2(str,'.','');

		commacount=0;
		commapos=str.indexOf(";");
	
		if (commapos>=0) 
		{
			aftercomma=str.substr(commapos);
			str=str.substr(0,commapos);
		}
		else
			aftercomma="";
	
		if (str.length > 3) 
		{
			tempstr=str;
			newstr="";
			while (tempstr.length>3)
			{
				newstr="."+tempstr.substr(tempstr.length-3)+newstr; 
				tempstr=tempstr.substr(0,tempstr.length-3);
			}
			thisis.value = tempstr+newstr+aftercomma;
		}else{thisis.value = str;}
	}
	if(thisis.value=='0'){thisis.value='';}
}
function loadScript(src, callback)
{
  var s,
      r,
      t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if ( !r && (!this.readyState || this.readyState == 'complete') )
    {
      r = true;
      callback();
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}
/*!
loadCSS: load a CSS file asynchronously.
[c]2014 @scottjehl, Filament Group, Inc.
Licensed MIT
*/

/* exported loadCSS */
function loadCSS( href, before, media, callback ){
	"use strict";
	// Arguments explained:
	// `href` is the URL for your CSS file.
	// `before` optionally defines the element we'll use as a reference for injecting our <link>
	// By default, `before` uses the first <script> element in the page.
	// However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
	// If so, pass a different reference element to the `before` argument and it'll insert before that instead
	// note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
	var ss = window.document.createElement( "link" );
	var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
	var sheets = window.document.styleSheets;
	ss.rel = "stylesheet";
	ss.href = href;
	// temporarily, set media to something non-matching to ensure it'll fetch without blocking render
	ss.media = "only x";
	// DEPRECATED
	if( callback ) {
		ss.onload = callback;
	}

	// inject link
	ref.parentNode.insertBefore( ss, ref );
	// This function sets the link's media back to `all` so that the stylesheet applies once it loads
	// It is designed to poll until document.styleSheets includes the new sheet.
	ss.onloadcssdefined = function( cb ){
		var defined;
		for( var i = 0; i < sheets.length; i++ ){
			if( sheets[ i ].href && sheets[ i ].href === ss.href ){
				defined = true;
			}
		}
		if( defined ){
			cb();
		} else {
			setTimeout(function() {
				ss.onloadcssdefined( cb );
			});
		}
	};
	ss.onloadcssdefined(function() {
		ss.media = media || "all";
	});
	return ss;
}
