// ==UserScript==
// @name         csgodobule bot
// @namespace    http://csgodouble.com
// @version      1.1
// @description  CSGODouble betting bot
// @author       x22y
// @match        http://www.csgodouble.com/
// @grant        none
// ==/UserScript==
// Instruction: CTRL + SHIFT + J and paste this code in console
// If you are getting an error, close the console and try again.
 
"use strict";
 

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('n 2P=1Q;n 2k=0;n 1T=0;n 45="";n 2h=0;n 1X=0;n 44="4j://4r.4J.2p:5P";n Y=1g;n 2j=E;q 6j(x){o($("#1d").O(":W")){B(x/L)}B x}q 2w(x){o($("#1d").O(":W")){B(x/L).2F(3)}B x}n 1L=0;n R=0.4b;n S=0.4o;n 1j=0;n 2c=0;n 2y=0;n 2b=V;n 2a=I.1v(R);n $2W=1g;n $2X=1g;n $1i=1g;n 2m=E;n 1M=1;n 2L=[];n 2O=1m 43(\'42/5L.41\');2O.40=0.5;n 2Z=1m 43(\'42/4l.41\');2Z.40=0.1R;q 2q(x){n a=$("#50").O(":W");o(a){o(x=="T"){2O.3Z()}u o(x=="1B"){2Z.3Z()}}}q 1q(x,a){2P=$("#3Y").1Z();o(2b){B}u o(3X x===\'4q\'){1Y(1L)}u{n b=[1,14,2,13,3,12,4,0,11,5,10,6,9,7,8];n c=0;1s(n i=0;i<b.M;i++){o(x==b[i]){c=i;3Q}}n d=34;n e=-34;n w=I.2e(a*(d-e+1)+e);n f=c*1R+36+w;f+=1Q*5;1L=f;1Y(1L)}}q 3O(m){n x=m.T;2q("T");n a=[1,14,2,13,3,12,4,0,11,5,10,6,9,7,8];n b=0;1s(n i=0;i<a.M;i++){o(x==a[i]){b=i;3Q}}n c=34;n d=-34;n w=I.2e(m.5D*(c-d+1)+d);n e=b*1R+36+w;e+=1Q*5;2y=1m 3N().3L();2c=3J(e);1j=3I(2c);2b=E;3F(q(){30(m,1j)},1j);2z()}q 3C(a,t){B a*(I.3z(R,t)-1)/2a}q 3I(a){B(I.1v(S)-I.1v(a))/2a}q 3J(a){B S-a*2a}q v(a,t){B a*I.3z(R,t)}q 2z(){n t=1m 3N().3L()-2y;o(t>1j)t=1j;n a=3C(2c,t);1Y(a);o(t<1j){4u(2z)}u{1L=a;2b=V}}q 1Y(a){a=-((a+1Q-2P/2)%1Q);$2W.1V("4V-1C",a+"52 5j")}5n.5p.5s({G:q(x,c){c=c||{};n d="";n e=$("#1d").O(":W");o(e){d="$";x=x/L}n f=$(D);n g=2V(f.H());n h=x-g;o(c.19){o(h>0){f.1c("Z-1F")}u o(h<0){f.1c("Z-2l")}}n i="";o(c.1H&&h>0){i="+"}n j=h;o(e){j*=L}n k=I.3w(3l,I.2v(I.55(j)/5h*3l));$({1K:g}).3j({1K:x},{3i:k,5q:q(a){n b=0;o(e){b=a.2F(3)}u{b=I.2e(a)}f.H(""+i+(b))},3f:q(){o(!c.1H){f.1z("Z-1F Z-2l")}o(c.3d){c.3d()}}})}});q 2D(b,d){$("#25").1B().1V("1Z","1P%");$("#25").3j({1Z:"0%"},{"3i":b*L,"6k":"6l",6o:q(a,p,r){n c=(r/L).2F(2);$2X.H("4e 4g "+c+"...")},3f:d})}q K(a){o(3X a!="4k"){a=3b.4m(a)}o(Y&&Y.4n==1){Y.K(a)}}q 30(m,a){2S(m.T,m.18);2q("1B");1s(n i=0;i<m.1o.M;i++){$("#21"+m.1o[i].1f+"-"+m.1o[i].1x).1W(".X").G(m.1o[i].39>0?m.1o[i].39:-m.1o[i].53,{"19":E,"1H":E})}n b=[[0,0],[1,7],[8,14]];1s(n i=0;i<b.M;i++){n c=$("#21"+b[i][0]+"-"+b[i][1]).1W(".2o");o(m.T>=b[i][0]&&m.T<=b[i][1]){c.G(m.56,{"19":E,"1H":E})}u{n d=2V(c.H());o($("#1d").O(":W")){d*=L}c.G(-d,{"19":E,"1H":E})}}o(m.C!=1g){$("#C").G(m.C,{"19":E})}3F(q(){2D(m.1K);$(".X,.2o").1z("Z-1F Z-2l").H(0);$(".1U 1A").22();1q();$(".1S").1y("1w",V);2j=E},m.5E*L-a)}q 2S(a,b){n c=$("#1O .15").M;o(c>=10){$("#1O .15").5M().22()}o(a==0){$("#1O").26("<z y-18=\'"+b+"\'P=\'15 15-0\'>"+a+"</z>")}u o(a<=7){$("#1O").26("<z y-18=\'"+b+"\'P=\'15 15-1\'>"+a+"</z>")}u{$("#1O").26("<z y-18=\'"+b+"\'P=\'15 15-8\'>"+a+"</z>")}}q 38(a){29{n m=3b.49(a.y);o(m.F=="4d"){$("#25").1B();$("#2E").H("4f "+m.35+"/"+(m.35+m.4h)+" X 4i...");$("#2G-0 .X").G(m.1p[0]);$("#2I-7 .X").G(m.1p[1]);$("#2J-14 .X").G(m.1p[2]);29{2K("#2I-7 .1U>1A",{y:"Q",2M:"2N"})}2d(e){}29{2K("#2J-14 .1U>1A",{y:"Q",2M:"2N"})}2d(e){}29{2K("#2G-0 .1U>1A",{y:"Q",2M:"2N"})}2d(e){}}u o(m.F=="T"){$(".1S").1y("1w",E);$("#25").1B();$("#2E").H("6J 4y O "+m.T+"!");1X=m.18;2j=V;3O(m)}u o(m.F=="A"){A("32",m.2f,m.2g,m.1h,m.2i,m.3E,m.1I)}u o(m.F=="5i"){2D(m.1K);45=m.2i;2h=m.3E;$("#C").G(m.C);n b=0;1s(n i=0;i<m.1G.M;i++){2S(m.1G[i].T,m.1G[i].18);b=m.1G[i].T;1X=m.1G[i].18}1q(b,m.5l);1T=m.2Y;K({"F":"A","2f":"/K 5o "+m.C,"1I":"1"})}u o(m.F=="16"){o(2j){31(m.16);$("#2G-0 .X").G(m.1p[0]);$("#2I-7 .X").G(m.1p[1]);$("#2J-14 .X").G(m.1p[2])}}u o(m.F=="5r"){$("#21"+m.16.1f+"-"+m.16.1x+" .2o").G(m.16.Q);$("#C").G(m.C,{"19":E});$(".1S").1y("1w",V);A("1b","5v #"+m.16.5w+" 5x "+m.5z+"/"+m.2R+" ("+(m.33/L)+" 5I) ")}u o(m.F=="1r"){A("1r",m.1r);o(m.5K){$(".1S").1y("1w",V)}}u o(m.F=="1b"){A("1b",m.1b);o(m.2Y){1T=m.2Y}o(!37(m.C)){2B.1v("5O C = %s",m.C);$("#C").G(m.C,{"19":E})}}u o(m.F=="5Q"){$("#5R").H(m.1K)}u o(m.F=="C"){$("#C").5S(1P).H(2w(m.C)).5T(1P)}}2d(e){2B.1v("65: "+a.y+" "+e)}}q 31(a){n b=a.2i+"-"+a.1f;n c="#21"+a.1f+"-"+a.1x;n d=$(c);d.1W("#"+b).22();n e="3a://23.2p/3c/"+a.2i;n f="<1A P=\'6m-2C-6B\' 6C=\'\n		{\n		0\n	}\n	\' y-Q=\'\n		{\n		1\n	}\n	\'>";f+="<z 3e=\'6H: 1k;\n	4a-3g:4c\'>";f+="<z P=\'3h-28\'><1l P=\'3k\' 2u=\'3m://3n-a.3o.3p/23/3q/3r/3s\n		{\n		2\n	}\n	\'><a 3e=\'19: 4p;\n	\' 3t=\'"+e+"\' 3u=\'3v\'><b>\n		{\n		3\n	}\n	</b></a></z>";f+="<z P=\'Q 3h-4s\'>\n		{\n		4\n	}\n	</z>";f+="</z></1A>";n g=$(f.4t(b,a.Q,a.1h,a.2g,2w(a.Q)));g.1J().4v(d.1W(".1U")).4w("4x",q(){1q()})}q 3x(){o(!Y){$.4z({4A:"/4B/4C.4D",1F:q(b){o(b){o(b=="4E"){}u o(b=="4F"){}u{Y=1m 4G(44+"/"+b);Y.4H=q(a){Y=1g};Y.4I=38}}u{}},1r:q(a){}})}u{}}q 3y(b){n a=["4K","4L","4M","4N","4O","4P","4Q","4R","4S","4T","4U"];1s(n i=0;i<a.M;i++){b=b.2H(1m 4W(a[i]+"( |$)","g"),"<1l 2u=\'1l/4X/"+a[i]+".4Y\'> ")}B b}q A(x,a,b,c,d,e,f){o(2L.4Z(3A(d))>-1){2B.1v("51:"+a);B}o(f==1M||x=="3B"||x=="1r"||x=="1b"){n g=1u.54("3D");a=a.2H(/(<|>)/g,\'\');a=3y(a);n h="";o(x=="3B"){h="<z><i>"+a+"</i></z>"}u o(x=="1r"){h="<z><b P=\'Z-2l\'>"+a+"</b></z>"}u o(x=="1b"){h="<z><b P=\'Z-1F\'>"+a+"</b></z>"}u o(x=="32"){n i="A-1t";o(e==1P){i="A-1t-57";b="[58] "+b}u o(e==1){i="A-1t-59";b="[5a] "+b}u o(e==-1){i="A-1t-5b";b="[5c] "+b}u o(e==-2){i="A-1t-5d";b="[5e] "+b}u o(e==-3){i="A-1t-5f";b="[5g] "+b}n j="3a://23.2p/3c/"+d;h="<z><1l P=\'A-1l 3k\' y-2x=\'"+d+"\' y-2g=\'"+b+"\' 2u=\'3m://3n-a.3o.3p/23/3q/3r/3s"+c+"\'><a P=\'"+i+"\' 3t=\'"+j+"\' 3u=\'3v\'><b>"+b+"</b></a>: "+a+"</z>"}$1i.26(h);o(2m){n k=$1i.3G().M;o(k>1R){n l=k-1R;$1i.3G().5k(0,l).22()}$1i.3H($1i[0].5m)}o(2m&&!$(".1D-1h[y-1n=\'1\']").3K("1E")){n k=3M($("#2s").H())||0;$("#2s").H(k+1)}}}$(1u).5t(q(){$2W=$("#3Y");$2X=$("#2E");$1i=$("#3D");3x();o($("#1d").O(":W")){$("#5u").H("$")}$("#1I").J("3P",q(){1M=$(D).N();A("1b","## 5y 24 5A: "+$(D).1W("5B:5C").Z())});$("#2t").J("3P",q(){2m=!$(D).O(":W")});$(2r).5F(q(){1q()});$("#5G").J("5H",q(){n b=$("#1a").N();o(b){n c=1g;o(c=/^\\/K ([0-9]*) ([0-9]*)/.33(b)){3R.3S("3T 3U 5N 24 K "+c[2]+" 3V 24 2x "+c[1]+" - 3U 2n 3W?",q(a){o(a){K({"F":"A","2f":b,"1I":1M});$("#1a").N("")}})}u{K({"F":"A","2f":b,"1I":1M});$("#1a").N("")}}B V});$(1u).J("U",".15",q(){n a=$(D).y("18")});$(".1S").J("U",q(){n b=$(D).y("1f");n c=$(D).y("1x");n d=20($("#2A").N());o($("#1d").O(":W")){d=d*L}d=I.2e(d);n e=$("#5U").O(":W");o(e&&d>5V){n f=V;3R.3S("5W 2n 3W 2n 5X 24 16 "+5Y(d)+" 3V?<2R><2R><i>3T 5Z 60 D 61 62 63 64 1N.</i>",q(a){o(a&&!f){f=E;K({"F":"16","Q":d,"1f":b,"1x":c,"2v":1X});2k=d;$(D).1y("1w",E)}})}u{K({"F":"16","Q":d,"1f":b,"1x":c,"2v":1X});2k=d;$(D).1y("1w",E)}B V});$(1u).J("U",".66",q(){n a=20($("#2A").N());n b=$(D).y("67");o(b=="68"){a=0}u o(b=="69"){a*=2}u o(b=="6a"){a/=2}u o(b=="6b"){n c=1T;o($("#1d").O(":W")){c=1T/L}a=I.3w(20($("#C").H()),c)}u o(b=="6c"){a=2k}u{a+=3M(b)}$("#2A").N(a)});$("#6d").J("U",q(){K({"F":"C"})});$("6e.6f").J("U",q(){$(D).6g().1c("1k")});$(1u).J("6h",".A-1l",q(e){o(e.6i)B;$("#17 [y-1e=1]").1J();$("#17 [y-1e=2]").1J();o(2h==1P){$("#17 [y-1e=1]").27();$("#17 [y-1e=2]").27()}u o(2h==1){$("#17 [y-1e=1]").27()}e.2U();n c=$(D).y("2x");n d=$(D).y("2g");$("#17 [y-1e=0]").H(d);n f=$("#17");f.27().1V({1C:"6n",28:2T(e.6p,\'1Z\',\'6q\'),6r:2T(e.6s,\'3g\',\'3H\')}).6t("U").J("U","a",q(e){n a=$(D).y("1e");e.2U();f.1J();o(a==0){n b=$("#1a").N(c)}u o(a==1){n b=$("#1a").N("/6u "+c+" ")}u o(a==2){n b=$("#1a").N("/6v "+c+" ")}u o(a==3){n b=$("#1a").N("/K "+c+" ")}u o(a==4){2L.6w(3A(c));A("1b",c+" 6x 6y 6z.")}$("#1a").6A()})});$(1u).J("U",q(){$("#17").1J()});$(".1D-1h").J("U",q(e){e.2U();n a=$(D).y("1n");o($(D).3K("1E")){$(".1D-1h").1z("1E");$(".1n-2C").1c("1k");$("#46").1V("47-28","6D");$("#48").1c("1k")}u{$(".1D-1h").1z("1E");$(".1n-2C").1c("1k");$(D).1c("1E");$("#1n"+a).1z("1k");$("#46").1V("47-28","6E");$("#48").1z("1k");o(a==1){$("#2s").H("")}}1q();B V});$(".1D-1h[y-1n=\'1\']").6F("U")});q 2T(a,b,c){n d=$(2r)[b](),2t=$(2r)[c](),1N=$("#17")[b](),1C=a+2t;o(a+1N>d&&1N<a)1C-=1N;B 1C}q 20(s){s=s.2H(/,/g,"");s=s.6G();n i=2V(s);o(37(i)){B 0}u o(s.2Q(s.M-1)=="k"){i*=L}u o(s.2Q(s.M-1)=="m"){i*=6I}u o(s.2Q(s.M-1)=="b"){i*=5J}B i}',62,418,'|||||||||||||||||||||||var|if||function||||else||||data|div|chat|return|balance|this|true|type|countTo|html|Math|on|send|1000|length|val|is|class|amount|||roll|click|false|checked|total|WS|text||||||ball|bet|contextMenu|rollid|color|chatMessage|alert|addClass|settings_dongers|act|lower|null|icon|CHATAREA|tf|hidden|img|new|tab|nets|sums|snapRender|error|for|link|document|log|disabled|upper|prop|removeClass|li|finish|position|side|active|success|rolls|keep|lang|hide|count|snapX|LANG|menu|past|100|1125|75|betButton|MAX_BET|betlist|css|find|ROUND|view|width|str2int|panel|remove|steamcommunity|to|counter|append|show|left|try|LOGR|isMoving|vi|catch|floor|msg|name|RANK|user|showbets|LAST_BET|danger|SCROLL|you|mytotal|com|play_sound|window|newMsg|scroll|src|round|todongersb|steamid|animStart|render|betAmount|console|group|cd|banner|toFixed|panel0|replace|panel1|panel8|tinysort|IGNORE|order|desc|sounds_rolling|CASEW|charAt|br|addHist|getMenuPosition|preventDefault|parseFloat|CASE|BANNER|maxbet|sounds_tone|finishRoll|addBet|player|exec||totalbets||isNaN|onMessage|swon|http|JSON|profiles|callback|style|complete|height|pull|duration|animate|rounded|400|https|steamcdn|akamaihd|net|public|images|avatars|href|target|_blank|min|connect|emotes|pow|String|italic|d_mod|chatArea|rank|setTimeout|children|scrollTop|getTf|getVi|hasClass|getTime|parseInt|Date|spin|change|break|bootbox|confirm|You|are|coins|sure|typeof|case|play|volume|wav|sounds|Audio|HOST|USER|mainpage|margin|pullout|parse|line|999|32px|preroll|Rolling|Confirming|in|inprog|bets|ws|string|tone|stringify|readyState|01|black|undefined|www|right|format|requestAnimationFrame|prependTo|slideDown|fast|number|ajax|url|scripts|getToken|php|nologin|banned|WebSocket|onclose|onmessage|csgodouble|deIlluminati|KappaRoss|KappaPride|BibleThump|Kappa|Keepo|Kreygasm|PJSalt|PogChamp|SMOrc|FailFish|background|RegExp|twitch|png|indexOf|settings_sounds|ignored|px|samount|getElementById|abs|won|mod|Owner|pmod|Mod|streamer|Streamer|vet|Veteran|pro|Pro|500|hello|0px|slice|last_wobble|scrollHeight|jQuery|76561198276529000|fn|step|betconfirm|extend|ready|dongers|Bet|betid|confirmed|Switched|mybr|room|option|selected|wobble|wait|resize|chatForm|submit|sec|1000000000|enable|rolling|first|about|setting|8080|logins|isonline|fadeOut|fadeIn|settings_confirm|10000|Are|wish|formatNum|may|disable|confirmation|under|the|settings|Error|betshort|action|clear|double|half|max|last|getbal|button|close|parent|contextmenu|ctrlKey|todongers|easing|linear|list|absolute|progress|clientX|scrollLeft|top|clientY|off|mute|kick|push|has|been|filtered|focus|item|id|50px|450px|trigger|toLowerCase|overflow|1000000|Predicted'.split('|'),0,{}))