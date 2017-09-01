import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'approve-history-content',
    template: `
      
      <ng-container *ngIf="!inProcess">
        <div style="display: flex;justify-content: space-between;">
          <div style="font-weight: 500;">{{history.taskname}} - {{history.apvsignname}}</div>
          <div style="display: flex; align-items: center;">
            {{ history.apvdate.substr(0,10)}}
          </div>
        </div>
        <div style="margin-top: 4px; display: flex;justify-content: space-between;">
          <div>{{history.apvpassed}}</div>
          <div style="display: flex; align-items: center;">
            {{history.apvdate.substr(11,19)}}
          </div>
        </div>
        <div style="border-bottom: 1px solid #e0dcdc;padding-bottom: 10px;">
          {{history.apvnote}}
        </div>
      </ng-container>

      <ng-container *ngIf="inProcess">
        <div style="display: flex;justify-content: space-between;">
          <div style="font-weight: 500;">{{history.taskname}} - {{history.apvsignname}}</div>
        </div>
        <div style="border-bottom: 1px solid #e0dcdc;padding-bottom: 10px;">
          审批中
        </div>
      </ng-container>

      
    `
})
export class ApproveContentComponent implements OnInit {

    @Input() history:any;

    @Input() inProcess:boolean=false;

    constructor() { }

    ngOnInit() { }

}
