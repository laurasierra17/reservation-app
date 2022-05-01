import React from 'react'
import Header from '../../components/Header'
import ModalReservation from '../../components/ModalReservation'
import Restaurant from '../../components/Restaurant'
import Searchbar from '../../components/Searchbar'
import './ResultsPage.css'

export default function ResultsPage(props) {
    return (
        <div>
            <Header />
            <div className='results--container'>
                <div>
                    <Searchbar 
                        cuisineTypes={props.cuisineTypes}
                        chosenCuisine={props.chosenCuisine}
                        setChosenCuisine={props.setChosenCuisine} />
                </div>
                <div className='restaurants--container'>
                    {props.restaurantList.filter(rest => rest.cuisine === props.chosenCuisine).map((filteredRest, index) => {
                        return (
                            <div className='restaurant--card'>
                                <Restaurant key={filteredRest.name}
                                            name={filteredRest.name}
                                            address={filteredRest.address}
                                            cuisine={filteredRest.cuisine}
                                            rating={filteredRest.rating}
                                            price={filteredRest.price}/>
                                <ModalReservation restName={filteredRest.name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}