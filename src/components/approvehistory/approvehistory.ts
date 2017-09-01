import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'approve-history',
  template: `
    <ion-list>
      <ion-item-divider>
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <h4>审批历史</h4>
          <ng-container *ngIf=" history.length >foldNumber" >
            <a (click)="openFold()" *ngIf="collapsed">展开 </a>
            <a (click)="openFold()" *ngIf="!collapsed">折叠 </a>
          </ng-container>
        </div>
      </ion-item-divider>
      <ion-item style="border-bottom: 0px">
        <nz-timeline>
          <ng-container *ngFor="let h of history;let i = index;let c = count;">
            <!--总数小于三-->
            <ng-container *ngIf="c <= foldNumber" >
              
              <nz-timeline-item *ngIf="i<foldNumber-1">
                <ng-template #custom>
                  <ion-icon name="ios-checkmark-circle-outline" ></ion-icon>
                </ng-template>
                <approve-history-content [history]="h"></approve-history-content>
              </nz-timeline-item>
              
              <!-- 流程未结束,最后一步正在进行中-->
              <nz-timeline-item *ngIf="i === c-1 && !isEnd " [nzColor]="'green'">
                <ng-template #custom>
                  <ion-icon name="ios-time-outline" ></ion-icon>
                </ng-template>
                <approve-history-content [history]="h" [inProcess]="true"></approve-history-content>
              </nz-timeline-item>

              <!-- 流程结束-->
              <nz-timeline-item *ngIf="i === c-1 && isEnd " [nzColor]="'red'" class="approve-history-end" >
                <ng-template #custom>
                  <ion-icon name="ios-checkmark-circle-outline" ></ion-icon>
                </ng-template>
                <approve-history-content [history]="h"></approve-history-content>
              </nz-timeline-item>
              
            </ng-container>
            

            <!--总数大于三-->
            <ng-container *ngIf="c>foldNumber" >
              <nz-timeline-item *ngIf="i<foldNumber">
                <ng-template #custom>
                  <ion-icon name="ios-checkmark-circle-outline" ></ion-icon>
                </ng-template>
                <approve-history-content [history]="h"></approve-history-content>
              </nz-timeline-item>

              <ng-container *ngIf="!collapsed">
                <nz-timeline-item *ngIf="i>=foldNumber && i < c-1 ">
                  <ng-template #custom>
                    <ion-icon name="ios-checkmark-circle-outline" ></ion-icon>
                  </ng-template>
                  <approve-history-content [history]="h"></approve-history-content>
                </nz-timeline-item>

                <!-- 流程未结束,最后一步正在进行中-->
                <nz-timeline-item *ngIf="i === c-1 && !isEnd " [nzColor]="'green'">
                  <ng-template #custom>
                    <ion-icon name="ios-time-outline" ></ion-icon>
                  </ng-template>
                  <approve-history-content [history]="h" [inProcess]="true"></approve-history-content>
                </nz-timeline-item>

                <!-- 流程结束-->
                <nz-timeline-item *ngIf="i === c-1 && isEnd " [nzColor]="'red'" class="approve-history-end" >
                  <ng-template #custom>
                    <ion-icon name="ios-checkmark-circle-outline" ></ion-icon>
                  </ng-template>
                  <approve-history-content [history]="h"></approve-history-content>
                </nz-timeline-item>
              </ng-container>

            </ng-container>
            
          </ng-container>
        
        </nz-timeline>
      </ion-item>
    </ion-list>
  `,
})
export class ApprovehistoryComponent  implements OnInit {


  @Input() history: any[]= [
    {
      "formid": "4643095917849",
      "sortno": "1",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "136433743329602",
      "taskname": "一级部门经理审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:27"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "",
      "apvsign": "",
      "apvdate": ""
    }
  ];

  @Input() flowStatus:string='0'; // 流程状态
  @Input() foldNumber:number = 3; // 超过number折叠

  collapsed:boolean= true;
  isEnd:boolean=true; // 流程已经结束

  constructor() {

  }
  ngOnInit(): void {
    if(this.flowStatus ==='0'){
      this.isEnd=false;
    }else {
      this.isEnd=true;
    }
  }
  openFold(){
    this.collapsed=!this.collapsed;
  }

}
