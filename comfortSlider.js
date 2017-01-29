/*
* comfortSlider v1.0
* author: ivanlis
* https://ivanlis.ru

*/

(function ($) {
    $.fn.comfortSlider = function (options) {


        var galleryID = $(this).attr('id');
      
       /* 
        if ( ! options.lg )   options.lg = 4;
        if ( ! options.md )   options.md = 3;
        if ( ! options.sm )   options.sm = 2;
        if ( ! options.xs )   options.xs = 1;
        if ( ! options.backgroundMain ) options.backgroundMain = 'white';
        if ( ! options.textColor ) options.textColor = 'black';
        if ( ! options.title ) options.title = '&nbsp';
*/
        var settings = $.extend( {
      'lg' : 4,
      'md' : 3,
      'sm' : 2,
      'xs' : 1
    }, options);
        var galleryChildren = $(this).children('div');
        var galleryCount = galleryChildren.length;
        //var countImg = $(this).children('div').length;
        
        $(this).css('margin', '0 auto');
        $(this).children('div').css('cursor', 'pointer', 'transition', '0.3s');
        this.after("<div class='modal_overlay' id= " + galleryID + '_modal' + " data=" + galleryCount + ">   <div class='modalItem'>    <div class='modalHeader g-center'><span class='title'> &nbsp</span><i class='fa fa-times-circle modal_close' aria-hidden='true'></i></div> <div class='modalBody'> <img src='' alt='' class='g-img-responsive modal_image'>     </div>                   <div class='modalFooter'>                            <i class='fa fa-2x fa-arrow-left modal_left' aria-hidden='true'></i>           <i class='fa fa-2x fa-arrow-right modal_right' aria-hidden='true'></i>      </div> </div>  </div>");
                   

      
        $('html head').append("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>");


        
        $(galleryChildren).each(function (index, item) {
            
         
            var new_id = index + 1;
            var divideID = '_' + new_id;
            $(this).children('img').attr('id', galleryID + divideID);
        });
        
 
        /* Getting size option */
        var lg = 'g-lg-' + settings.lg;
        var md = 'g-md-' + settings.md;
        var sm = 'g-sm-' + settings.sm;
        var xs = 'g-xs-' + settings.xs;

        /*    
        $(document).ready(function() {
        var $blocks = galleryChildren,

            

            maxH    = $blocks.eq(0).height();



      

        $blocks.each(function(){

            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;


        });
            $blocks.height(maxH + 50); 
          
}); */
        
        
         if ( ( $(window).width() < 768) && (settings.xs == 2) )  {
      var li = $(this).children('div'),
    cntGroup = settings.xs; // по сколько элементов в группе
var divsArr = li.get();
var img_max = new Array();
for(var i = 0; i < li.length; i += cntGroup){
    $(divsArr.slice(i,i+cntGroup)).wrapAll('<div class=grow></div>');
}
       $(document).ready(function() {
        var $blocks = galleryChildren,

            

            maxH    = $blocks.eq(0).height();



      

        $blocks.each(function(){

            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;


        });
            $blocks.height(maxH + 50); 
          
});
     
        }
        
        if ( ( $(window).width() < 768) && (settings.xs == 1) )  {
      var li = $(this).children('div'),
    cntGroup = settings.xs; // по сколько элементов в группе
var divsArr = li.get();
var img_max = new Array();
for(var i = 0; i < li.length; i += cntGroup){
    $(divsArr.slice(i,i+cntGroup)).wrapAll('<div class=grow></div>');
}
      li.css('margin-top', '10px');
     
        }
        
        
        
         if ( ($(window).width() > 768) && ( $(window).width() < 992) ) {
      var li = $(this).children('div'),
    cntGroup = settings.sm; // по сколько элементов в группе
var divsArr = li.get();
var img_max = new Array();
for(var i = 0; i < li.length; i += cntGroup){
    $(divsArr.slice(i,i+cntGroup)).wrapAll('<div class=grow></div>');
}
          $(document).ready(function() {
        var $blocks = galleryChildren,

            

            maxH    = $blocks.eq(0).height();



      

        $blocks.each(function(){

            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;


        });
            $blocks.height(maxH + 50); 
          
});
      
        }
        
        if ( ($(window).width() > 992) && ( $(window).width() < 1200) ) {
      var li = $(this).children('div'),
    cntGroup = settings.md; // по сколько элементов в группе
var divsArr = li.get();
var img_max = new Array();
for(var i = 0; i < li.length; i += cntGroup){
    $(divsArr.slice(i,i+cntGroup)).wrapAll('<div class=grow></div>');
}
          
       $(document).ready(function() {
        var $blocks = galleryChildren,

            

            maxH    = $blocks.eq(0).height();



      

        $blocks.each(function(){

            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;


        });
            $blocks.height(maxH + 50); 
          
});
            
        }
        
        
        
     


if ( $(window).width() > 1200 ) {
      var li = $(this).children('div'),
    cntGroup = settings.lg; // по сколько элементов в группе
var divsArr = li.get();
var img_max = new Array();
for(var i = 0; i < li.length; i += cntGroup){
    $(divsArr.slice(i,i+cntGroup)).wrapAll('<div class=grow></div>');
}
      
    
    $(document).ready(function() {
        var $blocks = galleryChildren,

            

            maxH    = $blocks.eq(0).height();



      

        $blocks.each(function(){

            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;


        });
            $blocks.height(maxH + 50); 
          
});
    
        }
        
        

    
        this.children('div').children('div').addClass(lg).addClass(md).addClass(sm).addClass(xs);

        var img = this.children('div').children('div').children('img');
        /* add some classes */
        img.addClass('g-img-responsive g-img img-rounded');
        /*if mobile, we do modal_close more than LG */
        if ($(window).width() < 992) {
            $('.modal_close').addClass('fa-2x');
        }
        /* making center of modal */
        
        img.click(function (event) {
           
            
            
            $('.modal_image').attr('src', $(this).attr('src')).attr('id', $(this).attr('id'));
            
        
            
            e = event || window.event;
            
            $('.modal_overlay').fadeIn(100);
            
            p = $('.modal_overlay');
            
            p.click(function (event) {
                
                e = event || window.event
                
                if (e.target == this) {
                    
                    $(p).css('display', 'none')
                    
                }
                
            });
            
            $('.modal_close').click( function() {
                  $(p).css('display', 'none')
            });
        });
        
        $('.modal_left').click( function() {
            var id = $('.modal_image').attr('id');
            var exp = id.split('_');

            var real_id = exp[1];
            
            if (( real_id - 1) > 0 ) { 
              $(this).show();
            var new_id = (real_id-1);
            var divide_id = '_' + new_id;
            var new_image_id = exp[0] + divide_id;
            var new_image =  $('#'+new_image_id).attr('src');
            $('.modal_image').attr('src', new_image).attr('id', new_image_id); 
            }
            
           
        });
        
        $('.modal_right').click( function() {
            var id = $('.modal_image').attr('id');
           
            var exp = id.split('_');
     
          //   var count_img = $('#'+exp[0]).children('div').length; \\
          //   var count_img = $('#'+exp[0]).children('div').length; \\
            
         //   alert ( count_img);
            var real_id = exp[1];


             if ( (real_id - ( -1 )) <= $('#'+exp[0] + '_modal').attr('data') ) {
            
            var new_id = real_id - ( - 1 );
            var divide_id = '_' + (real_id - (-1));
            var new_gallery_id = exp[0] + divide_id;
               //  alert ( new_gallery_id);
            var new_image =  $('#'+new_gallery_id).attr('src');
            $('.modal_image').attr('src', new_image).attr('id', new_gallery_id);
             }
            
        });
        
        
        

      
       
        
        
       
    }
})(jQuery);
