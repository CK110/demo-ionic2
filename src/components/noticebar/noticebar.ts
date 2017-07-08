import {AfterViewChecked, AfterViewInit, Component, ElementRef, NgZone, ViewChild} from '@angular/core';

/**
 * Generated class for the NoticebarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'notice-bar',
  templateUrl: 'noticebar.html'
})
export class NoticebarComponent implements AfterViewInit{


  @ViewChild('content') content : ElementRef;
  @ViewChild('notice') notice: ElementRef;

  text: string;



  //滚动宽度
  animatedWidth:number;

  styles:string=`
      transform: translate3d(-100px, 0, 0);
      transitionDuration: 4ms
    `

  right:number= 0;
  transition:number=0;

  constructor(public zone: NgZone) {
    this.text = 'ATM管理系统ZJ_ATM_1719已经上线ATM管ATM管理系统ZJ_ATM_1719已经上线ATM管ATM管理系统ZJ_ATM_1719已经上线ATM管';



    // setInterval(()=>{
    //   var content = document.getElementById('content').offsetWidth;
    //   var notice = document.getElementById('notice').offsetWidth;
    //   var offset = notice-content
    //   if(offset >0){
    //     setTimeout(()=>{
    //       this.right = offset;
    //       this.transition =  this.right * 45;
    //
    //
    //       setInterval(()=>{
    //         if(this.right>0){
    //           console.log(this.right);
    //           this.right =0;
    //         }
    //       },this.transition+1000)
    //
    //     },800)
    //   }
    //
    //
    // },250)




  }

  navigate(){
    console.log('navigate...');
  }


  ngAfterViewInit(): void {
    this.animatedWidth = this.notice.nativeElement.offsetWidth - this.content.nativeElement.offsetWidth;
    this.right = this.animatedWidth;
    this.transition =  this.right * 45;

    console.log(this.animatedWidth);


    setInterval(()=>{
      if(this.right !=0){
        this.right = 0;
        this.transition = 0;
        console.log('xx');
      }
    },this.transition+1000)

  }

  ngAfterViewChecked(): void {


    // setInterval( ()=>{
    //   setTimeout(() => {
    //     if(this.i> this.animatedWidth){
    //       this.i= this.i-10;
    //     }else{
    //       this.i = 0
    //     }
    //     this.translate3d= `translate3d( ${this.i}px, 0, 0)`;
    //
    //     console.log(this.translate3d);
    //   }, 1 / this.fps * 1000)
    //
    // },1000)

    // if(){
    //
    // }

    // if(this.right ==0){
    //   this.animatedWidth = this.notice.nativeElement.offsetWidth - this.content.nativeElement.offsetWidth;
    //   this.right = this.animatedWidth;
    //   this.transition =  this.right * 45;
    // }

  }



}
