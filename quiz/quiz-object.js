var quiz = {
    questions : questions,
    limit : this.questions.length,
    count : 0,
    right : 0,
    wrong : 0,

    startQuiz : function(){
      $('#results-view').hide();
      $('#answer-alert').hide();
      this.setView();
    },

    getQuestion : function(){
      return questions[ this.count ].question;
    },

    getAnswer : function(){
      return questions[ this.count ].answer;
    },

    getChoices : function(){
      return questions[ this.count ].choices;
    },

    answerQuestion : function( answer ){
      this.checkAnswer( answer );
      this.nextQuestion();

      if( this.count < this.limit ){
        this.setView();
        console.log(this.count + " " + this.limit );
      } else {
        this.endQuiz();
      }
    },

    checkAnswer : function( answer ){
      var isCorrect = false;

      if( answer === this.getAnswer() ){
        isCorrect = true;

      } else {
        isCorrect = false;
      }
      this.answered( isCorrect );
      this.alertAnswer( isCorrect );
      return isCorrect;
    },

    alertAnswer : function( isCorrect ){
      var alertClass = '',
          text = '';

      if( isCorrect ){
        alertClass = 'alert-success';
        text = 'Correct!';
      } else {
        alertClass = 'alert-danger';
        text = 'Dummy!';
      }

      $('#answer-alert')
        .removeClass( 'alert-success alert-danger' )
        .addClass( alertClass )
        .fadeIn()
        .find('#alert-message')
        .text( text );
    },

    answered : function( isCorrect ){
      if( isCorrect ){ this.right++; }
      else { this.wrong++; }
    },

    nextQuestion : function(){
        this.count++;
      },

    setView : function(){
        $('#question').html( this.getQuestion() );
        $('#answers').html( this.setChoices() );
        this.bindAnswers();
    },

    setChoices : function( ){

      var choices = this.getChoices(),
          html    = '<div class="btn-group">';

      for( var i = 0, len = choices.length; i < len; i++){
        html += '<button type="button" class="btn btn-default" data-answer="' + choices[i] + '">' + choices[i] + '</button>';
      }

      html += '</div>';

      return html;
    },

    bindAnswers : function(){
      $('.btn').on('click', function(){
        quiz.answerQuestion( $(this).data('answer') );
      });
    },

    endQuiz : function(){
      $('.quiz-view').slideUp('fast', function(){
        $('.result-view')
        .find('#results')
        .append('<h4>Right: ' + quiz.right + '</h4><h4>Wrong: ' + quiz.wrong + '</h4>')
        .slideDown();
      });
    }
  };