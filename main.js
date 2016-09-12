paper = {
    pages:[],
    border:[],
    init:function(){

    document.body.onmousewheel = function(e){
    e.preventDefault();
    switch(e.wheelDelta){
    case 120:
             $('body').animate({scrollTop: document.body.scrollTop - 685}, 3000)
            break;
    case -120:$('body').animate({scrollTop: document.body.scrollTop + 685}, 3000)
            break;
       }
    }
 
    $('.part').each(function(index, el) {
    	this.pages.push(el)
    }.bind(this));
    
    for (let i = 1; i < this.pages.length; i++) {
    	this.border.push(this.pages[i].offsetTop)
    };

    setTimeout(function(){this.pages[0].classList.remove('hid');}.bind(this),500);
    
    }//init
}





$(document).ready(function() {
	paper.init();
});