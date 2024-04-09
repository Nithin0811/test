class Uber_Price {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;
    }
  }
  
  let uber = new Uber_Price(10);
  console.log(uber.getPrice());