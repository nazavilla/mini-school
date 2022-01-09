//prototypes with CLASSES syntax

//CLASS 0
class lessons{
    constructor({
    lessonsName
    }){     
    this._lessonsName = lessonsName; //private
    }
}
//instances
const AttributesComments = new lessons({
    lessonsName: "AttributesComments"
})
const elementsLinks = new lessons({
    lessonsName: "elementsLinks"
})
const BlockInline= new lessons({
    lessonsName: "BlockInline"
})



//CLASS 1
class courses{
    constructor(
    {
    name,
    lessons = [],
    isfree= false
    }){
    //the _ before name is making it private (only us can modify)
    this._name = name;
    this.lessons = lessons;
    this.isfree = isfree;
    }
}

//basic html instances
const basicHTML = new courses(
    {
    name: "basicHTML",
    isfree : true,
    lessons : [
     AttributesComments,
     elementsLinks,
     BlockInline]
    });


//intermediate html instances
const intermediateHTML = new courses({
    name:"intermediateHTML",
    isfree: true,
    lessons : [
        "classes&id",
        "tables",
        "Forms"
    ]
})
//advanced html instances
const advancedHTML = new courses({
    name:"advancedHTML",
    isfree: false,
    lessons : [
        "responsive",
        "Media",
        "API"
    ]
})

//CLASS 2

class learningPath{
    constructor({
    learningPathName, 
    courses = []
}){
    this.learningPathName = learningPathName;
    this.courses = courses;
    } 
}
//instnaces
const HTML = new learningPath({
    learningPathName: "Html",
    courses : [
    basicHTML,
    intermediateHTML,
    "AdvancedHTML"
    ]
});

class student {
    constructor({
        name,  
        email,
        username,
        twitter = undefined,
        learningPath = [],
        courses = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.twitter = twitter;
        this.learningPath = learningPath;
        this.courses = courses;
    }

    //set method
    get approveCourses(){
        return this._courses;
    }

}
//HERENCIA
class FreeStudents extends student{
    constructor(props){
    super(props);
    }
    approveCourses(newCourseFREE){
    if (newCourseFREE.isfree){
        this.courses.push(newCourseFREE);
    }
    else{
         console.warn("I'm sorry, you only can take courses from free membership")
        }
    }
}

class ProStudent extends student{
    constructor(props){
    super(props);
    }
    approveCourses(newCoursePRO){
        this.courses.push(newCoursePRO);
    }
}
//instancia
const gerardo = new ProStudent(
    {
    names: "Gerardo",
    email: "ajfnakjdfnaldn",
    username: "lindura",
    learningPath: [HTML]
    });

const andres = new FreeStudents(
    {
    names: "andres",
    email: "ajfnakjdfnaldn",
    username: "andy",
    learningPath: [HTML]
    });