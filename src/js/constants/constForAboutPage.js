import GithubApi from '../modules/GithubApi';
import CommitCard from '../components/CommitCard';
import CommitCardList from '../components/CommitCardList';

const commitsSlider = document.querySelector('.comments__carousel');

const githubApi = new GithubApi();
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(commitCard, commitsSlider);

const numberOfFirstCommit = 0;
const numberOfLastCommit = 20;


export {githubApi,
        commitCardList,
        commitsSlider, 
        numberOfFirstCommit,
        numberOfLastCommit,
}