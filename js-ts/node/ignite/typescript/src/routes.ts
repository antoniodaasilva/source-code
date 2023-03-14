import { Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(req: Request , res: Response ) {
  const {name, email, password} = req.body;

  if (!name || !email || !password) {
    return console.log("Preencha todos os campos");
    ;
  }


  CreateCourseService.execute({
      name: "NodeJS", 
      duration: 10, 
      educator:"Dani"
    });

  return res.json()
}