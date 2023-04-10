function driver(data) {
    const [forename, middleName, surname, dob, gender] = data;
  const dateOfBirth = new Date(dob);

   const surnamePart = surname.slice(0, 5).padEnd(5, '9').toUpperCase();
  const decadeDigit = String(dateOfBirth.getFullYear()).charAt(2);
  const monthPart = String(dateOfBirth.getMonth() + 1 + (gender.toUpperCase() === 'F' ? 50 : 0)).padStart(2, '0');
  const datePart = String(dateOfBirth.getDate()).padStart(2, '0');
  const yearDigit = String(dateOfBirth.getFullYear()).slice(-1);
  const initialsPart = (forename.charAt(0) + (middleName ? middleName.charAt(0) : '9')).toUpperCase();
  const arbitraryDigit = '9';
  const checkDigits = 'AA';

  const licenseNumber = `${surnamePart}${decadeDigit}${monthPart}${datePart}${yearDigit}${initialsPart}${arbitraryDigit}${checkDigits}`;

  return licenseNumber;
}



module.exports = driver;

