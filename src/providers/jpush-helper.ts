import { Injectable } from '@angular/core';
import {JPushPlugin} from "../typings/modules/jpush/index";

@Injectable()
export class JpushHelper {

  constructor(private jPush:JPushPlugin) {
  }


}
