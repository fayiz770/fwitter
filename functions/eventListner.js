import { tweetsData } from '../data.js'
import { renderNewTweet } from './renderNewTweet.js'
import { showAndHideReplies } from './showAndHideReplies.js'
import { render } from './render.js'


export function eventListner(){
    document.addEventListener('click', (e) => {

        if(e.target.id === 'tweet-btn'){
            renderNewTweet()
            render()
        }
        else if(e.target.dataset.comment){
            showAndHideReplies(e.target.dataset.comment)
        }
        else if(e.target.dataset.heart){

            let targetTweet = tweetsData.filter((tweet) => {
                return tweet.uuid === e.target.dataset.heart
            })[0]

            targetTweet.isLiked ? (targetTweet.likes--) : targetTweet.likes++
            targetTweet.isLiked = !targetTweet.isLiked
            render()
        }

        else if(e.target.dataset.retweet){

            let targetTweet = tweetsData.filter((tweet) => {
                return tweet.uuid === e.target.dataset.retweet
            })[0]

            targetTweet.isRetweeted ? (targetTweet.retweets--) : targetTweet.retweets++
            targetTweet.isRetweeted = !targetTweet.isRetweeted
            render()
        }
    })
}