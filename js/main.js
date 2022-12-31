( function( $ ) {

    "use strict";
    /* Group light box gallery image */
    var lightboxgallerygroups = {};
    $( '.lightbox-group-gallery-item' ).each(function () {
        var id = $( this ).attr( 'data-group' );
        if ( ! lightboxgallerygroups[id] ) {
            lightboxgallerygroups[id] = [];
        }
        lightboxgallerygroups[id].push( this );
    });
    $.each( lightboxgallerygroups, function () {
        $( this ).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            gallery: {enabled: true}
        });
    });

    /****** Lightbox portfolio gallery ******/
    $( '.lightbox-portfolio' ).magnificPopup({
        delegate: '.gallery-link',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-fade',
        fixedContentPos: true,
        closeBtnInside: false,
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

})( jQuery );