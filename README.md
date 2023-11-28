# Hangman Game by Suryanshu Singh

### Made in JavaScript to be used in the Terminal

A simple **Hangman Game** I made for fun to be played in the terminal. It uses an API from [API Ninjas](https://api-ninjas.com/) to get a random word each time the game is ran or restarted.

> The player does have to get an api key in order to play the game **(It is free and you get 10,000 calls each month)**.

## How to get the API key

It's pretty easy! All you have to do is:

1. Go to https://api-ninjas.com/
2. Click the "Get a Free API Key" button
3. Make an account and get your email verified
4. From the "My Account" page, copy the API Key
   That's it!

## Changes to make before running the game

Now that you have your API Key, all you need to do is go to the Hangman Game folder, navigate into the public folder and open "word.js". Once you're in the file, look for this line:

```javascript
//ADD YOUR OWN API_KEY BELOW FROM https://api-ninjas.com/
const apiKey = config.API_KEY;
```

All you have to do is replace the "config.API_KEY" with your API Key in quotations. After you're done it should look like this:

```javascript
//ADD YOUR OWN API_KEY BELOW FROM https://api-ninjas.com/
const apiKey = "EXAMPLE_API$KEY";
```

## Running the game

There's two ways of running the game:

- BASH file (using the ./ command)

1. Open up terminal (MacOS) or Command Prompt (Windows), navigate to where this Hangman Game folder resides using `cd` command
2. Then just run the command `./runHangman` in your terminal
   > If it says something like "Permission Denied" then you will have to run `chmod +x runHangman` and then retry

# OR

- NodeJS file (using node command)

1. Open up terminal (MacOS) or Command Prompt (Windows), navigate to where this Hangman Game folder resides using `cd` command
2. Then go into the public folder using the `cd` command again
3. Now run `node main.js`
