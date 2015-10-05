		$(document).ready(function(){
		
			//Blur Links (Prevents Outline)
			$('a').click(function() {
        		this.blur();
        	});
		
			//Hide all item descriptions in the info box
			$("#infobox > div").css("display", "none");
		
			//Call in the info box
			$(".more a").click(function(){
				$("#infobox").animate({bottom: '233px' }, 300);
				$(".close").show();
				$("#fade_bg").fadeIn();
				return false;
			});
			
			//Expand more info button on hover
			$(".more").hover(function(){
				$(this).stop().animate({width: '225px',height: '225px'}, 200).css({'z-index' : '10'}); //Change the width increase caption size
			}
      		,function () {
				$(this).stop().animate({width: '20px',height: '20px' }, 200).css({'z-index' : '1'});
      		});
      		
      		//Show description for selected item
      		$("#exp1 a").click(function(){
				$("#exp1_info").show();
			});
			
			$("#exp2 a").click(function(){
				$("#exp2_info").show();
			});

      		$("#exp3 a").click(function(){
				$("#exp3_info").show();
			});
			
      		$("#exp4 a").click(function(){
				$("#exp4_info").show();
			});
			$("#exp5 a").click(function(){
				$("#exp5_info").show();
			});
			
			$("#exp6 a").click(function(){
				$("#exp6_info").show();
			});

      		$("#exp7 a").click(function(){
				$("#exp7_info").show();
			});
			
      		$("#exp8 a").click(function(){
				$("#exp8_info").show();
			});
						
			//Remove background, info box and hide all descriptions
			$("#fade_bg, .close").click(function(){
				$("#fade_bg").fadeOut();
				$("#infobox").animate({bottom: '-200px' }, 300, function() {
					$("#infobox > div").css("display", "none");
					$(".close").css("display", "none");
				});
				return false;
			});
		
		}); 