$(document).ready(function(){

	var iframe = document.getElementById( 'api-frame' );
	var version = '1.0.0';
	var urlid = '20402f91260d4c30af9b89e7685c4bf5';
	var client = new Sketchfab( version, iframe );
	var showvideo = function(vcode){
		"use strict";
		$("#model_video_display").fadeIn("fast");
	  	$("#video").html('<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&autospin=0.5" frameborder="0" allowfullscreen ></iframe>');

	  	$("#close").on("click", function(){
	  		$("#model_video_display").fadeOut("fast");
	  		$("#video").html("");
	  	});
	}; 



	client.init( urlid, {
		success: function onSuccess( api ){
			//api.load();
		    api.start();
		    api.addEventListener( 'viewerready', function() {
		    	$("#annotations").fadeIn("slow");
		    } );
		    api.addEventListener( 'annotationFocus', function( index ) {
			    //console.log( index );
				api.getCameraLookAt( function( err, camera ){
					var camtarget = camera.target;
					var strtarget = camtarget.toString();
					var strsmall = strtarget.substr(0, 7);

					if( strsmall == -1.0880){
						showvideo("CzskNOQ0AbU");
					}else if( strsmall == -3.0378){
						showvideo("CzskNOQ0AbU");
					}else if( strsmall == -3.3181){
						showvideo("CzskNOQ0AbU");
					}else if( strsmall == 1.83145){
						showvideo("CzskNOQ0AbU");
					}else if( strsmall == -0.2837){
						showvideo("CzskNOQ0AbU");
					}
				});
			} );

		},
		error: function onError() {
		    console.log( 'Viewer error' );
		}
	} );

});