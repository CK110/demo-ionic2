import { Component } from '@angular/core';

/**
 * Generated class for the RollnoticeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'zj-rollnotice',
  templateUrl: 'rollnotice.html'
})
export class RollnoticeComponent {

  text: string;

  styles:any = {
    transform: 0,
    transitionDuration: 0
  }

  constructor() {
    this.text = 'ATM管理系统ZJ_ATM_1719已经上线';
  }

  navigate(){
    console.log("公告跳转");
  }

  setTranslate(speed, translate) {
    this.styles.transitionDuration = speed + 'ms';
    this.styles.transform = 'translate3d(0, ' + translate + 'px, 0)';
  }
}
