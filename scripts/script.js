const allSeats = document.getElementsByClassName('kbd');
let seat = 0;
let seatLeft = 8;
let totalPrice = 550;
let grandtotal = 550;


 for(const seats of allSeats) {
    seats.addEventListener('click', function(e) {
    seats.style.backgroundColor = '#1DD100';

    seat = seat + 1;
    increaseSeat('increase-seat', seat);

    seatLeft = seatLeft - 1;
    leftSeat('seat-left', seatLeft);

    totalPrice = totalPrice + 550;
    seatTotalPrice('total-price', totalPrice);

    grandtotal = grandtotal + 550;
    seatGrandTotal('grand-total', grandtotal);
     
   //  const newTd = document.getElementById('new-td');
   //  const createNewTd1 = document.createElement('div')
   //  const createNewTd2 = document.createElement('td');
   //  const createNewTd3 = document.createElement('td');
   //  const createNewTd4 = document.createElement('td');
    
   //  createNewTd3.style.paddingInline = '60px';
   //  createNewTd2.innerText = 'A1';
   //  createNewTd3.innerText = 'Economics'
   //  createNewTd4.innerText = 550;

    
   //  newTd.appendChild(createNewTd1);
   //  newTd.appendChild(createNewTd2);
   //  newTd.appendChild(createNewTd3);
   //  newTd.appendChild(createNewTd4);

    })


    
    // function for increase seat number
   function increaseSeat(id, value) {
    document.getElementById(id).innerText = value;
   }

//    function for lefts seat
   function leftSeat(id, value) {
    document.getElementById(id).innerText = value;
   }

    // function for total price
    function seatTotalPrice(id, value) {
       document.getElementById(id).innerText = value;
    }

//    function for grand total
    function seatGrandTotal(id, value) {
        document.getElementById(id).innerText = value;
    }
}

// function for new section
function showElementById(elementId) {
   const element = document.getElementById(elementId);
   element.classList.remove('hidden');
}

 function newSection() {
    showElementById('show-this');
 }