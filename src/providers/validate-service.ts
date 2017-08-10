import {Injectable} from "@angular/core";
import {FormGroup, ValidationErrors} from "@angular/forms";
import {ToastController} from "ionic-angular";

@Injectable()
export class ValidateService{

  constructor(public toastCtrl: ToastController){

  }

  /**
   * 校验表单
   * @param formGroup
   * @param model
   */
  checkFormBeforeSubmit(formGroup:FormGroup, model:Object):Boolean{

    Object.keys(formGroup.controls).forEach(key => {
      const controlErrors: ValidationErrors = formGroup.get(key).errors;
      if (controlErrors != null) {
        const name = model[key];
        console.log(name+"为必填");
        const vm = "为必填"
        const errorMes= name +vm;
        this.showErrorMessage(errorMes);
        return;
      }
    });

    return true;
  }

  /**
   * 获取错误的中文信息
   * @param controlErrors
   */
  getErrorName(controlErrors: ValidationErrors){

  }

  showErrorMessage(errorMes:string){
    let toast = this.toastCtrl.create({
      message: errorMes,
      position: 'middle',
      duration: 3000,
      cssClass:'toast-text-center'
    });
    toast.present();
  }


}
