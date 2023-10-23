export function showAndHideReplies(tweetId){
    const target = document.getElementById(`replies-${tweetId}`)
    target.classList.toggle('hidden')
}