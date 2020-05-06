const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }

  Park.prototype.numberOfDinosaurs = function(){
    return this.dinosaurs.length
}

  Park.prototype.addDinosaur = function(dino){
    this.dinosaurs.push(dino);
}

  Park.prototype.removeDinosaur = function(dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
  }


  Park.prototype.mostVisitors = function() {
    mostVisited = 0
    for (dinosaur in this.dinosaurs) {
      if (dinosaur.guestsAttractedPerDay >= mostVisited) {
      mostVisited === guestsAttractedPerDay;
      }
    } return mostVisited
  }

    
    
  


module.exports = Park;

