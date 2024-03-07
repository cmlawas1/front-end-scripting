const validateForm = () => {
  const image = document.getElementById("image").value; //gets food image
  const name = document.getElementById("name").value; //gets food name
  const desc = document.getElementById("desc").value; //gets food desc
  const rank = document.getElementById("rank").value; //gets food rank

  //checks if name is not null or not an empty string
  if(!name || name.trim() == "") {
    alert('Invalid name.');
    return false;
  }

  //checks if rank is not less than 1 or not a decimal value or not null
  if(!rank || rank < 1 || rank % 1 != 0) {
    alert('Invalid rank.');
    return false;
  }

  //checks if desc is not null or not an empty string
  if(!desc || desc.trim() == "") {
    alert('Invalid description.');
    return false;
  }

  //checks if image is not null or not an empty string
  if(!image || image.trim() == "") {
    alert('Invalid link.');
    return false;
  }

  addFood();
}

//deletes food
const deleteFood = () => {
  const buttons = document.querySelectorAll('.delete-button');
  
  buttons.forEach(button => { //for all the buttons
    button.addEventListener('click', () => { //when one button is clicked
      const container = button.closest('.food'); // find parent div container using closest() 
  
      if (container) {
        container.remove(); //remove food div container
        alert('Food deleted.');
      }
    });
  });

}

//adds new food
const addFood = () => {
  const flexFood = document.getElementById("flex-food"); //container of food elements
  //creates new food to add
  const newFood = document.createElement("div");
  newFood.className = "food";

  const newFoodPic = document.getElementById("image").value; //gets food image
  newFoodPic.className = "food-pic";
  
  const newFoodName = document.getElementById("name").value; //gets food name
  newFoodName.className = "food-name";
  
  const newFoodDesc = document.getElementById("desc").value; //gets food description
  newFoodDesc.className = "food-desc";
  
  const newFoodRank = document.getElementById("rank").value; //gets food rank

  //sets up content of the div newFood
  newFood.innerHTML = '<img class = "food-pic" src="'+ newFoodPic +'"/>'+
  '<p class = "food-name">Food name: ' + newFoodName + '</p>'+
  '<p class = "food-description">Description: ' +newFoodDesc+ '</p>'+
  '<button class = "delete-button" onclick="deleteFood()">Delete</button>'

  if(newFoodRank <= document.getElementsByClassName('food').length) {
    flexFood.insertBefore(newFood, flexFood.querySelectorAll('.food')[newFoodRank - 1]); //inserts newfood before its rank to match the index
  } else {
    flexFood.appendChild(newFood); //inserts newfood at the end
  }
  
  alert('Food successfully added');
}