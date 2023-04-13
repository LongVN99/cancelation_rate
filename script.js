function predict() {
  // Get input values
  const bookingConfirm = parseFloat(
    document.getElementById("booking_confirm").value
  );
  const bookingCancel = parseFloat(
    document.getElementById("booking_cancel").value
  );

  // Validate input values
  if (isNaN(bookingConfirm) || isNaN(bookingCancel)) {
    alert("Please enter valid numeric values.");
    return;
  }

  // Calculate cancellation rate
  const totalBookings = bookingConfirm + bookingCancel;
  const cancelationRate = bookingCancel / totalBookings;
  const prediction = (cancelationRate * 100).toFixed(2) + "%";

  // Display prediction result
  document.getElementById("prediction").textContent = prediction;
}
