#include <iostream>
using namespace std;

int main() {
    // Initialize the string
    char str[] = "Hello World";
    
    // XOR each character with 127 and display the result
    for (int i = 0; str[i] != '\0'; i++) {
        char xorChar = str[i] ^ 127;
        cout << xorChar;
    }

    cout << endl;
    return 0;
}
