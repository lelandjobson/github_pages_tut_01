// $( window ).ready(function() {

//     $('.bgChange')
//     .scrollie({
//         scrollOffset : -50,
//         scrollingInView : function(elem) {
                    
//         var bgImg = elem.data('background');
//         bgImg = "url(" + bgImg + ')';
//         console.log(bgImg);
        
//         $('body').css('background-image', bgImg);
        
//         }
//     });
// });

// Mem load all images on page
var $target = $('.content');
$('.bgChange').each(function(i, element){
    console.log(this);
    var img = $(element).attr('data-background');
    $('<img />').attr('src',img).appendTo('body').css('display','none');
    //$('body').prepend(  "<img src='" + img + "'style='display:none;' alt='' />")  
});

// Fade bg function
inView('.bgChange').on('enter', function(el){
  var img = $(el).attr('data-background');
  $('body').css('background-image', "url(" + img + ")" );
});
