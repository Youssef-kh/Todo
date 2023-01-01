import axios from 'axios';

import ITodo from '../const/todo'
class TodoService{
    private readonly urlPrefix = 'http://localhost:5000/todos';
    async create(todo:ITodo){
        try{
            return await axios.post(`${this.urlPrefix}/`,todo);
        }catch(err){
            return err;
        }
    }
    async getAll(){
        try{
            return await axios.get(`${this.urlPrefix}`);
        }catch(err){
            return err;
        }    
    }
    async updateOne(todo:ITodo){
        try{
            return await axios.put(`${this.urlPrefix}/` + todo.id ,todo);
        }catch(err){
            return err;
        }
    }
    async remove(id:number){
        try{
            return await axios.delete(`${this.urlPrefix}/` + id );
        }catch(err){
            return err;
        }
    }
}
export default new TodoService();