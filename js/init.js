function init() {
    
        
        window.onload = function()
        {
            //-------------------------------obiekty
            var gra ={
                    wstep: function () {
                        var div = document.createElement("DIV")
                        div.id="d"
                        document.body.appendChild(div)
                        
                        
                        var x = document.createElement("AUDIO");

                        if (x.canPlayType("audio/mpeg")) {
                            x.setAttribute("src","materialy/audio/hejnal.mp3");
                        } else {
                            x.setAttribute("src","materialy/audio/hejnal.ogg");
                        }

                        x.autoplay = true
                        document.body.appendChild(x);
                        
                        var img1 = document.createElement("IMG")
                        img1.id="img1"
                        div.appendChild(img1)
                        img1.setAttribute("src","materialy/img/czolowka.jpg")
                        
                        setTimeout(function () {
                            img1.setAttribute("src", "materialy/img/opis_A.jpg")
                        },29000)
                        
                        setTimeout(function () {
                            img1.setAttribute("src", "materialy/img/opis_B.jpg")
                        },44000)
                        
                        setTimeout(function () {
                            document.getElementById("d").remove()
                        },59000)
                    },
                
                    end: function () {
                        var div2 = document.createElement("DIV")
                        div2.id="end"
                        document.body.appendChild(div2)
                        
                        
                        var y = document.createElement("AUDIO");

                        if (y.canPlayType("audio/mpeg")) {
                            y.setAttribute("src","materialy/audio/We_are_Number_One_Music.mp3");
                        } else {
                            y.setAttribute("src","materialy/audio/We_are_Number_One_Music.ogg");
                        }

                        y.autoplay = true
                        y.loop = true
                        document.body.appendChild(y);
                        
                        var div3 = document.createElement("DIV")
                        div3.id="end2"
                        document.body.appendChild(div3)
                        
                        
                        var img2 = document.createElement("IMG")
                        img2.id="img2"
                        div3.appendChild(img2)
                        img2.setAttribute("src","materialy/img/git_gif.gif")
                        
                        var img1 = document.createElement("IMG")
                        img1.id="img1"
                        div2.appendChild(img1)
                        img1.setAttribute("src","materialy/img/giphy.gif")
                        
                        
                        setTimeout(function () {
                            img1.setAttribute("src", "materialy/img/gif.gif")
                        },500)
                        
                        
                        
                    },
                    lok:[
                        
                        //------------------------1
                        [
                            new _pole("You are inside a brimstone mine", "11.gif", "rgb(235,211,64)", "0", "1", "0", "0", []), 
                            new _pole("You are at the entrance to the mine", "12.gif", "rgb(89,93,87)", "0", "1", "0", "1", []), 
                            new _pole("A hill", "13.gif", "rgb(117,237,243)", "0", "1", "1", "1", [31,0,0]), 
                            new _pole("Some bushes", "14.gif", "rgb(202,230,51)", "0", "1", "0", "1", [0,0,0]), 
                            new _pole("An old deserted hut", "15.gif", "rgb(220,204,61)", "0", "1", "0", "1", [27,0,0]), 
                            new _pole("The edge of a forest", "16.gif", "rgb(167,245,63)", "0", "1", "0", "1", [0,0,0]), 
                            new _pole("A dark forest", "17.gif", "rgb(140,253,99)", "0", "0", "1", "1", [14,0,0])
                        ],
                        
                        //------------------------2
                        [
                            new _pole("A man nearby making tar", "21.gif", "rgb(255,190,99)", "0", "1", "1", "0", [0,0,0]), 
                            new _pole("A timber yard", "22.gif", "rgb(255,190,99)", "0", "1", "1", "1", [0,0,0]), 
                            new _pole("You are by a roadside shrine", "23.gif", "rgb(167,245,63)", "1", "1", "1", "1", [10,0,0]), 
                            new _pole("You are by a small chapel", "24.gif", "rgb(212,229,36)", "0", "1", "0", "1", [0,0,0]), 
                            new _pole("You are on a road leading to a wood", "25.gif", "rgb(167,245,63)", "0", "1", "1", "1", [0,0,0]), 
                            new _pole("You are in a forest", "26 i 65.gif", "rgb(167,245,63)", "0", "1", "0", "1", [0,0,0]), 
                            new _pole("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", "1", "0", "0", "1", [18,0,0])
                        ],
                        
                        //------------------------3
                        [
                            new _pole("You are by the Vistula River", "31.gif", "rgb(122,232,252)", "1", "1", "0", "0", [0,0,0]), 
                            new _pole("You are by the Vistula River", "32.gif", "rgb(140,214,255)", "1", "0", "0", "1", [32,0,0]), 
                            new _pole("You are on a bridge over river", "33.gif", "rgb(108,181,242)", "1", "0", "1", "0", [0,0,0]), 
                            new _pole("You are by the old tavern", "34.gif", "rgb(255,189,117)", "0", "1", "0", "0", [0,0,0]), 
                            new _pole("You are at the town's end'", "35.gif", "rgb(255,190,99)", "1", "0", "1", "1", [0,0,0]), 
                            new _pole("You are in a butcher's shop", "36.gif", "rgb(255,188,102)", "0", "0", "1", "0", [0,0,0]), 
                            new _pole("You are in a cooper's house'", "37.gif", "rgb(255,188,102)", "0", "0", "1", "0", [0,0,0])
                        ],
                        
                        //------------------------4
                        [
                            new _pole("You are in the Wawel Castle", "41.gif", "rgb(255,176,141)", "0", "1", "0", "0", [0,0,0]), 
                            new _pole("You are inside a dragon's cave", "42.gif", "rgb(198,205,193)", "0", "1", "0", "1", [0,0,0]), 
                            new _pole("A perfect place to set a trap", "43.gif", "rgb(255,176,141)", "1", "0", "0", "1", [0,0,0]), 
                            new _pole("You are by the water mill", "44.gif", "rgb(255,190,99)", "0", "1", "0", "0", [21,0,0]), 
                            new _pole("You are at a main crossroad", "45.gif", "rgb(255,190,99)", "1", "1", "1", "1", [0,0,0]), 
                            new _pole("You are on a town street", "46.gif", "rgb(255,190,99)", "1", "1", "0", "1", [0,0,0]), 
                            new _pole("You are in a frontyard of your house", "47.gif", "rgb(255,190,99)", "1", "0", "1", "1", [0,0,0])
                        ],
                        
                        //------------------------5
                        [ 
                             , , ,
                            new _pole("You are by a swift stream", "54.gif", "rgb(108,181,242)", "0", "1", "0", "0", [0,0,0]), 
                            new _pole("You are on a street leading forest", "55.gif", "rgb(255,190,99)", "1", "0", "1", "1", [33,0,0]), 
                            new _pole("You are in a woodcutter's backyard", "56.gif", "rgb(255,190,99)", "0", "0", "1", "0", [0,0,0]), 
                            new _pole("You are in a shoemaker's house", "57.gif", "rgb(254,194,97)", "1", "0", "0", "0", [0,0,0])
                        ],
                        
                        //------------------------6
                        [ 
                             , , ,
                            new _pole("You are in a bleak funeral house", "64.gif", "rgb(254,194,97)", "0", "1", "0", "0", [24,0,0]), 
                            new _pole("You are on a path leading to the wood", "26 i 65.gif", "rgb(167,245,63)", "1", "1", "0", "1", [0,0,0]), 
                            new _pole("You are at the edge of a forest", "66.gif", "rgb(167,245,63)", "1", "1", "0", "1", [0,0,0]), 
                            new _pole("You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", "0", "0", "0", "1", [0,0,0])
                        ]
                    ],
                
                    przedmioty:
                            [
                                //gdy zebrane wszystkie przedmioty (6*OK), 43, 37, Your fake sheep is full of poison and ready to be eaten by the dragon
                                //n - napis z timeoutem, l- przedmiot nieruszalny, d- martwy smok  - podmiana grafiki na lokacji , s - masz skórę smoka - trzeba sprawdzić, czy smok jest martwy, k- koniec gry
                                
                                new _reakcje(10, 56, 11, "You opened a tool shed and took an axe"),
                                new _reakcje(11, 67, 12, "You cut sticks for sheeplegs"),
                                new _reakcje(12, 43, 13, "You prepared legs for your fake sheep", "L", 1),
                                new _reakcje(14, 34, 15, "The tavern owner paid you money"),
                                new _reakcje(15, 37, 16, "The cooper sold you a new barrel"),
                                new _reakcje(16, 43, 17, "You made a nice sheeptrunk", "L", 1),
                                new _reakcje(18, 36, 19, "The butcher gave you wool"),
                                new _reakcje(19, 43, 20, "You prepared skin for your fake sheep","L", 1),
                                new _reakcje(21, 57, 22, "You used your tools to make a rag"),
                                new _reakcje(22, 43, 23, "You made a fake sheephead", "L", 1),
                                new _reakcje(24, 11, 25, ["You are digging...", "and digging...", "That's enough sulphur for you"], "N" , 1),
                                new _reakcje(25, 43, 26, "You prepared a solid poison", "L"),
                                new _reakcje(27, 21, 28, "You got a bucket full of tar"),
                                new _reakcje(28, 43, 29, "You prepared a liquid poison", "L", 1),
                                new _reakcje(37, 43, 30, ["The dragon noticed your gift...", "The dragon ate your sheep and died!"], "D"),
                                new _reakcje(33, 43, 34, "You cut a piece of dragon's skin", "S"),
                                new _reakcje(34, 57, 35, "You used your tools to make shoes"),
                                new _reakcje(35, 41, 36, "The King is impressed by your shoes"),
                                new _reakcje(36, 41, null, null,"K")
                            ],
                    item:
                            [ 
                                ,
                                new _items("a KEY",1,"KEY"),
                                new _items("an AXE",1,"AXE"),
                                new _items("STICKS",1,"STICKS"),
                                new _items("sheeplegs",0,"sheeplegs"),
                                new _items("MUSHROOMS",1,"MUSHROOMS"),
                                new _items("MONEY",1,"MONEY"),
                                new _items("a BARREL",1,"BARREL"),
                                new _items("a sheeptrunk",0,"sheeptrunk"),
                                new _items("BERRIES",1,"BERRIES"),
                                new _items("WOOL",1,"WOOL"),
                                new _items("a sheepskin",0,"sheepskin"),
                                new _items("a BAG",1,"BAG"),
                                new _items("a RAG",1,"RAG"),
                                new _items("a sheephead",0,"sheephead"),
                                new _items("a SPADE",1,"SPADE"),
                                new _items("SULPHUR",1,"SULPHUR"),
                                new _items("a solid poison",0,"solid poison"),
                                new _items("a BUCKET",1,"BUCKET"),
                                new _items("TAR",1,"TAR"),
                                new _items("a liquid poison",0,"liquid poison"),
                                new _items("a dead dragon",0,"dead dragon"),
                                new _items("a STONE",1,"STONE"),
                                new _items("a FISH",1,"FISH"),
                                new _items("a KNIFE",1,"KNIFE"),
                                new _items("a DRAGONSKIN",1,"DRAGONSKIN"),
                                new _items("a dragonskin SHOES",1,"SHOES"),
                                new _items("a PRIZE",1,"PRIZE"),
                                new _items("a SHEEP",1,"SHEEP")
                            ],
                    plansza:
                        function(){
                            window.onload = function() {
                                document.getElementById("kons").focus();
                            }
                            //----------pojemnik
                            var poj= document.createElement("DIV") 
                            poj.id="poj"
                 
                            //----------opis lokalizacji
                            var nagl= document.createElement("DIV")
                            nagl.id="nagl"
                
                            //----------obrazek lokalizacji
                            var obr= document.createElement("DIV")
                            obr.id="obr"
                
                            //----------miejsce na tekst od gry
                            var kom= document.createElement("DIV")
                            kom.id="kom"
                            
                            
                            //----------obrazek i komentarz
                            var dane= document.createElement("DIV")
                            dane.id="dane"
                            
                            
                            //----------div na kompas
                            var kompas= document.createElement("DIV")
                            kompas.id="kompas"
                            
                            var kompas_img= document.createElement("IMG")
                            kompas_img.setAttribute("src","materialy/img/kompas.bmp")
                            kompas_img.id="kompas_img"
                            
                            //----------zasłaniacze na kompasie
                            
                            var komp_div= document.createElement("DIV")
                            komp_div.id="komp_div"
                            var kn= document.createElement("DIV")
                            kn.id="kn"
                            var ks= document.createElement("DIV")
                            ks.id="ks"
                            var ke= document.createElement("DIV")
                            ke.id="ke"
                            var kw= document.createElement("DIV")
                            kw.id="kw"
                            komp_div.appendChild(kompas_img)
                            komp_div.appendChild(kn)
                            komp_div.appendChild(ks)
                            komp_div.appendChild(ke)
                            komp_div.appendChild(kw)
                            
                            
                            
                            //----------what's now
                            var kom2= document.createElement("DIV")
                            kom2.id="kom2"
                            kom2.innerHTML="What's now?"
                
                            
                            //----------konsola
                            var kons= document.createElement("INPUT")
                            kons.setAttribute("autofocus", "autofocus")
                            kons.onblur="this.focus()" 
                            kons.id="kons"                          
                            kons.onkeyup = function () 
                            { 
                                if(ruch.casesens==0)
                                {
                                    var x = document.getElementById("kons")
                                    x.value= x.value.toUpperCase()
                                    ruch.kierunki(x)
                                }
                                
                            }
                            
                
                            poj.appendChild(nagl)
                            dane.appendChild(obr)
                            dane.appendChild(kom)
                            poj.appendChild(dane)
                            kompas.appendChild(komp_div)
                            poj.appendChild(kompas)
                            poj.appendChild(kom2)
                            poj.appendChild(kons)
                            document.body.appendChild(poj)
                            
                        }
            }
                    
            
            var ruch =
                {
                    pion: 3,
                    poziom: 6,
                    casesens: 0,  
                    ekwipunek: 0,
                    kom: "",
                    kamienie: 0,
                    skin: 0,
                    dragon: 0,
                    text:"",
                    komunikat: 
                        function()
                            {
                                var miejsce = document.getElementById("kom2")
                                var miejsce2 = document.getElementById("kons")
                                miejsce.innerHTML=ruch.kom
                                miejsce2.style.display="none"
                                setTimeout(function () { 
                                    miejsce.innerHTML="What's now?"
                                    miejsce2.style.display="inline"
                                    document.getElementById("kons").focus()
                                }, 2000); //00
                            },
                    ruch:
                        function ()
                            {
                                setTimeout(function(){
                                    
                                var k = document.getElementById("kn")
                                k.style.display="block"
                                k = document.getElementById("ks")
                                k.style.display="block"
                                k = document.getElementById("ke")
                                k.style.display="block"
                                k = document.getElementById("kw")
                                k.style.display="block"
                                    
                                var ob= gra.lok[ruch.pion][ruch.poziom]  
                                                                
                                
                                var miejsce = document.getElementById("nagl")
                                miejsce.innerHTML=ob.tekst
                                
                                miejsce= document.getElementById("obr")
                                miejsce.innerHTML=""
                                tlo = document.createElement("IMG")
                                tlo.setAttribute("src","materialy/img/"+ob.tlo)
                                miejsce.appendChild(tlo)
                                
                                
                                miejsce.style.backgroundColor=ob.kolor
                                
                                miejsce= document.getElementById("kom")
                                        var output = "You can go:"
                                        if(ob.north != 0)
                                        {
                                            output=output + " north"
                                            document.getElementById("kn").style.display="none"
                                        }
                                            
                                        if(ob.east != 0)
                                           {
                                               if(ob.north != 0)
                                               {
                                                   output=output + ","
                                               }
                                               output=output + " east"
                                               document.getElementById("ke").style.display="none"
                                           }
                                            
                                        if(ob.south != 0)
                                            {
                                                if(ob.north != 0 || ob.east != 0)
                                                {
                                                    output=output + ","
                                                }
                                                output=output + " south"
                                               document.getElementById("ks").style.display="none"
                                            }
                                            
                                        if(ob.west != 0)
                                            {
                                                if(ob.north != 0 || ob.east != 0 || ob.south != 0)
                                                {
                                                    output=output + ","
                                                }
                                                output=output + " west"
                                               document.getElementById("kw").style.display="none"
                                            }
                                            
                                
                                        var pos_ekw=0;
                                        for(var i=0;i<ob.item.length;i++)
                                            {
                                                if(ob.item[i]!=0)
                                                {
                                                    pos_ekw++
                                                }
                                            }
                                        if(pos_ekw==0)
                                        {
                                            var see = "You see nothing"
                                        }
                                        else
                                            {
                                                var see = "You see"
                                                for(var i=0; i<ob.item.length; i++)
                                                    {
                                                        if(ob.item[i]!=0)
                                                        {
                                                            see=see+ " " + gra.item[ob.item[i]-9].odmiana
                                                        }
                                                            
                                                        if(ob.item[i+1]!=0 && (i+1)!=ob.item.length)
                                                        {
                                                            see=see+","
                                                        }
                                                    }
                                                }   
                                
                                        if(ruch.ekwipunek==0)
                                            var carrying = "You are carrying nothing"
                                            else
                                                {
                                                    var carrying = "You are carrying "+gra.item[ruch.ekwipunek-9].odmiana
                                                }
                                
                                        miejsce.innerHTML=output+". <br><br>"+see+". <br><br>"+carrying+". "
                                 },2000) //00   
                            },
                    kierunki: function()
                            {
                                kons.onkeydown= function(e)
                                {
                                    
                                    var x=e.which
                                    var m=0;
                                    var przedmiot=0;
                                    
                                    if(x==13 || x==38 || x==40 || x==37 || x==39)
                                        {
                                            var n = kons.value
                                            
                                            if(n=="NORTH" || x==38)
                                            {n="N"}
                                            if(n=="SOUTH" || x==40)
                                            {n="S"}
                                            if(n=="WEST" || x==37)
                                            {n="W"}
                                            if(n=="EAST" || x==39)
                                            {n="E"}
                                                
                                            if(n.split(" ").length==2)
                                            {
                                                m=n.split(" ")
                                            if(m[0]=="TAKE" || m[0]=="T")
                                            {n="T"}
                                            if(m[0]=="DROP" || m[0]=="D")
                                            {n="D"}
                                            if(m[0]=="USE" || m[0]=="U")
                                            {n="U"}
                                            do
                                                {
                                                    przedmiot++
                                                    if(przedmiot == gra.item.length)
                                                    {
                                                        ruch.kom="This item doesn't exist"
                                                        ruch.komunikat()
                                                        break;
                                                    }
                                                }while(m[1]!=gra.item[przedmiot].nazwa && przedmiot<=gra.item.length)
                                                
                                            }
                                                
                                            switch(n)
                                                {
                                                    case "V":
                                                        ruch.text = document.getElementById("kom").textContent
                                                        var v= document.getElementById("kom")
                                                        v.innerHTML="NORTH or N, SOUTH or S <br><br> WEST or W, EAST or E <br><br> TAKE (object) or T (object) <br><br> DROP (object) or D (object) <br><br> USE (object) or U (object) <br><br> USE (object) or U (object) <br><br><br> Press any key"
                                                        v= document.getElementById("kons")
                                                        v.style.visibility="hidden"
                                                        v= document.getElementById("kom2")
                                                        v.style.visibility="hidden"
                                                        setTimeout(function(){
                                                        document.body.onkeydown= function () {
                                                            var m = document.getElementById("kom2")
                                                            m.style.visibility="visible"
                                                            m = document.getElementById("kons")
                                                            m.style.visibility="visible"
                                                            m = document.getElementById("kom")
                                                            var teskt=ruch.text.split(".")
                                                            var output=teskt[0];
                                                            for(var i=1;i<teskt.length;i++)
                                                                {
                                                                    output= output + ".<br><br>"+teskt[i]
                                                                }
                                                            m.innerHTML=output
                                                            document.body.onkeydown= ""
                                                            document.getElementById("kons").focus()
                                                        }},10)
                                                        break;
                                                        
                                                    case "G":
                                                        ruch.text = document.getElementById("kom").textContent
                                                        var v= document.getElementById("kom")
                                                        v.innerHTML="The  woodcutter lost  his home key... <br><br> The butcher likes fruit... The cooper <br><br> is greedy... Dratewka plans to make a <br><br> poisoned  bait for the dragon...  The <br><br> tavern owner is buying food  from the <br><br> pickers... Making a rag from a bag... <br><br><br> Press any key"
                                                        v= document.getElementById("kons")
                                                        v.style.visibility="hidden"
                                                        v= document.getElementById("kom2")
                                                        v.style.visibility="hidden"
                                                        setTimeout(function(){
                                                        document.body.onkeydown= function () {
                                                            var m = document.getElementById("kom2")
                                                            m.style.visibility="visible"
                                                            m = document.getElementById("kons")
                                                            m.style.visibility="visible"
                                                            m = document.getElementById("kom")
                                                            var teskt=ruch.text.split(".")
                                                            var output=teskt[0];
                                                            for(var i=1;i<teskt.length;i++)
                                                                {
                                                                    output= output + ".<br><br>"+teskt[i]
                                                                }
                                                            m.innerHTML=output
                                                            document.body.onkeydown= ""
                                                            document.getElementById("kons").focus()
                                                        }},10)
                                                        break;
                                                        
                                                    case "N":
                                                        if(gra.lok[ruch.pion][ruch.poziom].north==1)
                                                            {
                                                                ruch.pion--
                                                                ruch.kom="You are going north..."
                                                                ruch.komunikat()
                                                                ruch.ruch()
                                                            }
                                                        else
                                                            {
                                                                ruch.kom="You can't go that way"
                                                                ruch.komunikat()
                                                            }
                                                        break;
                                                        
                                                    case "S":
                                                        if(gra.lok[ruch.pion][ruch.poziom].south==1)
                                                            {
                                                                ruch.pion++
                                                                ruch.kom="You are going south..."
                                                                ruch.komunikat()
                                                                ruch.ruch()
                                                            }
                                                        else
                                                            {
                                                                ruch.kom="You can't go that way"
                                                                ruch.komunikat()
                                                            }
                                                        break;
                                                        
                                                    case "E":
                                                        if(gra.lok[ruch.pion][ruch.poziom].east==1)
                                                            {
                                                                ruch.poziom++
                                                                ruch.kom="You are going east..."
                                                                ruch.komunikat()
                                                                ruch.ruch()
                                                            }
                                                        else
                                                            {
                                                                ruch.kom="You can't go that way"
                                                                ruch.komunikat()
                                                            }
                                                        break;
                                                        
                                                    case "W":
                                                        if(gra.lok[ruch.pion][ruch.poziom].west==1 && ruch.pion==3 && ruch.poziom== 1 && ruch.dragon==0)
                                                            {
                                                                ruch.kom="You can't go that way... "
                                                                var miejsce = document.getElementById("kom2")
                                                                var miejsce2 = document.getElementById("kons")
                                                                miejsce.innerHTML=ruch.kom
                                                                miejsce2.style.display="none"
                                                                setTimeout(function(){
                                                                    ruch.kom=" The dragon sleeps in a cave!"
                                                                    ruch.komunikat()
                                                                },2000)
                                                                break;
                                                            }
                                                        if(gra.lok[ruch.pion][ruch.poziom].west==1)
                                                            {
                                                                ruch.poziom--
                                                                ruch.kom="You are going west..."
                                                                ruch.komunikat()
                                                                ruch.ruch()
                                                            }
                                                        else
                                                            {
                                                                ruch.kom="You can't go that way"
                                                                ruch.komunikat()
                                                            }
                                                        break;
                                                        
                                                        
                                                        
                                                        
                                                    case "T":
                                                        
                                                        if(ruch.ekwipunek != 0)
                                                            {
                                                                ruch.kom="You are carying something"
                                                                ruch.komunikat()
                                                                break;
                                                            }
                                                        
                                                        
                                                        var tablica=gra.lok[ruch.pion][ruch.poziom].item.indexOf(przedmiot+9);
                                                        
                                                        if(tablica!=-1)
                                                            {
                                                                if(gra.item[przedmiot].flaga==0)
                                                                    {
                                                                        ruch.kom="You can't carry it"
                                                                        ruch.komunikat()
                                                                    }
                                                                else
                                                                {
                                                                    ruch.ekwipunek=przedmiot+9
                                                                    gra.lok[ruch.pion][ruch.poziom].item[tablica]=0
                                                                    ruch.kom="You are taking " + gra.item[przedmiot].odmiana
                                                                    ruch.komunikat()
                                                                    ruch.ruch()
                                                                }
                                                            }
                                                        else
                                                            {
                                                                ruch.kom="There isn't anything like that here"
                                                              ruch.komunikat()
                                                            }
                                                        
                                                        
                                                        break;
                                                        
                                                    case "D":
                                                        var ekw_nazw="";
                                                        for(var i=0;i<gra.item.length;i++)
                                                            {
                                                                if(i == ruch.ekwipunek-9)
                                                                {
                                                                    ekw_nazw= gra.item[i].nazwa
                                                                }
                                                            }
                                                        
                                                        if(ekw_nazw != m[1])
                                                            {
                                                                ruch.kom="You are not carrying it"
                                                                ruch.komunikat()
                                                                break;
                                                            }
                                                        
                                                        //czy nie ma 3 przedmiotow z flaga1
                                                        var ok=0;
                                                        for(var i=0; i< gra.lok[ruch.pion][ruch.poziom].item.length;i++)
                                                            {
                                                                if(gra.lok[ruch.pion][ruch.poziom].item[i] != 0)
                                                                    {
                                                                        if(gra.item[gra.lok[ruch.pion][ruch.poziom].item[i]-9].flaga==1)
                                                                        {
                                                                            ok++
                                                                        }
                                                                    }
                                                            }
                                                        
                                                        if(ruch.ekwipunek==0)
                                                            {
                                                                ruch.kom="You are not carrying anything"
                                                                ruch.komunikat()
                                                                break;
                                                            }
                                                         if(ok == 3)
                                                         {
                                                            ruch.kom="You can't store any more here"
                                                            ruch.komunikat()
                                                            break;
                                                         }
                                                        
                                                        var tablica=gra.lok[ruch.pion][ruch.poziom].item.indexOf(0);
                                                        if(tablica=-1)
                                                            {
                                                                gra.lok[ruch.pion][ruch.poziom].item.push(ruch.ekwipunek)
                                                            }
                                                        else                                                     
                                                            gra.lok[ruch.pion][ruch.poziom].item[tablica]=ruch.ekwipunek
                                                        ruch.kom="You are about to drop "+gra.item[ruch.ekwipunek-9].odmiana
                                                        ruch.ekwipunek=0;
                                                        ruch.komunikat()
                                                        ruch.ruch()
                                                        break;
                                                        
                                                    case "U":
                                                        
                                                        
                                                        if(ruch.ekwipunek == 0)
                                                            {
                                                                ruch.kom="You are not carrying anything"
                                                                ruch.komunikat()
                                                                break;
                                                            }
                                                        if(gra.item[ruch.ekwipunek-9].nazwa != m[1])
                                                            {
                                                                ruch.kom="You aren't carrying anything like that"
                                                                ruch.komunikat()
                                                                break;
                                                            }
                                                        
                                                        var reakcja;
                                                        for(var i=0; i< gra.przedmioty.length;i++)
                                                            {
                                                                if(ruch.ekwipunek == gra.przedmioty[i].potrzebny)
                                                                    reakcja = gra.przedmioty[i]
                                                            }
                                                        
                                                        var miejsce = ruch.pion*10 + ruch.poziom +11
                                                        if(reakcja.lokacja != miejsce)
                                                            {
                                                                ruch.kom="Nothing happened"
                                                                ruch.komunikat()
                                                                break;
                                                            }
                                                        
                                                        if(reakcja.flaga=="K")
                                                            {
                                                                gra.end()
                                                                break;
                                                            }
                                                        
                                                        if(przedmiot.flaga=="S")
                                                            {
                                                                if(ruch.skin==0)
                                                                    {
                                                                        ruch.kom="Nothing happened"
                                                                        ruch.komunikat()
                                                                        break;
                                                                    }
                                                            }
                                                        
                                                        if(reakcja.flaga=="N")
                                                            {
                                                                ruch.kom=reakcja.komunikat[0]
                                                                var miejsce = document.getElementById("kom2")
                                                                var miejsce2 = document.getElementById("kons")
                                                                miejsce.innerHTML=ruch.kom
                                                                miejsce2.style.display="none"
                                                                setTimeout(function (){
                                                                    ruch.kom=reakcja.komunikat[1]
                                                                    var miejsce = document.getElementById("kom2")
                                                                    var miejsce2 = document.getElementById("kons")
                                                                    miejsce.innerHTML=ruch.kom
                                                                    miejsce2.style.display="none"
                                                                },2000)
                                                                setTimeout(function (){
                                                                    ruch.kom=reakcja.komunikat[2]
                                                                    ruch.komunikat()
                                                                },4001)
                                                                setTimeout(function (){
                                                                    ruch.ekwipunek=reakcja.wynik
                                                                    ruch.kom=reakcja.komunikat
                                                                    ruch.ruch()
                                                                },6002)
                                                                break;
                                                            }
                                                        ruch.ekwipunek=reakcja.wynik
                                                        
                                                        if(reakcja.flaga=="L")
                                                            {
                                                                ruch.kamienie++
                                                                gra.lok[ruch.pion][ruch.poziom].item.push(ruch.ekwipunek)
                                                                ruch.ekwipunek=0
                                                                ruch.komunikat()
                                                                
                                                                if(ruch.kamienie==6)
                                                                    {
                                                                        if(reakcja.lokacja==43)
                                                                            {
                                                                                ruch.ekwipunek=37
                                                                                ruch.kom="Your fake sheep is full of poison and ready to be eaten by the dragon"
                                                                                for(var i=0; i<gra.lok[ruch.pion][ruch.poziom].item.length; i++)
                                                                                    {
                                                                                        gra.lok[ruch.pion][ruch.poziom].item[i]=0
                                                                                    }
                                                                                var miejsce = document.getElementById("kom2")
                                                                                var miejsce2 = document.getElementById("kons")
                                                                                miejsce.innerHTML=ruch.kom
                                                                                miejsce2.style.display="none"
                                                                                setTimeout(function () { 
                                                                                    miejsce.innerHTML="What's now?"
                                                                                    miejsce2.style.display="inline"
                                                                                    document.getElementById("kons").focus()
                                                                                }, 3500); //00
                                                                                ruch.ruch()
                                                                                break;
                                                                                
                                                                            }
                                                                    }
                                                            }
                                                        if(reakcja.flaga=="D")
                                                            {
                                                                ruch.dragon++
                                                                gra.lok[3][2].tlo="DS68.bmp"
                                                                gra.lok[ruch.pion][ruch.poziom].item[0]=ruch.ekwipunek
                                                                ruch.ekwipunek=0
                                                                ruch.kom=reakcja.komunikat[0]
                                                                var miejsce = document.getElementById("kom2")
                                                                var miejsce2 = document.getElementById("kons")
                                                                miejsce.innerHTML=ruch.kom
                                                                miejsce2.style.display="none"
                                                                setTimeout(function(){
                                                                    ruch.kom=reakcja.komunikat[1]
                                                                    ruch.komunikat()
                                                                    ruch.ruch()
                                                                },2000)
                                                                ruch.skin++
                                                                break;
                                                            }
                                                        
                                                        
                                                        ruch.kom=reakcja.komunikat
                                                        ruch.komunikat()
                                                        ruch.ruch()
                                                        break;
                                                        
                                                    default:
                                                        ruch.kom="Try another word or V for vocabulary"
                                                        ruch.komunikat()
                                                        break;
                                                }
                                            
                                                        kons.value=""
                                                        ruch.casesens=0
                                        }
                                    
                                    if(x==32)
                                        ruch.casesens=1
                                }
                            }
                }
            
            
            //---------------------------------koniec obiektów
            gra.wstep()
            gra.plansza()
            ruch.ruch()
        }
    
}