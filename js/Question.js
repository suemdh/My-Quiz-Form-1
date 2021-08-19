class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   
   this.input2 = createInput("Enter Correct Option No..")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
     this.question1 = createElement("h3");
     this.option1 = createElement("h4")
     this.option2 = createElement("h4");
     this.option3 = createElement("h4");
     this.option4 = createElement("h4");
     



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    
    




  }

  display(){
   


    //Create html() and position() for each question, input and answers.
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    
    this.question1.position(120,100);
    this.question1.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");

    this.option1.position(120,130);
    this.option1.html("1: Everyone")


    this.option2.position(120,155);
    this.option2.html("2: Envelope")

    this.option3.position(120,178);
    this.option3.html("3: Estimate");

    this.option4.position(120,200);
    this.option4.html("4: Example");



    this.input1.position(150, 300);
    this.input2.position(400, 300);
    this.button.position(290, 356);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input1.hide();
    this.input2.hide();
    this.button.hide();
    
    
    this.message.position(200,250);
    this.message.html("Thank you! Your answer has been submitted.")

    })


  }
}
