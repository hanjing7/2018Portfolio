/*--------------Animate CSS INTERACTION----------------------
            Initiate Animation on Hover*/
            function animationHover(element, animation){
                element = $(element);
                element.hover(
                    function() {
                        console.log('hover in');
                        element.addClass('animated ' + animation);         
                    },
                    function(){
                        console.log('hover out');
                        //wait for animation to finish before removing classes
                        window.setTimeout( function(){
                            element.removeClass('animated ' + animation);
                        }, 2000);          
                    });
            }
            /*Initiate Animation on Click*/
            function animationClick(element, animation){
                element = $(element);
                element.click(
                    function() {
                        console.log('click');
                        element.addClass('animated ' + animation);         
                        //wait for animation to finish before removing classes
                        window.setTimeout( function(){
                            element.removeClass('animated ' + animation);
                        }, 2000);          
             
                    }
                );
            }
            /*Call function*/
            $(document).ready(function(){
                console.log('ready');
                $('.logo, #showMenu').each(function() {
                    animationHover(this, 'pulse');
                });
                $('.logo, #showMenu').each(function() {
                    animationClick(this, 'swing');
                });
            });            