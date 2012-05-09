  $(document).ready(function() {
        //move he last list item before the first item. The purpose of this is if the user clicks to slide left he will be able to see the last item.
        $('#topTenCarousel_ul li:first').before($('#topTenCarousel_ul li:last')); 
        //when user clicks the image for sliding right        
        $('#topTenRightScroll img').click(function(){
            //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
            var item_width = $('#topTenCarousel_ul li').outerWidth() + 10;
            //calculae the new left indent of the unordered list
            var left_indent = parseInt($('#topTenCarousel_ul').css('left')) - item_width;
            //make the sliding effect using jquery's anumate function '
            $('#topTenCarousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    
                //get the first list item and put it after the last list item (that's how the infinite effects is made) '
                $('#topTenCarousel_ul li:last').after($('#topTenCarousel_ul li:first')); 
                //and get the left indent to the default -210px
                $('#topTenCarousel_ul').css({'left' : '-140px'});
            }); 
        });
        //when user clicks the image for sliding left
        $('#topTenLeftScroll img').click(function(){
            var item_width = $('#topTenCarousel_ul li').outerWidth() + 10;
            /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
            var left_indent = parseInt($('#topTenCarousel_ul').css('left')) + item_width;
            $('#topTenCarousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    
            /* when sliding to left we are moving the last item before the first list item */            
            $('#topTenCarousel_ul li:first').before($('#topTenCarousel_ul li:last')); 
            /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */
            $('#topTenCarousel_ul').css({'left' : '-140px'});
            });       
        });

    $('#registermodal').jqm({
    trigger: '.becomeMemberButton',
    overlay: 30, /* 0-100 (int) : 0 is off/transparent, 100 is opaque */
    overlayClass: 'whiteOverlay'});

    $('#loginmodal').jqm({
    trigger: '.signInButton',
    overlay: 30, /* 0-100 (int) : 0 is off/transparent, 100 is opaque */
    overlayClass: 'whiteOverlay'})

  });
