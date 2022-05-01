import React from 'react'
import Header from '../../components/Header'
import Axios from 'axios'
import './BookingsPage.css'

export default function BookingsPage() {
    const [bookingsList, setBookingsList] = React.useState([])

    React.useEffect(() => {
        Axios.get("https://reservation-app-deploy.herokuapp.com/create").then((response) => {
            setBookingsList(response.data)
        })
    }, [])

    return (
        <div>
            <Header />
            <div className='booking--container'>
                <h1>My Bookings</h1>
                {bookingsList?.map((booking, key) => {
                    return (
                        <div className='booking--card'>
                            <h3>{booking.restaurantname}</h3>
                            <h4>{booking.datetime}</h4>
                            <div className='booking--info'>
                                <h4>{booking.name}</h4>
                                <h5>{booking.partysize}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}