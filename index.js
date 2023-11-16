// Freelancers on a list.
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

// Freelancers to be added on the list.
const newFreelancers = [
  { name: "Carol", occupation: "Programmer", price: 70 },
  { name: "David", occupation: "Carpenter", price: 60 },
  { name: "Eric", occupation: "Trainer", price: 25 },
  { name: "Frank", occupation: "Tutor", price: 35 },
  { name: "George", occupation: "Landscaper", price: 40 },
  { name: "Henry", occupation: "Handyman", price: 45 },
  { name: "Ian", occupation: "Therapist", price: 30 },
  { name: "Jane", occupation: "Chef", price: 18 },
  { name: "Kevin", occupation: "Pilot", price: 180 },
  { name: "Lee", occupation: "Body Guard", price: 100 },
  { name: "Mark", occupation: "Mechanic", price: 200 },
  { name: "Nancy", occupation: "Nurse", price: 300 },
];

// 'setInterval' will call 'addNewFreelancer' every 2000 milliseconds (2 seconds)
// and return an interval ID that will be use to stop the interval later.
// Calling 'clearInterval(addNewFreelancer)' will stop the interval.
const addFreelancerInvervalId = setInterval(addNewFreelancer, 2000);

//Render the initial state.
renderFreelancers();

/**
 * Update the DOM to relfect the current state.
 * Used the term "renderFreelancers" in this case.
 *
 */
function renderFreelancers() {
  // Insert table header to the table with 'freelancers' id in HTML.
  const freelancersTable = document.getElementById("freelancers");
  freelancersTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Starting Price</th>
        </tr>
        `;
  /**
   * Using forEach method to iterate over the 'freelancers' array and
   * inserts a new row at the end of the table, then inserts cells into the row
   * with the freelancer's name, occupation, and (starting) price.
   */
  freelancers.forEach((freelancer) => {
    const row = freelancersTable.insertRow(-1);
    row.insertCell(0).innerText = freelancer.name;
    row.insertCell(1).innerText = freelancer.occupation;
    row.insertCell(2).innerText = `$${freelancer.price}`;
  });
  // Once freelancers are on the list, use function 'averagePrice' to update the average starting price.
  averagePrice();
}

// 'averagePrice' function to get the average starting price of freelancers on the list.
function averagePrice() {
  const average =
    freelancers.reduce((total, current) => total + current.price, 0) /
    freelancers.length;
  // once average starting price is calculated, update it on HTML using getElementById.
  document.getElementById(
    "averagePrice"
  ).innerText = `The average starting price is $${average.toFixed(2)}.`;
}

// Function to add one new freelancer at a time.
function addNewFreelancer() {
  // First index of 'newFreelancers' array will be added to the end of 'freelancers' array using shit and push method.
  if (newFreelancers.length > 0) {
    const newFreelancer = newFreelancers.shift();
    freelancers.push(newFreelancer);
    renderFreelancers();
  }
  // Once 'newFreelancers' array is empty, 'addNewFreelancer' function will stop.
  else {
    clearInterval(addFreelancerInvervalId);
  }
}
