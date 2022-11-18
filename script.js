	jQuery(document).ready(function () {
                function scrollWin(anc){
                    target = jQuery(anc);
                    jQuery('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
                jQuery(".menu1").click(function(){
                    scrollWin("#section1");
                });

                jQuery(".menu2").click(function(){
                    scrollWin("#section2");
                });

                jQuery(".menu3").click(function(){
                    scrollWin("#section3");
                });

                jQuery(".menu4").click(function(){
                    scrollWin("#section4");
                });
                jQuery(".menu5").click(function(){
                    scrollWin("#section5");
                });

            });
