function calculatePayments() {
  var initial = $('#total').val();

  $('#84-mth-amnt').html('$' + interestCalculation(initial, 0.0799, 84));
  $('#60-mth-amnt').html('$' + interestCalculation(initial, 0.0699, 60));
  $('#36-mth-amnt').html('$' + interestCalculation(initial, 0.0599, 36));
  $('#24-mth-amnt').html('$' + easyCalculation(initial, 24));
  $('#18-mth-amnt').html('$' + easyCalculation(initial, 18));
  $('#12-mth-amnt').html('$' + easyCalculation(initial, 12));
  $('#6-mth-amnt').html('$' + easyCalculation(initial, 6));
}

function interestCalculation(starting_value, annual_percent, months) {
  var periodic_interest = annual_percent / 12;
  var value_interest_factor = Math.pow((1 + periodic_interest), months);
  var payment = periodic_interest * starting_value * (value_interest_factor / (value_interest_factor - 1));

  return payment.toFixed(2);
}

function easyCalculation(starting_value, payments) {
  return (starting_value / payments).toFixed(2);
}

$('#total').keyup(function(event) {
  if (event.keyCode === 13) {
    $('#calculate-btn').click();
  }
});