var fs = require('fs');
var help = 0;
if (process.argv.length <= 2) {
    console.log("Please specify words");
    process.exit(-1);
}
fs.readFile("openthesaurus.txt", "utf8", function (err, data) {
    if (err)
        throw err;
    var ar = data.split("\n");
    for (var i = 2; i < process.argv.length; i++) {
        console.log(process.argv[i]);
        for (var j = 0; j < ar.length; j++) {
            var word = ar[j].split(";");
            if (word[0] != "#") {
                for (var x = 0; x < word.length; x++) {
                    if (process.argv[i] == word[x]) {
                        help = 1;
                        for (var y = 0; y < word.length; y++) {
                            if (word[y] != process.argv[i]) {
                                console.log("\t" + word[y]);
                            }
                        }
                    }
                }
            }
        }
        if (help != 1) {
            console.log("\tNo matchs found");
        }
        help = 0;
    }
});
