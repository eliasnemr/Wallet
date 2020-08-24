export class WebSocialShareCopy {
    static async share(attrs) {
        try {
            await navigator.clipboard.writeText(attrs.socialShareUrl || window.location.href);
        }
        catch (err) {
            // Well it seems that copy isn't supported by this browser
        }
    }
}
