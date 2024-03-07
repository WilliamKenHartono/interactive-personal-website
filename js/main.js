// $(document).ready(function() {
//     $('.main-nav').on('click', 'li', function() {
//       $(this).toggleClass('active');
//     });
//   });

  // $(window).scroll(function(){
  //   if($(window).scrollTop() > 5)
  //   {
  //     $('.navigation').addClass('fixed');
  //   }
  //   else
  //   { 
  //     $('.navigation').removeClass('fixed');
  //   }
  // });

$(document).ready(function(){
  var scrollvalue = 0
  $(window).scroll(function(){
    var curValue = $(this).scrollTop()
    if(curValue>scrollValue){
      var i = 2;
      function removeLetter(){
        $("#l"+i).fadeOut(0);
        if(i<13){
          i++;
          setTimeout(removeLetter,30);
        }
      }
    }
  });
});