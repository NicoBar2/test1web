const form = document.getElementById('reservation-form');
  const nameInput = document.getElementById('name');
  const fromDateInput = document.getElementById('from-date');
  const toDateInput = document.getElementById('to-date');
  const numPeopleInput = document.getElementById('num-people');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = nameInput.value;
    const fromDate = new Date(fromDateInput.value);
    const toDate = new Date(toDateInput.value);
    const numPeople = parseInt(numPeopleInput.value);

    const currentDate = new Date();
    const currentDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), 0);

    const differenceInDays = Math.ceil((fromDate - currentDateTime) / (1000 * 60 * 60 * 24));
    const reservationDuration = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24));

    if (differenceInDays < 1) {
      alert("La fecha de inicio de la reserva debe ser al menos un día después de la fecha actual. Por favor, elige una fecha válida.");
      return;
    }

    if (numPeople < 1) {
      alert("El número de personas debe ser al menos 1. Por favor, indica el número de personas para la reserva.");
      return;
    }

    let hoursRemaining = 0;
    let minutesRemaining = 0;

    if (differenceInDays === 1) {
      const nextDay1PM = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate(), 13, 0, 0);
      const differenceInMinutes = Math.floor((nextDay1PM - currentDateTime) / (1000 * 60));
      hoursRemaining = Math.floor(differenceInMinutes / 60);
      minutesRemaining = differenceInMinutes % 60;
    }

    alert(`Hola ${name}, tu reserva comienza en ${differenceInDays} día${differenceInDays === 1 ? '' : 's'} y tiene una duración de ${reservationDuration} día${reservationDuration === 1 ? '' : 's'}. Te quedarán ${differenceInDays + reservationDuration} día${(differenceInDays + reservationDuration) === 1 ? '' : 's'} en total. Número de personas: ${numPeople}. Faltan ${hoursRemaining} hora${hoursRemaining === 1 ? '' : 's'} y ${minutesRemaining} minuto${minutesRemaining === 1 ? '' : 's'} para tu reserva.`);
  });

  var today = new Date().toISOString().split("T")[0];

  document.getElementById("from-date").setAttribute("min", today);
  document.getElementById("to-date").setAttribute("min", today);
