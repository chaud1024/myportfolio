"use strict"

function subPage(code) {
	if ( !code )						{	window.location = "/";	}

	//디자인 &원단 
	else if ( code == "main" )			{	window.location = "/index.html"; }

  //마이페이지
    else if ( code == "myp_userinfo_wrap" )   { window.location = "myp_userinfo_wrap.html"; }
    else if ( code == "myp_order_list" )   { window.location = "myp_order_list.html"; }
	else if ( code == "myp_inquiry_list")	{ window.location = "myp_inquiry_list.html"; }
	else if ( code == "myp_review_list" )   { window.location = "myp_review_list.html"; }


  // 문의목록 중 비밀글
	else if ( code == "inquiry_lock" )  { window.location = "inquiry_lock.html"; }




    else  {window.location = "/"; }

}