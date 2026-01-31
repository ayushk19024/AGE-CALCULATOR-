function calculate() {
  let dob = document.getElementById("dob").value;
  let dob2 = document.getElementById("dob2").value;

  if (!dob) {
    alert("Please enter Date of Birth");
    return;
  }

  let birthDate = new Date(dob);
  let today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  let daysLeft = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

  let output = `
    <p><b>Exact Age:</b> ${years} Years ${months} Months ${days} Days</p>
    <p><b>Total Days Lived:</b> ${totalDays}</p>
    <p><b>Next Birthday In:</b> ${daysLeft} Days</p>
  `;

  if (dob2) {
    let birthDate2 = new Date(dob2);
    let diffDays = Math.abs((birthDate - birthDate2) / (1000 * 60 * 60 * 24));
    let diffYears = Math.floor(diffDays / 365);
    output += `<p><b>Age Difference:</b> ${diffYears} Years</p>`;
  }

  document.getElementById("result").innerHTML = output;
}
