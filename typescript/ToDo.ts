//name of the class
import { v4 as uuidv4 } from 'uuid';
class ToDo
{
    //properties
    private ToDoId:any
    private  ToDoName: string;
    private  isCompleted: boolean;
    // private email: string;

    constructor(ToDoId: any ,ToDoName: string, isCompleted: boolean) {
        this.ToDoId=ToDoId;
        this.ToDoName = ToDoName;
        this.isCompleted = isCompleted;

    }
    displayDetails()
    {
        console.log(`${this.ToDoId} ${this.ToDoName}  ${this.isCompleted}`);
    }
}
let temp:any=uuidv4();
let arr:any[]=temp.split('-')
let details=new ToDo(arr[3],'eat',true);

details.displayDetails();
