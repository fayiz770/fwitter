import { getFeedHtml } from './getFeedHtml.js'
export function render(){
    const feed = document.getElementById('feed')
    feed.innerHTML = getFeedHtml()
}