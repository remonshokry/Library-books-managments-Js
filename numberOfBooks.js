const getNumberOfBooks = function () {
  const numberInput = document.querySelector(".number-input");
  document.querySelector(".number-of-books").style.display = "flex";
  const okButton = document.querySelector(".ok-button");

  okButton.addEventListener("click", () => {
    if (validateNumberOnly(numberInput.value, numberInput)) {
      numberOfBooks = parseInt(validateNumberOnly(numberInput.value, numberInput));
      console.log(numberOfBooks);
      document.querySelector(".number-of-books").style.display = "none";

        scanBookInfo();
    }
  });
};
