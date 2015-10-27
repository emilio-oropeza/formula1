$(document).ready(function(){

	var iframe = document.getElementById( 'api-frame' );
	var version = '1.0.0';
	var urlid = '20402f91260d4c30af9b89e7685c4bf5';
	var client = new Sketchfab( version, iframe );
	var showvideo = function(vcode){
		"use strict";
		$("#video_container").fadeIn("slow");
	  	$("#video").html('<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

	  	$("#close").on("click", function(){
	  		$("#video_container").fadeOut("slow");
	  		$("#video").html("");
	  	});
	};

	client.init( urlid, {
		success: function onSuccess( api ){
			//api.load();
		    api.start(function(){
		    	$(".opciones").each(function(){
		    		$(this).click(function(){
		    			api.gotoAnnotation( $(this).attr("opcion") );
		    		});				    		
		    	})
		    });
		    api.addEventListener( 'viewerready', function() {
		    	$("#annotations").fadeIn("slow");
		    } );
		    api.addEventListener( 'annotationFocus', function( index ) {
			    //console.log( index );

				api.getCameraLookAt( function( err, camera ){
					var camtarget = camera.target;
					var strtarget = camtarget.toString();
					var strsmall = strtarget.substr(0, 7);

					if( strsmall == 1.65842){
						//showvideo("Table dance");
					}else if( strsmall == 1.69556){
						//showvideo("OXXO");
					}else if( strsmall == -2.8221){
						showvideo("CzskNOQ0AbU");
					}else if( strsmall == 0.46786){
						//showvideo("Ticketmaster");
					}else if( strsmall == -2.8130){
						//showvideo("Comercial Mexicana");
					}
				});
			} );

		},
		error: function onError() {
		    console.log( 'Viewer error' );
		}
	} );

});