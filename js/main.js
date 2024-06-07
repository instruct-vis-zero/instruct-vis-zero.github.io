let raw_data = {
 "gpt_0": {
    "goals": [
        {
            "goal": "Making a Cup of Tea 0",
            "steps": [
                {
                    "step": "Filling the Kettle",
                    "object": [
                        [
                            "kettle",
                            "new"
                        ]
                    ],
                    "action": "Filling the electric kettle with water.",
                    "state_of_main_object": " An electric kettle filled with water is ready for boiling."
                },
                {
                    "step": "Boiling Water",
                    "object": [
                        [
                            "kettle",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Turning on the kettle to boil the water.",
                    "state_of_main_object": " The electric kettle contains boiling water."
                },
                {
                    "step": "Steeping the Tea",
                    "object": [
                        [
                            "cup",
                            "new"
                        ]
                    ],
                    "action": "Placing a tea bag in a cup and pouring the boiling water over it.",
                    "state_of_main_object": " The cup now contains a steeping tea bag submerged in boiling water."
                },
                {
                    "step": "Adding Ingredients",
                    "object": [
                        [
                            "cup",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Adding sugar and milk to the cup.",
                    "state_of_main_object": " The cup contains hot tea, sweetened and lightened with added sugar and milk."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.5,
                    0.0
                ],
                [
                    0.0,
                    0.5,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Planting a Houseplant 1",
            "steps": [
                {
                    "step": "Filling the Pot",
                    "object": [
                        [
                            "pot",
                            "new"
                        ]
                    ],
                    "action": "Adding potting soil to an empty pot.",
                    "state_of_main_object": " An empty pot is now filled with potting soil."
                },
                {
                    "step": "Planting the Seedling",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Placing a small houseplant or seedling into soil",
                    "state_of_main_object": " The pot now holds a houseplant or seedling nestled in the potting soil."
                },
                {
                    "step": "Watering the Plant",
                    "object": [
                        [
                            "pot",
                            "similar",
                            2
                        ]
                    ],
                    "action": "using a can to Water the around the houseplant",
                    "state_of_main_object": " The houseplant is thoroughly hydrated, sitting in damp potting soil inside the pot."
                },
                {
                    "step": "Positioning the Pot",
                    "object": [
                        [
                            "pot",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Placing the pot in a sunny spot.",
                    "state_of_main_object": " A potted houseplant is now soaking up sunlight in a sunny location."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Packing a Lunchbox 2",
            "steps": [
                {
                    "step": "Gathering Ingredients",
                    "object": [
                        [
                            "lunchbox",
                            "new"
                        ]
                    ],
                    "action": "Placing a sandwich, a fruit, and a snack into the lunchbox.",
                    "state_of_main_object": " The lunchbox is filled with a sandwich, a piece of fruit, and a snack."
                },
                {
                    "step": "Adding a Drink",
                    "object": [
                        [
                            "lunchbox",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Placing a small juice box or water bottle in the lunchbox.",
                    "state_of_main_object": " The lunchbox now contains a sandwich, fruit, a snack, and a small juice box or water bottle."
                },
                {
                    "step": "Closing the Lunchbox",
                    "object": [
                        [
                            "lunchbox",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Closing the lid of the lunchbox.",
                    "state_of_main_object": " The lunchbox is now closed, packed with a sandwich, a fruit, a snack, and a beverage inside."
                },
                {
                    "step": "Packing the Lunchbox in a Bag",
                    "object": [
                        [
                            "lunchbox",
                            "similar",
                            3
                        ],
                        [
                            "bag",
                            "new"
                        ]
                    ],
                    "action": "Placing the lunchbox into a backpack or bag.",
                    "state_of_main_object": " The lunchbox is packed inside a backpack or bag."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making Instant Oatmeal 3",
            "steps": [
                {
                    "step": "Pouring Oats into a Bowl",
                    "object": [
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "pouring the dry oatmeal into the bowl.",
                    "state_of_main_object": " A bowl is filled with dry oatmeal."
                },
                {
                    "step": "Adding Water to the Oatmeal",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Pouring hot water from the measuring cup into the oatmeal.",
                    "state_of_main_object": " The bowl now contains oatmeal mixed with hot water."
                },
                {
                    "step": "Stirring the Oatmeal",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Using the spoon to stir the oatmeal.",
                    "state_of_main_object": " A bowl now contains well-stirred oatmeal, ready to serve."
                },
                {
                    "step": "Adding Toppings to the Oatmeal",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Using the spoon to sprinkle toppings onto the oatmeal.",
                    "state_of_main_object": " The oatmeal in the bowl is now prepared and topped with desired toppings."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Preparing a Basic Omelette 4",
            "steps": [
                {
                    "step": "Cracking Eggs into a Bowl",
                    "object": [
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Using hands to crack two eggs and pour their contents into the bowl.",
                    "state_of_main_object": " A bowl contains the cracked contents of two eggs."
                },
                {
                    "step": "Whisking the Eggs",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Using a whisk to beat the eggs",
                    "state_of_main_object": " The bowl now contains two beaten eggs."
                },
                {
                    "step": "Pouring Eggs into a Hot Pan",
                    "object": [
                        [
                            "pan",
                            "new"
                        ]
                    ],
                    "action": "Pouring the beaten eggs from the bowl into a heated non-stick frying pan.",
                    "state_of_main_object": " The non-stick frying pan on the stove now contains the beaten eggs, beginning to cook."
                },
                {
                    "step": "Folding the Omelette",
                    "object": [
                        [
                            "pan",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Using a spatula to gently fold half of the omelette over itself.",
                    "state_of_main_object": " A folded, semi-cooked omelette is present in the non-stick frying pan."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.5,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.5,
                    0.0
                ],
                [
                    0.5,
                    0.5,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Toasting Bagels with Cream Cheese 5",
            "steps": [
                {
                    "step": "Slicing the Bagel",
                    "object": [
                        [
                            "bagel",
                            "new"
                        ]
                    ],
                    "action": "Using a bread knife to slice the bagel in half horizontally.",
                    "state_of_main_object": " A bagel, sliced in half horizontally, lies ready on the cutting board."
                },
                {
                    "step": "Toasting the Bagel",
                    "object": [
                        [
                            "bagel",
                            "similar shape",
                            1
                        ]
                    ],
                    "action": "Placing both halves of the bagel into a toaster.",
                    "state_of_main_object": " Two bagel halves are in the toaster, ready to be toasted."
                },
                {
                    "step": "Spreading Cream Cheese",
                    "object": [
                        [
                            "bagel",
                            "similar shape",
                            2
                        ]
                    ],
                    "action": "Using a knife to spread cream cheese evenly on the toasted bagel halves.",
                    "state_of_main_object": " The halved bagels are evenly covered with cream cheese, now ready to serve."
                },
                {
                    "step": "Serving the Bagel",
                    "object": [
                        [
                            "bagel",
                            "similar shape",
                            3
                        ],
                        [
                            "plate",
                            "new"
                        ]
                    ],
                    "action": "Placing the cream cheese-covered bagel halves onto a serving plate.",
                    "state_of_main_object": " A serving plate holds two halves of a toasted bagel, each generously covered with cream cheese."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Whipping Instant Coffee (Dalgona) 6",
            "steps": [
                {
                    "step": "Mixing Coffee, Sugar, and Water",
                    "object": [
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Combining instant coffee, sugar, and hot water in a bowl.",
                    "state_of_main_object": " In a bowl, there is a mixture of instant coffee, sugar, and hot water."
                },
                {
                    "step": "Whipping the Mixture",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Using a whisk or to whip the mixture until it becomes thick and creamy.",
                    "state_of_main_object": " A bowl is filled with a thick and creamy mixture of instant coffee, sugar, and hot water."
                },
                {
                    "step": "Preparing the Glass with Milk",
                    "object": [
                        [
                            "glass",
                            "new"
                        ]
                    ],
                    "action": "Filling a glass three-quarters full with cold or hot milk.",
                    "state_of_main_object": " A glass is filled three-quarters with either cold or hot milk."
                },
                {
                    "step": "Topping with Whipped Coffee",
                    "object": [
                        [
                            "glass",
                            "similar",
                            3
                        ],
                        [
                            "bowl",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Scooping the whipped coffee on top of the milk in the glass.",
                    "state_of_main_object": " A glass filled three-quarters with milk, topped with thick, creamy whipped coffee."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.5
                ],
                [
                    0.9,
                    1.0,
                    0.0,
                    0.5
                ],
                [
                    0.0,
                    0.0,
                    1.0,
                    0.9
                ],
                [
                    0.5,
                    0.5,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Frying an Egg 7",
            "steps": [
                {
                    "step": "Heating the Pan",
                    "object": [
                        [
                            "pan",
                            "new"
                        ]
                    ],
                    "action": "Placing a frying pan on the stove and heating it.",
                    "state_of_main_object": " The scene showcases a heated frying pan sitting atop a stove."
                },
                {
                    "step": "Cracking the Egg",
                    "object": [
                        [
                            "pan",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Cracking an egg directly into the heated pan.",
                    "state_of_main_object": " A heated frying pan on the stove with a raw egg in it."
                },
                {
                    "step": "Cooking the Egg",
                    "object": [
                        [
                            "pan",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Allowing the egg to cook until the edges are crispy and the yolk is set to desired firmness.",
                    "state_of_main_object": " The heated pan on the stove contains a fully cooked egg with crispy edges and a yolk set to the desired firmness."
                },
                {
                    "step": "Serving the Egg",
                    "object": [
                        [
                            "pan",
                            "similar",
                            3
                        ],
                        [
                            "plate",
                            "new"
                        ]
                    ],
                    "action": "Using a spatula to transfer the fried egg from the pan to a plate.",
                    "state_of_main_object": " A plate now holds a freshly fried egg, removed from the frying pan."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Slicing Fresh Fruit 8",
            "steps": [
                {
                    "step": "Washing the Fruit",
                    "object": [
                        [
                            "fruit",
                            "new"
                        ]
                    ],
                    "action": "Rinsing various fruits like apples, pears, and bananas under cold water.",
                    "state_of_main_object": " Clean apples, pears, and bananas lay ready for slicing."
                },
                {
                    "step": "Cutting the Fruit",
                    "object": [
                        [
                            "fruit",
                            "similar",
                            1
                        ],
                        [
                            "cutting board",
                            "new"
                        ]
                    ],
                    "action": "Using a sharp knife to slice the fruits on a cutting board.",
                    "state_of_main_object": " There are slices of fresh apples, pears, and bananas neatly arranged on a cutting board."
                },
                {
                    "step": "Arranging the Slices",
                    "object": [
                        [
                            "fruit",
                            "similar",
                            2
                        ],
                        [
                            "plate",
                            "new"
                        ]
                    ],
                    "action": "Arranging the sliced fruits neatly on a serving plate.",
                    "state_of_main_object": " A serving plate is neatly arranged with sliced apples, pears, and bananas."
                },
                {
                    "step": "Serving",
                    "object": [
                        [
                            "plate",
                            "similar",
                            3
                        ]
                    ],
                    "action": "people enjoy the plate of freshly sliced fruits.",
                    "state_of_main_object": " A serving plate full of neatly arranged freshly sliced fruits is being enjoyed by people."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.5,
                    0.1,
                    0.0
                ],
                [
                    0.5,
                    1.0,
                    0.5,
                    0.8
                ],
                [
                    0.1,
                    0.5,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Microwaving Popcorn 9",
            "steps": [
                {
                    "step": "Placing Popcorn in Microwave",
                    "object": [
                        [
                            "microwave bag of popcorn",
                            "new"
                        ]
                    ],
                    "action": "Placing an unopened microwave-safe bag of popcorn into the microwave.",
                    "state_of_main_object": " An unopened microwave-safe popcorn bag is neatly positioned inside the microwave."
                },
                {
                    "step": "Setting the Timer",
                    "object": [
                        [
                            "microwave",
                            "new"
                        ]
                    ],
                    "action": "Setting the microwave timer according to the instructions on the popcorn bag.",
                    "state_of_main_object": " An unopened bag of popcorn is in the microwave, which is set and ready to start on the recommended time."
                },
                {
                    "step": "Microwaving",
                    "object": [
                        [
                            "microwave",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Starting the microwave to pop the corn.",
                    "state_of_main_object": " The microwave is on, actively heating and popping the popcorn inside the microwave-safe bag."
                },
                {
                    "step": "Serving the Popcorn",
                    "object": [
                        [
                            "microwave bag of popcorn",
                            "similar",
                            1
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Carefully opening the bag and pouring the hot popcorn into a serving bowl.",
                    "state_of_main_object": " The serving bowl is filled with hot, fresh popcorn."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.2,
                    0.2,
                    0.9
                ],
                [
                    0.2,
                    1.0,
                    0.9,
                    0.1
                ],
                [
                    0.2,
                    0.9,
                    1.0,
                    0.1
                ],
                [
                    0.9,
                    0.1,
                    0.1,
                    1.0
                ]
            ]
        },
        {
            "goal": "Assembling a Yogurt Parfait 10",
            "steps": [
                {
                    "step": "Adding Yogurt",
                    "object": [
                        [
                            "parfait glass",
                            "new"
                        ]
                    ],
                    "action": "Scooping plain or flavored yogurt into a tall glass.",
                    "state_of_main_object": " A tall glass is partially filled with plain or flavored yogurt."
                },
                {
                    "step": "Layering with Granola",
                    "object": [
                        [
                            "parfait glass",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Adding a layer of granola on top of the yogurt.",
                    "state_of_main_object": " The tall glass features a section of yogurt topped with a layer of granola."
                },
                {
                    "step": "Adding Fruits",
                    "object": [
                        [
                            "parfait glass",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Topping the granola with fresh fruits like berries or sliced bananas.",
                    "state_of_main_object": " A tall glass filled with layered contents"
                },
                {
                    "step": "Garnishing",
                    "object": [
                        [
                            "parfait glass",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Garnishing the top with a drizzle of honey or a sprinkle of seeds.",
                    "state_of_main_object": " The tall glass now contains a parfait with layers of yogurt, granola, fruit, and is garnished with honey or seeds."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.8,
                    0.7
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.8,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.7,
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Blending a Basic Milkshake 11",
            "steps": [
                {
                    "step": "Adding Ingredients to Blender",
                    "object": [
                        [
                            "blender",
                            "new"
                        ]
                    ],
                    "action": "Placing milk, ice cream, and flavoring like chocolate syrup into a blender.",
                    "state_of_main_object": " A blender is filled with milk, ice cream, and a flavoring like chocolate syrup."
                },
                {
                    "step": "Blending",
                    "object": [
                        [
                            "blender",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Blending the ingredients on high until smooth.",
                    "state_of_main_object": " In the blender, there is a well-blended, smooth milkshake containing milk, ice cream, and chocolate syrup."
                },
                {
                    "step": "Pouring the Milkshake",
                    "object": [
                        [
                            "glass",
                            "new"
                        ]
                    ],
                    "action": "Pouring the blended milkshake into a tall glass.",
                    "state_of_main_object": " A tall glass is filled with a smoothly blended milkshake."
                },
                {
                    "step": "Adding Toppings",
                    "object": [
                        [
                            "glass",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Adding whipped cream and a cherry on top of the milkshake.",
                    "state_of_main_object": " A tall glass now holds a smooth milkshake topped with whipped cream and a cherry."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Boiling an Egg 12",
            "steps": [
                {
                    "step": "Filling the Pot with Water",
                    "object": [
                        [
                            "pot",
                            "new"
                        ]
                    ],
                    "action": "Filling a pot with enough water .",
                    "state_of_main_object": " A pot filled with water sits idle."
                },
                {
                    "step": "Adding the Egg",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Gently placing raw eggs into the water.",
                    "state_of_main_object": " A pot filled with water and raw eggs is ready on the stovetop."
                },
                {
                    "step": "Boiling the Water",
                    "object": [
                        [
                            "pot",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Bringing the water to a boil on the stove.",
                    "state_of_main_object": " A pot filled with boiling water and submerged eggs is on the stove."
                },
                {
                    "step": "Cooling and Peeling",
                    "object": [
                        [
                            "pot",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Removing the egg from the water, cooling it under cold water, and peeling off the shell.",
                    "state_of_main_object": " The egg now sits outside the pot, boiled, cooled, and shelled."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making Instant Noodles 13",
            "steps": [
                {
                    "step": "Boiling Water",
                    "object": [
                        [
                            "pot",
                            "new"
                        ]
                    ],
                    "action": "Filling a pot with water and boil it in the stove.",
                    "state_of_main_object": " A pot of boiling water is heating on the stove."
                },
                {
                    "step": "Adding Noodles",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Adding instant noodles to the boiling water.",
                    "state_of_main_object": " The pot now contains boiling water with instant noodles."
                },
                {
                    "step": "Adding Flavor Packet",
                    "object": [
                        [
                            "pot",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Stirring in the flavor packet provided with the noodles.",
                    "state_of_main_object": " The pot now holds boiling water with cooked instant noodles and the added flavor from the packet, stirred in to mix evenly."
                },
                {
                    "step": "Serving the Noodles",
                    "object": [
                        [
                            "pot",
                            "similar",
                            3
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Pouring the cooked noodles and broth into a serving bowl.",
                    "state_of_main_object": " A serving bowl is filled with hot, flavorful instant noodles and broth."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.5
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.5
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.5
                ],
                [
                    0.5,
                    0.5,
                    0.5,
                    1.0
                ]
            ]
        },
        {
            "goal": "Preparing Peanut Butter on Toast 14",
            "steps": [
                {
                    "step": "Toasting the Bread",
                    "object": [
                        [
                            "bread",
                            "new"
                        ],
                        [
                            "toaster",
                            "new"
                        ]
                    ],
                    "action": "Placing slices of bread into a toaster and toasting until golden brown.",
                    "state_of_main_object": " Toasted golden brown slices of bread are ready in the toaster."
                },
                {
                    "step": "Spreading Peanut Butter",
                    "object": [
                        [
                            "bread",
                            "similar shape",
                            1
                        ]
                    ],
                    "action": "Spreading peanut butter evenly on the toasted bread.",
                    "state_of_main_object": " Golden-brown toast with an even spread of peanut butter is ready."
                },
                {
                    "step": "Serving the Toast",
                    "object": [
                        [
                            "bread",
                            "similar shape",
                            2
                        ],
                        [
                            "plate",
                            "new"
                        ]
                    ],
                    "action": "Placing the peanut butter toast on a plate.",
                    "state_of_main_object": " A plate is presented with peanut butter toast on it."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Layering a Basic Sandwich 15",
            "steps": [
                {
                    "step": "Preparing the Bread",
                    "object": [
                        [
                            "bread slices",
                            "new"
                        ]
                    ],
                    "action": "Laying out two slices of bread on a cutting board.",
                    "state_of_main_object": " Two slices of bread are placed side by side on a cutting board."
                },
                {
                    "step": "Adding Fillings",
                    "object": [
                        [
                            "bread slices",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Placing layers of meats, cheese, and vegetables on one slice of bread.",
                    "state_of_main_object": " One slice of bread on the cutting board is now topped with layers of meats, cheese, and vegetables."
                },
                {
                    "step": "Topping with Second Slice",
                    "object": [
                        [
                            "bread slices",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Covering the fillings with the second slice of bread.",
                    "state_of_main_object": " A sandwich is assembled on the cutting board, consisting of the two slices of bread, with layers of meats, cheese, and vegetables in between."
                },
                {
                    "step": "Serving the Sandwich",
                    "object": [
                        [
                            "bread slices",
                            "similar",
                            3
                        ],
                        [
                            "plate",
                            "new"
                        ]
                    ],
                    "action": "Cutting the sandwich diagonally and serving it on a plate.",
                    "state_of_main_object": " A sandwich, cut diagonally, is served on a plate."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.8
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.8
                ],
                [
                    0.8,
                    0.8,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Stirring Hot Chocolate 16",
            "steps": [
                {
                    "step": "Heating the Milk",
                    "object": [
                        [
                            "pot",
                            "new"
                        ]
                    ],
                    "action": "Pouring milk into a pot and heating it on the stove until it simmers.",
                    "state_of_main_object": " A pot filled with simmering milk is on the stove."
                },
                {
                    "step": "Mixing in Chocolate",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Adding chocolate powder or chopped chocolate to the hot milk.",
                    "state_of_main_object": " The pot now contains a mixture of hot milk and melted chocolate."
                },
                {
                    "step": "Stirring Until Smooth",
                    "object": [
                        [
                            "pot",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Stirring continuously until the chocolate is completely melted and the mixture is smooth.",
                    "state_of_main_object": " The pot now contains a smooth, homogeneous mixture of hot chocolate, perfectly melted and mixed in simmering milk."
                },
                {
                    "step": "Serving",
                    "object": [
                        [
                            "mug",
                            "new"
                        ]
                    ],
                    "action": "Pouring the hot chocolate into a mug and optionally adding marshmallows or whipped cream.",
                    "state_of_main_object": " A mug filled with smooth, hot chocolate, possibly topped with marshmallows or whipped cream, is now ready to enjoy."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.1
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.1
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.1
                ],
                [
                    0.1,
                    0.1,
                    0.1,
                    1.0
                ]
            ]
        },
        {
            "goal": "Mixing a Gin and Tonic 17",
            "steps": [
                {
                    "step": "Preparing the Glass",
                    "object": [
                        [
                            "glass",
                            "new"
                        ]
                    ],
                    "action": "Filling a tall glass with ice cubes.",
                    "state_of_main_object": " A tall glass is filled with ice cubes."
                },
                {
                    "step": "Adding Gin",
                    "object": [
                        [
                            "glass",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Pouring gin over the ice.",
                    "state_of_main_object": " A tall glass, filled with ice cubes, is now partially filled with poured gin."
                },
                {
                    "step": "Topping with Tonic Water",
                    "object": [
                        [
                            "glass",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Filling the rest of the glass with tonic water.",
                    "state_of_main_object": " The glass is filled to the brim with a mixture of gin, tonic water and ice cubes."
                },
                {
                    "step": "Garnishing",
                    "object": [
                        [
                            "glass",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Adding a slice of lime and gently stirring the drink.",
                    "state_of_main_object": " The tall glass is filled with a gin and tonic mix, ice cubes, and garnished with a slice of lime. The drink is evenly stirred."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Scooping and Serving Ice Cream 18",
            "steps": [
                {
                    "step": "Preparing the Ice Cream",
                    "object": [
                        [
                            "ice cream tub",
                            "new"
                        ]
                    ],
                    "action": "Removing the ice cream tub from the freezer and letting it sit for a few minutes to soften.",
                    "state_of_main_object": " An ice cream tub is set out from the freezer, gradually softening for easier scooping."
                },
                {
                    "step": "Scooping the Ice Cream",
                    "object": [
                        [
                            "ice cream tub",
                            "similar",
                            1
                        ],
                        [
                            "scoop",
                            "new"
                        ]
                    ],
                    "action": "Using an ice cream scoop to take out several scoops of ice cream.",
                    "state_of_main_object": " Several scoops of ice cream are removed from the tub and are ready to be served."
                },
                {
                    "step": "Serving",
                    "object": [
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "adding toppings like sprinkles or chocolate syrup to the ice cream.",
                    "state_of_main_object": " Several scoops of ice cream, now garnished with toppings like sprinkles or chocolate syrup, sit ready to be served."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.5
                ],
                [
                    0.9,
                    1.0,
                    0.6
                ],
                [
                    0.5,
                    0.6,
                    1.0
                ]
            ]
        },
        {
            "goal": "Slicing Vegetables for Snacks 19",
            "steps": [
                {
                    "step": "Washing Vegetables",
                    "object": [
                        [
                            "vegetables",
                            "new"
                        ]
                    ],
                    "action": "Rinsing vegetables such as carrots, cucumbers, and bell peppers under cold water.",
                    "state_of_main_object": " The carrots, cucumbers, and bell peppers are clean and wet after being rinsed under cold water."
                },
                {
                    "step": "Cutting Vegetables",
                    "object": [
                        [
                            "vegetables",
                            "similar",
                            1
                        ],
                        [
                            "cutting board",
                            "new"
                        ],
                        [
                            "knife",
                            "new"
                        ]
                    ],
                    "action": "Using a sharp knife to slice the vegetables on a cutting board into sticks or rounds.",
                    "state_of_main_object": " The vegetables have been transformed into evenly sliced sticks or rounds placed on a cutting board."
                },
                {
                    "step": "Serving",
                    "object": [
                        [
                            "vegetables",
                            "similar",
                            2
                        ],
                        [
                            "plate",
                            "new"
                        ]
                    ],
                    "action": "Arranging the sliced vegetables on a serving plate or dish.",
                    "state_of_main_object": " A serving plate or dish is now filled with sliced vegetables such as carrots, cucumbers, and bell peppers organized neatly."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.5
                ],
                [
                    0.9,
                    1.0,
                    0.8
                ],
                [
                    0.5,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Steeping Herbal Tea 20",
            "steps": [
                {
                    "step": "Boiling Water",
                    "object": [
                        [
                            "kettle",
                            "new"
                        ]
                    ],
                    "action": "Filling a kettle with water and bringing it to a boil.",
                    "state_of_main_object": " A kettle filled with boiling water is present."
                },
                {
                    "step": "Adding Herbal Tea",
                    "object": [
                        [
                            "teapot",
                            "new"
                        ],
                        [
                            "herbal tea",
                            "new"
                        ]
                    ],
                    "action": "Placing herbal tea leaves or a tea bag in a teapot.",
                    "state_of_main_object": " A boiling kettle and a teapot containing either herbal tea leaves or a tea bag are ready for use."
                },
                {
                    "step": "Pouring Hot Water",
                    "object": [
                        [
                            "teapot",
                            "similar",
                            2
                        ],
                        [
                            "kettle",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Pouring the boiling water over the teapot.",
                    "state_of_main_object": " The teapot now contains hot water steeping the herbal tea leaves or tea bag."
                },
                {
                    "step": "Steeping and Serving",
                    "object": [
                        [
                            "teapot",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Letting the tea steep for a few minutes, then pouring it from teapot into cups.",
                    "state_of_main_object": " Cups of freshly steeped herbal tea have been poured from the teapot, which is now empty or contains less tea.\n"
                }
            ],
            "relation": [
                [
                    1.0,
                    0.0,
                    0.9,
                    0.5
                ],
                [
                    0.0,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.5,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Changing a Light Bulb 21",
            "steps": [
                {
                    "step": "Removing the Old Bulb",
                    "object": [
                        [
                            "light fixture",
                            "new"
                        ]
                    ],
                    "action": "Unscrewing the spent light bulb from the fixture.",
                    "state_of_main_object": " The fixture is now empty without the spent light bulb."
                },
                {
                    "step": "Disposing of the Old Bulb",
                    "object": [
                        [
                            "old bulb",
                            "new"
                        ]
                    ],
                    "action": "Placing the old bulb into a waste bin.",
                    "state_of_main_object": " The light fixture is now empty, and the old bulb is in the waste bin."
                },
                {
                    "step": "Inserting the New Bulb",
                    "object": [
                        [
                            "light fixture",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Screwing a new bulb into the same light fixture.",
                    "state_of_main_object": " The light fixture now holds a new, functional light bulb."
                },
                {
                    "step": "Testing the Light",
                    "object": [
                        [
                            "light switch",
                            "new"
                        ]
                    ],
                    "action": "Turning on the light switch to check the new bulb.",
                    "state_of_main_object": " The room is illuminated, indicating that the new light bulb in the fixture is functioning properly."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.1,
                    0.9,
                    0.5
                ],
                [
                    0.1,
                    1.0,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    0.0,
                    1.0,
                    0.5
                ],
                [
                    0.5,
                    0.0,
                    0.5,
                    1.0
                ]
            ]
        },
        {
            "goal": "Planting a Flower in a Pot 22",
            "steps": [
                {
                    "step": "Filling the Pot with Soil",
                    "object": [
                        [
                            "pot",
                            "new"
                        ]
                    ],
                    "action": "Pouring soil into an empty pot.",
                    "state_of_main_object": " An empty pot is now filled with soil.\n"
                },
                {
                    "step": "Placing the Seed",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Placing a flower  into the center of the soil-filled pot.",
                    "state_of_main_object": " The pot is now filled with soil and a flower is positioned in the center."
                },
                {
                    "step": "Watering the Seed",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Watering the soil in the pot with a watering can.",
                    "state_of_main_object": " The pot houses a flower embedded in moist soil, freshly watered."
                },
                {
                    "step": "Placing the Pot in Sunlight",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Moving the pot to a sunny location.",
                    "state_of_main_object": " The soil-filled pot, with a flower planted and watered, now sits in a sunny location."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Preparing a Smoothie 23",
            "steps": [
                {
                    "step": "Gathering Ingredients",
                    "object": [
                        [
                            "ingredients",
                            "new"
                        ]
                    ],
                    "action": "Collecting fruits, yogurt, and ice from the refrigerator.",
                    "state_of_main_object": " Various fruits, yogurt, and ice are set out on the counter, ready for use."
                },
                {
                    "step": "Adding Ingredients to Blender",
                    "object": [
                        [
                            "blender",
                            "new"
                        ]
                    ],
                    "action": "Placing fruits, yogurt, and ice into the blender.",
                    "state_of_main_object": " A blender is filled with a mixture of fruits, yogurt, and ice."
                },
                {
                    "step": "Blending the Ingredients",
                    "object": [
                        [
                            "blender",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Blending the contents until smooth.",
                    "state_of_main_object": " A smooth, creamy fruit smoothie is in the blender now."
                },
                {
                    "step": "Serving the Smoothie",
                    "object": [
                        [
                            "glass",
                            "new"
                        ]
                    ],
                    "action": "Pouring the smoothie from the blender into a glass.",
                    "state_of_main_object": " A glass filled with a freshly blended smoothie stands ready to drink."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.5,
                    0.5,
                    0.0
                ],
                [
                    0.5,
                    1.0,
                    0.9,
                    0.5
                ],
                [
                    0.5,
                    0.9,
                    1.0,
                    0.5
                ],
                [
                    0.0,
                    0.5,
                    0.5,
                    1.0
                ]
            ]
        },
        {
            "goal": "Assembling a Desk 24",
            "steps": [
                {
                    "step": "Laying Out the Parts",
                    "object": [
                        [
                            "desk parts",
                            "new"
                        ]
                    ],
                    "action": "Unpacking and arranging all parts of the desk on the floor.",
                    "state_of_main_object": " All parts of the desk are unpacked and arranged systematically on the floor."
                },
                {
                    "step": "Attaching the Legs",
                    "object": [
                        [
                            "desk frame",
                            "new"
                        ]
                    ],
                    "action": "Screwing the legs into the desk frame.",
                    "state_of_main_object": " All parts of the desk are displayed on the floor, organized and ready for assembly.\n\nstate 2"
                },
                {
                    "step": "Securing the Desktop",
                    "object": [
                        [
                            "desk frame",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Placing and securing the desktop onto the frame with screws.",
                    "state_of_main_object": " The assembled desk, with legs attached to the frame and a secured desktop, stands complete."
                },
                {
                    "step": "Adding Accessories",
                    "object": [
                        [
                            "completed desk",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Placing a lamp and computer on the newly assembled desk.",
                    "state_of_main_object": " The assembled desk now has a lamp and a computer placed on it."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.7,
                    0.6,
                    0.2
                ],
                [
                    0.7,
                    1.0,
                    0.9,
                    0.3
                ],
                [
                    0.6,
                    0.9,
                    1.0,
                    0.4
                ],
                [
                    0.2,
                    0.3,
                    0.4,
                    1.0
                ]
            ]
        },
        {
            "goal": "Painting a Wall 25",
            "steps": [
                {
                    "step": "Preparing the Work Area",
                    "object": [
                        [
                            "room",
                            "new"
                        ]
                    ],
                    "action": "Laying down drop cloths and taping the edges of the wall.",
                    "state_of_main_object": " The wall's edges are taped off, and drop cloths are laid down for protection against paint drips."
                },
                {
                    "step": "Priming the Wall",
                    "object": [
                        [
                            "wall",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Applying primer with a roller to ensure paint adherence.",
                    "state_of_main_object": " The wall is covered with a layer of primer, prepped for the paint application."
                },
                {
                    "step": "Painting the Wall",
                    "object": [
                        [
                            "wall",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Using a roller to apply the chosen paint color over the primed wall.",
                    "state_of_main_object": " The wall is freshly painted in the chosen color, covered evenly over the primed surface."
                },
                {
                    "step": "Cleaning Up",
                    "object": [
                        [
                            "room",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Removing drop cloths and tape, cleaning brushes.",
                    "state_of_main_object": " The wall is freshly painted in the chosen color, the area is clean, and the brushes are washed."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.8,
                    0.8,
                    0.9
                ],
                [
                    0.8,
                    1.0,
                    0.9,
                    0.5
                ],
                [
                    0.8,
                    0.9,
                    1.0,
                    0.5
                ],
                [
                    0.9,
                    0.5,
                    0.5,
                    1.0
                ]
            ]
        },
        {
            "goal": "Installing a Ceiling Fan 25",
            "steps": [
                {
                    "step": "Assembling the Fan",
                    "object": [
                        [
                            "fan parts",
                            "new"
                        ]
                    ],
                    "action": "Assembling the motor unit, blades, and light fixtures onto the fan base.",
                    "state_of_main_object": " The fan base now has a motor unit, blades, and light fixtures installed on it."
                },
                {
                    "step": "Mounting the Fan Bracket",
                    "object": [
                        [
                            "ceiling",
                            "new"
                        ]
                    ],
                    "action": "Attaching the fan bracket to a secure point on the ceiling.",
                    "state_of_main_object": " The ceiling now has a secure fan bracket attached."
                },
                {
                    "step": "Hanging the Fan",
                    "object": [
                        [
                            "fan assembly",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Hanging the assembled fan onto the bracket.",
                    "state_of_main_object": " The completely assembled ceiling fan is securely hung from the bracket on the ceiling."
                },
                {
                    "step": "Connecting and Testing",
                    "object": [
                        [
                            "fan assembly",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Connecting the wires and testing the fan and light operation.",
                    "state_of_main_object": " A fully installed and operational ceiling fan with light fixtures is hanging from the ceiling."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.3,
                    0.9,
                    0.9
                ],
                [
                    0.3,
                    1.0,
                    0.8,
                    0.3
                ],
                [
                    0.9,
                    0.8,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.3,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Planting a Tree 26",
            "steps": [
                {
                    "step": "Digging a Hole",
                    "object": [
                        [
                            "ground",
                            "new"
                        ]
                    ],
                    "action": "Digging a hole in the ground enough to accommodate the small tree",
                    "state_of_main_object": " A hole large enough for the small tree has been dug in the ground."
                },
                {
                    "step": "Placing the Tree",
                    "object": [
                        [
                            "tree",
                            "new"
                        ]
                    ],
                    "action": "Placing the small tree's root ball into the hole.",
                    "state_of_main_object": " A small tree is now sitting in the hole with its root ball properly placed."
                },
                {
                    "step": "Filling the Hole",
                    "object": [
                        [
                            "ground",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Backfilling the hole with soil, ensuring the tree is stable.",
                    "state_of_main_object": " The small tree is firmly planted in the ground, its root ball completely covered with soil."
                },
                {
                    "step": "Watering the Tree",
                    "object": [
                        [
                            "tree",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Watering the planted tree thoroughly.",
                    "state_of_main_object": " The newly planted tree, now stable in the ground, is damp and hydrated from recent watering."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.8
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.8,
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Baking Chocolate Chip Cookies 27",
            "steps": [
                {
                    "step": "Mixing Ingredients",
                    "object": [
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Combining flour, sugar, eggs, and butter in a mixing bowl.",
                    "state_of_main_object": " There is a combined mixture of flour, sugar, eggs, and butter in a mixing bowl."
                },
                {
                    "step": "Adding Chocolate Chips",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Stirring chocolate chips into the cookie dough.",
                    "state_of_main_object": " The mixing bowl contains cookie dough studded with chocolate chips."
                },
                {
                    "step": "Scooping Dough onto Baking Sheet",
                    "object": [
                        [
                            "baking sheet",
                            "new"
                        ],
                        [
                            "bowl",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Using a spoon to scoop dough onto the baking sheet.",
                    "state_of_main_object": " A baking sheet is studded with evenly spaced dollops of chocolate chip cookie dough."
                },
                {
                    "step": "Baking in Oven",
                    "object": [
                        [
                            "oven",
                            "new"
                        ],
                        [
                            "baking sheet",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Placing the baking sheet in the oven to bake until it turns golden brown.",
                    "state_of_main_object": " The scene shows a baking sheet with golden-brown chocolate chip cookies fresh from the oven."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.5,
                    0.1
                ],
                [
                    0.9,
                    1.0,
                    0.5,
                    0.1
                ],
                [
                    0.5,
                    0.5,
                    1.0,
                    0.9
                ],
                [
                    0.1,
                    0.1,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cooking Spaghetti 28",
            "steps": [
                {
                    "step": "Boiling Water",
                    "object": [
                        [
                            "pot",
                            "new"
                        ]
                    ],
                    "action": "Filling a large pot with water and boil it in the stove.",
                    "state_of_main_object": " A large pot filled with boiling water is placed on the stove."
                },
                {
                    "step": "Adding Spaghetti",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Adding spaghetti noodles to the boiling water.",
                    "state_of_main_object": " The large pot on the stove contains boiling water with spaghetti noodles cooking inside."
                },
                {
                    "step": "Draining Cooked Spaghetti",
                    "object": [
                        [
                            "colander",
                            "new"
                        ],
                        [
                            "pot",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Pouring the cooked spaghetti and water into a colander to drain.",
                    "state_of_main_object": " The colander holds cooked, drained spaghetti noodles."
                },
                {
                    "step": "Serving with Sauce",
                    "object": [
                        [
                            "plate",
                            "new"
                        ],
                        [
                            "colander",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Plating the spaghetti and topping it with tomato sauce in a dish.",
                    "state_of_main_object": " A dish is filled with cooked spaghetti, topped with tomato sauce."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.5,
                    0.1
                ],
                [
                    0.9,
                    1.0,
                    0.5,
                    0.1
                ],
                [
                    0.5,
                    0.5,
                    1.0,
                    0.9
                ],
                [
                    0.1,
                    0.1,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making a Margarita 29",
            "steps": [
                {
                    "step": "Preparing the Glass",
                    "object": [
                        [
                            "glass",
                            "new"
                        ]
                    ],
                    "action": "Rubbing a lime wedge around the rim of the glass and dipping it in salt.",
                    "state_of_main_object": " A glass with a salt-rimmed edge sits ready for the Margarita mixture."
                },
                {
                    "step": "Mixing Ingredients",
                    "object": [
                        [
                            "shaker",
                            "new"
                        ]
                    ],
                    "action": "Combining tequila, lime juice, and triple sec in a cocktail shaker.",
                    "state_of_main_object": " A cocktail shaker is filled with a mix of tequila, lime juice, and triple sec."
                },
                {
                    "step": "Shaking the Cocktail",
                    "object": [
                        [
                            "shaker",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Shaking the mixture well with ice in the shaker.",
                    "state_of_main_object": " There is now a cocktail shaker containing a well-mixed, chilled blend of tequila, lime juice, and triple sec."
                },
                {
                    "step": "Pouring and Serving",
                    "object": [
                        [
                            "shaker",
                            "similar",
                            2
                        ],
                        [
                            "glass",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Pouring the shaken margarita into the prepared glass.",
                    "state_of_main_object": " The margarita glass, previously rimmed with salt, now contains the shaken mixture of tequila, lime juice, and triple sec."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.1,
                    0.1,
                    0.9
                ],
                [
                    0.1,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.1,
                    0.9,
                    1.0,
                    0.8
                ],
                [
                    0.9,
                    0.8,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making Pancakes 30",
            "steps": [
                {
                    "step": "Mixing Pancake Batter",
                    "object": [
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Mixing flour, milk, eggs, and butter to make pancake batter.",
                    "state_of_main_object": " A bowl filled with pancake batter made from mixed flour, milk, eggs, and butter."
                },
                {
                    "step": "Heating the Pan",
                    "object": [
                        [
                            "pan",
                            "new"
                        ]
                    ],
                    "action": "Heating a non-stick pan on the stove.",
                    "state_of_main_object": " A non-stick pan is preheating on the stove."
                },
                {
                    "step": "Pouring the Batter",
                    "object": [
                        [
                            "pan",
                            "similar",
                            2
                        ],
                        [
                            "bowl",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Pouring batter from the bowl into the hot pan in small rounds.",
                    "state_of_main_object": " Small rounds of pancake batter are cooking on the hot, non-stick pan."
                },
                {
                    "step": "Flipping Pancakes",
                    "object": [
                        [
                            "pan",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Using a spatula to flip the pancakes to cook evenly on both sides.",
                    "state_of_main_object": " The non-stick pan contains evenly cooked pancakes."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.2,
                    0.9,
                    0.9
                ],
                [
                    0.2,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    1.0
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    1.0
                ]
            ]
        },
        {
            "goal": "Grilling Steak 31",
            "steps": [
                {
                    "step": "Seasoning the Steak",
                    "object": [
                        [
                            "steak",
                            "new"
                        ]
                    ],
                    "action": "Rubbing salt and pepper generously on both sides of the raw steak.",
                    "state_of_main_object": " The raw steak is now well-coated with salt and pepper on both sides."
                },
                {
                    "step": "Preheating the Grill",
                    "object": [
                        [
                            "grill",
                            "new"
                        ]
                    ],
                    "action": "Heating the grill to a high temperature before cooking.",
                    "state_of_main_object": " The raw steak is seasoned with salt and pepper and ready to be cooked. \nstate 2"
                },
                {
                    "step": "Grilling the Steak",
                    "object": [
                        [
                            "grill",
                            "similar",
                            2
                        ],
                        [
                            "steak",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Placing the steak on the grill and cooking for about 4 minutes on each side.",
                    "state_of_main_object": " The grill hosts a steak sizzling on its surface, halfway through its cooking process."
                },
                {
                    "step": "Resting the Steak",
                    "object": [
                        [
                            "steak",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Taking the steak off the grill and letting it rest for a few minutes.",
                    "state_of_main_object": " A perfectly grilled steak is resting, allowing the juices to redistribute evenly throughout."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.2,
                    0.6,
                    0.5
                ],
                [
                    0.2,
                    1.0,
                    0.5,
                    0.1
                ],
                [
                    0.6,
                    0.5,
                    1.0,
                    0.8
                ],
                [
                    0.5,
                    0.1,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Brewing Coffee Using a French Press 32",
            "steps": [
                {
                    "step": "Measuring Coffee Grounds",
                    "object": [
                        [
                            "coffee grounds",
                            "new"
                        ]
                    ],
                    "action": "Scooping coffee grounds into the French press.",
                    "state_of_main_object": " The French press now contains the coffee grounds."
                },
                {
                    "step": "Boiling Water",
                    "object": [
                        [
                            "kettle",
                            "new"
                        ]
                    ],
                    "action": "Filling the kettle with water and boiling it.",
                    "state_of_main_object": " The French press contains coffee grounds.\n\nstate 2"
                },
                {
                    "step": "Adding Water to French Press",
                    "object": [
                        [
                            "French press",
                            "similar",
                            1
                        ],
                        [
                            "kettle",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Pouring the boiling water into the French press over the coffee grounds.",
                    "state_of_main_object": " The French press is filled with coffee grounds steeping in boiling water."
                },
                {
                    "step": "Pressing the Coffee",
                    "object": [
                        [
                            "French press",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Pressing down the plunger of the French press slowly.",
                    "state_of_main_object": " The French press contains freshly brewed coffee due to the pressed down plunger."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.2,
                    0.6,
                    0.5
                ],
                [
                    0.2,
                    1.0,
                    0.5,
                    0.1
                ],
                [
                    0.6,
                    0.5,
                    1.0,
                    0.8
                ],
                [
                    0.5,
                    0.1,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning a Window 33",
            "steps": [
                {
                    "step": "Applying Cleaning Solution",
                    "object": [
                        [
                            "window",
                            "new"
                        ],
                        [
                            "spray bottle",
                            "new"
                        ]
                    ],
                    "action": "Spraying the cleaning solution onto the window glass.",
                    "state_of_main_object": " The window glass is covered with a spray of cleaning solution."
                },
                {
                    "step": "Wiping the Window",
                    "object": [
                        [
                            "window",
                            "similar",
                            1
                        ],
                        [
                            "squeegee",
                            "new"
                        ]
                    ],
                    "action": "Using a squeegee to wipe the cleaning solution across the window.",
                    "state_of_main_object": " The window glass is now wet and clean, with any remaining cleaning solution being wiped away by the squeegee."
                },
                {
                    "step": "Drying the Window",
                    "object": [
                        [
                            "window",
                            "similar",
                            1
                        ],
                        [
                            "cloth",
                            "new"
                        ]
                    ],
                    "action": "Drying the window glass with a clean cloth.",
                    "state_of_main_object": " The window glass is now clean and dry."
                },
                {
                    "step": "Checking the Cleanliness",
                    "object": [
                        [
                            "window",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Inspecting the window for any streaks or missed spots.",
                    "state_of_main_object": " The window is clean, dry, and streak-free after thorough inspection.\n"
                }
            ],
            "relation": [
                [
                    1.0,
                    0.8,
                    0.7,
                    0.5
                ],
                [
                    0.8,
                    1.0,
                    0.9,
                    0.6
                ],
                [
                    0.7,
                    0.9,
                    1.0,
                    0.7
                ],
                [
                    0.5,
                    0.6,
                    0.7,
                    1.0
                ]
            ]
        },
        {
            "goal": "Assembling a Simple Bookshelf 34",
            "steps": [
                {
                    "step": "Laying Out the Pieces",
                    "object": [
                        [
                            "bookshelf pieces",
                            "new"
                        ]
                    ],
                    "action": "Spreading out all pieces of the bookshelf on the floor.",
                    "state_of_main_object": " All components of the bookshelf are laid out on the floor."
                },
                {
                    "step": "Assembling the Frame",
                    "object": [
                        [
                            "bookshelf pieces",
                            "similar",
                            1
                        ],
                        [
                            "screwdriver",
                            "new"
                        ]
                    ],
                    "action": "Using a screwdriver to attach the sides to the base of the bookshelf.",
                    "state_of_main_object": " The base of the bookshelf is now attached to the sides with screws, forming the initial structure on the floor."
                },
                {
                    "step": "Adding the Shelves",
                    "object": [
                        [
                            "bookshelf pieces",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Inserting shelves into the assembled frame.",
                    "state_of_main_object": " The bookshelf frame, now with shelves inserted, stands upright on the floor."
                },
                {
                    "step": "Final Inspection",
                    "object": [
                        [
                            "bookshelf",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Checking the stability and alignment of the assembled bookshelf.",
                    "state_of_main_object": " A fully constructed and stable bookshelf stands on the floor, all its parts properly aligned."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.8,
                    0.7,
                    0.5
                ],
                [
                    0.8,
                    1.0,
                    0.9,
                    0.6
                ],
                [
                    0.7,
                    0.9,
                    1.0,
                    0.7
                ],
                [
                    0.5,
                    0.6,
                    0.7,
                    1.0
                ]
            ]
        },
        {
            "goal": "Preparing Guacamole 35",
            "steps": [
                {
                    "step": "Scooping Avocado",
                    "object": [
                        [
                            "avocado",
                            "new"
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Scooping the flesh of ripe avocados into a bowl.",
                    "state_of_main_object": " A bowl is filled with the scooped flesh of ripe avocados."
                },
                {
                    "step": "Adding Ingredients",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Adding chopped onions, tomatoes, cilantro, lime juice, and salt to the bowl.",
                    "state_of_main_object": " The bowl now holds a mixture of ripe avocado flesh, chopped onions, tomatoes, cilantro, with lime juice, and salt added.\n"
                },
                {
                    "step": "Mashing the Mixture",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            1
                        ],
                        [
                            "fork",
                            "new"
                        ]
                    ],
                    "action": "Using a fork to mash the mixture until it reaches a creamy texture.",
                    "state_of_main_object": " The bowl now holds a freshly made, creamy guacamole."
                },
                {
                    "step": "Serving Guacamole",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            1
                        ],
                        [
                            "serving dish",
                            "new"
                        ]
                    ],
                    "action": "Transferring the guacamole into a serving dish.",
                    "state_of_main_object": " A serving dish contains the prepared creamy guacamole ready to be served."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.6,
                    0.5,
                    0.4
                ],
                [
                    0.6,
                    1.0,
                    0.8,
                    0.7
                ],
                [
                    0.5,
                    0.8,
                    1.0,
                    0.6
                ],
                [
                    0.4,
                    0.7,
                    0.6,
                    1.0
                ]
            ]
        },
        {
            "goal": "Grooming a Horse 36",
            "steps": [
                {
                    "step": "Brushing the Coat",
                    "object": [
                        [
                            "horse",
                            "new"
                        ],
                        [
                            "brush",
                            "new"
                        ]
                    ],
                    "action": "Using a brush to groom the horse's coat.",
                    "state_of_main_object": " The horse's coat is now more sleek and clean after being brushed."
                },
                {
                    "step": "Cleaning the Hooves",
                    "object": [
                        [
                            "horse",
                            "similar",
                            1
                        ],
                        [
                            "hoof pick",
                            "new"
                        ]
                    ],
                    "action": "Using a hoof pick to remove debris from the horse's hooves.",
                    "state_of_main_object": " After grooming, the horse's coat is clean and shiny, and its hooves are clear of debris."
                },
                {
                    "step": "Detangling the Mane",
                    "object": [
                        [
                            "horse",
                            "similar",
                            1
                        ],
                        [
                            "comb",
                            "new"
                        ]
                    ],
                    "action": "Using a comb to detangle and smooth the horse's mane.",
                    "state_of_main_object": " The horse's coat is groomed, its hooves are cleaned, and its mane is detangled and smoothed."
                },
                {
                    "step": "Wiping the Face",
                    "object": [
                        [
                            "horse",
                            "similar",
                            1
                        ],
                        [
                            "cloth",
                            "new"
                        ]
                    ],
                    "action": "Gently wiping the horse's face with a damp cloth.",
                    "state_of_main_object": " The horse now has a clean, perfectly groomed coat, clear hooves, a detangled mane, and a freshly wiped face."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.5,
                    0.6,
                    0.7
                ],
                [
                    0.5,
                    1.0,
                    0.4,
                    0.3
                ],
                [
                    0.6,
                    0.4,
                    1.0,
                    0.6
                ],
                [
                    0.7,
                    0.3,
                    0.6,
                    1.0
                ]
            ]
        },
        {
            "goal": "Administering Medication to a Dog 37",
            "steps": [
                {
                    "step": "Preparing the Medication",
                    "object": [
                        [
                            "medicine",
                            "new"
                        ],
                        [
                            "syringe",
                            "new"
                        ]
                    ],
                    "action": "Drawing the prescribed amount of medicine into a syringe.",
                    "state_of_main_object": " A syringe filled with the prescribed amount of dog medication is ready for use."
                },
                {
                    "step": "Calming the Dog",
                    "object": [
                        [
                            "dog",
                            "new"
                        ]
                    ],
                    "action": "Gently petting the dog to keep it calm before administering the medicine.",
                    "state_of_main_object": " A syringe filled with the prescribed dosage of medicine is ready. \nstate 2"
                },
                {
                    "step": "Administering the Medicine",
                    "object": [
                        [
                            "dog",
                            "similar",
                            2
                        ],
                        [
                            "syringe",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Carefully administering the medicine orally to the dog.",
                    "state_of_main_object": " The dog has received the medication through oral administration."
                },
                {
                    "step": "Rewarding the Dog",
                    "object": [
                        [
                            "dog",
                            "similar",
                            2
                        ],
                        [
                            "treat",
                            "new"
                        ]
                    ],
                    "action": "Giving the dog a treat for taking its medicine without fuss.",
                    "state_of_main_object": " The dog, having received its medication, enjoys a post-treatment treat."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.4,
                    0.5,
                    0.3
                ],
                [
                    0.4,
                    1.0,
                    0.9,
                    0.6
                ],
                [
                    0.5,
                    0.9,
                    1.0,
                    0.7
                ],
                [
                    0.3,
                    0.6,
                    0.7,
                    1.0
                ]
            ]
        },
        {
            "goal": "Feeding Tropical Fish 38",
            "steps": [
                {
                    "step": "Selecting Fish Food",
                    "object": [
                        [
                            "fish food",
                            "new"
                        ]
                    ],
                    "action": "Choosing the appropriate type of food for tropical fish.",
                    "state_of_main_object": " The selected type of food, suitable for tropical fish, is ready for feeding."
                },
                {
                    "step": "Sprinkling the Food",
                    "object": [
                        [
                            "fish food",
                            "similar",
                            1
                        ],
                        [
                            "fish tank",
                            "new"
                        ]
                    ],
                    "action": "Sprinkling a small amount of food into the fish tank.",
                    "state_of_main_object": " Tropical fish in the tank are swimming up to eat the sprinkled food.\n"
                },
                {
                    "step": "Observing the Fish",
                    "object": [
                        [
                            "fish tank",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Watching to ensure the fish are eating the food.",
                    "state_of_main_object": " The fish are in the tank, actively consuming the food that was sprinkled in."
                },
                {
                    "step": "Checking Water Quality",
                    "object": [
                        [
                            "fish tank",
                            "similar",
                            2
                        ],
                        [
                            "water test kit",
                            "new"
                        ]
                    ],
                    "action": "Using a water test kit to check the quality of the tank's water.",
                    "state_of_main_object": " The tropical fish tank now has been fed, and the water tested with a water test kit for its quality."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.3,
                    0.8,
                    0.4
                ],
                [
                    0.3,
                    1.0,
                    0.6,
                    0.7
                ],
                [
                    0.8,
                    0.6,
                    1.0,
                    0.5
                ],
                [
                    0.4,
                    0.7,
                    0.5,
                    1.0
                ]
            ]
        },
        {
            "goal": "Decorating a Living Room for Christmas 39",
            "steps": [
                {
                    "step": "Setting Up the Christmas Tree",
                    "object": [
                        [
                            "Christmas tree",
                            "new"
                        ]
                    ],
                    "action": "Assembling and positioning the Christmas tree in the living room.",
                    "state_of_main_object": " The living room features an assembled Christmas tree in the desired position."
                },
                {
                    "step": "Hanging Lights",
                    "object": [
                        [
                            "Christmas tree",
                            "similar",
                            1
                        ],
                        [
                            "Christmas lights",
                            "new"
                        ]
                    ],
                    "action": "Wrapping string lights around the Christmas tree.",
                    "state_of_main_object": " The Christmas tree in the living room is assembled, positioned and wrapped with string lights."
                },
                {
                    "step": "Adding Ornaments",
                    "object": [
                        [
                            "Christmas tree",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Hanging various ornaments on the branches of the tree.",
                    "state_of_main_object": " The Christmas tree in the living room is now adorned with string lights and various ornaments."
                },
                {
                    "step": "Placing the Star",
                    "object": [
                        [
                            "Christmas tree",
                            "similar",
                            1
                        ],
                        [
                            "star",
                            "new"
                        ]
                    ],
                    "action": "Placing a star on top of the Christmas tree.",
                    "state_of_main_object": " A fully decorated Christmas tree with a star on top stands in the center of the living room."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.8,
                    0.7,
                    0.6
                ],
                [
                    0.8,
                    1.0,
                    0.9,
                    0.7
                ],
                [
                    0.7,
                    0.9,
                    1.0,
                    0.8
                ],
                [
                    0.6,
                    0.7,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Decorating a Birthday Cake 40",
            "steps": [
                {
                    "step": "Applying Frosting",
                    "object": [
                        [
                            "cake",
                            "new"
                        ],
                        [
                            "frosting",
                            "new"
                        ]
                    ],
                    "action": "Spreading a layer of frosting evenly over the cake.",
                    "state_of_main_object": " The birthday cake is uniformly covered with a layer of frosting."
                },
                {
                    "step": "Adding Edible Decorations",
                    "object": [
                        [
                            "cake",
                            "similar",
                            1
                        ],
                        [
                            "edible decorations",
                            "new"
                        ]
                    ],
                    "action": "Placing edible decorations like sprinkles and candy on the frosted cake.",
                    "state_of_main_object": " The birthday cake is now adorned with colorful edible decorations like sprinkles and candy on its frosting."
                },
                {
                    "step": "Writing a Message",
                    "object": [
                        [
                            "cake",
                            "similar",
                            1
                        ],
                        [
                            "icing tube",
                            "new"
                        ]
                    ],
                    "action": "Using an icing tube to write a birthday message on the cake.",
                    "state_of_main_object": " The birthday cake is frosted, decorated with edible items, and has a birthday message written on it with icing."
                },
                {
                    "step": "Adding Candles",
                    "object": [
                        [
                            "cake",
                            "similar",
                            1
                        ],
                        [
                            "candles",
                            "new"
                        ]
                    ],
                    "action": "Placing birthday candles on the cake.",
                    "state_of_main_object": " The birthday cake is fully decorated with frosting, edible decorations, a written message, and birthday candles."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.8,
                    0.7,
                    0.6
                ],
                [
                    0.8,
                    1.0,
                    0.9,
                    0.7
                ],
                [
                    0.7,
                    0.9,
                    1.0,
                    0.8
                ],
                [
                    0.6,
                    0.7,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Setting Up a Home Office 41",
            "steps": [
                {
                    "step": "Assembling the Desk",
                    "object": [
                        [
                            "desk",
                            "new"
                        ]
                    ],
                    "action": "Building the desk from a flat-pack kit.",
                    "state_of_main_object": " A newly assembled desk from a flat-pack kit is standing in the home office space."
                },
                {
                    "step": "Arranging Office Supplies",
                    "object": [
                        [
                            "desk",
                            "similar",
                            1
                        ],
                        [
                            "office supplies",
                            "new"
                        ]
                    ],
                    "action": "Organizing office supplies like pens, notepads, and organizers on the desk.",
                    "state_of_main_object": " The newly built desk now has organized office supplies such as pens, notepads, and organizers on its surface."
                },
                {
                    "step": "Setting Up the Computer",
                    "object": [
                        [
                            "desk",
                            "similar",
                            1
                        ],
                        [
                            "computer",
                            "new"
                        ]
                    ],
                    "action": "Placing the computer monitor, keyboard, and mouse on the desk.",
                    "state_of_main_object": " The desk is now set up with organized office supplies and computer equipment."
                },
                {
                    "step": "Adding Decorative Elements",
                    "object": [
                        [
                            "desk",
                            "similar",
                            1
                        ],
                        [
                            "plants",
                            "new"
                        ],
                        [
                            "pictures",
                            "new"
                        ]
                    ],
                    "action": "Placing decorative items like plants and framed pictures on and around the desk.",
                    "state_of_main_object": " A completed desk setup contains a computer monitor, keyboard, mouse, and office supplies along with decorative items like plants and framed pictures."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.6,
                    0.7,
                    0.5
                ],
                [
                    0.6,
                    1.0,
                    0.8,
                    0.7
                ],
                [
                    0.7,
                    0.8,
                    1.0,
                    0.7
                ],
                [
                    0.5,
                    0.7,
                    0.7,
                    1.0
                ]
            ]
        },
        {
            "goal": "Creating a Wall Gallery 42",
            "steps": [
                {
                    "step": "Selecting Artwork",
                    "object": [
                        [
                            "artwork",
                            "new"
                        ]
                    ],
                    "action": "Choosing a variety of framed pictures and artworks to hang on the wall.",
                    "state_of_main_object": " A variety of selected framed pictures and artworks are ready to be hanged on the wall."
                },
                {
                    "step": "Measuring and Planning",
                    "object": [
                        [
                            "wall",
                            "new"
                        ],
                        [
                            "tape measure",
                            "new"
                        ],
                        [
                            "level",
                            "new"
                        ]
                    ],
                    "action": "Measuring the wall space and planning the layout using a tape measure and level.",
                    "state_of_main_object": " The wall is measured and a layout for the artworks is envisioned with the help of a tape measure and level.\n"
                },
                {
                    "step": "Mounting Frames",
                    "object": [
                        [
                            "wall",
                            "similar",
                            2
                        ],
                        [
                            "hammer",
                            "new"
                        ],
                        [
                            "nails",
                            "new"
                        ]
                    ],
                    "action": "Hanging the frames on the wall using a hammer and nails according to the planned layout.",
                    "state_of_main_object": " The wall now displays a gallery of various framed pictures and artworks, placed according to a well-measured layout."
                },
                {
                    "step": "Final Adjustments",
                    "object": [
                        [
                            "wall",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Adjusting the frames to ensure they are level and evenly spaced.",
                    "state_of_main_object": " A wall gallery is displayed with an arranged set of level and evenly spaced framed pictures and artworks."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.3,
                    0.2,
                    0.2
                ],
                [
                    0.3,
                    1.0,
                    0.8,
                    0.9
                ],
                [
                    0.2,
                    0.8,
                    1.0,
                    0.9
                ],
                [
                    0.2,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Decorating a Patio 43",
            "steps": [
                {
                    "step": "Selecting Furniture",
                    "object": [
                        [
                            "patio",
                            "new"
                        ],
                        [
                            "furniture",
                            "new"
                        ]
                    ],
                    "action": "Choosing outdoor furniture suitable for the patio space.",
                    "state_of_main_object": " The patio now has suitable outdoor furniture positioned in the space."
                },
                {
                    "step": "Adding Outdoor Rugs",
                    "object": [
                        [
                            "patio",
                            "similar",
                            1
                        ],
                        [
                            "rug",
                            "new"
                        ]
                    ],
                    "action": "Laying down outdoor rugs to define seating areas.",
                    "state_of_main_object": " The patio now boasts suitable outdoor furniture and rugs which define the seating areas."
                },
                {
                    "step": "Setting Up Lighting",
                    "object": [
                        [
                            "patio",
                            "similar",
                            1
                        ],
                        [
                            "lights",
                            "new"
                        ]
                    ],
                    "action": "Installing string lights or lanterns to enhance evening ambiance.",
                    "state_of_main_object": " The patio is now furnished and defined by outdoor rugs, and it is illuminated by string lights or lanterns."
                },
                {
                    "step": "Planting Decorative Plants",
                    "object": [
                        [
                            "patio",
                            "similar",
                            1
                        ],
                        [
                            "plants",
                            "new"
                        ]
                    ],
                    "action": "Placing potted plants around the patio for greenery and decoration.",
                    "state_of_main_object": " The patio is decorated with suitable outdoor furniture, defined seating areas marked with outdoor rugs, enhanced evening ambiance through string lights or lanterns, and it is embellished with potted plants for greenery."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.6,
                    0.5,
                    0.5
                ],
                [
                    0.6,
                    1.0,
                    0.7,
                    0.6
                ],
                [
                    0.5,
                    0.7,
                    1.0,
                    0.5
                ],
                [
                    0.5,
                    0.6,
                    0.5,
                    1.0
                ]
            ]
        },
        {
            "goal": "Arranging a Festive Table Setting 44",
            "steps": [
                {
                    "step": "Laying the Tablecloth",
                    "object": [
                        [
                            "table",
                            "new"
                        ],
                        [
                            "tablecloth",
                            "new"
                        ]
                    ],
                    "action": "Spreading a festive tablecloth over the dining table.",
                    "state_of_main_object": " The dining table is covered with a festive tablecloth."
                },
                {
                    "step": "Setting Plates and Cutlery",
                    "object": [
                        [
                            "table",
                            "similar",
                            1
                        ],
                        [
                            "plates",
                            "new"
                        ],
                        [
                            "cutlery",
                            "new"
                        ]
                    ],
                    "action": "Arranging plates and cutlery in their proper positions for each seat.",
                    "state_of_main_object": " The festive tablecloth-covered dining table now has plates and cutlery arranged in precise positions for each seat."
                },
                {
                    "step": "Adding Centerpiece",
                    "object": [
                        [
                            "table",
                            "similar",
                            1
                        ],
                        [
                            "centerpiece",
                            "new"
                        ]
                    ],
                    "action": "Placing a floral or festive centerpiece in the middle of the table.",
                    "state_of_main_object": " The tablecloth-covered dining table is set with plates and cutlery for each seat, and a festive centerpiece adorns the middle of the table."
                },
                {
                    "step": "Placing Napkins and Decorative Items",
                    "object": [
                        [
                            "table",
                            "similar",
                            1
                        ],
                        [
                            "napkins",
                            "new"
                        ],
                        [
                            "decorative items",
                            "new"
                        ]
                    ],
                    "action": "Folding napkins in a decorative style and placing other small festive items.",
                    "state_of_main_object": " A festive table is set up with neatly arranged plates, cutlery, a centerpiece, and decorative napkins alongside small festive items."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.7,
                    0.6,
                    0.6
                ],
                [
                    0.7,
                    1.0,
                    0.8,
                    0.9
                ],
                [
                    0.6,
                    0.8,
                    1.0,
                    0.8
                ],
                [
                    0.6,
                    0.9,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Fixing a Leaky Faucet 45",
            "steps": [
                {
                    "step": "Turning Off the Water",
                    "object": [
                        [
                            "faucet",
                            "new"
                        ],
                        [
                            "valve",
                            "new"
                        ]
                    ],
                    "action": "Turning off the water supply valve under the sink.",
                    "state_of_main_object": " The water supply valve under the sink is in the off position."
                },
                {
                    "step": "Disassembling the Faucet",
                    "object": [
                        [
                            "faucet",
                            "similar",
                            1
                        ],
                        [
                            "wrench",
                            "new"
                        ],
                        [
                            "screwdriver",
                            "new"
                        ]
                    ],
                    "action": "Using a wrench and screwdriver to remove the handle and access the valve.",
                    "state_of_main_object": " The faucet handle is removed, revealing the internal valve, with tools nearby."
                },
                {
                    "step": "Replacing the Washer",
                    "object": [
                        [
                            "faucet",
                            "similar",
                            1
                        ],
                        [
                            "washer",
                            "new"
                        ]
                    ],
                    "action": "Replacing the worn washer with a new one to stop the leak.",
                    "state_of_main_object": " The faucet has a new washer installed, and the leak has been stopped."
                },
                {
                    "step": "Reassembling the Faucet",
                    "object": [
                        [
                            "faucet",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Reattaching the faucet handle and turning on the water valve to test.",
                    "state_of_main_object": " The faucet is reassembled, the water is turned back on, and the sink is free of leaks."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.7,
                    0.5,
                    0.5
                ],
                [
                    0.7,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.5,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.5,
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Repairing a Flat Bicycle Tire 46",
            "steps": [
                {
                    "step": "Removing the Wheel",
                    "object": [
                        [
                            "bicycle",
                            "new"
                        ],
                        [
                            "wheel",
                            "new"
                        ]
                    ],
                    "action": "Loosening the bolts and removing the flat wheel from the bicycle.",
                    "state_of_main_object": " The bicycle is standing without one wheel, the removed flat wheel is set aside."
                },
                {
                    "step": "Taking Out the Inner Tube",
                    "object": [
                        [
                            "wheel",
                            "similar",
                            1
                        ],
                        [
                            "tire levers",
                            "new"
                        ]
                    ],
                    "action": "Using tire levers to pry the tire off the rim and remove the inner tube.",
                    "state_of_main_object": " The deflated inner tube is separated from the bicycle tire, and the rim is exposed."
                },
                {
                    "step": "Patching the Tube",
                    "object": [
                        [
                            "inner tube",
                            "similar",
                            2
                        ],
                        [
                            "patch kit",
                            "new"
                        ]
                    ],
                    "action": "Applying rubber cement and a patch to the punctured area of the inner tube.",
                    "state_of_main_object": " The previously punctured inner tube is now patched with rubber cement and a patch."
                },
                {
                    "step": "Reassembling the Wheel",
                    "object": [
                        [
                            "wheel",
                            "similar",
                            1
                        ],
                        [
                            "inner tube",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Putting the patched inner tube back into the tire and remounting it on the rim.",
                    "state_of_main_object": " The flat bicycle tire is repaired, with the patched inner tube reinstalled, and positioned back onto the rim."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.8,
                    0.4,
                    0.6
                ],
                [
                    0.8,
                    1.0,
                    0.7,
                    0.9
                ],
                [
                    0.4,
                    0.7,
                    1.0,
                    0.8
                ],
                [
                    0.6,
                    0.9,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Replacing a Broken Window Pane 47",
            "steps": [
                {
                    "step": "Removing the Broken Glass",
                    "object": [
                        [
                            "window",
                            "new"
                        ],
                        [
                            "gloves",
                            "new"
                        ]
                    ],
                    "action": "Wearing safety gloves to remove shards of broken glass from the window frame.",
                    "state_of_main_object": " The window frame is cleared of broken glass shards, with you wearing safety gloves for protection."
                },
                {
                    "step": "Measuring the Frame",
                    "object": [
                        [
                            "window",
                            "similar",
                            1
                        ],
                        [
                            "tape measure",
                            "new"
                        ]
                    ],
                    "action": "Measuring the dimensions of the window frame to cut a new pane of glass.",
                    "state_of_main_object": " The window frame is now empty and its dimensions have been measured."
                },
                {
                    "step": "Installing New Glass 48",
                    "object": [
                        [
                            "window",
                            "similar",
                            1
                        ],
                        [
                            "glass pane",
                            "new"
                        ],
                        [
                            "glazier's points",
                            "new"
                        ]
                    ],
                    "action": "Placing the new glass pane into the frame and securing it with glazier's points.",
                    "state_of_main_object": " A new pane of glass is secured in the window frame using glazier's points."
                },
                {
                    "step": "Applying Caulk",
                    "object": [
                        [
                            "window",
                            "similar",
                            1
                        ],
                        [
                            "caulk",
                            "new"
                        ]
                    ],
                    "action": "Sealing the edges of the glass with caulk to weatherproof the window.",
                    "state_of_main_object": " The window now houses a new pane, secured and weatherproofed, replacing the broken one."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.7,
                    0.5,
                    0.4
                ],
                [
                    0.7,
                    1.0,
                    0.8,
                    0.6
                ],
                [
                    0.5,
                    0.8,
                    1.0,
                    0.9
                ],
                [
                    0.4,
                    0.6,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning an Oven 49",
            "steps": [
                {
                    "step": "Removing Oven Racks",
                    "object": [
                        [
                            "oven",
                            "new"
                        ],
                        [
                            "oven racks",
                            "new"
                        ]
                    ],
                    "action": "Taking out the oven racks to clean separately.",
                    "state_of_main_object": " The oven is empty with the racks removed for separate cleaning."
                },
                {
                    "step": "Applying Oven Cleaner",
                    "object": [
                        [
                            "oven",
                            "similar",
                            1
                        ],
                        [
                            "oven cleaner",
                            "new"
                        ]
                    ],
                    "action": "Spraying oven cleaner inside the oven and letting it sit according to instructions.",
                    "state_of_main_object": " The oven is now filled with sprayed oven cleaner and is waiting for it to take effect."
                },
                {
                    "step": "Scrubbing the Oven",
                    "object": [
                        [
                            "oven",
                            "similar",
                            1
                        ],
                        [
                            "scrubbing brush",
                            "new"
                        ]
                    ],
                    "action": "Scrubbing the inside of the oven to remove burnt-on food and grime.",
                    "state_of_main_object": " The interior of the oven is free of burnt-on food and grime after being scrubbed."
                },
                {
                    "step": "Rinsing and Drying",
                    "object": [
                        [
                            "oven",
                            "similar",
                            1
                        ],
                        [
                            "cloth",
                            "new"
                        ]
                    ],
                    "action": "Wiping the oven with a damp cloth to remove any cleaner residue and drying it.",
                    "state_of_main_object": " The inside of the oven is now clean, free of food and grime, and is completely dry."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.4,
                    0.5,
                    0.6
                ],
                [
                    0.4,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.5,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.6,
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning a Carpet 50",
            "steps": [
                {
                    "step": "Vacuuming the Carpet",
                    "object": [
                        [
                            "carpet",
                            "new"
                        ],
                        [
                            "vacuum cleaner",
                            "new"
                        ]
                    ],
                    "action": "Thoroughly vacuuming the carpet to remove dust and loose dirt.",
                    "state_of_main_object": " The carpet is free of dust and loose dirt after being thoroughly vacuumed."
                },
                {
                    "step": "Applying Carpet Shampoo",
                    "object": [
                        [
                            "carpet",
                            "similar",
                            1
                        ],
                        [
                            "carpet shampoo",
                            "new"
                        ]
                    ],
                    "action": "Using carpet shampoo with a cleaning machine or brush to deep clean.",
                    "state_of_main_object": " The carpet is damp and clean, covered in carpet shampoo applied by a cleaning machine or brush."
                },
                {
                    "step": "Scrubbing the Carpet",
                    "object": [
                        [
                            "carpet",
                            "similar",
                            1
                        ],
                        [
                            "scrubbing brush",
                            "new"
                        ]
                    ],
                    "action": "Scrubbing the carpet to work the shampoo deep into the fibers.",
                    "state_of_main_object": " The carpet is now damp, freshly scrubbed with rich lather from the shampoo deeply penetrating into the fibers."
                },
                {
                    "step": "Rinsing and Drying the Carpet",
                    "object": [
                        [
                            "carpet",
                            "similar",
                            1
                        ],
                        [
                            "suction vacuum",
                            "new"
                        ]
                    ],
                    "action": "Rinsing the carpet with clean water and using a suction vacuum to remove excess moisture.",
                    "state_of_main_object": " The carpet is damp and clean, with excess water being removed by a suction vacuum."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.6,
                    0.7,
                    0.7
                ],
                [
                    0.6,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.7,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.7,
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning a Bathroom 51",
            "steps": [
                {
                    "step": "Scrubbing the Tiles",
                    "object": [
                        [
                            "bathroom tiles",
                            "new"
                        ],
                        [
                            "scrub brush",
                            "new"
                        ]
                    ],
                    "action": "Using a scrub brush and bathroom cleaner to clean the tiles and grout.",
                    "state_of_main_object": "The tiles are scrubbed clean."
                },
                {
                    "step": "Cleaning the Toilet",
                    "object": [
                        [
                            "toilet",
                            "new"
                        ],
                        [
                            "toilet brush",
                            "new"
                        ],
                        [
                            "toilet cleaner",
                            "new"
                        ]
                    ],
                    "action": "Applying toilet cleaner and scrubbing inside the bowl with a toilet brush.",
                    "state_of_main_object": "The toilet is clean and disinfected."
                },
                {
                    "step": "Wiping Down Surfaces",
                    "object": [
                        [
                            "sink",
                            "new"
                        ],
                        [
                            "mirror",
                            "new"
                        ],
                        [
                            "cloth",
                            "new"
                        ]
                    ],
                    "action": "Using a disinfectant spray and cloth to wipe down the sink, counter, and mirror.",
                    "state_of_main_object": "All surfaces are shiny and germ-free."
                },
                {
                    "step": "Mopping the Floor",
                    "object": [
                        [
                            "floor",
                            "new"
                        ],
                        [
                            "mop",
                            "new"
                        ],
                        [
                            "bucket",
                            "new"
                        ]
                    ],
                    "action": "Mopping the bathroom floor with a disinfectant solution to remove dirt and germs.",
                    "state_of_main_object": "The floor is clean and wet, drying in process."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.4,
                    0.7,
                    0.6
                ],
                [
                    0.4,
                    1.0,
                    0.5,
                    0.4
                ],
                [
                    0.7,
                    0.5,
                    1.0,
                    0.8
                ],
                [
                    0.6,
                    0.4,
                    0.8,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning an Oven 52",
            "steps": [
                {
                    "step": "Removing Oven Racks",
                    "object": [
                        [
                            "oven",
                            "new"
                        ],
                        [
                            "oven racks",
                            "new"
                        ]
                    ],
                    "action": "Taking out the oven racks to clean separately.",
                    "state_of_main_object": "The oven is empty, racks removed for cleaning."
                },
                {
                    "step": "Applying Oven Cleaner",
                    "object": [
                        [
                            "oven",
                            "similar",
                            1
                        ],
                        [
                            "oven cleaner",
                            "new"
                        ]
                    ],
                    "action": "Spraying oven cleaner inside the oven and letting it sit according to instructions.",
                    "state_of_main_object": "The oven cleaner is applied and soaking."
                },
                {
                    "step": "Scrubbing the Oven",
                    "object": [
                        [
                            "oven",
                            "similar",
                            1
                        ],
                        [
                            "scrubbing brush",
                            "new"
                        ]
                    ],
                    "action": "Scrubbing the inside of the oven to remove burnt-on food and grime.",
                    "state_of_main_object": "The oven is scrubbed clean."
                },
                {
                    "step": "Rinsing and Drying",
                    "object": [
                        [
                            "oven",
                            "similar",
                            1
                        ],
                        [
                            "cloth",
                            "new"
                        ]
                    ],
                    "action": "Wiping the oven with a damp cloth to remove any cleaner residue and drying it.",
                    "state_of_main_object": "The oven is clean and dry."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.4,
                    0.5,
                    0.6
                ],
                [
                    0.4,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.5,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.6,
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning a Carpet 53",
            "steps": [
                {
                    "step": "Vacuuming the Carpet",
                    "object": [
                        [
                            "carpet",
                            "new"
                        ],
                        [
                            "vacuum cleaner",
                            "new"
                        ]
                    ],
                    "action": "Thoroughly vacuuming the carpet to remove dust and loose dirt.",
                    "state_of_main_object": "The carpet is vacuumed and free of loose particles."
                },
                {
                    "step": "Applying Carpet Shampoo",
                    "object": [
                        [
                            "carpet",
                            "similar",
                            1
                        ],
                        [
                            "carpet shampoo",
                            "new"
                        ]
                    ],
                    "action": "Using carpet shampoo with a cleaning machine or brush to deep clean.",
                    "state_of_main_object": "Shampoo is applied to the carpet."
                },
                {
                    "step": "Scrubbing the Carpet",
                    "object": [
                        [
                            "carpet",
                            "similar",
                            1
                        ],
                        [
                            "scrubbing brush",
                            "new"
                        ]
                    ],
                    "action": "Scrubbing the carpet to work the shampoo deep into the fibers.",
                    "state_of_main_object": "The carpet is scrubbed and the dirt is loosened."
                },
                {
                    "step": "Rinsing and Drying the Carpet",
                    "object": [
                        [
                            "carpet",
                            "similar",
                            1
                        ],
                        [
                            "suction vacuum",
                            "new"
                        ]
                    ],
                    "action": "Rinsing the carpet with clean water and using a suction vacuum to remove excess moisture.",
                    "state_of_main_object": "The carpet is clean and drying."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.6,
                    0.7,
                    0.7
                ],
                [
                    0.6,
                    1.0,
                    0.9,
                    0.8
                ],
                [
                    0.7,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.7,
                    0.8,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning a Bathroom 54",
            "steps": [
                {
                    "step": "Scrubbing the Tiles",
                    "object": [
                        [
                            "bathroom tiles",
                            "new"
                        ],
                        [
                            "scrub brush",
                            "new"
                        ]
                    ],
                    "action": "Using a scrub brush and bathroom cleaner to clean the tiles and grout.",
                    "state_of_main_object": "The tiles are scrubbed clean."
                },
                {
                    "step": "Cleaning the Toilet",
                    "object": [
                        [
                            "toilet",
                            "new"
                        ],
                        [
                            "toilet brush",
                            "new"
                        ],
                        [
                            "toilet cleaner",
                            "new"
                        ]
                    ],
                    "action": "Applying toilet cleaner and scrubbing inside the bowl with a toilet brush.",
                    "state_of_main_object": "The toilet is clean and disinfected."
                },
                {
                    "step": "Wiping Down Surfaces",
                    "object": [
                        [
                            "sink",
                            "new"
                        ],
                        [
                            "mirror",
                            "new"
                        ],
                        [
                            "cloth",
                            "new"
                        ]
                    ],
                    "action": "Using a disinfectant spray and cloth to wipe down the sink, counter, and mirror.",
                    "state_of_main_object": "All surfaces are shiny and germ-free."
                },
                {
                    "step": "Mopping the Floor",
                    "object": [
                        [
                            "floor",
                            "new"
                        ],
                        [
                            "mop",
                            "new"
                        ],
                        [
                            "bucket",
                            "new"
                        ]
                    ],
                    "action": "Mopping the bathroom floor with a disinfectant solution to remove dirt and germs.",
                    "state_of_main_object": "The floor is clean and wet, drying in process."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.4,
                    0.7,
                    0.6
                ],
                [
                    0.4,
                    1.0,
                    0.5,
                    0.4
                ],
                [
                    0.7,
                    0.5,
                    1.0,
                    0.8
                ],
                [
                    0.6,
                    0.4,
                    0.8,
                    1.0
                ]
            ]
        }
    ]
 },
 "gpt_1": {
    "goals": [
        {
            "goal": "Planting a Flower in a Pot 0",
            "steps": [
                {
                    "step": "Filling the Pot with Soil",
                    "object": [
                        [
                            "pot",
                            "new"
                        ],
                        [
                            "soil",
                            "new"
                        ]
                    ],
                    "action": "Pouring soil into the empty pot.",
                    "state_of_main_object": " An empty pot is now filled with soil."
                },
                {
                    "step": "Placing the Seed",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ],
                        [
                            "seed",
                            "new"
                        ]
                    ],
                    "action": "Placing the seed in the center of the soil.",
                    "state_of_main_object": " A pot filled with soil, now containing a seed placed at its center."
                },
                {
                    "step": "Adding More Soil",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ],
                        [
                            "soil",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Adding more soil to cover the seed in the pot.",
                    "state_of_main_object": " The pot now contains a seed that is covered by soil."
                },
                {
                    "step": "Watering the Plant",
                    "object": [
                        [
                            "pot",
                            "similar",
                            1
                        ],
                        [
                            "watering can",
                            "new"
                        ]
                    ],
                    "action": "Watering the soil in the pot with a watering can.",
                    "state_of_main_object": " The pot now contains moist soil, with the seed buried and watered."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning a Window 1",
            "steps": [
                {
                    "step": "Preparing Cleaning Solution",
                    "object": [
                        [
                            "bucket",
                            "new"
                        ],
                        [
                            "cleaning solution",
                            "new"
                        ]
                    ],
                    "action": "Mixing water and cleaning solution in a bucket.",
                    "state_of_main_object": " A bucket is filled with a mixture of water and cleaning solution."
                },
                {
                    "step": "Wetting the Sponge",
                    "object": [
                        [
                            "bucket",
                            "similar",
                            1
                        ],
                        [
                            "sponge",
                            "new"
                        ]
                    ],
                    "action": "Dipping the sponge into the cleaning solution.",
                    "state_of_main_object": " A bucket filled with a mix of water and cleaning solution and a sponge immersed in it."
                },
                {
                    "step": "Wiping the Window",
                    "object": [
                        [
                            "window",
                            "new"
                        ],
                        [
                            "sponge",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Wiping the window glass with the wet sponge.",
                    "state_of_main_object": " The window glass is wet and soapy, being cleaned with the sponge."
                },
                {
                    "step": "Drying the Window",
                    "object": [
                        [
                            "window",
                            "similar",
                            3
                        ],
                        [
                            "squeegee",
                            "new"
                        ]
                    ],
                    "action": "Using a squeegee to remove soap and water from the window.",
                    "state_of_main_object": " The window glass is now clean and free of soap and water."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Building a Birdhouse 2",
            "steps": [
                {
                    "step": "Cutting Wood",
                    "object": [
                        [
                            "saw",
                            "new"
                        ],
                        [
                            "wood",
                            "new"
                        ]
                    ],
                    "action": "Using a saw to cut wood into pieces for the birdhouse.",
                    "state_of_main_object": " Cut pieces of wood, intended for the birdhouse construction, lay scattered around."
                },
                {
                    "step": "Assembling the Pieces",
                    "object": [
                        [
                            "wood",
                            "similar",
                            1
                        ],
                        [
                            "hammer",
                            "new"
                        ],
                        [
                            "nails",
                            "new"
                        ]
                    ],
                    "action": "Assembling the pieces of wood using nails and a hammer.",
                    "state_of_main_object": " The cut pieces of wood have been assembled into the structure of a birdhouse."
                },
                {
                    "step": "Painting the Birdhouse",
                    "object": [
                        [
                            "birdhouse",
                            "new",
                            2
                        ],
                        [
                            "paint",
                            "new"
                        ],
                        [
                            "brush",
                            "new"
                        ]
                    ],
                    "action": "Painting the assembled birdhouse with a brush.",
                    "state_of_main_object": " The assembled birdhouse is now painted."
                },
                {
                    "step": "Hanging the Birdhouse",
                    "object": [
                        [
                            "birdhouse",
                            "similar",
                            3
                        ],
                        [
                            "tree",
                            "new"
                        ]
                    ],
                    "action": "Hanging the painted birdhouse on a branch of a tree.",
                    "state_of_main_object": " The painted birdhouse is now hanging on a tree branch."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.1,
                    0.1
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.1
                ],
                [
                    0.1,
                    0.9,
                    1.0,
                    0.5
                ],
                [
                    0.1,
                    0.1,
                    0.5,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making a Vegetable Garden",
            "steps": [
                {
                    "step": "Selecting the Area",
                    "object": [
                        [
                            "garden space",
                            "new"
                        ]
                    ],
                    "action": "Choosing a suitable location in the yard for the vegetable garden.",
                    "state_of_main_object": " A specific location in the yard has been selected for the vegetable garden."
                },
                {
                    "step": "Tilling the Soil",
                    "object": [
                        [
                            "garden space",
                            "similar",
                            1
                        ],
                        [
                            "tiller",
                            "new"
                        ]
                    ],
                    "action": "Using a tiller to turn and aerate the soil in the marked area.",
                    "state_of_main_object": " The marked area in the yard has been aerated and is ready for planting, with loosened soil from the tiller."
                },
                {
                    "step": "Planting Seeds",
                    "object": [
                        [
                            "garden space",
                            "similar",
                            1
                        ],
                        [
                            "seeds",
                            "new"
                        ]
                    ],
                    "action": "Planting various vegetable seeds in the prepared soil.",
                    "state_of_main_object": " The marked area in the yard is now a vegetable garden with seeds planted in aerated soil."
                },
                {
                    "step": "Watering the Garden",
                    "object": [
                        [
                            "garden space",
                            "similar",
                            1
                        ],
                        [
                            "watering can",
                            "new"
                        ]
                    ],
                    "action": "Watering the newly planted seeds with a watering can.",
                    "state_of_main_object": " The prepared soil in the yard is now a vegetable garden with newly planted, watered seeds."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Repotting a Houseplant 4",
            "steps": [
                {
                    "step": "Removing the Plant",
                    "object": [
                        [
                            "old pot",
                            "new"
                        ],
                        [
                            "plant",
                            "new"
                        ]
                    ],
                    "action": "Carefully taking the plant out of the old pot.",
                    "state_of_main_object": " The houseplant has been removed from its original pot and is ready for repotting."
                },
                {
                    "step": "Preparing the New Pot",
                    "object": [
                        [
                            "new pot",
                            "new"
                        ],
                        [
                            "soil",
                            "new"
                        ]
                    ],
                    "action": "Filling the new pot partially with fresh potting soil.",
                    "state_of_main_object": " The plant has been removed from its old pot and is out in the open.\n\nstate 2"
                },
                {
                    "step": "Placing the Plant",
                    "object": [
                        [
                            "new pot",
                            "similar",
                            2
                        ],
                        [
                            "plant",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Positioning the plant into the center of the new pot.",
                    "state_of_main_object": " The houseplant is now centered in the new pot with fresh potting soil partially surrounding it."
                },
                {
                    "step": "Adding Soil and Watering",
                    "object": [
                        [
                            "new pot",
                            "similar",
                            3
                        ],
                        [
                            "soil",
                            "similar",
                            2
                        ],
                        [
                            "watering can",
                            "new"
                        ]
                    ],
                    "action": "Filling the remaining space with soil and watering the plant.",
                    "state_of_main_object": " The houseplant is securely positioned in a new pot filled with fresh soil and watered."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.0,
                    0.4,
                    0.4
                ],
                [
                    0.0,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.4,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.4,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Installing a Drip Irrigation System 5",
            "steps": [
                {
                    "step": "Laying Out the Tubing",
                    "object": [
                        [
                            "garden space",
                            "new"
                        ],
                        [
                            "tubing",
                            "new"
                        ]
                    ],
                    "action": "Unrolling and arranging the drip tubing around plants in the garden.",
                    "state_of_main_object": " The garden features unrolled drip tubing arranged around the plants."
                },
                {
                    "step": "Connecting the Tubing",
                    "object": [
                        [
                            "tubing",
                            "similar",
                            1
                        ],
                        [
                            "connectors",
                            "new"
                        ]
                    ],
                    "action": "Connecting sections of tubing with connectors.",
                    "state_of_main_object": " The drip tubing, arranged around plants in the garden, is now connected through various sections via connectors."
                },
                {
                    "step": "Attaching the Water Source",
                    "object": [
                        [
                            "tubing",
                            "similar",
                            1
                        ],
                        [
                            "water faucet",
                            "new"
                        ]
                    ],
                    "action": "Attaching the main tubing line to a water faucet.",
                    "state_of_main_object": " The drip tubing, now connected in sections, is attached to a water faucet creating a completed irrigation system setup."
                },
                {
                    "step": "Testing the System",
                    "object": [
                        [
                            "tubing",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Turning on the faucet and checking for proper water flow through the tubing.",
                    "state_of_main_object": " The drip irrigation system is now set up and operational with water flowing properly through the connected tubing."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Creating a Compost Bin 6",
            "steps": [
                {
                    "step": "Selecting a Location",
                    "object": [
                        [
                            "yard",
                            "new"
                        ]
                    ],
                    "action": "Choosing a suitable and shaded spot in the yard for the compost bin.",
                    "state_of_main_object": " A shaded spot in the yard has been selected for placing the compost bin."
                },
                {
                    "step": "Assembling the Bin",
                    "object": [
                        [
                            "compost bin kit",
                            "new"
                        ]
                    ],
                    "action": "Assembling the sides of the compost bin from a kit.",
                    "state_of_main_object": " A partially constructed compost bin is in the chosen shaded area of the yard."
                },
                {
                    "step": "Adding Organic Waste",
                    "object": [
                        [
                            "compost bin",
                            "similar",
                            2
                        ],
                        [
                            "organic waste",
                            "new"
                        ]
                    ],
                    "action": "Adding layers of organic waste, such as kitchen scraps and yard debris.",
                    "state_of_main_object": " The compost bin, placed in a shaded spot, is filled with a mixture of organic waste."
                },
                {
                    "step": "Adding Organic Waste",
                    "object": [
                        [
                            "compost bin",
                            "similar",
                            2
                        ],
                        [
                            "organic waste",
                            "new"
                        ]
                    ],
                    "action": "Adding layers of organic waste, such as kitchen scraps and yard debris.",
                    "state_of_main_object": " The assembled compost bin in the yard is now layered with organic waste from kitchen scraps and yard debris."
                },
                {
                    "step": "Maintaining the Compost",
                    "object": [
                        [
                            "compost bin",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Regularly mixing and watering the compost to aid decomposition.",
                    "state_of_main_object": " The compost bin contains moist, mixed organic waste in various stages of decomposition."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.0,
                    0.9,
                    0.9,
                    0.6
                ],
                [
                    0.0,
                    1.0,
                    0.9,
                    0.9,
                    0.6
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9,
                    0.6
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0,
                    0.6
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Setting Up a Patio 7",
            "steps": [
                {
                    "step": "Choosing Patio Furniture",
                    "object": [
                        [
                            "patio space",
                            "new"
                        ],
                        [
                            "furniture",
                            "new"
                        ]
                    ],
                    "action": "Selecting and purchasing suitable outdoor furniture for the patio.",
                    "state_of_main_object": " A range of suitable outdoor furniture has been selected and placed on the patio."
                },
                {
                    "step": "Arranging the Furniture",
                    "object": [
                        [
                            "patio space",
                            "similar",
                            1
                        ],
                        [
                            "furniture",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Arranging the furniture on the patio according to a planned layout.",
                    "state_of_main_object": " The patio is set up with an arranged layout of outdoor furniture."
                },
                {
                    "step": "Adding Decorations",
                    "object": [
                        [
                            "patio space",
                            "similar",
                            1
                        ],
                        [
                            "decorations",
                            "new"
                        ]
                    ],
                    "action": "Decorating the patio with items like plants, lights, and ornaments.",
                    "state_of_main_object": " The patio is fully set, adorned with outdoor furniture, plants, lights, and ornaments."
                },
                {
                    "step": "Final Setup",
                    "object": [
                        [
                            "patio space",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Adding finishing touches such as outdoor cushions and a small fire pit.",
                    "state_of_main_object": " The patio is fully set up with arranged furniture, decorations, and added final touches of outdoor cushions and a fire pit."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Building a Stone Pathway 8",
            "steps": [
                {
                    "step": "Designing the Pathway",
                    "object": [
                        [
                            "yard",
                            "new"
                        ],
                        [
                            "chalk",
                            "new"
                        ]
                    ],
                    "action": "Marking out the pathway design in the yard with chalk.",
                    "state_of_main_object": " The yard contains a chalk outline depicting the future stone pathway's design."
                },
                {
                    "step": "Laying the Foundation",
                    "object": [
                        [
                            "yard",
                            "similar",
                            1
                        ],
                        [
                            "gravel",
                            "new"
                        ]
                    ],
                    "action": "Spreading gravel as the foundation for the stones.",
                    "state_of_main_object": " A pathway area, marked with chalk in the yard, is now covered with a layer of gravel."
                },
                {
                    "step": "Placing the Stones",
                    "object": [
                        [
                            "yard",
                            "similar",
                            1
                        ],
                        [
                            "stones",
                            "new"
                        ]
                    ],
                    "action": "Placing stones along the gravel to form the pathway.",
                    "state_of_main_object": " A pathway made of neatly arranged stones is laid over the gravel foundation in the yard."
                },
                {
                    "step": "Filling Gaps",
                    "object": [
                        [
                            "yard",
                            "similar",
                            1
                        ],
                        [
                            "sand",
                            "new"
                        ]
                    ],
                    "action": "Filling gaps between the stones with sand to secure them in place.",
                    "state_of_main_object": " The pathway is complete, with securely placed stones embedded in gravel, and the gaps between them filled with sand."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making Fresh Orange Juice",
            "steps": [
                {
                    "step": "Selecting Oranges",
                    "object": [
                        [
                            "oranges",
                            "new"
                        ]
                    ],
                    "action": "Choosing fresh, ripe oranges for juicing.",
                    "state_of_main_object": " A selection of fresh, ripe oranges is prepared for juicing."
                },
                {
                    "step": "Cutting the Oranges",
                    "object": [
                        [
                            "oranges",
                            "similar",
                            1
                        ],
                        [
                            "knife",
                            "new"
                        ]
                    ],
                    "action": "Cutting the oranges in half to prepare for juicing.",
                    "state_of_main_object": " The ripe oranges have been cut in half and are ready to be juiced."
                },
                {
                    "step": "Juicing the Oranges",
                    "object": [
                        [
                            "orange halves",
                            "similar",
                            2
                        ],
                        [
                            "juicer",
                            "new"
                        ]
                    ],
                    "action": "Pressing the orange halves on a juicer to extract the juice.",
                    "state_of_main_object": " Fresh orange juice is collected in a container, separate from the discarded orange peels."
                },
                {
                    "step": "Serving the Juice",
                    "object": [
                        [
                            "juice",
                            "similar",
                            3
                        ],
                        [
                            "glass",
                            "new"
                        ]
                    ],
                    "action": "Pouring the fresh orange juice into a glass to serve.",
                    "state_of_main_object": " A glass filled with fresh orange juice is ready to be served."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Preparing a Fruit Salad 10",
            "steps": [
                {
                    "step": "Gathering Ingredients",
                    "object": [
                        [
                            "fruits",
                            "new"
                        ]
                    ],
                    "action": "Collecting various fruits such as apples, bananas, and grapes.",
                    "state_of_main_object": " Different types of fruits like apples, bananas, and grapes are gathered together, ready for preparation."
                },
                {
                    "step": "Cutting the Fruits",
                    "object": [
                        [
                            "fruits",
                            "similar",
                            1
                        ],
                        [
                            "knife",
                            "new"
                        ]
                    ],
                    "action": "Cutting the fruits into small pieces.",
                    "state_of_main_object": " The collected fruits like apples, bananas, and grapes have been chopped into small pieces."
                },
                {
                    "step": "Mixing the Fruits",
                    "object": [
                        [
                            "cut fruits",
                            "similar",
                            2
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Mixing all the cut fruits in a large bowl.",
                    "state_of_main_object": " A large bowl filled with pieces of cut fruits like apples, bananas, and grapes."
                },
                {
                    "step": "Adding Dressing",
                    "object": [
                        [
                            "mixed fruits",
                            "similar",
                            3
                        ],
                        [
                            "dressing",
                            "new"
                        ]
                    ],
                    "action": "Drizzling dressing over the mixed fruits to enhance flavor.",
                    "state_of_main_object": " The large bowl now contains fruit salad with added dressing."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making Lemonade 11",
            "steps": [
                {
                    "step": "Squeezing Lemons",
                    "object": [
                        [
                            "lemons",
                            "new"
                        ],
                        [
                            "juicer",
                            "new"
                        ]
                    ],
                    "action": "Using a hand juicer to squeeze juice from fresh lemons.",
                    "state_of_main_object": " There is fresh lemon juice resulting from the squeezed lemons using a hand juicer."
                },
                {
                    "step": "Mixing with Water and Sugar",
                    "object": [
                        [
                            "lemon juice",
                            "similar",
                            1
                        ],
                        [
                            "sugar",
                            "new"
                        ],
                        [
                            "pitcher",
                            "new"
                        ]
                    ],
                    "action": "Mixing the lemon juice with water and sugar in a pitcher.",
                    "state_of_main_object": " A pitcher is filled with a mixture of freshly squeezed lemon juice, water, and sugar."
                },
                {
                    "step": "Chilling the Lemonade",
                    "object": [
                        [
                            "lemonade mix",
                            "similar",
                            2
                        ],
                        [
                            "refrigerator",
                            "new"
                        ]
                    ],
                    "action": "put the lemonade to refrigerator .",
                    "state_of_main_object": " The lemonade, a mixture of lemon juice, water, and sugar, is cooling in the refrigerator."
                },
                {
                    "step": "Serving Chilled Lemonade",
                    "object": [
                        [
                            "chilled lemonade",
                            "similar",
                            3
                        ],
                        [
                            "glasses",
                            "new"
                        ]
                    ],
                    "action": "Pouring the chilled lemonade into glasses to serve.",
                    "state_of_main_object": " Glasses are filled with chilled lemonade, ready to be consumed."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Preparing Iced Tea 12",
            "steps": [
                {
                    "step": "Boiling Water",
                    "object": [
                        [
                            "kettle",
                            "new"
                        ]
                    ],
                    "action": "Boiling water in a kettle.",
                    "state_of_main_object": " A kettle containing boiling water sits on the stove."
                },
                {
                    "step": "Steeping the Tea",
                    "object": [
                        [
                            "tea bags",
                            "new"
                        ],
                        [
                            "hot water",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Steeping tea bags in the hot water to brew strong tea.",
                    "state_of_main_object": " A kettle containing brewed, strong tea is set aside to cool."
                },
                {
                    "step": "Cooling the Tea",
                    "object": [
                        [
                            "brewed tea",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Allowing the tea to cool down to room temperature.",
                    "state_of_main_object": " The kettle contains cooled, brewed tea at room temperature."
                },
                {
                    "step": "Serving with Ice",
                    "object": [
                        [
                            "cooled tea",
                            "similar",
                            3
                        ],
                        [
                            "ice",
                            "new"
                        ],
                        [
                            "glasses",
                            "new"
                        ]
                    ],
                    "action": "Pouring the cooled tea over ice in glasses to serve.",
                    "state_of_main_object": " Glasses filled with iced tea are ready to be served."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making Pomegranate Juice 13",
            "steps": [
                {
                    "step": "Cutting the Pomegranate",
                    "object": [
                        [
                            "pomegranate",
                            "new"
                        ],
                        [
                            "knife",
                            "new"
                        ]
                    ],
                    "action": "Cutting the pomegranate into halves to expose the seeds.",
                    "state_of_main_object": " The pomegranate has been halved, revealing the seeds inside."
                },
                {
                    "step": "Extracting the Seeds",
                    "object": [
                        [
                            "pomegranate halves",
                            "similar",
                            1
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Removing the seeds from the halves and collecting them in a bowl.",
                    "state_of_main_object": " There is a bowl filled with seeds removed from halved pomegranates."
                },
                {
                    "step": "Juicing the Seeds",
                    "object": [
                        [
                            "pomegranate seeds",
                            "similar",
                            2
                        ],
                        [
                            "juicer",
                            "new"
                        ]
                    ],
                    "action": "Pressing the seeds in a juicer to extract the juice.",
                    "state_of_main_object": " The bowl of seeds is now transformed into a container full of fresh pomegranate juice."
                },
                {
                    "step": "Serving the Juice",
                    "object": [
                        [
                            "pomegranate juice",
                            "similar",
                            3
                        ],
                        [
                            "glass",
                            "new"
                        ]
                    ],
                    "action": "Pouring the juice into a glass and adding ice if desired.",
                    "state_of_main_object": " There is a glass of fresh, possibly iced, pomegranate juice ready to be consumed."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Preparing a Berry Parfait 14",
            "steps": [
                {
                    "step": "Layering Yogurt",
                    "object": [
                        [
                            "parfait glass",
                            "new"
                        ],
                        [
                            "yogurt",
                            "new"
                        ]
                    ],
                    "action": "Scooping yogurt into a tall parfait glass, creating the first layer.",
                    "state_of_main_object": " A tall parfait glass contains a layer of yogurt."
                },
                {
                    "step": "Adding Berries",
                    "object": [
                        [
                            "parfait glass",
                            "similar",
                            1
                        ],
                        [
                            "berries",
                            "new"
                        ]
                    ],
                    "action": "Adding a layer of fresh mixed berries on top of the yogurt.",
                    "state_of_main_object": " A tall parfait glass now contains a layer of yogurt topped with a layer of fresh mixed berries."
                },
                {
                    "step": "Adding Granola",
                    "object": [
                        [
                            "parfait glass",
                            "similar",
                            1
                        ],
                        [
                            "granola",
                            "new"
                        ]
                    ],
                    "action": "Sprinkling granola over the berries to add a crunchy texture.",
                    "state_of_main_object": " In the tall parfait glass, there are layers of yogurt, fresh mixed berries, and a sprinkling of granola on top."
                },
                {
                    "step": "Garnishing and Serving",
                    "object": [
                        [
                            "parfait glass",
                            "similar",
                            3
                        ],
                        [
                            "mint leaves",
                            "new"
                        ]
                    ],
                    "action": "Garnishing the top with mint leaves and perhaps a few more berries before serving.",
                    "state_of_main_object": " A gourmet Berry Parfait is standing ready, characterized by layers of yogurt, mixed berries, and granola, topped with mint leaves and additional berries as garnish."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Cleaning and Organizing a Closet",
            "steps": [
                {
                    "step": "Emptying the Closet",
                    "object": [
                        [
                            "closet",
                            "new"
                        ]
                    ],
                    "action": "Removing all items from the closet to assess what is stored.",
                    "state_of_main_object": " The closet is empty, and all the items previously stored in it are now visible and ready for assessment."
                },
                {
                    "step": "Sorting the Items",
                    "object": [
                        [
                            "clothing",
                            "new"
                        ],
                        [
                            "boxes",
                            "new"
                        ]
                    ],
                    "action": "Sorting the items into categories like keep, donate, and discard.",
                    "state_of_main_object": " The items from the closet are arranged into separate piles based on categories - keep, donate, discard."
                },
                {
                    "step": "Cleaning the Closet",
                    "object": [
                        [
                            "closet",
                            "similar",
                            1
                        ],
                        [
                            "cleaning supplies",
                            "new"
                        ]
                    ],
                    "action": "Cleaning the interior of the closet with appropriate cleaning supplies.",
                    "state_of_main_object": " The interior of the closet is empty and clean, while groups of items to keep, donate, and discard are carefully separated outside."
                },
                {
                    "step": "Reorganizing the Closet",
                    "object": [
                        [
                            "closet",
                            "similar",
                            1
                        ],
                        [
                            "organized clothing",
                            "new"
                        ]
                    ],
                    "action": "Reorganizing and placing items back into the closet in an orderly fashion.",
                    "state_of_main_object": " The closet is now clean and organized, with items neatly stored in their respective places."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.0,
                    0.9,
                    0.9
                ],
                [
                    0.0,
                    1.0,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    0.0,
                    1.0,
                    0.9
                ],
                [
                    0.9,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Vacuuming a Living Room",
            "steps": [
                {
                    "step": "Preparing the Area",
                    "object": [
                        [
                            "living room",
                            "new"
                        ]
                    ],
                    "action": "Removing small items and clutter from the floor to prepare for vacuuming.",
                    "state_of_main_object": " The living room floor is clear of small items and clutter, ready for vacuuming."
                },
                {
                    "step": "Vacuuming the Carpet",
                    "object": [
                        [
                            "vacuum cleaner",
                            "new"
                        ],
                        [
                            "carpet",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Using the vacuum cleaner to clean the carpet thoroughly.",
                    "state_of_main_object": " The living room's carpet is now clean and free of dirt and dust."
                },
                {
                    "step": "Vacuuming Under Furniture",
                    "object": [
                        [
                            "vacuum cleaner",
                            "similar",
                            2
                        ],
                        [
                            "furniture",
                            "new"
                        ]
                    ],
                    "action": "Moving light furniture slightly to vacuum underneath and behind them.",
                    "state_of_main_object": " A clean living room with a neat carpet and dust-free furniture surroundings."
                },
                {
                    "step": "Replacing Furniture and Items",
                    "object": [
                        [
                            "furniture",
                            "similar",
                            3
                        ],
                        [
                            "living room",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Putting furniture and any moved items back into their original positions.",
                    "state_of_main_object": " The living room is tidy, with all furniture and items returned to their places and the carpet thoroughly vacuumed."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Fixing a Leaky Faucet 17",
            "steps": [
                {
                    "step": "Turning Off Water Supply",
                    "object": [
                        [
                            "faucet",
                            "new"
                        ],
                        [
                            "valve",
                            "new"
                        ]
                    ],
                    "action": "Shutting off the water supply valve under the sink to stop water flow to the faucet.",
                    "state_of_main_object": " The water supply valve under the sink is in the off position, preventing water flow to the faucet."
                },
                {
                    "step": "Disassembling the Faucet",
                    "object": [
                        [
                            "faucet",
                            "similar",
                            1
                        ],
                        [
                            "tools",
                            "new"
                        ]
                    ],
                    "action": "Using tools to remove the faucet handle and access the internal components.",
                    "state_of_main_object": " The faucet handle has been removed, exposing the internal components of the faucet for repair."
                },
                {
                    "step": "Replacing the Washer",
                    "object": [
                        [
                            "faucet",
                            "similar",
                            2
                        ],
                        [
                            "washer",
                            "new"
                        ]
                    ],
                    "action": "Replacing the old washer with a new one to fix the leak.",
                    "state_of_main_object": " The faucet handle has been opened, revealing the replaced, new washer, set to prevent further leakage."
                },
                {
                    "step": "Reassembling the Faucet",
                    "object": [
                        [
                            "faucet",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Reassembling the faucet and turning the water supply back on to check for leaks.",
                    "state_of_main_object": " The faucet, now put back together, is receiving water and the potential leak should be fixed."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Feeding a Dog 18",
            "steps": [
                {
                    "step": "Preparing Dog Food",
                    "object": [
                        [
                            "dog food",
                            "new"
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Measuring the correct amount of dog food and placing it into the bowl.",
                    "state_of_main_object": " A bowl is filled with the measured amount of dog food."
                },
                {
                    "step": "Placing the Food",
                    "object": [
                        [
                            "bowl",
                            "similar",
                            1
                        ],
                        [
                            "feeding area",
                            "new"
                        ]
                    ],
                    "action": "Setting the bowl of dog food down in the feeding area.",
                    "state_of_main_object": " A bowl filled with the correct amount of dog food is in the dog's feeding area."
                },
                {
                    "step": "Adding Water",
                    "object": [
                        [
                            "water",
                            "new"
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Filling a second bowl with fresh water and placing it next to the food.",
                    "state_of_main_object": " In the feeding area, there is a bowl filled with dog food and another bowl filled with fresh water."
                },
                {
                    "step": "Calling the Dog",
                    "object": [
                        [
                            "dog",
                            "new"
                        ]
                    ],
                    "action": "Calling the dog over to eat and drink.",
                    "state_of_main_object": " The dog is now at its feeding area, where a bowl of food and a bowl of fresh water await."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.9,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Watering Indoor Plants 19",
            "steps": [
                {
                    "step": "Checking Soil Moisture",
                    "object": [
                        [
                            "plant",
                            "new"
                        ],
                        [
                            "soil",
                            "new"
                        ]
                    ],
                    "action": "Feeling the soil with fingers to check the plant in pot.",
                    "state_of_main_object": " A hand has been introduced into the pot, with its fingers touching the pot's soil to assess the plant's watering needs."
                },
                {
                    "step": "Filling the Watering Can",
                    "object": [
                        [
                            "watering can",
                            "new"
                        ],
                        [
                            "water tap",
                            "new"
                        ]
                    ],
                    "action": "Filling the watering can with water.",
                    "state_of_main_object": " The fingers touch the soil in the pot for moisture checking while the watering can is ready and filled with water."
                },
                {
                    "step": "Watering the Plant",
                    "object": [
                        [
                            "plant",
                            "similar",
                            1
                        ],
                        [
                            "watering can",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Gently pouring water from the can into the plant's soil until sufficiently moist.",
                    "state_of_main_object": " The plant in the pot now has moist soil, after being watered from the watering can."
                },
                {
                    "step": "Draining Excess Water",
                    "object": [
                        [
                            "plant",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Allowing any excess water to drain away from the plant's pot.",
                    "state_of_main_object": " The indoor plant's soil is well-hydrated and excess water is drained, leaving the plant properly watered."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Pruning Flowering Plants",
            "steps": [
                {
                    "step": "Selecting the Right Tools",
                    "object": [
                        [
                            "pruning shears",
                            "new"
                        ]
                    ],
                    "action": "Choosing sharp pruning shears suitable for cutting plant stems.",
                    "state_of_main_object": " Sharp pruning shears, ready for use, are the main objects present."
                },
                {
                    "step": "Identifying Dead Flowers",
                    "object": [
                        [
                            "flowering plant",
                            "new"
                        ]
                    ],
                    "action": "Inspecting the plant to identify and select dead or fading flowers for removal.",
                    "state_of_main_object": " The flowering plant is ready for pruning, with its dead or fading flowers clearly identified."
                },
                {
                    "step": "Pruning the Flowers",
                    "object": [
                        [
                            "flowering plant",
                            "similar",
                            2
                        ],
                        [
                            "pruning shears",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Carefully cutting away dead flowers at their stems to promote new growth.",
                    "state_of_main_object": " The plant appears tidier and healthier, with dead flowers removed and space for new growth."
                },
                {
                    "step": "Cleaning Up",
                    "object": [
                        [
                            "flowering plant",
                            "similar",
                            3
                        ],
                        [
                            "pruned flowers",
                            "new"
                        ]
                    ],
                    "action": "Collecting and disposing of the pruned flowers and any fallen leaves.",
                    "state_of_main_object": " The flowering plant is pruned, clear of dead flowers and fallen leaves, and ready for nurturing new growth."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Planting Flower Bulbs 21",
            "steps": [
                {
                    "step": "Preparing the Soil",
                    "object": [
                        [
                            "garden soil",
                            "new"
                        ],
                        [
                            "trowel",
                            "new"
                        ]
                    ],
                    "action": "Using a trowel to loosen the soil and prepare it for planting bulbs.",
                    "state_of_main_object": " The soil is disturbed and prepared, ready to receive flower bulbs."
                },
                {
                    "step": "Planting the Bulbs",
                    "object": [
                        [
                            "flower bulbs",
                            "new"
                        ],
                        [
                            "garden soil",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Placing flower bulbs at the correct depth into the prepared soil, spaced appropriately.",
                    "state_of_main_object": " The prepared soil now has flower bulbs planted at the right depth and appropriately spaced."
                },
                {
                    "step": "Covering the Bulbs",
                    "object": [
                        [
                            "flower bulbs",
                            "similar",
                            2
                        ],
                        [
                            "garden soil",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Covering the bulbs with soil and patting down gently to secure them.",
                    "state_of_main_object": " The flower bulbs are planted into the soil and secured, ready for growth."
                },
                {
                    "step": "Watering the Planted Bulbs",
                    "object": [
                        [
                            "planted bulbs",
                            "similar",
                            3
                        ],
                        [
                            "watering can",
                            "new"
                        ]
                    ],
                    "action": "Watering the area where the bulbs have been planted.",
                    "state_of_main_object": " The soil above the planted flower bulbs is moistened after watering."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Harvesting Tomatoes 22",
            "steps": [
                {
                    "step": "Checking Ripeness",
                    "object": [
                        [
                            "tomato plant",
                            "new"
                        ]
                    ],
                    "action": "Inspecting tomatoes on the plant to determine if they are ripe, looking for a deep red color.",
                    "state_of_main_object": " The tomato plant bears tomatoes, some of which show a deep red color, indicating they are ripe."
                },
                {
                    "step": "Picking Tomatoes",
                    "object": [
                        [
                            "ripe tomatoes",
                            "similar",
                            1
                        ],
                        [
                            "hands",
                            "new"
                        ]
                    ],
                    "action": "Gently pulling ripe tomatoes from the vine, supporting the stem with one hand and twisting the fruit with the other.",
                    "state_of_main_object": " The tomato plant is slightly less laden, with some deep red tomatoes now removed from the vine."
                },
                {
                    "step": "Collecting the Tomatoes",
                    "object": [
                        [
                            "harvested tomatoes",
                            "similar",
                            2
                        ],
                        [
                            "basket",
                            "new"
                        ]
                    ],
                    "action": "Placing the picked tomatoes gently into a basket to avoid bruising.",
                    "state_of_main_object": " A basket contains freshly picked, ripe tomatoes from the plant."
                },
                {
                    "step": "Storing Tomatoes",
                    "object": [
                        [
                            "basket of tomatoes",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Storing the basket in a cool, dry place to preserve freshness until use.",
                    "state_of_main_object": " The basket filled with harvested tomatoes is safely stored in a cool, dry area, preserving their freshness."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Harvesting Apples 23",
            "steps": [
                {
                    "step": "Checking Apple Ripeness",
                    "object": [
                        [
                            "apple tree",
                            "new"
                        ]
                    ],
                    "action": "Examining apples on the tree for maturity, looking for firmness and full color.",
                    "state_of_main_object": " The tree is populated with apples showing signs of maturity, characterised by firm texture and full color."
                },
                {
                    "step": "Picking Apples",
                    "object": [
                        [
                            "ripe apples",
                            "similar",
                            1
                        ],
                        [
                            "ladder",
                            "new"
                        ]
                    ],
                    "action": "Using a ladder to reach high branches and carefully twisting apples off the tree.",
                    "state_of_main_object": " The apple tree has fewer apples, and some ripe apples now lay nearby, carefully plucked from the higher branches."
                },
                {
                    "step": "Gathering Apples",
                    "object": [
                        [
                            "picked apples",
                            "similar",
                            2
                        ],
                        [
                            "basket",
                            "new"
                        ]
                    ],
                    "action": "Placing the picked apples into a basket, taking care not to drop or bruise them.",
                    "state_of_main_object": " A basket is filled with freshly picked apples, which are firm, colorful, and free from bruises."
                },
                {
                    "step": "Storing Apples",
                    "object": [
                        [
                            "basket of apples",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Keeping the apples in a cool, ventilated area to extend their shelf life.",
                    "state_of_main_object": " The apples are now stored in a cool, ventilated area, ready for long-term preservation."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Harvesting Strawberries 24",
            "steps": [
                {
                    "step": "Identifying Ready Strawberries",
                    "object": [
                        [
                            "strawberry plant",
                            "new"
                        ]
                    ],
                    "action": "Looking for strawberries that are fully red without white or green spots, indicating they are ready to pick.",
                    "state_of_main_object": " The focus is on ripe, fully red strawberries, standing out from others without white or green spots."
                },
                {
                    "step": "Plucking Strawberries",
                    "object": [
                        [
                            "ripe strawberries",
                            "similar",
                            1
                        ],
                        [
                            "hands",
                            "new"
                        ]
                    ],
                    "action": "Carefully detaching ripe strawberries from the plant by pinching the stem between fingers.",
                    "state_of_main_object": " Ripe, fully red strawberries are being collected and removed from the plant."
                },
                {
                    "step": "Collecting Strawberries",
                    "object": [
                        [
                            "harvested strawberries",
                            "similar",
                            2
                        ],
                        [
                            "basket",
                            "new"
                        ]
                    ],
                    "action": "Placing the plucked strawberries into a basket gently to avoid squashing.",
                    "state_of_main_object": " A basket is now filled with fresh, carefully picked strawberries."
                },
                {
                    "step": "Storing Strawberries",
                    "object": [
                        [
                            "basket of strawberries",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Storing the basket in a cool place or refrigerating to maintain freshness.",
                    "state_of_main_object": " A basket filled with freshly picked strawberries is now stored in a cool place or a refrigerator to remain fresh."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Harvesting Herbs",
            "steps": [
                {
                    "step": "Selecting Mature Herbs",
                    "object": [
                        [
                            "herb garden",
                            "new"
                        ]
                    ],
                    "action": "Identifying mature herbs ready for harvest, such as basil or mint, which have full, lush leaves.",
                    "state_of_main_object": " Mature herbs, like basil or mint, with full and lush leaves are identified and ready for harvesting."
                },
                {
                    "step": "Cutting Herbs",
                    "object": [
                        [
                            "mature herbs",
                            "similar",
                            1
                        ],
                        [
                            "scissors",
                            "new"
                        ]
                    ],
                    "action": "Using scissors to cut the herbs cleanly near the stem without damaging the plant.",
                    "state_of_main_object": " The herbs have been harvested off of the plants, leaving the plants undamaged."
                },
                {
                    "step": "Gathering Cut Herbs",
                    "object": [
                        [
                            "cut herbs",
                            "similar",
                            2
                        ],
                        [
                            "basket",
                            "new"
                        ]
                    ],
                    "action": "Collecting the cut herbs and placing them gently into a basket.",
                    "state_of_main_object": " A basket is filled with freshly cut herbs, while the herb plants are slightly trimmed but still healthy."
                },
                {
                    "step": "Storing Herbs",
                    "object": [
                        [
                            "basket of herbs",
                            "similar",
                            3
                        ]
                    ],
                    "action": "Storing the herbs in a cool, dry place or using them fresh to ensure flavor is preserved.",
                    "state_of_main_object": " The mature herbs are harvested and placed either in storage in a cool, dry place or used immediately, thereby preserving their flavor."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making a Grilled Cheese Sandwich 26",
            "steps": [
                {
                    "step": "Preparing Ingredients",
                    "object": [
                        [
                            "bread",
                            "new"
                        ],
                        [
                            "cheese",
                            "new"
                        ],
                        [
                            "butter",
                            "new"
                        ]
                    ],
                    "action": "Gathering slices of bread, cheese, and butter.",
                    "state_of_main_object": "Ingredients are ready on the countertop."
                },
                {
                    "step": "Buttering the Bread",
                    "object": [
                        [
                            "bread",
                            "similar",
                            1
                        ],
                        [
                            "butter",
                            "similar",
                            1
                        ],
                        [
                            "butter knife",
                            "new"
                        ]
                    ],
                    "action": "Spreading butter on one side of each bread slice.",
                    "state_of_main_object": "Bread slices are buttered on one side."
                },
                {
                    "step": "Assembling the Sandwich",
                    "object": [
                        [
                            "bread",
                            "similar",
                            1
                        ],
                        [
                            "cheese",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Placing cheese between two slices of bread with the buttered sides facing out.",
                    "state_of_main_object": "The sandwich is assembled and ready to grill."
                },
                {
                    "step": "Grilling the Sandwich",
                    "object": [
                        [
                            "sandwich",
                            "similar",
                            3
                        ],
                        [
                            "pan",
                            "new"
                        ]
                    ],
                    "action": "Cooking the sandwich in a pan over medium heat until the bread is golden and the cheese is melted.",
                    "state_of_main_object": "The grilled cheese sandwich is golden and ready to serve."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making Scrambled Eggs 27",
            "steps": [
                {
                    "step": "Cracking Eggs",
                    "object": [
                        [
                            "eggs",
                            "new"
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Cracking eggs into a bowl.",
                    "state_of_main_object": "Eggs are cracked and in the bowl."
                },
                {
                    "step": "Whisking Eggs",
                    "object": [
                        [
                            "eggs",
                            "similar",
                            1
                        ],
                        [
                            "whisk",
                            "new"
                        ]
                    ],
                    "action": "Using a whisk to beat the eggs until they are smooth.",
                    "state_of_main_object": "The eggs are well-beaten and ready to cook."
                },
                {
                    "step": "Cooking Eggs",
                    "object": [
                        [
                            "beaten eggs",
                            "similar",
                            2
                        ],
                        [
                            "pan",
                            "new"
                        ]
                    ],
                    "action": "Pouring the eggs into a heated pan and stirring gently until they set and are fully cooked.",
                    "state_of_main_object": "The eggs are scrambled and cooked."
                },
                {
                    "step": "Serving the Eggs",
                    "object": [
                        [
                            "scrambled eggs",
                            "similar",
                            3
                        ],
                        [
                            "plate",
                            "new"
                        ]
                    ],
                    "action": "Scooping the scrambled eggs onto a plate.",
                    "state_of_main_object": "The scrambled eggs are plated and ready to eat."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Preparing Instant Ramen 28",
            "steps": [
                {
                    "step": "Boiling Water",
                    "object": [
                        [
                            "pot",
                            "new"
                        ],
                        [
                            "water",
                            "new"
                        ]
                    ],
                    "action": "Filling a pot with water and bringing it to a boil.",
                    "state_of_main_object": "Water is boiling in the pot."
                },
                {
                    "step": "Adding Noodles",
                    "object": [
                        [
                            "ramen noodles",
                            "new"
                        ],
                        [
                            "boiling water",
                            "similar",
                            1
                        ]
                    ],
                    "action": "Adding instant ramen noodles to the boiling water.",
                    "state_of_main_object": "Noodles are cooking in the boiling water."
                },
                {
                    "step": "Adding Flavor Packet",
                    "object": [
                        [
                            "flavor packet",
                            "new"
                        ],
                        [
                            "pot with noodles",
                            "similar",
                            2
                        ]
                    ],
                    "action": "Stirring in the flavor packet into the pot with the noodles.",
                    "state_of_main_object": "The flavor packet is mixed in, seasoning the noodles."
                },
                {
                    "step": "Serving the Ramen",
                    "object": [
                        [
                            "cooked ramen",
                            "similar",
                            3
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Pouring the cooked ramen into a bowl to serve.",
                    "state_of_main_object": "The ramen is ready to eat, served hot."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        },
        {
            "goal": "Making a Simple Salad 29",
            "steps": [
                {
                    "step": "Washing Vegetables",
                    "object": [
                        [
                            "lettuce",
                            "new"
                        ],
                        [
                            "tomatoes",
                            "new"
                        ],
                        [
                            "sink",
                            "new"
                        ],
                        [
                            "water",
                            "new"
                        ]
                    ],
                    "action": "Rinsing lettuce and tomatoes under cold water in the sink to clean them.",
                    "state_of_main_object": "Vegetables are washed and clean."
                },
                {
                    "step": "Chopping Vegetables",
                    "object": [
                        [
                            "lettuce",
                            "similar",
                            1
                        ],
                        [
                            "tomatoes",
                            "similar",
                            1
                        ],
                        [
                            "knife",
                            "new"
                        ],
                        [
                            "cutting board",
                            "new"
                        ]
                    ],
                    "action": "Chopping lettuce and slicing tomatoes on a cutting board.",
                    "state_of_main_object": "Lettuce is chopped and tomatoes are sliced, ready for the salad."
                },
                {
                    "step": "Assembling the Salad",
                    "object": [
                        [
                            "chopped lettuce",
                            "similar",
                            2
                        ],
                        [
                            "sliced tomatoes",
                            "similar",
                            2
                        ],
                        [
                            "bowl",
                            "new"
                        ]
                    ],
                    "action": "Combining the chopped lettuce and sliced tomatoes in a salad bowl.",
                    "state_of_main_object": "The ingredients are mixed in the bowl, creating the salad."
                },
                {
                    "step": "Adding Dressing and Serving",
                    "object": [
                        [
                            "salad",
                            "similar",
                            3
                        ],
                        [
                            "salad dressing",
                            "new"
                        ]
                    ],
                    "action": "Drizzling salad dressing over the salad and tossing to coat evenly.",
                    "state_of_main_object": "Salad is dressed and ready to serve."
                }
            ],
            "relation": [
                [
                    1.0,
                    0.9,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    1.0,
                    0.9,
                    0.0
                ],
                [
                    0.0,
                    0.9,
                    1.0,
                    0.9
                ],
                [
                    0.0,
                    0.0,
                    0.9,
                    1.0
                ]
            ]
        }
    ]
},
    "gpt_2": {
        "goals": [
            {
                "goal": "Decorating a Cake",
                "steps": [
                    {
                        "step": "Setting the Cake on a Platter",
                        "object": [
                            [
                                "cake",
                                "new"
                            ],
                            [
                                "platter",
                                "new"
                            ]
                        ],
                        "action": "Set the baked cake on a platter.",
                        "state_of_main_object": " The baked cake is positioned on a platter."
                    },
                    {
                        "step": "Applying Icing",
                        "object": [
                            [
                                "cake",
                                "similar shape",
                                1
                            ],
                            [
                                "spoon",
                                "new"
                            ]
                        ],
                        "action": "Person using a spoon to place some icing on the top of the cake.",
                        "state_of_main_object": " The baked cake is on a platter, with a layer of icing on top."
                    },
                    {
                        "step": "Adding Sprinkles and Marzipan Models",
                        "object": [
                            [
                                "cake",
                                "similar shape",
                                2
                            ],
                            [
                                "sprinkles",
                                "new"
                            ],
                            [
                                "marzipan models",
                                "new"
                            ]
                        ],
                        "action": "A person adds sprinkles, marzipan models.",
                        "state_of_main_object": " The cake is now beautifully decorated with icing, sprinkles, and marzipan models."
                    },
                    {
                        "step": "Placing Plastic Characters",
                        "object": [
                            [
                                "cake",
                                "similar shape",
                                3
                            ],
                            [
                                "plastic characters",
                                "new"
                            ]
                        ],
                        "action": "A person put plastic characters on top of the cake.",
                        "state_of_main_object": " The cake on the platter is fully decorated with icing, sprinkles, marzipan models, and plastic characters."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.4
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Raspberry Puree",
                "steps": [
                    {
                        "step": "Combining Ingredients",
                        "object": [
                            [
                                "raspberries",
                                "new"
                            ],
                            [
                                "sugar",
                                "new"
                            ],
                            [
                                "lemon juice",
                                "new"
                            ],
                            [
                                "saucepan",
                                "new"
                            ]
                        ],
                        "action": "Combine raspberries, sugar, and lemon juice in a saucepan.",
                        "state_of_main_object": " A saucepan is filled with a combination of raspberries, sugar, and lemon juice."
                    },
                    {
                        "step": "Cooking the Mixture",
                        "object": [
                            [
                                "raspberry mixture",
                                "similar shape",
                                1
                            ],
                            [
                                "saucepan",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Heat the raspberry mixture, Stir frequently.",
                        "state_of_main_object": " The saucepan now contains a warm, well-mixed raspberry blend."
                    },
                    {
                        "step": "Straining the Mixture",
                        "object": [
                            [
                                "raspberry mixture",
                                "similar shape",
                                2
                            ],
                            [
                                "fine mesh strainer",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Pour the hot raspberry mixture through a fine mesh strainer into a bowl.",
                        "state_of_main_object": " A bowl filled with smooth raspberry puree, with the solid particles separated out using a fine mesh strainer."
                    },
                    {
                        "step": "Refrigerating the Puree",
                        "object": [
                            [
                                "raspberry puree",
                                "similar texture",
                                3
                            ]
                        ],
                        "action": "Refrigerate the raspberry puree to allow it to thicken.",
                        "state_of_main_object": " The bowl of raspberry puree is chilling in the refrigerator, thickening as it cools."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.3,
                        0.1
                    ],
                    [
                        0.9,
                        1.0,
                        0.3,
                        0.1
                    ],
                    [
                        0.3,
                        0.3,
                        1.0,
                        0.9
                    ],
                    [
                        0.1,
                        0.1,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cleaning a Shoe",
                "steps": [
                    {
                        "step": "Dusting the Shoe",
                        "object": [
                            [
                                "shoe",
                                "new"
                            ],
                            [
                                "brush",
                                "new"
                            ]
                        ],
                        "action": "Use a soft and dry bristle brush to dust the shoe.",
                        "state_of_main_object": " The shoe is dust-free due to brushing with a soft, dry bristle brush."
                    },
                    {
                        "step": "Preparing the Water",
                        "object": [
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Pour cold water into a bowl.",
                        "state_of_main_object": " The shoe is free of dust after brushing.\nState 2"
                    },
                    {
                        "step": "Adding Detergent",
                        "object": [
                            [
                                "detergent",
                                "new"
                            ],
                            [
                                "bowl",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Add a few squirts of mild detergent to the water.",
                        "state_of_main_object": " A bowl filled with cold water mixed with mild detergent is ready for cleaning the shoe."
                    },
                    {
                        "step": "Cleaning the Shoe with Solution",
                        "object": [
                            [
                                "shoe",
                                "similar shape",
                                1
                            ],
                            [
                                "brush",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Use the brush to apply the solution to the shoe.",
                        "state_of_main_object": " The shoe is wet and covered with a soapy solution."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.1,
                        0.1,
                        0.9
                    ],
                    [
                        0.1,
                        1.0,
                        0.9,
                        0.1
                    ],
                    [
                        0.1,
                        0.9,
                        1.0,
                        0.1
                    ],
                    [
                        0.9,
                        0.1,
                        0.1,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cleaning a Glass Dish",
                "steps": [
                    {
                        "step": "Coating with Soap and Baking Soda",
                        "object": [
                            [
                                "glass dish",
                                "new"
                            ],
                            [
                                "liquid soap",
                                "new"
                            ],
                            [
                                "baking soda",
                                "new"
                            ]
                        ],
                        "action": "Coat the bottom of the glass dish with a liquid soap and baking soda.",
                        "state_of_main_object": " The bottom of the glass dish is covered with a mixture of liquid soap and baking soda."
                    },
                    {
                        "step": "Filling with Hot Water",
                        "object": [
                            [
                                "glass dish",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Fill the dish with hot water.",
                        "state_of_main_object": " The glass dish is now filled with hot water, soap, and baking soda."
                    },
                    {
                        "step": "Pouring Out Sudsy Water",
                        "object": [
                            [
                                "glass dish",
                                "similar shape",
                                2
                            ]
                        ],
                        "action": "Pour the dirty, sudsy water in the dish to sink.",
                        "state_of_main_object": " The glass dish is now empty, with some soap and baking soda residue remaining."
                    },
                    {
                        "step": "Scrubbing Grease Spots",
                        "object": [
                            [
                                "glass dish",
                                "similar shape",
                                3
                            ],
                            [
                                "sponge",
                                "new"
                            ]
                        ],
                        "action": "Using a clean, abrasive sponge, start rubbing over the stubborn grease spots.",
                        "state_of_main_object": " The glass dish is now wet and clean with no stubborn grease spots."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.8,
                        0.7
                    ],
                    [
                        0.9,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Oatmeal",
                "steps": [
                    {
                        "step": "Boiling Milk",
                        "object": [
                            [
                                "milk",
                                "new"
                            ],
                            [
                                "saucepan",
                                "new"
                            ]
                        ],
                        "action": "Boil milk on the stovetop.",
                        "state_of_main_object": " A pot of milk is heated and boiling on the stove."
                    },
                    {
                        "step": "Adding Oats",
                        "object": [
                            [
                                "mixture",
                                "similar shape",
                                1
                            ],
                            [
                                "rolled oats",
                                "new"
                            ]
                        ],
                        "action": "Add rolled oats into the milk.",
                        "state_of_main_object": " The milk in the pot on the stove now has rolled oats added to it."
                    },
                    {
                        "step": "Stirring the Mixture",
                        "object": [
                            [
                                "mixture",
                                "similar shape",
                                2
                            ]
                        ],
                        "action": "Stir the oats approximately every minute.",
                        "state_of_main_object": " The milk heated on the stovetop is thickening with the stirred-in rolled oats."
                    },
                    {
                        "step": "Removing from Heat",
                        "object": [
                            [
                                "mixture",
                                "similar texture",
                                3
                            ],
                            [
                                "saucepan",
                                "similar",
                                1
                            ],
                            [
                                "wooden chopping board",
                                "new"
                            ]
                        ],
                        "action": "Remove the saucepan of oats from the heat and place it on a wooden chopping board.",
                        "state_of_main_object": " There is a saucepan containing cooked oats on a wooden chopping board, removed from the heat source."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.8,
                        0.7
                    ],
                    [
                        0.9,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Growing Tomatoes",
                "steps": [
                    {
                        "step": "Feeding and Watering Tomato Plants",
                        "object": [
                            [
                                "watering can",
                                "new"
                            ],
                            [
                                "tomato plant",
                                "new"
                            ]
                        ],
                        "action": "A person pouring water mixed with fertilizer from a watering can onto the base of a tomato plant.",
                        "state_of_main_object": " The base of a tomato plant is wet, having been doused with fertilizer-enriched water."
                    },
                    {
                        "step": "Plucking Suckers from Tomato Plant",
                        "object": [
                            [
                                "tomato plant",
                                "similar",
                                2
                            ],
                            [
                                "suckers",
                                "new"
                            ]
                        ],
                        "action": "A person using their fingers to gently remove small suckers that appear between the branches of the tomato plant.",
                        "state_of_main_object": " The tomato plant is well-hydrated and fertilized, with all the small suckers removed from between its branches."
                    },
                    {
                        "step": "Harvesting Tomatoes",
                        "object": [
                            [
                                "tomato plant",
                                "similar",
                                2
                            ],
                            [
                                "tomato",
                                "new"
                            ]
                        ],
                        "action": "A person gently twisting the ripe tomatoes to harvest them without pulling at the vine.",
                        "state_of_main_object": " The tomato plant is now pruned and has fewer ripe tomatoes, remaining with immature ones still on the vine."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.9,
                        1.0,
                        0.8
                    ],
                    [
                        0.8,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Bathing a Dog",
                "steps": [
                    {
                        "step": "Wetting the Dog's Fur",
                        "object": [
                            [
                                "shower head",
                                "new"
                            ],
                            [
                                "dog",
                                "new"
                            ],
                            [
                                "bowl",
                                "optional"
                            ]
                        ],
                        "action": "A person using a shower head to gently spray or a bowl to gently pour water onto the dog\u2019s fur.",
                        "state_of_main_object": " The dog is standing wet with water sprayed or poured onto its fur."
                    },
                    {
                        "step": "Applying Shampoo to the Dog's Face",
                        "object": [
                            [
                                "wet cloth",
                                "new"
                            ],
                            [
                                "dog",
                                "similar",
                                1
                            ]
                        ],
                        "action": "A person massaging dog shampoo into the dog\u2019s facial fur using the corner of a wet cloth.",
                        "state_of_main_object": " The dog\u2019s facial fur is lathered up with shampoo."
                    },
                    {
                        "step": "Rinsing the Dog's Neck and Back",
                        "object": [
                            [
                                "shower head",
                                "similar",
                                1
                            ],
                            [
                                "dog",
                                "similar",
                                1
                            ],
                            [
                                "bowl",
                                "optional"
                            ]
                        ],
                        "action": "A person gently pouring or spraying water down the back of the dog\u2019s neck from just below the ears and down.",
                        "state_of_main_object": " The dog is thoroughly wet, with its fur slicked down due to the water and shampoo."
                    },
                    {
                        "step": "Drying the Dog",
                        "object": [
                            [
                                "towel",
                                "new"
                            ],
                            [
                                "dog",
                                "similar",
                                1
                            ]
                        ],
                        "action": "A person using a towel to dry the dog.",
                        "state_of_main_object": " The dog is damp but mostly dry, thanks to the towel treatment."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.9,
                        0.8
                    ],
                    [
                        0.9,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.9,
                        0.9,
                        1.0,
                        0.8
                    ],
                    [
                        0.8,
                        0.8,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Preparing Tortillas for Burritos",
                "steps": [
                    {
                        "step": "Placing Tortilla on Plate",
                        "object": [
                            [
                                "plate",
                                "new"
                            ],
                            [
                                "tortilla",
                                "new"
                            ]
                        ],
                        "action": "A tortilla is laid flat on a clean plate.",
                        "state_of_main_object": " There's a clean plate with a flat tortilla on it."
                    },
                    {
                        "step": "Wrapping the Tortilla",
                        "object": [
                            [
                                "plate",
                                "similar",
                                1
                            ],
                            [
                                "tortilla",
                                "similar",
                                1
                            ]
                        ],
                        "action": "A person is wrapping ingredients inside the tortilla while it lays on the plate.",
                        "state_of_main_object": " A filled tortilla, wrapped around ingredients, sits on a clean plate."
                    },
                    {
                        "step": "Displaying Finished Burritos",
                        "object": [
                            [
                                "plate",
                                "similar",
                                1
                            ],
                            [
                                "burritos",
                                "new"
                            ]
                        ],
                        "action": "The plate now displays two neatly wrapped burritos.",
                        "state_of_main_object": " Two ready-to-eat burritos are resting on the plate."
                    },
                    {
                        "step": "Adding Cucumber",
                        "object": [
                            [
                                "plate",
                                "similar",
                                1
                            ],
                            [
                                "cucumber",
                                "new"
                            ],
                            [
                                "burritos",
                                "similar",
                                3
                            ]
                        ],
                        "action": "Adding some slices of cucumber next to the burritos on the plate.",
                        "state_of_main_object": " The plate now contains two burritos alongside several slices of cucumber."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.8,
                        0.7
                    ],
                    [
                        0.9,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Preparing an Apple",
                "steps": [
                    {
                        "step": "Placing Apple on Chopping Board",
                        "object": [
                            [
                                "chopping board",
                                "new"
                            ],
                            [
                                "apple",
                                "new"
                            ]
                        ],
                        "action": "An apple is placed on a chopping board.",
                        "state_of_main_object": " The chopping board displays a single apple ready for preparation."
                    },
                    {
                        "step": "Peeling the Apple",
                        "object": [
                            [
                                "apple",
                                "similar",
                                2
                            ],
                            [
                                "peeler",
                                "new"
                            ]
                        ],
                        "action": "A person uses a peeler to remove the skin from the apple.",
                        "state_of_main_object": " The apple, now skinless, remains on the chopping board."
                    },
                    {
                        "step": "Slicing the Apple",
                        "object": [
                            [
                                "chopping board",
                                "similar",
                                1
                            ],
                            [
                                "apple",
                                "similar",
                                2
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "A person slices the peeled apple on the chopping board.",
                        "state_of_main_object": " The chopping board now holds several slices of a peeled apple."
                    },
                    {
                        "step": "Presenting Sliced Apples",
                        "object": [
                            [
                                "plate",
                                "new"
                            ],
                            [
                                "apple slices",
                                "new"
                            ]
                        ],
                        "action": "A person holds a plate displaying the sliced apples.",
                        "state_of_main_object": " A plate, held by a person, showcases freshly sliced apples."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.8,
                        0.7
                    ],
                    [
                        0.9,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Pineapple Smoothie",
                "steps": [
                    {
                        "step": "Placing Pineapple on Chopping Board",
                        "object": [
                            [
                                "chopping board",
                                "new"
                            ],
                            [
                                "pineapple",
                                "new"
                            ]
                        ],
                        "action": "A pineapple is placed on a chopping board.",
                        "state_of_main_object": " A whole pineapple sits on the chopping board."
                    },
                    {
                        "step": "Peeling the Pineapple",
                        "object": [
                            [
                                "chopping board",
                                "similar",
                                1
                            ],
                            [
                                "pineapple",
                                "similar",
                                1
                            ]
                        ],
                        "action": "The whole pineapple on the chopping board is now peeled.",
                        "state_of_main_object": " The chopping board now holds a peeled pineapple."
                    },
                    {
                        "step": "Adding Pineapple to Blender",
                        "object": [
                            [
                                "blender",
                                "new"
                            ],
                            [
                                "pineapple pieces",
                                "new"
                            ]
                        ],
                        "action": "Pieces of the peeled pineapple are placed in a blender.",
                        "state_of_main_object": " A blender is filled with chunks of peeled pineapple."
                    },
                    {
                        "step": "Pineapple Smoothie in Glass",
                        "object": [
                            [
                                "glass",
                                "new"
                            ],
                            [
                                "pineapple smoothie",
                                "new"
                            ]
                        ],
                        "action": "The blended pineapple smoothie is poured into a glass.",
                        "state_of_main_object": " A glass sits filled with pineapple smoothie that was blended in a blender."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.8,
                        0.7
                    ],
                    [
                        0.9,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cutting Carrots and Onions for Cooking",
                "steps": [
                    {
                        "step": "Cutting Carrots on Chopping Board",
                        "object": [
                            [
                                "chopping board",
                                "new"
                            ],
                            [
                                "carrots",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Carrots are being cut into slices on a chopping board.",
                        "state_of_main_object": " Sliced carrots are spread on the chopping board."
                    },
                    {
                        "step": "Adding Cut Carrots to Pot",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "carrot slices",
                                "similar",
                                1
                            ]
                        ],
                        "action": "The slices of carrots are put into a cooking pot.",
                        "state_of_main_object": " A cooking pot is filled with sliced carrots."
                    },
                    {
                        "step": "Cutting Onions on Chopping Board",
                        "object": [
                            [
                                "chopping board",
                                "similar",
                                1
                            ],
                            [
                                "onions",
                                "new"
                            ],
                            [
                                "knife",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Onions are being cut into pieces on the same chopping board.",
                        "state_of_main_object": " The chopping board now contains pieces of cut onions, while the cooking pot holds slices of carrots."
                    },
                    {
                        "step": "Adding Cut Onions to Pot with Carrots",
                        "object": [
                            [
                                "pot",
                                "similar",
                                2
                            ],
                            [
                                "onion pieces",
                                "similar",
                                3
                            ],
                            [
                                "carrot slices",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Pieces of cut onions are added to the pot containing the carrot slices.",
                        "state_of_main_object": " The cooking pot now contains both slices of carrots and pieces of onions."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.9,
                        0.7
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.9
                    ],
                    [
                        0.9,
                        0.7,
                        1.0,
                        0.8
                    ],
                    [
                        0.7,
                        0.9,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cooking Wings",
                "steps": [
                    {
                        "step": "Placing Wings in Oven",
                        "object": [
                            [
                                "oven",
                                "new"
                            ],
                            [
                                "wings",
                                "new"
                            ]
                        ],
                        "action": "Place the wings into the oven for 1 hour.",
                        "state_of_main_object": " The wings are in the oven, baking for an hour."
                    },
                    {
                        "step": "Mixing Grilled Wings with Ingredients",
                        "object": [
                            [
                                "bowl",
                                "new"
                            ],
                            [
                                "grilled wings",
                                "similar",
                                1
                            ],
                            [
                                "soup base powder",
                                "new"
                            ],
                            [
                                "milk",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Mix grilled wings with soup base powder, milk, and water in a bowl.",
                        "state_of_main_object": " In a bowl, there are grilled wings mixed with soup base powder, milk, and water."
                    },
                    {
                        "step": "Returning Wings with Mixture to Oven",
                        "object": [
                            [
                                "oven",
                                "similar",
                                1
                            ],
                            [
                                "wing mixture",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Place the bowl of wings and powder mix back into the oven.",
                        "state_of_main_object": " The oven contains a bowl filled with wings, soup base powder, milk, and water for further cooking."
                    },
                    {
                        "step": "Final Cooking of Wings",
                        "object": [
                            [
                                "oven",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Leave the wings in the oven until they turn brown and tender.",
                        "state_of_main_object": " The bowl from the oven now contains brown, tender wings fully cooked and flavored with the powder mix."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.8,
                        0.9
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.7
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.8
                    ],
                    [
                        0.9,
                        0.7,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Tofu Burgers",
                "steps": [
                    {
                        "step": "Draining and Pressing Tofu",
                        "object": [
                            [
                                "tofu",
                                "new"
                            ],
                            [
                                "towel",
                                "new"
                            ],
                            [
                                "weight",
                                "new"
                            ]
                        ],
                        "action": "Drain and press tofu to remove excess water using a towel and a weight.",
                        "state_of_main_object": " The tofu is now compressed and devoid of excess water, resting beneath a weight."
                    },
                    {
                        "step": "Mixing Tofu with Ingredients",
                        "object": [
                            [
                                "tofu",
                                "similar",
                                1
                            ],
                            [
                                "bread crumbs",
                                "new"
                            ],
                            [
                                "binding agent",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Mix the pressed tofu with bread crumbs and a binding agent in a bowl.",
                        "state_of_main_object": " A mixture of pressed tofu, breadcrumbs, and a binding agent is in the bowl, ready for further preparation."
                    },
                    {
                        "step": "Shaping Tofu into Patties",
                        "object": [
                            [
                                "tofu mixture",
                                "similar",
                                2
                            ],
                            [
                                "patties",
                                "new"
                            ]
                        ],
                        "action": "Shape the tofu mixture into burger patties.",
                        "state_of_main_object": " Several tofu burger patties are formed and ready to be cooked."
                    },
                    {
                        "step": "Cooking Tofu Patties",
                        "object": [
                            [
                                "patties",
                                "similar",
                                3
                            ],
                            [
                                "pan",
                                "new"
                            ]
                        ],
                        "action": "Cook the tofu patties over medium heat in a pan until golden brown.",
                        "state_of_main_object": " The pan now contains golden brown tofu burger patties, perfectly cooked."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.7,
                        0.6
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.7,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.6,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Bread",
                "steps": [
                    {
                        "step": "Dissolving Salt in Water",
                        "object": [
                            [
                                "salt",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Dissolve the salt in a small amount of warm water in a bowl.",
                        "state_of_main_object": " A bowl containing a mixture of warm water and dissolved salt."
                    },
                    {
                        "step": "Flattening the Dough",
                        "object": [
                            [
                                "dough",
                                "new"
                            ]
                        ],
                        "action": "Flatten the dough into a rectangle on a flat surface.",
                        "state_of_main_object": " A flattened rectangle of dough lays on a flat surface."
                    },
                    {
                        "step": "Spreading Salt Water Over Dough",
                        "object": [
                            [
                                "dough",
                                "similar",
                                2
                            ],
                            [
                                "salt water",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Spread the salt water evenly over the flattened dough.",
                        "state_of_main_object": " There is a rectangle of dough on a flat surface, evenly sprinkled with salt water."
                    },
                    {
                        "step": "Folding and Kneading the Dough",
                        "object": [
                            [
                                "dough",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Fold and knead the dough to evenly distribute the salt water throughout.",
                        "state_of_main_object": " The dough, with salt water thoroughly kneaded into it, lies shaped on a flat surface.\n"
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.8,
                        0.7
                    ],
                    [
                        0.7,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Sweet Potato Pecan Dish",
                "steps": [
                    {
                        "step": "Mixing Sweet Potatoes and Milk",
                        "object": [
                            [
                                "sweet potatoes",
                                "new"
                            ],
                            [
                                "milk",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Mix boiled sweet potatoes with milk in a bowl.",
                        "state_of_main_object": " A bowl filled with a mixture of boiled sweet potatoes and milk."
                    },
                    {
                        "step": "Adding Sugar and Mashing",
                        "object": [
                            [
                                "sweet potato mixture",
                                "similar",
                                1
                            ],
                            [
                                "sugar",
                                "new"
                            ]
                        ],
                        "action": "Mix in sugar to the sweet potatoes and mash the mixture.",
                        "state_of_main_object": " The bowl contains a sweet, mashed mixture of sweet potatoes, milk, and sugar."
                    },
                    {
                        "step": "Combining Brown Sugar and Pecans",
                        "object": [
                            [
                                "brown sugar",
                                "new"
                            ],
                            [
                                "pecans",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Combine brown sugar and chopped pecans in a separate bowl.",
                        "state_of_main_object": " The scene now includes two bowls"
                    },
                    {
                        "step": "Baking the Mixture",
                        "object": [
                            [
                                "sweet potato mixture",
                                "similar",
                                2
                            ],
                            [
                                "pecan mixture",
                                "similar",
                                3
                            ],
                            [
                                "baking dish",
                                "new"
                            ]
                        ],
                        "action": "Spread the sweet potato mixture into a baking dish, then top with the brown sugar and pecan mixture. Bake for 25-30 minutes.",
                        "state_of_main_object": " A baking dish contains a layer of mashed sweet potato topped with a mixture of brown sugar and chopped pecans. It's then baked until golden and slightly bubbly."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.9,
                        0.7,
                        0.6
                    ],
                    [
                        0.9,
                        1.0,
                        0.7,
                        0.8
                    ],
                    [
                        0.7,
                        0.7,
                        1.0,
                        0.9
                    ],
                    [
                        0.6,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Fried Colored Snack Balls",
                "steps": [
                    {
                        "step": "Mixing Dry Ingredients",
                        "object": [
                            [
                                "flour",
                                "new"
                            ],
                            [
                                "dry ingredients",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Mix dry ingredients including flour in a bowl.",
                        "state_of_main_object": " A bowl filled with mixed dry ingredients, including flour, is ready."
                    },
                    {
                        "step": "Adding Food Coloring to Wet Ingredients",
                        "object": [
                            [
                                "food coloring",
                                "new"
                            ],
                            [
                                "wet ingredients",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Add green food coloring to wet ingredients and mix thoroughly in a bowl.",
                        "state_of_main_object": " The wet ingredients, now a vibrant green color, are combined in a bowl."
                    },
                    {
                        "step": "Forming Batter into Balls",
                        "object": [
                            [
                                "batter",
                                "new"
                            ]
                        ],
                        "action": "Form the batter into small balls using hands or a scoop.",
                        "state_of_main_object": " Small, green-tinted batter balls are prepared and ready for frying."
                    },
                    {
                        "step": "Deep Frying Batter Balls",
                        "object": [
                            [
                                "batter balls",
                                "similar",
                                3
                            ],
                            [
                                "oil",
                                "new"
                            ],
                            [
                                "frying pan",
                                "new"
                            ]
                        ],
                        "action": "Deep fry the batter balls in hot oil until cooked through.",
                        "state_of_main_object": " Fried, green-colored snack balls are ready, having been thoroughly cooked in hot oil."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.7,
                        0.6
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.7
                    ],
                    [
                        0.7,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.6,
                        0.7,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Tomato Soup",
                "steps": [
                    {
                        "step": "Chopping Tomatoes",
                        "object": [
                            [
                                "tomato",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ],
                            [
                                "cutting board",
                                "new"
                            ]
                        ],
                        "action": "Chop fresh tomatoes into quarters on a cutting board.",
                        "state_of_main_object": " The cutting board holds freshly chopped tomato quarters, ready to be used."
                    },
                    {
                        "step": "Cooking Tomatoes",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "chopped tomatoes",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Place chopped tomatoes into a pot and add water or broth.",
                        "state_of_main_object": " A pot filled with water or broth and chopped tomatoes, preparing to be cooked."
                    },
                    {
                        "step": "Simmering Soup",
                        "object": [
                            [
                                "pot",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Simmer the tomatoes until soft and blend with a hand blender until smooth.",
                        "state_of_main_object": " The pot contains a smooth tomato soup, created from simmered and blended tomatoes."
                    },
                    {
                        "step": "Seasoning Soup",
                        "object": [
                            [
                                "pot",
                                "similar",
                                3
                            ],
                            [
                                "seasonings",
                                "new"
                            ]
                        ],
                        "action": "Season the soup with salt, pepper, and herbs to taste, then serve hot.",
                        "state_of_main_object": " A steaming, hot tomato soup, seasoned with salt, pepper, and herbs, is ready to serve."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.7,
                        0.6
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.7
                    ],
                    [
                        0.7,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.6,
                        0.7,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Potato Soup",
                "steps": [
                    {
                        "step": "Peeling and Chopping Potatoes",
                        "object": [
                            [
                                "potato",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ],
                            [
                                "peeler",
                                "new"
                            ],
                            [
                                "cutting board",
                                "new"
                            ]
                        ],
                        "action": "Peel potatoes and chop them into small cubes on a cutting board.",
                        "state_of_main_object": " The cutting board now holds small cubed pieces of peeled potatoes."
                    },
                    {
                        "step": "Cooking Potatoes",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "chopped potatoes",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Place chopped potatoes into a pot, add water or broth, and bring to a boil.",
                        "state_of_main_object": " A pot containing diced potatoes and boiling broth or water sits on the stove."
                    },
                    {
                        "step": "Adding Cream and Seasonings",
                        "object": [
                            [
                                "pot",
                                "similar",
                                2
                            ],
                            [
                                "cream",
                                "new"
                            ],
                            [
                                "seasonings",
                                "new"
                            ]
                        ],
                        "action": "Reduce heat and add cream and seasonings like salt and pepper.",
                        "state_of_main_object": " The pot contains a creamy potato soup that is seasoned and simmering on a low heat."
                    },
                    {
                        "step": "Serving",
                        "object": [
                            [
                                "pot",
                                "similar",
                                3
                            ]
                        ],
                        "action": "Serve the creamy potato soup hot, garnished with chopped green onions or chives.",
                        "state_of_main_object": " The ready-to-eat creamy potato soup, hot and garnished with green onions or chives, is served in bowls on the table."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.5,
                        1.0,
                        0.9,
                        0.7
                    ],
                    [
                        0.0,
                        0.8,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Porridge",
                "steps": [
                    {
                        "step": "Measuring Porridge Oats",
                        "object": [
                            [
                                "oats",
                                "new"
                            ],
                            [
                                "measuring cup",
                                "new"
                            ]
                        ],
                        "action": "Measure out oats using a measuring cup.",
                        "state_of_main_object": " A measuring cup filled with a specific quantity of oats is ready."
                    },
                    {
                        "step": "Cooking Oats",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "measured oats",
                                "similar",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Add oats and water to a pot, bring to a boil.",
                        "state_of_main_object": " A pot filled with a mixture of oats and water is boiling on the stove."
                    },
                    {
                        "step": "Simmering Porridge",
                        "object": [
                            [
                                "pot",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Simmer the oats on low heat, stirring frequently until thickened.",
                        "state_of_main_object": " A pot filled with thickened oat porridge is simmering on low heat."
                    },
                    {
                        "step": "Adding Flavors and Toppings",
                        "object": [
                            [
                                "pot",
                                "similar",
                                3
                            ],
                            [
                                "flavors",
                                "new"
                            ],
                            [
                                "toppings",
                                "new"
                            ]
                        ],
                        "action": "Add sugar, salt, or honey for flavor and garnish with toppings like fruits or nuts.",
                        "state_of_main_object": " The pot now contains perfectly cooked porridge with added flavorings and garnished with fruits or nuts.\n"
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.7,
                        0.6
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.7
                    ],
                    [
                        0.7,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.6,
                        0.7,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Pumpkin Soup",
                "steps": [
                    {
                        "step": "Preparing Pumpkin",
                        "object": [
                            [
                                "pumpkin",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ],
                            [
                                "cutting board",
                                "new"
                            ]
                        ],
                        "action": "Peel and chop the pumpkin into cubes on a cutting board.",
                        "state_of_main_object": " There is a cutting board with peeled and cubed pumpkin."
                    },
                    {
                        "step": "Cooking Pumpkin",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "pumpkin cubes",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Place pumpkin cubes in a pot with broth, bring to a boil and simmer until soft.",
                        "state_of_main_object": " A pot containing softly boiled pumpkin cubes in broth sits on the stove."
                    },
                    {
                        "step": "Blending Soup",
                        "object": [
                            [
                                "blender",
                                "new"
                            ],
                            [
                                "cooked pumpkin",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Blend the softened pumpkin with some of the cooking liquid until smooth.",
                        "state_of_main_object": " The pot now contains a smooth pumpkin soup."
                    },
                    {
                        "step": "Seasoning and Serving",
                        "object": [
                            [
                                "pot",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Return the blended pumpkin to the pot, season with salt, pepper, and cream, then heat through.",
                        "state_of_main_object": " There's a pot containing creamy, seasoned pumpkin soup that's ready to be served."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.6
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.9
                    ],
                    [
                        0.6,
                        0.7,
                        1.0,
                        0.7
                    ],
                    [
                        0.6,
                        0.9,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Fried Rice",
                "steps": [
                    {
                        "step": "Preparing Ingredients",
                        "object": [
                            [
                                "rice",
                                "new"
                            ],
                            [
                                "vegetables",
                                "new"
                            ],
                            [
                                "eggs",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Chop vegetables and set aside; beat eggs lightly.",
                        "state_of_main_object": " The scene features chopped vegetables and lightly beaten eggs ready for cooking."
                    },
                    {
                        "step": "Cooking Eggs",
                        "object": [
                            [
                                "pan",
                                "new"
                            ],
                            [
                                "eggs",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Scramble the eggs in a heated pan, then remove and set aside.",
                        "state_of_main_object": " A pan is now empty, with the scrambled eggs set aside separately."
                    },
                    {
                        "step": "Stir-Frying Rice",
                        "object": [
                            [
                                "pan",
                                "similar",
                                2
                            ],
                            [
                                "rice",
                                "similar",
                                1
                            ],
                            [
                                "vegetables",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Stir-fry rice and vegetables in the same pan, adding oil as needed.",
                        "state_of_main_object": " A pan contains stir-fried rice mixed with vegetables, being cooked with added oil."
                    },
                    {
                        "step": "Combining Ingredients",
                        "object": [
                            [
                                "pan",
                                "similar",
                                3
                            ],
                            [
                                "cooked eggs",
                                "similar",
                                2
                            ],
                            [
                                "soy sauce",
                                "new"
                            ]
                        ],
                        "action": "Add the scrambled eggs back to the pan with rice and vegetables, drizzle soy sauce, and mix well.",
                        "state_of_main_object": " The pan has evenly mixed fried rice, vegetables, scrambled eggs, and soy sauce.\n"
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.7,
                        0.6
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.8
                    ],
                    [
                        0.7,
                        0.6,
                        1.0,
                        0.9
                    ],
                    [
                        0.6,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Curried Sausages",
                "steps": [
                    {
                        "step": "Browning the Sausages",
                        "object": [
                            [
                                "pan",
                                "new"
                            ],
                            [
                                "sausages",
                                "new"
                            ]
                        ],
                        "action": "Brown the sausages in a pan until they are golden on all sides.",
                        "state_of_main_object": " Golden brown sausages are sitting in a pan."
                    },
                    {
                        "step": "Adding Vegetables",
                        "object": [
                            [
                                "pan",
                                "similar",
                                1
                            ],
                            [
                                "vegetables",
                                "new"
                            ]
                        ],
                        "action": "Add chopped onions and other vegetables to the pan and saut\u00e9 until soft.",
                        "state_of_main_object": " The pan contains browned sausages along with saut\u00e9ed onions and other softened vegetables."
                    },
                    {
                        "step": "Mixing in Curry Sauce",
                        "object": [
                            [
                                "pan",
                                "similar",
                                2
                            ],
                            [
                                "curry powder",
                                "new"
                            ],
                            [
                                "tomato paste",
                                "new"
                            ]
                        ],
                        "action": "Stir in curry powder and tomato paste, then add water to create a curry sauce.",
                        "state_of_main_object": " The pan now contains sausages and soft vegetables coated in a simmering curry sauce."
                    },
                    {
                        "step": "Simmering",
                        "object": [
                            [
                                "pan",
                                "similar",
                                3
                            ]
                        ],
                        "action": "Let the curry simmer until the sauce thickens and the flavors meld together.",
                        "state_of_main_object": " The pan now holds Curried Sausages, with the curry sauce thickened and flavors well combined."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.7,
                        0.6
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.8
                    ],
                    [
                        0.7,
                        0.9,
                        1.0,
                        0.9
                    ],
                    [
                        0.6,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Thai Beef Salad",
                "steps": [
                    {
                        "step": "Grilling the Beef",
                        "object": [
                            [
                                "grill",
                                "new"
                            ],
                            [
                                "beef",
                                "new"
                            ]
                        ],
                        "action": "Grill the beef until it's cooked to your preferred doneness, then let it rest.",
                        "state_of_main_object": " There is grilled beef resting after being cooked to a preferred level of doneness."
                    },
                    {
                        "step": "Preparing Salad Mix",
                        "object": [
                            [
                                "bowl",
                                "new"
                            ],
                            [
                                "vegetables",
                                "new"
                            ],
                            [
                                "herbs",
                                "new"
                            ]
                        ],
                        "action": "In a large bowl, mix together sliced vegetables like cucumbers and tomatoes, and fresh herbs like mint and cilantro.",
                        "state_of_main_object": " A large bowl contains a mix of sliced cucumbers, tomatoes, mint, and cilantro."
                    },
                    {
                        "step": "Slicing the Beef",
                        "object": [
                            [
                                "cutting board",
                                "new"
                            ],
                            [
                                "grilled beef",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Slice the rested beef thinly against the grain on a cutting board.",
                        "state_of_main_object": " Thinly sliced, rested beef is laying on a cutting board, with a mixture of sliced vegetables and herbs in a large bowl next to it."
                    },
                    {
                        "step": "Combining Beef and Salad",
                        "object": [
                            [
                                "bowl",
                                "similar",
                                2
                            ],
                            [
                                "sliced beef",
                                "similar",
                                3
                            ]
                        ],
                        "action": "Add the sliced beef to the salad and toss with Thai dressing.",
                        "state_of_main_object": " The large bowl now contains a Thai beef salad - grilled beef slices mixed with cucumbers and tomatoes, fresh herbs, and dressed with Thai dressing.\n"
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.7,
                        0.6
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.9
                    ],
                    [
                        0.7,
                        0.6,
                        1.0,
                        0.8
                    ],
                    [
                        0.6,
                        0.9,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Lasagne",
                "steps": [
                    {
                        "step": "Preparing the Meat Sauce",
                        "object": [
                            [
                                "pan",
                                "new"
                            ],
                            [
                                "ground beef",
                                "new"
                            ]
                        ],
                        "action": "Cook ground beef in a pan, add onions and garlic, then pour in tomato sauce.",
                        "state_of_main_object": " A pan is filled with cooked ground beef, onions, garlic, and tomato sauce."
                    },
                    {
                        "step": "Assembling the Lasagne",
                        "object": [
                            [
                                "baking dish",
                                "new"
                            ],
                            [
                                "meat sauce",
                                "similar",
                                1
                            ],
                            [
                                "lasagne noodles",
                                "new"
                            ],
                            [
                                "cheese",
                                "new"
                            ]
                        ],
                        "action": "Layer lasagne noodles, meat sauce, and cheese in a baking dish.",
                        "state_of_main_object": " A baking dish is filled with layers of lasagne noodles, meat sauce, and cheese."
                    },
                    {
                        "step": "Baking the Lasagne",
                        "object": [
                            [
                                "oven",
                                "new"
                            ],
                            [
                                "lasagne",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Bake in a preheated oven until the cheese is bubbly and browned.",
                        "state_of_main_object": " A lasagne is sitting in a baking dish with a bubbly and browned cheese on the top, fresh out from the oven."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.5
                    ],
                    [
                        0.8,
                        1.0,
                        0.9
                    ],
                    [
                        0.5,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Classic Shepherd's Pie",
                "steps": [
                    {
                        "step": "Cooking the Meat",
                        "object": [
                            [
                                "pan",
                                "new"
                            ],
                            [
                                "ground lamb",
                                "new"
                            ]
                        ],
                        "action": "Brown the ground lamb in a pan, then drain excess fat.",
                        "state_of_main_object": " A pan contains browned ground lamb, with excess fat removed."
                    },
                    {
                        "step": "Preparing the Vegetable Mix",
                        "object": [
                            [
                                "pan",
                                "similar",
                                1
                            ],
                            [
                                "vegetables",
                                "new"
                            ],
                            [
                                "tomato paste",
                                "new"
                            ]
                        ],
                        "action": "Add chopped vegetables and tomato paste to the pan, cook until soft.",
                        "state_of_main_object": " The pan contains ground lamb mixed with soft cooked vegetables and tomato paste."
                    },
                    {
                        "step": "Assembling the Pie",
                        "object": [
                            [
                                "baking dish",
                                "new"
                            ],
                            [
                                "meat mixture",
                                "similar",
                                2
                            ],
                            [
                                "mashed potatoes",
                                "new"
                            ]
                        ],
                        "action": "Layer the meat mixture in a baking dish, then top with mashed potatoes.",
                        "state_of_main_object": " A baking dish is filled with a bottom layer of cooked meat and vegetables, topped by a layer of mashed potatoes."
                    },
                    {
                        "step": "Baking the Pie",
                        "object": [
                            [
                                "oven",
                                "new"
                            ],
                            [
                                "shepherd's pie",
                                "similar",
                                3
                            ]
                        ],
                        "action": "Bake in a preheated oven until the top is golden and crispy.",
                        "state_of_main_object": " A freshly baked Shepherd's Pie exuding a tantalizing aroma, with a golden crispy mashed potato topping sits in the oven."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.4
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.6
                    ],
                    [
                        0.6,
                        0.9,
                        1.0,
                        0.8
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Tomato Facial Mask",
                "steps": [
                    {
                        "step": "Preparing the Tomato",
                        "object": [
                            [
                                "tomato",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ],
                            [
                                "cutting board",
                                "new"
                            ]
                        ],
                        "action": "Wash the tomato thoroughly under running water. Then, cut it in half using a knife on a cutting board.",
                        "state_of_main_object": " The cutting board holds a cleanly sliced tomato, washed and ready for use."
                    },
                    {
                        "step": "Extracting Tomato Juice",
                        "object": [
                            [
                                "tomato half",
                                "similar",
                                1
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Squeeze or mash the tomato half over a bowl to extract the juice.",
                        "state_of_main_object": " A bowl filled with fresh tomato juice sits on a table, nearby are the remnants of a squeezed tomato."
                    },
                    {
                        "step": "Adding Additional Ingredients",
                        "object": [
                            [
                                "bowl with tomato juice",
                                "similar",
                                2
                            ],
                            [
                                "honey",
                                "new"
                            ],
                            [
                                "yogurt",
                                "new"
                            ]
                        ],
                        "action": "Mix one tablespoon of honey and one tablespoon of yogurt into the tomato juice to form a paste.",
                        "state_of_main_object": " A bowl contains a paste made from tomato juice, honey, and yogurt, ready to be used as a facial mask."
                    },
                    {
                        "step": "Applying the Mask",
                        "object": [
                            [
                                "facial mask mixture",
                                "similar",
                                3
                            ]
                        ],
                        "action": "Apply the mask evenly over your clean face using your fingertips or a mask brush, avoiding the eye area.",
                        "state_of_main_object": " The face is covered evenly with the tomato, honey, and yogurt mask, except for the eye area."
                    },
                    {
                        "step": "Rinsing Off the Mask",
                        "object": [
                            [
                                "washcloth",
                                "new"
                            ],
                            [
                                "warm water",
                                "new"
                            ]
                        ],
                        "action": "After leaving the mask on for about 15-20 minutes, rinse it off using warm water and a soft washcloth.",
                        "state_of_main_object": " Your face is clean, rejuvenated, and free of the tomato mask, left feeling fresh and glowing after the rinse."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.4,
                        0.3
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.5,
                        0.4
                    ],
                    [
                        0.6,
                        0.7,
                        1.0,
                        0.8,
                        0.5
                    ],
                    [
                        0.4,
                        0.5,
                        0.8,
                        1.0,
                        0.6
                    ],
                    [
                        0.3,
                        0.4,
                        0.5,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Yogurt Facial Mask",
                "steps": [
                    {
                        "step": "Preparing the Yogurt",
                        "object": [
                            [
                                "yogurt",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Spoon plain, unsweetened yogurt into a clean bowl.",
                        "state_of_main_object": "The bowl contains plain yogurt."
                    },
                    {
                        "step": "Adding Honey",
                        "object": [
                            [
                                "yogurt in bowl",
                                "similar",
                                1
                            ],
                            [
                                "honey",
                                "new"
                            ]
                        ],
                        "action": "Add one tablespoon of honey to the yogurt and mix well.",
                        "state_of_main_object": "The yogurt is mixed with honey, becoming a cohesive mixture."
                    },
                    {
                        "step": "Applying the Mask",
                        "object": [
                            [
                                "yogurt mixture",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Apply the yogurt and honey mixture evenly over your clean face using your fingertips or a brush, avoiding the eye area.",
                        "state_of_main_object": "The face is covered evenly with the yogurt facial mask."
                    },
                    {
                        "step": "Rinsing Off the Mask",
                        "object": [
                            [
                                "washcloth",
                                "new"
                            ],
                            [
                                "warm water",
                                "new"
                            ]
                        ],
                        "action": "After leaving the mask on for about 10-15 minutes, rinse it off using warm water and a soft washcloth.",
                        "state_of_main_object": "The skin is clean and may appear more hydrated and smooth."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.5,
                        0.3
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.5
                    ],
                    [
                        0.5,
                        0.9,
                        1.0,
                        0.7
                    ],
                    [
                        0.3,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Building a Wooden Picket Fence for a Small Garden",
                "steps": [
                    {
                        "step": "Gathering Materials",
                        "object": [
                            [
                                "wooden posts",
                                "new"
                            ],
                            [
                                "pickets",
                                "new"
                            ],
                            [
                                "nails",
                                "new"
                            ],
                            [
                                "hammer",
                                "new"
                            ]
                        ],
                        "action": "Collect all necessary materials including wooden posts, pickets, nails, and a hammer.",
                        "state_of_main_object": "Materials are collected and ready for use."
                    },
                    {
                        "step": "Setting the Posts",
                        "object": [
                            [
                                "wooden posts",
                                "similar",
                                1
                            ],
                            [
                                "shovel",
                                "new"
                            ],
                            [
                                "level",
                                "new"
                            ]
                        ],
                        "action": "Dig holes for the posts using a shovel, place the posts, and ensure they are level and stable.",
                        "state_of_main_object": "Posts are installed in the ground and aligned vertically."
                    },
                    {
                        "step": "Attaching the Pickets",
                        "object": [
                            [
                                "pickets",
                                "similar",
                                1
                            ],
                            [
                                "wooden posts",
                                "similar",
                                2
                            ],
                            [
                                "hammer",
                                "similar",
                                1
                            ],
                            [
                                "nails",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Attach the pickets to the posts using nails and a hammer, spacing them evenly.",
                        "state_of_main_object": "Pickets are nailed to the posts, forming the fence."
                    },
                    {
                        "step": "Finishing Touches",
                        "object": [
                            [
                                "fence",
                                "similar",
                                3
                            ],
                            [
                                "paint",
                                "new"
                            ],
                            [
                                "paintbrush",
                                "new"
                            ]
                        ],
                        "action": "Apply a coat of paint or wood preserver to the fence to protect it from the elements.",
                        "state_of_main_object": "The fence is painted and finished, providing a neat appearance and protection."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.5,
                        0.4
                    ],
                    [
                        0.7,
                        1.0,
                        0.9,
                        0.6
                    ],
                    [
                        0.5,
                        0.9,
                        1.0,
                        0.8
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Cat Sleeping Box",
                "steps": [
                    {
                        "step": "Choosing the Box",
                        "object": [
                            [
                                "box",
                                "new"
                            ]
                        ],
                        "action": "Select a sturdy cardboard box that is large enough for your cat to comfortably lie down in.",
                        "state_of_main_object": "The box is empty and ready for modification."
                    },
                    {
                        "step": "Preparing the Box",
                        "object": [
                            [
                                "box",
                                "similar",
                                1
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "action": "Cut a doorway in one side of the box large enough for your cat to enter and exit easily using scissors.",
                        "state_of_main_object": "The box now has an entry point cut into it."
                    },
                    {
                        "step": "Adding Comfort",
                        "object": [
                            [
                                "box",
                                "similar",
                                2
                            ],
                            [
                                "soft bedding",
                                "new"
                            ]
                        ],
                        "action": "Place soft bedding, such as a blanket or a soft towel, inside the box to make it comfortable.",
                        "state_of_main_object": "The box is lined with soft bedding, making it cozy."
                    },
                    {
                        "step": "Personalizing the Box",
                        "object": [
                            [
                                "box",
                                "similar",
                                3
                            ],
                            [
                                "non-toxic paint",
                                "new"
                            ],
                            [
                                "paintbrush",
                                "new"
                            ]
                        ],
                        "action": "Decorate the outside of the box with non-toxic paint to personalize it for your cat.",
                        "state_of_main_object": "The box is decorated and personalized."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.5
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.6
                    ],
                    [
                        0.6,
                        0.7,
                        1.0,
                        0.8
                    ],
                    [
                        0.5,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            }
        ]
    },
    "gpt_3": {
        "goals": [
            {
                "goal": "Baking an Avocado",
                "steps": [
                    {
                        "step": "Preparation",
                        "object": [
                            [
                                "avocado",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Cut an avocado in half and remove the seed with the knife.",
                        "state_of_main_object": " There are two halved avocados with the seed removed laying on the cutting board."
                    },
                    {
                        "step": "Preheat the Oven",
                        "object": [
                            [
                                "oven",
                                "new"
                            ]
                        ],
                        "action": "Preheat your oven to 200 degrees Celsius.",
                        "state_of_main_object": " An avocado is halved with the seed removed.\n\nstate 2"
                    },
                    {
                        "step": "Placing Avocado",
                        "object": [
                            [
                                "avocado",
                                "total similar",
                                1
                            ],
                            [
                                "baking tray",
                                "new"
                            ]
                        ],
                        "action": "Place the halved avocado onto a baking tray.",
                        "state_of_main_object": " The halved avocado is now ready for baking on the tray, while the oven is heating."
                    },
                    {
                        "step": "Baking",
                        "object": [
                            [
                                "avocado",
                                "total similar",
                                2
                            ],
                            [
                                "oven",
                                "total similar",
                                1
                            ]
                        ],
                        "action": "Put the tray in the oven and bake for 15 minutes.",
                        "state_of_main_object": " The baking tray, with the two avocado halves, is inside the preheated oven, baking."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.8,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.4,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Boiling Carrots",
                "steps": [
                    {
                        "step": "Prepare the Carrots",
                        "object": [
                            [
                                "carrots",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Clean carrots and use a knife to peel and cut them into smaller pieces.",
                        "state_of_main_object": " The scene is a cutting board with clean, peeled, and cut pieces of carrots."
                    },
                    {
                        "step": "Add Carrots to Pot",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "carrots",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Place the prepared carrots into the pot.",
                        "state_of_main_object": " A pot containing prepared, cut-up carrots."
                    },
                    {
                        "step": "Pour Water",
                        "object": [
                            [
                                "pot",
                                "similar total",
                                2
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Pour water into the pot, ensuring the water level is above the carrots.",
                        "state_of_main_object": " The pot is now filled with water and prepared carrots, ready to be boiled."
                    },
                    {
                        "step": "Boil the Carrots",
                        "object": [
                            [
                                "pot",
                                "similar total",
                                3
                            ],
                            [
                                "stove",
                                "new"
                            ]
                        ],
                        "action": "Put the pot on the stove and turn it on to high heat. Let the water come to a boil.",
                        "state_of_main_object": " The pot, containing carrots submerged in boiling water, is on the high heat on the stove."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.2,
                        0.1
                    ],
                    [
                        0.6,
                        1.0,
                        0.7,
                        0.3
                    ],
                    [
                        0.2,
                        0.7,
                        1.0,
                        0.8
                    ],
                    [
                        0.1,
                        0.4,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Boiling Beets",
                "steps": [
                    {
                        "step": "Preparation",
                        "object": [
                            [
                                "beets",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Wash the beets thoroughly to remove any dirt.",
                        "state_of_main_object": " The beets are clean and free from any dirt."
                    },
                    {
                        "step": "Pot Preparation",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "beets",
                                "similar shape",
                                1
                            ],
                            [
                                "water",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Place the clean beets into a pot. Fill the pot with water until the beets are fully submerged.",
                        "state_of_main_object": " The pot is filled with water and clean beets, with the beets completely submerged."
                    },
                    {
                        "step": "Boiling Process",
                        "object": [
                            [
                                "pot",
                                "similar",
                                2
                            ],
                            [
                                "stove",
                                "new"
                            ]
                        ],
                        "action": "Turn on the stove and put the pot over it for boiling.",
                        "state_of_main_object": " On the stove, there is a pot filled with water and submerged beets, now being boiled."
                    },
                    {
                        "step": "Boiling Completion",
                        "object": [
                            [
                                "beets",
                                "similar",
                                1
                            ],
                            [
                                "stove",
                                "similar texture",
                                1
                            ]
                        ],
                        "action": "Boil the beets until they are tender, then turn off the stove.",
                        "state_of_main_object": " The pot on the stove contains boiled, tender beets, and the stove is turned off."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.1
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.7
                    ],
                    [
                        0.6,
                        0.7,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Boil Cabbage",
                "steps": [
                    {
                        "step": "Preparation Stage",
                        "object": [
                            [
                                "cabbage",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ],
                            [
                                "cutting board",
                                "new"
                            ]
                        ],
                        "action": "Rinse the cabbage and place it on the cutting board. Slice the cabbage into quarters.",
                        "state_of_main_object": " Quarters of rinsed cabbage are on the cutting board."
                    },
                    {
                        "step": "Heating Pot with Water",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Fill the pot with water and place it on the stove. Turn on the heat to high until the water boils.",
                        "state_of_main_object": " There is a pot filled with boiling water on the hot stove."
                    },
                    {
                        "step": "Adding Cabbage",
                        "object": [
                            [
                                "cabbage",
                                "similar shape",
                                1
                            ],
                            [
                                "pot",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Add the chopped cabbage into the boiling water.",
                        "state_of_main_object": " The pot on the stove now contains boiling water with chopped cabbage inside."
                    },
                    {
                        "step": "Boiling Cabbage",
                        "object": [
                            [
                                "cabbage",
                                "similar shape",
                                1
                            ],
                            [
                                "pot",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Let the cabbage boil for about 5-10 minutes until it's tender.",
                        "state_of_main_object": " Tender, boiled cabbage quarters sit inside the pot of boiling water."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.2,
                        0.1,
                        0.1
                    ],
                    [
                        0.5,
                        1.0,
                        0.5,
                        0.2
                    ],
                    [
                        0.4,
                        0.5,
                        1.0,
                        0.7
                    ],
                    [
                        0.2,
                        0.5,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cleaning a Mango",
                "steps": [
                    {
                        "step": "Water Availability",
                        "object": [
                            [
                                "tap",
                                "new"
                            ],
                            [
                                "sink",
                                "new"
                            ]
                        ],
                        "action": "Open the tap to ensure water is flowing in the sink.",
                        "state_of_main_object": " The sink is prepared with running water."
                    },
                    {
                        "step": "Washing the Mango",
                        "object": [
                            [
                                "mango",
                                "new"
                            ],
                            [
                                "water",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Place the mango under the running water.",
                        "state_of_main_object": " The mango is positioned under a flowing tap, being rinsed with water."
                    },
                    {
                        "step": "Scrubbing the Mango",
                        "object": [
                            [
                                "mango",
                                "similar total",
                                2
                            ],
                            [
                                "brush",
                                "new"
                            ]
                        ],
                        "action": "Gently scrub the mango surface with the help of a soft brush.",
                        "state_of_main_object": " The mango, now sitting under flowing water, is being gently scrubbed with a soft brush."
                    },
                    {
                        "step": "Drying the Mango",
                        "object": [
                            [
                                "mango",
                                "similar total",
                                3
                            ],
                            [
                                "cloth",
                                "new"
                            ]
                        ],
                        "action": "Dry the mango by patting it with a clean cloth.",
                        "state_of_main_object": " The mango is clean, dry, and ready for consumption or use in a recipe."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.4,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.3,
                        0.4,
                        1.0,
                        0.5
                    ],
                    [
                        0.2,
                        0.3,
                        0.4,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Clean Green Beans",
                "steps": [
                    {
                        "step": "Gather the Beans",
                        "object": [
                            [
                                "beans",
                                "new"
                            ]
                        ],
                        "action": "Get the green beans from the refrigerator or market.",
                        "state_of_main_object": " The green beans are now out, readily available either from the refrigerator or the market.\n"
                    },
                    {
                        "step": "Rinse under Water",
                        "object": [
                            [
                                "beans",
                                "similar shape",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "sink",
                                "new"
                            ]
                        ],
                        "action": "Turn on the tap and rinse the beans under running water.",
                        "state_of_main_object": " The green beans are now clean and wet under the running water."
                    },
                    {
                        "step": "Trim the Ends",
                        "object": [
                            [
                                "beans",
                                "similar total",
                                2
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Use a sharp knife to trim the ends of each bean.",
                        "state_of_main_object": " All the green beans are cleaned, with their ends neatly trimmed."
                    },
                    {
                        "step": "Dry the Beans",
                        "object": [
                            [
                                "beans",
                                "similar total",
                                3
                            ],
                            [
                                "towel",
                                "new"
                            ]
                        ],
                        "action": "Pat dry the beans with a clean towel.",
                        "state_of_main_object": " The green beans are clean, trimmed at the ends, and dried."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.1
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.5
                    ],
                    [
                        0.4,
                        0.7,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Boiling Baby Corn",
                "steps": [
                    {
                        "step": "Preparation",
                        "object": [
                            [
                                "baby corn",
                                "new"
                            ],
                            [
                                "sink",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Rinse the baby corn under water in the sink.",
                        "state_of_main_object": " The baby corn is now clean and ready to be cooked, sitting in the kitchen sink."
                    },
                    {
                        "step": "Heating Water",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "stove",
                                "new"
                            ],
                            [
                                "water",
                                "similar (total)",
                                1
                            ]
                        ],
                        "action": "Fill the pot with water and place it on the stove.",
                        "state_of_main_object": " The kitchen sink contains rinsed baby corn. \nstate 2"
                    },
                    {
                        "step": "Adding Baby Corn",
                        "object": [
                            [
                                "baby corn",
                                "similar shape",
                                1
                            ],
                            [
                                "pot",
                                "similar (total)",
                                2
                            ]
                        ],
                        "action": "Put the rinsed baby corn into the pot of water.",
                        "state_of_main_object": " The pot on the stove is filled with water and rinsed baby corns."
                    },
                    {
                        "step": "Boiling",
                        "object": [
                            [
                                "baby corn",
                                "similar texture",
                                3
                            ],
                            [
                                "pot",
                                "similar (total)",
                                4
                            ]
                        ],
                        "action": "Turn on the stove and let the water with the corn boil for about 5-7 minutes.",
                        "state_of_main_object": " The pot on the stove now contains boiled baby corn in hot water."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.4,
                        0.2,
                        0.1
                    ],
                    [
                        0.4,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.2,
                        0.6,
                        1.0,
                        0.7
                    ],
                    [
                        0.1,
                        0.3,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cooking Beans",
                "steps": [
                    {
                        "step": "Rinsing the Beans",
                        "object": [
                            [
                                "beans",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "colander",
                                "new"
                            ]
                        ],
                        "action": "Person starts by pouring the beans into a colander and then rinses them thoroughly under cold running water.",
                        "state_of_main_object": " A colander full of washed beans stands under running water."
                    },
                    {
                        "step": "Soaking the Beans",
                        "object": [
                            [
                                "beans",
                                "shape similar",
                                1
                            ],
                            [
                                "water",
                                "total similar",
                                1
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Next, move the cleaned beans to a large bowl, add enough water to cover the beans by at least two inches.",
                        "state_of_main_object": " A large bowl now holds thoroughly rinsed beans submerged under at least two inches of water."
                    },
                    {
                        "step": "Boiling the Beans",
                        "object": [
                            [
                                "beans",
                                "shape similar",
                                2
                            ],
                            [
                                "water",
                                "shape similar",
                                2
                            ],
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "stove",
                                "new"
                            ]
                        ],
                        "action": "Then, the person transfers the beans and water into a large pot and bring it to a boil over medium-high heat on the stove.",
                        "state_of_main_object": " A large pot containing beans and water is on the stove, the water boiling over medium-high heat."
                    },
                    {
                        "step": "Simmering the Beans",
                        "object": [
                            [
                                "beans",
                                "shape similar",
                                3
                            ],
                            [
                                "water",
                                "shape similar",
                                3
                            ],
                            [
                                "pot",
                                "total similar",
                                3
                            ],
                            [
                                "stove",
                                "total similar",
                                3
                            ]
                        ],
                        "action": "Finally, the person reduces the heat to low, covers the pot, and let the beans simmer until they are tender.",
                        "state_of_main_object": " The beans are now simmering in a covered pot on low heat, soon to be tender and ready to eat."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.33
                    ],
                    [
                        0.8,
                        1.0,
                        0.6,
                        0.45
                    ],
                    [
                        0.7,
                        0.75,
                        1.0,
                        0.6
                    ],
                    [
                        0.65,
                        0.7,
                        0.85,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cooking Broccoli",
                "steps": [
                    {
                        "step": "Cleaning the Broccoli",
                        "object": [
                            [
                                "broccoli",
                                "new"
                            ]
                        ],
                        "action": "Rinse the fresh broccoli under cool tap water.",
                        "state_of_main_object": " Fresh broccoli, now clean and damp, sits ready for the next step of cooking."
                    },
                    {
                        "step": "Cutting Broccoli",
                        "object": [
                            [
                                "broccoli",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Cut the broccoli into smaller florets using a sharp knife.",
                        "state_of_main_object": " The broccoli is now clean and under the tap.\nstate 2"
                    },
                    {
                        "step": "Boiling Water",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Put water in a pot and bring it to a boil on the stove.",
                        "state_of_main_object": " The pot is full of boiling water on the stove."
                    },
                    {
                        "step": "Cooking Broccoli",
                        "object": [
                            [
                                "pot",
                                "similar shape",
                                3
                            ],
                            [
                                "broccoli",
                                "similar shape",
                                2
                            ]
                        ],
                        "action": "Add the cut broccoli into the boiling water and let it cook for few minutes.",
                        "state_of_main_object": " The pot on the stove now contains boiling water with cooking broccoli florets.\n"
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.5,
                        0.7,
                        1.0,
                        0.8
                    ],
                    [
                        0.3,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cooking Peppers",
                "steps": [
                    {
                        "step": "Gathering Ingredients",
                        "object": [
                            [
                                "peppers",
                                "new"
                            ],
                            [
                                "salt",
                                "new"
                            ],
                            [
                                "oil",
                                "new"
                            ]
                        ],
                        "action": "Get fresh peppers, salt, and cooking oil.",
                        "state_of_main_object": " Fresh peppers, salt, and cooking oil are prepared for cooking."
                    },
                    {
                        "step": "Prepping Peppers",
                        "object": [
                            [
                                "peppers",
                                "similar (total similar)",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Cut the peppers into strips using a knife.",
                        "state_of_main_object": " A pile of fresh pepper strips, alongside some salt and cooking oil, is on the cutting board."
                    },
                    {
                        "step": "Heating Oil",
                        "object": [
                            [
                                "pan",
                                "new"
                            ],
                            [
                                "oil",
                                "similar (texture similar)",
                                1
                            ]
                        ],
                        "action": "Heat a non-stick pan, pour the oil into it.",
                        "state_of_main_object": " A non-stick pan warmed up with oil awaits for the next ingredients."
                    },
                    {
                        "step": "Cooking Peppers",
                        "object": [
                            [
                                "peppers",
                                "similar (total similar)",
                                2
                            ],
                            [
                                "pan",
                                "similar (total similar)",
                                1
                            ]
                        ],
                        "action": "Put the pepper strips in the heated oil and cook for about 5 minutes or until they are soft.",
                        "state_of_main_object": " The non-stick pan is filled with soft, cooked pepper strips sauteed in oil."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.5
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cut Honeydew Melon",
                "steps": [
                    {
                        "step": "Cleaning the Melon",
                        "object": [
                            [
                                "honeydew melon",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "towel",
                                "new"
                            ]
                        ],
                        "action": "Person rinses the honeydew melon under water and dries it off with a towel.",
                        "state_of_main_object": " The Honeydew melon is clean and dry, ready for the next step of cutting."
                    },
                    {
                        "step": "Cutting the Melon in Half",
                        "object": [
                            [
                                "honeydew melon",
                                "similar shape",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Person uses knife to cut the melon into two halves from top to bottom.",
                        "state_of_main_object": " Two clean halves of a honeydew melon sit on the cutting board, freshly split with a knife."
                    },
                    {
                        "step": "Removing the Seeds",
                        "object": [
                            [
                                "melon half",
                                "similar shape",
                                2
                            ],
                            [
                                "spoon",
                                "new"
                            ]
                        ],
                        "action": "Person uses a spoon to remove the seeds from both halves of the melon.",
                        "state_of_main_object": " Honeydew melon halves, now seedless, are present."
                    },
                    {
                        "step": "Slicing the Halves",
                        "object": [
                            [
                                "melon half",
                                "similar shape",
                                3
                            ],
                            [
                                "knife",
                                "similar total",
                                2
                            ]
                        ],
                        "action": "Person uses a knife to slice each melon half.",
                        "state_of_main_object": " The honeydew melon is clean and divided into smaller, seedless slices."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.3,
                        0.2,
                        0.1
                    ],
                    [
                        0.7,
                        1.0,
                        0.5,
                        0.3
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.5
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cutting Watermelon",
                "steps": [
                    {
                        "step": "Prepare the Watermelon",
                        "object": [
                            [
                                "watermelon",
                                "new"
                            ],
                            [
                                "table",
                                "new"
                            ]
                        ],
                        "action": "Place the whole watermelon on a clean table.",
                        "state_of_main_object": " The entire watermelon lies on a clean, flat surface."
                    },
                    {
                        "step": "Cutting the Top and Bottom",
                        "object": [
                            [
                                "watermelon",
                                "similar shape",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Person using a knife to cut off the top and bottom of the watermelon.",
                        "state_of_main_object": " A watermelon with its top and bottom parts severed sits on the clean table."
                    },
                    {
                        "step": "Slicing it Vertically",
                        "object": [
                            [
                                "watermelon",
                                "similar shape",
                                1
                            ],
                            [
                                "knife",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Person using the knife to slice the watermelon vertically into half.",
                        "state_of_main_object": " Two large halves of watermelon sit on the table, freshly cut with a knife."
                    },
                    {
                        "step": "Quartering the halves",
                        "object": [
                            [
                                "watermelon",
                                "similar shape",
                                1
                            ],
                            [
                                "knife",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Person using the knife to cut the halved watermelon further into quarters.",
                        "state_of_main_object": " Four quarters of cut watermelon are on the table."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.4
                    ],
                    [
                        0.7,
                        1.0,
                        0.8,
                        0.6
                    ],
                    [
                        0.5,
                        0.7,
                        1.0,
                        0.7
                    ],
                    [
                        0.3,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cut Dragon Fruit",
                "steps": [
                    {
                        "step": "Preparing the Dragon Fruit",
                        "object": [
                            [
                                "dragon fruit",
                                "new"
                            ],
                            [
                                "table",
                                "new"
                            ]
                        ],
                        "action": "Set the dragon fruit on a clean table.",
                        "state_of_main_object": " A whole dragon fruit is placed on a clean table."
                    },
                    {
                        "step": "Cutting the Dragon Fruit in Half",
                        "object": [
                            [
                                "dragon fruit",
                                "similar(total similar)"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Hold the dragon fruit steady and cut it in half using the knife.",
                        "state_of_main_object": " On the clean table sits a dragon fruit cut in half."
                    },
                    {
                        "step": "Scooping out the Flesh",
                        "object": [
                            [
                                "dragon fruit",
                                "similar(texture similar)"
                            ],
                            [
                                "spoon",
                                "new"
                            ]
                        ],
                        "action": "Use the spoon to scoop out the white or red flesh of the dragon fruit.",
                        "state_of_main_object": " Two halves of a hollowed dragon fruit lay on the table, and their flesh has been removed."
                    },
                    {
                        "step": "Chopping Into Small Pieces",
                        "object": [
                            [
                                "dragon fruit",
                                "similar(shape similar)"
                            ],
                            [
                                "knife",
                                "same as step 2"
                            ]
                        ],
                        "action": "Chop the scooped dragon fruit flesh into small pieces with the knife.",
                        "state_of_main_object": " The clean table now has chopped pieces of dragon fruit flesh."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.3,
                        0.1
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.5
                    ],
                    [
                        0.3,
                        0.8,
                        1.0,
                        0.8
                    ],
                    [
                        0.1,
                        0.5,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Drying Apples in Oven",
                "steps": [
                    {
                        "step": "Preparing the Apples",
                        "object": [
                            [
                                "apple",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Use the knife to cut apples into thin slices.",
                        "state_of_main_object": " Thinly sliced apples are ready on the cutting board."
                    },
                    {
                        "step": "Arranging Apples",
                        "object": [
                            [
                                "apple",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "tray",
                                "new"
                            ]
                        ],
                        "action": "Arrange the apple slices on a baking tray neatly.",
                        "state_of_main_object": " A baking tray is neatly arranged with thin apple slices."
                    },
                    {
                        "step": "Preheating the Oven",
                        "object": [
                            [
                                "oven",
                                "new"
                            ]
                        ],
                        "action": "Preheat the oven to 200\u00b0F (93\u00b0C).",
                        "state_of_main_object": " Thinly sliced apples are arranged on a baking tray in a preheated oven."
                    },
                    {
                        "step": "Drying Apples",
                        "object": [
                            [
                                "apple",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "oven",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "tray",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Put the tray in the oven and dry the apple slices for about 2-3 hours.",
                        "state_of_main_object": " The apple slices are being dried inside a preheated oven."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.3
                    ],
                    [
                        0.6,
                        1.0,
                        0.7,
                        0.5
                    ],
                    [
                        0.4,
                        0.7,
                        1.0,
                        0.6
                    ],
                    [
                        0.3,
                        0.5,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Juicing a Potato",
                "steps": [
                    {
                        "step": "Cleaning the potato",
                        "object": [
                            [
                                "potato",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "brush",
                                "new"
                            ]
                        ],
                        "action": "Person using water and a brush to clean the dirt off the potato.",
                        "state_of_main_object": " One clean potato sits on the counter, free of any dirt."
                    },
                    {
                        "step": "Cutting the potato",
                        "object": [
                            [
                                "potato",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Person using a knife to cut the potato into small pieces.",
                        "state_of_main_object": " The clean potato has been cut into small pieces."
                    },
                    {
                        "step": "Placing potato in the juicer",
                        "object": [
                            [
                                "potato pieces",
                                "similar(texture similar)",
                                2
                            ],
                            [
                                "juicer",
                                "new"
                            ]
                        ],
                        "action": "Person puts the small pieces of potato into a juicer.",
                        "state_of_main_object": " Pieces of potato are inside the juicer, ready to be processed."
                    },
                    {
                        "step": "Juicing the potato",
                        "object": [
                            [
                                "potato pieces",
                                "similar(shape similar)",
                                3
                            ],
                            [
                                "juicer",
                                "similar(total similar)",
                                3
                            ]
                        ],
                        "action": "Person starts the juicer to extract the juice from the potato pieces.",
                        "state_of_main_object": " The juicer contains fresh potato juice extracted from the small potato pieces."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.5,
                        0.7,
                        1.0,
                        0.6
                    ],
                    [
                        0.3,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Apple Cider",
                "steps": [
                    {
                        "step": "Gathering Materials and Ingredients",
                        "object": [
                            [
                                "ingredients (apples, sugar, spices)",
                                "new"
                            ]
                        ],
                        "action": "Gather all the necessary materials and ingredients like apples, sugar and spices.",
                        "state_of_main_object": " Apples, sugar, and spices, the primary ingredients for apple cider, are ready on the counter."
                    },
                    {
                        "step": "Making Apple Puree",
                        "object": [
                            [
                                "bowl",
                                "new"
                            ],
                            [
                                "ingredients (apples)",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Place the apples in a large bowl and mash them into a puree using a fork.",
                        "state_of_main_object": " A large bowl containing a pureed apple mixture from mashed apples is on the countertop."
                    },
                    {
                        "step": "Adding Spices and Sugar",
                        "object": [
                            [
                                "apple puree",
                                "similar shape",
                                1
                            ],
                            [
                                "ingredients (spices, sugar)",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Add the sugar and spices into the apple puree and mix well.",
                        "state_of_main_object": " A large bowl holds a well-mixed blend of apple puree, sugar, and spices."
                    },
                    {
                        "step": "Heating the Mixture",
                        "object": [
                            [
                                "apple puree",
                                "similar texture",
                                1
                            ],
                            [
                                "pot",
                                "new"
                            ]
                        ],
                        "action": "Transfer the prepared puree into a pot and heat it on low flame until it turns into cider.",
                        "state_of_main_object": " A pot filled with homemade apple cider is simmering on a low flame."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.2,
                        0.2,
                        0.1
                    ],
                    [
                        0.2,
                        1.0,
                        0.4,
                        0.2
                    ],
                    [
                        0.2,
                        0.4,
                        1.0,
                        0.5
                    ],
                    [
                        0.1,
                        0.2,
                        0.5,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Banana Milk",
                "steps": [
                    {
                        "step": "Gathering ingredients",
                        "object": [
                            [
                                "banana",
                                "new"
                            ],
                            [
                                "milk",
                                "new"
                            ],
                            [
                                "sugar",
                                "new"
                            ],
                            [
                                "blender",
                                "new"
                            ]
                        ],
                        "action": "Collect a ripe banana, a glass of milk, some sugar according to taste, and a blender.",
                        "state_of_main_object": " All the necessary ingredients - a ripe banana, a glass of milk, some sugar, and a blender - are gathered."
                    },
                    {
                        "step": "Peeling and Slicing the Banana",
                        "object": [
                            [
                                "banana",
                                "similar total",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Peel the banana with your hands and use a knife to slice it into chunks.",
                        "state_of_main_object": " A ripe banana has been sliced into chunks and is ready for blending."
                    },
                    {
                        "step": "Blending ingredients",
                        "object": [
                            [
                                "banana",
                                "similar shape",
                                2
                            ],
                            [
                                "milk",
                                "similar total",
                                1
                            ],
                            [
                                "sugar",
                                "similar total",
                                1
                            ],
                            [
                                "blender",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Add the banana chunks, milk and sugar to the blender. Close the lid and blend all the ingredients.",
                        "state_of_main_object": " All the ingredients - banana chunks, milk, and sugar - have been blended together in the blender to create a smooth mixture."
                    },
                    {
                        "step": "Pouring into a glass",
                        "object": [
                            [
                                "blender",
                                "similar total",
                                3
                            ],
                            [
                                "glass",
                                "new"
                            ],
                            [
                                "straw",
                                "new"
                            ]
                        ],
                        "action": "Pour the banana milk from the blender into a glass and place a straw.",
                        "state_of_main_object": " A glass filled with blended banana milk is ready to serve, completed with a straw."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.4
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.6
                    ],
                    [
                        0.6,
                        0.9,
                        1.0,
                        0.8
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Carrot Juice",
                "steps": [
                    {
                        "step": "Gather Ingredients",
                        "object": [
                            [
                                "carrots",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "sugar",
                                "new"
                            ]
                        ],
                        "action": "Compile a selection of fresh carrots, filtered water, and a small amount of sugar.",
                        "state_of_main_object": " A selection of fresh carrots, filtered water, and a small amount of sugar is ready for use."
                    },
                    {
                        "step": "Prepare Carrots",
                        "object": [
                            [
                                "carrots",
                                "similar shape",
                                1
                            ],
                            [
                                "peeler",
                                "new"
                            ]
                        ],
                        "action": "Peel the carrots using a peeler.",
                        "state_of_main_object": " The carrots are now completely peeled and bare, ready for the next step."
                    },
                    {
                        "step": "Blend Ingredients",
                        "object": [
                            [
                                "carrots",
                                "similar texture",
                                2
                            ],
                            [
                                "water",
                                "similar texture",
                                1
                            ],
                            [
                                "blender",
                                "new"
                            ],
                            [
                                "sugar",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Put the carrots, water, and sugar into a blender and blend until smooth.",
                        "state_of_main_object": " A blender containing a smooth mixture of carrots, water, and sugar."
                    },
                    {
                        "step": "Filter and Serve",
                        "object": [
                            [
                                "carrot blend",
                                "similar(texture)",
                                3
                            ],
                            [
                                "strainer",
                                "new"
                            ],
                            [
                                "glass",
                                "new"
                            ]
                        ],
                        "action": "Strain the juice using a fine sieve into a glass.",
                        "state_of_main_object": " There is a glass full of strained carrot juice, with the waste residue left in the sieve."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.7,
                        0.3
                    ],
                    [
                        0.4,
                        0.7,
                        1.0,
                        0.9
                    ],
                    [
                        0.2,
                        0.3,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Coconut Milk",
                "steps": [
                    {
                        "step": "Coconut Preparation",
                        "object": [
                            [
                                "coconut",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Person using a knife to cut coconut into halves.",
                        "state_of_main_object": " The coconut is now cut into two halves on a cutting board."
                    },
                    {
                        "step": "Scraping the Coconut Meat",
                        "object": [
                            [
                                "coconut halves",
                                "similar shape",
                                1
                            ],
                            [
                                "coconut scraper",
                                "new"
                            ]
                        ],
                        "action": "Scrape the meat from the coconut halves using the coconut scraper.",
                        "state_of_main_object": " The halved coconut has been scraped and the removed meat lays on the side."
                    },
                    {
                        "step": "Blending Coconut with Water",
                        "object": [
                            [
                                "coconut meat",
                                "similar texture",
                                2
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "blender",
                                "new"
                            ]
                        ],
                        "action": "Add the coconut meat and some water into a blender and blend until it forms a thick mixture.",
                        "state_of_main_object": " The blender contains a thick mixture of coconut meat and water."
                    },
                    {
                        "step": "Straining the Mixture",
                        "object": [
                            [
                                "coconut mixture",
                                "similar shape",
                                3
                            ],
                            [
                                "strainer",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Strain the coconut mixture into a bowl using a strainer.",
                        "state_of_main_object": " There's a bowl filled with freshly made coconut milk, with leftover coconut pulp in the strainer."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.5,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.3,
                        0.6,
                        1.0,
                        0.4
                    ],
                    [
                        0.2,
                        0.3,
                        0.4,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Make Cinnamon Tea",
                "steps": [
                    {
                        "step": "Boil Water",
                        "object": [
                            [
                                "water",
                                "new"
                            ],
                            [
                                "kettle",
                                "new"
                            ]
                        ],
                        "action": "Fill the kettle with water and heat.",
                        "state_of_main_object": " The kettle, filled with water, is being heated."
                    },
                    {
                        "step": "Add Cinnamon",
                        "object": [
                            [
                                "water",
                                "similar texture",
                                1
                            ],
                            [
                                "cinnamon",
                                "new"
                            ]
                        ],
                        "action": "Add cinnamon sticks into the heated water.",
                        "state_of_main_object": " The kettle is filled with hot water and immersed cinnamon sticks."
                    },
                    {
                        "step": "Let it Steep",
                        "object": [
                            [
                                "water",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "cinnamon",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Let the cinnamon steep in the hot water for 10 minutes.",
                        "state_of_main_object": " A kettle holds hot water that's been steeping with cinnamon sticks for 10 minutes."
                    },
                    {
                        "step": "Strain and Serve",
                        "object": [
                            [
                                "cinnamon tea",
                                "new"
                            ],
                            [
                                "cup",
                                "new"
                            ]
                        ],
                        "action": "Strain the cinnamon tea into a cup and it's ready.",
                        "state_of_main_object": " A hot cup of cinnamon tea, brewed and strained, is ready to be served."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.5,
                        0.3
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.5
                    ],
                    [
                        0.6,
                        0.9,
                        1.0,
                        0.7
                    ],
                    [
                        0.4,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Fruit Tea",
                "steps": [
                    {
                        "step": "Boil Water",
                        "object": [
                            [
                                "kettle",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Fill the kettle with water and turn on to heat.",
                        "state_of_main_object": " The kettle is on and heating up with water inside."
                    },
                    {
                        "step": "Infuse Tea",
                        "object": [
                            [
                                "tea bag",
                                "new"
                            ],
                            [
                                "cup",
                                "new"
                            ]
                        ],
                        "action": "Place the tea bag in your cup.",
                        "state_of_main_object": " A cup with a tea bag sitting inside it is prepared."
                    },
                    {
                        "step": "Pour Hot Water",
                        "object": [
                            [
                                "cup",
                                "similar shape",
                                0.8
                            ],
                            [
                                "kettle",
                                "similar shape",
                                0.8
                            ]
                        ],
                        "action": "Pour the hot water from the kettle into the cup.",
                        "state_of_main_object": " A cup contains a tea bag steeping in hot water."
                    },
                    {
                        "step": "Add Fruit",
                        "object": [
                            [
                                "cup",
                                "similar shape",
                                0.7
                            ],
                            [
                                "fruit",
                                "new"
                            ]
                        ],
                        "action": "Add your desired fruit, such as slices of lemon or orange, into the cup.",
                        "state_of_main_object": " The cup now contains a fruit-infused tea with added lemon or orange slices."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.5,
                        0.3
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.4
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.5
                    ],
                    [
                        0.3,
                        0.4,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Make Ice Cubes with an Ice Tray",
                "steps": [
                    {
                        "step": "Preparation",
                        "object": [
                            [
                                "ice tray",
                                "new"
                            ],
                            [
                                "sink",
                                "new"
                            ]
                        ],
                        "action": "Place the ice tray near the sink.",
                        "state_of_main_object": " The ice tray is positioned beside the sink."
                    },
                    {
                        "step": "Filling the Tray",
                        "object": [
                            [
                                "ice tray",
                                "similar shape",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Fill the ice tray with cold water from the sink.",
                        "state_of_main_object": " An ice tray filled with cold water is placed near the sink."
                    },
                    {
                        "step": "Freezing",
                        "object": [
                            [
                                "ice tray",
                                "similar shape",
                                1
                            ],
                            [
                                "refrigerator",
                                "new"
                            ]
                        ],
                        "action": "Place the filled ice tray into the refrigerator.",
                        "state_of_main_object": " There is an ice tray filled with cold water in the refrigerator."
                    },
                    {
                        "step": "Waiting for Ice Cubes",
                        "object": [
                            [
                                "ice tray",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Wait for a few hours for the water to freeze into ice cubes.",
                        "state_of_main_object": " The ice tray, previously filled with water, is now set in the refrigerator with the water transformed into frozen ice cubes."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.4
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Make Iced Chocolate",
                "steps": [
                    {
                        "step": "Gather Ingredients",
                        "object": [
                            [
                                "milk",
                                "new"
                            ],
                            [
                                "chocolate",
                                "new"
                            ],
                            [
                                "ice cubes",
                                "new"
                            ],
                            [
                                "dairy cream",
                                "new"
                            ],
                            [
                                "blender",
                                "new"
                            ]
                        ],
                        "action": "Prepare ingredients: milk, chocolate, ice cubes, dairy cream.",
                        "state_of_main_object": " Milk, chocolate, ice cubes, and dairy cream are ready for use."
                    },
                    {
                        "step": "Melting the Chocolate",
                        "object": [
                            [
                                "chocolate",
                                "similar shape",
                                1
                            ],
                            [
                                "pot",
                                "new"
                            ]
                        ],
                        "action": "Place the chocolate in a pot and melt it over the stove.",
                        "state_of_main_object": " A pot sits on the stove containing melted chocolate."
                    },
                    {
                        "step": "Blend the Ingredients",
                        "object": [
                            [
                                "milk",
                                "shape similar",
                                1
                            ],
                            [
                                "chocolate",
                                "similar (total)",
                                2
                            ],
                            [
                                "ice cubes",
                                "similar shape",
                                1
                            ],
                            [
                                "dairy cream",
                                "similar shape",
                                1
                            ],
                            [
                                "blender",
                                "similar (total)",
                                1
                            ]
                        ],
                        "action": "Put the melted chocolate, milk, ice cubes and cream in the blender.",
                        "state_of_main_object": " The blender contains the ingredients"
                    },
                    {
                        "step": "Serve the Iced Chocolate",
                        "object": [
                            [
                                "glass",
                                "new"
                            ],
                            [
                                "mixture",
                                "similar shape",
                                3
                            ]
                        ],
                        "action": "Pour the mixture into a glass.",
                        "state_of_main_object": " A glass is filled with the iced chocolate mixture."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.5,
                        0.7,
                        1.0,
                        0.6
                    ],
                    [
                        0.4,
                        0.5,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Root Beer",
                "steps": [
                    {
                        "step": "Gathering Ingredients",
                        "object": [
                            [
                                "root beer extract",
                                "new"
                            ],
                            [
                                "sugar",
                                "new"
                            ],
                            [
                                "yeast",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Gather all the required ingredients and materials.",
                        "state_of_main_object": " All necessary ingredients and materials for making root beer are assembled on the kitchen counter."
                    },
                    {
                        "step": "Mixing Ingredients",
                        "object": [
                            [
                                "root beer extract",
                                "similar"
                            ],
                            [
                                "sugar",
                                "similar"
                            ],
                            [
                                "yeast",
                                "similar"
                            ],
                            [
                                "water",
                                "similar"
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Pour root beer extract, sugar, yeast into a large mixing bowl, then add the water.",
                        "state_of_main_object": " A large mixing bowl contains a mixture of root beer extract, sugar, yeast, and water."
                    },
                    {
                        "step": "Stirring the Mixture",
                        "object": [
                            [
                                "mixture",
                                "similar"
                            ],
                            [
                                "spoon",
                                "new"
                            ]
                        ],
                        "action": "Stir the mixture with the spoon until all the ingredients are fully dissolved.",
                        "state_of_main_object": " The large mixing bowl now contains a fully dissolved mixture of root beer extract, sugar, yeast, and water."
                    },
                    {
                        "step": "Bottling",
                        "object": [
                            [
                                "mixture",
                                "similar"
                            ],
                            [
                                "bottle",
                                "new"
                            ]
                        ],
                        "action": "Pour the mixture into a bottle, close it tightly and allow it to ferment.",
                        "state_of_main_object": " A closed bottle contains fermenting root beer mixture."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.3
                    ],
                    [
                        0.8,
                        1.0,
                        0.8,
                        0.5
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.8
                    ],
                    [
                        0.3,
                        0.5,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Sake",
                "steps": [
                    {
                        "step": "Selecting Rice",
                        "object": [
                            [
                                "rice",
                                "new"
                            ]
                        ],
                        "action": "Start by selecting the appropriate type of rice for sake.",
                        "state_of_main_object": " The chosen type of rice is ready for making sake."
                    },
                    {
                        "step": "Washing and Steaming Rice",
                        "object": [
                            [
                                "rice",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "stove",
                                "new"
                            ]
                        ],
                        "action": "Wash the rice thoroughly and then steam it on the stove.",
                        "state_of_main_object": " Selected rice for sake-making is now clean and steamed on the stove."
                    },
                    {
                        "step": "Koji Cultivation",
                        "object": [
                            [
                                "rice",
                                "similar(shape similar)",
                                2
                            ],
                            [
                                "koji",
                                "new"
                            ]
                        ],
                        "action": "Add koji to the steamed rice to convert the rice\u2019s starch into sugar.",
                        "state_of_main_object": " A mix of freshly steamed rice and koji, initiating the conversion of starch into sugar, sits in a vessel."
                    },
                    {
                        "step": "Fermentation",
                        "object": [
                            [
                                "rice-kji mixture",
                                "similar(texture similar)",
                                3
                            ],
                            [
                                "water",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "yeast",
                                "new"
                            ]
                        ],
                        "action": "Put the rice-koji mixture in a tub, add water and yeast to start the fermentation process.",
                        "state_of_main_object": " A tub is filled with a fermenting mixture of rice, koji, water, and yeast, initiating the process of sake production."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.5,
                        0.8,
                        1.0,
                        0.4
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Soda",
                "steps": [
                    {
                        "step": "Getting a Glass",
                        "object": [
                            [
                                "glass",
                                "new"
                            ]
                        ],
                        "action": "Get a clean, empty glass.",
                        "state_of_main_object": " There is a clean, empty glass on the counter."
                    },
                    {
                        "step": "Pouring Syrup",
                        "object": [
                            [
                                "glass",
                                "similar shape",
                                1
                            ],
                            [
                                "syrup",
                                "new"
                            ]
                        ],
                        "action": "Pour some soda syrup into the glass.",
                        "state_of_main_object": " An empty glass is partially filled with soda syrup."
                    },
                    {
                        "step": "Adding Carbonated Water",
                        "object": [
                            [
                                "glass",
                                "similar shape",
                                1
                            ],
                            [
                                "carbonated water",
                                "new"
                            ]
                        ],
                        "action": "Pour carbonated water into the glass.",
                        "state_of_main_object": " A glass is filled with a mix of soda syrup and carbonated water."
                    },
                    {
                        "step": "Stirring the Soda",
                        "object": [
                            [
                                "glass",
                                "similar shape",
                                1
                            ],
                            [
                                "spoon",
                                "new"
                            ]
                        ],
                        "action": "Stir the mix of syrup and carbonated water with a spoon.",
                        "state_of_main_object": " The glass contains mixed soda, fully blended by stirring, ready for drinking."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.5
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cleaning Rubber",
                "steps": [
                    {
                        "step": "Gather Cleaning Supplies",
                        "object": [
                            [
                                "cloth",
                                "new"
                            ],
                            [
                                "soap",
                                "new"
                            ]
                        ],
                        "action": "Gather a clean, soft cloth and mild soap.",
                        "state_of_main_object": " A clean, soft cloth and mild soap are ready for use to clean the rubber."
                    },
                    {
                        "step": "Prepare Soapy Water",
                        "object": [
                            [
                                "soap",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "bucket",
                                "new"
                            ]
                        ],
                        "action": "Mix some soap with warm water in a bucket.",
                        "state_of_main_object": " A bucket filled with warm soapy water and a clean, soft cloth are ready to be used for cleaning rubber."
                    },
                    {
                        "step": "Scrub the Rubber",
                        "object": [
                            [
                                "rubber",
                                "new"
                            ],
                            [
                                "cloth",
                                "similar(shape similar)",
                                2
                            ],
                            [
                                "soapy water",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "action": "Dip the cloth into the soapy water and scrub the rubber.",
                        "state_of_main_object": " The rubber is now damp and being actively cleaned with a soapy cloth."
                    },
                    {
                        "step": "Dry the Rubber",
                        "object": [
                            [
                                "rubber",
                                "similar(total similar)",
                                3
                            ]
                        ],
                        "action": "Pat the rubber dry using a clean towel.",
                        "state_of_main_object": " The rubber is now clean and dry, after being scrubbed with soapy water and then dried with a towel."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.7
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Remove pet hair from floor",
                "steps": [
                    {
                        "step": "Gathering Cleaning Supplies",
                        "object": [
                            [
                                "broom",
                                "new"
                            ],
                            [
                                "dustpan",
                                "new"
                            ]
                        ],
                        "action": "Collect a broom and dustpan.",
                        "state_of_main_object": " A broom and dustpan are ready to be used for cleaning."
                    },
                    {
                        "step": "Sweeping the Floor",
                        "object": [
                            [
                                "broom",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "dustpan",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "pet hair",
                                "new"
                            ]
                        ],
                        "action": "Sweep the floor with the broom to collect the pet hair.",
                        "state_of_main_object": " The floor is swept clean of pet hair, with the pet hair collected in a pile by the broom."
                    },
                    {
                        "step": "Collecting the Hair",
                        "object": [
                            [
                                "broom",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "dustpan",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "pet hair",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Sweep the pile of pet hair into the dustpan with the broom.",
                        "state_of_main_object": " The floor is clean, and the dustpan contains the collected pet hair."
                    },
                    {
                        "step": "Disposing of the Hair",
                        "object": [
                            [
                                "dustpan",
                                "similar(total similar)",
                                3
                            ],
                            [
                                "trash bag",
                                "new"
                            ],
                            [
                                "pet hair",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "action": "Dump the pet hair from the dustpan into the trash bag.",
                        "state_of_main_object": " The floor is clean with no pet hair, and the pet hair is disposed of in the trash bag."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.4,
                        0.2,
                        0.1
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.2
                    ],
                    [
                        0.3,
                        0.9,
                        1.0,
                        0.5
                    ],
                    [
                        0.2,
                        0.4,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Wash Net Curtains",
                "steps": [
                    {
                        "step": "Remove the Curtains",
                        "object": [
                            [
                                "curtains",
                                "new"
                            ]
                        ],
                        "action": "Take down the net curtains from the window.",
                        "state_of_main_object": " The net curtains have been removed from the window and are ready to be washed."
                    },
                    {
                        "step": "Soak the Curtains",
                        "object": [
                            [
                                "curtains",
                                "similar shape",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "basin",
                                "new"
                            ]
                        ],
                        "action": "Soak your curtains in a basin filled with cold water.",
                        "state_of_main_object": " The net curtains are now submerged in a basin of cold water."
                    },
                    {
                        "step": "Wash the Curtains",
                        "object": [
                            [
                                "curtains",
                                "similar shape",
                                1
                            ],
                            [
                                "soap",
                                "new"
                            ]
                        ],
                        "action": "Apply some soap to the curtains and gently rub to create lather.",
                        "state_of_main_object": " The net curtains are submerged in the basin, covered in soapy lather."
                    },
                    {
                        "step": "Rinse and Dry",
                        "object": [
                            [
                                "curtains",
                                "texture similar",
                                1
                            ]
                        ],
                        "action": "Rinse your curtains thoroughly and allow them to drip-dry.",
                        "state_of_main_object": " The net curtains are clean and wet, hanging to drip-dry."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.4
                    ],
                    [
                        0.4,
                        0.8,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.4,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cleaning Chocolate from Carpet",
                "steps": [
                    {
                        "step": "Removing Loose Chocolate",
                        "object": [
                            [
                                "carpet",
                                "new"
                            ],
                            [
                                "chocolate",
                                "new"
                            ],
                            [
                                "spoon",
                                "new"
                            ]
                        ],
                        "action": "Use a spoon to gently scrape off the loose pieces of chocolate from the carpet.",
                        "state_of_main_object": " The carpet has fewer chocolate pieces on it after some have been gently scraped off using a spoon."
                    },
                    {
                        "step": "Applying Detergent Solution",
                        "object": [
                            [
                                "carpet",
                                "similar shape",
                                1
                            ],
                            [
                                "detergent solution",
                                "new"
                            ],
                            [
                                "cloth",
                                "new"
                            ]
                        ],
                        "action": "Add some detergent solution onto a cloth and dab it on the stained area.",
                        "state_of_main_object": " The stained area of the carpet is slightly damp, with detergent solution applied, and the loose chocolate pieces have been removed."
                    },
                    {
                        "step": "Blotting the Stain",
                        "object": [
                            [
                                "carpet",
                                "similar shape",
                                1
                            ],
                            [
                                "cloth",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Blot the stain with the damp cloth, starting from the outer edge inward to avoid spreading the stain.",
                        "state_of_main_object": " The chocolate stain on the carpet is partially removed and damp from the detergent solution."
                    },
                    {
                        "step": "Drying the Carpet",
                        "object": [
                            [
                                "carpet",
                                "similar shape",
                                1
                            ],
                            [
                                "dry towel",
                                "new"
                            ]
                        ],
                        "action": "Dry the area by placing a dry towel over it and applying pressure. You can also let it air dry.",
                        "state_of_main_object": " The stained area of the carpet is now cleaned, damp, and covered with a dry towel or left to air dry."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.3,
                        0.2,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.5,
                        0.3
                    ],
                    [
                        0.6,
                        0.9,
                        1.0,
                        0.6
                    ],
                    [
                        0.4,
                        0.7,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Clean a Canvas",
                "steps": [
                    {
                        "step": "Collect Cleaning Materials",
                        "object": [
                            [
                                "soap",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "cloth",
                                "new"
                            ]
                        ],
                        "action": "Gather a mild soap, clean water, and a soft cloth.",
                        "state_of_main_object": " A mild soap, clean water, and a soft cloth are prepared and ready to use."
                    },
                    {
                        "step": "Make Soapy Water",
                        "object": [
                            [
                                "soap",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "water",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "action": "Mix a small amount of soap with the clean water.",
                        "state_of_main_object": " A soap and water solution, and a soft cloth are prepared for cleaning."
                    },
                    {
                        "step": "Wash the Canvas",
                        "object": [
                            [
                                "canvas",
                                "new"
                            ],
                            [
                                "soapy water",
                                "similar(texture similar)",
                                3
                            ],
                            [
                                "cloth",
                                "similar(total similar)",
                                4
                            ]
                        ],
                        "action": "Dip the soft cloth in the soapy water and gently clean the canvas.",
                        "state_of_main_object": " The canvas is now being gently cleaned with a soft cloth dipped in soapy water, therefore it's moist and undergoing cleaning."
                    },
                    {
                        "step": "Dry the Canvas",
                        "object": [
                            [
                                "canvas",
                                "similar(total similar)",
                                5
                            ],
                            [
                                "dry cloth",
                                "similar(texture similar)",
                                6
                            ]
                        ],
                        "action": "Use a dry soft cloth to pat the canvas dry.",
                        "state_of_main_object": " The canvas is cleaned and gently dried, looking fresh and tidy."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.4
                    ],
                    [
                        0.4,
                        0.8,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.4,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cleaning a Dirty Baseball",
                "steps": [
                    {
                        "step": "Preparation",
                        "object": [
                            [
                                "dirty baseball",
                                "new"
                            ],
                            [
                                "bucket",
                                "new"
                            ],
                            [
                                "warm water",
                                "new"
                            ],
                            [
                                "liquid soap",
                                "new"
                            ]
                        ],
                        "action": "Fill a bucket with warm water and add a few drops of liquid soap.",
                        "state_of_main_object": " There is a bucket filled with warm soapy water ready for cleaning."
                    },
                    {
                        "step": "Soaking",
                        "object": [
                            [
                                "dirty baseball",
                                "shape similar",
                                1
                            ],
                            [
                                "soapy water",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Place the dirty baseball into the bucket with soapy water.",
                        "state_of_main_object": " The dirty baseball is submerged in a bucket filled with warm, soapy water."
                    },
                    {
                        "step": "Scrubbing",
                        "object": [
                            [
                                "soaking baseball",
                                "similar shape",
                                1
                            ],
                            [
                                "soft cloth",
                                "new"
                            ]
                        ],
                        "action": "Use a soft cloth to scrub the baseball gently.",
                        "state_of_main_object": " The baseball, now soaked in a bucket of soapy water, is being scrubbed with a soft cloth.\n"
                    },
                    {
                        "step": "Drying",
                        "object": [
                            [
                                "wet baseball",
                                "shape similar",
                                1
                            ],
                            [
                                "dry towel",
                                "new"
                            ]
                        ],
                        "action": "Remove the baseball from water, and use a dry towel to pat it dry.",
                        "state_of_main_object": " The once dirty baseball is now clean and dry, sitting outside of the bucket."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.5,
                        0.2
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.6
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.8
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cutting Mushrooms",
                "steps": [
                    {
                        "step": "Gather Materials",
                        "object": [
                            [
                                "mushroom",
                                "new"
                            ],
                            [
                                "cutting board",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Place a fresh mushroom, a cutting board, and a sharp knife on the counter.",
                        "state_of_main_object": " A fresh mushroom, a cutting board, and a sharp knife are set in position on the kitchen counter."
                    },
                    {
                        "step": "Clean the Mushroom",
                        "object": [
                            [
                                "mushroom",
                                "similar total",
                                1
                            ],
                            [
                                "cloth",
                                "new"
                            ]
                        ],
                        "action": "Using a cloth, gently clean the mushroom to remove any dirt.",
                        "state_of_main_object": " A clean mushroom, a cutting board, and a sharp knife are on the counter."
                    },
                    {
                        "step": "Place the Mushroom on Cutting Board",
                        "object": [
                            [
                                "mushroom",
                                "similar total",
                                2
                            ],
                            [
                                "cutting board",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Put the cleaned mushroom on the cutting board.",
                        "state_of_main_object": " A clean mushroom is laid out on the cutting board ready to be cut."
                    },
                    {
                        "step": "Slice the Mushroom",
                        "object": [
                            [
                                "mushroom",
                                "similar shape",
                                3
                            ],
                            [
                                "knife",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Using the knife, carefully slice the mushroom into thin pieces.",
                        "state_of_main_object": " Thinly sliced pieces of mushroom lay neatly on the cutting board."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.4,
                        0.5,
                        0.3
                    ],
                    [
                        0.6,
                        1.0,
                        0.7,
                        0.4
                    ],
                    [
                        0.5,
                        0.8,
                        1.0,
                        0.9
                    ],
                    [
                        0.3,
                        0.5,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cutting Sushi",
                "steps": [
                    {
                        "step": "Preparing a clean cutting area",
                        "object": [
                            [
                                "cutting board",
                                "new"
                            ],
                            [
                                "clean cloth",
                                "new"
                            ]
                        ],
                        "action": "Wipe the area with a clean cloth and position the cutting board.",
                        "state_of_main_object": " A clean area is established with a cutting board set in position."
                    },
                    {
                        "step": "Position the sushi roll",
                        "object": [
                            [
                                "cutting board",
                                "similar shape",
                                1
                            ],
                            [
                                "sushi roll",
                                "new"
                            ]
                        ],
                        "action": "Place the sushi roll on the cutting board.",
                        "state_of_main_object": " The sushi roll is positioned on a clean and prepared cutting board."
                    },
                    {
                        "step": "Preparing the knife",
                        "object": [
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Clean your knife with warm water and dry it.",
                        "state_of_main_object": " The clean, dry knife is ready for use next to the sushi roll on the cutting board."
                    },
                    {
                        "step": "Cutting the sushi roll",
                        "object": [
                            [
                                "cutting board",
                                "similar shape",
                                2
                            ],
                            [
                                "sushi roll",
                                "similar shape",
                                2
                            ],
                            [
                                "knife",
                                "similar texture",
                                1
                            ]
                        ],
                        "action": "Cut the sushi roll into bite-sized pieces using the knife.",
                        "state_of_main_object": " The sushi roll on the cutting board has been divided into bite-sized pieces."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.3
                    ],
                    [
                        0.8,
                        1.0,
                        0.6,
                        0.5
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.5,
                        0.7,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Decorate a Laptop",
                "steps": [
                    {
                        "step": "Clean the Laptop Surface",
                        "object": [
                            [
                                "laptop",
                                "new"
                            ],
                            [
                                "cloth",
                                "new"
                            ]
                        ],
                        "action": "Person using a cloth to carefully clean the surface of the laptop.",
                        "state_of_main_object": " The laptop is clean and free of dust or dirt due to the cloth wiping."
                    },
                    {
                        "step": "Choose Stickers",
                        "object": [
                            [
                                "stickers",
                                "new"
                            ]
                        ],
                        "action": "Choose some laptop-compatible stickers of your liking.",
                        "state_of_main_object": " The laptop is clean and ready for decoration. The individual has a selection of desired laptop-compatible stickers at hand."
                    },
                    {
                        "step": "Apply Stickers",
                        "object": [
                            [
                                "laptop",
                                "similar texture",
                                1
                            ],
                            [
                                "stickers",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "action": "Person peeling off the backing paper and sticking to the laptop surface.",
                        "state_of_main_object": " The laptop is now decorated with stickers on its cleaned surface."
                    },
                    {
                        "step": "Confirm Decoration",
                        "object": [
                            [
                                "laptop",
                                "similar texture",
                                3
                            ]
                        ],
                        "action": "Examine the laptop to ensure stickers are applied evenly and secure.",
                        "state_of_main_object": " The laptop now has new stickers applied evenly and securely on its surface."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.5,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.3,
                        0.6,
                        1.0,
                        0.5
                    ],
                    [
                        0.2,
                        0.3,
                        0.5,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Harvesting Tulips",
                "steps": [
                    {
                        "step": "Identifying Ready Tulips",
                        "object": [
                            [
                                "tulips",
                                "new"
                            ]
                        ],
                        "action": "Identify which tulips are ready to be harvested - they should be brightly colored.",
                        "state_of_main_object": " The tulip garden has some brightly colored tulips marked for harvesting."
                    },
                    {
                        "step": "Holding the Stem",
                        "object": [
                            [
                                "tulip",
                                "similar shape",
                                1
                            ],
                            [
                                "hand",
                                "new"
                            ]
                        ],
                        "action": "Use one hand to gently grab the stem of the tulip near the base.",
                        "state_of_main_object": " The tulip is being held gently at the base of its stem."
                    },
                    {
                        "step": "Cutting the Stem",
                        "object": [
                            [
                                "tulip",
                                "similar shape",
                                1
                            ],
                            [
                                "hand",
                                "similar shape",
                                1
                            ],
                            [
                                "pruning shears",
                                "new"
                            ]
                        ],
                        "action": "With the other hand, use a set of pruning shears to cut the stem near the base.",
                        "state_of_main_object": " One brightly-colored tulip has been cut from its stem at the base using pruning shears."
                    },
                    {
                        "step": "Storing the Tulip",
                        "object": [
                            [
                                "tulip",
                                "similar shape",
                                1
                            ],
                            [
                                "vase",
                                "new"
                            ]
                        ],
                        "action": "Carefully place the freshly cut tulip in a vase of water.",
                        "state_of_main_object": " A vase filled with water and a freshly cut tulip."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.4,
                        0.2,
                        0.1
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.3
                    ],
                    [
                        0.6,
                        0.9,
                        1.0,
                        0.7
                    ],
                    [
                        0.5,
                        0.7,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Cone Hat",
                "steps": [
                    {
                        "step": "Select the Paper",
                        "object": [
                            [
                                "paper",
                                "new"
                            ]
                        ],
                        "action": "Select a large paper sheet of your favorite color.",
                        "state_of_main_object": " A large paper sheet in your favorite color lies chosen, ready for the next step."
                    },
                    {
                        "step": "Shape the Paper into a Cone",
                        "object": [
                            [
                                "paper",
                                "shape similar"
                            ]
                        ],
                        "action": "Person holds the paper and forms it into a cone shape.",
                        "state_of_main_object": " A large colored paper sheet has been shaped into a cone, forming the main body of a hat."
                    },
                    {
                        "step": "Secure the Cone Shape",
                        "object": [
                            [
                                "paper",
                                "similar"
                            ],
                            [
                                "adhesive tape",
                                "new"
                            ]
                        ],
                        "action": "Person secures the cone shape using adhesive tape.",
                        "state_of_main_object": " A cone-shaped hat made of paper, secured with adhesive tape, is in the person's hands."
                    },
                    {
                        "step": "Attach Elastic String",
                        "object": [
                            [
                                "adhesive tape",
                                "similar texture"
                            ],
                            [
                                "elastic string",
                                "new"
                            ]
                        ],
                        "action": "Attach an elastic string at the base of the cone hat using adhesive tape.",
                        "state_of_main_object": " A cone hat, secured with adhesive tape and having an elastic string attached at its base, is complete and ready to wear."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.4,
                        0.2
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.3
                    ],
                    [
                        0.5,
                        0.8,
                        1.0,
                        0.6
                    ],
                    [
                        0.4,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Drone",
                "steps": [
                    {
                        "step": "Assembling Drone Frame",
                        "object": [
                            [
                                "drone frame",
                                "new"
                            ],
                            [
                                "screws",
                                "new"
                            ]
                        ],
                        "action": "Attach all parts of drone frame together using screws.",
                        "state_of_main_object": " The drone frame is assembled with all parts secured together using screws."
                    },
                    {
                        "step": "Attaching Motors",
                        "object": [
                            [
                                "drone frame",
                                "similar shape",
                                1
                            ],
                            [
                                "motors",
                                "new"
                            ]
                        ],
                        "action": "Fix the motors appropriately to the assembled drone frame.",
                        "state_of_main_object": " The drone frame is now assembled with motors properly attached to it."
                    },
                    {
                        "step": "Connecting the Electronics",
                        "object": [
                            [
                                "drone frame",
                                "similar shape",
                                1
                            ],
                            [
                                "electronics (flight controller, ESCs, etc.)",
                                "new"
                            ]
                        ],
                        "action": "Carefully fit and connect the electronics to the drone frame and motors.",
                        "state_of_main_object": " The drone is now assembled with the frame, motors, and electronics all properly connected."
                    },
                    {
                        "step": "Installing the Propellers",
                        "object": [
                            [
                                "drone",
                                "similar shape",
                                1
                            ],
                            [
                                "propellers",
                                "new"
                            ]
                        ],
                        "action": "Securely attach the propellers to the motors.",
                        "state_of_main_object": " The drone is fully assembled"
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.5,
                        0.4
                    ],
                    [
                        0.8,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.6,
                        0.9,
                        1.0,
                        0.5
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Frisbee",
                "steps": [
                    {
                        "step": "Materials Gathering",
                        "object": [
                            [
                                "plastic sheet",
                                "new"
                            ]
                        ],
                        "action": "Gather a circular plastic sheet.",
                        "state_of_main_object": " A circular plastic sheet is prepared for shaping into a Frisbee."
                    },
                    {
                        "step": "Cutting Into Shape",
                        "object": [
                            [
                                "plastic sheet",
                                "similar(total)",
                                1
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "action": "Using the scissors, cut the plastic sheet into a disc shape.",
                        "state_of_main_object": " A plastic disc, cut from the original circular sheet, stands ready for further modification."
                    },
                    {
                        "step": "Forming Frisbee Edge",
                        "object": [
                            [
                                "plastic sheet",
                                "similar(shape)",
                                2
                            ],
                            [
                                "heat gun",
                                "new"
                            ]
                        ],
                        "action": "With a heat gun, mold the edges of the plastic upwards to form a frisbee.",
                        "state_of_main_object": " The circular plastic sheet has been reshaped with raised edges, taking the form of a Frisbee."
                    },
                    {
                        "step": "Cooling Down",
                        "object": [
                            [
                                "frisbee",
                                "similar(shape)",
                                3
                            ]
                        ],
                        "action": "Leave the frisbee to cool down and solidify.",
                        "state_of_main_object": " The newly formed frisbee sits out, cooling down and solidifying into a stable shape."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.4,
                        0.3
                    ],
                    [
                        0.4,
                        0.7,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.3,
                        0.5,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Make a Garden Flag",
                "steps": [
                    {
                        "step": "Gather Materials",
                        "object": [
                            [
                                "fabric",
                                "new"
                            ],
                            [
                                "paints",
                                "new"
                            ],
                            [
                                "brushes",
                                "new"
                            ],
                            [
                                "rod",
                                "new"
                            ]
                        ],
                        "action": "Gather some fabric, paints, brushes and a rod.",
                        "state_of_main_object": " Fabric, paints, brushes, and a rod are prepared and laid out ready for use."
                    },
                    {
                        "step": "Design the Flag",
                        "object": [
                            [
                                "fabric",
                                "similar total",
                                1
                            ],
                            [
                                "paints",
                                "similar total",
                                1
                            ],
                            [
                                "brushes",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Use the brushes and paints to create a design suitable for a garden on the fabric.",
                        "state_of_main_object": " The fabric now has a painted garden design on it."
                    },
                    {
                        "step": "Attach Fabric to Rod",
                        "object": [
                            [
                                "fabric",
                                "similar shape",
                                1
                            ],
                            [
                                "rod",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "After the paint has dried, attach one edge of the fabric to the rod.",
                        "state_of_main_object": " The painted design on the fabric is attached to the rod, representing a garden flag."
                    },
                    {
                        "step": "Display the Flag",
                        "object": [
                            [
                                "rod with attached flag",
                                "shape transform",
                                1
                            ]
                        ],
                        "action": "Finally, place the rod with attached flag in a suitable place in the garden.",
                        "state_of_main_object": " A garden flag, painted and attached to a rod, is displayed in a chosen location in the garden."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.5,
                        0.2
                    ],
                    [
                        0.8,
                        1.0,
                        0.7,
                        0.4
                    ],
                    [
                        0.6,
                        0.9,
                        1.0,
                        0.7
                    ],
                    [
                        0.3,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Gift Box",
                "steps": [
                    {
                        "step": "Selecting the Cardstock",
                        "object": [
                            [
                                "cardstock",
                                "new"
                            ]
                        ],
                        "action": "Choose a piece of cardstock",
                        "state_of_main_object": " A selected piece of cardstock is at hand, ready to be turned into a gift box."
                    },
                    {
                        "step": "Folding the Cardstock",
                        "object": [
                            [
                                "cardstock",
                                "texture similar",
                                1
                            ]
                        ],
                        "action": "Fold the cardstock in half, open it up, and fold it in half the other way.",
                        "state_of_main_object": " The cardstock is folded into four equal parts, creating a grid-like pattern."
                    },
                    {
                        "step": "Making the Box Shape",
                        "object": [
                            [
                                "cardstock",
                                "shape similar",
                                2
                            ]
                        ],
                        "action": "Fold the corners in on themselves and tape them to create the box shape.",
                        "state_of_main_object": " The previously flat cardstock is now a box-shaped object, held together by tape at the corners."
                    },
                    {
                        "step": "Decorating the Box",
                        "object": [
                            [
                                "box",
                                "shape similar",
                                3
                            ],
                            [
                                "stickers",
                                "new"
                            ],
                            [
                                "ribbons",
                                "new"
                            ]
                        ],
                        "action": "Decorate the box with stickers and ribbons.",
                        "state_of_main_object": " A folded and assembled cardstock box, decorated with stickers and ribbons."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.7,
                        1.0,
                        0.7,
                        0.6
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.6,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Green Tea Face Mask",
                "steps": [
                    {
                        "step": "Gathering the Ingredients",
                        "object": [
                            [
                                "green tea",
                                "new"
                            ],
                            [
                                "honey",
                                "new"
                            ],
                            [
                                "lemon",
                                "new"
                            ]
                        ],
                        "action": "Gather the green tea, honey, and lemon.",
                        "state_of_main_object": " Green tea, honey, and lemon are assembled and ready to use."
                    },
                    {
                        "step": "Mixing Ingredients",
                        "object": [
                            [
                                "green tea",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "honey",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "lemon",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Mix one tablespoon of green tea leaves with one tablespoon of honey and lemon.",
                        "state_of_main_object": " A mixture of green tea leaves, honey, and lemon is prepared."
                    },
                    {
                        "step": "Applying the Mask",
                        "object": [
                            [
                                "face",
                                "new"
                            ],
                            [
                                "Green Tea Mixture",
                                "similar texture",
                                2
                            ]
                        ],
                        "action": "Apply the green tea mixture on your face.",
                        "state_of_main_object": " Your face has a layer of green tea, honey, and lemon mixture applied to it."
                    },
                    {
                        "step": "Rinsing off the Mask",
                        "object": [
                            [
                                "face",
                                "similar(total similar)",
                                3
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "towel",
                                "new"
                            ]
                        ],
                        "action": "After 15-20 minutes, rinse off the mask with warm water and pat the face dry with a clean towel.",
                        "state_of_main_object": " The face has been cleansed and dried after the application of the green tea mask."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.2,
                        0.1
                    ],
                    [
                        0.6,
                        1.0,
                        0.7,
                        0.3
                    ],
                    [
                        0.2,
                        0.7,
                        1.0,
                        0.4
                    ],
                    [
                        0.1,
                        0.3,
                        0.4,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Make Paper Basket",
                "steps": [
                    {
                        "step": "Fold the Paper",
                        "object": [
                            [
                                "Paper",
                                "new"
                            ]
                        ],
                        "action": "Fold a piece of paper diagonally to form a triangle.",
                        "state_of_main_object": " A piece of paper has been folded diagonally, creating a triangle shape."
                    },
                    {
                        "step": "Cut the Triangle",
                        "object": [
                            [
                                "Paper",
                                "similar shape",
                                1
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "action": "Use scissors to trim off the excess from the bottom of the triangle",
                        "state_of_main_object": " The paper is now a perfect triangle shape with the bottom excess trimmed off."
                    },
                    {
                        "step": "Fold the Corners",
                        "object": [
                            [
                                "Paper",
                                "similar texture",
                                2
                            ],
                            [
                                "fingers",
                                "new"
                            ]
                        ],
                        "action": "Fold the pointed corners of the triangle towards the base.",
                        "state_of_main_object": " The paper is now in the shape of an envelope-like structure with pointed corners folded towards the base."
                    },
                    {
                        "step": "Create the Basket Handle",
                        "object": [
                            [
                                "Paper",
                                "similar texture",
                                3
                            ],
                            [
                                "glue",
                                "new"
                            ]
                        ],
                        "action": "Cut a strip of paper and attach it as a handle using glue",
                        "state_of_main_object": " A paper basket with a handle now exists, assembled from the folded triangle and the cut strip."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.7,
                        0.3
                    ],
                    [
                        0.3,
                        0.8,
                        1.0,
                        0.4
                    ],
                    [
                        0.2,
                        0.3,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Pirate Hat",
                "steps": [
                    {
                        "step": "Fold Paper in Half",
                        "object": [
                            [
                                "paper",
                                "new"
                            ]
                        ],
                        "action": "Take a rectangular piece of black paper and fold it in half lengthwise.",
                        "state_of_main_object": " There is a black piece of paper on the table, folded lengthwise."
                    },
                    {
                        "step": "Fold Corners",
                        "object": [
                            [
                                "paper",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Fold the right and left top corners to meet in the middle.",
                        "state_of_main_object": " The rectangular black paper is now folded to form a triangular shape with two corners meeting at the middle."
                    },
                    {
                        "step": "Fold the Bottom Strip Up",
                        "object": [
                            [
                                "paper",
                                "similar total",
                                2
                            ]
                        ],
                        "action": "Take the bottom strip and fold it upward to cover the base of the triangle.",
                        "state_of_main_object": " The black paper is now folded into a triangular shape with the bottom strip covering the base."
                    },
                    {
                        "step": "Turn over and repeat",
                        "object": [
                            [
                                "paper",
                                "similar total",
                                3
                            ]
                        ],
                        "action": "Flip the hat over and repeat the last step.",
                        "state_of_main_object": " The Pirate Hat is completely made from black paper, double-folded at the base on both sides to keep the triangular shape secure."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.4
                    ],
                    [
                        0.5,
                        1.0,
                        0.7,
                        0.4
                    ],
                    [
                        0.3,
                        0.5,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.3,
                        0.5,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Chocolate Covered Fruit",
                "steps": [
                    {
                        "step": "Preparation of the Fruit",
                        "object": [
                            [
                                "fruit",
                                "new"
                            ]
                        ],
                        "action": "Wash and dry the fruit you want to cover with chocolate.",
                        "state_of_main_object": " The fruit intended for chocolate covering is clean and dry."
                    },
                    {
                        "step": "Melting the Chocolate",
                        "object": [
                            [
                                "chocolate bar",
                                "new"
                            ],
                            [
                                "bowl",
                                "new"
                            ],
                            [
                                "microwave",
                                "new"
                            ]
                        ],
                        "action": "Break the chocolate bar into pieces, put it in a bowl, and microwave it until it melts.",
                        "state_of_main_object": " The fruit is clean and dry, and a bowl of melted chocolate is prepared."
                    },
                    {
                        "step": "Dipping the Fruit",
                        "object": [
                            [
                                "fruit",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "melted chocolate",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "action": "Dip the fruit into the melted chocolate.",
                        "state_of_main_object": " The fruit is now covered in a layer of melted chocolate."
                    },
                    {
                        "step": "Cooling Down",
                        "object": [
                            [
                                "fruit",
                                "similar(shape similar)",
                                3
                            ]
                        ],
                        "action": "Put the fruit onto a clean surface or wax paper and let it cool until the chocolate hardens.",
                        "state_of_main_object": " The fruit, covered with hardened chocolate, is placed on a clean surface or wax paper."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.4,
                        0.3,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.5,
                        0.3
                    ],
                    [
                        0.7,
                        0.8,
                        1.0,
                        0.9
                    ],
                    [
                        0.5,
                        0.7,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Toast in Oven",
                "steps": [
                    {
                        "step": "Preheat the Oven",
                        "object": [
                            [
                                "oven",
                                "new"
                            ]
                        ],
                        "action": "Person sets the oven at broil setting.",
                        "state_of_main_object": " The oven is now set and warmed to the broil setting."
                    },
                    {
                        "step": "Prepare the Bread",
                        "object": [
                            [
                                "bread",
                                "new"
                            ],
                            [
                                "plate",
                                "new"
                            ]
                        ],
                        "action": "Place a slice of bread on a plate.",
                        "state_of_main_object": " There is a slice of bread on the plate, ready to be toasted, and the oven is preheated on the broil setting."
                    },
                    {
                        "step": "Place Bread in Oven",
                        "object": [
                            [
                                "bread",
                                "similar shape",
                                1
                            ],
                            [
                                "oven",
                                "similar total",
                                1
                            ],
                            [
                                "oven tray",
                                "new"
                            ]
                        ],
                        "action": "Person carefully places the plate with bread on an oven tray.",
                        "state_of_main_object": " An oven tray holds a plate with a slice of bread ready for toasting."
                    },
                    {
                        "step": "Bake the Bread",
                        "object": [
                            [
                                "bread",
                                "similar total",
                                1
                            ],
                            [
                                "oven",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Close the oven and bake for about 2-3 minutes or until it turns golden brown.",
                        "state_of_main_object": " The oven contains a tray holding a plate with a golden-brown toasted slice of bread."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.3,
                        0.2,
                        0.1
                    ],
                    [
                        0.8,
                        1.0,
                        0.5,
                        0.3
                    ],
                    [
                        0.7,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.5,
                        0.7,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Clean Mops",
                "steps": [
                    {
                        "step": "Remove Debris",
                        "object": [
                            [
                                "mop",
                                "new"
                            ],
                            [
                                "debris",
                                "new"
                            ]
                        ],
                        "action": "Shake off or manually remove the debris attached to the mop.",
                        "state_of_main_object": " The mop is devoid of any attached debris or dirt."
                    },
                    {
                        "step": "Fill the Bucket",
                        "object": [
                            [
                                "bucket",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Fill a bucket with warm water and soap.",
                        "state_of_main_object": " A bucket containing warm, soapy water is prepared."
                    },
                    {
                        "step": "Soak the Mop",
                        "object": [
                            [
                                "mop",
                                "similiar",
                                1
                            ],
                            [
                                "bucket",
                                "similar",
                                1
                            ]
                        ],
                        "action": "Place the dirty mop into the bucket filled with warm soapy water.",
                        "state_of_main_object": " The mop is soaking in a bucket of warm soapy water."
                    },
                    {
                        "step": "Rinse and Dry",
                        "object": [
                            [
                                "mop",
                                "similar_shape",
                                3
                            ],
                            [
                                "water",
                                "similar",
                                2
                            ]
                        ],
                        "action": "Rinse the mop with clean water and allow it to dry.",
                        "state_of_main_object": " The mop is now clean and drying."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.3,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.1
                    ],
                    [
                        0.3,
                        0.8,
                        1.0,
                        0.9
                    ],
                    [
                        0.2,
                        0.1,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Clean Sandals",
                "steps": [
                    {
                        "step": "Preparation",
                        "action": "Remove any extra dirt from sandals with a dry brush.",
                        "object": [
                            [
                                "sandals",
                                "new"
                            ],
                            [
                                "brush",
                                "new"
                            ]
                        ],
                        "state_of_main_object": " The sandals are free of excess dirt, brushed thoroughly with a dry brush."
                    },
                    {
                        "step": "Soapy Water",
                        "action": "Mix warm water and detergent in a basin.",
                        "object": [
                            [
                                "water",
                                "new"
                            ],
                            [
                                "detergent",
                                "new"
                            ],
                            [
                                "basin",
                                "new"
                            ]
                        ],
                        "state_of_main_object": " A basin is prepared with a mixture of warm water and detergent."
                    },
                    {
                        "step": "Scrubbing the Sandals",
                        "action": "Dip the brush into soapy water and scrub the sandals.",
                        "object": [
                            [
                                "sandals",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "brush",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "soapy water",
                                "new"
                            ]
                        ],
                        "state_of_main_object": " The sandals are now damp and soapy, with visible indications of being scrubbed."
                    },
                    {
                        "step": "Drying",
                        "action": "Pat sandals with a dry towel and leave them to air dry.",
                        "object": [
                            [
                                "sandals",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "towel",
                                "new"
                            ]
                        ],
                        "state_of_main_object": " The sandals are damp but clean, left to air dry."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.8,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.7,
                        0.8,
                        1.0,
                        0.5
                    ],
                    [
                        0.6,
                        0.7,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cleaning Silk Flowers",
                "steps": [
                    {
                        "step": "Preparation",
                        "object": [
                            [
                                "silk flowers",
                                "new"
                            ],
                            [
                                "drying cloth",
                                "new"
                            ]
                        ],
                        "action": "Set the silk flowers on a drying cloth to protect the surface underneath.",
                        "state_of_main_object": " The silk flowers are resting on a drying cloth, with the surface beneath them protected."
                    },
                    {
                        "step": "Dust Removal",
                        "object": [
                            [
                                "silk flowers",
                                "similar texture",
                                1
                            ],
                            [
                                "soft brush",
                                "new"
                            ]
                        ],
                        "action": "Use a soft brush to gently remove the dust from each flower.",
                        "state_of_main_object": " The silk flowers are now free from dust and sitting on a drying cloth."
                    },
                    {
                        "step": "Cleaning",
                        "object": [
                            [
                                "silk flowers",
                                "similar total",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "mild soap",
                                "new"
                            ]
                        ],
                        "action": "Mix some water with mild soap and gently dab the flowers with the mixture.",
                        "state_of_main_object": " The silk flowers are damp from being gently dabbed with a soap and water mixture."
                    },
                    {
                        "step": "Drying",
                        "object": [
                            [
                                "silk flowers",
                                "similar texture",
                                1
                            ],
                            [
                                "drying cloth",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Pat the flowers dry with the drying cloth.",
                        "state_of_main_object": " The silk flowers are clean, damp, and resting on the drying cloth."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.75,
                        0.65,
                        0.5
                    ],
                    [
                        0.75,
                        1.0,
                        0.75,
                        0.6
                    ],
                    [
                        0.65,
                        0.75,
                        1.0,
                        0.7
                    ],
                    [
                        0.5,
                        0.6,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cook Soybeans",
                "steps": [
                    {
                        "step": "Rinsing the Soybeans",
                        "object": [
                            [
                                "soybeans",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Place the soybeans into a colander and rinse them under cold running water.",
                        "state_of_main_object": " The colander is filled with rinsed soybeans under a stream of cold water."
                    },
                    {
                        "step": "Soaking the Soybeans",
                        "object": [
                            [
                                "soybeans",
                                "similar (total similar)",
                                1
                            ],
                            [
                                "water",
                                "similar (total similar)",
                                1
                            ]
                        ],
                        "action": "Cover the rinsed soybeans with plenty of water and let them soak overnight.",
                        "state_of_main_object": " The rinsed soybeans are soaking in a bowl filled with water, left to rest overnight."
                    },
                    {
                        "step": "Rinsing Soaked Soybeans",
                        "object": [
                            [
                                "soybeans",
                                "similar (total similar)",
                                2
                            ],
                            [
                                "colander",
                                "new"
                            ],
                            [
                                "water",
                                "similar (total similar)",
                                2
                            ]
                        ],
                        "action": "Drain and rinse the soaked soybeans under cold running water.",
                        "state_of_main_object": " The colander contains rinsed, soaked, and drained soybeans, ready to be cooked."
                    },
                    {
                        "step": "Cooking the Soybeans",
                        "object": [
                            [
                                "soybeans",
                                "similar (shape similar)",
                                3
                            ],
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "water",
                                "similar (total similar)",
                                3
                            ]
                        ],
                        "action": "Put the soybeans into a pot, add water, and bring it to a boil. Reduce the heat and let it simmer until the beans are tender.",
                        "state_of_main_object": " The pot now contains simmering, tender soybeans in boiling water."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.7,
                        0.3
                    ],
                    [
                        0.4,
                        0.7,
                        1.0,
                        0.8
                    ],
                    [
                        0.2,
                        0.3,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cooking Zoodles",
                "steps": [
                    {
                        "step": "Washing the Zucchini",
                        "object": [
                            [
                                "Zucchini",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "First, wash the zucchini thoroughly under running water.",
                        "state_of_main_object": " The zucchini is now clean and ready for further preparation."
                    },
                    {
                        "step": "Cutting the Zucchini",
                        "object": [
                            [
                                "Zucchini",
                                "similar (total similar)",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Next, use a kitchen knife to cut off the ends of the zucchini.",
                        "state_of_main_object": " The zucchinis are now clean and their ends are cut off."
                    },
                    {
                        "step": "Making Zoodles",
                        "object": [
                            [
                                "Zucchini",
                                "similar (total similar)",
                                2
                            ],
                            [
                                "spiralizer",
                                "new"
                            ]
                        ],
                        "action": "Use the spiralizer to turn the zucchini into noodle-like zoodles.",
                        "state_of_main_object": " Spiralized zoodles replace the whole zucchini."
                    },
                    {
                        "step": "Cooking the Zoodles",
                        "object": [
                            [
                                "Zoodles",
                                "similar (shape similar)",
                                3
                            ],
                            [
                                "pan",
                                "new"
                            ],
                            [
                                "oil",
                                "new"
                            ]
                        ],
                        "action": "Eventually, heat a small amount of oil in a pan and toss the zoodles for a few minutes until they are hot.",
                        "state_of_main_object": " A pan filled with hot, freshly cooked zoodles lightly coated in oil is on the stovetop."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.5,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.3,
                        0.6,
                        1.0,
                        0.5
                    ],
                    [
                        0.2,
                        0.3,
                        0.5,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Eating Plums",
                "steps": [
                    {
                        "step": "Choosing a Plum",
                        "object": [
                            [
                                "plum",
                                "new"
                            ]
                        ],
                        "action": "Choose a firm, fresh plum which is slightly soft to the touch.",
                        "state_of_main_object": " You hold a fresh, slightly soft plum ready to be consumed."
                    },
                    {
                        "step": "Washing the Plum",
                        "object": [
                            [
                                "plum",
                                "totally similar",
                                1
                            ],
                            [
                                "sink",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Wash the plum under cold, clean tap water.",
                        "state_of_main_object": " The plum is clean and ready to be eaten."
                    },
                    {
                        "step": "Cutting the Plum",
                        "object": [
                            [
                                "plum",
                                "totally similar",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Use a knife to cut around the perimeter of the plum.",
                        "state_of_main_object": " The plum is now cleanly sliced into two halves."
                    },
                    {
                        "step": "Eating the Plum",
                        "object": [
                            [
                                "plum",
                                "similar texture",
                                1
                            ],
                            [
                                "spoon",
                                "new"
                            ]
                        ],
                        "action": "Use a spoon to scoop out the plum\u2019s flesh.",
                        "state_of_main_object": " The fully cleaned and cut plum is ready to be eaten."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.0,
                        0.0
                    ],
                    [
                        0.9,
                        1.0,
                        0.7,
                        0.0
                    ],
                    [
                        0.0,
                        0.8,
                        1.0,
                        0.6
                    ],
                    [
                        0.0,
                        0.0,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Feeding Baby Rabbits",
                "steps": [
                    {
                        "step": "Preparing Formula",
                        "object": [
                            [
                                "bottle",
                                "new"
                            ],
                            [
                                "rabbit milk replacer",
                                "new"
                            ]
                        ],
                        "action": "Mix a measured amount of rabbit milk replacer with warm water in a bottle.",
                        "state_of_main_object": " A bottle filled with rabbit milk replacer and warm water mixture is ready."
                    },
                    {
                        "step": "Heating the Formula",
                        "object": [
                            [
                                "bottle",
                                "similar total",
                                1
                            ],
                            [
                                "warm water",
                                "new"
                            ]
                        ],
                        "action": "Heat the bottle in a bowl of warm water.",
                        "state_of_main_object": " The bottle filled with mixed rabbit milk replacer is warmed and ready for feeding."
                    },
                    {
                        "step": "Feeding the Rabbit",
                        "object": [
                            [
                                "bottle",
                                "similar total",
                                1
                            ],
                            [
                                "baby rabbit",
                                "new"
                            ]
                        ],
                        "action": "Hold the baby rabbit upright and gently introduce the nipple of the bottle to its mouth.",
                        "state_of_main_object": " The baby rabbit, held upright, is beginning to accept the nipple of the bottle containing warm rabbit milk replacer."
                    },
                    {
                        "step": "Returning Rabbit to Cage",
                        "object": [
                            [
                                "baby rabbit",
                                "similar shape",
                                1
                            ],
                            [
                                "cage",
                                "new"
                            ]
                        ],
                        "action": "Put the rabbit back in its cage after it has finished feeding.",
                        "state_of_main_object": " The baby rabbit, now satiated, is back in its cage."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.4,
                        1.0,
                        0.7,
                        0.4
                    ],
                    [
                        0.2,
                        0.6,
                        1.0,
                        0.5
                    ],
                    [
                        0.1,
                        0.3,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Grow Pumpkins Indoors",
                "steps": [
                    {
                        "step": "Prepare the Pot",
                        "object": [
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "soil",
                                "new"
                            ]
                        ],
                        "action": "Add potting soil into a large pot.",
                        "state_of_main_object": " A large pot filled with potting soil sits indoors, ready for planting."
                    },
                    {
                        "step": "Plant the seeds",
                        "object": [
                            [
                                "pot",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "pumpkin seeds",
                                "new"
                            ]
                        ],
                        "action": "Bury a few pumpkin seeds in the soil.",
                        "state_of_main_object": " The large pot is filled with potting soil and a few pumpkin seeds have been planted in it."
                    },
                    {
                        "step": "Water the soil",
                        "object": [
                            [
                                "pot",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "watering can",
                                "new"
                            ]
                        ],
                        "action": "Moisten the soil using a watering can.",
                        "state_of_main_object": " The pot now contains damp soil with seeds embedded in it."
                    },
                    {
                        "step": "Place in appropriate sunlight",
                        "object": [
                            [
                                "pot",
                                "similar(total similar)",
                                3
                            ],
                            [
                                "sunlight",
                                "new"
                            ]
                        ],
                        "action": "Put the pot in a sun-facing window for adequate sunlight.",
                        "state_of_main_object": " The large pot, containing moist soil and pumpkin seeds, is placed by a sun-facing window."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.4
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Harvest Lavender",
                "steps": [
                    {
                        "step": "Prepare Cutting Tools",
                        "object": [
                            [
                                "pruners",
                                "new"
                            ]
                        ],
                        "action": "Clean your pruners properly.",
                        "state_of_main_object": " The pruners are ready and clean for harvesting lavender."
                    },
                    {
                        "step": "Locate a Good Bundle",
                        "object": [
                            [
                                "lavender plant",
                                "new"
                            ],
                            [
                                "pruners",
                                "similar shape"
                            ]
                        ],
                        "action": "Identify a good lavender bundle to cut.",
                        "state_of_main_object": " The pruners are clean and ready to use.\nstate 2"
                    },
                    {
                        "step": "Cut Lavender Stems",
                        "object": [
                            [
                                "pruners",
                                "similar total",
                                1
                            ],
                            [
                                "lavender plant",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Position the pruners near the plant\u2019s base and cut.",
                        "state_of_main_object": " A cut lavender bundle is now separated from the plant, ready for collection."
                    },
                    {
                        "step": "Collect Lavender",
                        "object": [
                            [
                                "lavender bundle",
                                "new"
                            ],
                            [
                                "basket",
                                "new"
                            ]
                        ],
                        "action": "Place the harvested lavender stems into a basket.",
                        "state_of_main_object": " A basket has been filled with freshly cut lavender stems."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.9,
                        1.0,
                        0.7,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.6
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Harvesting Red Clover",
                "steps": [
                    {
                        "step": "Preparing the Equipment",
                        "object": [
                            [
                                "scissors",
                                "new"
                            ],
                            [
                                "basket",
                                "new"
                            ]
                        ],
                        "action": "Prepare a pair of sharp scissors and a basket.",
                        "state_of_main_object": " A pair of sharp scissors and a basket are ready for use."
                    },
                    {
                        "step": "Identifying Mature Red Clover",
                        "object": [
                            [
                                "scissors",
                                "similar texture",
                                1
                            ],
                            [
                                "basket",
                                "similar shape",
                                1
                            ],
                            [
                                "red clover",
                                "new"
                            ]
                        ],
                        "action": "Identify the red clover that is fully grown with red blossoms.",
                        "state_of_main_object": " A pair of sharp scissors and an empty basket are at hand, with fully bloomed red clover in sight."
                    },
                    {
                        "step": "Cutting the Red Clover",
                        "object": [
                            [
                                "scissors",
                                "total similar",
                                2
                            ],
                            [
                                "basket",
                                "similar shape",
                                2
                            ],
                            [
                                "red clover",
                                "similar shape",
                                2
                            ]
                        ],
                        "action": "Person uses the prepared scissors to cut the stem of red clover, just above the ground.",
                        "state_of_main_object": " The fully grown red clover with red blossoms has been cut and still remains on the ground."
                    },
                    {
                        "step": "Collecting the Red Clover",
                        "object": [
                            [
                                "basket",
                                "similar shape",
                                3
                            ],
                            [
                                "red clover",
                                "similar shape",
                                3
                            ]
                        ],
                        "action": "Audience carefully puts the harvested red clover into the basket.",
                        "state_of_main_object": " The basket is filled with harvested red clover, freshly cut from their stems."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.5
                    ],
                    [
                        0.4,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.2,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            }
        ]
    },
    "gpt_4": {
        "goals": [
            {
                "goal": "Cooking Oysters",
                "steps": [
                    {
                        "step": "Preparing the Oysters",
                        "object": [
                            [
                                "oysters",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Person uses the knife to open the oysters shell.",
                        "state_of_main_object": " The oysters now lie open with their shells slit using a knife."
                    },
                    {
                        "step": "Cleaning the Oysters",
                        "object": [
                            [
                                "oysters",
                                "total similar",
                                1
                            ],
                            [
                                "brush",
                                "new"
                            ]
                        ],
                        "action": "Person uses the brush to gently scrub the oysters.",
                        "state_of_main_object": " The oysters are now clean and remain open."
                    },
                    {
                        "step": "Heating the stove",
                        "object": [
                            [
                                "stove",
                                "new"
                            ]
                        ],
                        "action": "Person turns on the stove to a medium high setting.",
                        "state_of_main_object": " The stove is on with a medium high flame, ready for cooking the oysters."
                    },
                    {
                        "step": "Cooking the Oysters",
                        "object": [
                            [
                                "oysters",
                                "shape similar",
                                1
                            ],
                            [
                                "pan",
                                "new"
                            ]
                        ],
                        "action": "Person places the oysters in a pan and cooks them over the heated stove.",
                        "state_of_main_object": " The oysters are in a pan, cooking on a medium-high heat stove."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.3,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.4,
                        0.3
                    ],
                    [
                        0.3,
                        0.4,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.3,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cook Rock Fish",
                "steps": [
                    {
                        "step": "Preparation of Ingredients",
                        "object": [
                            [
                                "rock fish",
                                "new"
                            ],
                            [
                                "garlic",
                                "new"
                            ],
                            [
                                "olive oil",
                                "new"
                            ],
                            [
                                "lemon",
                                "new"
                            ]
                        ],
                        "action": "Prepare rock fish, fresh garlic, olive oil and lemon.",
                        "state_of_main_object": " Raw rockfish, fresh garlic, olive oil, and a lemon are laid out, ready for preparation."
                    },
                    {
                        "step": "Marinating the Fish",
                        "object": [
                            [
                                "rock fish",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "garlic",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "olive oil",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "lemon",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Person should marinate the fish evenly with sliced garlic, olive oil, and lemon juice.",
                        "state_of_main_object": " The rock fish is now marinated with sliced garlic, olive oil, and lemon juice."
                    },
                    {
                        "step": "Preheating the Oven",
                        "object": [
                            [
                                "oven",
                                "new"
                            ]
                        ],
                        "action": "Person should preheat the oven to 350 degrees.",
                        "state_of_main_object": " The oven is now preheating to 350 degrees."
                    },
                    {
                        "step": "Baking the Fish",
                        "object": [
                            [
                                "rock fish",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "oven",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Person should place the fish in the oven and bake for about 20 minutes.",
                        "state_of_main_object": " The rock fish is now in the oven baking at 350 degrees."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.3,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.3,
                        0.6,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.3,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cool a Hot Drink Quickly",
                "steps": [
                    {
                        "step": "Preparation",
                        "object": [
                            [
                                "cup",
                                "new"
                            ],
                            [
                                "drink",
                                "new"
                            ]
                        ],
                        "action": "Pour the hot drink into a cup.",
                        "state_of_main_object": " The hot drink is now in a cup."
                    },
                    {
                        "step": "Filling a container with ice",
                        "object": [
                            [
                                "container",
                                "new"
                            ],
                            [
                                "ice",
                                "new"
                            ]
                        ],
                        "action": "Fill a large container with ice.",
                        "state_of_main_object": " A large container filled with ice is prepared next to the cup containing the hot drink."
                    },
                    {
                        "step": "Placing cup in container",
                        "object": [
                            [
                                "cup",
                                "similar shape",
                                1
                            ],
                            [
                                "container",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "action": "Place the cup containing the hot drink inside the ice-filled container.",
                        "state_of_main_object": " The hot drink in the cup is now cooling inside a container filled with ice."
                    },
                    {
                        "step": "Adding salt",
                        "object": [
                            [
                                "salt",
                                "new"
                            ],
                            [
                                "container",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "action": "Person sprinkling salt into the container around the cup.",
                        "state_of_main_object": " The cup with the hot drink is surrounded by salted ice within a larger container."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.5,
                        0.3
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.7
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cover a Box with Fabric",
                "steps": [
                    {
                        "step": "Arranging Required Materials",
                        "object": [
                            [
                                "box",
                                "new"
                            ],
                            [
                                "fabric",
                                "new"
                            ]
                        ],
                        "action": "Arrange for a box and a piece of fabric that can cover the box completely.",
                        "state_of_main_object": " A box and a sufficient sized piece of fabric are available on a flat surface."
                    },
                    {
                        "step": "Cutting Fabric",
                        "object": [
                            [
                                "fabric",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "action": "Use scissors to cut the fabric to a size that fits perfectly on the box.",
                        "state_of_main_object": " The fabric is now cut to a size that perfectly suits the box."
                    },
                    {
                        "step": "Applying Glue",
                        "object": [
                            [
                                "box",
                                "similar(shape similar)",
                                2
                            ],
                            [
                                "glue",
                                "new"
                            ]
                        ],
                        "action": "Apply a layer of glue to the outside of the box.",
                        "state_of_main_object": " The box, ready to be covered, is coated with a layer of glue."
                    },
                    {
                        "step": "Attaching Fabric",
                        "object": [
                            [
                                "box",
                                "similar(total similar)",
                                3
                            ],
                            [
                                "fabric",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Attach the cut fabric piece to the glue-covered box and smooth it out to ensure there are no wrinkles or bubbles.",
                        "state_of_main_object": " The box is fully covered with fabric, with no wrinkles or bubbles visible."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.7,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.8,
                        0.9,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Crushing Garlic",
                "steps": [
                    {
                        "step": "Prepare Garlic Cloves",
                        "object": [
                            [
                                "garlic",
                                "new"
                            ]
                        ],
                        "action": "Peel the garlic cloves and place them on the cutting board.",
                        "state_of_main_object": " Peeled garlic cloves are lying on the cutting board, ready to be crushed."
                    },
                    {
                        "step": "Place the knife",
                        "object": [
                            [
                                "garlic",
                                "similar"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Set the side of a chef\u2019s knife on top of the garlic clove.",
                        "state_of_main_object": " An uncrushed garlic clove lies under the side of a chef's knife on a cutting board."
                    },
                    {
                        "step": "Crushing the Clove",
                        "object": [
                            [
                                "garlic",
                                "transformed shape"
                            ],
                            [
                                "knife",
                                "similar"
                            ]
                        ],
                        "action": "Applies gentle yet firm pressure on the knife, the garlic clove is being crushed.",
                        "state_of_main_object": " The garlic cloves, now crushed, are spread out on the cutting board beneath the chef's knife."
                    },
                    {
                        "step": "Repeat for All Cloves",
                        "object": [
                            [
                                "garlic",
                                "similar"
                            ],
                            [
                                "knife",
                                "similar"
                            ]
                        ],
                        "action": "Repeat this process for remaining garlic cloves.",
                        "state_of_main_object": " All the garlic cloves are crushed on the cutting board."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.4,
                        0.3,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.5
                    ],
                    [
                        0.5,
                        0.7,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Cube Potatoes",
                "steps": [
                    {
                        "step": "Peeling the Potato",
                        "object": [
                            [
                                "potato",
                                "new"
                            ],
                            [
                                "peeler",
                                "new"
                            ]
                        ],
                        "action": "Person using a peeler to peel all the skin off the potato.",
                        "state_of_main_object": " The person has a peeled, skinless potato in hand."
                    },
                    {
                        "step": "Cutting the Potato in Half",
                        "object": [
                            [
                                "potato",
                                "similar shape",
                                1
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Person using a knife to cut the peeled potato in half.",
                        "state_of_main_object": " There are two halves of a peeled potato on the cutting board."
                    },
                    {
                        "step": "Slicing the Halved Potato",
                        "object": [
                            [
                                "halved potato",
                                "similar shape",
                                1
                            ],
                            [
                                "knife",
                                "similar whole",
                                0
                            ]
                        ],
                        "action": "Person using the knife to slice the halved potatoes lengthwise.",
                        "state_of_main_object": " The potato is cut into several long slices."
                    },
                    {
                        "step": "Chopping the Potatoes into Cubes",
                        "object": [
                            [
                                "potato slices",
                                "similar shape",
                                1
                            ],
                            [
                                "knife",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Person chopping the potato slices into small cubes.",
                        "state_of_main_object": " The previously whole potato now exists as a pile of small cubes."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.1,
                        0.2,
                        0.3
                    ],
                    [
                        0.1,
                        1.0,
                        0.4,
                        0.5
                    ],
                    [
                        0.2,
                        0.4,
                        1.0,
                        0.7
                    ],
                    [
                        0.3,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Make a Birthday Card",
                "steps": [
                    {
                        "step": "Gathering Materials",
                        "object": [
                            [
                                "card stock",
                                "new"
                            ],
                            [
                                "marker",
                                "new"
                            ],
                            [
                                "stickers",
                                "new"
                            ],
                            [
                                "glue",
                                "new"
                            ]
                        ],
                        "action": "Person collects card stock, markers, stickers, and glue.",
                        "state_of_main_object": " The materials - card stock, markers, stickers, and glue - are gathered and ready for use."
                    },
                    {
                        "step": "Folding the Card Stock",
                        "object": [
                            [
                                "card stock",
                                "total similar",
                                1
                            ]
                        ],
                        "action": "Person folds the card stock in half to make a card shape.",
                        "state_of_main_object": " A folded piece of card stock with the shape of a card is on the table along with markers, stickers and glue."
                    },
                    {
                        "step": "Designing the Card",
                        "object": [
                            [
                                "card",
                                "similar shape",
                                1
                            ],
                            [
                                "marker",
                                "similar total",
                                1
                            ],
                            [
                                "stickers",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Person uses markers to write a birthday message inside the card and decorates the front with stickers.",
                        "state_of_main_object": " A folded card stock exists, decorated with a hand-written birthday message inside and stickers on the front."
                    },
                    {
                        "step": "Pasting the Stickers",
                        "object": [
                            [
                                "card",
                                "similar shape",
                                1
                            ],
                            [
                                "stickers",
                                "simliar shape",
                                1
                            ],
                            [
                                "glue",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Person uses glue to fix the stickers on the front of the card.",
                        "state_of_main_object": " The birthday card is finished, with stickers firmly attached to the front and a birthday message written inside."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.4
                    ],
                    [
                        0.4,
                        0.8,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.4,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Bouquet",
                "steps": [
                    {
                        "step": "Gathering Flowers",
                        "object": [
                            [
                                "flowers",
                                "new"
                            ]
                        ],
                        "action": "Gather different types of freshly cut flowers.",
                        "state_of_main_object": " A collection of various freshly cut flowers is at hand."
                    },
                    {
                        "step": "Arranging Flowers",
                        "object": [
                            [
                                "flowers",
                                "similar shape",
                                1
                            ],
                            [
                                "vase",
                                "new"
                            ]
                        ],
                        "action": "Arrange the flowers in a vase.",
                        "state_of_main_object": " An array of freshly cut flowers is assembled.\nstate 2"
                    },
                    {
                        "step": "Adding Greenery",
                        "object": [
                            [
                                "vase with flowers",
                                "similar shape",
                                1
                            ],
                            [
                                "greenery",
                                "new"
                            ]
                        ],
                        "action": "Add some greenery and smaller flowers around the larger flowers in the vase.",
                        "state_of_main_object": " A vase is neatly arranged with a mix of large flowers surrounded by greenery and smaller flowers."
                    },
                    {
                        "step": "Wrapping Bouquet",
                        "object": [
                            [
                                "vase with flowers and greenery",
                                "similar total",
                                1
                            ],
                            [
                                "wrap",
                                "new"
                            ]
                        ],
                        "action": "Wrap the bouquet with decorative wrap.",
                        "state_of_main_object": " A beautiful, well-arranged bouquet of different flowers, accented with greenery and smaller flowers, wrapped in a decorative wrap is ready."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.7,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.6
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Candy Lei",
                "steps": [
                    {
                        "step": "Gathering the Materials",
                        "action": "Collect all materials: plastic wrap, candies, ribbon, and scissors.",
                        "object": [
                            [
                                "plastic wrap",
                                "new"
                            ],
                            [
                                "candy",
                                "new"
                            ],
                            [
                                "ribbon",
                                "new"
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "state_of_main_object": " The scene includes plastic wrap, candies, ribbon and scissors all gathered together."
                    },
                    {
                        "step": "Arranging the Candy",
                        "action": "Cut the plastic wrap into a long strip and place candies on it evenly.",
                        "object": [
                            [
                                "plastic wrap",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "candy",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "scissors",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "state_of_main_object": " A long strip of plastic wrap is laid out flat, with candies spaced evenly across its length."
                    },
                    {
                        "step": "Wrapping and Tying",
                        "action": "Roll the plastic wrap around the candies and tie the ends with the ribbon.",
                        "object": [
                            [
                                "plastic wrap",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "candy",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "ribbon",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "state_of_main_object": " A candy-filled plastic lei is created, with its ends tied together using ribbon."
                    },
                    {
                        "step": "Finishing Touches",
                        "action": "Trim any excess plastic wrap and ribbon with scissors.",
                        "object": [
                            [
                                "plastic wrap",
                                "similar(total similar)",
                                3
                            ],
                            [
                                "ribbon",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "scissors",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "state_of_main_object": " A Candy Lei is made, neat and tidy, with all excess plastic and ribbon trimmed away."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.4,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.8,
                        0.5
                    ],
                    [
                        0.4,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.2,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Building a Cabin",
                "steps": [
                    {
                        "step": "Find a Suitable Location",
                        "object": [
                            [
                                "location",
                                "new"
                            ]
                        ],
                        "action": "Person looks around to find a suitable location for the cabin.",
                        "state_of_main_object": " The person is in a location deemed suitable for building the cabin."
                    },
                    {
                        "step": "Assemble the Cabin Base",
                        "object": [
                            [
                                "base materials",
                                "new"
                            ],
                            [
                                "location",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Person lays out and connects the base materials at the chosen location.",
                        "state_of_main_object": " The chosen location now has the base materials of the cabin laid out and connected."
                    },
                    {
                        "step": "Build Walls",
                        "object": [
                            [
                                "wall materials",
                                "new"
                            ],
                            [
                                "base",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Person starts building walls on the base using the materials.",
                        "state_of_main_object": " The cabin base now has walls built up on it at the chosen location."
                    },
                    {
                        "step": "Install Roof",
                        "object": [
                            [
                                "roof materials",
                                "new"
                            ],
                            [
                                "walls",
                                "similar(total similar)",
                                2
                            ]
                        ],
                        "action": "Person installs the roof on top of the walls",
                        "state_of_main_object": " The cabin now has walls and a roof, standing at the chosen location."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.8,
                        0.3
                    ],
                    [
                        0.4,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.2,
                        0.3,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Building a Cabin",
                "steps": [
                    {
                        "step": "Gather Materials",
                        "object": [
                            [
                                "lumber",
                                "new"
                            ],
                            [
                                "nails",
                                "new"
                            ],
                            [
                                "hammer",
                                "new"
                            ]
                        ],
                        "action": "Person gather necessary materials such as lumber, nails, and a hammer.",
                        "state_of_main_object": " The person is equipped with essential cabin building materials including lumber, nails, and a hammer."
                    },
                    {
                        "step": "Building the foundation",
                        "object": [
                            [
                                "lumber",
                                "total similar",
                                1
                            ],
                            [
                                "nails",
                                "total similar",
                                1
                            ],
                            [
                                "hammer",
                                "total similar",
                                1
                            ]
                        ],
                        "action": "Person uses the hammer to nail pieces of lumber together, creating the foundation of the cabin.",
                        "state_of_main_object": " The person now has a basic wooden foundation for the cabin, crafted from the nailed together planks of lumber."
                    },
                    {
                        "step": "Building the Walls",
                        "object": [
                            [
                                "lumber",
                                "total similar",
                                2
                            ],
                            [
                                "nails",
                                "total similar",
                                2
                            ],
                            [
                                "hammer",
                                "total similar",
                                2
                            ]
                        ],
                        "action": "Again using the hammer and nails, the person starts building the walls of the cabin with lumber.",
                        "state_of_main_object": " The foundation of a cabin now stands with erected wooden walls, constructed from nailed lumber."
                    },
                    {
                        "step": "Adding the roof",
                        "object": [
                            [
                                "lumber",
                                "total similar",
                                3
                            ],
                            [
                                "nails",
                                "total similar",
                                3
                            ],
                            [
                                "hammer",
                                "total similar",
                                3
                            ]
                        ],
                        "action": "Person adds the roof by nailing lumber pieces together at an angle. This forms the roof.",
                        "state_of_main_object": " The cabin now has a basic structure with a foundation, walls, and a sloping roof made of lumber."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.5
                    ],
                    [
                        0.8,
                        1.0,
                        0.9,
                        0.7
                    ],
                    [
                        0.6,
                        0.9,
                        1.0,
                        0.8
                    ],
                    [
                        0.5,
                        0.7,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Chicken Burger",
                "steps": [
                    {
                        "step": "Preparing the Chicken",
                        "object": [
                            [
                                "chicken",
                                "new"
                            ],
                            [
                                "spices",
                                "new"
                            ]
                        ],
                        "action": "Season the chicken with spices.",
                        "state_of_main_object": " The chicken is prepared, seasoned with various spices."
                    },
                    {
                        "step": "Cooking the Chicken",
                        "object": [
                            [
                                "chicken",
                                "similar texture",
                                1
                            ],
                            [
                                "pan",
                                "new"
                            ]
                        ],
                        "action": "Cook the seasoned chicken in a pan over medium heat.",
                        "state_of_main_object": " A pan on the stove holds cooked, seasoned chicken."
                    },
                    {
                        "step": "Assembling the Burger",
                        "object": [
                            [
                                "bun",
                                "new"
                            ],
                            [
                                "lettuce",
                                "new"
                            ],
                            [
                                "tomato",
                                "new"
                            ],
                            [
                                "chicken",
                                "similar shape",
                                2
                            ]
                        ],
                        "action": "Place the lettuce, tomato and cooked chicken between the two halves of the bun.",
                        "state_of_main_object": " A chicken burger has been assembled with lettuce, tomato, and cooked chicken layered between the two halves of a bun."
                    },
                    {
                        "step": "Serving",
                        "object": [
                            [
                                "burger",
                                "similar total",
                                3
                            ],
                            [
                                "plate",
                                "new"
                            ]
                        ],
                        "action": "Place the assembled burger on a plate for serving.",
                        "state_of_main_object": " A fully assembled chicken burger rests on a plate, ready for serving."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.9,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.7,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.6,
                        0.7,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Christmas Star",
                "steps": [
                    {
                        "step": "Fold a Piece of Paper",
                        "object": [
                            [
                                "piece of paper",
                                "new"
                            ]
                        ],
                        "action": "Fold a piece of paper in half.",
                        "state_of_main_object": " A folded piece of paper is ready to be manipulated into a Christmas Star shape."
                    },
                    {
                        "step": "Cut the Paper",
                        "object": [
                            [
                                "folded paper",
                                "similar shape",
                                1
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "action": "Cut a star shape out from the folded paper using a pair of scissors.",
                        "state_of_main_object": " A paper star, cut out from a previously folded piece of paper, is now present."
                    },
                    {
                        "step": "Unfold the Paper",
                        "object": [
                            [
                                "cut paper",
                                "similar texture",
                                2
                            ]
                        ],
                        "action": "Unfold the piece of paper.",
                        "state_of_main_object": " The unfolded piece of paper now reveals a star shape."
                    },
                    {
                        "step": "Decorate The Star",
                        "object": [
                            [
                                "star shaped paper",
                                "similar shape",
                                3
                            ],
                            [
                                "glitter",
                                "new"
                            ]
                        ],
                        "action": "Spread some glitter onto the star.",
                        "state_of_main_object": " The unfolded paper now displays a glittering star shape."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.1
                    ],
                    [
                        0.8,
                        1.0,
                        0.5,
                        0.3
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.5
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Cinnamon Scented Candle",
                "steps": [
                    {
                        "step": "Gathering Materials",
                        "object": [
                            [
                                "wax",
                                "new"
                            ],
                            [
                                "candle wick",
                                "new"
                            ],
                            [
                                "cinnamon essential oil",
                                "new"
                            ],
                            [
                                "candle container",
                                "new"
                            ]
                        ],
                        "action": "Begins with gathering the candle wax, candle wick, cinnamon essential oil, and a candle container.",
                        "state_of_main_object": " Wax, wick, cinnamon essential oil, and a candle container are assembled together, ready for the candle making process."
                    },
                    {
                        "step": "Melting the Wax",
                        "object": [
                            [
                                "wax",
                                "similar shape",
                                1
                            ],
                            [
                                "heat source",
                                "new"
                            ]
                        ],
                        "action": "Proceeds with melting the candle wax using a heat source.",
                        "state_of_main_object": " The candle wax is melted and ready in a heat-proof container."
                    },
                    {
                        "step": "Infusing Cinnamon Oil",
                        "object": [
                            [
                                "wax",
                                "similar texture",
                                1
                            ],
                            [
                                "cinnamon essential oil",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Next, add a few drops of cinnamon essential oil into the melted wax.",
                        "state_of_main_object": " The melted candle wax is now infused with a cinnamon scent from the essential oil."
                    },
                    {
                        "step": "Pouring Cinnamon Wax into Container",
                        "object": [
                            [
                                "candle container",
                                "similar total",
                                1
                            ],
                            [
                                "wax",
                                "similar texture",
                                2
                            ],
                            [
                                "candle wick",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Finally, the person pours the cinnamon-scented wax into the candle container and plants the wick in the center.",
                        "state_of_main_object": " The candle container now holds a cinnamon-scented candle wax and a wick."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.3,
                        0.2,
                        0.1
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.5,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.2,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a clay dragon",
                "steps": [
                    {
                        "step": "Creating the Dragon's Body",
                        "object": [
                            [
                                "clay lump",
                                "new"
                            ]
                        ],
                        "action": "Person kneads the clay with their hands into an oblong shape to form the dragon's body.",
                        "state_of_main_object": " An oblong-shaped clay resembling a dragon's body is on the work surface, shaped by a person's hands."
                    },
                    {
                        "step": "Creating the Dragon's Head",
                        "object": [
                            [
                                "clay lump",
                                "new"
                            ],
                            [
                                "dragon body",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Form a smaller lump of clay, shape it into a dragon head and attach it to one end of the body.",
                        "state_of_main_object": " The clay dragon now has a head attached to the oblong body."
                    },
                    {
                        "step": "Creating the Dragon's Legs",
                        "object": [
                            [
                                "clay lump",
                                "new"
                            ],
                            [
                                "dragon body",
                                "similar texture",
                                2
                            ]
                        ],
                        "action": "Person forms four small pieces of clay into legs and attaches them to the dragon body.",
                        "state_of_main_object": " The clay dragon now has a distinct head and body with four legs attached."
                    },
                    {
                        "step": "Creating the Dragon's Tail & Wings",
                        "object": [
                            [
                                "clay lump",
                                "new"
                            ],
                            [
                                "dragon body",
                                "similar texture",
                                3
                            ]
                        ],
                        "action": "Form another piece of clay into a whip-like tail and two wings, then attach them to the body.",
                        "state_of_main_object": " A fully-formed clay dragon stands, featuring a body with a head, four legs, a whip-like tail, and two wings attached."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.5,
                        0.3
                    ],
                    [
                        0.7,
                        1.0,
                        0.7,
                        0.5
                    ],
                    [
                        0.5,
                        0.7,
                        1.0,
                        0.7
                    ],
                    [
                        0.3,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Clay Bird",
                "steps": [
                    {
                        "step": "Preparing the Clay",
                        "object": [
                            [
                                "clay",
                                "new"
                            ]
                        ],
                        "action": "Knead the clay until it becomes soft and pliable.",
                        "state_of_main_object": " A lump of clay has been manipulated and is now soft and pliable."
                    },
                    {
                        "step": "Shaping the Body",
                        "object": [
                            [
                                "clay",
                                "similar texture",
                                1
                            ]
                        ],
                        "action": "Shape the clay into a small oval to form the body of the bird.",
                        "state_of_main_object": " The clay is soft and pliable, ready for shaping.\nstate 2"
                    },
                    {
                        "step": "Adding Wings",
                        "object": [
                            [
                                "clay",
                                "similar texture",
                                1
                            ],
                            [
                                "body",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Add two smaller oval shapes to the sides of the body to form the wings.",
                        "state_of_main_object": " The clay has been molded into the shape of a bird with an oval body and two wings attached to its sides."
                    },
                    {
                        "step": "Creating the Beak",
                        "object": [
                            [
                                "clay",
                                "similar texture",
                                1
                            ],
                            [
                                "body",
                                "shape similar",
                                2
                            ]
                        ],
                        "action": "Shape a small triangle and attach to one end of the bird as the beak.",
                        "state_of_main_object": " An oval clay shape with two small ovals on its sides forms the bird's body and wings. After attaching a small triangular piece as the beak, the bird sculpture takes more realistic shape."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.6,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.4,
                        0.6,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.4,
                        0.6,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Make Green Tea Toner",
                "steps": [
                    {
                        "step": "Boil Water",
                        "object": [
                            [
                                "water",
                                "new"
                            ],
                            [
                                "kettle",
                                "new"
                            ]
                        ],
                        "action": "Fill the kettle with water and bring it to boil.",
                        "state_of_main_object": " A kettle filled with boiling water is ready to use."
                    },
                    {
                        "step": "Steep Green Tea",
                        "object": [
                            [
                                "green tea bag",
                                "new"
                            ],
                            [
                                "boiling water",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Steep a green tea bag into the boiling water.",
                        "state_of_main_object": " A kettle filled with boiling water now has a green tea bag steeping in it."
                    },
                    {
                        "step": "Cool Down the Tea",
                        "object": [
                            [
                                "green tea",
                                "similar shape",
                                2
                            ],
                            [
                                "container",
                                "new"
                            ]
                        ],
                        "action": "Let the green tea cool down.",
                        "state_of_main_object": " A kettle with cooled down green tea is ready."
                    },
                    {
                        "step": "Pour into Spray Bottle",
                        "object": [
                            [
                                "cooled tea",
                                "similar total",
                                3
                            ],
                            [
                                "spray bottle",
                                "new"
                            ]
                        ],
                        "action": "Pour the cooled green tea into a spray bottle.",
                        "state_of_main_object": " A spray bottle filled with cooled green tea is ready to be used as a toner."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.5,
                        0.4
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.5,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Lemon Face Cleaner",
                "steps": [
                    {
                        "step": "Collecting Ingredients",
                        "object": [
                            [
                                "lemon",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "honey",
                                "new"
                            ]
                        ],
                        "action": "Collect a lemon, cup of water and a spoonful of honey.",
                        "state_of_main_object": " A lemon, a cup of water, and a spoonful of honey are ready for use."
                    },
                    {
                        "step": "Squeezing Lemon",
                        "object": [
                            [
                                "lemon",
                                "similar shape",
                                1
                            ],
                            [
                                "juicer",
                                "new"
                            ]
                        ],
                        "action": "Squeeze the lemon using the juicer.",
                        "state_of_main_object": " You now have freshly squeezed lemon juice from the juicer."
                    },
                    {
                        "step": "Mixing Ingredients",
                        "object": [
                            [
                                "juicer",
                                "similar shape",
                                1
                            ],
                            [
                                "water",
                                "shape similar",
                                1
                            ],
                            [
                                "honey",
                                "shape similar",
                                1
                            ],
                            [
                                "bowl",
                                "new"
                            ]
                        ],
                        "action": "Mix the lemon juice, water, and honey together in a bowl.",
                        "state_of_main_object": " A bowl containing a mixture of lemon juice, water, and honey is ready."
                    },
                    {
                        "step": "Pouring into Bottle",
                        "object": [
                            [
                                "bowl",
                                "shape similar",
                                1
                            ],
                            [
                                "bottle",
                                "new"
                            ]
                        ],
                        "action": "Pour the mixture into a small bottle.",
                        "state_of_main_object": " The small bottle now contains the lemon face cleaner that is a mixture of honey, water and lemon juice."
                    }
                ],
                "relation": [
                    [
                        1,
                        0.6,
                        0.4,
                        0.2
                    ],
                    [
                        0.7,
                        1,
                        0.6,
                        0.3
                    ],
                    [
                        0.5,
                        0.8,
                        1,
                        0.6
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1
                    ]
                ]
            },
            {
                "goal": "Making a Lotus Pond",
                "steps": [
                    {
                        "step": "Digging the Pond",
                        "object": [
                            [
                                "ground",
                                "new"
                            ],
                            [
                                "shovel",
                                "new"
                            ]
                        ],
                        "action": "Dig a hole in a ground using a shovel.",
                        "state_of_main_object": " A hole, appropriate for a pond, has been dug into the ground."
                    },
                    {
                        "step": "Adding Water",
                        "object": [
                            [
                                "hole",
                                "similar shape",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ]
                        ],
                        "action": "Fill the hole with water.",
                        "state_of_main_object": " The dug hole is now filled with water, resembling a pond."
                    },
                    {
                        "step": "Adding Lotus Plants",
                        "object": [
                            [
                                "water-filled hole",
                                "similar texture",
                                2
                            ],
                            [
                                "lotus plant",
                                "new"
                            ]
                        ],
                        "action": "Add lotus plants into the water-filled hole.",
                        "state_of_main_object": " A water-filled hole in the ground now contains lotus plants, forming a basic lotus pond."
                    },
                    {
                        "step": "Maintaining the Pond",
                        "object": [
                            [
                                "pond",
                                "similar shape",
                                3
                            ],
                            [
                                "cleaning tools",
                                "new"
                            ]
                        ],
                        "action": "Maintain the pond by regularly cleaning it with suitable utensils.",
                        "state_of_main_object": " A clean lotus pond, filled with water and lotus plants, is maintained in the ground."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.1
                    ],
                    [
                        0.6,
                        1.0,
                        0.7,
                        0.3
                    ],
                    [
                        0.4,
                        0.7,
                        1.0,
                        0.6
                    ],
                    [
                        0.2,
                        0.4,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Steel Rose",
                "steps": [
                    {
                        "step": "Gathering Materials",
                        "object": [
                            [
                                "steel sheet",
                                "new"
                            ],
                            [
                                "hammer",
                                "new"
                            ],
                            [
                                "welder",
                                "new"
                            ]
                        ],
                        "action": "Gather a sheet of steel, a hammer, and a welder.",
                        "state_of_main_object": " The workstation is equipped with a sheet of steel, a hammer, and a welder, ready for the next steps in creating a steel rose."
                    },
                    {
                        "step": "Cutting Petal Shapes",
                        "object": [
                            [
                                "steel sheet",
                                "similar shape",
                                1
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "action": "Use scissors to cut petal shapes from the steel sheet.",
                        "state_of_main_object": " Several steel petal shapes are now cut out and present on the work table beside the remaining sheet of steel."
                    },
                    {
                        "step": "Forming the Petals",
                        "object": [
                            [
                                "steel petal",
                                "similar shape",
                                2
                            ],
                            [
                                "hammer",
                                "texture similar",
                                1
                            ]
                        ],
                        "action": "Use the hammer to round the petals into a curved shape.",
                        "state_of_main_object": " The steel has been cut into petal shapes, which are now curved from being hammered."
                    },
                    {
                        "step": "Assembling the Rose",
                        "object": [
                            [
                                "steel petals",
                                "similar shape",
                                3
                            ],
                            [
                                "welder",
                                "total similar",
                                1
                            ]
                        ],
                        "action": "Use the welder to secure the petals together, forming a rose shape.",
                        "state_of_main_object": " A rose-shaped structure made up of curved steel petals, crafted using a welder, is created."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.2,
                        0.3
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.4
                    ],
                    [
                        0.5,
                        0.7,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Kitten Food",
                "steps": [
                    {
                        "step": "Gathering Ingredients",
                        "object": [
                            [
                                "Ground meat",
                                "new"
                            ],
                            [
                                "Peas",
                                "new"
                            ],
                            [
                                "Carrots",
                                "new"
                            ],
                            [
                                "Pumpkin",
                                "new"
                            ]
                        ],
                        "action": "Collect all the required ingredients.",
                        "state_of_main_object": " The needed ingredients for making the kitten food are all assembled in one place."
                    },
                    {
                        "step": "Cooking Meat",
                        "object": [
                            [
                                "Ground meat",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "Pan",
                                "new"
                            ],
                            [
                                "Stove",
                                "new"
                            ]
                        ],
                        "action": "Using a pan, cook the ground meat on a stove until thoroughly cooked.",
                        "state_of_main_object": " All of the required ingredients for making kitten food are assembled.\n\nState 2"
                    },
                    {
                        "step": "Adding Vegetables",
                        "object": [
                            [
                                "Cooked meat",
                                "similar(texture similar)",
                                2
                            ],
                            [
                                "Peas",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "Carrots",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "Pumpkin",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Add peas, carrots, and pumpkin to the cooked meat and mix well.",
                        "state_of_main_object": " A pan of cooked ground meat is now combined with peas, carrots, and pumpkin."
                    },
                    {
                        "step": "Serving Food",
                        "object": [
                            [
                                "Kitten food",
                                "similar(texture similar)",
                                3
                            ],
                            [
                                "Kitten dish",
                                "new"
                            ]
                        ],
                        "action": "Scoop the prepared food into a clean kitten dish.",
                        "state_of_main_object": " A clean kitten dish is filled with prepared kitten food made from cooked meat, peas, carrots, and pumpkin."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.3,
                        0.2,
                        0.1
                    ],
                    [
                        0.3,
                        1.0,
                        0.5,
                        0.2
                    ],
                    [
                        0.2,
                        0.5,
                        1.0,
                        0.5
                    ],
                    [
                        0.1,
                        0.2,
                        0.5,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Liquid Smoke",
                "steps": [
                    {
                        "step": "Gathering Materials",
                        "object": [
                            [
                                "wood chips",
                                "new"
                            ],
                            [
                                "charcoal grill",
                                "new"
                            ],
                            [
                                "metal canister",
                                "new"
                            ]
                        ],
                        "action": "Gather dense hardwood chips, a charcoal grill, and a metal canister with a lid. ",
                        "state_of_main_object": " A collection of dense hardwood chips, a charcoal grill, and a lidded metal canister are prepared and ready for use."
                    },
                    {
                        "step": "Preparing The Grill",
                        "object": [
                            [
                                "charcoal grill",
                                "same"
                            ],
                            [
                                "wood chips",
                                "similar (on grill)",
                                1
                            ]
                        ],
                        "action": "Place the wood chips on the charcoal grill.",
                        "state_of_main_object": " A charcoal grill is set up with dense hardwood chips placed on it."
                    },
                    {
                        "step": "Canister Placement",
                        "object": [
                            [
                                "metal canister",
                                "same"
                            ],
                            [
                                "charcoal grill",
                                "similar (canister on top)",
                                2
                            ]
                        ],
                        "action": "Place an empty metal canister over the chips on the grill.",
                        "state_of_main_object": " A metal canister stands on the top of the wood chips placed on the charcoal grill."
                    },
                    {
                        "step": "Capture the Smoke",
                        "object": [
                            [
                                "smoke",
                                "new"
                            ],
                            [
                                "metal canister",
                                "similar (smoke inside)",
                                3
                            ]
                        ],
                        "action": "Once the chips start smoking, capture the smoke in the canister and seal the canister.",
                        "state_of_main_object": " The metal canister, now filled with smoke from the hardwood chips, sits sealed on the charcoal grill."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.4
                    ],
                    [
                        0.8,
                        1.0,
                        0.8,
                        0.6
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.8
                    ],
                    [
                        0.4,
                        0.6,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Model Castle",
                "steps": [
                    {
                        "step": "Gather Supplies",
                        "object": [
                            [
                                "cardboard",
                                "new"
                            ],
                            [
                                "glue",
                                "new"
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "action": "Gather pieces of cardboard, a bottle of glue, and a pair of scissors.",
                        "state_of_main_object": " Cardboard pieces, a bottle of glue, and a pair of scissors are ready on the work surface."
                    },
                    {
                        "step": "Cut the Pieces",
                        "object": [
                            [
                                "cardboard",
                                "shape similar",
                                1
                            ],
                            [
                                "scissors",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Use the scissors to cut pieces of cardboard in the shape of castle turrets and walls.",
                        "state_of_main_object": " Several cut-outs of cardboard in the shape of castle turrets and walls are ready."
                    },
                    {
                        "step": "Assemble the Castle",
                        "object": [
                            [
                                "cardboard pieces",
                                "similar total",
                                2
                            ],
                            [
                                "glue",
                                "similar total",
                                1
                            ]
                        ],
                        "action": "Glue the cut-out pieces together to form the structure of the castle.",
                        "state_of_main_object": " The cut-out cardboard pieces are assembled and glued together, forming the basic structure of a model castle."
                    },
                    {
                        "step": "Decorate the Castle",
                        "object": [
                            [
                                "castle",
                                "similar total",
                                3
                            ],
                            [
                                "markers",
                                "new"
                            ]
                        ],
                        "action": "Use markers to draw windows, doors, and other details on the castle.",
                        "state_of_main_object": " The cardboard castle is decorated with windows, doors, and other details drawn with markers."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.3,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.3
                    ],
                    [
                        0.5,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.3,
                        0.5,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Paper Boat",
                "steps": [
                    {
                        "step": "Fold the Paper Diagonally",
                        "object": [
                            [
                                "paper",
                                "new"
                            ]
                        ],
                        "action": "Fold a square sheet of paper in half diagonally to make a triangle.",
                        "state_of_main_object": " The paper is now folded into a triangle shape."
                    },
                    {
                        "step": "Fold the Triangle Edges",
                        "object": [
                            [
                                "paper",
                                "similar shape",
                                1
                            ]
                        ],
                        "action": "Fold the edges of the triangle to meet at the top, forming a smaller triangle.",
                        "state_of_main_object": " The square sheet has been transformed into a smaller folded triangle."
                    },
                    {
                        "step": "Open and Flatten",
                        "object": [
                            [
                                "paper",
                                "similar shape",
                                2
                            ]
                        ],
                        "action": "Open the smaller triangle up and flatten to form a square.",
                        "state_of_main_object": " The paper is now folded into a smaller square shape."
                    },
                    {
                        "step": "Form the Boat",
                        "object": [
                            [
                                "paper",
                                "similar shape",
                                3
                            ]
                        ],
                        "action": "Fold the bottom edges up to the middle line, then open again and flatten to create the shape of a boat.",
                        "state_of_main_object": " The paper is now shaped like a boat."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.8,
                        0.6,
                        0.4
                    ],
                    [
                        0.7,
                        1.0,
                        0.8,
                        0.6
                    ],
                    [
                        0.5,
                        0.7,
                        1.0,
                        0.8
                    ],
                    [
                        0.3,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Snow Globe",
                "steps": [
                    {
                        "step": "Gathering Materials",
                        "object": [
                            [
                                "glass jar",
                                "new"
                            ],
                            [
                                "figurine",
                                "new"
                            ],
                            [
                                "glitter",
                                "new"
                            ],
                            [
                                "glycerin",
                                "new"
                            ],
                            [
                                "distilled water",
                                "new"
                            ]
                        ],
                        "action": "Collect a glass jar, a small figurine, glitter, glycerin, and distilled water.",
                        "state_of_main_object": " All necessary materials including a glass jar, a small figurine, glitter, glycerin, and distilled water are gathered together."
                    },
                    {
                        "step": "Preparing the Figurine",
                        "object": [
                            [
                                "figurine",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "glass jar lid",
                                "similar(shape similar)",
                                2
                            ],
                            [
                                "waterproof glue",
                                "new"
                            ]
                        ],
                        "action": "Use waterproof glue to attach the figurine to the inside of the glass jar lid.",
                        "state_of_main_object": " The lid of the glass jar has a figurine securely glued to it."
                    },
                    {
                        "step": "Filling the Jar",
                        "object": [
                            [
                                "glass jar",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "glitter",
                                "similar(texture similar)",
                                3
                            ],
                            [
                                "glycerin",
                                "similar(total similar)",
                                4
                            ],
                            [
                                "distilled water",
                                "similar(total similar)",
                                5
                            ]
                        ],
                        "action": "Fill the jar almost to the top with distilled water, add a pinch of glitter and a dash of glycerin.",
                        "state_of_main_object": " The glass jar is nearly filled with distilled water, containing a sprinkle of glitter and a slight addition of glycerin."
                    },
                    {
                        "step": "Assemble the Snow Globe",
                        "object": [
                            [
                                "glass jar",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "glass jar lid",
                                "similar(total similar)",
                                2
                            ],
                            [
                                "figurine",
                                "similar(total similar)",
                                3
                            ]
                        ],
                        "action": "Screw the lid tightly onto the jar. Turn the jar upside down.",
                        "state_of_main_object": " An inverted snow globe with a figurine glued to the inside of the lid, glitter floating in the water-glycerin mix in the glass jar."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.2,
                        0.1,
                        0.05
                    ],
                    [
                        0.3,
                        1.0,
                        0.5,
                        0.3
                    ],
                    [
                        0.1,
                        0.6,
                        1.0,
                        0.7
                    ],
                    [
                        0.05,
                        0.4,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making a Wedding Veil",
                "steps": [
                    {
                        "step": "1. Gathering Materials",
                        "object": [
                            [
                                "tulle",
                                "new"
                            ],
                            [
                                "needle",
                                "new"
                            ],
                            [
                                "thread",
                                "new"
                            ],
                            [
                                "comb",
                                "new"
                            ]
                        ],
                        "action": "Gather your materials including tulle, a needle, thread, and a comb.",
                        "state_of_main_object": " The materials for making a wedding veil; tulle, a needle, thread, and a comb, are assembled and ready for use."
                    },
                    {
                        "step": "2. Cutting the Tulle",
                        "object": [
                            [
                                "tulle",
                                "total similar",
                                1
                            ],
                            [
                                "scissors",
                                "new"
                            ]
                        ],
                        "action": "Cut the tulle to the length you desire using scissors.",
                        "state_of_main_object": " The tulle is now cut into a piece that matches the desired length of the wedding veil."
                    },
                    {
                        "step": "3. Sewing the Comb",
                        "object": [
                            [
                                "tulle",
                                "similar shape",
                                2
                            ],
                            [
                                "comb",
                                "total similar",
                                1
                            ],
                            [
                                "needle",
                                "total similar",
                                2
                            ],
                            [
                                "thread",
                                "total similar",
                                2
                            ]
                        ],
                        "action": "Sew the comb to one end of the tulle using a needle and thread.",
                        "state_of_main_object": " The length of tulle now has a comb securely attached to one end."
                    },
                    {
                        "step": "4. Finalizing the Veil",
                        "object": [
                            [
                                "veil",
                                "similar texture",
                                3
                            ]
                        ],
                        "action": "Hold the veil by the comb and place it onto the head to finalize.",
                        "state_of_main_object": " The wedding veil, attached to a comb, is now placed on the head, completing the process of making a wedding veil."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.2,
                        0.1,
                        0.0
                    ],
                    [
                        0.2,
                        1.0,
                        0.7,
                        0.1
                    ],
                    [
                        0.1,
                        0.7,
                        1.0,
                        0.9
                    ],
                    [
                        0.0,
                        0.1,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Milk Rice",
                "steps": [
                    {
                        "step": "Rinsing Rice",
                        "object": [
                            [
                                "rice",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "strainer",
                                "new"
                            ]
                        ],
                        "action": "Pour rice into a strainer and rinse under cold running water until the water runs clear.",
                        "state_of_main_object": " There is a strainer filled with rinsed rice under the cold water tap, all starch residues removed."
                    },
                    {
                        "step": "Cooking Rice",
                        "object": [
                            [
                                "rice",
                                "similar (total similar)",
                                1
                            ],
                            [
                                "pot",
                                "new"
                            ],
                            [
                                "fire",
                                "new"
                            ]
                        ],
                        "action": "Place the rice into a pot and cook over medium heat until it becomes tender.",
                        "state_of_main_object": " There is a pot on the stove with tender cooked rice."
                    },
                    {
                        "step": "Adding Milk",
                        "object": [
                            [
                                "rice",
                                "similar (total similar)",
                                2
                            ],
                            [
                                "milk",
                                "new"
                            ]
                        ],
                        "action": "Pour milk into the pot and stir the rice mixture.",
                        "state_of_main_object": " In the pot, tender rice is simmering in milk, forming a creamy mixture."
                    },
                    {
                        "step": "Simmering Mixture",
                        "object": [
                            [
                                "rice",
                                "similar (total similar)",
                                3
                            ],
                            [
                                "milk",
                                "similar (total similar)",
                                1
                            ],
                            [
                                "fire",
                                "similar (total similar)",
                                1
                            ]
                        ],
                        "action": "Let the mixture simmer over low heat until all the milk is absorbed.",
                        "state_of_main_object": " The pot contains rice thoroughly cooked in milk, with all the milk absorbed."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.3,
                        0.1
                    ],
                    [
                        0.7,
                        1.0,
                        0.8,
                        0.3
                    ],
                    [
                        0.3,
                        0.8,
                        1.0,
                        0.8
                    ],
                    [
                        0.1,
                        0.3,
                        0.8,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Milk Soup",
                "steps": [
                    {
                        "step": "Gather Ingredients",
                        "object": [
                            [
                                "milk",
                                "new"
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "salt",
                                "new"
                            ],
                            [
                                "starch",
                                "new"
                            ]
                        ],
                        "action": "Gather all the necessary ingredients including milk, water, salt, and starch.",
                        "state_of_main_object": " All the ingredients - milk, water, salt, and starch are gathered and ready to be used."
                    },
                    {
                        "step": "Heat the Milk",
                        "object": [
                            [
                                "milk",
                                "similar (total similar)",
                                1
                            ],
                            [
                                "pan",
                                "new"
                            ]
                        ],
                        "action": "Put the milk in a pan and heat it over medium flame.",
                        "state_of_main_object": " A pan containing warm milk is placed over a medium flame on the stove."
                    },
                    {
                        "step": "Mix Water and Starch",
                        "object": [
                            [
                                "water",
                                "similar (total similar)",
                                2
                            ],
                            [
                                "starch",
                                "similar (total similar)",
                                1
                            ]
                        ],
                        "action": "In a separate bowl, mix water and starch until well combined.",
                        "state_of_main_object": " A separate bowl holds a well-mixed combination of water and starch."
                    },
                    {
                        "step": "Combine All and Cook",
                        "object": [
                            [
                                "starch mix",
                                "similar (total similar)",
                                3
                            ],
                            [
                                "heated milk",
                                "similar (total similar)",
                                2
                            ]
                        ],
                        "action": "Gradually add the starch mixture into the heated milk while stirring. Add salt. Continue cooking until soup consistency is achieved.",
                        "state_of_main_object": " A pan is on the stove containing thickened milk soup, achieved by adding and cooking a mixture of water, starch, and salt in heated milk."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.3,
                        0.2
                    ],
                    [
                        0.7,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.3,
                        0.6,
                        1.0,
                        0.7
                    ],
                    [
                        0.2,
                        0.4,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Olive Oil",
                "steps": [
                    {
                        "step": "Collecting Olives",
                        "object": [
                            [
                                "olive tree",
                                "new"
                            ],
                            [
                                "bucket",
                                "new"
                            ]
                        ],
                        "action": "Person picking olives from the olive tree and placing them in a bucket.",
                        "state_of_main_object": " A bucket is filled with freshly picked olives from the tree."
                    },
                    {
                        "step": "Crushing Olives",
                        "object": [
                            [
                                "bucket of olives",
                                "similar shape",
                                1
                            ],
                            [
                                "press machine",
                                "new"
                            ]
                        ],
                        "action": "Person feeding olives into a press machine to crush them.",
                        "state_of_main_object": " The bucket is now emptied, and the olives are crushed inside the press machine."
                    },
                    {
                        "step": "Extracting Oil",
                        "object": [
                            [
                                "press machine with crushed olives",
                                "similar shape",
                                2
                            ],
                            [
                                "oil collector",
                                "new"
                            ]
                        ],
                        "action": "Person turning on the press machine to extract oil.",
                        "state_of_main_object": " The press machine is operating, extracting olive oil from the crushed olives."
                    },
                    {
                        "step": "Bottling Oil",
                        "object": [
                            [
                                "oil collector",
                                "similar shape",
                                3
                            ],
                            [
                                "bottle",
                                "new"
                            ]
                        ],
                        "action": "Person pouring the olive oil from the collector into a bottle.",
                        "state_of_main_object": " A bottle filled with fresh olive oil is now ready."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.7,
                        0.5,
                        0.3
                    ],
                    [
                        0.7,
                        1.0,
                        0.8,
                        0.5
                    ],
                    [
                        0.5,
                        0.8,
                        1.0,
                        0.7
                    ],
                    [
                        0.3,
                        0.5,
                        0.7,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Potato Chips",
                "steps": [
                    {
                        "step": "Preparing the Potato",
                        "object": [
                            [
                                "potato",
                                "new"
                            ],
                            [
                                "knife",
                                "new"
                            ]
                        ],
                        "action": "Use a knife to peel the potato.",
                        "state_of_main_object": " The potato is peeled with a sharp knife, revealing its bare inner flesh."
                    },
                    {
                        "step": "Slicing the Potato",
                        "object": [
                            [
                                "potato",
                                "similar shape",
                                1
                            ],
                            [
                                "knife",
                                "similar(total similar)",
                                1
                            ]
                        ],
                        "action": "Slice the potato into thin, round pieces using the knife.",
                        "state_of_main_object": " The potato is now skinless.\n\nstate 2"
                    },
                    {
                        "step": "Frying",
                        "object": [
                            [
                                "potato slices",
                                "similar shape",
                                2
                            ],
                            [
                                "oil",
                                "new"
                            ],
                            [
                                "frying pan",
                                "new"
                            ]
                        ],
                        "action": "Fry the thin potato pieces in hot oil in the frying pan.",
                        "state_of_main_object": " The frying pan now contains sizzling, golden-brown potato chips."
                    },
                    {
                        "step": "Serve",
                        "object": [
                            [
                                "potato chips",
                                "similar shape",
                                3
                            ],
                            [
                                "plate",
                                "new"
                            ]
                        ],
                        "action": "Use a spoon to drain the chips onto a plate.",
                        "state_of_main_object": " The plate is filled with freshly fried potato chips drained from oil."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.4,
                        0.3,
                        0.1
                    ],
                    [
                        0.7,
                        1.0,
                        0.5,
                        0.2
                    ],
                    [
                        0.6,
                        0.8,
                        1.0,
                        0.4
                    ],
                    [
                        0.5,
                        0.6,
                        0.9,
                        1.0
                    ]
                ]
            },
            {
                "goal": "Making Violet Tea",
                "steps": [
                    {
                        "step": "Collect Violets",
                        "object": [
                            [
                                "violets",
                                "new"
                            ]
                        ],
                        "action": "Pick fresh violets from flowerbed.",
                        "state_of_main_object": " A handful of fresh violets is held, picked from the flowerbed."
                    },
                    {
                        "step": "Clean Violets",
                        "object": [
                            [
                                "violets",
                                "similar(total similar)",
                                1
                            ],
                            [
                                "water",
                                "new"
                            ],
                            [
                                "sink",
                                "new"
                            ]
                        ],
                        "action": "Rinse the violets under the tap water in the sink.",
                        "state_of_main_object": " The freshly picked violets are now clean and sit in the sink."
                    },
                    {
                        "step": "Steep Violets",
                        "object": [
                            [
                                "violets",
                                "similar(shape similar)",
                                2
                            ],
                            [
                                "hot water",
                                "new"
                            ],
                            [
                                "teapot",
                                "new"
                            ]
                        ],
                        "action": "Place the violets into a teapot and pour hot water over them.",
                        "state_of_main_object": " A teapot filled with hot water and violet flowers is ready for steeping."
                    },
                    {
                        "step": "Strain and Serve",
                        "object": [
                            [
                                "teapot",
                                "similar(texture similar)",
                                3
                            ],
                            [
                                "teacup",
                                "new"
                            ],
                            [
                                "strainer",
                                "new"
                            ]
                        ],
                        "action": "Pour the steeped tea from the teapot into a teacup using a strainer.",
                        "state_of_main_object": " There's a teacup filled with freshly steeped violet tea, with the teapot and strainer nearby."
                    }
                ],
                "relation": [
                    [
                        1.0,
                        0.5,
                        0.4,
                        0.3
                    ],
                    [
                        0.9,
                        1.0,
                        0.6,
                        0.4
                    ],
                    [
                        0.8,
                        0.9,
                        1.0,
                        0.5
                    ],
                    [
                        0.7,
                        0.8,
                        0.9,
                        1.0
                    ]
                ]
            }
        ]
    }
}
// let samples0 = [
//     {
//         "subdir": "gpt_4",
//         "index": 27
//     },
//     {
//         "subdir": "gpt_4",
//         "index": 25
//     },
//     {
//         "subdir": "gpt_4",
//         "index": 22
//     },
//     {
//         "subdir": "gpt_4",
//         "index": 20
//     },
//     {
//         "subdir": "gpt_3",
//         "index": 15
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 17
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 22
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 24
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 26
//     },
//     {
//         "subdir": "gpt_1",
//         "index": 22
//     }
// ]
let samples0 = [
    {
        "subdir": "gpt_1",
        "index": 29
    },
    {
        "subdir": "gpt_0",
        "index": 8
    },
    {
        "subdir": "gpt_0",
        "index": 4
    },
    {
        "subdir": "gpt_0",
        "index": 6
    },
    
    {
        "subdir": "gpt_0",
        "index": 40
    },
    {
        "subdir": "gpt_0",
        "index": 41
    },
    {
        "subdir": "gpt_0",
        "index": 51
    },
    {
        "subdir": "gpt_1",
        "index": 10
    },
    {
        "subdir": "gpt_1",
        "index": 21
    },
    {
        "subdir": "gpt_1",
        "index": 23
    }
    

]
// let samples1 = [
//     {
//         "subdir": "gpt_3",
//         "index": 23
//     },
//     {
//         "subdir": "gpt_0",
//         "index": 51
//     },
//     {
//         "subdir": "gpt_0",
//         "index": 44
//     },
//     {
//         "subdir": "gpt_0",
//         "index": 33
//     },
//     {
//         "subdir": "gpt_4",
//         "index": 18
//     },
//     {
//         "subdir": "gpt_1",
//         "index": 21
//     },
//     {
//         "subdir": "gpt_1",
//         "index": 14
//     },
//     {
//         "subdir": "gpt_3",
//         "index": 34
//     },
//     {
//         "subdir": "gpt_4",
//         "index": 28
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 7
//     }
// ]
let samples1 = [
    {
        "subdir": "gpt_3",
        "index": 13
    },
    {
        "subdir": "gpt_3",
        "index": 53
    },
    {
        "subdir": "gpt_0",
        "index": 28
    },
    {
        "subdir": "gpt_0",
        "index": 36
    },
    
    
    
    {
        "subdir": "gpt_0",
        "index": 13
    },
 
    {
        "subdir": "gpt_0",
        "index": 15
    },
    
    {
        "subdir": "gpt_0",
        "index": 16
    },
    
    {
        "subdir": "gpt_0",
        "index": 29
    },
    {
        "subdir": "gpt_3",
        "index": 9
    },
    
    {
        "subdir": "gpt_3",
        "index": 31
    }
]

// let samples2 = [
//     {
//         "subdir": "gpt_2",
//         "index": 16
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 17
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 19
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 20
//     },
//     {
//         "subdir": "gpt_2",
//         "index": 22
//     },
//     {
//         "subdir": "gpt_3",
//         "index": 2
//     },
//     {
//         "subdir": "gpt_3",
//         "index": 18
//     },
//     {
//         "subdir": "gpt_3",
//         "index": 40
//     },
//     {
//         "subdir": "gpt_3",
//         "index": 52
//     },
//     {
//         "subdir": "gpt_4",
//         "index": 0
//     }
// ]
let samples2 = [
    {
        "subdir": "gpt_2",
        "index": 16
    },
    {
        "subdir": "gpt_2",
        "index": 17
    },
    {
        "subdir": "gpt_2",
        "index": 19
    },
    {
        "subdir": "gpt_2",
        "index": 20
    },
    {
        "subdir": "gpt_2",
        "index": 22
    },
    {
        "subdir": "gpt_3",
        "index": 2
    },
    {
        "subdir": "gpt_3",
        "index": 18
    },
    {
        "subdir": "gpt_3",
        "index": 40
    },
    {
        "subdir": "gpt_3",
        "index": 52
    },
    {
        "subdir": "gpt_4",
        "index": 0
    },
    {
        "subdir": "gpt_4",
        "index": 4
    },
    {
        "subdir": "gpt_4",
        "index": 5
    },
    // {
    //     "subdir": "gpt_4",
    //     "index": 9
    // },
    // {
    //     "subdir": "gpt_4",
    //     "index": 10
    // },
    {
        "subdir": "gpt_4",
        "index": 25
    },
    {
        "subdir": "gpt_4",
        "index": 28
    },
    {
        "subdir": "gpt_4",
        "index": 29
    },
    // {
    //     "subdir": "gpt_4",
    //     "index": 27
    // },
    {
        "subdir": "gpt_0",
        "index": 3
    },
    {
        "subdir": "gpt_0",
        "index": 5
    },
    // {
    //     "subdir": "gpt_0",
    //     "index": 8
    // },
    
    {
        "subdir": "gpt_0",
        "index": 32
    },
    {
        "subdir": "gpt_1",
        "index": 5
    },
    {
        "subdir": "gpt_1",
        "index": 18
    },
    {
        "subdir": "gpt_1",
        "index": 21
    },
    {
        "subdir": "gpt_1",
        "index": 23
    },
    {
        "subdir": "gpt_1",
        "index": 29
    }
]

const baseline_names = [
    // [
    //     "kv",
    //     "kv_mask",
    //     "state_act"
    // ],
    [
        
        "independent",
        "kv"
       
    ],
    [
        "act",
        "act_act"
    ],
    [
        "kv",
        "kv_mask",
        "state_act"
    ]
]

let selected_sample = [0, 0, 0];
let selected_baseline = [0, 0, 0];

function load_select_options(samples, section_id) {
    for (let i = 0; i < samples.length; i++) {
        let option = document.createElement("option");
        option.value = `sect-${section_id}-sample${i}`;
        option.id = `sect-${section_id}-sample-opt-${i}`;
        document.getElementById(`sect-${section_id}-sample-select`).appendChild(option);
    }
}

// Load select options
load_select_options(samples0, 0);
load_select_options(samples1, 1);
load_select_options(samples2, 2);

// Load data
function load_all_data(samples, section_id) {
    for (let i = 0; i < samples.length; i++) {
        let subdir = samples[i].subdir;
        let index = samples[i].index;
        
        // Load json
        // fetch(`./text/${subdir}.json`).then(response => {
        //     return response.json();
        // }).then(json => {
        let json = raw_data[subdir]
        let sample_title = json.goals[index].goal; 
        if (subdir === "gpt_0" || subdir === "gpt_1") {
            sample_title = sample_title.slice(0, -2);
        }
        let steps = [];
        let states = [];
        for (var j = 0; j < 4; j++) {
            // let step = `${json.goals[index].steps[j].step}. ${json.goals[index].steps[j].action}`
            let step = json.goals[index].steps[j].action;
            steps.push(step);
            let state = json.goals[index].steps[j].state_of_main_object;
            states.push(state);
        }
        samples[i].title = sample_title;
        samples[i].steps = steps;
        samples[i].states = states;
        samples[i].similarity = json.goals[index].relation;
        // console.log(samples[i]);
        load_data(samples, i, section_id);
        // })
    }
}


function load_data(samples, index, section_id) {
    if (index === selected_sample[section_id]) {

        // Load steps
        
        for (let i = 0; i < 4; i++) {
            // Load baseline images
            if (section_id !== 2){
                let image_path = `./images2/section${section_id}/${samples[index].subdir}/${samples[index].index}/${baseline_names[section_id][selected_baseline[section_id]]}/${i}.jpg`;
                document.getElementById(`sect-${section_id}-sample-baseline-${i}`).src = image_path;
            }
         

            // Load our images
            if (section_id === 0) {
                image_path = `./images2/section0/${samples[index].subdir}/${samples[index].index}/kv_weight_mask/${i}.jpg`;
                document.getElementById(`sect-${section_id}-sample-our-${i}`).src = image_path;
            }
            if (section_id === 1) {
                image_path = `./images2/section1/${samples[index].subdir}/${samples[index].index}/state_act/${i}.jpg`;
                document.getElementById(`sect-${section_id}-sample-our-${i}`).src = image_path;
            }
            if (section_id === 2) {
                image_path = `./images/section2/${samples[index].subdir}/${samples[index].index}/kv_weight_mask/${i}.jpg`;
                document.getElementById(`sect-${section_id}-sample-our-${i}`).src = image_path;
            }
            
            // Load step
            document.getElementById(`sect-${section_id}-step-${i}`).textContent = samples[index].steps[i];
            
            // Load state
            // document.getElementById(`sect-${section_id}-state-${i}`).textContent = samples[index].states[i];

            // Load similarity
            // let table_content = "";
            // for (let j = 0; j < 4; j++) {
            //     table_content += `<tr>`;
            //     for (let k = 0; k < 4; k++) {
            //         let value = parseFloat(samples[index].similarity[j][k]);
            //         let class_name = "is-white"
            //         if (value == 1.0) {
            //             class_name = "is-link";
            //         } else if (value > 0.7) {
            //             class_name = "is-info";
            //         } else if (value >= 0.5) {
            //             class_name = "is-primary";
            //         } else if (value > 0.0) {
            //             class_name = "is-warning";
            //         }
            //         table_content += `<td class="${class_name}">${value}</td>`;
            //     }
            //     table_content += `</tr>`;
            // }
            // document.getElementById(`sect-${section_id}-similarity`).innerHTML = table_content;
        }

    }
    // Load select options
    document.getElementById(`sect-${section_id}-sample-opt-${index}`).textContent = samples[index].title;
}
load_all_data(samples2, 2);
load_all_data(samples0, 0);
load_all_data(samples1, 1);


function select_sample0(select) {
    let index = parseInt(select.value.slice(-1));
    selected_sample[0] = index;
    load_data(samples0, index, 0);
}

function select_sample1(select) {
    let index = parseInt(select.value.slice(-1));
    selected_sample[1] = index;
    load_data(samples1, index, 1);
}

function select_baseline0(select) {
    let index = parseInt(select.value.slice(-1));
    selected_baseline[0] = index;
    load_data(samples0, selected_sample[0], 0);
}

function select_baseline1(select) {
    let index = parseInt(select.value.slice(-1));
    selected_baseline[1] = index;
    load_data(samples1, selected_sample[1], 1);
}

function select_baseline2(select) {
    let index = parseInt(select.value.slice(-1));
    selected_baseline[2] = index;
    load_data(samples2, selected_sample[2], 2);
}

function select_sample2(select) {
    let index = parseInt(select.value.split('sample').slice(-1)[0]);
    selected_sample[2] = index;
    console.log(index, select.value)
    load_data(samples2, index, 2);
}