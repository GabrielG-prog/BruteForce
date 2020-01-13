 (function () {

     var bf = {

         alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
         lastRes: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

         // allData est un tableau qui stock toutes les possibilités
         allData: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

         run: function (n) { // n est la longueur d'une caine de caractère
             if (n <= 1) {
                 console.log("Fin");
                 return this.allData;
                 console.log("Longueur = 1 -- fin de la fonction");

                 console.log("Toutes les donées : ", this.allData);
                 console.log("Dernière valeur :", this.allData[this.allData.length - 1]);
             } else {
                 console.log("n-1");
                 var newRes = [];
                 for (var i = 0; i < this.lastRes.length; i++) {

                     console.log(i + " = " + this.lastRes[i])

                     //*
                     for (var j = 0; j < this.alphabet.length; j++) {
                         //console.log(j + " = " + this.alphabet[j])
                         var r = this.lastRes[i] + this.alphabet[j];
                         //console.log(r);
                         newRes.push(r);
                         //console.log(this.lastRes);
                     }
                     //console.log("Nouvelle réponse = ", newRes);

                 }
                 console.log("Longueur = " + n + " -- fin de la double boucle ");
                 this.lastRes = newRes
                 console.log("Dernière reponse : ", this.lastRes);

                 this.allData = this.allData.concat(this.lastRes)
                 return this.run(n - 1);
             }


         }
     };
     bf.run(3);

 })();
