import { WebSocialShareUtils } from './web-social-share-utils';
export class WebSocialShareHackerNews {
    static async share(attrs) {
        let urlString = 'https://news.ycombinator.com/submitlink?u=';
        //default to the current page if a URL isn't specified
        urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);
        if (attrs.socialShareText) {
            urlString += '&t=' + encodeURIComponent(attrs.socialShareText);
        }
        WebSocialShareUtils.staticOpenNewWindow(urlString);
    }
}
