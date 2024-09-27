

class Grade{
    constructor(subject, score){
        this.subject = subject
        this.score = score
       
    }
    grade = []
    displayinfo(){
        return `${this.subject}, ${this.score}`
    }
    addGrades(){
        console.log(`${this.score + this.score + this.score}`)
    }
}

    export default Grade