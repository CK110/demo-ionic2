/**
 * 与后端协定好
 */
export class Errand {
  dispatcher:string;
  projectId :string;
  departPlace:string;
  arrivePlace:string;
  departDate:string;
  days: string;
  reason:string
}

/**
 * 用作统一form表单的label
 * @type {{addUser: string; number: string}}
 */
export const  Form_Label= {
  dispatcher:"派遣人",
  projectId:"项目编号",
  departPlace:"出发地",
  arrivePlace:"目的地",
  departDate:"预计出发日期",
  days:"预计出差天数",
  reason:"出差事由"
};

