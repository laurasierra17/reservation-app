import { Box, Button, Modal } from '@material-ui/core'
import DateTimePicker from 'react-datetime-picker'
import React from 'react'
import './ModalReservation.css'
import Axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: "0.5em",
    boxShadow: "0 10px 20px rgba(black, 0.2)",
    border: '2px solid #891204',
    // boxShadow: 24,
    p: 4,
  };

export default function ModalReservation({ restName }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [valueDate, setValueDate] = React.useState(new Date())

    const [reservationComplete, setReservationComplete] = React.useState(false)
    const [reservation, setReservation] = React.useState({
        name: "",
        email: "",
        number: "",
        restaurantname: restName,
        partysize: "1",
        datetime: valueDate
    })
    // const handleChange = (prop) => (event) => {
    //     setReservation({...reservation, [prop]: event.target.value})
    // }

    // const [reservationList, setReservationList] = React.useState([])
    const createReservation = (data) => {
        Axios.post('https://reservation-app-deploy.herokuapp.com/create', {
            name: data.name,
            email: data.email,
            number: data.number,
            restaurantname: reservation.restaurantname,
            partysize: data.partysize,
            datetime: reservation.datetime
        }).then(() => {
            console.log("success creating reservation")
            setReservationComplete(true)
        })
    }

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => createReservation(data)

    return (
        <div className='modalBackground'>
            <Button 
                variant="contained"
                onClick={handleOpen}>Make Reservation</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {!reservationComplete ?
                        <>
                            {/* <TextField label="Name" required variant='outlined' onChange={handleChange('name')}/>
                            <TextField label="Email" required variant='outlined' onChange={handleChange('email')}/>
                            <TextField label="Phone Number" required variant='outlined' onChange={handleChange('number')}/>
                            <TextField label="Party Size" required variant='outlined' onChange={handleChange('partysize')}/>
                            <DateTimePicker onChange={setValueDate} value={valueDate} />
                            <button onClick={createReservation} disable={() => !isFormValid()} >Create Reservation</button> */}
                            <form className='form--modal' onSubmit={handleSubmit(onSubmit)}>
                                <h2>Make a Reservation</h2>
                                <div className='field'>
                                    <label>Name:</label>
                                    <input className='text' {...register('name', { required: true })}/>
                                    {errors.name?.type === 'required' && "Name is required"}
                                </div>
                                
                                <div className='field'>
                                    <label>Email:</label>
                                    <input className='text' {...register('email', { required: true })}/>
                                    {errors.email?.type === 'required' && "Email is required"}
                                </div>

                                <div className='field'>
                                    <label>Phone Number:</label>
                                    <input className='text' {...register('number', { required: true })}/>
                                    {errors.number?.type === 'required' && "Number is required"}
                                </div>

                                <div className='field'>
                                    <label>Party Size:</label>
                                    <input className='text' {...register('partysize', { required: true })}/>
                                    {errors.partysize?.type === 'required' && "Partysize is required"}
                                </div>

                                <div className='field'>
                                    <label>Pick a day and time:</label>
                                    <DateTimePicker onChange={setValueDate} value={valueDate} />
                                </div>

                                <input className='button' type="submit"/>
                            </form>
                        </>
                    :
                        <>
                            <h2>Congratulations! Your reservation is set!</h2>
                            <Link to='/bookings'><Button variant="contained">View my bookings</Button></Link>
                        </>
                    }
                </Box>
            </Modal>
        </div>
    )
}