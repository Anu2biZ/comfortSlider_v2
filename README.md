<h4> Important bug fixes in v2</h4> 

No matter what height have your pictures. Now they display stable.
Photos wrap by .grow block. They amount depends on configure (lg : 5 - 5 photos in block)
If xs=1, indents are the same (in first version, they were defferent)
Opening modal by clicking the photo on smartphones/tablets is larger
You don't need to connect font-awesome. Plug-in will do it by itself

$('#test').comfortSlider({
'lg' : 6,
'md' : 3,
'sm' : 2,
'xs' : 1
});
