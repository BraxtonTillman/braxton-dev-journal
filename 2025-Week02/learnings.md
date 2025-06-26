// June 25, 2025

So I have been working on my golf website and I have been using way too much AI. So much in fact I got to the point to where I had no idea what I was doing and could barely read the code. All this does is make me feel like a fake programmer and questions my ability to be an engineer. So I said f\*ck it and started doing mini-projects.

I'm starting in C++ because that is what I know best but I will be learning python (I actually learned this language first but it's been a hot minute) and JavaScript. So today I made a random number guessing game in C++. Here is what I learned:

Most of this stuff I already knew but some stuff I had to research to get it down was creating a uniformly distributed rng. I historically always used rand() but that is pretty outdated and I know there are other ways to be better about this process.

So now I know that I should create a random device, a Mersenne Twister Engine, set the minimum and maximum values, set a uniformed distribution among the limits, and then generate the random number. The code below is mine.

```C++
// Random Number Generator
#include <iostream>
#include <random>

// Seed Random Device
std::random_device rd;

// Create Mersenne Twister Engine
std::mt19937 gen(rd());

// Set minimum and maximum values
int const MIN_VAL = 0;
int const MAX_VAL = 100;

// Make the 'randomness' uniform across it's bounds
std::uniform_int_distribution<> dis(MIN_VAL, MAX_VAL);

// Instantiate a random number
int random_number = dis(gen);
```

Before going to the next thing I learned let's go over what all this is behind the scenes. The first thing is seeding with random device which is a non-deterministic random number generator using hardware entropy.

Then the Mersenne Twister Engine is created and it is a deterministic pseudo-random number generator that uses a giant internal state which is 624 integers long.

Why use the Mersenne Twister? It's fast, won't repeat and has uniformity. If it wasn't seeded with the random_device seed then it would always give the same sequence (ie. if it was seeded with the same seed then the sequence 2,16, 1000, etc. would be the same. We don't want that.)

Now we set the distribution to define how the numbers should be spread. This ensures that each number between the limits have an equal probability.

Finally we generate the number and pass it to a variable.

The last thing I learned was how to check a users input to be an integer value. Here is the code:

```C++
 int validInput()
 {
    int user_guess;
    std::cin >> user_guess;

    while (std::cin.fail()) // We're running this loop as long as the cin state fails
    {
        std::cin.clear(); // We must clear the CIN state in order to re-enter input
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(),'\n'); // This ignores characters in the input buffer until it finds a new line or max characters
        std::cout <<"Invalid entry. Enter a NUMBER: ";
        std::cin >> user_guess;
    }
    return user_guess;
 }
```

So this is taking a user input, and running a loop till the failure is gone. The failure being no integer. This is clearing the cin state (because even if we try and change the state it will still fail unless cleared.) and ignoring characters in the cin until it finds a new line or max character limit.

Now this isn't perfect. You can mix some characters and numbers and it will accept it. But it's the simplest way for me to check a user's input as an integer.
