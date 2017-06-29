class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    debugger
    this.crew = crew
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.warpDrive =  "disengaged"
    this.phasersCharge = "uncharged"
    this.assignCrew()
    this.docked()
  }
  docked(){
    if(this.crew.length > 0){
      this.docked = false
    }else {
      this.docked = true
    }}


  assignCrew(){
    if (this.crew.length > 0){
      this.crew.forEach(person => {
        person.currentShip = this
      })
    }

  }

}
