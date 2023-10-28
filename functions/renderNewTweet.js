import { tweetsData } from '../data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

let inputValue = document.getElementById('text-value')

export  function renderNewTweet(){
    const exist = tweetsData.filter((tweet) => inputValue.value.trim() === tweet.tweetText.trim())[0]
    if(inputValue.value.length > 5){
        if(!exist){
            tweetsData.unshift(
                {
                    handle: `@Waris`,
                    profilePic: `../images/waris.jpg`,
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
    }
    inputValue.value = ''
}