(function($){
    $.toColor = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("toColor", base);
        
        base.init = function(){
            base.options = $.extend({},$.toColor.defaultOptions, options);
            
            // Put your initialization code here
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
        
        // Run initializer
        base.init();
    };
    
    $.toColor.defaultOptions = {
        color: "red"
    };
    
    $.fn.toColor = function(options){
        return this.each(function(){
            (new $.toColor(this, options));
        });
    };
    
})(jQuery);