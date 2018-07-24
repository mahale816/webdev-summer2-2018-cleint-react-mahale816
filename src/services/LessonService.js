const API_URL_LESSON = "http://localhost:8080/api/course/CID/module/MID/lesson";
const API_URL = "http://localhost:8080/api";

let _singleton = Symbol();
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(API_URL_LESSON.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(API_URL_LESSON.replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteLesson(lessonId) {
        return fetch(API_URL + '/lesson/' + lessonId, {
            method: 'DELETE'
        })
    }

    updateLesson(lessonId, lesson) {
        return fetch(API_URL + '/lesson/' + lessonId,
            {
                body: JSON.stringify(lesson),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            }).then(function (response) {
            return response.json();
        })
    }

}