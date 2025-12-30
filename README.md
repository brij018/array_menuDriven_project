📌 Menu-Driven Array Program in JavaScript (Node.js)
📖 Overview

This project is a menu-driven JavaScript program that demonstrates the use of JavaScript array methods using Node.js.
It allows the user to perform operations on 1-D, 2-D, and 3-D arrays through a terminal-based menu.

Since JavaScript input in Node.js is asynchronous, the program uses a recursive menu function instead of a traditional while loop.

✨ Features

Create 1-D, 2-D, and 3-D arrays

Add elements at:

End (push)

Start (unshift)

Remove elements from:

End (pop)

Start (shift)

Insert / delete elements using splice()

Convert multi-dimensional arrays into 1-D using flat()

Simple, beginner-friendly menu interface

🛠️ Technologies Used

JavaScript

Node.js

readline module (for user input)

▶ How to Run the Program
1️⃣ Install Node.js

Download and install Node.js from:

https://nodejs.org

2️⃣ Clone or Download the Project

Place the JavaScript file in a folder.

3️⃣ Run the Program

Open terminal in the project folder and run:

node filename.js

📋 Menu Options
1. Create Array (1D / 2D / 3D)
2. Add Element at End
3. Add Element at Start
4. Remove Element from End
5. Remove Element from Start
6. Splice (insert / delete)
7. Flat Array
0. Exit

🧪 Input Format Examples
▶ 1-D Array
1 2 3 4

▶ 2-D Array
1,2,3;4,5,6

▶ 3-D Array
1,2;3,4;5,6

🔹 Splice Input Format
index deleteCount elements


Example:

1 2 9 10

🔹 Flat Method

Enter depth:

1 → Flattens 2-D array

2 → Flattens 3-D array

📚 Array Methods Covered
Method	Purpose
push()	Add element at end
pop()	Remove element from end
unshift()	Add element at start
shift()	Remove element from start
splice()	Insert / delete at specific index
flat()	Convert multi-D array to 1-D
🧠 Important Note

prompt() works only in browsers

This program uses Node.js, so readline is required

A recursive function is used instead of a while loop

🎓 Academic Use

This project is suitable for:

JavaScript practical exams

College assignments

Learning array methods

Understanding asynchronous input in Node.js

✅ Conclusion

This program demonstrates how common JavaScript array operations can be implemented in a menu-driven format using Node.js.
It helps beginners understand both array methods and user input handling in JavaScript.
