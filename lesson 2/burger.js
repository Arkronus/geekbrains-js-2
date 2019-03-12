// *Некая сеть фастфуда предлагает несколько видов гамбургеров:

// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий). 
// ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
// и полить майонезом (+20 рублей, +5 калорий). 
// ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.


burgersData = {
    burgersize: {
        'small': {
            'price': 50,
            'cals': 20
        },
        'big': {
            'price': 100,
            'cals': 40
        },
    },
    ingredients: {
        'cheese': {
            'price': 10,
            'cals': 20
        },
        'salad': {
            'price': 20,
            'cals': 5
        },
        'potato': {
            'price': 15,
            'cals': 10
        },
    },
    seasonings: {
        'seasoning': {
            'price': 15,
            'cals': 0
        },
        'mayo': {
            'price': 20,
            'cals': 5
        }
    }
};

class DataStorage {
    constructor(data = {}) {
        this.data = data;
    }

    getBurgerSizeInfo(size) {
        return this.data.burgersize[size];
    }

    getIngredientsInfo(ingredient) {
        return this.data.ingredients[ingredient];
    }

    getSeasoningInfo(seasoning) {
        return this.data.seasonings[seasoning];
    }
}

class Burger {
    constructor(size, ingredients = [], seasonings = []) {
        this.size = size;
        this.ingredients = ingredients;
        this.seasonings = seasonings;
    }

    calculatePrice(){

    }

    calculateCalories(){

    }


}

data = DataStorage(burgersData);