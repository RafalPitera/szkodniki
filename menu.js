//!!!Edit the appearance here!!!
 
MenuWidth=105;           //Individual menu width.
MenuFont='Tahoma,Arial';
MenuFontSize='11';          // wiekosc czcionki definiowana w pikselach. 
MenuFontColor='#000000';
MenuBgColor='#fff000';
HighLight='#FFFFFF';
Separater=5;             //Space around menus.
Centre=true;             //true or false.

//!!!Alter nothing here, go straight to "Links"!!!

n4=(document.layers);
n6=(document.getElementById&&!document.all);
ie=(document.all);
h=(ie)?document.body.clientHeight:window.innerHeight;
w=(ie)?document.body.clientWidth:window.innerWidth;
Titles=new Array()
Links=new Array()

algn1=(Centre)?'<center>':'';
algn2=(Centre)?'</center>':'';

function colour2(c){(n4)?c.bgColor=HighLight:c.style.background=HighLight}//
function colour1(c){(n4)?c.bgColor=MenuBgColor:c.style.background=MenuBgColor}//

var OpenLayer=(n4)?"<br><layer height=100% width=100% onMouseOver='colour1(this)'; onMouseOut='colour2(this)'>"+algn1:"<div style='height:auto;width:100%' onMouseOver='colour1(this)'; onMouseOut='colour2(this)'><div style='font-family: "+MenuFont+"; font-size: "+MenuFontSize+"; color: "+MenuFontColor+"'>";
var CloseLayer=(n4)?algn2+"</layer>":"</div></div>";

var vs=(n4)?"<font face='Wingdings' color="+MenuBgColor+">n</font>":OpenLayer+"&nbsp;"+CloseLayer+"<font color="+MenuBgColor+" size=2>"+"<br>"+String.fromCharCode(9660)+"</font>";


/*************************************Links here****************************************

First off, alter the Titles to whatever. Add/delete as needed, make sure they're
numbered in order.

Now fill the Links with your er..links, as many as needed. Here's how.
Example:
+OpenLayer+"<a href='../../../../www.google.com/default.htm' class='x'>Search with Google</a>"+CloseLayer

If you need to have quots etc in the link text make sure you escape them with a backslash.
Example:
...class='x'> What\'s new </a>"+C...

***************************************************************************************/
Titles[0]="<B>Na pocz±tek</B>";
Titles[1]="<B>O ro¶linach</B>";
Titles[2]="<B>Hodowla</B>";
Titles[3]="<B>Ro¶liny</B>";
Titles[4]="<B>Choroby i szkodniki</B>";
Titles[5]="<B>Dodatki</B>";
Titles[6]="<B>Dane techniczne</B>";



Links[0]=vs

+OpenLayer+"<a href='http://rosiczka.blog.pl/' class='x'>Co nowego</a>"+CloseLayer
+OpenLayer+"<a href='../Spistresci.html' class='x'>Spis tre¶ci</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/faq.html' class='x'>FAQ</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/lacina.html' class='x'>Łacina</a>"+CloseLayer
+OpenLayer+"&nbsp;"+CloseLayer


Links[1]=vs
+OpenLayer+"<a href='../Podstrony/Botanika.html' class='x'>Odrobina botaniki</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Ciekawostki.html' class='x'>Ciekawostki</a>"+CloseLayer
+OpenLayer+"<a href='../galeria/galerie.html' class='x'>Galerie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/wpolsce.html' class='x'>Ro¶liny owadożerne w Polsce</a>"+CloseLayer
+OpenLayer+"&nbsp;"+CloseLayer

Links[2]=vs

+OpenLayer+"<a href='../Podstrony/Naslonecznienie.html' class='x'>Nasłonecznienie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Podlewanie.html' class='x'>Podlewanie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Wilgotnosc.html' class='x'>Wilgotno¶ć</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Nawozenie.html' class='x'>Nawożenie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Dokarmianie.html' class='x'>Dokarmianie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Przesadzanie.html' class='x'>Przesadzanie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Podloze.html' class='x'>Podłoże</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Rozmnazanie.html' class='x'>Rozmnażanie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Czyszczenie.html' class='x'>Czyszczenie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Spoczynek.html' class='x'>Okres spoczynku</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Rok.html' class='x'>Rok u ro¶lin owadożernych</a>"+CloseLayer
+OpenLayer+"<a href='' class='x'></a>"+CloseLayer
+OpenLayer+"&nbsp;"+CloseLayer


Links[3]=vs

+OpenLayer+"<a href='../Podstrony/Owadozerne.html' class='x'>Spis ro¶lin owadożernych</a>"+CloseLayer
+OpenLayer+"<a href='../Owadozer/cefalotus.html' class='x'>Cefalotus <i>(Cephalotus)</i></a>"+CloseLayer
+OpenLayer+"<a href='../Owadozer/dzbanecznik.html' class='x'>Dzbanecznik <i>(Napenthes)</i></a>"+CloseLayer
+OpenLayer+"<a href='../Owadozer/mucholowka.html' class='x'>Muchołówka <i>(Dionea)</i></a>"+CloseLayer
+OpenLayer+"<a href='../Owadozer/plywacze.html' class='x'>Pływacze <i>(Urticularia)</i></a>"+CloseLayer
+OpenLayer+"<a href='../Owadozer/rosiczki.html' class='x'>Rosiczki <i>(Drosera)</i></a>"+CloseLayer
+OpenLayer+"<a href='../Owadozer/rosolistnik.html' class='x'>Rosolistnik <i>(Drosophyllum)</i></a>"+CloseLayer
+OpenLayer+"<a href='../Owadozer/sarracenie.html' class='x'>Kapturnice <i>(Sarracenie)</i></a>"+CloseLayer
+OpenLayer+"<a href='../Owadozer/pinguiculia.html' class='x'>Tłustosze <i>(Pinguiculia)</i></a>"+CloseLayer
+OpenLayer+"----------"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Rosliny.html' class='x'>Inne ro¶liny</a>"+CloseLayer
+OpenLayer+"&nbsp;"+CloseLayer


Links[4]=vs

+OpenLayer+"<a href='../Podstrony/Choroby.html' class='x'>Informacje ogólne</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Choriszkod.html' class='x'>Lista chorób i szkodników</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Tablice.html' class='x'>Tabele diagnostyczne</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Chemiczna.html' class='x'>Ochrona chemiczna</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Biologiczna.html' class='x'>Ochrona biologiczna</a>"+CloseLayer
+OpenLayer+"&nbsp;"+CloseLayer

Links[5]=vs

+OpenLayer+"<a href='../Podstrony/Kupno.html' class='x'>Jak kupować</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Gdzie.html' class='x'>Gdzie kupować</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/nazewnictwo.html' class='x'>Nazewnictwo</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Slownik.html' class='x'>Słownik</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/konwerter.html' class='x'>Konwerter</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/forum.html' class='x'>Forum</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/logo.html' class='x'>Logo</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Materialy.html' class='x'>¬ródła</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/Linki.html' class='x'>Odno¶niki</a>"+CloseLayer
+OpenLayer+"&nbsp;"+CloseLayer

Links[6]=vs

+OpenLayer+"<a href='../Autor.html' class='x'>O autorze</a>"+CloseLayer
+OpenLayer+"<a href='../autorskie.html' class='x'>Prawa autorskie</a>"+CloseLayer
+OpenLayer+"<a href='../responser.html' class='x'>Napisz do mnie</a>"+CloseLayer
+OpenLayer+"<a href='../Podstrony/sms.html' class='x'>Kontakt telefoniczny</a>"+CloseLayer
+OpenLayer+"<a href='http://rosiczka.blog.pl/xiega/index.php' class='x'>Księga go¶ci</a>"+CloseLayer
+OpenLayer+"<a href='../Dziex.html' class='x'>Podziękowania</a>"+CloseLayer
+OpenLayer+"<a href='../Wspolpraca.html' class='x'>Współpraca</a>"+CloseLayer
+OpenLayer+"<a href='../Dane.html' class='x'>Dane techniczne</a>"+CloseLayer
+OpenLayer+"&nbsp;"+CloseLayer



//!!!Alter anything past this point!!!

w1=(MenuWidth+Separater)*Titles.length;
w2=w/2;
i1=w2-MenuWidth-Separater-w1/2;
i2=w2-MenuWidth-Separater-w1/2;
s1=MenuWidth+Separater;
s2=MenuWidth+Separater;
if (w1 > w2*2){i1=-MenuWidth;i2=-MenuWidth}
vy=(n4)?'show':'visible';
vn=(n4)?'hide':'hidden';

//Don't mess about with N4, just use layers.
if (n4){
for (i=0; i < Titles.length; i++){
document.write("<layer name='lnks"+i+"' top=0 left="+(i2+=s2)+" "
+" width="+MenuWidth+" bgcolor="+HighLight+" visibility=hide"
+" onMouseOver='this.visibility=vy; var cd=this.id.length-1; var ab=this.id.charAt(cd); H(ab)' "
+" onMouseOut='this.visibility=vn; var ef=this.id.length-1; var gh=this.id.charAt(ef); B(gh)'>"
+algn1+"<div style='font-family: "+MenuFont+"; font-size: "+MenuFontSize+"'>"
+"&nbsp;<br>"+Links[i]+"</div>"+algn2+"</layer>");
document.write("<layer name='ttls"+i+"' top=0 left="+(i1+=s1)+" height=0 " 
+"width="+MenuWidth+" bgcolor="+MenuBgColor+" "
+"onMouseOver=\"this.bgColor=HighLight; var e=this.id.length-1; var d=this.id.charAt(e); On(d)\" "
+"onMouseOut=\"this.bgColor=MenuBgColor; var e=this.id.length-1; var d=this.id.charAt(e); Off(d)\">"
+algn1+"<div style='font-family: "+MenuFont+"; font-size: "+MenuFontSize+"; color: "+MenuFontColor+"'>"
+Titles[i]+"</div>"+algn2+"</layer>");                                       
}
function On(x){for (i=0; i < Titles.length; i++)document.layers['lnks'+x].visibility=vy}
function Off(x){for (i=0; i < Titles.length; i++)document.layers['lnks'+x].visibility=vn}
function B(y){for (i=0; i < Titles.length; i++)document.layers['ttls'+y].bgColor=MenuBgColor}
function H(y){for (i=0; i < Titles.length; i++)document.layers['ttls'+y].bgColor=HighLight}
}
if (!n4){
for (i=0; i < Titles.length; i++){
document.write("<div id='lnks"+i+"' style='position:absolute;"
+"top:0px;left:"+(i2+=s2)+"px;width:"+MenuWidth+"px;"
+"background:"+HighLight+";visibility:hidden'" 
+" onMouseOver='this.style.visibility=vy; document.getElementById(\"ttls"+i+"\").style.background=MenuBgColor';"
+" onMouseOut='this.style.visibility=vn; document.getElementById(\"ttls"+i+"\").style.background=MenuBgColor'>"
+algn1+Links[i]+algn2+"</div>");
document.write("<div id='ttls"+i+"' style='position:absolute;top:0px;left:"+(i1+=s1)+"px;height:auto;width:"+MenuWidth+"px;"
+"background:"+MenuBgColor+";cursor:default'"
+" onMouseOver='document.getElementById(\"lnks"+i+"\").style.visibility=vy;this.style.background=MenuBgColor'" 
+" onMouseOut='document.getElementById(\"lnks"+i+"\").style.visibility=vn;this.style.background=MenuBgColor'>"
+algn1+"<div style='font-family: "+MenuFont+"; font-size: "+MenuFontSize+"; color: "+HighLight+"'>"+Titles[i]+"</div>"+algn2+"</div>");
}
}
function Scroll(){
sy=(ie)?document.body.scrollTop:window.pageYOffset;
for (i=0; i < Titles.length; i++){
if (n4){
 document.layers['ttls'+i].top=Separater+sy;
 document.layers['lnks'+i].top=Separater+sy;
 }
else{
 document.getElementById("ttls"+i).style.top=Separater+sy;
 document.getElementById("lnks"+i).style.top=Separater+sy;
 }
}
setTimeout('Scroll()',100)
}
Scroll();
window.onresize=new Function("window.location.reload()");


if (!n4){
for (i=0; i < document.links.length; i++){
 if (document.links[i].href == this.window.location.href)
  {
  document.links[i].style.color=MenuFontColor;
  document.links[i].style.cursor='crosshair';
  //document.links[i].innerHTML+=' -';
  //alert(i+' '+document.links[i].href);
  break;
  }
 }
}
