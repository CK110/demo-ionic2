import { Http } from '@angular/http';
import { Component,ViewChild ,ViewChildren} from '@angular/core';
import { NavController,Content } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  searchQuery: string = '';
  indexes: Array<string>;
  contacts: any[];

  @ViewChild(Content) content: Content;
  @ViewChildren('ContactGoup') contactGoup;

  constructor(public navCtrl: NavController,private http:Http) {
    this.getContracts('');

  }

  touchstart(e:Event){
    this.alphabetMove(e, false);
  }

  touchmove(e:Event){
    this.alphabetMove(e, false);
  }

  touchend(e:Event){
    this.alphabetMove(e, true);
    document.getElementById('indexs-title').style.display = 'none';
  }

  alphabetMove(e, move) {
    var pPositionY = e.changedTouches[0].clientY
    var currentItem, targetItem;
    var d = document;
    currentItem = d.elementFromPoint(d.body.clientWidth - 1, pPositionY);
    if (!currentItem || currentItem.className.indexOf('index-bar') < 0) return;
    targetItem = document.getElementById(currentItem.innerText);

    document.getElementById('indexs-title').style.display = 'block'
    document.getElementById('indexs-title').innerText = currentItem.innerText;

    if (move) {
      if(currentItem.innerText === '+'){
        this.content.scrollToTop(300);
      }else if(currentItem.innerText === '#'){
        this.content.scrollToBottom(300);
      }else {
        const index = this.indexes.join('').indexOf(currentItem.innerText);
        this.content.scrollTo(0, this.contactGoup._results[index-1].nativeElement.offsetTop, 300);
      }
    }
  }

  getContracts(ev: any){
    if(ev){

      let val = ev.target.value;
      console.log(`seachbar value >> ${val}`);

      // let param = {
      // };
    }


    this.http.get('http://localhost:3000/api/getContacts').subscribe((res)=>{
      this.indexes= JSON.parse(res.text()).indexes;
      this.contacts= JSON.parse(res.text()).contacts;

    })

  }

}
