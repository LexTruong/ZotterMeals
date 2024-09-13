import { StyleSheet, View, SectionList, Text, SectionListData, SectionBase } from 'react-native'
import MealCard, { MealCardInfo } from './MealCard'
import { useEffect, useState } from 'react'


export default function MealList({location} : {location: string}) {
    const [sections, setSections] = useState<SectionListData<object>[]>([])
    

    useEffect(() => {
        // get current data from anteatery or brandywine
        // fetch(`http://zotmeal-backend.vercel.app/api?location=${location}`)
        // .then(response => response.json())
        // .then(data => {

            const data = {
                "restaurant": "Sample",
                "refreshTime": 1639808216,
                "schedule": {
                    "breakfast": {
                        "start": 700,
                        "end": 1100
                    },
                    "lunch": {
                        "start": 1100,
                        "end": 1630
                    },
                    "dinner": {
                        "start": 1630,
                        "end": 2000
                    }
                },
                "currentMeal": "lunch",
                "price": {
                    "breakfast": 9.75,
                    "lunch": 13.75,
                    "brunch": 13.75,
                    "dinner": 14.95
                },
                "status": "OK",
                "all": [
                    {
                        "station": "The Farm Stand / Salad Bar",
                        "menu": [
                            {
                                "category": "Condiments",
                                "items": [
                                    {
                                        "name": "Balsamic Vinaigrette",
                                        "description": "Tangy balsamic vinaigrette dressing",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "2",
                                            "servingUnit": "tablespoons",
                                            "calories": "60",
                                            "caloriesFromFat": "45",
                                            "totalFat": "5",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "200",
                                            "totalCarbohydrates": "4",
                                            "dietaryFiber": "0",
                                            "sugars": "4",
                                            "protein": "0",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Creamy Caesar Dressing",
                                        "description": "Creamy Caesar dressing",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": false,
                                            "servingSize": "2",
                                            "servingUnit": "tablespoons",
                                            "calories": "140",
                                            "caloriesFromFat": "140",
                                            "totalFat": "15",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "260",
                                            "totalCarbohydrates": "1",
                                            "dietaryFiber": "0",
                                            "sugars": "less than 1",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "2.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Lite Italian Dressing",
                                        "description": "Lite Italian salad dressing",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "2",
                                            "servingUnit": "tablespoons",
                                            "calories": "40",
                                            "caloriesFromFat": "30",
                                            "totalFat": "3.5",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "260",
                                            "totalCarbohydrates": "2",
                                            "dietaryFiber": "0",
                                            "sugars": "2",
                                            "protein": "0",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Ranch Dressing",
                                        "description": "Homestyle creamy ranch salad dressing",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": true,
                                            "servingSize": "2",
                                            "servingUnit": "tablespoons",
                                            "calories": "100",
                                            "caloriesFromFat": "90",
                                            "totalFat": "10",
                                            "transFat": "0",
                                            "cholesterol": "10",
                                            "sodium": "260",
                                            "totalCarbohydrates": "1",
                                            "dietaryFiber": "0",
                                            "sugars": "less than 1",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "1.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            },
                            {
                                "category": "Grains",
                                "items": [
                                    {
                                        "name": "Croutons",
                                        "description": "Homestyle seasoned croutons",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": false,
                                            "servingSize": "1",
                                            "servingUnit": "/4 cup",
                                            "calories": "60",
                                            "caloriesFromFat": "20",
                                            "totalFat": "2",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "170",
                                            "totalCarbohydrates": "9",
                                            "dietaryFiber": "0",
                                            "sugars": "less than 1",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            },
                            {
                                "category": "Protein",
                                "items": [
                                    {
                                        "name": "Shredded Cheddar Cheese",
                                        "description": "Shredded Cheddar cheese",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/4 cup",
                                            "calories": "110",
                                            "caloriesFromFat": "80",
                                            "totalFat": "9",
                                            "transFat": "0",
                                            "cholesterol": "30",
                                            "sodium": "180",
                                            "totalCarbohydrates": "0",
                                            "dietaryFiber": "0",
                                            "sugars": "0",
                                            "protein": "7",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "6",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Sunflower Seeds",
                                        "description": "Sunflower seeds",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "2",
                                            "servingUnit": "tablespoons",
                                            "calories": "100",
                                            "caloriesFromFat": "80",
                                            "totalFat": "9",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "0",
                                            "totalCarbohydrates": "4",
                                            "dietaryFiber": "2",
                                            "sugars": "0",
                                            "protein": "3",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "1",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            },
                            {
                                "category": "Salads",
                                "items": [
                                    {
                                        "name": "Black Olives",
                                        "description": "Sliced pitted black olives",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/4 cup",
                                            "calories": "60",
                                            "caloriesFromFat": "50",
                                            "totalFat": "5",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "250",
                                            "totalCarbohydrates": "2",
                                            "dietaryFiber": "1",
                                            "sugars": "0",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Broccoli Florets",
                                        "description": "Fresh broccoli florets",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/2 cup",
                                            "calories": "15",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "15",
                                            "totalCarbohydrates": "3",
                                            "dietaryFiber": "1",
                                            "sugars": "less than 1",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Cantaloupe",
                                        "description": "Cubed fresh cantaloupe",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/2 cup",
                                            "calories": "25",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "10",
                                            "totalCarbohydrates": "6",
                                            "dietaryFiber": "less than 1",
                                            "sugars": "6",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Cucumbers",
                                        "description": "Sliced fresh cucumbers",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/2 cup",
                                            "calories": "10",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "0",
                                            "totalCarbohydrates": "3",
                                            "dietaryFiber": "0",
                                            "sugars": "1",
                                            "protein": "0",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Garbanzo Beans",
                                        "description": "Garbanzo beans",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/4 cup",
                                            "calories": "60",
                                            "caloriesFromFat": "10",
                                            "totalFat": "1",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "45",
                                            "totalCarbohydrates": "8",
                                            "dietaryFiber": "3",
                                            "sugars": "0",
                                            "protein": "3",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Grape Tomatoes",
                                        "description": "Fresh grape tomatoes",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/2 cup",
                                            "calories": "15",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "0",
                                            "totalCarbohydrates": "3",
                                            "dietaryFiber": "1",
                                            "sugars": "2",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Honeydew Melon",
                                        "description": "Cubed honeydew melon",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/2 cup",
                                            "calories": "25",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "15",
                                            "totalCarbohydrates": "6",
                                            "dietaryFiber": "less than 1",
                                            "sugars": "6",
                                            "protein": "0",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Pineapple Slices",
                                        "description": "Sliced fresh pineapple",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": null,
                                            "servingUnit": null,
                                            "calories": null,
                                            "caloriesFromFat": null,
                                            "totalFat": null,
                                            "transFat": null,
                                            "cholesterol": null,
                                            "sodium": null,
                                            "totalCarbohydrates": null,
                                            "dietaryFiber": null,
                                            "sugars": null,
                                            "protein": null,
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": null,
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Red Grapes",
                                        "description": "Fresh red seedless grapes",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/4 cup",
                                            "calories": "30",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "0",
                                            "totalCarbohydrates": "8",
                                            "dietaryFiber": "0",
                                            "sugars": "7",
                                            "protein": "0",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Romaine Lettuce",
                                        "description": "Chopped romaine lettuce",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "cup",
                                            "calories": "5",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "0",
                                            "totalCarbohydrates": "1",
                                            "dietaryFiber": "less than 1",
                                            "sugars": "less than 1",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Shredded Carrots",
                                        "description": "Shredded fresh carrots",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/4 cup",
                                            "calories": "15",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "25",
                                            "totalCarbohydrates": "3",
                                            "dietaryFiber": "less than 1",
                                            "sugars": "2",
                                            "protein": "0",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Sliced Mixed Bell Peppers",
                                        "description": "Sliced green and red bell peppers",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/2 cup",
                                            "calories": "15",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "0",
                                            "totalCarbohydrates": "3",
                                            "dietaryFiber": "1",
                                            "sugars": "2",
                                            "protein": "1",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Sliced Red Onions",
                                        "description": "Thinly sliced red onions",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/4 cup",
                                            "calories": "10",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "0",
                                            "totalCarbohydrates": "2",
                                            "dietaryFiber": "0",
                                            "sugars": "less than 1",
                                            "protein": "0",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Spring Salad Mix",
                                        "description": "Fresh spring lettuce mix",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "cup",
                                            "calories": "0",
                                            "caloriesFromFat": "0",
                                            "totalFat": "0",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "10",
                                            "totalCarbohydrates": "less than 1",
                                            "dietaryFiber": "0",
                                            "sugars": "0",
                                            "protein": "0",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "station": "Grubb / Mainline",
                        "menu": [
                            {
                                "category": "Entrées",
                                "items": [
                                    {
                                        "name": "Salisbury Steak & Mushroom Sauce",
                                        "description": "Seasoned ground beef patty served with a savory mushroom-herb gravy",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": false,
                                            "servingSize": "1",
                                            "servingUnit": "serving",
                                            "calories": "300",
                                            "caloriesFromFat": "150",
                                            "totalFat": "17",
                                            "transFat": "0.5",
                                            "cholesterol": "65",
                                            "sodium": "400",
                                            "totalCarbohydrates": "14",
                                            "dietaryFiber": "1",
                                            "sugars": "2",
                                            "protein": "22",
                                            "vitaminA": null,
                                            "vitaminC": "3.09",
                                            "calcium": "64.64",
                                            "iron": "2.94",
                                            "saturatedFat": "6",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Vegetable Lasagna",
                                        "description": "Lasagna layered with spinach, broccoli, shoestring carrots, a 5 cheese blend and golden breadcrumbs",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "serving",
                                            "calories": "280",
                                            "caloriesFromFat": "100",
                                            "totalFat": "11",
                                            "transFat": "0",
                                            "cholesterol": "20",
                                            "sodium": "940",
                                            "totalCarbohydrates": "39",
                                            "dietaryFiber": "3",
                                            "sugars": "7",
                                            "protein": "14",
                                            "vitaminA": null,
                                            "vitaminC": "0.00",
                                            "calcium": "291.34",
                                            "iron": "1.74",
                                            "saturatedFat": "4.5",
                                            "isEatWell": false,
                                            "isPlantForward": true,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            },
                            {
                                "category": "Sides",
                                "items": [
                                    {
                                        "name": "Cauliflower Mash",
                                        "description": "Smooth and creamy spiced cauliflower puree with soy milk",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/2 cup",
                                            "calories": "90",
                                            "caloriesFromFat": "70",
                                            "totalFat": "8",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "160",
                                            "totalCarbohydrates": "5",
                                            "dietaryFiber": "3",
                                            "sugars": "3",
                                            "protein": "3",
                                            "vitaminA": null,
                                            "vitaminC": "52.32",
                                            "calcium": "45.08",
                                            "iron": "0.47",
                                            "saturatedFat": "1",
                                            "isEatWell": true,
                                            "isPlantForward": true,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "UCI rice pilaf",
                                        "description": "",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": false,
                                            "servingSize": "14",
                                            "servingUnit": "fl oz",
                                            "calories": "390",
                                            "caloriesFromFat": "45",
                                            "totalFat": "5",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "520",
                                            "totalCarbohydrates": "78",
                                            "dietaryFiber": "2",
                                            "sugars": "3",
                                            "protein": "9",
                                            "vitaminA": null,
                                            "vitaminC": "21.44",
                                            "calcium": "",
                                            "iron": "4.58",
                                            "saturatedFat": "1",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "station": "The Farm Stand / Deli",
                        "menu": [
                            {
                                "category": "Hot Sandwiches ",
                                "items": [
                                    {
                                        "name": "Grilled Vegetable Panini",
                                        "description": "Panini-style grilled veggies, spinach, mushrooms and American cheese",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "each",
                                            "calories": "400",
                                            "caloriesFromFat": "110",
                                            "totalFat": "19",
                                            "transFat": "0",
                                            "cholesterol": "25",
                                            "sodium": "860",
                                            "totalCarbohydrates": "49",
                                            "dietaryFiber": "2",
                                            "sugars": "9",
                                            "protein": "10",
                                            "vitaminA": null,
                                            "vitaminC": "29.84",
                                            "calcium": "269.67",
                                            "iron": "0.95",
                                            "saturatedFat": "6",
                                            "isEatWell": true,
                                            "isPlantForward": true,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Rosemary Chicken Panini",
                                        "description": "Grilled chicken, arugula, provolone cheese, balsamic glaze & sun-dried tomato mayonnaise on Italian bread",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": false,
                                            "servingSize": "1",
                                            "servingUnit": "/2 sandwich",
                                            "calories": "330",
                                            "caloriesFromFat": "150",
                                            "totalFat": "17",
                                            "transFat": "0",
                                            "cholesterol": "40",
                                            "sodium": "470",
                                            "totalCarbohydrates": "25",
                                            "dietaryFiber": "1",
                                            "sugars": "3",
                                            "protein": "18",
                                            "vitaminA": null,
                                            "vitaminC": "6.59",
                                            "calcium": "135.12",
                                            "iron": "2.45",
                                            "saturatedFat": "5",
                                            "isEatWell": true,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "station": "Hearth/Pizza",
                        "menu": [
                            {
                                "category": "Pizza",
                                "items": [
                                    {
                                        "name": "Classic Cheese Pizza",
                                        "description": "Mozzarella cheese and pizza sauce on a golden brown crust",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/8 cut",
                                            "calories": "250",
                                            "caloriesFromFat": "60",
                                            "totalFat": "7",
                                            "transFat": "0",
                                            "cholesterol": "15",
                                            "sodium": "580",
                                            "totalCarbohydrates": "33",
                                            "dietaryFiber": "2",
                                            "sugars": "3",
                                            "protein": "13",
                                            "vitaminA": null,
                                            "vitaminC": "1.09",
                                            "calcium": "219.36",
                                            "iron": "2.04",
                                            "saturatedFat": "3.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Not Your Regular Cheese Pizza",
                                        "description": "Vegan shredded mozzarella, almond-based parmesan, pizza sauce",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/8 cut",
                                            "calories": "300",
                                            "caloriesFromFat": "110",
                                            "totalFat": "12",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "670",
                                            "totalCarbohydrates": "40",
                                            "dietaryFiber": "3",
                                            "sugars": "2",
                                            "protein": "8",
                                            "vitaminA": null,
                                            "vitaminC": "1.09",
                                            "calcium": "26.04",
                                            "iron": "2.38",
                                            "saturatedFat": "3",
                                            "isEatWell": false,
                                            "isPlantForward": true,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "Pepperoni Pizza",
                                        "description": "Pepperoni, mozzarella and pizza sauce on a golden brown crust",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": false,
                                            "servingSize": "1",
                                            "servingUnit": "/8 cut",
                                            "calories": "280",
                                            "caloriesFromFat": "90",
                                            "totalFat": "10",
                                            "transFat": "0",
                                            "cholesterol": "20",
                                            "sodium": "680",
                                            "totalCarbohydrates": "33",
                                            "dietaryFiber": "2",
                                            "sugars": "3",
                                            "protein": "14",
                                            "vitaminA": null,
                                            "vitaminC": "1.11",
                                            "calcium": "220.67",
                                            "iron": "2.13",
                                            "saturatedFat": "4.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "station": "Vegan",
                        "menu": [
                            {
                                "category": "Protein",
                                "items": [
                                    {
                                        "name": "Vegan Chorizo",
                                        "description": "Plant-based sausage seasoned with garlic, ancho pepper, smoked paprika, red wine vinegar, oregano and allspice",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "1",
                                            "servingUnit": "/4 cup",
                                            "calories": "120",
                                            "caloriesFromFat": "50",
                                            "totalFat": "5",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "360",
                                            "totalCarbohydrates": "7",
                                            "dietaryFiber": "3",
                                            "sugars": "2",
                                            "protein": "11",
                                            "vitaminA": null,
                                            "vitaminC": null,
                                            "calcium": null,
                                            "iron": null,
                                            "saturatedFat": "0.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "station": "Soups",
                        "menu": [
                            {
                                "category": "Soups",
                                "items": [
                                    {
                                        "name": "Curried Cauliflower Soup",
                                        "description": "Curry-spiced velvety smooth cauliflower soup",
                                        "nutrition": {
                                            "isVegan": true,
                                            "isVegetarian": true,
                                            "servingSize": "6",
                                            "servingUnit": "fl oz",
                                            "calories": "110",
                                            "caloriesFromFat": "70",
                                            "totalFat": "7",
                                            "transFat": "0",
                                            "cholesterol": "0",
                                            "sodium": "290",
                                            "totalCarbohydrates": "10",
                                            "dietaryFiber": "2",
                                            "sugars": "2",
                                            "protein": "2",
                                            "vitaminA": null,
                                            "vitaminC": "28.62",
                                            "calcium": "19.69",
                                            "iron": "0.60",
                                            "saturatedFat": "1",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    },
                                    {
                                        "name": "New England Clam Chowder",
                                        "description": "A thick creamy soup of clams, potatoes, bacon, onions, celery and herbs",
                                        "nutrition": {
                                            "isVegan": false,
                                            "isVegetarian": false,
                                            "servingSize": "6",
                                            "servingUnit": "fl oz",
                                            "calories": "210",
                                            "caloriesFromFat": "60",
                                            "totalFat": "9",
                                            "transFat": "0",
                                            "cholesterol": "35",
                                            "sodium": "640",
                                            "totalCarbohydrates": "18",
                                            "dietaryFiber": "less than 1",
                                            "sugars": "4",
                                            "protein": "16",
                                            "vitaminA": null,
                                            "vitaminC": "3.62",
                                            "calcium": "106.29",
                                            "iron": "1.85",
                                            "saturatedFat": "3.5",
                                            "isEatWell": false,
                                            "isPlantForward": false,
                                            "isWholeGrains": false
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }

            let newSections: SectionListData<any, object>[] = []

            for(let i=0; i < data.all.length; i++) {
                let curStation= data.all[i]

                let newStation: {title: any, data: MealCardInfo[]} = {
                    title: curStation.station,
                    data: []
                }
                
                for(let k=0; k < curStation.menu.length; k++) {
                    let category = curStation.menu[k]

                    for(let j=0; j < category.items.length; j++) {
                        let item = category.items[j]
                        newStation.data.push(item)
                        console.log(item)
                    }
                }
                
                newSections.push(newStation)
                // console.log(newStation)
            }
            
            setSections(newSections)
            console.log(sections)
        // })
    }, [])

    return (
        <View style={styles.container}>
            {sections ?
            <SectionList
                sections={sections}
                renderItem={({item}) => <MealCard info={item} />}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
            />
            :
            <Text>No Meals Currently</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    sectionHeader: {
        paddingLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingVertical: 5,
        shadowOpacity: .3,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5
        }
    }
})