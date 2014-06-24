# DOMQuery, a light jQuery like

There are a lot of libraries that bring everything that front-end developers could need. But there are differences between have and need something.
That's why DOMQuery exists. It brings a core usage and can be extended as long as humans will have a brain. But it core contains only basic features such as :

- Running throught DOM elements in a line
- Adding event listeners


## Usage
It can be used as easely as jQuery is, like this :

    $('#myID .myClass').each(function() {
        // Tag name of each elements that have class "myClass" in "myID"
        console.log(this.tagName); 
        ...
    });

The other default method that can be used is the .on() method :

    $('form').on('submit', function(e) {
        e.preventDefault(); // Stop form submit
    });

## Compatibility
Because I thing that old browsers are ... well ... too old, this little framework is compatible as of browsers supports DOM Level 3 and is particularly based on element.querySelectorAll(...) method.

This means that compatibility starts with IE8+

For those who would have it compatible with older versions, the CSS query can be extended like this :

    DOMQuery.fn.query = function(selectors, parent) {
        ...
        return HTMLElements;
    }
    
    
## Licence
I usually use the BSD licence for that kind of projects. However, because this is a starting project and not finalized release, It's under the WTFPL for now :

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Everyone is permitted to copy and distribute verbatim or modified
copies of this library, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
