import { Todo  } from "./todo";
export type todoUserCreationParams = Pick<Todo,"title" | "description">;
export class TodoService{
    public get(todoId:string):Todo {
return{
    id:todoId,
    title:"mockedId",
    description:"mocked Todo",
    done:false
}
    }
    public create(todoUserCreationParams:todoUserCreationParams):Todo
{
    console.log("mock db call");
    return{
        id:"1",
        title:"mocked todo",
        description:"mocked todo",
        done:false
    }
}
}