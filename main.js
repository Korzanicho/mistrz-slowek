new Vue({
  el: "#app",
  data:{
   result: 0,
   answer: "",
   dictionary: [],
   words: [],
   currentWordId: 0,
   currentWord: "",
   lastAnswer: null
  },
  methods:{
    randWord: function(restrict){
      var randedId = Math.floor(Math.random() * this.dictionary.length); 

      if(restrict !== undefined && this.dictionary.length>=2){ //
        if(randedId == restrict){
          if(randedId > 0){
            randedId--;
          }
          else{
            randedId = Math.round((Math.random()*this.dictionary.length-2)+1);
          }
        }
      }

      this.currentWordId = randedId;
      this.currentWord = this.dictionary[this.currentWordId][1];
    },
    initialState: function(){
      this.dictionary = [
        ["eagle", "orzeł"],
        ["hawk", "jastrząb"],
        ["haddock", "łupacz"]
      ];
      this.words = [];
      this.result = 0;
      this.lastAnswer = null;
      this.randWord();
    },
    checkAnswer: function(){
      if(this.answer.trim().toLowerCase() == this.dictionary[this.currentWordId][0]){
        this.result+=1;
        this.words.push(this.dictionary.splice(this.currentWordId, 1)[0]);
        this.lastAnswer = true;
        this.randWord();
      }
      else{
        this.result -= 0.5;
        this.lastAnswer = false;
        this.randWord(this.currentWordId);
      }
      this.answer="";
    }
  },
  created: function(){
    this.initialState();
  }
});