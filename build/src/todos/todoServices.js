"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mockedId",
            description: "mocked Todo",
            done: false
        };
    }
    create(todoUserCreationParams) {
        console.log("mock db call");
        return {
            id: "1",
            title: "mocked todo",
            description: "mocked todo",
            done: false
        };
    }
}
exports.TodoService = TodoService;
