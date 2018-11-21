const fs = require('fs');
let help = 0;

if(process.argv.length <= 2){
    console.log("Please specify words");
    process.exit(-1);
}

fs.readFile("openthesaurus.txt", "utf8",(err, data) => {
    if (err) throw err;

    let ar = data.split("\n")
    
    for(let i = 2; i< process.argv.length; i++){
        console.log(process.argv[i]);
        for (let j = 0; j < ar.length; j++) {
            
            let word = ar[j].split(";");
            if(word[0] != "#"){

                for(let x = 0; x < word.length; x++){
                
                    if(process.argv[i] == word[x]){
                        help = 1;
                        for(let y = 0; y < word.length; y++){
                
                            if(word[y] != process.argv[i]){
                                console.log("\t" + word[y]);
                            }
                        }
                    }
                }
            }
        }
        if(help != 1){
            console.log("\tNo matchs found");
        }
        help = 0;
    }
  });