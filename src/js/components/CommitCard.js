import {commitInner} from '../constants/constants'

//класс для создания карточки коммита с gitHubApi

export default class CommitCard {
    constructor () {
    }
  
    createCommit(nameValue, emailValue, dateValue, messageValue, avatarValue) {
        const commitCard = document.createElement("div");
        commitCard.classList.add("carousel__cell");
    
        commitCard.innerHTML = commitInner;
                        
                        commitCard.querySelector(".carousel__data").textContent = ((new Date(dateValue).toLocaleDateString('ru', {day: 'numeric', month: 'long'})) + ', ' + new Date(dateValue).getFullYear());;;
                        commitCard.querySelector(".content__subtitle").textContent = nameValue;
                        commitCard.querySelector(".carousel__email").textContent = emailValue;
                        commitCard.querySelector(".carousel__commit").textContent = messageValue;
                        commitCard.querySelector(".carousel__avatar").src = avatarValue;

        document.querySelector('.comments__carousel').appendChild(commitCard);

        return commitCard;
    }
  
  }