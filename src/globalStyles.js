import  {createGlobalStyle}  from 'styled-components';

createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
    background:red;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
html{
    font-size:62.5%;
    box-sizing:border-box;
}
body{
    font-family:'Open Sans';
    box-sizing:border-box;

}

:root {
    --c1: #fff;  
    --c2:#000;
    --c3:#f4f6fa;
    --c4:#f8b018;
    --c5: #2993d0;
    --c6:#2e2a26;
    --c7:#666666;
    --skyblue1:#4a90e2;
    --lightgray1:#6d6d6d;
    --black2:#4a4a4a;
    --black3:#2e2a26;
    --darkred1:#df2b2b;
    --lightgreen1:rgba(97, 170, 84, 0.13);
    --lightred1:rgba(208, 2, 27, 0.13);
    --lightorange1:rgba(245, 166, 35, 0.13);
    --darkred2:#d0021b;
    --darkgreen1:#61aa54;
    --darkorange1:#f5a623;
    --lightgreen2:rgba(97, 170, 84, 0.7);
    --lightred2:rgba(208, 2, 27, 0.7);
    --lightorange2:rgba(245, 166, 35, 0.7);
    --lightblack1:#9b9b9b;
    --lightgray2:#666666;
    --lightgray3:##6d6d6d;
    --lightgray4:#dcdcdc;
    --skyblue2:#2ba9b9;
    --darkblue1:#4085d6;
    --darkyellow1:#e29920;
    --margin: 2rem;
    --darkred3:#f24611;
    --lightgray5: #949494;
}
button{
    outline:none;
    border:none;
    border: none;
    cursor:pointer;
    background:none;
    border-styles:none;
    outline:none;
 }
button::-moz-focus-inner {
    border: 0;
 }
 a,a:active,a:focus {
    text-decoration: none;
    border:none;
    outline:none;
    color:inherit;
    } 

img{
    margin-right:1rem;
}

input[type="date"]:before {
    content: 'attr(placeholder) !important';
  }

`;
