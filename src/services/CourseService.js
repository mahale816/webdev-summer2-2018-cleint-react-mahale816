let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/course';
class CourseService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

  findCourseById(courseId) {
    return fetch(COURSE_API_URL + "/" + courseId)
      .then(function(response){
        return response.json();
      });
  }

  deleteCourse(courseId) {
    return fetch(COURSE_API_URL + '/' + courseId, {
      method: 'delete'
    })
    .then(function(response){
      return response;
    });
  }
  createCourse(course) {
    return fetch(COURSE_API_URL, {
      method: 'post',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function(response){
        return response.json();
      });
  }

  updateCourse(courseId, course)
  {
    return fetch(COURSE_API_URL + '/' + courseId, {
      body:JSON.stringify(course),
        headers:{
        'Content-Type':'application/json'
        },
        method: 'PUT'
    }).then(function (response) {
      return response.json();
    })
  }

  findAllCourses() {
    return fetch(COURSE_API_URL)
      .then(function(response){
        return response.json();
      });
  }

}
export default CourseService;