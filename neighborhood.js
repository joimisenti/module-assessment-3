let restaurantRec = document.querySelector("#restaurantButton")

let restaurantsArray = ["Witches Brew", "Tom & Lin's Kitchenette", "King Gyros Express", "Macri's Italian Kitchen", "Hacienda Mexican Restaurants", "Dairy Queen", "Wendy's", "Hardee's", "Chipotle", "Rally's", "Noku Sushi"]

const randomRestaurant = () => {
    let rec = restaurantsArray[(Math.random() * restaurantsArray.length) | 0];
    console.log(rec);
    alert(rec);
}

restaurantRec.addEventListener("click", randomRestaurant);
