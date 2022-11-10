var text = document.getElementById(1).value;
var str = [], n, r;
str[99999] = 5; 
var alf1 = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
'u', 'v', 'w', 'x', 'y', 'z', ':', ',', '.', '[', ']', '!', '?', ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alf2 = [
        ['Ï', 'ƒ'],
        ['ắ', '✯'],
        ['爪', '¢'],
        ['ö', '₤'],
        ['テ', '♯'],
        ['Ä', '₣'],
        ['₦', '♜'],
        ['₰', '◭'],

        ['ɀ', '◈'],
        ['ק', '♟'],
        ['ŉ', '६'],
        ['ẍ', '⋵'],
        ['方', '♝'],
        ['￥', '⊾'],
        ['ľ', '٥'],
        ['ẅ', '⁂'],

        ['ẵ', '☣'],
        ['℟', '♚'],
        ['ໂ', 'ự'],
        ['ᵰ', '➦'],
        ['į', '✖'],
        ['ḿ', 'ಭ'],
        ['∮', 'ǿ'],
        ['ﻸ', '⤱'],
        ['♅', '〴'],
        ['ű', 'ソ'],

        // special simv
        ['◎', '⋔'],
        ['⊗', '⋬'],
        ['≛', '⋨'],
        ['⋰', '⊼'],
        ['⋱', '⋽'],
        ['⋇', '∇'],
        ['∏', '⊭'],
        ['≉', '∰'],
        ];

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Convert(){
		for(var i = 0; i < str.length; i++){
			str[i] = ' ';
		}
        for (var i = 0; i < str.length; i++) {
        	for (var j = 0; j < 60; j++) {
            	if (text[i] == alf1[j]) {
            		if(j >= 34) {n = j - 34; r = getRandomArbitrary(0, 1);str[i] = alf2[n][r];}
            		else{
            			    n = j; 
            				r = getRandomArbitrary(0, 1);
            				str[i] = alf2[n][r];
            		}
            	}	
  			}
        }

}

function isConvert(){
	for(var key = 0; key < text.length; key++){
		for (var i = 0; i < alf2.length; i++) {
        	for (var j = 0; j < alf2[i].length; j++) {
            	if (text[key] == alf2[i][j]) {
            		str[key] = alf1[i];
            	}
  			}
        }
	}


}

var str2 = [];
document.getElementById(2).onclick=()=>{
	text = document.getElementById(1).value;
	Convert();
	document.getElementById(1).value = '';
	str2 = '';
	for(var i = 0; i < text.length; i++){
		str2 += str[i];
	}
	document.getElementById(1).value = str2;
}
document.getElementById(4).onclick=()=>{
	text = document.getElementById(3).value;
	isConvert();
	document.getElementById(3).value = '';
	str2 = '';
	for(var i = 0; i < text.length; i++){
		str2 += str[i];
	}
	document.getElementById(3).value = str2;
}


function playSound() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '1.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
function playSound2() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '2.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

document.addEventListener('keydown', function(){
		
		if (event.code == "Space") {
 				playSound2()
    	}
    	else if (event.keyCode == "46"){
    		document.getElementById(1).value = '';
    	}
    	else{
    		playSound()
    	}
});

document.getElementById(7).onclick=()=>{
	document.getElementById("two").style.visibility = "visible";
	document.getElementById("one").style.visibility = "hidden";
}
document.getElementById(123).onclick=()=>{
	document.getElementById("two").style.visibility = "hidden";
	document.getElementById("one").style.visibility = "visible";
}

