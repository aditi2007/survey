class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("A Survey to Bring  Change");
    title.position(60, 0);
    
    var input = createInput("VoterID");
    var input2=createInput("Your Vote");
    var button = createButton('Fill');
    
    input.position(130, 160);
    input2.position(130,230);
    button.position(200,370);
    
    button.mousePressed(function(){
     // input.hide();
     // input2.hide();
      button.hide();
    

      var name = input.value();
      
     // playerCount+=1;
     // player.update(name)
     // player.updateCount(playerCount);
      var greeting = createElement('h3');
      var greeting2= createElement('h3');
     var  greeting3=createElement('h6');
     var greeting4=createElement('h3');
      greeting.html("Thankyou for joining us " );
      greeting2.html("Thankyou for answering " );
      greeting3.html("Do you think we should have free lunch meals in schools' canteen for poor kids?")
      greeting4.html("Thankyou for your precious time.");
      var input3=createInput("Answer");
      var button2=createButton('Submit');
      greeting.position(70,170);
      greeting2.position(70,239);
      greeting3.position(25,270);
      input3.position(38,320);
      button2.position(260,320);
      greeting4.position(50,350);
     
    
    });

  }
}
