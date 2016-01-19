/*显示第一屏帖子回复*/
(function(){
var pages=1;
var repostid =0;
var reheight=100;
$(window).scroll(function(){
  if($(window).scrollTop()>=reheight && repostid<=10){
  var postids=$('#reppostids_'+(repostid+1)).text();
  $.get("/forum/replycontent/postid/"+postids,{page:encodeURIComponent(pages)},function(data){
    $("#showreply_"+postids).append(data.text);
    if(data.static != null){
      if(data.totalRegs > 5){
        $("#innerComment_"+postids).css("display","block");
        $('.commBtn').css({'width':'100%'});
      }
      else{
        $("#innerComment_"+postids).css("display","block");
        $('.commBtn').css({'width':'100%'});
        $(".click_more_"+postids).text("");
      }
    }else{
        $("#innerComment_"+postids).css("display","none");
    }
  },'json');
	repostid=repostid+1;
	reheight=reheight+$('#reppostid_'+repostid).height();
  }		  
 });	  
})()

/*帖子回复加载更多*/
function showpage(threadid,postid,repages){
$(".click_more_"+postid).removeAttr("onclick");
var repages=1;
  $.get("/forum/replycontents/threadid/"+threadid+"/postid/"+postid+"/repages/"+repages,{page:encodeURIComponent(repages)},function(data){
	if(data.totalRegs > 5){
	    $("#showreply_"+postid).append(data.text);
	    $("#showreplys_"+postid).append(data.texts);
		$(".click_more_"+postid).remove();
	  }
	},'json');

	setTimeout(function(){
	   $(".click_more_"+postid).attr("onclick","showpage("+threadid+","+postid+","+repages+")");
	},5000)
}

/*帖子回复翻页*/
function showpages(threadid,postid,repages){
  $.get("/forum/replypages/threadid/"+threadid+"/postid/"+postid+"/repages/"+repages,{page:encodeURIComponent(repages)},function(data){
	    $("#showreply_"+postid).empty();
	    $("#showreply_"+postid).append(data.text);
	    $("#showreplys_"+postid).empty();
	    $("#showreplys_"+postid).append(data.texts);
	},'json');
}
