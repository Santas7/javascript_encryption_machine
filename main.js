class ShipherShmith{
    constructor(){
        this._simv = [
            ['Ï', 'ƒ'], // aA
            ['ắ', '✯'], // bB
            ['爪', '¢'], // cC
            ['ö', '₤'], // dD
            ['テ', '♯'], // eE
            ['Ä', '₣'], // fF
            ['₦', '♜'], // gG
            ['₰', '◭'], // hH

            ['ɀ', '◈'], // iI
            ['ק', '♟'],
            ['ŉ', '६'], // kK
            ['ẍ', '⋵'], // lL
            ['方', '♝'], // mM
            ['￥', '⊾'], // nN
            ['ľ', '٥'], // oO
            ['ẅ', '⁂'], // pP

            ['ẵ', '☣️'], // qQ
            ['℟', '♚'], // rR
            ['ໂ', 'ự'], // sS
            ['ᵰ', '➦'], // tT
            ['į', '✖️'], // uU
            ['ḿ', 'ಭ'], // vV
            ['∮', 'ǿ'], // wW
            ['ﻸ', '⤱'],
            ['♅', '〴'],
            ['ű', 'ソ'], // zZ

            // special simv
            ['◎', '⋔'], // :
            ['⊗', '⋬'], // ,
            ['≛', '⋨'], // .
            ['⋰', '⊼'], // [
            ['⋱', '⋽'], // ]
            ['⋇', '∇'], // !
            ['∏', '⊭'], // ?
	    ['∺', 'ⅸ'], // +
	    ['ⅰ', '≝'], // -
	    ['ℒ', '℻'], // =
	    ['℣', 'ℭ'], // /
	    ['⋙', '≞'], // ;
	    ['〄', '✠'], // %
	    ['☬', '❞'], // *

	    ['ῲ', 'ᶋ'], // {
	    ['ᵱ', '░'], // }
	    ['Ὸ', 'ᵫ'], // <
	    ['ᶶ', 'Ώ'], // >
	    ['ᴥ', 'ᵹ'], // |
	    ['◔', '🔒'], // "
            ['≉', '∰'], // space

            // numbers
            ['◟', '▖'], // 0
            ['▙', '◜'], // 1
            ['◠', '▜'], // 2
            ['▞', '◡'], // 3
            ['◚', '✙'], // 4
            ['▘', '◛'], // 5
            ['ᶌ', '▗'], // 6
            ['◌', '☩'], // 7
            ['◶', '◬'], // 8
            ['☠️', '◷'], // 9
        ];
        this._alfabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:,.[]!?+-=/;%*{}<>|' 0123456789";
    }

    get_index_simv(char){
        if (this._alfabet.indexOf(char) >= 25)
            return this._alfabet.indexOf(char) - 25;
        return this._alfabet.indexOf(char);
    }

    encrypt(text){
		try{
			let result = '', text_array = text.split('');
			for(let i = 0; i < text_array.length; i++)
				result += this._simv[this.get_index_simv(text_array[i])][Math.floor(Math.random() * 2)];
			
			let hash_start = '';
			let max_length = Math.floor(Math.random() * 16);
			if (max_length == 0){max_length = 1;}
			for(let i = 0; i < max_length; i++)
				hash_start += this._simv[Math.floor(Math.random() * 43)][Math.floor(Math.random() * 2)];

			let hash_end = '';
			for(let i = 0; i < max_length; i++)
				hash_end += this._simv[Math.floor(Math.random() * 43)][Math.floor(Math.random() * 2)];
			
			let delta = result.length;
			result = hash_start + result + hash_end;
			let keyOf = (hash_start.length - 1).toString() + "," + ((hash_start.length - 1) + (delta)).toString();
			return result + '\nKeyOf: ' + keyOf;
		}
		catch(err){
			alert("Error! the text should consist only of these characters: 'abcdefghijklmnopqrstuvwxyz or ABCDEFGHIJKLMNOPQRSTUVWXYZ and :,.[]! 0123456789'");
		}
    }

	remove(text, start_pos, end_pos){
		let result = '';
		for (let i = start_pos + 1; i < end_pos + 1; i++)
			result += text[i];
		return result;
	}

    decrypt(text, keyof){
		let result_array = this.remove(text, Number(keyof[0]), Number(keyof[1])).split('');
		let decrypt_result = '';
		console.log(result_array)
		for(let i = 0; i < result_array.length; i++){
			let index = 0;
			for (let j = 0; j < this._simv.length; j++){
				if (result_array[i] == this._simv[j][0] || result_array[i] == this._simv[j][1]){
					index = j;
					break;
				}
			}
			if (index > 25 && index < 51)
				index += 25;
			decrypt_result += this._alfabet[index];
		}
		return decrypt_result;    
	}
	
}

let shipher = new ShipherShmith();
