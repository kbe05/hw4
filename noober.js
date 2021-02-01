async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
 

  for (let i=0; i<json.length; i++) {
        let ride = json[i]
        if (ride.length > 1) {
          levelOfService = 'Noober Pool'
        } else if (ride[0].purpleRequested) {
          levelOfService = 'Noober Purple'
        } else if (ride[0].numberOfPassengers > 3) {
          levelOfService = 'Noober XL'
        } else {
          levelOfService = 'Noober X'
        }

        document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span> ${levelOfService}</span>
      </h1>
        
      `)

  for (let j=0; j<ride.length; j++) {
        let leg = ride[j]
        
        let name = `${leg.passengerDetails.first} ${leg.passengerDetails.last}`
        let numberOfPassengers = leg.numberOfPassengers
        let phoneNumber = leg.passengerDetails.phoneNumber
        let pickupaddress = leg.pickupLocation.address
        let pickupcitystatezip = `${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}`
        let dropoffaddress = leg.dropoffLocation.address
        let dropoffcitystatezip = `${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}`

        let border
        let border2
        if (levelOfService == 'Noober Purple') {
        border = 'border-4 border-purple-500 p-4 my-4 text-left'
        border2 = 'rounded-xl bg-purple-600 text-white p-2'
        } else { 
        border = 'border-4 border-gray-900 p-4 my-4 text-left'
        border2 = 'rounded-xl bg-gray-600 text-white p-2'
        }
    

        document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="${border}">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${name}</h2>
          <p class="font-bold text-gray-600">${phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="${border2}">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupaddress}</p>
          <p>${pickupcitystatezip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffaddress}</p>
          <p>${dropoffcitystatezip}</p>
        </div>
      </div>
    </div>
      `)




      


      }
        


  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

