// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

// indexOf IE compatibility
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
         for (var i = (start || 0), j = this.length; i < j; i++) {
             if (this[i] === obj) { return i; }
         }
         return -1;
    }
}

(function() {

    /**
     * Instanciate DOM objects according to CSS selectors or specified element
    **/ 
	function DOMQuery(selectors, parent) {
		 if (!(this instanceof DOMQuery))
			return new DOMQuery(selectors, parent);
		
		if(typeof selectors =='string') {
			var root = (parent ? parent : document);
			if(this.query) {
				this.elements = this.query(selectors, root);
			}
			else {
				this.elements = root.querySelectorAll(selectors);
			}
			if(this.elements) {
				this.elements = Array.prototype.concat.apply([], this.elements);
			}
			else this.elements = [];
		} 
		else {
			this.elements = [selectors];
		}
		
		this.length = this.elements.length;
				
		return this;
	};
			
	DOMQuery.fn = DOMQuery.prototype = {
		
		debug: function() {
			console.log(this.elements);
			return this;
		},
        
        /**
         * Execute callback on dom ready (working for document, iframe, ...)
         * Otherwhise please use DOMQuery.on() method
        **/
        ready: function(callback) {
            this.each(function() {
                if (this.addEventListener) {
                    this.addEventListener("DOMContentLoaded", function(e){
                        callback.apply(this);
                        this.removeEventListener("DOMContentLoaded", arguments.callee, false );
                    });
                } 
                else if (this.attachEvent) {
                    if (this.readyState === "complete") {
                        this.detachEvent("onreadystatechange", arguments.callee);
                    }
                }
            });

        },

		/**
		 * Run through each element
		**/
		each: function(callback) {
			for(var i = 0, length = this.length; i < length; i++) {
				callback.apply(this.elements[i], [i]);
			}
			return this;
		},
		
		/**
		 * Add an event listener to each elements
		**/
		on: function(event, callback) {
			return this.each(function() {
				if(this.addEventListener) {
					this.addEventListener(event, callback, false);
				}
				else if(this.attachEvent) {
					this.attachEvent('on'+event, callback);
				}
			});
		},
		
		
	};
	
	if(!window.DOMQuery) window.DOMQuery = DOMQuery;
	if(!window.dq) window.dq = DOMQuery;
	if(!window.$) window.$ = DOMQuery;
	
})();
