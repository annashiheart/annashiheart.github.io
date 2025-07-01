const gameData = {
    "1": {
        "text": "You wake up late. You're supposed to be at work 15 minutes ago. What do you do?",
        "image" : "smaller_images/snackies.png",
"choices": {
            "Panic and sprint out the door without brushing your teeth": [2, ["Ontario"]],
            "Grab a double double for the whole office to make up for it": [2, ["Alberta", "Saskatchewan"]],
            "Shrug it off, the subway was gonna be late anyway": [2, ["British Columbia"]],
            "Send an apology email en français, then snooze 5 more minutes": [2, ["Quebec"]]
        }
    },
    "2": {
        "text": " You arrive at work, but for some reason everyone is speaking in French! How do you respond?",
        "image" : "smaller_images/where_to.png",
"choices": {
            "Smile and nod while quietly opening Google Translate": [3, ["Ontario", "Manitoba"]],
            "Respond with your best Grade 9 French class accent": [3, ["Alberta", "Nova Scotia"]],
            "C'est tiguidou. Il faut toujours être vite sur ses patins!": [3, ["Quebec", "New Brunswick"]],
            "Pretend you're too busy to chat and hide in the supply closet": [3, ["British Columbia", "Nunavut"]]
    }
    },
    "3": {
        "text": "It's lunch time! What are you craving?",
        "image" : "smaller_images/at_beach.png",
"choices": {
    "A steaming pile of poutine with extra curds": [0, ["Quebec", "Ontario"]],
    "A butter tart and a Nanaimo bar, because why not both": [0, ["Manitoba", "British Columbia", "Saskatchewan"]],
    "Maple-glazed salmon caught fresh this morning": [0, ["Yukon", "Newfoundland"]],
    "Ketchup chips and milk straight from the bag to wash it down": [0, ["New Brunswick", "Nova Scotia", "Prince Edward Island"]]
    }
    },
    "41": {
        "text": "The sun feels so nice, everyone is having a blast! You start to think: ",
        "image" : "smaller_images/having_beach_fun.png",
"choices": {
            "This is fun, I'm grateful for my friends": [7,["Northwest Territories", "Manitoba"]],
            "This shell is so funky lol": [7,["Prince Edward Island", "British Columbia", "Newfoundland & Labrador", "Ontario"]],
            "Love my friends, but I wanna go home": [7,["Yukon", "New Brunswick"]],
            "What if we all went scuba diving": [7,["Nova Scotia", "Quebec"]],
        }
    },
    "7": {
        "text": "Suddenly, a large shadow falls over the beach. \
                 A giant hand reaches down from the sky, and scoops you and \
                 your friends up, and the world turns dark...",
        "image" : "smaller_images/beach_disaster.png",
"choices": {
            "Continue": [8,[]]
        }
    },
    "8": {
        "text": "As you and your friends regain consciousness, you realize you're \
                in someone's pantry! Hurry and escape before the human eats you!",
        "image" : "smaller_images/in_pantry.png",   
"choices": {
            "Everyone sprint for the nearby window!": [9,["Alberta"]],
            "How about we stealth our way out the window instead": [9,["Ontario", "Saskatchewan"]],
            "Listen to your friend who suggests escaping through the backyard": [19, ["New Brunswick"]]
        }
    },
    "9": {
        "text": "Shoot! The window is stuck and won't slide open!",
        "image" : "smaller_images/window_locked.png",
"choices": {
            "How about we go down the hole instead?": [19, ["Manitoba", "Ontario", "Saskatchewan"]],
            "Try using oil to loosen locking mechanism": [48, ["New Brunswick", "Nova Scotia", "Quebec"]],
            "Chuck kitchen utensils to break the window >:)": [55, ["Alberta", "Prince Edward Island"]]
        }
    },
    "48" :{
        "text": "Sweet! The window slides open nicely!",
        "image" : "smaller_images/window_jump.png",
"choices": {
            "Jump out the window with no hesitation. Cya!": [49, ["Alberta", "Northwest Territories", "Nova Scotia"]],
            "Look for something to land on before jumping": [49,["Yukon", "Ontario", "Manitoba"]],
            "Um I'm scared of heights": [49, ["Saskatchewan"]]
        }
    },
    "55" :{
        "text" : "You and your friends start hurling plates, pots, pans, \
                  and as your friend throws the last bar of soap, the window\
                  breaks open!",
        "image" : "smaller_images/breaking_window.png",
"choices": {
                    "How did we get away with that": [49, ["Ontario"]],
                    "Go go go! The human is going to come soon": [49, ["Nova Scotia", "Northwest Territories"]],
                    "Woohoo! Let's go!": [49, ["Newfoundland & Labrador", "Prince Edward Island", "British Columbia"]]
                }
    },
    "49" :{    
        "text": "Stepping through the exit,transports you to the Corn Cosmos,\
                and you're now in a corn rocket floating in space!\
                What gadget are you going to tinker with to get back home?",
        "image" : "smaller_images/corn_space.png",
"choices": {
            "The lever that takes you into hyperspace (or whatever they call it) in the movies": [10,["British Columbia"]],
            "*Methodically* type random stuff in the holographic keyboard above you": [10, ["Quebec", "Prince Edward Island"]]
        }
    },
    "10": {
        "text": "Buckle up! Stars and green galaxies fly by as the corn rocket shoots off!",
        "image" : "smaller_images/space_travel.png",
"choices": {
            "Wow. This is beautiful...": [43, ["Manitoba"]],
            "Please take us back *veggie fingers intensely crossed*": [43,["Saskatchewan", "Nova Scotia"]],
            "I recognize that constellation! It's Ori-onion!": [43, ["Yukon"]]
        }
    },
    "43" : {
        "text": "\"Umm where we are now...\" asks one of your friends. What should you guys do next?",
        "image" : "smaller_images/space_confusion.png",
"choices": {
            "Pull more levers and press more buttons!": [11,["Alberta", "Quebec"]],
            "Look around for a map. There's surely one in the ship right?": [39, ["Yukon", "Ontario", "Nova Scotia"]],
            "Organize everyone and discuss team plan": [39,["Northwest Territories"]]
        }
    },
    "11" : {
        "text": "In your button frenzy, a glowing orb appears in the spaceship.",
        "image" : "smaller_images/glowing_space_orb.png",
"choices":{
            "Is this the end?": [42, ["Saskatchewan", "Manitoba"]],
            "Everyone hide!": [42, ["Quebec"]],
            "ALIENS!": [42, ["British Columbia"]],
        }
    },
    "42": {
        "text": "A glowing popcorn emerges and yells, \"Stop you fools! Ugh,\
                VeggieVille natives, so stupid. Let me take you back.\"",
        "image" : "smaller_images/glowing_popcorn.png",
"choices": {
            "Thanks...": [12,["Saskatchewan"]],
            "THANK YOU! You saved us!":[12,["Newfoundland & Labrador", "Prince Edward Island", "Alberta"]],
            "Thank you so much! How can I repay you?": [12,["Quebec", "New Brunswick"]]
        }
    },
    "39" : {
        "text": "After reading the rocket manual, your team \
            has an idea for what buttons to press.",
        "image" : "smaller_images/spaceplan.png",
"choices": {
            "Full send! VeggieVille here we come": [40,["Alberta", "Prince Edward Island", "Nova Scotia"]],
            "We should double check...": [40, ["Nova Scotia", "New Brunswick"]],
            "Someone else press the button, I can't do it": [40, ["Saskatchewan"] ],
            "Let's all press the button together!": [40, ["Manitoba", "Prince Edward Island"]]
        }
    },
    "40": {
        "text": "\"Here goes nothing!\" As Link the Yukon reaches for the lever, \
        Oli the Onion yells \"Wait! I don't feel good about this. I'm really scared...\". \
        What do you do?",
        "image" : "smaller_images/pull_lever.png",
"choices": {
            "It was me. I was the one that yelled": [44, ["Newfoundland & Labrador", "Prince Edward Island", "New Brunswick"]],
            "Re-explain the plan. See? Nothing to be afraid of": [44,["Quebec", "Nova Scotia"]],
            "Stand back and let someone else handle the situation": [44, ["Saskatchewan", "Ontario"]],
            "Go over and comfort them.": [44,["Prince Edward Island", "Manitoba"]]
        }
    },
    "44": {
        "text": "At last, you all pull the lever and blast off! \
            The rocket halts, and the corn husk doors release. \
            You're back in VeggieVille!",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Time to hit up Club New Brunswick! I need to let loose": [13, ["British Columbia", "Alberta"]],
            "Go to your favorite spot to unwind by yourself": [13, ["Saskatchewan"]],
            "Call all of VeggieVille for a picnic and to tell everyone what happened": [13, ["Northwest Territories"]],
            "Throw up from the rocket-sickness": [13, ["Newfoundland & Labrador"]]
        }
    },
    "12" : {
        "text": "The kernel does a magical twirl, and a pop! \
                You find yourself back in VeggieVille. What do you do now?",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Wait...was that an alien?": [13,["British Columbia", "Yukon" ]],
            "Cry. That was a lot to go through": [13,["Manitoba"]],
            "Celebrate with your friends!": [13,["Ontario", "Alberta", "New Brunswick", "Nova Scotia"]],
            "Take a breather somewhere secluded": [13,["Newfoundland & Labrador", "Yukon"]]
        }
    },
    "4":{
        "text": "So many books to choose from! What catches your eye first?",
        "image" : "smaller_images/which_book.png",
"choices" : {
            "A whimsical, heartwarming slice of life novel.": [15,["Manitoba", "Newfoundland & Labrador"]],
            "The Great Gourdsby, classic literature": [15,["Nova Scotia"]],
            "Sherlettuce Holmes, a thrilling mystery novel": [15,["Yukon", "New Brunswick"]],
            "A self help book": [15, ["Quebec"]]
        }
    },
    "15" :{
        "text": "There are a couple of events going on today at the book store! Which do you go to?",
        "image" : "smaller_images/bookstore_activities.png",
"choices" : {
            "Join a book club discussion on the hottest new book": [16,["Prince Edward Island", "Newfoundland & Labrador"]],
            "Book scavenger hunt around the store for a free prize":[16,["Alberta", "Yukon"]],
            "A creative writing workshop and storytelling event":[16, ["Quebec", "British Columbia", "New Brunswick"]]     
        }
    },
    "16":{
       "text": "As you leave the bookstore, an insurmountable gust of wind lifts you up. \
        Everyone is buffeted in a vortex up and up...",
        "image" : "smaller_images/vortex.png",
"choices":{
            "Goodbye everyone it was nice knowing you": [17,["Saskatchewan","Prince Edward Island", "Ontario"]],
            "Error 404 veggie brain is in a state of panic": [17, ["Manitoba"]],
            "Everyone try holding hands!": [17,["Nova Scotia", "Quebec", "New Brunswick"]],
            "Weeee!": [17,["Alberta", "Newfoundland & Labrador"]],
       } 
    },
    "17": {
        "text": "The whirlwind stops! You feel a sharp chilly breeze...\
                 because you're trapped in a human's fridge!",
        "image" : "smaller_images/in_fridge.png",
"choices": {
            "Continue": [50, []]
        }
    },
    "50": {
        "text": "Get out ASAP before you get eaten!",
        "image" : "smaller_images/in_fridge.png",
"choices":{
            "Hide and wait for the refrigerator door to open": [18,["Nova Scotia", "Newfoundland & Labrador"]],
            "Rally the veggie friends to push the door. Roll out!": [18,["Alberta", "British Columbia"]],
            "Try to unplug the refrigerator from the inside": [18, ["Quebec","Yukon"]],
            "Do what the others do": [18,["Saskatchewan"]]
        }
    },
    "18": {
        "text": "Miraculously, you made it out the fridge, but now you need to get out \
                of the house! What's next?",
        "image" : "smaller_images/out_fridge.png",
"choices": {
            "Hop on the dog's back!": [19,["Alberta"]],
            "Stealth your way to the front door": [19, ["Ontario", "Yukon"]],
            "Jump out the nearby window!": [9, ["Quebec", "British Columbia"]]
        }
    },
    "19": {
        "text": "As you cross the door step, you're transported to CheeseLand, land of fondue rivers and \
            swiss cheese caves. What's your next move?",
        "image" : "smaller_images/cheeseland.png",
"choices": {
            "Make a charcuterie board as a snack break": [20, ["Quebec", "Prince Edward Island"]],
            "Go inland in search of the Cheese Castle": [20,["Yukon", "Nova Scotia"]],
            "Ask others what they think the group should do": [20, ["Manitoba", "Prince Edward Island", "Newfoundland & Labrador"]]
        }
    },
    "20":{
        "text": "Mid charcuterie board making, a gouda cheese wheel yells, \
                \"What are you doing? This is sacred cheese you're eating!\"",
        "image" : "smaller_images/mad_gouda.png",
"choices" : {
            "You want some?": [21,["Quebec", "Saskatchewan", "Alberta", "Prince Edward Island"]],
            "Apologize immediately and ask how to get to Cheese Castle":[21, ["Newfoundland & Labrador", "Yukon"]]
        }
    },
    "21": {
        "text": "Gouda immediately takes you to the Cheese King, hoping your group \
                leaves as soon as possible. However, the king \
                must be entertained in order to be seen.",
        "image" : "smaller_images/cheese_castle.png",
"choices":{
            "Sing and dance the CheeseLand anthem": [22,["Manitoba", "Newfoundland & Labrador"]],
            "Offer some leftover charcuterie to the king": [22,["Alberta", "Saskatchewan"]],
            "Comedy skit but all the punch lines are exclusively cheese puns": [22, ["British Columbia", "Quebec", "Nova Scotia"]]
        }
    },
    "22": {
        "text": "The Cheese King laughs, but you're not sure if he's laughing with you or at you...",
        "image" : "smaller_images/performance.png",
"choices": {
            "Keep going, the show must go on!": [51,["British Columbia", "Northwest Territories", "New Brunswick"]],
            "Guy's I'm not sure if this is working": [51, ["Ontario", "Yukon"]],
            "Try to ignore the king and power through": [51, ["Manitoba", "Nova Scotia"]]
        }
    },
    "51": {
        "text": "He chuckles, \"I see you desire to return to VeggieLand. Tell me, \
        what do you miss the most about home?",
        "image" : "smaller_images/happy_king.png",
"choices": {
            "The warm sunlight and fresh air": [23,["Alberta", "Saskatchewan", "Manitoba"]],
            "The hanging out with your veggie friends": [23,["Yukon", "Prince Edward Island", "New Brunswick"]],
            "The smell of your grandma's cherry pies": [23,["Newfoundland & Labrador"]],
            "Weekly frisbee games at the park": [23,["British Columbia", "Nova Scotia"]]
        }
    },
    "23": {
        "text": "\"Very well. I will send you on a guided all-expensed boat to back home.\" \
                    Where do you guys want to visit on the way back?",
        "image" : "smaller_images/boat.png",
"choices":{
            "Mushroom Island, known for pioneering mushroom tech": [24,["Ontario", "Quebec", "Yukon"]],
            "Dandelion Plains, known for its sunshine and farms": [25,["Saskatchewan", "Manitoba", "Prince Edward Island", "Newfoundland & Labrador", "New Brunswick"]],
            "Forget-Me-Not Island, largely unexplored territory": [26, ["Alberta", "Quebec", "Nova Scotia"]]
        }
    },
    "24": {
        "text": "Arrived at Mushroom Island! What are you gonna do?",
        "image" : "smaller_images/mushroom.png",
"choices" :{
            "Get a new mushroom telephone, its got wider coverage with its latest spore dispersion technology": [27,["Ontario", "New Brunswick"]],
            "Party on da MushrooSoft roof, they're debuting their latest vehicle, the Vroomie Schroomie": [27,["British Columbia", "New Brunswick"]],
            "Buy a little mushroom keepsake for you and your friends": [27, ["Manitoba", "Prince Edward Island"]],
            "I just wanna go back home tbh": [27, ["Saskatchewan", "Northwest Territories"]]
        }
    },
    "25": {
        "text": "Arrived at Dandelion Plains! What are you gonna do?",
        "image" : "smaller_images/dandelion.png",
"choices": {
            "Make dandelion crowns with friends": [27,["Prince Edward Island", "New Brunswick", "British Columbia"]],
            "Buy some dandelion honey to gift to your cheese navigator and cheese king": [27,["Manitoba", "Quebec", "Newfoundland & Labrador"]],
            "Re-check the weather to make sure you'll be able to get home on as planned ": [27,["Ontario", "Northwest Territories", "Yukon"]],
        }
    },
    "26": {
        "text": "Arrived at Forget-Me-Not Island! What are you gonna do?",
        "image" : "smaller_images/forgetmenot.png",
"choices": {
            "Explore to make the first-ever forget me not island map!": [27,["Northwest Territories", "Yukon"]],
            "Paint various views to share with VeggieVille": [27,["Manitoba", "Prince Edward Island"]],
            "I wanna go home": [27,["Ontario", "Saskatchewan"]],
            "Have a photo shoot with your friends in the forget me nots": [27,["Alberta", "Newfoundland & Labrador", "New Brunswick", "New Brunswick"]]
        }
    },
    "27": {
        "text": "After your pit stop, you finally arrive home in VeggieLand. What are you doing first?",
        "image" : "smaller_images/backhome.png",
"choices": {
            "Party at Club New Brunswick. Dance the night away!": [13,["Alberta"]],
            "Spend some alone time at your favorite cozy bench/spot.": [13,["Newfoundland & Labrador"]],
            "Organize a community picnic to share your adventures": [13,["Manitoba", "Prince Edward Island"]],
            "Hangout with your friends at a restaurant": [13,["Newfoundland & Labrador", "Northwest Territories", "New Brunswick"]]
        }
    },
    "13": {
        "text": "Last question! After a night of good rest, the next morning you:",
        "image" : "smaller_images/another_day.png",
"choices" : {
            "Go to a cafe to finally read that book": [0,["Manitoba", "Saskatchewan", "New Brunswick"]],
            "Head to work, get that bag": [0,["Ontario", "Yukon"]],
            "Organize a community clean up day": [0,["Newfoundland & Labrador", "Prince Edward Island", "Northwest Territories"]],
            "Go on a veggie run": [0, ["Alberta", "British Columbia"]]
        } 
    },

};

const personalities = { 
    "Quebec": 0,
    "Nova Scotia": 0,
    "Northwest Territories": 0, // The Leader
    "Alberta": 0, // The Adventurer
    "Ontario": 0, // The Analyst
    "Prince Edward Island": 0, // The Connector
    "Newfoundland & Labrador": 0, // The Caregiver
    "New Brunswick": 0, // The Visionary
    "Saskatchewan": 0, // The Realist
    "Manitoba": 0, // The Harmonizer
    "British Columbia": 0, // The Performer
    "Yukon": 0 // The Investigator
};

// const provincePersonalities = {
//     "Quebec": "Quebec",
//     "Nova Scotia": "Nova Scotia",
//     "Northwest Territories": "Northwest Territories",
//     "Alberta": "Alberta",
//     "Ontario": "Ontario",
//     "Prince Edward Island": "Prince Edward Island",
//     "Newfoundland & Labrador": "Newfoundland & Labrador",
//     "New Brunswick": "New Brunswick",
//     "Saskatchewan": "Saskatchewan",
//     "Manitoba": "Manitoba",
//     "British Columbia": "British Columbia",
//     "Yukon": "Yukon"
// };

const provinceDescriptions = {
    "Quebec": "You’re Quebec! Rich in culture and deeply introspective, you bring depth and pride to any group you’re in.",
    "Nova Scotia": "You’re Nova Scotia! Low-key and thoughtful, you value tradition and quiet moments of joy.",
    "Northwest Territories": "You’re Northwest Territories! Tough, wise, and always looking out for others.",
    "Alberta": "You’re Alberta! Bold and adventurous with a bit of wild energy.",
    "Ontario": "You’re Ontario! Ambitious, analytical, and always ready to level up.",
    "Prince Edward Island": "You’re Prince Edward Island! Friendly, grounded, and full of community spirit.",
    "Newfoundland & Labrador": "You’re Newfoundland & Labrador! Warm, quirky, and always there for your friends.",
    "New Brunswick": "You’re New Brunswick! Thoughtful and optimistic, you dream of a better future.",
    "Saskatchewan": "You’re Saskatchewan! Down-to-earth and loyal, you don’t need the spotlight to shine.",
    "Manitoba": "You’re Manitoba! Calm, balanced, and a quiet force of kindness.",
    "British Columbia": "You’re British Columbia! Laid-back, nature-loving, and artsy with a free spirit.",
    "Yukon": "You’re Yukon! Quietly curious, you value solitude and discovery."
};


let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your Veggie ID! Don't lose it! (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
