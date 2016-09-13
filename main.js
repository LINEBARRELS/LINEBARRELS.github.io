paper = {
    pages:[],
    border:[],
    timer:null,
    cur:0,
    height:null,
    init:function(){
 
     this.height = document.querySelector('.part').offsetHeight;
     document.querySelector('.main').onmousewheel = function(e){
     e.preventDefault();
     clearTimeout(this.timer);
     this.timer=setTimeout(function(){
     switch(e.wheelDelta){
     case 120:
             if(this.cur!=0){
                this.cur -= 1;
             }
             $('.main').css('transform','translateY(-'+this.cur*this.height+'px)');
             console.log('上');
             if (Array.prototype.slice.call(this.pages[this.cur].classList).indexOf('hid')!=-1) {
            this.pages[this.cur].classList.remove('hid')
        }
            break;
     case -120:
              this.cur += 1;
              console.log(this.cur);
              $('.main').css('transform','translateY(-'+this.cur*this.height+'px)');
              console.log('下');
              if (Array.prototype.slice.call(this.pages[this.cur].classList).indexOf('hid')!=-1) {
            this.pages[this.cur].classList.remove('hid')
             }
             break;
        }
        
      }.bind(this), 500);

     }.bind(this)
  
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