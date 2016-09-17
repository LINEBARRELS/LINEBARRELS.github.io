var paper = {
    pages:[],
    border:[],
    timer:null,
    cur:0,
    height:null,
    inited:[],
    dealing:function(side,option){
     switch(side){
     case 1:{ 
             // console.log(this.cur);
             if(this.cur!=0){
                this.cur -= option;
             }
             $('.main').css('transform','translateY(-'+this.cur*this.height+'px)');
             // console.log('上');
            if ($(this.pages[this.cur]).hasClass('hid')) {
              $(this.pages[this.cur]).removeClass('hid')
            }
            if(this.inited[this.cur]==='none'&&this.pages[this.cur].init){
                this.pages[this.cur].init();
            }
            break;
      }
      case 2:{
              // console.log(this.cur);
              if(this.cur!=this.pages.length-1){
                this.cur += option;
              }
              
            
              $('.main').css('transform','translateY(-'+this.cur*this.height+'px)');
              // console.log('下');
              if ($(this.pages[this.cur]).hasClass('hid')) {
              $(this.pages[this.cur]).removeClass('hid')
             }
             if(this.inited[this.cur]==='none'&&this.pages[this.cur].init){
                this.pages[this.cur].init();
            }
             break;
      }
      case 3:{
        $('.main').css('transform','translateY(-'+0+'px)');
         this.cur=0;
     }
    }

    },
    dealwheel:function() {
        // body...
        // console.log(this.get(0).offsetHeight);
        if (navigator.userAgent.indexOf("Firefox")==-1) {
            console.log('?');
            document.querySelector('.main').onmousewheel=function(e){
            e=e||window.event;
            e.preventDefault();
            
             clearTimeout(paper.timer);
             paper.timer=setTimeout(function(){
             switch(e.wheelDelta){
             case 120:paper.dealing(1,1);
                    break;
             case -120:paper.dealing(2,1);
                    break;
             } 
              }, 500);
            
         }
          
        }//
        else {
            console.log('!');
           document.querySelector('.main').addEventListener("DOMMouseScroll",function(e){
             e.preventDefault();
             console.log(e.detail);
             clearTimeout(paper.timer);
             paper.timer=setTimeout(function(){
             switch(e.detail){
             case -4:paper.dealing(1,1);
                    break;
             case 4:paper.dealing(2,1);
                    break;
             } 
              }, 500);
            
           })
        }//
    },
    init:function(){
 
     this.height = document.querySelector('.part').offsetHeight ;
     // document.querySelector('.main').onmousewheel = function(e){
     // e.preventDefault();
     // var de =e.wheelDelta||event.detail;
     // clearTimeout(this.timer);
     // this.timer=setTimeout(function(){
     //    switch(de){
     //        case 120:this.dealing(1,1);
     //                 break;
     //        case -120:this.dealing(2,1);
     //                break;
     //    }
        
     //  }.bind(this), 500);

     // }.bind(this)

     this.dealwheel();

      $('.show').on('click', function(event) {
         event.preventDefault();
         $('.nali').toggleClass('on');
         // console.log('heirenwenhao');
         alert('111111')
      });
  
      $('.part').each(function(index, el) {
     	this.pages.push(el)
     }.bind(this));

      // $('.main').css('height', this.pages.length+'00%');
     
      for (let i = 1; i < this.pages.length; i++) {
     	this.border.push(this.pages[i].offsetTop)
     };

     paper.pages[0].init = function(){
    
     paper.inited[0]='complete';
     }

     paper.pages[1].init = function(){
        
        setTimeout(function(){
        $('.unit').addClass('tranX');
        setTimeout(function(){
            $('.unit:eq(0)').html('<p>熟悉各种常用标签</p><p>了解h5新增api</p>')
            $('.unit:eq(1)').html('<p>熟悉基本的网页布局</p><p>熟悉css3动效</p>')
            $('.unit:eq(2)').html('<p>熟练掌握基本语法</p><p>了解es6新增功能</p>')
            $('.unit:eq(3)').html('<p>了解http,fs等模块</p><p>了解express框架</p>')
            $('.unit:eq(4)').html('<p>了解各种基本的算法和数据结构</p><p>理解前后端交互</p><p><a href=\'https://github.com/LINEBARRELS/Test\'>练习作品</p><p>NWjs+Nedb+React的本地单页应用</p>')
        }, 700);
        
        }, 2000);
        

        paper.inited[1]='complete';
     }
    
     paper.pages[2].init = function(){
        console.log('第三页初始化');
             paper.inited[2]='complete';
     }

     // this.inited = Array(this.pages.length).fill('none');

     for (let i = 0; i < this.pages.length; i++) {
         this.inited.push('none')
     };

     $(window).on('resize',  function(event) {
         event.preventDefault();
         paper.height=document.querySelector('.part').offsetHeight;
         paper.dealing(3)
        // console.log(event);
     });

     // document.querySelector('.main').addEventListener('touchmove', function (event) { event.preventDefault(); });
     // document.ontouchstart=function(event){
     // event.preventDefault();
     // }

     // $('.part').css('height', 'value');
     $('.l').each(function(index, el) {
         el.addEventListener('click',function(){
            var d =paper.cur-index
            if(d<0){
                paper.dealing(2,-d)
            }else 
            if(d>0){
                paper.dealing(1,d)
            }
         })
     });
 
     setTimeout(function(){$(this.pages[this.cur]).removeClass('hid');}.bind(this),500);
     this.pages[0].init()
     alert('oooo')
    }//init
}


// $.extend({
    
// });



$(document).ready(function() {
    try{
	paper.init();
   }catch(e){
    alert(e)
   }  
});