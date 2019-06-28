/*jshint esversion: 6 */

// const square = x => x * x;

// console.log(square(3));

const event = {
  name: 'Birthday Party',
  guestList: ['Joe','Ronja', 'Tal', 'Dana'],
  printGuestList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
      
    });
  }
};
event.printGuestList();