
  function updateDistricts() {
    const state = document.getElementById("state").value;
    const districtSelect = document.getElementById("district");

    // Clear previous district options
    districtSelect.innerHTML = '<option value="" disabled selected>Select your district</option>';

    let districts = [];

    if (state === "bihar") {
      districts = [
        "Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Saran", "Chhapra", "Begusarai", "Munger"
      ];
    } if (state === "uttar-pradesh") {
      districts = [
        "Agra", "Lucknow", "Varanasi", "Kanpur", "Allahabad", "Gorakhpur", "Mathura", "Meerut", "Aligarh", "Bareilly"
      ];
    }
    else if (state === "rajasthan") {
        districts = [
          "Ajmer", "Alwar", "Barmer", "Bharatpur", "Sirohi", "Udaipur"
        ];
      }

    // Add districts to the dropdown
    districts.forEach(district => {
      const option = document.createElement("option");
      option.value = district.toLowerCase().replace(/\s+/g, '-');
      option.textContent = district;
      districtSelect.appendChild(option);
    });
}

// Add hobbies 
function addHobbies() {
  const input = document.getElementById('hobbiesInput');
  const taskText = input.value.trim();

  if (taskText !== "") {
      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
          li.remove();
      };

      li.appendChild(deleteButton);
      document.getElementById('hobbiesList').appendChild(li);

      input.value = ""; // Clear the input field
  }
}