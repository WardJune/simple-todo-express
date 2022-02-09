import { Request } from "express";
import Todo from "../model/Todo";

class TodoService {
  credential: {
    id: number;
  };
  body: Request["body"];
  params: Request["params"];

  constructor(req: Request) {
    this.credential = req.app.locals.credential;
    this.body = req.body;
    this.params = req.params;
  }

  //! index
  getAll = async () => {
    const todos = await Todo.find({ user_id: this.credential.id });

    return todos;
  };

  //! create
  store = async () => {
    const { description } = this.body;
    const todo = await Todo.create({
      user_id: this.credential.id,
      description,
    });

    return todo;
  };

  //! show
  getOne = async () => {
    const { id: _id } = this.params;
    const todo = await Todo.findOne({
      user_id: this.credential.id,
      _id,
    });

    return todo;
  };

  //! update
  update = async () => {
    const { id: _id } = this.params;
    const { description } = this.body;

    const todo = await Todo.findOneAndUpdate(
      { user_id: this.credential.id, _id },
      { $set: { description } }
    );

    return todo;
  };

  //! delete
  delete = async () => {
    const { id: _id } = this.params;

    const todo = await Todo.findOneAndDelete({ _id });

    return todo;
  };
}

export default TodoService;
