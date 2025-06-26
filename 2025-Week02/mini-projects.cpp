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

// ------------------------------------------------------
// Check a user's input to ensure its an integer

int validInput()
{
    int user_guess;
    std::cin >> user_guess;

    while (std::cin.fail()) // We're running this loop as long as the cin state fails
    {
        std::cin.clear();                                                   // We must clear the CIN state in order to re-enter input
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // This ignores characters in the input buffer until it finds a new line or max characters
        std::cout << "Invalid entry. Enter a NUMBER: ";
        std::cin >> user_guess;
    }
    return user_guess;
}