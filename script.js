
// == Facebook Ads Billing Calculator ==
// A simple JavaScript snippet to calculate the total amount from the Facebook Ads billing transaction page.
// Author: SEIF X DEBIAN
// GitHub: https://github.com/seif4d

function calculateFacebookAdsTotal() {
  // Select all the span elements within the third column of the grid which contain the amounts.
  const amountElements = document.querySelectorAll('td[role="gridcell"][aria-colindex="3"] span');

  if (amountElements.length === 0) {
    alert("😟 No transactions found!\nMake sure the transactions table is fully visible on the page before running the script.");
    return;
  }

  let total = 0;

  console.log(`✅ Found ${amountElements.length} transactions. Calculating total...`);

  amountElements.forEach(element => {
    const textValue = element.textContent;

    // Use a regular expression to extract only Arabic numerals and the Arabic decimal separator.
    // This effectively removes currency symbols, hidden characters (&rlm;), and spaces.
    const numberPart = textValue.replace(/[^٠-٩٫]/g, '');

    // Convert Arabic decimal separator to a standard period.
    let cleanedText = numberPart.replace(/٫/g, '.');
    // Convert Arabic-Indic numerals to Western Arabic numerals.
    cleanedText = cleanedText.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

    const amount = parseFloat(cleanedText);

    if (!isNaN(amount)) {
      total += amount;
    } else {
      console.error("❌ Failed to parse amount from:", textValue);
    }
  });

  // Display the final result in an alert box and in the console.
  const resultMessage = `🎉 Success! 🎉\n\n💰 Total Amount: ${total.toFixed(2)} SAR`;
  alert(resultMessage);
  console.log(`------------------------------`);
  console.log(`💰💰💰 Final Total: ${total.toFixed(2)} SAR`);
}

// Run the function
calculateFacebookAdsTotal();
