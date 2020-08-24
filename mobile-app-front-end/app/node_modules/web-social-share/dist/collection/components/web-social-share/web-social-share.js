import { Component, Element, Event, Prop, h } from '@stencil/core';
import { WebSocialShareFacebook } from '../../utils/web-social-share/web-social-share-facebook';
import { WebSocialShareTwitter } from '../../utils/web-social-share/web-social-share-twitter';
import { WebSocialShareEmail } from '../../utils/web-social-share/web-social-share-email';
import { WebSocialShareLinkedin } from '../../utils/web-social-share/web-social-share-linkedin';
import { WebSocialSharePinterest } from '../../utils/web-social-share/web-social-share-pinterest';
import { WebSocialShareReddit } from '../../utils/web-social-share/web-social-share-reddit';
import { WebSocialShareWhatsapp } from '../../utils/web-social-share/web-social-share-whatsapp';
import { WebSocialShareCopy } from '../../utils/web-social-share/web-social-share-copy';
import { WebSocialShareHackerNews } from '../../utils/web-social-share/web-social-share-hackernews';
export class WebSocialShare {
    constructor() {
        this.handleFacebookShare = async (attributes) => {
            await WebSocialShareFacebook.share(attributes);
        };
        this.handleTwitterShare = async (attributes) => {
            await WebSocialShareTwitter.share(attributes);
        };
        this.handleEmailShare = async (attributes) => {
            await WebSocialShareEmail.share(attributes);
        };
        this.handleLinkedinShare = async (attributes) => {
            await WebSocialShareLinkedin.share(attributes);
        };
        this.handlePinterestShare = async (attributes) => {
            await WebSocialSharePinterest.share(attributes);
        };
        this.handleRedditShare = async (attributes) => {
            await WebSocialShareReddit.share(attributes);
        };
        this.handleWhatsappShare = async (attributes) => {
            await WebSocialShareWhatsapp.share(attributes);
        };
        this.handleCopyShare = async (attributes) => {
            await WebSocialShareCopy.share(attributes);
        };
        this.handleHackerNewsShare = async (attributes) => {
            await WebSocialShareHackerNews.share(attributes);
        };
    }
    hide() {
        let element = this.el.shadowRoot.querySelector('div.web-social-share');
        if (element) {
            element.classList.add('web-social-share-transition-close');
            setTimeout(() => {
                // Reflect css animation speed 400ms, see css
                this.show = false;
                element.classList.remove('web-social-share-transition-close');
                this.closed.emit(true);
            }, 200);
        }
        else {
            // Well we don't find the action sheet, we could mark it as not displayed
            this.show = false;
            this.closed.emit(true);
        }
    }
    render() {
        return (h("div", { class: this.show ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close' },
            h("div", { class: 'web-social-share-backdrop', onClick: () => this.hide() }),
            h("div", { class: 'web-social-share-action-sheet', onClick: () => this.hide() },
                h("div", { class: 'web-social-share-action-sheet-container' },
                    h("div", { class: 'web-social-share-action-sheet-group' }, this.renderTargets())))));
    }
    renderTargets() {
        if (!this.share || !this.share.config) {
            return (h("span", null));
        }
        else {
            return (this.share.config.map((config) => h("div", { class: "web-social-share-target" }, this.renderButtons(config))));
        }
    }
    renderButtons(share) {
        if (share.facebook) {
            return this.renderButton(share.facebook, 'facebook', this.handleFacebookShare, 'Facebook');
        }
        else if (share.twitter) {
            return this.renderButton(share.twitter, 'twitter', this.handleTwitterShare, 'Twitter');
        }
        else if (share.email) {
            return this.renderButton(share.email, 'email', this.handleEmailShare, 'Email');
        }
        else if (share.linkedin) {
            return this.renderButton(share.linkedin, 'linkedin', this.handleLinkedinShare, 'Linkedin');
        }
        else if (share.pinterest) {
            return this.renderButton(share.pinterest, 'pinterest', this.handlePinterestShare, 'Pinterest');
        }
        else if (share.reddit) {
            return this.renderButton(share.reddit, 'reddit', this.handleRedditShare, 'Reddit');
        }
        else if (share.whatsapp) {
            return this.renderButton(share.whatsapp, 'whatsapp', this.handleWhatsappShare, 'WhatsApp');
        }
        else if (share.copy) {
            return this.renderButton(share.copy, 'copy', this.handleCopyShare, 'Copy');
        }
        else if (share.hackernews) {
            return this.renderButton(share.hackernews, 'hackernews', this.handleHackerNewsShare, 'Hacker News');
        }
        else {
            return undefined;
        }
    }
    renderButton(attributes, slotName, action, defaultBrandName) {
        return (h("button", { onClick: ($event) => this.handleShare($event, attributes, action), class: 'web-social-share-button' },
            h("div", { class: "web-social-share-button-icon" },
                h("slot", { name: slotName })),
            this.renderName(attributes, defaultBrandName)));
    }
    async handleShare($event, attributes, action) {
        $event.stopPropagation();
        await action(attributes);
        this.hide();
    }
    renderName(displayAttributes, defaultBrandName) {
        if (this.share.displayNames) {
            return (h("p", null, displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== '' ? displayAttributes.brandName : defaultBrandName));
        }
        else {
            return (h("span", null));
        }
    }
    static get is() { return "web-social-share"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["web-social-share.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["web-social-share.css"]
    }; }
    static get properties() { return {
        "show": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show",
            "reflect": false
        },
        "share": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "WebSocialShareInput",
                "resolved": "WebSocialShareInput",
                "references": {
                    "WebSocialShareInput": {
                        "location": "import",
                        "path": "../../types/web-social-share/web-social-share-input"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get events() { return [{
            "method": "closed",
            "name": "closed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
