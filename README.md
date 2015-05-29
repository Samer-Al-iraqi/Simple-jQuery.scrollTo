# Simple-jQuery.scrollTo
Really, really simple jQuery.scrollTo function. 10 lines of code

Install:
--------
Include the code after jQuery is loaded.

## Usage:
### As jQuery utility:
```javascript
$.scrollTo(to, duration, func);
```

### As extension to jQuery prototype:
```javascript
$('selector').scrollTo(duration, func);
```

### Arguments:
#### to
Can be empty, number of pixels, `'end'` string,  jQuery selector or DOM element. Not needed in the second form.

#### duration
can be empty, `0` or duration in ms. forwarded directly to [jQuery .animate() ](http://api.jquery.com/animate/).

#### func
A function to be executed at end of animation. forwarded directly to [jQuery .animate() ](http://api.jquery.com/animate/).



## Examples:
```javascript
$.scrollTo(); // Scroll to document head.
$.scrollTo('#post'); // Scroll to element with '#post' jQuery selector.
$.scrollTo('end', 0); // Special value 'end' cause to scroll to document bottom. Duration 0 for instant scrolling.
$.scrollTo(e); // Scroll to the DOM element e;
$('#posts').scrollTo(); // Scroll to the first element of $('$posts')
$('#posts').scrollTo(2000); // Scroll to the first element of $('$posts').Scroll duratoin is 2000 ms
```


