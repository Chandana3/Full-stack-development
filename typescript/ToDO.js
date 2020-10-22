"use strict";
exports.__esModule = true;
//name of the class
var uuid_1 = require("uuid");
var ToDo = /** @class */ (function () {
    // private email: string;
    function ToDo(ToDoId, ToDoName, isCompleted) {
        this.ToDoId = ToDoId;
        this.ToDoName = ToDoName;
        this.isCompleted = isCompleted;
    }
    ToDo.prototype.displayDetails = function () {
        console.log(this.ToDoId + " " + this.ToDoName + "  " + this.isCompleted);
    };
    return ToDo;
}());
var temp = uuid_1.v4();
var arr = temp.split('-');
var details = new ToDo(arr[3], 'eat', true);
details.displayDetails();
