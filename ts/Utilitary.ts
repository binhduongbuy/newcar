﻿//Utilitary
import * as $ from 'jquery'
export class Utilitary {
    static replaceAll(str: String, find: string, replace: string) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    static startLoad() {
        $("#loading").css("display", "block");
    }
    static stopLoad() {
        $("#loading").css("display", "none");
    }
}