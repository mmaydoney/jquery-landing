$(document).ready(function(){
  $(window).on("scroll", function() {
      var scrollDistance = $(window).scrollTop();
      if(scrollDistance>50){
        $("#mainNav").removeClass("affix-top")
        .addClass("affix");

      }
      else {
        $("#mainNav").removeClass("affix")
        .addClass("affix-top");
      }
  });
  $(document).on("click", ".pagescroll", function(event){
    event.preventDefault();
    var target = $(this).attr("href");
    $("body").animate({
    scrollTop: $(target).offset().top

});
//$('body').scrollspy()
//  });
});
