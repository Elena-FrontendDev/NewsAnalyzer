//класс для создания контейнера коммитов 

export default class CommitCardList {
    constructor(commitCard, commitsContainer) {
      this.commitCard = commitCard;
      this.commitsContainer = commitsContainer;
    }

    _addCommit(nameValue, emailValue, dateValue, messageValue, avatarValue) {
      const commitElement = this.commitCard.createCommit(nameValue, emailValue, dateValue, messageValue, avatarValue);
      
      this.commitsContainer.appendChild(commitElement);
    }

    create(commitsCardsArray) {
      commitsCardsArray.forEach(element => 
          {if (element.author) 
            {this._addCommit(element.commit.committer.name, element.commit.committer.email, element.commit.committer.date, element.commit.message, element.author.avatar_url)
          } 
          else {  
            this._addCommit(element.commit.committer.name, element.commit.committer.email, element.commit.committer.date, element.commit.message, './images/gh_icon.svg')}
          }
      );     
    }
         
} 