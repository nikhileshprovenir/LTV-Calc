<script type="text/javascript">

function LTVCalc() 
{ 
        num1 = document.getElementById("LoanAmt").value;
        num2 = document.getElementById("AppraisedValue").value;
document.getElementById("result").value = ((num1 * 100) / num2).toFixed(2);
}

</script>
