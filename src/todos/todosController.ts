import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
  import {Todo} from "./todo";
  import { todoUserCreationParams,TodoService} from "./todoServices";
  @Route("todo")
  export class TodoController extends Controller{
    @Get("{todoId}")
    public async getUser(
        @Path() todoId: string,):Promise<Todo>{
            let todoService = new TodoService;
             return todoService.get(todoId);

        }

  }