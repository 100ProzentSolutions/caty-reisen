
jQuery(function(){var a=jQuery;a.cookiesDirective({explicitConsent:!1,position:"bottom",duration:9999,limit:0,message:a("input[name=cookieData]").attr("data-cookie-text"),fontFamily:"Arial",fontColor:a("input[name=cookieData]").attr("data-cookie-colorText"),fontSize:"13px",backgroundColor:a("input[name=cookieData]").attr("data-cookie-colorBg"),backgroundOpacity:""});a(".cookieText").find("a").css({color:a("input[name=cookieData]").attr("data-cookie-colorLink"),"text-decoration":a("input[name=cookieData]").attr("data-cookie-underlineLink")?
"underline":""});a("#impliedsubmit").css({"background-color":a("input[name=cookieData]").attr("data-cookie-colorButton")?a("input[name=cookieData]").attr("data-cookie-colorButton"):"transparent"});a("input[name=cookieData]").remove()});
