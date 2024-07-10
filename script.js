// Function to handle file upload
function uploadFiles() {
  // Access the file input element
  var input = document.getElementById("file-upload");
  // Access the ul element where files will be listed
  var fileList = document.getElementById("file-list");

  // Loop through each selected file
  for (var i = 0; i < input.files.length; i++) {
    // Create li element for each file
    var li = document.createElement("li");
    li.classList.add("file-item");

    // Display file name
    var fileName = document.createElement("span");
    fileName.textContent = input.files[i].name;

    // Append file name to li
    li.appendChild(fileName);

    // Append li to ul
    fileList.appendChild(li);
  }
}
