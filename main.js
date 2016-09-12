paper = {
    pages:[],
    border:[],
    timer:null,
    init:function(){

    document.body.onmousewheel = function(e){
    e.preventDefault();
    clearTimeout(this.timer);
    this.timer=setTimeout(function(){
    switch(e.wheelDelta){
    case 120:
             $('body').animate({scrollTop: document.body.scrollTop - 685}, 500)
             console.log('上');
            break;
    case -120:$('body').animate({scrollTop: document.body.scrollTop + 685}, 500)
             console.log('下');
            break;
       }
    }, 500);
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