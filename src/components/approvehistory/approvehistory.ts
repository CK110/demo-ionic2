import {Component, Input} from '@angular/core';

@Component({
  selector: 'approve-history',
  templateUrl: 'approvehistory.html'
})
export class ApprovehistoryComponent {

  @Input() history: any[];

  constructor() {
    console.log(this.history);
  }

}
