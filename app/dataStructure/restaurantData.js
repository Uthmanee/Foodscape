const restaurant = [
  {
    id: 5,
    distance: "1.5 km",
    foods: [
      {
        id: 1,
        name: "Rice",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FRice.png?alt=media&token=3529b24d-a5d4-4431-99cc-5f2d24ae1b8d",
        food: [
          {
            name: "White Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 100,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FwhiteRice.png?alt=media&token=290bc3b3-d52d-434a-bebc-ccea579a51ea",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Fried Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 101,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FFriedRice.png?alt=media&token=28918d1d-c89e-455e-b9e2-cfd3282fa7fdageUrl",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Rice and Plantain",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 102,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FriceNplantain.png?alt=media&token=b233db16-cf83-46b6-a95f-1424dbce5254",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Ofada Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 103,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FOfadaRice.png?alt=media&token=e0b7dc30-99c0-4ecb-902b-4e6594f02c24",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Burger",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2Fburger.png?alt=media&token=f577b8e2-97b7-4aa4-a2ce-fe307e9a144b",
        food: [
          {
            name: "Beef Burger",
            foodDetail: "Beef steak mince, Olive oil, Rolls\nKetchup, Egg",
            id: 104,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FbeefBurger.png?alt=media&token=98aaf696-c792-4569-8dc7-93f067640344",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Kubie Burger",
            foodDetail: "Seasoned ground beef, Cheese,\nLettuce, Tomato",
            id: 105,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FkubieBurger.png?alt=media&token=8a3e2e2a-ca39-4ca9-af6f-e0d4e4fcc4f7",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Nutburger",
            foodDetail:
              "Mixed nuts, Chickpeas, Spices,\nHerbs, Lettuce,Sliced tomato",
            id: 106,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FnutBurger.png?alt=media&token=0766f2ac-f668-4a7c-b8b0-a01c86536d84",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Burger",
            foodDetail:
              "Ground turkey, Garlic, Onion,\nHerbs, Lettuce,Tomato, Avocado",
            id: 107,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 3,
        name: "Turkey",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FTurkey.png?alt=media&token=7106221e-1e1c-481c-b802-8f0a28f6e221",
        food: [
          {
            name: "Roast Turkey",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 108,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Grilled Turkey Breast",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 109,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Meatballs",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 110,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Sausage",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 4,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 4,
        name: "Chicken",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2Fchicken.png?alt=media&token=fad2bccc-128c-4cf8-8f0e-372cdd18be16",
        food: [
          {
            name: "Roast Chiken",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 111,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Grilled Chiken Breast",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 112,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Chicken Meatballs",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 113,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Chicken Sausage",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 114,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/restaunrants%2FSweetSensation.png?alt=media&token=e2e95fb4-6ac9-4f93-bed8-bff7cd27885b",
    name: "Sweet Sensation",
    location: "Oke-Ilewo, Abeokuta",
    minutesAway: "25 minutes",
    rating: "5.0",
    type: "restaurant",
  },
  {
    id: 6,
    distance: "1.5 km",
    foods: [
      {
        id: 1,
        name: "Chicken",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2Fchicken.png?alt=media&token=fad2bccc-128c-4cf8-8f0e-372cdd18be16",
        food: [
          {
            name: "Roast Chicken",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 115,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Grilled Chicken Breast",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 116,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Chicken Meatballs",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 117,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Chicken Sausage",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 118,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Turkey",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FTurkey.png?alt=media&token=7106221e-1e1c-481c-b802-8f0a28f6e221",
        food: [
          {
            name: "Roast Turkey",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 119,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Grilled Turkey Breast",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 120,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Meatballs",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 121,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Sausage",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 122,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 3,
        name: "Burger",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2Fburger.png?alt=media&token=f577b8e2-97b7-4aa4-a2ce-fe307e9a144b",
        food: [
          {
            name: "Beef Burger",
            foodDetail: "Beef steak mince, Olive oil, Rolls\nKetchup, Egg",
            id: 123,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FbeefBurger.png?alt=media&token=98aaf696-c792-4569-8dc7-93f067640344",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Kubie Burger",
            foodDetail: "Seasoned ground beef, Cheese,\nLettuce, Tomato",
            id: 124,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FkubieBurger.png?alt=media&token=8a3e2e2a-ca39-4ca9-af6f-e0d4e4fcc4f7",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Nutburger",
            foodDetail:
              "Mixed nuts, Chickpeas, Spices,\nHerbs, Lettuce,Sliced tomato",
            id: 125,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FnutBurger.png?alt=media&token=0766f2ac-f668-4a7c-b8b0-a01c86536d84",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Burger",
            foodDetail:
              "Ground turkey, Garlic, Onion,\nHerbs, Lettuce,Tomato, Avocado",
            id: 126,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 4,
        name: "Rice",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FRice.png?alt=media&token=3529b24d-a5d4-4431-99cc-5f2d24ae1b8d",
        food: [
          {
            name: "White Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 127,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FwhiteRice.png?alt=media&token=290bc3b3-d52d-434a-bebc-ccea579a51ea",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Fried Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 128,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FFriedRice.png?alt=media&token=28918d1d-c89e-455e-b9e2-cfd3282fa7fdageUrl",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Rice and Plantain",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 129,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FriceNplantain.png?alt=media&token=b233db16-cf83-46b6-a95f-1424dbce5254",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Ofada Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 130,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FOfadaRice.png?alt=media&token=e0b7dc30-99c0-4ecb-902b-4e6594f02c24",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/restaunrants%2FMrBiggs.png?alt=media&token=f42933eb-19eb-4040-b5c2-ae28ff4893d8",
    name: "Mr.Biggs",
    location: "Panseke, Abeokuta",
    minutesAway: "30 minutes",
    rating: "5.0",
    type: "restaurant",
  },
  {
    id: 7,
    distance: "1.5 km",
    foods: [
      {
        id: 1,
        name: "Burger",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2Fburger.png?alt=media&token=f577b8e2-97b7-4aa4-a2ce-fe307e9a144b",
        food: [
          {
            name: "Beef Burger",
            foodDetail: "Beef steak mince, Olive oil, Rolls\nKetchup, Egg",
            id: 131,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FbeefBurger.png?alt=media&token=98aaf696-c792-4569-8dc7-93f067640344",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Kubie Burger",
            foodDetail: "Seasoned ground beef, Cheese,\nLettuce, Tomato",
            id: 132,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FkubieBurger.png?alt=media&token=8a3e2e2a-ca39-4ca9-af6f-e0d4e4fcc4f7",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Nutburger",
            foodDetail:
              "Mixed nuts, Chickpeas, Spices,\nHerbs, Lettuce,Sliced tomato",
            id: 133,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FnutBurger.png?alt=media&token=0766f2ac-f668-4a7c-b8b0-a01c86536d84",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Burger",
            foodDetail:
              "Ground turkey, Garlic, Onion,\nHerbs, Lettuce,Tomato, Avocado",
            id: 134,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Rice",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FRice.png?alt=media&token=3529b24d-a5d4-4431-99cc-5f2d24ae1b8d",
        food: [
          {
            name: "White Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 100,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FwhiteRice.png?alt=media&token=290bc3b3-d52d-434a-bebc-ccea579a51ea",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Fried Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 101,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FFriedRice.png?alt=media&token=28918d1d-c89e-455e-b9e2-cfd3282fa7fdageUrl",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Rice and Plantain",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 102,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FriceNplantain.png?alt=media&token=b233db16-cf83-46b6-a95f-1424dbce5254",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Ofada Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nkethcup, egg",
            id: 103,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FOfadaRice.png?alt=media&token=e0b7dc30-99c0-4ecb-902b-4e6594f02c24",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 3,
        name: "Chicken",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2Fchicken.png?alt=media&token=fad2bccc-128c-4cf8-8f0e-372cdd18be16",
        food: [
          {
            name: "Roast Chicken",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 139,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Grilled Chicken Breast",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 140,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Chicken Meatballs",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 141,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Chicken Sausage",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 142,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 4,
        name: "Turkey",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FTurkey.png?alt=media&token=7106221e-1e1c-481c-b802-8f0a28f6e221",
        food: [
          {
            name: "Roast Turkey",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 143,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Grilled Turkey Breast",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 144,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Meatballs",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 145,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Sausage",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 146,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/restaunrants%2FMrBiggs.png?alt=media&token=f42933eb-19eb-4040-b5c2-ae28ff4893d8",
    name: "Mama Chi Chi",
    location: "Oke-Mosan, Abeokuta",
    minutesAway: "30 minutes",
    rating: "4.8",
    type: "restaurant",
  },
  {
    id: 8,
    distance: "1.5 km",
    foods: [
      {
        id: 1,
        name: "Turkey",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FTurkey.png?alt=media&token=7106221e-1e1c-481c-b802-8f0a28f6e221",
        food: [
          {
            name: "Roast Turkey",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 147,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Grilled Turkey Breast",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 148,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Meatballs",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 149,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Sausage",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 150,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Rice",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FRice.png?alt=media&token=3529b24d-a5d4-4431-99cc-5f2d24ae1b8d",
        food: [
          {
            name: "White Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 151,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FwhiteRice.png?alt=media&token=290bc3b3-d52d-434a-bebc-ccea579a51ea",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Fried Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 152,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FFriedRice.png?alt=media&token=28918d1d-c89e-455e-b9e2-cfd3282fa7fdageUrl",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Rice and Plantain",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 153,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FriceNplantain.png?alt=media&token=b233db16-cf83-46b6-a95f-1424dbce5254",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Ofada Rice",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 154,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FOfadaRice.png?alt=media&token=e0b7dc30-99c0-4ecb-902b-4e6594f02c24",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 3,
        name: "Chicken",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2Fchicken.png?alt=media&token=fad2bccc-128c-4cf8-8f0e-372cdd18be16",
        food: [
          {
            name: "Roast Chicken",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 161,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Grilled Chicken Breast",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 162,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Chicken Meatballs",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 163,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Chicken Sausage",
            foodDetail: "Rolls, beef steak mince, olive oil,\nketchup, egg",
            id: 164,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
      {
        id: 4,
        name: "Burger",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2Fburger.png?alt=media&token=f577b8e2-97b7-4aa4-a2ce-fe307e9a144b",
        food: [
          {
            name: "Beef Burger",
            foodDetail: "Beef steak mince, Olive oil, Rolls\nKetchup, Egg",
            id: 171,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FbeefBurger.png?alt=media&token=98aaf696-c792-4569-8dc7-93f067640344",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Kubie Burger",
            foodDetail: "Seasoned ground beef, Cheese,\nLettuce, Tomato",
            id: 172,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FkubieBurger.png?alt=media&token=8a3e2e2a-ca39-4ca9-af6f-e0d4e4fcc4f7",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Nutburger",
            foodDetail:
              "Mixed nuts, Chickpeas, Spices,\nHerbs, Lettuce,Sliced tomato",
            id: 173,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FnutBurger.png?alt=media&token=0766f2ac-f668-4a7c-b8b0-a01c86536d84",
            price: 1500,
            type: "food",
            quantity: 1,
          },
          {
            name: "Turkey Burger",
            foodDetail:
              "Ground turkey, Garlic, Onion,\nHerbs, Lettuce,Tomato, Avocado",
            id: 174,
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/food%2FturkeyBurger.png?alt=media&token=3a7ac7d8-12fa-4dbf-a95d-77b1c719b532",
            price: 1500,
            type: "food",
            quantity: 1,
          },
        ],
      },
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/restaunrants%2FMamaPut.png?alt=media&token=d608f989-82a0-4224-a40c-ac3115e0f44a",
    name: "Mama Put",
    location: "Oke-Ilewo, Abeokuta",
    minutesAway: "33 minutes",
    rating: "4.6",
    type: "restaurant",
  },
];

export default restaurant;
