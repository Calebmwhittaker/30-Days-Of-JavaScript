//9.
for (let i = 2; i <= 100; i++) {
  if (i % 1 == 0 && i / i == 1) {
    for (let j = i; j <= i + 1; j++) {
      if (!(i % j == 0)) {
        console.log(i);
      } else {
        console.log("Didn't work");
      }
    }
  } else {
    continue;
  }
}
