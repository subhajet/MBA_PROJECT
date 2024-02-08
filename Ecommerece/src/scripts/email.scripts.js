

const registerUser = () =>{

}

const bookingSuccess = (user, booking ) => {
    return {
        subject: `Congratulations ${user.name} ! Your booking is confirmed`,
        html:`
        <div>
        <h3> Hello  ${user.name} </h3>
        <br/>
        Your booking is confirmed, Here are your details

        <h5>Booking Id : ${booking._id}</h5>
        <hr/>
        <h5/>heater Id : ${booking.theaterId}</h5>
        <hr/>
        <h5/>ovieId Id : ${booking.movieId}</h5>
        <hr/>
        <h5>no of seats : ${booking.noOfSeats}</h5>
        <hr/>
        <h5>totalCost : ${booking.totalCost}</h5>
        `
    }
}

module.exports ={
    registerUser,
    bookingSuccess
}