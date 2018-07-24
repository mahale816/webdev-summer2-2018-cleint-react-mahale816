const API_URL_TOPIC = "http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic";
const API_URL = "http://localhost:8080/api/";

let _singleton = Symbol();
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    createTopic(courseId,moduleId,lessonId,topic)
    {
        return fetch(API_URL_TOPIC.replace('CID', courseId)
                .replace('MID',moduleId)
                .replace('LID',lessonId),
            {   body: JSON.stringify(topic),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }


    findAllTopicsForLesson(courseId,moduleId,lessonId)
    {
        return fetch(API_URL_TOPIC.replace('CID', courseId)
            .replace('MID',moduleId)
            .replace('LID',lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteTopic(topicId) {
        return fetch(API_URL + "topic/" + topicId, {
            method: 'delete'
        })
    }


    updateTopic(topicId, topic) {
        return fetch(API_URL + 'topic/' + topicId,
            {
                body: JSON.stringify(topic),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            }).then(function (response) {
            return response.json();
        })
    }


}