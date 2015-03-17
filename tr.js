var pId=0;
var p={1:0,2:0};
var pR={1:0,2:0};
var totalP=0;
var tpFinished=0;

function myAjax(urlV)
{	
	/* $.ajax({
       		 url: 'http://'+window.location.hostname+urlV,
       		 dataType: "jsonp",
       		 jsonpCallback: "_testcb",
       		 cache: false,
       		 timeout: 5000,
       		 success: function(data) {
           					 return data;
       					 },
   		 });*/
	return -100;
}

function firstRequest(){
	var res=myAjax("/firstRequest");
	alert(res);
}
