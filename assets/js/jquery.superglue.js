/*
    SuperGlue.js 1.0
    Copyright (c) 2013, David Zachry, http://davidzachry.com + http://creativeinferno.com
*/
(function ($) {
    $.fn.superglue = function(parent, options) {
    	// DEFAULT SETTINGS
		var settings = $.extend({
		    topOffset: 0,
		    leftOffset: 0,
            startingPoint: 'topleft',
            positionType: 'absolute'
		}, options);
    	// INIT ELEMENT FOR POSITIONING
        child = this;
        child.css('position', settings.positionType);
        child.css('display', 'block');
        child.css('z-index', '1');
        // GET CHILD PADDING
        childPadding = new Object();
        childPadding.top = Number(child.css('padding-top').replace("px", ""));
        childPadding.right = Number(child.css('padding-right').replace("px", ""));
        childPadding.bottom = Number(child.css('padding-bottom').replace("px", ""));
        childPadding.left = Number(child.css('padding-left').replace("px", ""));
    	// GET PARENT TOP AND LEFT
    	parentOffset = parent.offset();
        // GET PARENT PADDING
        parentPadding = new Object();
        parentPadding.top = Number(parent.css('padding-top').replace("px", ""));
        parentPadding.right = Number(parent.css('padding-right').replace("px", ""));
        parentPadding.bottom = Number(parent.css('padding-bottom').replace("px", ""));
        parentPadding.left = Number(parent.css('padding-left').replace("px", ""));
        // DETERMINE NEW TOP AND LEFT
        switch(settings.startingPoint) {
            case 'topleft':
                newTop = parentOffset.top + settings.topOffset;
                if (child.css('box-sizing') != 'border-box' && settings.topOffset < 0) {
                   newTop = newTop - (childPadding.top + childPadding.bottom);  
                }
                newLeft = parentOffset.left + settings.leftOffset;
                if (child.css('box-sizing') != 'border-box' && settings.leftOffset < 0) {
                   newLeft = newLeft - (childPadding.left + childPadding.right); 
                }
                break;
            case 'topright':
                newTop = parentOffset.top + settings.topOffset;
                if (child.css('box-sizing') != 'border-box' && settings.topOffset < 0) {
                   newTop = newTop - (childPadding.top + childPadding.bottom);  
                }
                newLeft = ((parentOffset.left + parent.width()) + settings.leftOffset);
                newLeft = newLeft + (parentPadding.left + parentPadding.right); 
                break;
            case 'bottomleft':
                newTop = (parentOffset.top + parent.height()) + settings.topOffset;
                newTop = newTop + (parentPadding.top + parentPadding.bottom); 
                newLeft = parentOffset.left + settings.leftOffset;
                if (child.css('box-sizing') != 'border-box' && settings.leftOffset < 0) {
                   newLeft = newLeft - (childPadding.left + childPadding.right); 
                }
                break;
            case 'bottomright':
                newTop = (parentOffset.top + parent.height()) + settings.topOffset;
                newTop = newTop + (parentPadding.top + parentPadding.bottom); 
                newLeft = (parentOffset.left + parent.width()) + settings.leftOffset;
                newLeft = newLeft + (parentPadding.left + parentPadding.right); 
                break;               
            default:
                newTop = parentOffset.top + settings.topOffset;
                newLeft = parentOffset.left + settings.leftOffset;
        }
        // APPLY NEW TOP AND LEFT
        child.css({top: newTop, left: newLeft});
        // MAKE child CHAINABLE
        return child;
    };
}( jQuery));