import {Injectable} from "@angular/core";
import {FormGroup, ValidationErrors} from "@angular/forms";
import {ToastController} from "ionic-angular";

@Injectable()
export class ValidateService{

  constructor(public toastCtrl: ToastController){

  }

  /**
   * 校验表单,按顺序指出第一个验证不通过
   * @param formGroup
   * @param model
   */
  checkFormBeforeSubmit(formGroup:FormGroup, model:Object):boolean{
    let result:boolean= true;
    for (var key in formGroup.controls) {
      const controlErrors: ValidationErrors = formGroup.get(key).errors;
      if (controlErrors != null) {
        this.showErrorMessage( model[key] + this.getErrorInfo(controlErrors));
        result= false;
        break;
      }
    }
    return result;
  }

  /**
   * 获取错误的中文信息
   * @param controlErrors
   */
  getErrorInfo(controlErrors: ValidationErrors):string{
    console.dir(controlErrors);

    let errorInfo:string='';
    Object.keys(controlErrors).forEach((key)=>{
      if( key ==="required" ){
        errorInfo = errorInfo+"必填"
      }
      if( key ==="maxlength"){
        errorInfo = `${errorInfo}最大长度为${controlErrors[key].requiredLength}`
      }
      if(true){

      }
    })

    return errorInfo;

  }

  showErrorMessage(errorMes:string){
    let toast = this.toastCtrl.create({
      message: errorMes,
      position: 'middle',
      duration: 1000,
      cssClass:'toast-text-center'
    });
    toast.present();
  }


}
