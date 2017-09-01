import {
  AfterViewChecked,
  ChangeDetectorRef, Component, ElementRef, HostListener, Input, NgZone, QueryList, Renderer2, ViewChild,
  ViewChildren
} from '@angular/core';
import {Content} from "ionic-angular";

@Component({
  selector: 'index-list',
  templateUrl: 'index-list.html'
})
export class IndexListComponent implements AfterViewChecked{

  _items:any[] = [];

  @Input()
  set items(val:any[]){
    if(val)
      this._items = val;
  }

  get items(){
    return this._items;
  }
    // :any[] = [];

  @ViewChildren('itemGroup') itemGroup: QueryList<ElementRef>;
  @ViewChild('scrollContent') scrollContent: ElementRef;
  @ViewChild('content') content: Content;

  showModal: boolean = false;
  currentIndicator:string='A';
  indexes: Array<string> =['A','B','C','D','E','F','M','H'];
  navOffsetX: 0;
  offsetTops: Array<number> = [];
  indicatorTime:any = null;
  flag:boolean=true;

  constructor(public ref: ChangeDetectorRef,public ngZone:NgZone) {

  }

  //[0, 517, 665, 1710, 2069, 2427, 2786, 3145]
  ngAfterViewChecked(){
    if(this.flag && this.items.length>0){
      this.offsetTops = this.itemGroup.toArray().map(ele => {
        return ele.nativeElement.offsetTop;
      })
      this.flag=false;
    }

  }

  onScroll(e) {
    e.preventDefault();
    const scrollTopOffsetTop = this.scrollContent.nativeElement.scrollTop;
    this.offsetTops.forEach((v,i)=>{
      if(scrollTopOffsetTop>=v){
        this.currentIndicator = this.indexes[i];
      }
    })
  }

  touchstart(e){
    this.navOffsetX = e.changedTouches[0].clientX;
    this.scrollList(e.changedTouches[0].clientY);
  }

  touchmove(e){
    e.preventDefault();
    this.scrollList(e.changedTouches[0].clientY);
  }

  touchend(e){
    this.indicatorTime = setTimeout(() => {
      this.showModal = false;
      this.currentIndicator = '';
    }, 500);
  }

  scrollList(y){

    let currentItem = document.elementFromPoint(this.navOffsetX, y);
    if (!currentItem || !currentItem.classList.contains('index-bar')) {
      return;
    }
    this.currentIndicator = currentItem['innerText'];
    const index = this.indexes.indexOf(this.currentIndicator);

    this.scrollContent.nativeElement.scrollTop = this.offsetTops[index];


    this.showModal = true;
    if (this.indicatorTime) {
      clearTimeout(this.indicatorTime);
    }
  }

}
