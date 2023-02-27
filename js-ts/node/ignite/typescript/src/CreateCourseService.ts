interface Course {
  name: string;
  duration: number;
  educator: string;
}


class CreateCourseService {
  execute(data: Course) {
    console.log(data.name, data.duration, data.educator);
  }

  executeTwo({duration, educator, name}: Course) {
    console.log(duration, educator, name);
    
  }
}

export default new CreateCourseService();