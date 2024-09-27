import Grade from "./grade.js"

class Student extends Grade{
    constructor(subject, score, level, name){
        super(subject, score)
        this.level = level
        this.name = name
    }

    showStudent(){
        console.log(` ${this.displayinfo()},${this.level},${this.name}`)
    }
}

export default Student