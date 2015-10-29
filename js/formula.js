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
		    var stop = false;
		    
			var target =  [ -0.060404333889703, -0.38451381663266704, -0.070695029163672 ];

		    var cameraList = [ {
		        eye: [ 3.4087849645575106, -5.142584345761795, 3.1022010936679654 ]
		    }, {
		        eye: [ -0.353268380644149, -6.233664913054986, 3.1022010936679654 ]
		    }, {
		        eye: [ -4.230155762027332, -4.353792751958628, 3.1022010936679654 ]
		    }, {
		        eye: [ -5.848593207078557, -0.21471728576659252, 3.1022010936679654 ]
		    }, {
		        eye: [ -3.863199597011962, 3.9376079692259736, 3.1022010936679654 ]
		    }, {
		        eye: [ 0.1037913394046463, 5.403836640320315, 3.1022010936679654 ]
		    }, {
		        eye: [ 4.34448594226677, 3.268522048256323, 3.1022010936679654 ]
		    }, {
		        eye: [ 5.712718197451071, -0.8334733703537267, 3.1022010936679654 ]
		    } ];

		    var currentCamera = 5;

		    var loop = function () {
		    	if(!stop){
			        currentCamera++;
			        api.lookat( cameraList[ currentCamera % 8 ].eye, target, 4 );
			        setTimeout( loop, 5000 );
			    }
		    }

		    api.start( loop );

		    api.addEventListener( 'viewerready', function() {
		    	$("#portada_content").fadeIn("slow");

		    	$("#portada_btn").on("click", function(){
		    		$("#indepth_portada").fadeOut("fast");
		    		stop=true;
		    	});
		    });
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