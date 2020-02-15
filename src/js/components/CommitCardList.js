//класс для создания контейнера коммитов 

export default class CommitCardList {
    constructor(commitCard) {
      this.commitCard = commitCard;
    }

     addCommit(nameValue, emailValue, dateValue, messageValue, avatarValue) {
        this.commitCard.createCommit(nameValue, emailValue, dateValue, messageValue, avatarValue)

  }
    create(arr) {
           for (let index = 0; index < arr.length; index++) {
               const element = arr[index];
               if (element.author) {
                this.addCommit(element.commit.committer.name, element.commit.committer.email, element.commit.committer.date, element.commit.message, element.author.avatar_url)
               }
               else {  
               this.addCommit(element.commit.committer.name, element.commit.committer.email, element.commit.committer.date, element.commit.message, './images/gh_icon.svg')}
           }
          
        }
         
} 