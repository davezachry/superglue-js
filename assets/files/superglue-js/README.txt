===================
SuperGlue.js - V1.0
===================

Because everybody needs an element to stay put now and again.

=============================================================

SuperGlue.js is a handy little jQuery plug-in giving you the ability "glue down" an element relative to another element's position.

=============================================================

Quick Start
===========
1) Grab the latest version of jQuery and SuperGlue.js (http://davidzachry.com/supergluejs/).
2) Include both scripts just above the close of the closing body tag.
3) Add the elements you want to "glue down" first on the page 4) with style of display: "none".
5) Call SuperGlue.js on the element you want to position, passing in the "parent" element.

Sample Code
===========
<!-- ELEMENTS -->
<div id="child-element"></div>
........................
... Page HTML Markup ...
........................
<!-- SCRIPTS -->
<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/jquery.superglue.min.js"></script>
<script>
$('#child-element').superglue($('#parent-element'));
</script>

See Sample Page
===============
Check out the sample page to see SuperGlue.js in action!

http://davidzachry.com/supergluejs/sample.html


Parameters
==========
SuperGlue.js accecpts two paramenters, parent and options.

superglue(parent, {options});

parent (required) - The object refernce for the parent element to base positioning.
options (optional)
topOffset (default: 0) - The number of pixels to offset from the starting Y point. Positive numbers move down and negative numbers move up.
leftOffset (default: 0) - The number of pixels to offset from the starting X point. Positive numbers move right and negative numbers move left.
startingPoint (default: 'topleft') - The starting point relative to the parent element. Possible values include:
'topleft'
'topright'
'bottomleft'
'bottomright'
positionType (default: 'absolute') - Position type designation. Possible values include:
'absolute'
'relative'


Things to Note and Gotchas
==========================
- Works with or without 'box-sizing: border-box'.
- Using 'bottomleft' or 'bottomright' with a position of 'fixed' on elements where the height of the parent element pushes below the viewable screen do not work.
- To make it fluid-responsive, feel free to add the element call to a $(window).on('resize').
- Not built for IE 6.

Permissions and What Not
========================
SuperGlue.js is licensed under the MIT License.

Who's Behind SuperGlue.js
=========================
SuperGlue.js was developed by me (David Zachry), a desginer/developer living and working in Memphis, TN.

You can find me on Twitter at @davezachry