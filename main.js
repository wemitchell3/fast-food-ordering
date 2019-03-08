const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getOrders: function() {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "Fried Chicken Sandwich",
    fries: true,
    drinkSize: "Small",
    dessert: "Cookie",
    price: 6.99
}

const burgerComboMeal = {
    sandwichType: "Plain 1/4lbs Burger",
    cheese: false,
    fries: true,
    drinkSize: "Small",
    dessert: "Cookie",
    price: 6.99
}

const cheeseBurgerComboMeal = {
    sandwichType: "1/4lbs Cheese Burger",
    cheese: true,
    fries: true,
    drinkSize: "Small",
    dessert: "Cookie",
    price: 7.49
}

const fishChipsComboMeal = {
    sandwichType: "Fried fish Sandwich",
    fries: true,
    drinkSize: "Small",
    dessert: "Cookie",
    price: 6.99
}



// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)
restaurant.placeOrder(cheeseBurgerComboMeal)
restaurant.placeOrder(fishChipsComboMeal)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
console.table(restaurant.getOrders())
