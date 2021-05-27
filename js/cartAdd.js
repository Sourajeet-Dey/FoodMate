// Add to Cart Functioning (Food Item)

// DOM Elements

let foodCart = document.querySelectorAll(".food-cart");
let cartBadge = document.querySelector("span.badge-count");

// All Food Items

let foods = [
    {
        name: "Egg Roll",
        tag: "egg_roll",
        price: 30,
        inCart: 0,
    },
    {
        name: "Egg Chowmin",
        tag: "egg_chowmin",
        price: 60,
        inCart: 0,
    },
    {
        name: "Chilli Chicken",
        tag: "chilli_chicken",
        price: 140,
        inCart: 0,
    },
    {
        name: "Chicken Manchurian",
        tag: "chicken_manchurian",
        price: 150,
        inCart: 0,
    },
    {
        name: "Butter Naan",
        tag: "butter_naan",
        price: 30,
        inCart: 0,
    },
    {
        name: "Chicken Momo",
        tag: "chicken_momo",
        price: 100,
        inCart: 0,
    },
    {
        name: "Cheese Burger",
        tag: "cheese_burger",
        price: 80,
        inCart: 0,
    },
    {
        name: "Veg Fingers",
        tag: "veg_fingers",
        price: 40,
        inCart: 0,
    },
    {
        name: "Spring Rolls",
        tag: "spring_rolls",
        price: 20,
        inCart: 0,
    },
    {
        name: "Veg Pizza",
        tag: "veg_pizza",
        price: 100,
        inCart: 0,
    },
];

// Function: Add to Cart on Click

for (let i = 0; i < foodCart.length; i++) {
    foodCart[i].addEventListener("click", () => {
        cartCounter(foods[i]);
        totalCost(foods[i]);
    });
}

// Cart Counter Update

function cartCounter(food, action) {
    let counter = localStorage.getItem("cartCounter");
    counter = parseInt(counter);

    let foodItems = localStorage.getItem("foodsInCart");
    foodItems = JSON.parse(foodItems);

    if (action) {
        localStorage.setItem("cartCounter", counter - 1);
        cartBadge.textContent = counter - 1;
    } else if (counter) {
        localStorage.setItem("cartCounter", counter + 1);
        cartBadge.textContent = counter + 1;
    } else {
        localStorage.setItem("cartCounter", 1);
        cartBadge.textContent = 1;
    }

    setFoodItem(food);
}

function loadCartNumber() {
    let counter = localStorage.getItem("cartCounter");
    if (counter) {
        cartBadge.textContent = counter;
    }
}

loadCartNumber();

// Food Item Identification & Add to Local Storage (Cart)

function setFoodItem(food) {
    let cartItems = localStorage.getItem("foodsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[food.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [food.tag]: food,
            };
        }
        cartItems[food.tag].inCart += 1;
    } else {
        food.inCart = 1;
        cartItems = {
            [food.tag]: food,
        };
    }

    localStorage.setItem("foodsInCart", JSON.stringify(cartItems));
}

// Total Cost

function totalCost(food, action) {
    let cartCost = localStorage.getItem("totalCost");

    if (action) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost - food.price);
    } else if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + food.price);
    } else {
        localStorage.setItem("totalCost", food.price);
    }
}

// Display Food Items in Cart

function cartContent() {
    let cartItems = localStorage.getItem("foodsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost");

    let foodContent = document.querySelector("#foodContent");
    let emptyCart = document.querySelector(".cartEmpty");

    if (cartItems && foodContent) {
        emptyCart.style.display = "none";

        foodContent.innerHTML = "";
        Object.values(cartItems).map((item) => {
            foodContent.innerHTML += `
                <div class="cart_item noselect">
                    <div class="row">
                        <div class="col-lg-4 item_name">
                            <i class="bi bi-x-diamond-fill"></i>
                            <img src="./img/food.png" />
                            <h4>${item.name}</h4>
                        </div>

                        <div class="col-lg-7 item_details">
                            <h6>
                                <p>Rs. ${item.price}.00</p>
                                <span>Price</span>
                            </h6>
                            <div class="item_quantity">
                                <i class="fa fa-minus"></i>
                                <span>${item.inCart}</span>
                                <i class="fa fa-plus"></i>
                            </div>
                            <h6>
                                <p>Rs. ${item.price * item.inCart}.00</p>
                                <span>Total</span>
                            </h6>
                        </div>

                        <div class="col-lg-1 item_remove">
                            <img src="./img/cart_remove.svg" />
                        </div>
                    </div>
                </div>
            `;
        });

        if (cartCost == 0) {
            foodContent.innerHTML = "";
            emptyCart.style.display = "block";
        } else {
            foodContent.innerHTML += `
                <div class="cart_checkout noselect">
                    <span class="cart_amount">
                        <p>Rs. ${cartCost}.00</p>
                        <i>Total</i>
                    </span>
                    <a href="./checkout.html" class="btn btn-payment">Payments</a>
                </div>
            `;
        }
    } else {
        emptyCart.style.display = "block";
    }

    removeItem();
    itemQuantity();
}

cartContent();

// Remove Button: Remove Food from Cart

function removeItem() {
    let removeButton = document.querySelectorAll(".item_remove");
    let foodNumbers = localStorage.getItem("cartCounter");
    let foodItems = localStorage.getItem("foodsInCart");
    foodItems = JSON.parse(foodItems);
    let cartCost = localStorage.getItem("totalCost");
    let foodName;

    for (let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener("click", () => {
            foodName = removeButton[
                i
            ].parentElement.firstElementChild.textContent
                .trim()
                .toLowerCase()
                .replace(/ /g, "_");

            localStorage.setItem(
                "cartCounter",
                foodNumbers - foodItems[foodName].inCart
            );

            localStorage.setItem(
                "totalCost",
                cartCost -
                    foodItems[foodName].price * foodItems[foodName].inCart
            );

            delete foodItems[foodName];
            localStorage.setItem("foodsInCart", JSON.stringify(foodItems));

            cartContent();
            loadCartNumber();
        });
    }
}

// Cart Food Item Quantity (Increase/Decrease)

function itemQuantity() {
    let increase = document.querySelectorAll("i.fa-plus");
    let decrease = document.querySelectorAll("i.fa-minus");
    let currentQuantity = 0;
    let currentProduct = "";

    let foodItems = localStorage.getItem("foodsInCart");
    foodItems = JSON.parse(foodItems);

    for (let i = 0; i < increase.length; i++) {
        increase[i].addEventListener("click", () => {
            currentQuantity =
                increase[i].parentElement.querySelector("span").textContent;

            currentProduct = increase[
                i
            ].parentElement.parentElement.previousElementSibling.textContent
                .trim()
                .toLowerCase()
                .replace(/ /g, "_");

            foodItems[currentProduct].inCart += 1;
            cartCounter(foodItems[currentProduct]);
            totalCost(foodItems[currentProduct]);
            localStorage.setItem("foodsInCart", JSON.stringify(foodItems));
            cartContent();
        });
    }

    for (let i = 0; i < decrease.length; i++) {
        decrease[i].addEventListener("click", () => {
            currentQuantity =
                decrease[i].parentElement.querySelector("span").textContent;

            currentProduct = decrease[
                i
            ].parentElement.parentElement.previousElementSibling.textContent
                .trim()
                .toLowerCase()
                .replace(/ /g, "_");

            if (foodItems[currentProduct].inCart > 1) {
                foodItems[currentProduct].inCart -= 1;
                cartCounter(foodItems[currentProduct], "decrease");
                totalCost(foodItems[currentProduct], "decrease");
                localStorage.setItem("foodsInCart", JSON.stringify(foodItems));
                cartContent();
            }
        });
    }
}
