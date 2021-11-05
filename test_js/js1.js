.language {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    color: #fff;
    font - size: 14px;
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    -webkit - box - align: center;
    -ms - flex - align: center;
    align - items: center;
    margin - right: 20px;
}
.language img {
    width: 20px;
    margin - right: 10px;
    display: block;
}
.language__list {
    position: absolute;
    width: 120px;
    -webkit - box - shadow: 0 5px 10px 0 rgba(0, 0, 0, .3);
    box - shadow: 0 5px 10px 0 rgba(0, 0, 0, .3);
    border - radius: 0 0 5px 5px;
    border: 1px solid rgba(0, 0, 0, .1);
    background - color: rgba(58, 62, 63, .9);
    top: 20px;
    left: -10px;
    padding: 5px 0;
}
.language__list.language {
    padding: 3px 10px;
    margin - bottom: 5px;
}
.mac - top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100 %;
    height: 25px;
    background: -webkit - gradient(linear, left top, left bottom, from(rgba(58, 62, 63, .9)), to(rgba(47, 50, 52, .9)));
    background: linear - gradient(rgba(58, 62, 63, .9), rgba(47, 50, 52, .9));
    color: #fff;
    font - size: 16px;
    -webkit - box - sizing: border - box;
    box - sizing: border - box;
    padding: 3px 25px 2px;
    -webkit - box - align: center;
    -ms - flex - align: center;
    align - items: center;
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    -webkit - box - pack: justify;
    -ms - flex - pack: justify;
    justify - content: space - between;
    font - size: 14px;
    -webkit - box - shadow: 0 1px 0 hsla(0, 0 %, 49.8 %, .4), 0 2px 10px rgba(0, 0, 0, .1);
    box - shadow: 0 1px 0 hsla(0, 0 %, 49.8 %, .4), 0 2px 10px rgba(0, 0, 0, .1);
    z - index: 2;
}
.mac - top__logo {
    font - size: 12px;
    font - weight: 700;
}
.mac - top__right {
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
}
.mac - top__languages, .window {
    position: relative;
}
.window {
    max - height: 100 %;
    z - index: 1;
    -webkit - transition: opacity .3s ease, -webkit - transform .3s ease -in -out;
    transition: opacity .3s ease, -webkit - transform .3s ease -in -out;
    transition: transform .3s ease -in -out, opacity .3s ease;
    transition: transform .3s ease -in -out, opacity .3s ease, -webkit - transform .3s ease -in -out;
}
.window__body {
    background: rgba(57, 61, 62, .95);
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    height: calc(100 % - 38px);
    overflow: auto;
}
.window__body.about, .window__body.contacts, .window__body.home {
    padding: 10px 0;
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    -webkit - box - orient: vertical;
    -webkit - box - direction: normal;
    -ms - flex - direction: column;
    flex - direction: column;
    border - right: 1px solid rgba(0, 0, 0, .7);
    -webkit - box - align: start;
    -ms - flex - align: start;
    align - items: flex - start;
    max - height: 100 %;
    overflow: auto;
    width: 250px;
    height: 100 %;
    -ms - flex - negative: 0;
    flex - shrink: 0;
}
.window__body.about > a, .window__body.contacts > a, .window__body.home > a {
    display: block;
    width: 100 %}
.window--maximized {
    height: 100vh!important;
    width: 100vw!important;
    overflow: hidden;
    left: 0!important;
    top: 0!important;
    z - index: 3;
}
.window--folder {
    -webkit - transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit - transition: opacity .3s ease .2s, -webkit - transform .3s ease -in -out;
    transition: opacity .3s ease .2s, -webkit - transform .3s ease -in -out;
    transition: transform .3s ease -in -out, opacity .3s ease .2s;
    transition: transform .3s ease -in -out, opacity .3s ease .2s, -webkit - transform .3s ease -in -out;
}
.window--minimized {
    height: 38px!important;
    overflow: hidden;
    top: auto!important;
    bottom: 0!important;
    width: 300px!important;
}
.window--minimized.window__head - center {
    display: none;
}
.light {
    position: relative;
    width: 13px;
    height: 13px;
}
.light--yellow:hover {
    cursor: pointer;
}
.light--yellow: hover:after {
    content: " ";
    position: absolute;
    width: 9px;
    top: 6px;
    left: 2px;
    height: 1px;
    background: rgba(0, 0, 0, .7);
}
.window--minimized.light--yellow: hover:before {
    content: " ";
    position: absolute;
    height: 9px;
    left: 6px;
    top: 2px;
    width: 1px;
    background: rgba(0, 0, 0, .7);
}
.light--green:hover {
    cursor: pointer;
}
.light--green: hover: after, .light--green: hover:before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    top: 3px;
    left: 5px;
    border - right: 3px solid transparent;
    border - top: 3px solid transparent;
    border - bottom: 3px solid rgba(0, 0, 0, .7);
    -webkit - transform: translate(-.5px, -.5px);
    transform: translate(-.5px, -.5px);
}
.light--green: hover:before {
    top: 5px;
    left: 6px;
    border - right: none;
    border - left: 3px solid transparent;
    border - bottom: 3px solid transparent;
    border - top: 3px solid rgba(0, 0, 0, .7);
}
.resizer {
    background: #fff;
    height: 20px;
    width: 20px;
    bottom: -10px;
    right: -10px;
    position: absolute;
    z - index: 3;
    cursor: nwse - resize;
    opacity: 0;
    background: red;
}
.icon {
    text - align: center;
    padding: 5px 20px 5px 12px;
    cursor: pointer;
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    width: 100 %;
    -webkit - box - pack: start;
    -ms - flex - pack: start;
    justify - content: flex - start;
    -webkit - box - align: center;
    -ms - flex - align: center;
    align - items: center;
    position: relative;
}
.icon--folder:after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    border - top: 5px solid transparent;
    border - bottom: 5px solid transparent;
    border - left: 5px solid #fff;
    right: 10px;
}
.icon__name {
    line - height: 1.2;
    white - space: nowrap;
    overflow: hidden;
    text - overflow: ellipsis;
}
.icon__img {
    display: block;
    max - height: 20px;
    width: 20px;
    -ms - flex - negative: 0;
    flex - shrink: 0;
    margin - right: 10px;
}
div.icon__img {
    width: 20px;
}
div.icon__img--project {
    overflow: hidden;
    background: #fff;
    border - radius: 4px;
}
div.icon__img--project img {
    height: 20px;
    width: 20px;
    -o - object - fit: cover;
    object - fit: cover;
}
.router - link - active.icon {
    background: hsla(0, 0 %, 100 %, .2);
}
html {
    line - height: 1.15;
    -ms - text - size - adjust: 100 %;
    -moz - text - size - adjust: 100 %;
    -webkit - text - size - adjust: 100 %;
    font - size: 16px;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
padding: 0;
border: 0;
}
main {
    display: block;
}
b, strong {
    font - weight: bolder;
}
*, : after, :before {
    -webkit - box - sizing: border - box;
    box - sizing: border - box;
}
img {
    border - style: none;
}
a {
    color: inherit;
    cursor: pointer;
    background - color: transparent;
    -webkit - transition: all .3s;
    transition: all .3s;
}
a, a: focus, a:hover {
    text - decoration: none;
}
button, input, select, textarea {
    border: none;
    outline: none;
    border - radius: 0;
    -webkit - appearance: none;
    font - family: inherit;
    font - size: 100 %;
    line - height: 1.15;
    margin: 0;
}
textarea {
    resize: vertical;
    overflow: auto;
}
:: -ms - clear {
    display: none;
}
button, input {
    overflow: visible;
}
button {
    cursor: pointer;
    border: none;
    outline: none;
}
button, select {
    text - transform: none;
}
[type = button]:: -moz - focus - inner, [type = reset]:: -moz - focus - inner, [type = submit]:: -moz - focus - inner, button:: -moz - focus - inner {
    border - style: none;
    padding: 0;
}
[type = button], [type = reset], [type = submit], button {
    -webkit - appearance: button;
}
[type = checkbox], [type = radio] {
    -webkit - box - sizing: border - box;
    box - sizing: border - box;
    padding: 0;
}
[type = search]:: -webkit - search - decoration {
    -webkit - appearance: none;
}
[type = search] {
    -webkit - appearance: textfield;
    outline - offset: -2px;
}
:: -webkit - file - upload - button {
    -webkit - appearance: button;
    font: inherit;
}
input[type = number]:: -webkit - inner - spin - button, input[type = number]:: -webkit - outer - spin - button {
    -webkit - appearance: none;
    margin: 0;
}
input[type = number] {
    -moz - appearance: textfield;
}
select:: -ms - expand {
    display: none;
}
* {
    - webkit - box - sizing: border - box;
box - sizing: border - box;
}
h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
}
ol, ul {
    padding: 0;
    list - style: none;
}
a, a: focus, a:hover {
    color: inherit;
    text - decoration: none;
}
img {
    max - width: 100 %}
textarea {
    width: 100 %;
    resize: none;
    border: none;
    outline: none;
    border - radius: 0;
}
label {
    margin: 0;
}
button, input, select {
    border: none;
    outline: none;
}
input {
    border - radius: 0;
}
body, html {
    height: 100 %;
    letter - spacing: .32px;
}
@font-face {
    font - family: SF UI Text;
    src: url(../fonts/SFProDisplay - Light.ee4df704.woff2) format("woff2"), url(../fonts/SFProDisplay - Light.ec2b2dc1.woff) format("woff"), url(../fonts/SFProDisplay - Light.62c1d1a1.ttf) format("truetype");
    font - weight: 400;
    font - style: normal;
}
@font-face {
    font - family: SF UI Text;
    src: url(../fonts/SFProDisplay - Semibold.20dd09b5.woff2) format("woff2"), url(../fonts/SFProDisplay - Semibold.0ed97b1b.woff) format("woff"), url(../fonts/SFProDisplay - Semibold.c46379e6.ttf) format("truetype");
    font - weight: 700;
    font - style: normal;
}
body {
    font - family: serif;
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    -webkit - box - orient: vertical;
    -webkit - box - direction: normal;
    -ms - flex - direction: column;
    flex - direction: column;
    margin: 0;
    color: #0f0f10;
    font - weight: 400;
    font - size: 1rem;
    position: relative;
    font - family: SF UI Text;
}
.bg, body, html {
    height: 100vh;
    overflow: hidden;
    width: 100vw;
}
.bg {
    background - color: #012da9;
    background: url(../img/bg.c0260ee3.jpg) no - repeat 50 %;
    background - size: cover;
    position: relative;
}
#bg {
    background - image: url(../img/back_mob.efa80968.jpg);
    background - size: cover;
}
.window {
    width: 1020px;
    position: absolute;
    height: 600px;
    left: calc(50 % - 510px);
    top: 13vh;
    border - radius: 5px;
    overflow: hidden;
    border: 1px solid #5f6263;
    -webkit - box - shadow: 0 0 0 1px #2f3235;
    box - shadow: 0 0 0 1px #2f3235;
}
.window--shop {
    width: 100 % !important;
    position: fixed;
    top: 0!important;
    left: 0!important;
    z - index: 100;
    height: 100vh;
    border: none;
    border - radius: 0;
}
.window--shop.window__head {
    display: none;
}
.window--shop.window__body {
    top: 0;
    height: 100 %}
.window__head {
    background: -webkit - gradient(linear, left top, left bottom, from(#3a3e3f), to(#2f3234));
    background: linear - gradient(#3a3e3f, #2f3234);
    height: 38px;
    border - bottom: 1px solid #080808;
    padding - left: 12px;
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    -webkit - box - align: center;
    -ms - flex - align: center;
    align - items: center;
    -webkit - box - pack: justify;
    -ms - flex - pack: justify;
    justify - content: space - between;
    padding - right: 32px;
    cursor: move;
}
.left - controls, .lights {
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
}
.lights {
    width: 52px;
    -webkit - box - pack: justify;
    -ms - flex - pack: justify;
    justify - content: space - between;
    -webkit - box - align: center;
    -ms - flex - align: center;
    align - items: center;
    margin - right: 13px;
    -ms - flex - negative: 0;
    flex - shrink: 0;
}
.light {
    width: 12px;
    height: 12px;
    border - radius: 100 %;
    background: #000;
}
.light--red {
    background: #ff5a52;
    cursor: pointer;
}
.light--yellow {
    background: #e6c02a;
}
.light--green {
    background: #53c22b;
}
.nav {
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
}
.nav - btn {
    width: 25px;
    height: 22px;
    -webkit - box - shadow: inset 0 1px 0 #75787a;
    box - shadow: inset 0 1px 0 #75787a;
    border - radius: 3px;
}
.nav - btn--prev {
    margin - right: 1px;
    background: url(../img/prev.13942408.svg) 50 % no - repeat;
    background - size: contain;
}
.nav - btn--prev.nav - btn--active {
    background - image: url(../img/prev_active.d0bc25f7.svg);
    cursor: pointer;
}
.nav - btn--next {
    background: url(../img/next.faa4306f.svg) 50 % no - repeat;
    background - size: contain;
    margin - right: 10px;
}
.nav - sidebar {
    width: 37px;
    height: 22px;
    background: url(../img/sidebar.9191f08a.svg) 50 % no - repeat;
    background - size: contain;
}
.right - controls {
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
}
.right - controls.nav - btn {
    width: 37px;
}
.nav - btn--share {
    margin - right: 8px;
    background: url(../img/share.1916d54a.svg) 50 % no - repeat;
    background - size: contain;
}
.nav - btn--overview {
    margin - right: 8px;
    background: url(../img/overview.fec8a789.svg) 50 % no - repeat;
    background - size: contain;
}
.window__head - center {
    width: 50 %;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}
.url {
    width: 100 %;
    text - align: center;
    background: -webkit - gradient(linear, left top, left bottom, from(#65686a), to(#5f6263));
    background: linear - gradient(180deg, #65686a, #5f6263);
    -webkit - box - shadow: inset 0 1px 0 #75787a;
    box - shadow: inset 0 1px 0 #75787a;
    border - radius: 4px;
    color: #e9e9ea;
    font - weight: 500;
    font - size: 12px;
    height: 22px;
    line - height: 22px;
    font - family: SF UI Text;
    font - style: normal;
    position: relative;
}
.url__refresh {
    position: absolute;
    background: url(../img/refresh.f152ebf0.svg) 50 % no - repeat;
    background - size: contain;
    right: 7px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 11px;
    height: 13px;
}
.window__body {
    position: absolute;
    top: 38px;
    width: 100 %;
    color: #fff;
}
.window.window--link {
    z - index: 10;
    display: none;
    -webkit - transform: translate(10px, 10px);
    transform: translate(10px, 10px);
}
.cp {
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    padding: 24px 0 24px 24px;
    max - height: 100 %}
.cp iframe {
    max - width: 100 %}
.cp__left {
    width: 35 %;
    -ms - flex - negative: 0;
    flex - shrink: 0;
}
.cp__left img {
    max - height: 500px;
    display: block;
}
.page {
    margin - left: 20px;
    overflow: auto;
    padding - right: 24px;
    padding - bottom: 20px;
}
div:: -webkit - scrollbar {
    background - color: rgba(57, 61, 62, .9);
    width: 5px;
    opacity: 0;
}
div:: -webkit - scrollbar - track {
    background - color: rgba(57, 61, 62, .9);
    opacity: 0;
}
div:: -webkit - scrollbar - thumb {
    background - color: #6f7171;
    border - radius: 5px;
    opacity: 0;
}
div:: -webkit - scrollbar - button {
    display: none;
}
body, html {
    min - height: 400px;
    overflow - y: auto;
}
.animation - enter, .animation - leave - to {
    opacity: 0;
}
.animation - enter - active, .animation - leave - active {
    -webkit - transition: opacity .1s;
    transition: opacity .1s;
}
#app {
    z - index: 2;
}
html {
    background: url(../img/bg.c0260ee3.jpg);
}
.home - wrapper {
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
}
.main - icon {
    background: url(data: image / png;
    base64, iVBORw0KGgoAAAANSUhEUgAAAWMAAAEACAMAAABRfOcnAAACAVBMVEUAAACq / f8BBAVqy / hrzPmX3f + 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);
    width: 89px;
    height: 64px;
    background - size: cover;
    top: 50 %;
    left: 50 %;
    -webkit - transform: translate(-50 %, -50 %) scale(0);
    transform: translate(-50 %, -50 %) scale(0);
    opacity: 0;
    -webkit - transition: opacity .3s ease, transform .3s ease;
    transition: opacity .3s ease, transform .3s ease;
}
.main - icon, .main - icon span {
    position: absolute;
    cursor: pointer;
}
.main - icon span {
    color: #fff;
    font - size: 14px;
    top: calc(100 % + 3px);
    width: 100 %;
    text - align: center;
}
.window--folder +.main - icon {
    opacity: 1;
    -webkit - transform: translate(-50 %, -50 %);
    transform: translate(-50 %, -50 %);
    -webkit - transition: opacity .3s ease .2s, transform .3s ease;
    transition: opacity .3s ease .2s, transform .3s ease;
}