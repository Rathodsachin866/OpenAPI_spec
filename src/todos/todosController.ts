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
import {Todo} from "./todo"
import { TodoCreationParams, TodoService } from "./todoService";

@Route("todo")
/**
 * this is the controller for creating todos
 */
export class TodoController extends Controller {
    @Get("{todoId}")
    public async getTodo(
        todoId: string
    ): Promise<Todo> {
        let todoService = new TodoService();
        return todoService.get(todoId)
    }

    
}

