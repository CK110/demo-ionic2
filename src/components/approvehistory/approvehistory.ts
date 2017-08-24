import {Component, Input} from '@angular/core';

@Component({
  selector: 'approve-history',
  templateUrl: 'approvehistory.html'
})
export class ApprovehistoryComponent {

  @Input() history: any[]= [
    {
      "formid": "4643095917849",
      "sortno": "1",
      "apvsignname": "杨锐",
      "apvnote": "111",
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
      "apvnote": "经理或部门总监审批",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    }
  ];

  @Input() flowStatus:string='0'; // 流程状态

  constructor() {
  }

}
