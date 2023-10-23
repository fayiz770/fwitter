import { tweetsData } from '../data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
import { render } from './render.js'

let inputValue = document.getElementById('text-value')

export  function renderNewTweet(){
    if(inputValue.value.length > 5){
        tweetsData.unshift(
            {
                handle: `@Waris`,
                profilePic: `../images/scrimbalogo.png`,
                likes: 0,
                retweets: 0,
                tweetText: `${inputValue.value}`,
                replies: [],
                isLiked: false,
                isRetweeted: false,
                uuid: `${uuidv4()}`,
            }
        )
    }
    inputValue.value = ''
}