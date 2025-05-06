import Input from "sap/m/Input";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace sap.btp.helloworld2ui5.controller
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        console.log("Esto es un test")
    }
    public Saludar():void{
        const input = this.byId("nameInput") as Input;
        const value = input.getValue();

        if(value.trim()){
            MessageToast.show("Saludando...")
        }
        else{
            MessageToast.show("Vacio")
        }
    }
}