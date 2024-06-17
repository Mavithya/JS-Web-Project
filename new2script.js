$(document).ready(function () {
  const tabContainer = document.getElementById("tab-container");
  const tab1Button = document.getElementById("tab1");
  const tab2Button = document.getElementById("tab2");
  const mainTable = document.getElementById("main-table");
  const returnTable = document.getElementById("return-table");
  const displayBothCheckbox = document.getElementById("return-trip");

  // List of stations for autocomplete
  var stations = [
    "Colombo Fort",
    "Kandy",
    "Galle",
    "Matara",
    "Maradana",
    "Mount Lavinia",
    "Jaffna",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Trincomalee",
    "Vavuniya",
    "Polonnaruwa",
    "Moratuwa",
    "Kelaniya",
    "Panadura",
    "Dehiwala",
    "Bambalapitiya",
    "Wellawatte",
    "Kollupitiya",
    "Ragama",
    "Veyangoda",
    "Polgahawela",
    "Beliaththa",
    "Ella",
    "Hatton",
    "Idalgashinna",
    "Galoya Junction",
    // Add more stations as needed
  ];

  // Initialize autocomplete for start and end stations
  $("#start-station, #end-station")
    .autocomplete({
      source: function (request, response) {
        var results = $.ui.autocomplete.filter(stations, request.term);

        // Prioritize results that start with the input term
        results = results.sort(function (a, b) {
          if (
            a.toLowerCase().startsWith(request.term.toLowerCase()) &&
            !b.toLowerCase().startsWith(request.term.toLowerCase())
          ) {
            return -1;
          }
          if (
            !a.toLowerCase().startsWith(request.term.toLowerCase()) &&
            b.toLowerCase().startsWith(request.term.toLowerCase())
          ) {
            return 1;
          }
          return 0;
        });

        response(results);
      },
      minLength: 0,
      open: function () {
        $(".ui-autocomplete").css("z-index", 1000);
      },
    })
    .focus(function () {
      // Show all stations when the input is focused
      $(this).autocomplete("search", "");
    });

  const trainData1 = [
    ["Colombo Fort", "05.55", "05.55", "-"],
    ["Ragama", "06:16", "06:18", "2 minutes"],
    ["Gampaha", "06:30", "06:31", "1 minute"],
    ["Veyangoda", "06:41", "06:43", "2 minutes"],
    ["Mirigama", "06:54", "06:55", "1 minute"],
    ["Polgahawela", "07:15", "07:17", "2 minutes"],
    ["Rambukkana", "07:28", "07:31", "3 minutes"],
    ["Kadigamuwa", "07:42", "07:43", "1 minute"],
    ["Ihalakotte", "07:53", "07:54", "1 minute"],
    ["Balana", "08:04", "08:05", "1 minute"],
    ["Kadugannawa", "08:13", "08:14", "1 minute"],
    ["Pilimatalawa", "08:20", "08:25", "5 minutes"],
    ["Kandy", "08:46", "08:57", "9 minutes"],
    ["Peradeniya", "08:56", "08:57", "1 minute"],
    ["Geli Oya", "09:14", "09:15", "1 minute"],
    ["Gampola", "09:27", "09:39", "12 minutes"],
    ["Tembiligala", "09:45", "09:46", "1 minute"],
    ["Ulapane", "09:53", "09:54", "1 minute"],
    ["Nawalapitiya", "10:08", "10:12", "4 minutes"],
    ["Inguruoya", "10:23", "10:24", "1 minute"],
    ["Galaboda", "10:35", "10:36", "1 minute"],
    ["Watawala", "10:53", "10:54", "1 minute"],
    ["Ihalawatawala", "10:59", "11:00", "1 minute"],
    ["Rozella", "11:08", "11:09", "1 minute"],
    ["Hatton", "11:23", "11:25", "2 minutes"],
    ["Kotagala", "11:35", "11:36", "1 minute"],
    ["Talawakele", "11:50", "11:52", "2 minutes"],
    ["Watagoda", "12:06", "12:07", "1 minute"],
    ["Great Western", "12:17", "12:22", "5 minutes"],
    ["Radella", "12:30", "12:31", "1 minute"],
    ["Nanuoya", "12:39", "12:45", "6 minutes"],
    ["Parakumpura", "12:56", "12:57", "1 minute"],
    ["Ambewela", "13:16", "13:17", "1 minute"],
    ["Pattipola", "13:24", "13:25", "1 minute"],
    ["Ohiya", "13:38", "13:39", "1 minute"],
    ["Idalgashinna", "13:56", "14:07", "11 minutes"],
    ["Haputale", "14:21", "14:22", "1 minute"],
    ["Diyatalawa", "14:32", "14:34", "2 minutes"],
    ["Bandarawela", "14:46", "14:48", "2 minutes"],
    ["Kinigama", "14:53", "14:54", "1 minute"],
    ["Heel Oya", "15:02", "15:03", "1 minute"],
    ["Kital Ella", "15:11", "15:12", "1 minute"],
    ["Ella", "15:17", "15:19", "2 minutes"],
    ["Demodara", "15:32", "15:33", "1 minute"],
    ["Uduwara", "15:41", "15:42", "1 minute"],
    ["Hali Ela", "15:50", "15:51", "1 minute"],
    ["Badulla", "16.07", "-", "-"],
  ];

  const trainData2 = [
    ["Trincomalee", "07:00 pm", "07:00 pm", "-"],
    ["China Bey", "07:10 pm", "07:12 pm", "2 minutes"],
    ["Thampalakamam", "07:34 pm", "07:35 pm", "1 minute"],
    ["Mollipatana", "07:48 pm", "07:49 pm", "1 minute"],
    ["Kantale", "08:06 pm", "08:09 pm", "3 minutes"],
    ["Akbopura", "08:16 pm", "08:20 pm", "4 minutes"],
    ["Galoya Junction", "08:50 pm", "09:10 pm", "20 minutes"],
    ["Habarana", "09:30 pm", "09:31 pm", "1 minute"],
    ["Palugaswewa", "09:42 pm", "09:43 pm", "1 minute"],
    ["Horiwiala", "09:49 pm", "09:50 pm", "1 minute"],
    ["Kekirawa", "10:05 pm", "10:07 pm", "2 minutes"],
    ["Kalawewa", "10:21 pm", "10:22 pm", "1 minute"],
    ["Aukana", "10:28 pm", "10:29 pm", "1 minute"],
    ["Moragollagama", "10:51 pm", "10:52 pm", "1 minute"],
    ["Konwewa", "11:06 pm", "11:07 pm", "1 minute"],
    ["Maho", "11:25 pm", "12:00 am (Next Day)", "35 minutes"],
    ["Nagollagama", "12:11 am", "12:25 am", "14 minutes"],
    ["Ganewatte", "12:41 am", "12:42 am", "1 minute"],
    ["Wellawa", "12:56 am", "12:57 am", "1 minute"],
    ["Kurunegala", "01:09 am", "01:11 am", "2 minutes"],
    ["Potuhera", "01:25 am", "01:26 am", "1 minute"],
    ["Polgahawela", "01:46 am", "01:50 am", "4 minutes"],
    ["Mirigama", "02:16 am", "02:17 am", "1 minute"],
    ["Veyangoda", "02:30 am", "02:33 am", "3 minutes"],
    ["Gampaha", "02:45 am", "02:48 am", "3 minutes"],
    ["Ragama", "03:00 am", "03:03 am", "3 minutes"],
    ["Maradana", "03:21 am", "03:25 am", "4 minutes"],
    ["Colombo Fort", "03:30 am", "03:30 am", "-"],
  ];

  const trainData3 = [
    ["Colombo Fort", "10:30 am", "10:30 am", "-"],
    ["Mount Lavinia", "10:45 am", "10:46 am", "1 minute"],
    ["Kalutara South", "11:27 am", "11:28 am", "1 minute"],
    ["Aluthgama", "11:48 am", "11:50 am", "2 minutes"],
    ["Ambalangoda", "12:11 pm", "12:12 pm", "1 minute"],
    ["Hikkaduwa", "12:22 pm", "12:23 pm", "1 minute"],
    ["Galle", "12:42 pm", "01:00 pm", "18 minutes"],
    ["Thalpe", "01:10 pm", "01:11 pm", "1 minute"],
    ["Koggala", "01:15 pm", "01:16 pm", "1 minute"],
    ["Ahangama", "01:20 pm", "01:21 pm", "1 minute"],
    ["Weligama", "01:31 pm", "01:32 pm", "1 minute"],
    ["Kamburugamuwa", "01:40 pm", "01:48 pm", "8 minutes"],
    ["Matara", "01:54 pm", "02:00 pm", "6 minutes"],
    ["Piladuwa", "02:02 pm", "02:03 pm", "1 minute"],
    ["Weherahena", "02:06 pm", "02:07 pm", "1 minute"],
    ["Kakanadura", "02:10 pm", "02:11 pm", "1 minute"],
    ["Bambaranda", "02:18 pm", "02:19 pm", "1 minute"],
    ["Wewurukannala", "02:24 pm", "02:25 pm", "1 minute"],
    ["Beliaththa", "02:35 pm", "02:35 pm", "-"],
  ];
  const trainData4 = [
    ["Badulla", "-", "08:30", "-"],
    ["Hali Ela", "08:45", "08:46", "1 minute"],
    ["Uduwara", "08:54", "08:55", "1 minute"],
    ["Demodara", "09:08", "09:09", "1 minute"],
    ["Ella", "09:23", "09:24", "1 minute"],
    ["Kital Ella", "09:29", "09:30", "1 minute"],
    ["Heel Oya", "09:38", "09:39", "1 minute"],
    ["Kinigama", "09:48", "09:49", "1 minute"],
    ["Bandarawela", "09:55", "09:57", "3 minutes"],
    ["Diyatalawa", "10:11", "10:12", "1 minute"],
    ["Haputale", "10:24", "10:26", "2 minutes"],
    ["Idalgashinna", "10:43", "10:44", "1 minute"],
    ["Ohiya", "11:03", "11:04", "1 minute"],
    ["Pattipola", "11:19", "11:20", "1 minute"],
    ["Ambewela", "11:27", "11:28", "1 minute"],
    ["Parakumpura", "11:47", "11:48", "1 minute"],
    ["Nanuoya", "11:58", "12:03", "5 minutes"],
    ["Radella", "12:11", "12:12", "1 minute"],
    ["Great Western", "12:20", "12:21", "1 minute"],
    ["Watagoda", "12:31", "12:32", "1 minute"],
    ["Talawakele", "12:46", "12:48", "2 minutes"],
    ["Kotagala", "13:02", "13:03", "1 minute"],
    ["Hatton", "13:13", "13:24", "11 minutes"],
    ["Rozella", "13:38", "13:39", "1 minute"],
    ["Ihalawatawala", "13:48", "13:49", "1 minute"],
    ["Watawala", "13:54", "14:10", "16 minutes"],
    ["Galaboda", "14:27", "14:28", "1 minute"],
    ["Inguru Oya", "14:39", "14:40", "1 minute"],
    ["Nawalapitiya", "14:51", "14:55", "4 minutes"],
    ["Ulapane", "15:07", "15:08", "1 minute"],
    ["Tembiligala", "15:14", "15:15", "1 minute"],
    ["Gampola", "15:22", "15:23", "1 minute"],
    ["Kandy", "15:53", "16:00", "7 minutes"],
    ["Sarasavi Uyana", "16:07", "16:08", "1 minute"],
    ["Peradeniya", "16:10", "16:11", "1 minute"],
    ["Pilimatalawa", "16:19", "16:20", "1 minute"],
    ["Kadugannawa", "16:27", "16:28", "1 minute"],
    ["Ihalakotte", "16:50", "16:51", "1 minute"],
    ["Kadigamuwa", "17:02", "17:12", "10 minutes"],
    ["Rambukkana", "17:23", "17:26", "3 minutes"],
    ["Polgahawela", "17:37", "17:39", "2 minutes"],
    ["Veyangoda", "18:09", "18:11", "2 minutes"],
    ["Gampaha", "18:22", "18:23", "1 minute"],
    ["Ragama", "18:34", "18:35", "1 minute"],
    ["Maradana", "18:51", "-", "-"],
    ["Colombo Fort", "18:57", "-", "-"],
  ];

  // Define the train objects
  var trainObjects = [
    {
      trainNo: "3029 Podi Menike",
      yourStation: "",
      departureTime: "",
      yourDestination: "",
      destinationTime: "",
      availableClasses: [`1st class<br>2nd class<br>3rd class`],
      frequency: "daily",
      trainType: "express",
      trainData: trainData1, // Link to trainData1
    },
    {
      trainNo: "5079 Trincomalee night mail",
      yourStation: "",
      departureTime: "",
      yourDestination: "",
      destinationTime: "",
      availableClasses: ["1st class", "2nd class", "3rd class"],
      frequency: "daily",
      trainType: "express",
      trainData: trainData2, // Link to trainData2
    },
    {
      trainNo: "6047 Galu kumari",
      yourStation: "",
      departureTime: "",
      yourDestination: "",
      destinationTime: "",
      availableClasses: ["1st class", "2nd class", "3rd class"],
      frequency: "daily",
      trainType: "express",
      trainData: trainData3, // Link to trainData3
    },
    {
      trainNo: "7056 Udarata Menike",
      yourStation: "",
      departureTime: "",
      yourDestination: "",
      destinationTime: "",
      availableClasses: ["1st class", "2nd class", "3rd class"],
      frequency: "daily",
      trainType: "express",
      trainData: trainData4, // Link to trainData1
    },
  ];

  // Function to update train objects with form input values
  function updateTrainObjects() {
    trainObjects.forEach(function (trainObject) {
      trainObject.yourStation = $("#start-station").val();
      trainObject.yourDestination = $("#end-station").val();
      // Find departure and destination times from trainData arrays
      for (let i = 0; i < trainObject.trainData.length; i++) {
        if (trainObject.trainData[i][0] === trainObject.yourStation) {
          trainObject.departureTime = trainObject.trainData[i][2];
        }
        if (trainObject.trainData[i][0] === trainObject.yourDestination) {
          trainObject.destinationTime = trainObject.trainData[i][1];
        }
      }
    });
  }

  // Function to filter and display relevant table rows
  function displayFilteredRows() {
    $("#main-table").removeClass("hide-heading");
    $("#main-table tbody").empty(); // Clear existing rows
    trainObjects.forEach(function (trainObject) {
      // Check if the stations exist in trainData and are in the correct order
      var fromIndex = trainObject.trainData.findIndex(
        (row) => row[0] === trainObject.yourStation
      );
      var toIndex = trainObject.trainData.findIndex(
        (row) => row[0] === trainObject.yourDestination
      );
      if (fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex) {
        // Display the row corresponding to this train
        $("#main-table tbody").append(`<tr>
                            <td>
                            ${trainObject.trainNo}
                            <br>
                            <button class="view-schedule-btn p-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-1">View Schedule</button>
                            </td>
                            <td>${trainObject.yourStation}</td>
                            <td>${trainObject.departureTime}</td>
                            <td>${trainObject.yourDestination}</td>
                            <td>${trainObject.destinationTime}</td>
                            <td>${trainObject.frequency}</td>
                            <td>${trainObject.trainType}</td>
                            <td>${trainObject.availableClasses.join(", ")}</td>
                            <td>Rs. ${trainObjects.price1}<br>Rs. ${
          trainObjects.price2
        }<br>Rs. ${trainObjects.price3}</td>
                            
                        </tr>`);
      }
    });

    // Add click event listener to the "Select" buttons
    $(".select-btn").click(function () {
      // Remove highlight from all rows
      $("tbody tr").removeClass("bg-yellow-200");
      // Highlight the selected row
      $(this).closest("tr").addClass("bg-yellow-200");
    });

    // Add click event listener to the "View Schedule" buttons
    $(".view-schedule-btn").click(function () {
      // Find the relevant train object
      var trainNo = $(this)
        .closest("tr")
        .find("td:first-child")
        .contents()
        .filter(function () {
          return this.nodeType === 3;
        })
        .text()
        .trim();
      var trainObject = trainObjects.find((train) => train.trainNo === trainNo);

      // Display the schedule table
      displayScheduleTable(trainObject.trainData);
    });
  }

  // Function to update train objects with form input values
  function updateReturnTrainObjects() {
    trainObjects.forEach(function (trainObject) {
      trainObject.yourStation = $("#end-station").val();
      trainObject.yourDestination = $("#start-station").val();
      // Find departure and destination times from trainData arrays
      for (let i = 0; i < trainObject.trainData.length; i++) {
        if (trainObject.trainData[i][0] === trainObject.yourStation) {
          trainObject.departureTime = trainObject.trainData[i][2];
        }
        if (trainObject.trainData[i][0] === trainObject.yourDestination) {
          trainObject.destinationTime = trainObject.trainData[i][1];
        }
      }
    });
  }

  // Function to filter and display relevant table rows
  function displayReturnFilteredRows() {
    $("#return-table").removeClass("hide-heading");
    $("#return-table tbody").empty(); // Clear existing rows
    trainObjects.forEach(function (trainObject) {
      // Check if the stations exist in trainData and are in the correct order
      var fromIndex = trainObject.trainData.findIndex(
        (row) => row[0] === trainObject.yourStation
      );
      var toIndex = trainObject.trainData.findIndex(
        (row) => row[0] === trainObject.yourDestination
      );
      if (fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex) {
        // Display the row corresponding to this train
        $("#return-table tbody").append(`<tr>
                            <td>
                            ${trainObject.trainNo}
                            <br>
                            <button class="view-return-schedule-btn p-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-1">View Schedule</button>
                            </td>
                            <td>${trainObject.yourStation}</td>
                            <td>${trainObject.departureTime}</td>
                            <td>${trainObject.yourDestination}</td>
                            <td>${trainObject.destinationTime}</td>
                            <td>${trainObject.frequency}</td>
                            <td>${trainObject.trainType}</td>
                            <td>${trainObject.availableClasses.join(", ")}</td>
                            <td>Rs. ${trainObjects.price1}<br>Rs. ${
          trainObjects.price2
        }<br>Rs. ${trainObjects.price3}</td>
                            
                        </tr>`);
      }
    });

    // Add click event listener to the "Select" buttons
    $(".select-return-btn").click(function () {
      // Remove highlight from all rows
      $("tbody tr").removeClass("bg-yellow-200");
      // Highlight the selected row
      $(this).closest("tr").addClass("bg-yellow-200");
    });

    // Add click event listener to the "View Schedule" buttons
    $(".view-return-schedule-btn").click(function () {
      // Find the relevant train object
      var trainNo = $(this)
        .closest("tr")
        .find("td:first-child")
        .contents()
        .filter(function () {
          return this.nodeType === 3;
        })
        .text()
        .trim();
      var trainObject = trainObjects.find((train) => train.trainNo === trainNo);

      // Display the schedule table
      displayScheduleTable(trainObject.trainData);
    });
  }

  function displayScheduleTable(trainData) {
    $("#schedule-container").empty(); // Clear existing table
    var scheduleTable = `<table class="min-w-1/3 bg-white border border-gray-300 mt-4 mx-auto">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Station name</th>
                            <th class="py-2 px-4 border-b">Arrival time</th>
                            <th class="py-2 px-4 border-b">Departure time</th>
                            <th class="py-2 px-4 border-b">Duration</th>
                        </tr>
                    </thead>
                    <tbody>`;
    trainData.forEach(function (row) {
      scheduleTable += `<tr>
                        <td class="py-2 px-4 border-b text-center">${row[0]}</td>
                        <td class="py-2 px-4 border-b text-center">${row[1]}</td>
                        <td class="py-2 px-4 border-b text-center">${row[2]}</td>
                        <td class="py-2 px-4 border-b text-center">${row[3]}</td>
                    </tr>`;
    });
    scheduleTable += `</tbody></table>`;
    $("#schedule-container").append(scheduleTable);
  }

  // On form submission, update train objects and display filtered rows
  $("#train-search-form").submit(function (event) {
    event.preventDefault();

    tabContainer.classList.remove("hidden");

    if (!displayBothCheckbox.checked) {
      tab2Button.classList.add("hidden");
      tab1Button.classList.add("flex-1");
      setActiveTab(tab1Button);
    } else {
      tab2Button.classList.remove("hidden");
      tab1Button.classList.remove("flex-1");
      setActiveTab(tab1Button);
      updateReturnTrainObjects();
      displayReturnFilteredRows();
    }

    tab1Button.addEventListener("click", () => {
      mainTable.classList.remove("hidden");
      returnTable.classList.add("hidden");
      setActiveTab(tab1Button);
    });

    tab2Button.addEventListener("click", () => {
      returnTable.classList.remove("hidden");
      mainTable.classList.add("hidden");
      setActiveTab(tab2Button);
    });

    function setActiveTab(activeButton) {
      document.querySelectorAll(".tab-button").forEach((button) => {
        button.classList.remove("text-blue-500", "border-blue-500", "active");
        button.classList.add("text-gray-600", "border-transparent");
      });
      activeButton.classList.add("text-blue-500", "border-blue-500", "active");
    }

    // Initialize the first tab as active
    mainTable.classList.remove("hidden");
    returnTable.classList.add("hidden");
    setActiveTab(tab1Button);
    var startStation = $("#start-station").val();
    var endStation = $("#end-station").val();

    trainObjects.forEach(function (train) {
      // Initialize startIndex and endIndex for each train
      var startIndex = -1;
      var endIndex = -1;

      // Find the indexes of start and end stations in trainData array
      for (var j = 0; j < train.trainData.length; j++) {
        if (train.trainData[j][0] === startStation) {
          startIndex = j;
        }
        if (train.trainData[j][0] === endStation) {
          endIndex = j;
        }
      }

      // Only calculate the price if both start and end stations are found
      if (startIndex !== -1 && endIndex !== -1) {
        var difference = Math.abs(startIndex - endIndex);
        var price1,
          price2,
          price3 = 0;

        // Calculate the price based on the difference in indexes
        if (difference >= 1 && difference <= 5) {
          price1 = 350;
          price2 = 250;
          price3 = 150;
        } else if (difference >= 6 && difference <= 10) {
          price1 = 700;
          price2 = 500;
          price3 = 300;
        } else if (difference >= 11 && difference <= 15) {
          price1 = 1050;
          price2 = 750;
          price3 = 450;
        } else if (difference >= 16 && difference <= 20) {
          price1 = 1400;
          price2 = 1000;
          price3 = 600;
        } else if (difference >= 21 && difference <= 25) {
          price1 = 1750;
          price2 = 1250;
          price3 = 750;
        } else if (difference >= 26 && difference <= 30) {
          price1 = 2100;
          price2 = 1500;
          price3 = 900;
        } else if (difference >= 31 && difference <= 35) {
          price1 = 2450;
          price2 = 1750;
          price3 = 1050;
        } else if (difference >= 36 && difference <= 40) {
          price1 = 2800;
          price2 = 2000;
          price3 = 1200;
        } else if (difference >= 41 && difference <= 45) {
          price1 = 3150;
          price2 = 2250;
          price3 = 1350;
        } else if (difference >= 46 && difference <= 50) {
          price1 = 3500;
          price2 = 2500;
          price3 = 1500;
        }

        // Update the train object with price
        trainObjects.price1 = price1;
        trainObjects.price2 = price2;
        trainObjects.price3 = price3;
      }
    });

    updateTrainObjects();
    displayFilteredRows();
  });
});
