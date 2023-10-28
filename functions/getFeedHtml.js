import { tweetsData } from '../data.js'

export function getFeedHtml(){

    let feedHtml = ''

    tweetsData.forEach((tweet) => {
        let likeIconClass = ''
        let retweetedIconClass = ''
        let regularClass = 'regular'

        if(tweet.isLiked){
            likeIconClass = 'liked'
            regularClass = 'solid'
        }
        if(tweet.isRetweeted){
            retweetedIconClass = 'retweeted'
        }

        let repliesHtml = ''
        
        if(tweet.replies.length > 0){
            tweet.replies.forEach((reply) => {
                repliesHtml += 
                `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${reply.handle}</p>
                                <p class="tweet-text">${reply.tweetText}</p>
                                <div class="tweet-details">
                                    <span class="tweet-detail>
                                        <i class="fa-${regularClass} fa-heart ${likeIconClass}" data-reply-heart="${reply.uuid}"></i>
                                        ${reply.likes}
                                    </span>
                                </div>
                            </div>
                    </div>
                </div>
                `
            })
        }


        feedHtml += 
        `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <i class="fa-regular fa-comment-dots" data-comment="${tweet.uuid}"></i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-${regularClass} fa-heart ${likeIconClass}" data-heart="${tweet.uuid}"></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet ${retweetedIconClass}" data-retweet="${tweet.uuid}"></i>
                                ${tweet.retweets}
                            </span>
                        </div>   
                    </div>            
                </div>
                <div class="hidden" id="replies-${tweet.uuid}">
                    ${repliesHtml}
                </div>  
            </div>

        `
    })

    return feedHtml
}