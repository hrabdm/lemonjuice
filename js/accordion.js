    $(".accordion h4:first").addClass("active");
    $(".accordion p:not(:first)").hide();

    $(".accordion h4").click(function(){
        $(this).next("p").slideToggle("slow").siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h4").removeClass("active");
    });
     
    // $(".accordion .faq-item h4").eq(2).addClass("active");
    // $(".accordion .faq-item p").eq(0).show();

    // $(".accordion .faq-item h4").click(function(){
    //     $(this).next("p").slideToggle("slow")
    //     .siblings("p:visible").slideUp("slow");
    //     $(this).toggleClass("active");
    //     $(this).siblings("h4").removeClass("active");
    // });
 