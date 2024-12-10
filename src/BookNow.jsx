import './BookNow.css';

function Booking() {
  const handleBookingSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const date = event.target.date.value;
    alert(`Booking confirmed for ${name} on ${date}`);
  };

  return (
    <div className="booking" id="booknow"> {/* Corrected the id here */}
      <h1>Book Your Stay</h1>
      <form onSubmit={handleBookingSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
        <label htmlFor="date">Check-in Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          required
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;
  