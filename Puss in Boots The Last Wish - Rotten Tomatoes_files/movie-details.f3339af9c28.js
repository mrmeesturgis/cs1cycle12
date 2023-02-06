"use strict";(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["_movie-detail-reviews-audience-vas"]={root:function(e,a,o,t,s){var r,n,i=0,c=0,l="";try{if(l+='\x3c!-- salt=showersham-c880 --\x3e\n<section id="audience_reviews" class="panel panel-rt panel-box" data-qa="audience-reviews">\n    <h2 class="panel-heading">Audience Reviews for <em>',l+=t.suppressValue(e.getFilter("safe").call(a,t.contextOrFrameLookup(a,o,"title")),e.opts.autoescape),l+="</em></h2>\n    ",t.contextOrFrameLookup(a,o,"isReleased")&&0<e.getFilter("length").call(a,t.contextOrFrameLookup(a,o,"audienceReviews"))){l+="\n        ",t.memberLookup(t.contextOrFrameLookup(a,o,"audienceScore"),"canVerifyRatings")&&(l+='\n            <div class="mop-audience-reviews__header">\n                <a class="audience-reviews__header--link small" href="',l+=t.suppressValue(t.contextOrFrameLookup(a,o,"userReviewsLink"),e.opts.autoescape),l+='">All Audience (',l+=t.suppressValue(t.memberLookup(t.contextOrFrameLookup(a,o,"audienceScore"),"audienceScoreAllCount"),e.opts.autoescape),l+=')</a>\n                | <a class="audience-reviews__header--link small" href="',l+=t.suppressValue(t.contextOrFrameLookup(a,o,"verifiedReviewsLink"),e.opts.autoescape),l+='">Verified Audience (',l+=t.suppressValue(t.memberLookup(t.contextOrFrameLookup(a,o,"audienceScore"),"audienceScoreVerifiedCount"),e.opts.autoescape),l+=")</a>\n            </div>\n        "),l+='\n        <div class="sr-only js-clamp-live-region" aria-live="polite"></div>\n        <ul class="mop-audience-reviews__reviews-wrap clearfix">\n            ',i=12,c=31,r=t.callWrap(t.contextOrFrameLookup(a,o,"cycler"),"cycler",a,["pull-left cl","pull-right cr"]),o.set("cls",r,!0),o.topLevel&&a.setVariable("cls",r),o.topLevel&&a.addExport("cls",r),l+="\n            ",n=t.memberLookup(t.contextOrFrameLookup(a,o,"audienceReviews"),"length")<4?t.memberLookup(t.contextOrFrameLookup(a,o,"audienceReviews"),"length"):4,o.set("reviewsLength",n,!0),o.topLevel&&a.setVariable("reviewsLength",n),o.topLevel&&a.addExport("reviewsLength",n),l+="\n            ",o=o.push();var p=t.contextOrFrameLookup(a,o,"audienceReviews");if(p)for(var d=(p=t.fromIterator(p)).length,u=0;u<p.length;u++){var m=p[u];o.set("review",m),o.set("loop.index",u+1),o.set("loop.index0",u),o.set("loop.revindex",d-u),o.set("loop.revindex0",d-u-1),o.set("loop.first",0===u),o.set("loop.last",u===d-1),o.set("loop.length",d),l+='\n                <li class="mop-audience-reviews__review-item ',l+=t.suppressValue((i=15,c=72,t.callWrap(t.memberLookup(t.contextOrFrameLookup(a,o,"cls"),"next"),'cls["next"]',a,[])),e.opts.autoescape),l+='" data-qa="quote-bubble">\n                    <div class="mop-audience-reviews__review-quote" data-qa="quote-bubble-review">\n                        <div class=" clearfix">\n                            ',t.memberLookup(m,"score")&&(l+="\n                                ",l+=t.suppressValue(e.getFilter("safe").call(a,e.getFilter("toRatingsStars").call(a,t.memberLookup(m,"score"))),e.opts.autoescape),l+="\n                            "),l+='\n                            <span class="mop-audience-reviews__review--duration">',l+=t.suppressValue(t.memberLookup(m,"timeFromCreation"),e.opts.autoescape),l+="</span>\n                        </div>\n                        ",t.memberLookup(m,"isVerified")&&(l+='\n                            <span class="mop-audience-reviews__review--verified hidden-md hidden-lg js-verified-review">Verified</span>\n                            <span class="mop-audience-reviews__review--verified js-verified-popover hidden-xs hidden-sm"\n                                type="button"\n                                data-trigger="hover"\n                                data-container="body"\n                                data-toggle="popover"\n                                data-placement="bottom">Verified</span>\n                        '),l+='\n                        <div class="mop-audience-reviews__review--comment clamp clamp-4 js-clamp">',l+=t.suppressValue(t.memberLookup(m,"review"),e.opts.autoescape),l+='</div>\n                    </div>\n                    <div class="mop-audience-reviews__review--user-wrap">\n                        ',t.memberLookup(t.memberLookup(m,"user"),"accountLink")?(l+='\n                            <a href="',l+=t.suppressValue(t.memberLookup(t.memberLookup(m,"user"),"accountLink"),e.opts.autoescape),l+='">\n                            ',t.memberLookup(m,"displayImageUrl")?(l+='\n                                <img class="mop-audience-reviews__review--user-avatar" src="',l+=t.suppressValue(t.memberLookup(m,"displayImageUrl"),e.opts.autoescape),l+='"></span>\n                            '):l+='\n                                <span class="mop-audience-reviews__review--user-default"></span>\n                            ',l+="\n                            </a>\n                        "):(l+="\n                            ",t.memberLookup(m,"displayImageUrl")?(l+='\n                                <img class="mop-audience-reviews__review--user-avatar" src="',l+=t.suppressValue(t.memberLookup(m,"displayImageUrl"),e.opts.autoescape),l+='"></span>\n                            '):l+='\n                                <span class="mop-audience-reviews__review--user-default"></span>\n                            ',l+="\n                        "),l+='\n                        <div class="mop-audience-reviews__review--name-wrap">\n                            ',t.memberLookup(t.memberLookup(m,"user"),"accountLink")?(l+='\n                                <a href="',l+=t.suppressValue(t.memberLookup(t.memberLookup(m,"user"),"accountLink"),e.opts.autoescape),l+='">\n                                    <span class="mop-audience-reviews__review--name">',l+=t.suppressValue(t.memberLookup(m,"displayName"),e.opts.autoescape),l+="</span>\n                                </a>\n                            "):(l+='\n                                <span class="mop-audience-reviews__review--name">',l+=t.suppressValue(t.memberLookup(m,"displayName"),e.opts.autoescape),l+="</span>\n                            "),l+="\n                            ",t.memberLookup(m,"isSuperReviewer")&&(l+='\n                                <strong class="super-reviewer-badge">Super Reviewer</strong>\n                            '),l+="\n                        </div>\n                    </div>\n                </li>\n                "}o=o.pop(),l+='\n        </ul>\n        <div class="mop-audience-reviews__view-all clearfix">\n            <a href="',l+=t.suppressValue(t.contextOrFrameLookup(a,o,"userReviewsLink"),e.opts.autoescape),l+='" class="mop-audience-reviews__view-all--link" data-qa="audience-reviews-view-all-link">\n                See All Audience reviews\n            </a>\n        </div>\n    '}else t.contextOrFrameLookup(a,o,"isReleased")?(l+='\n        <div class="mop-audience-reviews__no-featured">\n            <p class="mop-audience-reviews__no-featured--text" data-qa="no-audience-reviews">\n                There are no featured audience reviews for ',l+=t.suppressValue(e.getFilter("safe").call(a,t.memberLookup(t.contextOrFrameLookup(a,o,"movie"),"title")),e.opts.autoescape),l+=' at this time.\n            </p>\n            <a class="button mop-audience-reviews__btn" href="',l+=t.suppressValue(t.contextOrFrameLookup(a,o,"userReviewsLink"),e.opts.autoescape),l+='"  data-qa="no-audience-reviews-link">\n                See All Audience Reviews\n            </a>\n        </div>\n    '):(l+='\n        <div class="mop-audience-reviews__no-reviews">\n            <p class="mop-audience-reviews__no-reviews--text" data-qa="no-audience-reviews">\n                There are no featured reviews for <em>',l+=t.suppressValue(t.memberLookup(t.contextOrFrameLookup(a,o,"movie"),"title"),e.opts.autoescape),l+="</em> because the movie has not released yet (",l+=t.suppressValue(t.contextOrFrameLookup(a,o,"releaseDate"),e.opts.autoescape),l+=').\n            </p>\n            <a class="button mop-audience-reviews__btn" href="',l+=t.suppressValue((i=76,c=100,t.callWrap(t.memberLookup(t.contextOrFrameLookup(a,o,"link"),"redirectorTheatersTopBoxOffice"),'link["redirectorTheatersTopBoxOffice"]',a,[])),e.opts.autoescape),l+='" data-qa="no-audience-reviews-link">See Movies in Theaters</a>\n        </div>\n    ');s(null,l+="\n</section>\n")}catch(e){s(t.handleError(e,i,c))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._audienceScore={root:function(e,a,o,t,s){var r="";try{r+='\x3c!-- salt=kilowattjuno-7207218a --\x3e\n<div class="mop-ratings-wrap__half audience-score">\n    ',!t.contextOrFrameLookup(a,o,"isPrerelease")&&t.contextOrFrameLookup(a,o,"hasMovieData")&&t.contextOrFrameLookup(a,o,"audienceScore")?(r+='\n        <h2 class="mop-ratings-wrap__score">\n            <a href="#audience_reviews" class="unstyled articleLink mop-ratings-wrap__icon-link">\n                <span class="mop-ratings-wrap__icon meter-tomato icon big medium-xs ',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"audienceClass"),e.opts.autoescape),r+='"></span>\n                <span class="mop-ratings-wrap__percentage">\n                    ',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"audienceScore"),e.opts.autoescape),r+='%\n                </span>\n            </a>\n        </h2>\n        <div class="mop-ratings-wrap__review-totals mop-ratings-wrap__review-totals--not-released">\n            <h3 class="mop-ratings-wrap__title audience-score__title mop-ratings-wrap__title--small">Audience Score</h3>\n            <strong class="mop-ratings-wrap__text--small">',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"audienceScoreName"),e.opts.autoescape),r+=" ",r+=t.suppressValue(e.getFilter("format").call(a,t.contextOrFrameLookup(a,o,"audienceRatingCount")),e.opts.autoescape),r+="</strong>\n        </div>\n    "):(r+='\n        <div class="audience-score__italics mop-ratings-wrap__text--subtle mop-ratings-wrap__text--small mop-ratings-wrap__text--cushion mop-ratings-wrap__text--not-released mop-ratings-wrap__icon-link">\n            <p class="mop-ratings-wrap__prerelease-text">Coming soon</p>\n            <p class="mop-ratings-wrap__prerelease-text">Release date: <strong>',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"releaseDate"),e.opts.autoescape),r+='</strong></p>\n        </div>\n        <div class="mop-ratings-wrap__review-totals mop-ratings-wrap__review-totals--not-released">\n            <h3 class="mop-ratings-wrap__title audience-score__title mop-ratings-wrap__title--small">Audience Score</h3>\n            <strong class="mop-ratings-wrap__text--small">User Ratings: Not yet available</strong>\n        </div>\n    '),s(null,r+="\n</div>\n")}catch(e){s(t.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})["_verified-modal"]={root:function(e,a,o,t,s){var r="";try{r+='<section class="verified-modal verified-modal--mobile js-verified-modal--mobile closed">\n    <div class="verified-modal__title-wrap">\n        <span class="verified-modal__title">Verified Purchase</span>\n        <span id="verified-modal-close" class="verified-modal__close"></span>\n    </div>\n    <ul class="verified-modal__list">\n        <li class="verified-modal__item">\n            ',r+=t.suppressValue(e.getFilter("safe").call(a,t.contextOrFrameLookup(a,o,"topText")),e.opts.autoescape),r+="\n            ",t.contextOrFrameLookup(a,o,"topLinkVisible")&&(r+="\n                <a href=",r+=t.suppressValue(t.contextOrFrameLookup(a,o,"topLinkURL"),e.opts.autoescape),r+=' class="verified-modal__link verified-tab__tooltip--link" target="_blank">',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"topLinkText"),e.opts.autoescape),r+="</a>\n            "),r+="\n        </li>\n        ",t.contextOrFrameLookup(a,o,"bottomVisible")&&(r+='\n            <li class="verified-modal__item verified-modal__item--grey">\n                ',r+=t.suppressValue(e.getFilter("safe").call(a,t.contextOrFrameLookup(a,o,"bottomText")),e.opts.autoescape),r+="\n                ",t.contextOrFrameLookup(a,o,"bottomLinkVisible")&&(r+="\n                    <a href=",r+=t.suppressValue(t.contextOrFrameLookup(a,o,"bottomLinkURL"),e.opts.autoescape),r+=' class="verified-modal__link verified-tab__tooltip--link" target="_blank">',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"bottomLinkText"),e.opts.autoescape),r+="</a>\n                "),r+="\n            </li>\n        "),s(null,r+='\n    </ul>\n</section>\n<div class="verified-modal-overlay js-verified-modal-overlay hide"></div>\n')}catch(e){s(t.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._verifiedPopover={root:function(e,a,o,t,s){var r="";try{r+='<ul class="verified-modal__list">\n    <li class="verified-modal__item">\n        ',r+=t.suppressValue(e.getFilter("safe").call(a,t.contextOrFrameLookup(a,o,"topText")),e.opts.autoescape),r+="\n        ",t.contextOrFrameLookup(a,o,"topLinkVisible")&&(r+="\n            <a href=",r+=t.suppressValue(t.contextOrFrameLookup(a,o,"topLinkURL"),e.opts.autoescape),r+=' class="verified-modal__link verified-tab__tooltip--link" target="_blank">',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"topLinkText"),e.opts.autoescape),r+="</a>\n        "),r+="\n    </li>\n    ",t.contextOrFrameLookup(a,o,"bottomVisible")&&(r+='\n        <li class="verified-modal__item verified-modal__item--grey">\n            ',r+=t.suppressValue(e.getFilter("safe").call(a,t.contextOrFrameLookup(a,o,"bottomText")),e.opts.autoescape),r+="\n            ",t.contextOrFrameLookup(a,o,"bottomLinkVisible")&&(r+="\n                <a href=",r+=t.suppressValue(t.contextOrFrameLookup(a,o,"bottomLinkURL"),e.opts.autoescape),r+=' class="verified-modal__link verified-tab__tooltip--link" target="_blank">',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"bottomLinkText"),e.opts.autoescape),r+="</a>\n            "),r+="\n        </li>\n    "),s(null,r+="\n</ul>\n")}catch(e){s(t.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._scoreDetail={root:function(e,a,o,t,s){var r="";try{r+='<div class="modal__dialog score-detail__dialog score-detail__',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"mediaType"),e.opts.autoescape),r+='" role="dialog" aria-modal="true" aria-labelledby="login-form__title" data-qa="modal:scoreDetail">\n    <header class="modal__header score-detail__header">\n        <button class="score-detail__close-btn" aria-label="Close" data-close-modal type="button">\n            <div class="score-detail__close-btn-content a modal__close-btn--large" data-close-modal tabindex="-1" data-qa="score-detail-close-btn"></div>\n        </button>\n    </header>\n    <div class="modal__body score-detail__body">\n        <section class="score-detail__info-wrap">\n            <div class="score-detail__info-wrap-section" data-qa="score-detail-critics-section">\n                <h3 class="score-detail__heading" data-qa="score-details-tomatometer-title">\n                    ',r+=t.suppressValue("tvSeries"==t.contextOrFrameLookup(a,o,"mediaType")?"Avg Tomatometer":"Tomatometer",e.opts.autoescape),r+='\n                    <button class="button--link score-detail__help score-detail__help--tomatometer js-score-detail-tomatometer-help"\n                       data-help-content="tomatometer"\n                       data-html="true"\n                       data-toggle="rt-tooltip"\n                       data-desktop-only="true"\n                       data-qa="tool-tip-btn"\n                       >\n                        <span class="icon icon__question"></span>\n                    </button>\n                </h3>\n                <nav class="score-detail__nav ',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"hideNav")?"score-detail__nav--hide":"",e.opts.autoescape),r+='">\n                    ',t.memberLookup(t.contextOrFrameLookup(a,o,"numReviews"),"tomatometerTopCritics")&&(r+='\n                        <button class="toggle js-score-detail-critics-toggle score-detail__critic-toggle score-detail__critic-toggle--active" data-critics="all" data-qa="all-critics-btn">All Critics</button>\n                        <button class="toggle js-score-detail-critics-toggle score-detail__critic-toggle" data-critics="top" data-qa="top-critics-btn">Top Critics</button>\n                    '),r+='\n                </nav>\n\n                <div class="score-details__stats">\n                    <div class="score-details__circle" id="score-details-circle-wrap" data-qa="critic-score-container"></div>\n\n                    ',"movie"!=t.contextOrFrameLookup(a,o,"mediaType")&&"tvSeason"!=t.contextOrFrameLookup(a,o,"mediaType")&&"tvEpisode"!=t.contextOrFrameLookup(a,o,"mediaType")||(r+='\n                        <div class="score-details__breakdown" data-qa="score-detail-breakdown">\n                            <div class="score-details__rating-wrap" data-qa="avg-rating-txt">\n                                <div class="score_details__big-text"><span class="js-tomatometer-score-info" data-average_rating data-qa="avg-rating-score"></span></div>\n                                <span>Avg rating</span>\n                            </div>\n\n                            <div class="score-details__rating-wrap">\n                                <div class="score_details__big-text js-tomatometer-score-info" data-reviews_count data-qa="rating-count"></div>\n                                Ratings\n                            </div>\n\n                            <div class="score-detail__score-bar-wrap">\n                                <span class="js-tomatometer-score-info" data-fresh_count data-qa="fresh-count"></span> rated Fresh\n                                <div class="score-detail__score-bar">\n                                    <span class="score-detail__score-bar-color js-tomatometer-score-info" data-fresh_percentage></span>\n                                </div>\n                            </div>\n\n                            <div class="score-detail__score-bar-wrap">\n                                <span class="js-tomatometer-score-info" data-rotten_count data-qa="rotten-count"></span> rated Rotten\n                                <div class="score-detail__score-bar">\n                                    <span class="score-detail__score-bar-color score-detail__score-bar-color--rotten js-tomatometer-score-info" data-rotten_percentage></span>\n                                </div>\n                            </div>\n                        </div>\n                    '),r+="\n                </div>\n\n            </div>\n\n            ","tvEpisode"!=t.contextOrFrameLookup(a,o,"mediaType")&&(r+='\n                <div class="score-detail__info-wrap-section" data-qa="score-detail-audience-section">\n                    <h3 class="score-detail__heading" data-qa="score-details-audience-score-title">\n                        ',r+=t.suppressValue("tvSeries"==t.contextOrFrameLookup(a,o,"mediaType")?"Avg Audience Score":"Audience Score",e.opts.autoescape),r+='\n                        <button class="button--link score-detail__help score-detail__help--audience-score js-score-detail-audience-score-help"\n                        data-help-content="audience-score"\n                        data-html="true"\n                        data-toggle="rt-tooltip"\n                        data-desktop-only="true"\n                        data-qa="tool-tip-btn"\n                        >\n                            <span class="icon icon__question"></span>\n                        </button>\n                    </h3>\n\n                    <nav class="score-detail__nav ',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"hideNav")?"score-detail__nav--hide":"",e.opts.autoescape),r+='">\n                        ',t.contextOrFrameLookup(a,o,"hasAudienceScore")&&"movie"==t.contextOrFrameLookup(a,o,"mediaType")&&(r+="\n                            ",t.contextOrFrameLookup(a,o,"canVerifyRatings")&&t.memberLookup(t.contextOrFrameLookup(a,o,"numReviews"),"audienceScoreVerified")&&(r+='\n                                <button class="toggle js-score-detail-critics-toggle score-detail__critic-toggle score-detail__critic-toggle--active" data-audience="verified">Verified Audience</button>\n                                <button class="toggle js-score-detail-critics-toggle score-detail__critic-toggle ',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"canVerifyRatings")?"":"score-detail__critic-toggle--active",e.opts.autoescape),r+='" data-audience="all">All Audience</button>\n                            '),r+="\n                        "),r+='\n                    </nav>\n\n                    <div class="score-details__stats">\n                        <div class="score-details__circle" id="audience-circle-wrap" data-qa="audience-score-container"></div>\n\n                        ',t.contextOrFrameLookup(a,o,"hasAudienceScore")||(r+="\n                            ",t.contextOrFrameLookup(a,o,"isReleased")||"movie"!==t.contextOrFrameLookup(a,o,"mediaType")?r+='\n                                <div class="score-details__breakdown score-details__breakdown--no-score" data-qa="score-detail-breakdown">\n                                    <p>There is no Audience Score because there are not enough ratings yet.</p>\n                                </div>\n                            ':(r+='\n                                <div class="score-details__breakdown score-details__breakdown--no-score" data-qa="score-detail-breakdown">\n                                    <p>There is no Audience Score because user reviews are not accepted until this title is released (',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"releaseDate"),e.opts.autoescape),r+=").</p>\n                                </div>\n                            "),r+="\n\n                        "),r+="\n\n                        ","movie"!=t.contextOrFrameLookup(a,o,"mediaType")&&"tvSeason"!=t.contextOrFrameLookup(a,o,"mediaType")||(r+='\n                            <div class="score-details__breakdown ',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"hasAudienceScore")?"":"hide",e.opts.autoescape),r+='" data-qa="score-detail-breakdown">\n                                <div class="score-details__rating-wrap">\n                                    <div class="score_details__big-text">\n                                        <span class="score-detail__black-star"></span>\n                                        <span class="js-audience-score-info" data-average_rating></span>\n                                    </div>\n                                    <span>Avg rating</span>\n                                </div>\n\n                                <div class="score-details__rating-wrap">\n                                    <div class="score_details__big-text js-audience-score-info" data-reviews_count></div>\n                                    Ratings\n                                </div>\n                            </div>\n\n                        '),r+="\n                    </div>\n                </div>\n            "),s(null,r+="\n        </section>\n    </div>\n</div>\n")}catch(e){s(t.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._scoreDetailsCircle={root:function(e,a,o,t,s){var r="";try{r+='<div id="',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"circleId"),e.opts.autoescape),r+='" class="score-details-circle" data-score="',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"initialScore"),e.opts.autoescape),r+='" data-state="',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"initialState"),e.opts.autoescape),r+='" >\n    <span class="score-details-circle__inner-icon">\n        <span class="js-circle-icon icon icon--small ',r+=t.suppressValue(t.contextOrFrameLookup(a,o,"defaultIcon"),e.opts.autoescape),s(null,r+='"></span>\n    </span>\n    <span class="score-details-circle__inner-score js-inner-circle-score" data-qa="score"></span>\n    \n    <svg id="svg" class="score-details-circle__svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">\n        <circle class="score-details-circle__inner-circle" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>\n        <circle class="score-details-circle__inner-circle score-details-circle__inner-circle--main js-red-circle" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>\n    </svg>\n</div>\n')}catch(e){s(t.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._audienceScore={root:function(e,a,o,t,s){var r="";try{r+='<div class="js-rt-tooltip rt-tooltip" data-qa="tool-tip">\n    <div class="score-detail__tooltip-content" data-qa="tool-tip-content">\n        <div class="score-detail__tooltip-stats">\n            ',t.contextOrFrameLookup(a,o,"canVerifyRatings")?(r+="\n                ",t.contextOrFrameLookup(a,o,"hasAudienceScore")?(r+='\n                    <div class="score-detail__tooltip-verified-score-container">\n                        <h4 class="score-detail__tooltip-subheader">Verified Audience score</h4>\n                        <p class="score-detail__tooltip-text" data-qa="tool-tip-text">',r+=t.suppressValue(e.getFilter("safe").call(a,t.memberLookup(t.contextOrFrameLookup(a,o,"scoreDetailDescription"),"verifiedAudienceScoreMsg")),e.opts.autoescape),r+='</p>\n                    </div>\n                    <div>\n                        <h4 class="score-detail__tooltip-subheader">All Audience score</h4>\n                        <p class="score-detail__tooltip-text" data-qa="tool-tip-text">',r+=t.suppressValue(e.getFilter("safe").call(a,t.memberLookup(t.contextOrFrameLookup(a,o,"scoreDetailDescription"),"allAudienceScoreMsg")),e.opts.autoescape)):(r+='\n                    <div>\n                        <p class="score-detail__tooltip-text" data-qa="tool-tip-text">',r+=t.suppressValue(e.getFilter("safe").call(a,t.memberLookup(t.contextOrFrameLookup(a,o,"scoreDetailDescription"),"nonVerifiableAudienceScoreMsg")),e.opts.autoescape)),r+="</p>\n                    </div>\n                ",r+="\n            "):(r+="\n                <div>\n                    ",t.contextOrFrameLookup(a,o,"hasAudienceScore")?(r+='\n                        <p class="score-detail__tooltip-text" data-qa="tool-tip-text">',r+=t.suppressValue(e.getFilter("safe").call(a,t.memberLookup(t.contextOrFrameLookup(a,o,"scoreDetailDescription"),"allAudienceScoreMsg")),e.opts.autoescape)):(r+='\n                        <p class="score-detail__tooltip-text" data-qa="tool-tip-text">',r+=t.suppressValue(e.getFilter("safe").call(a,t.memberLookup(t.contextOrFrameLookup(a,o,"scoreDetailDescription"),"nonVerifiableAudienceScoreMsg")),e.opts.autoescape)),r+="</p>\n                    ",r+="\n                </div>\n            "),s(null,r+='\n        </div>\n        <button class="js-tooltip-close-btn button--link score-detail__tooltip-close-btn a modal__close-btn--large" data-qa="tool-tip-close-btn"></button>\n    </div>\n</div>\n')}catch(e){s(t.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._tomatometer={root:function(e,a,o,t,s){var r="";try{r+='<div class="js-rt-tooltip rt-tooltip" data-qa="tool-tip">\n  <div class="score-detail__tooltip-content" data-qa="tool-tip-content">\n    <p class="score-detail__tooltip-text" data-qa="tool-tip-text">\n      ',r+=t.suppressValue(e.getFilter("safe").call(a,t.memberLookup(t.contextOrFrameLookup(a,o,"scoreDetailDescription"),"tomatometerMsg")),e.opts.autoescape),s(null,r+='\n    </p>\n    <button class="js-tooltip-close-btn button--link score-detail__tooltip-close-btn a modal__close-btn--large" data-qa="tool-tip-close-btn"></button>\n  </div>\n</div>\n')}catch(e){s(t.handleError(e,0,0))}}};