// JavaScript Encode and Decode Function

function rotEncode()
{
		var text = document.getElementById("message").value;
		var encoded_text= [];
		
		for(var i=0; i<text.length; i++)
		{
			input = alphabet.indexOf(text[i]);
			if(input == -1 )
			{
				encoded_text.push(text[i]);
			}
			else
			{
				var coded = (input+13)%26;
				var letter = alphabet[coded];
				encoded_text.push(letter);
			}
		}
		document.getElementById("rot13-output-text").innerHTML = encoded_text.join("");
}

function caesarEncode()
{
		var text = document.getElementById("caesarmessage").value;
		var keytext = document.getElementById("caesarkey").value;
		var key = parseInt(keytext);
		var encoded_text= [];
		
		for(var i=0; i<text.length; i++)
		{
			input = alphabet.indexOf(text[i]);
			if(input == -1 )
			{
				encoded_text.push(text[i]);
			}
			else
			{
				var coded = (input+key)%26;
				var letter = alphabet[coded];
				encoded_text.push(letter);
			}
		}
		document.getElementById("caesar-output-text").innerHTML = encoded_text.join("");
}

function caesarDecode()
{
		var text = document.getElementById("caesardecodemessage").value;
		var keytext = document.getElementById("caesardecodekey").value;
		var key = parseInt(keytext);
		var decoded_text= [];
		
		for(var i=0; i<text.length; i++)
		{
			input = alphabet.indexOf(text[i]);
			if(input == -1 )
			{
				decoded_text.push(text[i]);
			}
			else
			{
				var coded = ((input-key)%26);
				var letter = alphabet[coded];
				decoded_text.push(letter);
			}
		}
		document.getElementById("caesar-decode-output-text").innerHTML = decoded_text.join("");
}

function morseEncode()
{
	var message = document.getElementById("morsemessage").value;
	var encoded_text = [];
	for (var i=0; i<message.length; i++)
	{
		input = morseEncodeTable.indexOf(message[i]);
		if(input == -1)
		{
			encoded_text.push(message[i]);
		}
		else
		{
			var letter = morseEncodeTable[input+1]
			encoded_text.push(letter);
		}
	}
	document.getElementById("morse-output-text").innerHTML = encoded_text.join(" ");
}

function morseDecode()
{
	var message = document.getElementById("morsedecodemessage").value;
	var dotDash = message.split(" ");
	var decoded_text = [];
	dotDash.forEach(function(value, index){
		input = morseDecodeTable.indexOf(value)
		if(input == -1)
		{
			decoded_text.push(value);
		}
		else
		{
			var letter = morseDecodeTable[input-1]
			decoded_text.push(letter);
		}
	});
	document.getElementById("morse-decode-output-text").innerHTML = decoded_text.join("");
}

function pigLatinEncode()
{
	var message = document.getElementById("piglatinmessage").value;
	var words = message.split(" ");
	var encoded = [];
	var counter = 0;
	words.forEach(function(value, index){
		if(vowels.includes(value[0]))
		{
			value = value + "yay";
			encoded.push(value);
		}
		else if(consonants.includes(value[0]))
		{
			for(var i=0; i<value.length; i++)
			{
				if(vowels.includes(value[i]))
				{
					break
				}
			}
			var last = value.substring(0, i);
			var first = value.slice(i);
			var value = first + last + "ay";
			encoded.push(value);
		}
	});
	document.getElementById("piglatin-output-text").innerHTML = encoded.join(" ");
}

// Various variables used either by numerous functions or too long so moved for convenience
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']

var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']

var morseEncodeTable = [
	' ', ' ',
	'a', '.-',
	'b', '-...',
	'c', '-.-.',
	'd', '-..',
	'e', '.',
	'f', '..-.',
	'g', '--.',
	'h', '....',
	'i', '..',
	'j', '.---',
	'k', '-.-',
	'l', '.-..',
	'm', '--',
	'n', '-.',
	'o', '---',
	'p', '.--.',
	'q', '--.-',
	'r', '.-.',
	's', '...',
	't', '-',
	'u', '..-',
	'v', '...-',
	'w', '.--',
	'x', '-..-',
	'y', '-.--',
	'z', '--..',
	'1', '.----',
	'2', '..---',
	'3', '...--',
	'4', '....-',
	'5', '.....',
	'6', '-....',
	'7', '--...',
	'8', '---..',
	'9', '----.',
	'0', '-----',
	'A', '.-',
	'B', '-...',
	'C', '-.-.',
	'D', '-..',
	'E', '.',
	'F', '..-.',
	'G', '--.',
	'H', '....',
	'I', '..',
	'J', '.---',
	'K', '-.-',
	'L', '.-..',
	'M', '--',
	'N', '-.',
	'O', '---',
	'P', '.--.',
	'Q', '--.-',
	'R', '.-.',
	'S', '...',
	'T', '-',
	'U', '..-',
	'V', '...-',
	'W', '.--',
	'X', '-..-',
	'Y', '-.--',
	'Z', '--..',
]
var morseDecodeTable = [
	' ', ' ',
	'a', '.-',
	'b', '-...',
	'c', '-.-.',
	'd', '-..',
	'e', '.',
	'f', '..-.',
	'g', '--.',
	'h', '....',
	'i', '..',
	'j', '.---',
	'k', '-.-',
	'l', '.-..',
	'm', '--',
	'n', '-.',
	'o', '---',
	'p', '.--.',
	'q', '--.-',
	'r', '.-.',
	's', '...',
	't', '-',
	'u', '..-',
	'v', '...-',
	'w', '.--',
	'x', '-..-',
	'y', '-.--',
	'z', '--..',
	'1', '.----',
	'2', '..---',
	'3', '...--',
	'4', '....-',
	'5', '.....',
	'6', '-....',
	'7', '--...',
	'8', '---..',
	'9', '----.',
	'0', '-----'
]