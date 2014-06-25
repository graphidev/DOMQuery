(function($) {
    
    /**
     * Update DOM elements HTML content
    **/
    DOMQuery.fn.text = function(value) {
        if(value) {
            return this.each(function() {
                    if(this.textContent && (typeof this.textContent != "undefined")) {
                        this.textContent = value;
                    }
                    else if(this.innerText) {
                        this.innerText = value; 
                    }
                    else {
                        this.innerHTML = value;
                    }
            });
        }
        else {
            return this.elements[0].innerHTML;   
        }
    };
    
    /**
     * Update DOM elements value
    **/
    DOMQuery.fn.value = function(value) {
        if(value) {
            return this.each(function() {
                this.value = value;
            });
        }
        else {
            return this.elements[0].value;   
        }
    };
    
    /**
     * Remove DOM elements HTML content
    **/
    DOMQuery.fn.remove = function(value) {
        this.each(function() {
            this.parentNode.removeChild(this);
        });
    };
    
})(DOMQuery);