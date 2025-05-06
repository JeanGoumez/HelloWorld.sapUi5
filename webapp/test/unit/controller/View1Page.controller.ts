/*global QUnit*/
import Controller from "sap/btp/helloworld2ui5/controller/View1.controller";

QUnit.module("View1 Controller");

QUnit.test("I should test the View1 controller", function (assert: Assert) {
	const oAppController = new Controller("View1");
	oAppController.onInit();
	assert.ok(oAppController);
});