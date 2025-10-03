    let input = prompt("Pick a number:"); // browser input
    const num = Number(input);

    if (!isNaN(num)) {
      console.log("Square is " + num * num);

      if (num < 10) console.log("Small");
      else if (num < 100) console.log("Medium");
      else console.log("Large");
    } else {
      console.log("That’s not a number!");
    }