Project description: Decoder ring
You're planning a surprise birthday party for a friend who loves escape rooms and puzzles. What better way to practice your new coding skills than to build an application that will help you encode and decode all kinds of fun messages?

For at least part of this project, try following a TDD process. Once you get the hang of it, you'll find that writing tests can be a great way to focus your workflow.

Remember to sync this Qualified project with your local machine.

For detailed instructions on how to complete this project, consult the instructions on the Qualified assessment page.

Learning objectives
This project is designed to test your ability to build complex algorithms. It will also test your ability to write unit tests with Mocha and Chai to test your algorithms. You will not need to make any edits to HTML or CSS for this project. Before taking on this project, you should be comfortable with the learning objectives listed below:

Writing a series of unit tests using Mocha and Chai

Using different expect() methods to test your code

Project steps to complete
To complete this project, you must do the following:

Write code that passes all the tests in the Qualified assessment in this lesson.

Write code that passes all of the requirements outlined below, and submit your GitHub repo link to the Thinkful team in the next lesson.

Requirements to pass
For your project to pass, all of the following statements must be true. These criteria are reflected in the rubric in the following lesson.

All tests are passing in Qualified.

For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should test that the following is true:

It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.

It ignores capital letters. (For example, the results of A Message and a message should be the same.)

When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)

It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.

For the Polybius square (example: polybius("message") => "23513434112251"), the tests that you write should test that the following is true:

When encoding, it translates the letters i and j to 42.

When decoding, it translates 42 to (i/j).

It ignores capital letters. (For example, the results of A Message and a message should be the same.)

It maintains spaces in the message, before and after encoding or decoding.

For the substitution cipher (example: substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"), the tests that you write should test that the following is true:

It returns false if the given alphabet isn't exactly 26 characters long.

It correctly translates the given phrase, based on the alphabet given to the function.

It returns false if there are any duplicate characters in the given alphabet.

It maintains spaces in the message, before and after encoding or decoding.

It ignores capital letters. (For example, the results of A Message and a message should be the same.)
