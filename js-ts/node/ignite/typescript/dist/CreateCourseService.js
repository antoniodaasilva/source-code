"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute(data) {
        console.log(data.name, data.duration, data.educator);
    }
    executeTwo({ duration, educator, name }) {
        console.log(duration, educator, name);
    }
}
exports.default = new CreateCourseService();
