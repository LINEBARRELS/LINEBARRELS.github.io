paper = {
    pages:[],
    border:[],
    timer:null,
    cur:0,
    height:null,
    inited:null,
    dealing:function(side,option){
     switch(side){
     case 1:{ 
             console.log(this.cur);
             if(this.cur!=0){
                this.cur -= option;
             }
             $('.main').css('transform','translateY(-'+this.cur*this.height+'px)');
             console.log('上');
            if (Array.prototype.slice.call(this.pages[this.cur].classList).indexOf('hid')!=-1) {
            this.pages[this.cur].classList.remove('hid')
            }
            if(this.inited[this.cur]==='none'&&this.pages[this.cur].init){
                this.pages[this.cur].init();
            }
            break;
            }
     case 2:{
            console.log(this.cur);
              if(this.cur!=this.pages.length-1){
                this.cur += option;
              }
              
            
              $('.main').css('transform','translateY(-'+this.cur*this.height+'px)');
              console.log('下');
              if (Array.prototype.slice.call(this.pages[this.cur].classList).indexOf('hid')!=-1) {
              this.pages[this.cur].classList.remove('hid')
             }
             if(this.inited[this.cur]==='none'&&this.pages[this.cur].init){
                this.pages[this.cur].init();
            }
             break;
            }
        }

    },
    init:function(){
 
     this.height = document.querySelector('.part').offsetHeight ;
     document.querySelector('.main').onmousewheel = function(e){
     e.preventDefault();
     clearTimeout(this.timer);
     this.timer=setTimeout(function(){
        switch(e.wheelDelta){
            case 120:this.dealing(1,1);
                     break;
            case -120:this.dealing(2,1);
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

    paper.pages[0].init = function(){
    console.log('第一页初始化');
    paper.inited[0]='complete';
    }

    paper.pages[1].init = function(){
        console.log('第二页初始化');
        paper.inited[1]='complete';
    }
    
    paper.pages[2].init = function(){
        console.log('第三页初始化');
             paper.inited[2]='complete';
    }

     this.inited = Array(this.pages.length).fill('none');

     

     $('.part').css('height', 'value');
 
     setTimeout(function(){this.pages[0].classList.remove('hid');}.bind(this),500);
     this.pages[0].init()
     
    }//init
}





$(document).ready(function() {
	paper.init();
});