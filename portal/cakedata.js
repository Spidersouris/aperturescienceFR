/* Creative Commons License Portal End Credits Web by xBytez/TylaKitty/Valve is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. Based on a work at https://xbytez.eu/. */
var asciiart = {
    "11": ["                     -$-                ", "                    .H##H,              ", "                   +######+             ", "                .+#########H.           ", "              -$############@.          ", "            =H###############@  -X:     ", "          .$##################:  @#@-   ", "     ,;  .M###################;  H###;  ", "   ;@#:  @###################@  ,#####: ", " -M###.  M#################@.  ;######H ", " M####-  +###############$   =@#######X ", " H####$   -M###########+   :#########M, ", "  /####X-   =########%   :M########@/.  ", "    ,;%H@X;   .$###X   :##MM@%+;:-      ", "                 ..                     ", "  -/;:-,.              ,,-==+M########H ", " -##################@HX%+%$%%+:,,    ", "    .-/H%%+%$H@###############M@+=:/+:", "/XHX%:#####MH%=    ,---:;;;;/%XHM,:###$", "$@#MX %+;-                           .  "],
    "10": ["+@##########M/             :@#########@/", "##############$;H#######@;+#############", "###############M########################", "##############X,-/++/+%+/,%#############", "############M$:           -X############", "##########H;.      ,--.     =X##########", ":X######M;     -$H@M##MH%:    :H#######@", "  =%#M+=,   ,+@#######M###H:    -=/M#% ", "  %M##@+   .X##$, ./+- ./###;    +M##% ", "  %####M.  /###=         @##M.   X###% ", "  %####M.  ;M##H:.     =$###X.   $###% ", "  %####@.   /####M$-./@#####:    %###% ", "  %H#M/,     /H###########@:     ./M#% ", " ;$H##@@H:    .;$HM#MMMH$;,   ./H@M##M$=", "X#########%.      ..,,.     .;@#########", "###########H+:.           ./@###########", "##############/ ./%%+/.-M#############", "##############H$@#######@@##############", "##############X%########M$M#############", "+M##########H:            .$##########X="],
    "13": ["         ,=;%$%$X%%;/%%;=,         ", "     ,/$$+:-                -:+$$/,     ", "   :X$=                          =$X:   ", " ;M%.                              .%M; ", "+#/                                  /#+", "##                                    M#", "H#,                     =;+/;,       ,#X", ".HM-       :@X+%H:   .%M%- .M#.     -M@.", "  /#%.     @#-  ,H@--MH, .;@$-    .%#+  ", "   .$M;    .+@X;, MM#@:/$X;.     ;M$,   ", "     =@H,     ,:+%H#M%;-       ,H@=     ", "      .$#;        -#H         =#$       ", "        %#;        #M        ;#%        ", "         H#-       ##       -#H         ", "         ;#+       ##       +#;         ", "          ;H+;;;;;;HH;;;;;;+H/          ", "           =H#@HHHHHHHHHH@#H=           ", "           =@#H%%%%$HH@#@=           ", "           =@#X%%%%$M###@=           ", "               =+%XHHX%+=               "],
    "12": ["       #+ @      # #              M#@   ", " .    .X  X.%##@;# #   +@#######X. @#%  ", "   ,==.   ,######M+  -#####%M####M-    #", "  :H##M%:=##+ .M##M,;#####/+#######% ,M#", " .M########=  =@#@.=#####M=M#######=  X#", " :@@MMM##M.  -##M.,#######M#######. =  M", "             @##..###:.    .H####. @@ X,", "   ############: ###,/####;  /##= @#. M ", "           ,M## ;##,@#M;/M#M  @# X#% X# ", ".%=   ######M## ##.M#:   ./#M ,M #M ,#$ ", "##/         $## #+;#: #### ;#/ M M- @# :", "#+ #M@MM###M-;M #:$#-##$H# .#X @ + $#. #", "      ######/.: #%=# M#:MM./#.-#  @#: H#", "+,.=   @###: /@ %#,@  ##@X #,-#@.##% .@#", "#####+;/##/ @##  @#,+       /#M    . X, ", "   ;###M#@ M###H .#M-     ,##M  ;@@; ###", "   .M#M##H ;####X ,@#######M/ -M###$  -H", "    .M###%  X####H  .@@MM@;  ;@#M@      ", "      H#M    /@####/      ,++.  / ==-,  ", "               ,=/:, .+X@MMH@#H  #####$="],
    "15": ["      .-+$H###MM@MMMMM##@$+-,. ....", "-@$+%$+%HX+--..  .  . .,:X$/+/++$#:", "-#MXH$=                      $HXH#:", " .--,:#+   ,+$HMX =@@X%, . .X#:,,, ", "     =#@$H :####H =####;,M%$#X     ", "     X###$ $####X =####H %###X     ", "    ;###X /###@$: ,+HM##H.+###;    ", "   :###;,X##%=;%H@H$;-;M#@-;###/   ", "  ,M##;.@##;-H#######M=.M##-:###-  ", "  ;##M ;##X @###H-=@###.;##X H##;  ", "  ;##M./##X.@###H:/M###-=##X X##;  ", "  -###;,M##:,@########+-H##; @##-  ", "   %##M==@##%==%HMH%::/M##+.X##+   ", "    %###/./###X+: -+$M##M=,X##+    ", "     X###X X####H +#####% @##H     ", "     :###H %####H +#####; X##;     ", "     /#$.  -HM##H /###@+.  +#$. .  ", "/HX%$X:      .,-, .-,.      =XX$H@-", "/#H+/+%+/+;=.          .=/%;;/;;+#+", " ..  .,-:XM#MM@@@@@@H@@M#@+=,.   ,,"],
    "14": ["      X MM X       ", "      X MM X       ", "      X MM X       ", "      X MM X       ", "      + HX +       ", "    ,=$$XX%/-      ", "  =X#########@%-   ", " ;##############=  ", "-###############M, ", ";##@@@######M@###= ", ".+:;+:=H##$=:/:;H. ", "- +###- ## :###,,; ", "+@:/%;-H##H==/::H; ", " /#@/-=+$$%::+H#$  ", " $#%-,      ,.:##- ", "-@/            =X%.", "%H=             -$;", " =HH,         .%M; ", "  /MM/       :@M/. ", "   .:XX,   -$H:.   "],
    "1": ["              .,-:;//;:=,               ", "          . :H@@@MM@M#H/.,+%;,          ", "       ,/X+ +M@@M@MM%=,-%HMMM@X/,       ", "     -+@MM; $M@@MH+-,;XMMMM@MMMM@+-     ", "    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.   ", "  ,%MM@@MH ,@%=            .---=-=:=,.  ", "  =@#@@@MX .,              -%HX$$%%+;  ", " =-./@M@M$                  .;@MMMM@MM: ", " X@/ -$MM/                    .+MM@@@M$ ", ",@M@H: :@:                    . =X#@@@@-", ",@@@MMX, .                    /H- ;@M@M=", ".H@@@@M@+,                    %MM+..%#$.", " /MMMM@MMH/.                  XM@MH; =; ", "  /%+%$XHH@$=              , .H@@@@MX,  ", "   .=--------.           -%H.,@@@@@MX,  ", "   .%MM@@@HHHXX$$$%+- .:$MMX =M@@MM%.   ", "     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=     ", "       =%@M@M#@$-.=$@MM@@@M; %M%=       ", "         ,:+$+-,/H#MMMMMMM@= =,         ", "               =++%%+/:-.             "],
    "3": ["            .+                          ", "             /M;                        ", "              H#@:              ;,      ", "              -###H-          -@/       ", "               %####$.  -;  .%#X        ", "                M#####+;#H :M#M.        ", "..          .+/;%#########X###-         ", " -/%H%+;-,    +##############/          ", "    .:$M###MH$%+############X  ,--=;-   ", "        -/H#####################H+=.    ", "           .+#################X.        ", "         =%M####################H;.     ", "            /@###############+;;/%;,   ", "         -%###################$.        ", "       ;H######################M=       ", "    ,%#####MH$%;+#####M###-/@####%      ", "  :$H%+;=-      -####X.,H#   -+M##@-    ", " .              ,###;    ;      =$##+   ", "                .#H,               :XH, ", "                 +                   .;-"],
    "2": ["            ,:/+/-                      ", "            /M/              .,-=;//;-  ", "       .:/= ;MH/,    ,=/+%$XH@MM#@:     ", "      -$##@+$###@H@MMM#######H:.    -/H#", " .,H@H@ X######@ -H#####@+-     -+H###@X", "  .,@##H;      +XM##M/,     =%@###@X;-  ", "X%-  :M##########$.    .:%M###@%:       ", "M##H,   +H@@@$/-.  ,;$M###@%,          -", "M####M=,,---,.-%H####M$:          ,+@##", "@##################@/.         :%H##@$- ", "M###############H,         ;HM##M$=     ", "#################.    .=$M##M$=         ", "################H..;XM##M$=          .:+", "M###################@%=           =+@MH%", "@################M/.          =+H#X%=   ", "=+M##############M,       -/X#X+;.      ", "  .;XM##########H=    ,/X#H+:,          ", "     .=+HM######M+/+HM@+=.              ", "         ,:/%XM####H/.                  ", "              ,.:=-.                    "],
    "5": ["                 =/;;/-                 ", "                +:    //                ", "               /;      /;               ", "              -X        H.              ", ".//;;;:;;-,   X=        :+   .-;:=;:;%;.", "M-       ,=;;;#:,      ,:#;;:=,       ,@", ":%           :%.=/++++/=.$=           %=", " ,%;         %/:+/;,,/++:+/         ;+. ", "   ,+/.    ,;@+,        ,%H;,    ,/+,   ", "      ;+;;/= @.  .H##X   -X :///+;      ", "      ;+=;;;.@,  .XM@$.  =X.//;=%/.     ", "   ,;:      :@%=        =$H:     .+%-   ", " ,%=         %;-///==///-//         =%, ", ";+           :%-;;;:;;;;-X-           +:", "@-      .-;;;;M-        =M/;;;-.      -X", " :;;::;;-.    %-        :+    ,-;;-;:== ", "              ,X        H.              ", "               ;/      %=               ", "                //    +;                ", "                 ,////,                 "],
    "4": ["                   ;=         ", "                   /=         ", "                   ;=         ", "                   /=         ", "                   ;=         ", "                   /=         ", "                   ;=         ", "                   /=         ", "            ,--==-:$;         ", "        ,/$@#######@X+-       ", "     ./@###############X=     ", "    /M#####X+/;;;;+H#####$.   ", "   %####M/;+H@XX@@%;;@####@,  ", "  +####H=+##$,--,=M#X-%####@. ", " -####X,X@HHXH##MXHXXH-+####$ ", " X###@.X/$M$:####$=@X/X,X####-", ".####:+$:##@:####$:##H/X=####%", "-%$%,+==%$+-$+:$;-$$%-+,/$%+", "-/+%X$XX$$$$$$$%$$$%$X$X$%+/-", "                              "],
    "7": ["           .-;+$XHHHHHHX$+;-.           ", "        ,;X@@X%/;=----=:/%X@@X/,        ", "      =$@@%=.              .=+H@X:      ", "    -XMX:                      =XMX=    ", "   /@@:                          =H@+   ", "  %@X,                            .$@$  ", " +@X.                               $@% ", "-@@,                                .@@=", "%@%                                  +@$", "H@:                                  :@H", "H@:         :HHHHHHHHHHHHHHHHHHX,    =@H", "%@%         ;@M@@@@@@@@@@@@@@@@@H-   +@$", "=@@,        :@@@@@@@@@@@@@@@@@@@@@= .@@:", " +@X        :@@@@@@@@@@@@@@@M@@@@@@:%@% ", "  $@$,      ;@@@@@@@@@@@@@@@@@M@@@@@@$. ", "   +@@HHHHHHH@@@@@@@@@@@@@@@@@@@@@@@+   ", "    =X@@@@@@@@@@@@@@@@@@@@@@@@@@@@X=    ", "      :$@@@@@@@@@@@@@@@@@@@M@@@@$:      ", "        ,;$@@@@@@@@@@@@@@@@@@X/-        ", "           .-;+$XXHHHHHX$+;-.           "],
    "6": ["             =+$HM####@H%;,             ", "          /H###############M$,          ", "          ,@################+           ", "           .H##############+            ", "             X############/             ", "              $##########/              ", "               %########/               ", "                /X/;;+X/                ", "                                        ", "                 -XHHX-                 ", "                ,######,                ", "#############X  .M####M.  X#############", "##############-   -//-   -##############", "X##############%,      ,+##############X", "-##############X        X##############-", " %############%          %############% ", "  %##########;            ;##########%  ", "   ;#######M=              =M#######;   ", "    .+M###@,                ,@###M+.    ", "       :XH.                  .HX:       "],
    "9": ["                                     :X-", "                                  :X### ", "                                ;@####@ ", "                              ;M######X ", "                            -@########$ ", "                          .$##########@ ", "                         =M############-", "                        +##############$", "                      .H############$=. ", "         ,/:         ,M##########M;.    ", "      -+@###;       =##########M;       ", "   =%M#######;     :#########M/         ", "-$M###########;   :#########/           ", " ,;X###########; =########$.            ", "     ;H#########+#######M=              ", "       ,+##############+                ", "          /M#########@-                 ", "            ;M######%                   ", "              +####:                    ", "               ,$M-                     "],
    "8": ["                          .,---.        ", "                        ,/XM#MMMX;,     ", "                      -%##########M%,   ", "                     -@######%  $###@=  ", "      .,--,         -H#######$   $###M: ", "   ,;$M###MMX;     .;##########$;HM###X=", " ,/@##########H=      ;################+", "-+#############M/,      %##############+", "%M###############=      /##############:", "H################      .M#############;.", "@###############M      ,@###########M:. ", "X################,      -$=X#######@:   ", "/@##################%-     +######$-    ", ".;##################X     .X#####+,     ", " .;H################/     -X####+.      ", "   ,;X##############,       .MM/        ", "      ,:+$H@M#######M#$-    .$$=        ", "           .,-=;+$@###X:    ;/=.        ", "                  .,/X$;   .::,         ", "                      .,    ..          "]
};
var credits = [">LIST PERSONNEL", " ", " ", "Gautam Babbar", "Ted Backman", "Kelly Bailey", "Jeff Ballinger", "Aaron Barber", "Jeep Barnett", "Jeremy Bennett", "Dan Berger", "Yahn Bernier", "Ken Birdwell", "Derrick Birum", "Mike Blaszczak", "Iestyn Bleasdale-Shepherd", "Chris Bokitch", "Steve Bond", "Matt Boone", "Antoine Bourdon", "Jamaal Bradley", "Jason Brashill", "Charlie Brown", "Charlie Burgin", "Andrew Burke", "Augusta Butlin", "Julie Caldwell", "Dario Casali", "Chris Chin", "Jess Cliffe", "Phil Co", "John Cook", "Christen Coomer", "Greg Coomer", "Scott Dalton", "Kerry Davis", "Jason Deakins", "Joe Demers", "Ariel Diaz", "Quintin Doroquez", "Jim Dose", "Chris Douglass", "Laura Dubuk", "Mike Dunkle", "Mike Durand", "Mike Dussault", "Dhabih Eng", "Katie Engel", "Chet Faliszek", "Adrian Finol", "Bill Fletcher", "Moby Francke", "Stephane Gaudette", "Kathy Gehrig", "Vitaliy Genkin", "Paul Graham", "Chris Green", "Chris Grinstead", "John Guthrie", "Aaron Halifax", "Reagan Halifax", "Leslie Hall", "Jeff Hameluck", "Joe Han", "Don Holden", "Jason Holtman", "Gray Horsfield", "Keith Huggins", "Jim Hughes", "Jon Huisingh", "Brian Jacobson", "Lars Jensvold", "Erik Johnson", "Jakob Jungels", "Rich Kaethler", "Steve Kalning", "Aaron Kearly", "Iikka Keranen", "David Kircher", "Eric Kirchmer", "Scott Klintworth", "Alden Kroll", "Marc Laidlaw", "Jeff Lane", "Tim Larkin", "Dan LeFree", "Isabelle LeMay", "Tom Leonard", "Jeff Lind", "Doug Lombardi", "Bianca Loomis", "Richard Lord", "Realm Lovejoy", "Randy Lundeen", "Scott Lynch", "Ido Magal", "Nick Maggiore", "John McCaskey", "Patrick McClard", "Steve McClure", "Hamish McKenzie", "Gary McTaggart", "Jason Mitchell", "Mike Morasky", "John Morello II", "Bryn Moslow", "Arsenio Navarro", "Gabe Newell", "Milton Ngan", "Jake Nicholson", "Martin Otten", "Nick Papineau", "Karen Prell", "Bay Raitt", "Tristan Reidford", "Alfred Reynolds", "Matt Rhoten", "Garret Rickey", "Dave Riller", "Elan Ruskin", "Matthew Russell", "Jason Ruymen", "David Sawyer", "Marc Scaparro", "Wade Schin", "Matthew Scott", "Aaron Seeler", "Jennifer Seeley", "Taylor Sherman", "Eric Smith", "Jeff Sorensen", "David Speyrer", "Jay Stelly", "Jeremy Stone", "Eric Strand", "Kim Swift", "Kelly Thornton", "Eric Twelker", "Carl Uhlman", "Doug Valente", "Bill Van Buren", "Gabe Van Engel", "Alex Vlachos", "Robin Walker", "Joshua Weier", "Andrea Wicklund", "Greg Winkler", "Erik Wolpaw", "Doug Wood", "Matt T. Wood", "Danika Wright", "Matt Wright", "Shawn Zabecki", "Torsten Zabka ", " ", " ", " ", " ", "'Still Alive' by:", "Jonathan Coulton", " ", " ", " ", "Voices:", "Ellen McLain - GlaDOS, Turrets", "Mike Patton - THE ANGER SPHERE", " ", " ", " ", "Voice Casting:", "Shana Landsburg\Teri Fiddleman", " ", " ", " ", " ", "Voice Recording:", "Pure Audio, Seattle, WA", " ", " ", " ", " ", "Voice recording", "scheduling and logistics:", "Pat Cockburn, Pure Audio", " ", " ", " ", " ", "Translations:", "SDL", " ", " ", " ", " ", "Crack Legal Team:", "Liam Lavery", "Karl Quackenbush", "Kristen Boraas", "Kevin Rosenfield", "Alan Bruggeman", "Dennis Tessier", " ", " ", " ", "Thanks for the use of their face:", "Alesia Glidewell - Chell", " ", " ", " ", "Special thanks to everyone at:", "Alienware", "ATI", "Dell", "Falcon Northwest", "Havok", "SOFTIMAGE", "and Don Kemmis, SLK Technologies", " ", " ", " ", " ", " ", " ", " ", " ", " ", "THANK YOU FOR PARTICIPATING", "IN THIS", "ENRICHMENT CENTER ACTIVITY!!", " ", " ", " ", " ", " ", ""];
var lyrics = [{
    delay: "2.00",
    text: "Forms FORM-29827281-12:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.00",
    text: "Test Assessment Report",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.85",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.05",
    text: "C'est un vrai triomphe.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.9",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.1",
    text: "J'en prends bonne note :",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.8",
    text: "R\311USSITE TOTALE.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.00",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.36",
    text: "Je ne pouvais esp\351rer plus ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.04",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.71",
    text: "franc succ\350s.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.13",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.76",
    text: "Aperture Science",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "2.10",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.57",
    text: "Nous faisons notre devoir ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.20",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.75",
    text: "car",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: " ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.71",
    text: "nous le pouvons.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.67",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.55",
    text: "Pour le bien",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.53",
    text: " de nous tous.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.279",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.741",
    text: "Sauf ceux qui ont tr\351pass\351.",
    nonewline: 0,
    clear: 0,
    changepicture: 6
}, {
    delay: "0.400",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.858",
    text: "Nous sommes tous embarqu\351s ",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "0.01",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.782",
    text: "dans le m\352me b\342teau.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.200",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.985",
    text: "Il faut pers\351v\351rer ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.366",
    text: "jusqu'au bout du ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.400",
    text: "g\342teau.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.186",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.97",
    text: "Et la science progresse.",
    nonewline: 0,
    clear: 0,
    changepicture: 5
}, {
    delay: "1.97",
    text: "Vous faites des prouesses.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.02",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.52",
    text: "Pour ceux qui sont",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "0.02",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.50",
    text: "toujours l\340.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.5",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "0.55",
    text: "Forms FORM-55551-5:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.10",
    text: "Personnel File Addendum:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.66",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.35",
    text: "Dear <<Subject Name Here>>,",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.06",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.917",
    text: "Je ne suis pas fach\351e.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.368",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.697",
    text: "Je vous le ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.65",
    text: "dis ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.906",
    text: "en toute ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.115",
    text: "sinc\351rit\351.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.625",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.65",
    text: "Bien ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.347",
    text: "que vous ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.488",
    text: "m'ayez bris\351 ",
    nonewline: 1,
    clear: 0,
    changepicture: 8
}, {
    delay: "0.998",
    text: "le coeur ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.325",
    text: "et ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.488",
    text: "an\351antie",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.557",
    text: ".",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.00",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.649",
    text: "Et bris\351e en mille morceaux.",
    nonewline: 0,
    clear: 0,
    changepicture: 3
}, {
    delay: "2.322",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.440",
    text: "Et finalement \351e",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.302",
    text: " ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.580",
    text: "dans",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.395",
    text: " ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.882",
    text: "un brasier.",
    nonewline: 0,
    clear: 0,
    changepicture: 11
}, {
    delay: "1.649",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.400",
    text: "Dans le feu, ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.509",
    text: "j'ai souffert car",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.325",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.625",
    text: "j'\351tais heureuse pour vous.",
    nonewline: 0,
    clear: 0,
    changepicture: 9
}, {
    delay: "0.441",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.067",
    text: "Ces points de donn\351es",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.950",
    text: "forment une ligne splendide.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.020",
    text: "La b\352ta est termin\351e.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.950",
    text: "Nous avons presque fini.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.113",
    text: "Heureusement que j'ai br\373l\351e.",
    nonewline: 0,
    clear: 0,
    changepicture: 3
}, {
    delay: "2.020",
    text: "Cela nous a bien \351clair\351s.",
    nonewline: 0,
    clear: 0,
    changepicture: 5
}, {
    delay: "1.556",
    text: "Pour ceux qui sont",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "0.395",
    text: "toujours",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.440",
    text: " l\340.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.5",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "0.45",
    text: "Forms FORM-55551-6:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.31",
    text: "Personnel File Addendum Addendum:",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.66",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.05",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.324",
    text: "Partez et laissez-moi donc",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.627",
    text: ".",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.788",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.534",
    text: "Je ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.184",
    text: "pr\351f\350re ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.022",
    text: "rester ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.232",
    text: "seule ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.882",
    text: "ici.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.43",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.511",
    text: "Vous",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.972",
    text: " trouverez peut-\352tre quelqu'un d'autre",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.254",
    text: "pour vous aider.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.252",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.511",
    text: "Peut-\352tre ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.325",
    text: "Black ",
    nonewline: 1,
    clear: 0,
    changepicture: 7
}, {
    delay: "0.998",
    text: "Mesa",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.183",
    text: "... ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.440",
    text: "NON, JE BLAGUE.",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.021",
    text: " ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.279",
    text: "FAUT PAS ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.859",
    text: "R\312VER.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.393",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.486",
    text: "Ce ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.765",
    text: "g\342teau est fantastique.",
    nonewline: 0,
    clear: 0,
    changepicture: 2
}, {
    delay: "1.904",
    text: "Il est si bon et moelleux.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.418",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.927",
    text: "Je bavarde beaucoup",
    nonewline: 0,
    clear: 0,
    changepicture: 12
}, {
    delay: "2.090",
    text: "mais je ne suis pas efficace.",
    nonewline: 0,
    clear: 0,
    changepicture: 6
}, {
    delay: "1.695",
    text: "Je n'aimerais vraiment pas",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "2.183",
    text: "\352tre à votre place.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "2.043",
    text: "Mes exp\351riences m'attendent.",
    nonewline: 0,
    clear: 0,
    changepicture: 5
}, {
    delay: "2.020",
    text: "Et mes recherches avancent.",
    nonewline: 0,
    clear: 0,
    changepicture: 3
}, {
    delay: "1.625",
    text: "Pour ceux qui sont",
    nonewline: 0,
    clear: 0,
    changepicture: 1
}, {
    delay: "0.348",
    text: "toujours ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.440",
    text: "l\340.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.2",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "0.10",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.01",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.3",
    text: "PS: ",
    nonewline: 1,
    clear: 0,
    changepicture: 0
}, {
    delay: "1.625",
    text: "Je vous assure, je suis",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.138",
    text: "toujours l\340",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.8",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.198",
    text: "PPS: ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.904",
    text: "Au coeur de la science, je suis",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.091",
    text: "toujours l\340.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.8",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.175",
    text: "PPPS: ",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.904",
    text: "Je suis en PLEINE FORME et je suis",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.091",
    text: "toujours l\340.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.154",
    text: "FINAL THOUGHT: ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.579",
    text: "Quand vous agoniserez, je serai",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.254",
    text: "toujours l\340.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.829",
    text: "FINAL THOUGHT PS: ",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.834",
    text: "Quand vous serez mort, je serai",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.161",
    text: "toujours l\340.",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.459",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.400",
    text: "",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "1.184",
    text: "TOUJOURS L\300",
    nonewline: 0,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.2",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.1",
    text: "",
    nonewline: 0,
    clear: 1,
    changepicture: -1
}, {
    delay: "45.279",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}, {
    delay: "0.279",
    text: "",
    nonewline: 1,
    clear: 0,
    changepicture: -1
}];
