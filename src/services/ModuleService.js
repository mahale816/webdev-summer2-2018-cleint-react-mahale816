const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
const MODULE_API_URL_MODULE = 'http://localhost:8080/api/module/MODULE_ID';
const API_URL = 'http://localhost:8080/api/';

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');

    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    deleteModule(moduleId) {
        return fetch(MODULE_API_URL_MODULE.replace('MODULE_ID', moduleId), {
            method: 'delete'
        })
    }

    findAllModulesForCourse(courseId) {
        return fetch(MODULE_API_URL.replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    updateModule(moduleId, module) {
        return fetch(API_URL + 'module/'+moduleId,{
            body: JSON.stringify(module),
            headers: {'Content-Type': 'application/json'},
            method: 'PUT'
            }).then(function (response) {
            return response.json();
        })
    }
}