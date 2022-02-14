export class Username {
    constructor(public repoName:string, public description:string, public dateCreated:Date){
        this.repoName= repoName;
        this.description = description;
        this.dateCreated = dateCreated
    }
}
