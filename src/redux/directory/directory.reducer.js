const INITIAL_STATE = {
   categories: [
      {
         title: "phones",
         imageUrl: "https://user-images.githubusercontent.com/71128464/101895510-89a40a00-3b9f-11eb-9b24-31069ff1da68.png",
         id: 1,
         linkUrl: "shop/phones"
      },
      {
         title: "cameras",
         imageUrl: "https://user-images.githubusercontent.com/71128464/101896295-b0af0b80-3ba0-11eb-843e-98d449f8d933.png",
         id: 2,
         linkUrl: "shop/cameras"
      },
      {
         title: "laptops",
         imageUrl: "https://user-images.githubusercontent.com/71128464/101896382-d50ae800-3ba0-11eb-8309-3589538b1096.png",
         id: 3,
         linkUrl: "shop/laptops"
      },
      {
         title: "game consoles",
         imageUrl: "https://user-images.githubusercontent.com/71128464/101896438-ece26c00-3ba0-11eb-81af-efbb7469dcb8.png",
         id: 4,
         linkUrl: "shop/game_consoles"
      },
      {
         title: "video games",
         imageUrl: "https://user-images.githubusercontent.com/71128464/101896595-20bd9180-3ba1-11eb-974d-92e288375976.png",
         id: 5,
         linkUrl: "shop/video_games"
      },
      {
         title: "phone accessories",
         imageUrl: "https://user-images.githubusercontent.com/71128464/101896730-51053000-3ba1-11eb-96c3-4c8cb9337c26.png",
         id: 6,
         linkUrl: "shop/phone_accessories"
      }
   ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      default: 
         return state;
   }
}

export default directoryReducer;