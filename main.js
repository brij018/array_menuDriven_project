const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

function menu() {
    console.log("\nCurrent Array:", arr);
    console.log("1. Create Array (1D / 2D / 3D)");
    console.log("2. Add Element at End");
    console.log("3. Add Element at Start");
    console.log("4. Remove Element from End");
    console.log("5. Remove Element from Start");
    console.log("6. Splice (insert / delete)");
    console.log("7. Flat Array");
    console.log("0. Exit");

    rl.question("Enter choice: ", (c) => {

        if (c == 1) {
            rl.question(
                "Enter array (1D: 1 2 3 | 2D: 1,2;3,4 | 3D: 1,2;3,4;5,6): ",
                (data) => {
                    arr = data
                        .split(";")
                        .map(e => e.includes(",") ? e.split(",") : e);
                    menu();
                }
            );
        }

        else if (c == 2) {
            rl.question("Enter element: ", (e) => {
                arr.push(e);
                menu();
            });
        }

        else if (c == 3) {
            rl.question("Enter element: ", (e) => {
                arr.unshift(e);
                menu();
            });
        }

        else if (c == 4) {
            arr.pop();
            menu();
        }

        else if (c == 5) {
            arr.shift();
            menu();
        }

        else if (c == 6) {
            rl.question(
                "Enter: index deleteCount elements(optional): ",
                (input) => {
                    let [index, del, ...items] = input.split(" ");
                    arr.splice(Number(index), Number(del), ...items);
                    menu();
                }
            );
        }

        else if (c == 7) {
            rl.question("Enter flat depth (1 / 2 / 3): ", (d) => {
                arr = arr.flat(Number(d));
                menu();
            });
        }

        else if (c == 0) {
            console.log("Program Ended");
            rl.close();
        }

        else {
            console.log("Invalid choice");
            menu();
        }
    });
}

menu();
