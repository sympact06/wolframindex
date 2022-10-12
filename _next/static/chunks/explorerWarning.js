/* eslint-disable */
// lint rules are disabled because this file is for Internet Explorer which cannot handle updated syntax

function parseCookies() {
    if (typeof document !== 'undefined') {
        const decodedCookies = {};
        const cookies = document.cookie;
        for (let i = 0; i < cookies.split(';').length; i++) {
            const cookie = cookies.split(';')[i];
            const parts = cookie.split('=');
            decodedCookies[parts.shift().trim()] = decodeURI(parts.join('='));
        }

        return decodedCookies;
    }
    throw new Error('Incorrect Use of parseCookie in node environment');
}

function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
const linkStyle = 'color:#f96932;text-decoration: none;';
function createLink(element, title, link) {
    element.appendChild(document.createTextNode(title));
    element.title = title;
    element.href = link;
    element.style.cssText = linkStyle;
}

if (window.navigator.userAgent.indexOf('Trident/') > 0) {
    const params = parse_query_string(window.location.search.slice(1));
    const hasForeignDomain = window.location.host[0] === 'j' && window.location.host[1] === 'a';
    const hasForeignCookies = parseCookies().wa_lang === 'ja';
    const hasForeignParams = params.lang === 'ja';

    const language =  hasForeignDomain || hasForeignCookies || hasForeignParams ? 'ja' : 'en';
    let translatedContent = {};

    const IE_PARAGRAPH =
        'While you may continue using Internet Explorer 11, we will not be addressing or testing bugs on this platform. We advise using one of the following browsers instead: ';

    const IE_TITLE = 'We are retiring support for Internet Explorer 11';

    const IE_CLOSE = 'Return to Wolfram|Alpha   x';

    const JA_IE_CLOSE = 'Wolfram|Alphaに戻る   x';

    const JA_IE_PARAGRAPH =
        'Internet Explorer 11を引き続きお使いになることもできますが，弊社ではこのプラットフォームにおけるバグの修正やテストは実施いたしません．';

    const JA_IE_TITLE = 'Internet Explorer 11のサポートを間もなく終了いたします';
    switch (language) {
        case 'en':
            translatedContent = {
                title: IE_TITLE,
                paragraph: IE_PARAGRAPH,
                closeButton: IE_CLOSE
            };
            break;
        case 'ja':
            translatedContent = {
                title: JA_IE_TITLE,
                paragraph: JA_IE_PARAGRAPH,
                closeButton: JA_IE_CLOSE
            };
            break;
        default:
            translatedContent = {
                title: IE_TITLE,
                paragraph: IE_PARAGRAPH,
                closeButton: IE_CLOSE
            };
    }
    const comma1 = document.createTextNode(', ');
    const comma2 = document.createTextNode(', ');
    const comma3 = document.createTextNode(', ');
    const period = document.createTextNode('.');

    const CHROME = document.createElement('a');
    createLink(CHROME, 'Chrome', 'https://www.google.com/chrome/');

    const FIREFOX = document.createElement('a');
    createLink(FIREFOX, 'Firefox', 'https://www.mozilla.org/');

    const SAFARI = document.createElement('a');
    createLink(SAFARI, 'Safari', 'https://www.apple.com/safari/');

    const EDGE = document.createElement('a');
    createLink(EDGE, 'Edge', 'https://www.microsoft.com/edge/');

    const wrapper = document.createElement('div');
    wrapper.style.cssText =
        'position:fixed;overflow-y:scroll;left:0;top:0;width:100%;height:100%;z-index:100;background:white;text-align:right;';
    const contentWrapper = document.createElement('div');
    contentWrapper.style.cssText = 'display:flex;flex-direction:column;align-items:center;';
    const title = document.createElement('h1');
    title.style.cssText =
        'max-width:70%;margin: 15px;font-family: Lexia;font-size: 21px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: 1.38;letter-spacing: 0.2px;text-align: center;color: #32708f;';
    title.textContent = translatedContent.title;
    const paragraph = document.createElement('p');
    paragraph.textContent = translatedContent.paragraph;
    const paragraphWidth = window.innerWidth < 600 ? 'width:80%;' : 'width:60%;';
    paragraph.style.cssText = paragraphWidth + 'font-family: WebRoboto, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", Meiryo, メイリオ, Arial, Helvetica, sans-serif;font-size: 14px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: 1.86;letter-spacing: 0.13px;text-align: center;color: #535353;';
    const img = new Image();
    img.src = '_next/static/images/IEWolf.png';
    img.style.cssText = 'max-width:234px;max-height:234px;';
    const closeButton = document.createElement('button');
    closeButton.style.cssText =
        'border: none;font-family: WebRoboto, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", Meiryo, メイリオ, Arial, Helvetica, sans-serif;font-size: 14px;font-weight: normal;font-stretch: normal;font-style: normal;cursor:pointer;line-height: 1.86;letter-spacing: 0.13px;text-align: right;margin-right: 15px;margin-top: 15px;color: #32708f;background:white;';
    closeButton.innerHTML = translatedContent.closeButton;
    closeButton.addEventListener('click', function () {
        wrapper.parentNode.removeChild(wrapper);
        // $FlowFixMe
        document.body.style.overflowY = 'visible';
    });
    // $FlowFixMe
    document.body.style.overflowY = 'hidden';

    const browsers = [CHROME, SAFARI, FIREFOX, EDGE];
    shuffleArray(browsers);
    const punctuation = [comma1, comma2, comma3, period];

    for (let i = 0; i < browsers.length; i++) {
        paragraph.appendChild(browsers[i]);
        paragraph.appendChild(punctuation[i]);
    }

    contentWrapper.appendChild(img);
    contentWrapper.appendChild(title);
    contentWrapper.appendChild(paragraph);

    wrapper.appendChild(closeButton);
    wrapper.appendChild(contentWrapper);
    document.body.appendChild(wrapper);
}
