(function($) {
    
    /**
     * Update DOM elements style
    **/
    DOMQuery.fn.css = function(properties) {
        this.each(function() {            
            for(name in properties) {
                this.style[name] = properties[name];
            }
        });
    };
    
    
    /**
     * Set attribute to each elements
    **/
    DOMQuery.fn.attr = function(attribute, value) {
        if(value) {
            return this.each(function() {
                this.setAttribute(attribute, value);
            });
        }
        else {
            return this.elements[0].getAttribute(attribute);   
        }
    };
    
    /**
     * Check if a least one element has the class
     * Equivalent to this.classList.contains(className);
    **/
    DOMQuery.fn.hasClass = function(className) {
        for(var i = 0, length = this.length; i < length; i++) {   
            var classes = (this.elements[i].className.length ? this.elements[i].className.split(/\s+/) : []);
            if(classes.indexOf(className) >= 0)
                return true;
        }
        
        return false;

    }
    
    /**
     * Add a class to each elements
     * Equivalent to : this.classList.add(className);
    **/
    DOMQuery.fn.addClass = function(className){
        return this.each(function() {
            var classes = (this.className.length ? this.className.split(/\s+/) : []);
            if(classes.indexOf(className) == -1) {
                classes.push(className);
            }
            this.className = classes.join(' ');
        });
    };

    /**
     * Remove a class from each elements
     * Equivalent to : this.classList.remove(className)
    **/
    DOMQuery.fn.removeClass = function(className){
        return this.each(function() {
            var classes = (this.className.length ? this.className.split(/\s+/) : []);
            if((position = classes.indexOf(className)) != -1) {
                classes.remove(position);
            }
            this.className = classes.join(' ');
        });
    };

    /**
     * Add / remove class from each elements
     * Equivalent to : this.classList.toggle(className)
    **/
    DOMQuery.fn.toggleClass = function(className) {
        return this.each(function() {
            var classes = (this.className.length ? this.className.split(/\s+/) : []);
            if((position = classes.indexOf(className)) != -1) {
                classes.remove(position);
                console.log('remove class : '+this.className);
            }
            else {
                classes.push(className);
                console.log('add class : '+this.className);
            }
            this.className = classes.join(' ');
        });
    };

})(DOMQuery);