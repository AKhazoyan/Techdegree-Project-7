// Alert Notifications
const alertBell = document.querySelector('.notify-icon svg');
const dropdownMenu = document.querySelector('.dropdown-content');

alertBell.addEventListener('click', function() {
	dropdownMenu.classList.toggle('showDropdown');
})



//Alert Bar//
const alertBar = document.querySelector('.alert');
const closeButton = document.querySelector('.closebtn');

closeButton.addEventListener('click', function() {
    alertBar.style.display = 'none';
})



//Traffic Chart Line Graph Widget//

	//Weekly Graph//
	const trafficCanvasWeekly = document.querySelector('#traffic-chart');

	let trafficChartDataWeekly = {
		labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3',
		'4-10', '11-17', '18-24', '25-31'],
		datasets: [{
			data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
					2500],
			backgroundColor: 'rgba(116, 119, 191, .3)',
			borderWidth: 1,
			lineTension: 0,
			pointBackgroundColor: 'rgb(255, 255, 255, 1)',
			pointRadius: 4,
			pointBorderWidth: 2,
			pointBorderColor: 'rgba(116, 119, 191, 1)',
		}]
	};

	let trafficOptionsWeekly = {
		aspectRatio: 2.5,
		animation: {
			duration: 0
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
		legend : {
			display: false
		}
	};

	let initialTrafficChart = new Chart(trafficCanvasWeekly, {
		type: 'line',
		data: trafficChartDataWeekly,
		options: trafficOptionsWeekly
	});

	//Hourly Graph//
	const trafficCanvasHourly = document.querySelector('#traffic-chart');

	let trafficChartDataHourly = {
		labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm',
		'5pm', '6pm', '7pm', '8pm'],
		datasets: [{
			data: [0, 10, 15, 23, 40, 54, 60, 70, 82, 97, 100],
			backgroundColor: 'rgba(116, 119, 191, .3)',
			borderWidth: 1,
			lineTension: 0,
			pointBackgroundColor: 'rgb(255, 255, 255, 1)',
			pointRadius: 4,
			pointBorderWidth: 2,
			pointBorderColor: 'rgba(116, 119, 191, 1)',
		}]
	};

	let trafficOptionsHourly = {
		aspectRatio: 2.5,
		animation: {
			duration: 0
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
		legend : {
			display: false
		}
	};

		//Daily Graph//
	const trafficCanvasDaily = document.querySelector('#traffic-chart');

	let trafficChartDataDaily = {
		labels: ['Wed', 'Thurs', 'Fri', 'Sat', 'Sun', 'Mon', 'Tues',
		'Wed', 'Thurs', 'Fri', 'Sat'],
		datasets: [{
			data: [0, 70, 100, 150, 200, 290, 300, 310, 400, 444, 500],
			backgroundColor: 'rgba(116, 119, 191, .3)',
			borderWidth: 1,
			lineTension: 0,
			pointBackgroundColor: 'rgb(255, 255, 255, 1)',
			pointRadius: 4,
			pointBorderWidth: 2,
			pointBorderColor: 'rgba(116, 119, 191, 1)',
		}]
	};

	let trafficOptionsDaily = {
		aspectRatio: 2.5,
		animation: {
			duration: 0
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
		legend : {
			display: false
		}
	};

	//Monthly Graph//
	const trafficCanvasMonthly = document.querySelector('#traffic-chart');

	let trafficChartDataMonthly = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
				'August', 'September', 'October', 'November', 'December'],
		datasets: [{
			data: [500, 1250, 1500, 1000, 1800, 2100, 1750, 1500, 1850, 2050, 1900,
				2500],
			backgroundColor: 'rgba(116, 119, 191, .3)',
			borderWidth: 1,
			lineTension: 0,
			pointBackgroundColor: 'rgb(255, 255, 255, 1)',
			pointRadius: 4,
			pointBorderWidth: 2,
			pointBorderColor: 'rgba(116, 119, 191, 1)',
		}]
	};

	let trafficOptionsMonthly = {
		aspectRatio: 2.5,
		animation: {
			duration: 0
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
		legend : {
			display: false
		}
	};

	// Traffic Chart Changes on Hourly, Daily, Weekly, Monthly//

	const listItem = document.querySelectorAll('.traffic-nav li');

	for (let i = 0; i < listItem.length; i++) {
		listItem[i].addEventListener('click', function() {
			document.querySelector('.traffic-nav .activeLi').classList.remove("activeLi");
			listItem[i].classList.add('activeLi');

			// display line graph that coorilates to the correct data-chart//
			let chartSelected = listItem[i].getAttribute('data-chart');
			
			switch(chartSelected) {
				case 'hourly':
					let trafficChartHourly = new Chart(trafficCanvasHourly, {
						type: 'line',
						data: trafficChartDataHourly,
						options: trafficOptionsHourly
					});
					break;
				case 'daily':
					let trafficChartDaily = new Chart(trafficCanvasDaily, {
						type: 'line',
						data: trafficChartDataDaily,
						options: trafficOptionsDaily
					});
					break;
				case 'weekly': 
					let trafficChartWeekly = new Chart(trafficCanvasWeekly, {
						type: 'line',
						data: trafficChartDataWeekly,
						options: trafficOptionsWeekly
					});
					break;
				case 'monthly':
					let trafficChartMonthly = new Chart(trafficCanvasMonthly, {
						type: 'line',
						data: trafficChartDataMonthly,
						options: trafficOptionsMonthly
					});
					break;
			}
			
		});
	}



//Daily Traffic Chart Bar Graph Widget//
const dailyCanvas = document.querySelector('#daily-traffic-chart');

const dailyData = {
	labels: ["S", "M", "T", "W", "T", "F", "S"],
	datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1
	}]
}

const dailyOptions = {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero:true
			}
		}]
	},
	legend : {
		display: false
	}
}

let dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
});



//Mobile Users Doughnut Chart Widget//

const mobileCanvas = document.querySelector('#mobile-users-chart');

const mobileData = {
	labels: ["Desktop", "Tablet", "Phones"],
	datasets: [{
		label: '# of Users',
		data: [2000, 550, 500],
		borderWidth: 0,
		backgroundColor: [
			'#7477BF',
			'#78CF82',
			'#51B6C8'
		]
	}]
};

const mobileOptions = {
	legend: {
		position: 'right',
		reverse: true,
		labels: {
			boxWidth: 20,
			fontStyle: 'bold'
		}
	}
};
   
let mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});
 


// Messaging Section //

	document.querySelector("#userField").addEventListener("click", function() {
		document.querySelector("#usersNames").style.display = "block";
	});

	function hideAutocompleteResults() {
		document.querySelector("#usersNames").style.display = "none";
	}

	document.querySelector("#userField").addEventListener("blur", function() {
			hideAutocompleteResults();
	});

	//Autocomplete Member Search//

	document.querySelector("#userField").addEventListener("autoComplete", event => {
		console.log(event);
	});

	new autoComplete({
		data: {                              // Data src [Array, Function, Async] | (REQUIRED)
		  src: ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'],
		//   key: ["title"],
		  cache: true
		},
		sort: (a, b) => {                    // Sort rendered results ascendingly | (Optional)
			if (a.match < b.match) return -1;
			if (a.match > b.match) return 1;
			return 0;
		},
		placeHolder: "Search for User",      // Place Holder text                 | (Optional)
		selector: "#userField",              // Input field selector              | (Optional)
		threshold: 1,                        // Min. Chars length to start Engine | (Optional)
		debounce: 300,                       // Post duration for engine to start | (Optional)
		searchEngine: "strict",              // Search Engine type/mode           | (Optional)
		resultsList: {                       // Rendered results list object      | (Optional)
			render: true,
			container: source => {
				source.setAttribute("id", "usersNames");
			},
			destination: document.querySelector("#userField"),
			position: "afterend",
			element: "ul"
		},
		maxResults: 5,                         // Max. number of rendered results | (Optional)
		highlight: true,                       // Highlight matching results      | (Optional)
		resultItem: {                          // Rendered result item            | (Optional)
			content: (data, source) => {
				source.innerHTML = data.match;
			},
			element: "li"
		},
		onSelection: feedback => {             // Action script onSelection event | (Optional)
			let selection = feedback.selection.value;
			document.querySelector("#userField").value = selection;
		},
		
	});



	// Submittion Alerts//
const user = document.querySelector('#userField');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');

send.addEventListener('click', function(event) {
	event.preventDefault();
	if (user.value === "" && message.value === "") {
		alert("Please fill out user and message fields before sending.");
	} else if (user.value === "") {
		alert("Please fill out user field before sending.");
	} else if (message.value === "") {
			alert("Please fill out message field before sending.");
	} else {
		alert("Message was successfully sent to " + user.value);
	}
	document.querySelector('.form-field').value = "";
	document.querySelector('.form-area').value = "";
});





// Settings Local Storage
let toggleEmailState;
let togglePublicState;

const saveButton = document.querySelector('#save');
const cancelButton = document.querySelector('#cancel');
const timezoneDropdown = document.querySelector('#timezone');

// Determine Settings States
function toggleEmail() {
	if (toggleEmailState == 'off' || toggleEmailState == null) {
		toggleEmailState = 'on';
	} else {
		toggleEmailState = 'off';
	}
}

function togglePublic() {
	if (togglePublicState == 'off' || togglePublicState == null) {
		togglePublicState = 'on';
	} else {
		togglePublicState = 'off';
	}
}

// Toggle Events
document.querySelector('#toggleEmail .toggle').addEventListener('click', function() {
	toggleEmail();
});

document.querySelector('#togglePublic .toggle').addEventListener('click', function() {
	togglePublic();
});

// Button Click Events
saveButton.addEventListener('click', function() {
	window.localStorage.setItem('savedToggleEmail', toggleEmailState);
	window.localStorage.setItem('savedTogglePublic', togglePublicState);
	window.localStorage.setItem('savedTimezone', timezoneDropdown.value);
})

cancelButton.addEventListener('click', function() {
	window.localStorage.clear();
})

// Set Settings on Load
if (window.localStorage.getItem('savedToggleEmail') == null) {
	toggleEmailState = 'off';
	document.querySelector('#toggleEmail').querySelector('input').checked = false;
} else {
	toggleEmailState = window.localStorage.getItem('savedToggleEmail');
	if (toggleEmailState == 'on') {
		document.querySelector('#toggleEmail').querySelector('input').checked = true;
	} else {
		document.querySelector('#toggleEmail').querySelector('input').checked = false;
	}
}

if (window.localStorage.getItem('savedTogglePublic') == null) {
	togglePublicState = 'off';
	document.querySelector('#togglePublic').querySelector('input').checked = false;
} else {
	togglePublicState = window.localStorage.getItem('savedTogglePublic');
	if (togglePublicState == 'on') {
		document.querySelector('#togglePublic').querySelector('input').checked = true;
	} else {
		document.querySelector('#togglePublic').querySelector('input').checked = false;
	}
}

if (window.localStorage.getItem('savedTimezone') == null) {
	timezoneDropdown.value = 'default';
} else {
	timezoneDropdown.value = window.localStorage.getItem('savedTimezone');
}