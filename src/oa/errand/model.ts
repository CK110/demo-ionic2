/**
 * 与后端协定好
 */
export class Errand {
  addUser:string;
  number:string
}

/**
 * 用作统一form表单的label
 * @type {{addUser: string; number: string}}
 */
export const  ErrandModel= {
  addUser:"派遣人",
  number:"项目编号",
};

