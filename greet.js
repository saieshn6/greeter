/**
 * create a function that genates 10 random greet messages.
 * and prints them to the console with a line break between each other.
 */

function randomGreetMessages(){
    const greetMessages = [
        'Hello',
        'Hi',
        'Hey',
        'Howdy',
        'Hola',
        'new',
        'File',
        'Create',
        'to',
        'git'
    ];

    for (let i = 0; i< 10; i++){
        const randomIndex = Math.floor(Math.random() * greetMessages.length);
        console.log(greetMessages[randomIndex]);
    }
}

randomGreetMessages();