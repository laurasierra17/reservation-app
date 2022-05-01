import React from "react"
import Header from "../../components/Header"
import Searchbar from "../../components/Searchbar"
import Axios from 'axios'
import './LandingPage.css'
import ResultsPage from "../ResultsPage/ResultsPage";

export default function LandingPage() {
    const [restaurantList, setRestaurantList] = React.useState([])
    const [chosenCuisine, setChosenCuisine] = React.useState(null)
    const [showList, setShowList] = React.useState(false)

    const cuisineTypes = []
    restaurantList.forEach(restaurant => {
        if (!cuisineTypes.includes(restaurant.cuisine)) cuisineTypes.push(restaurant.cuisine)
    })
    
    // fetch Restaurants information from the database
    React.useEffect(() => {
        Axios.get("http://localhost:3001/").then((response) => {
            setRestaurantList(response.data)
        })
    }, [])

    return (
        <>
            {showList === false
            ?
                <div className="container">
                    <Header />
                    <div className="landing--container">
                        <h3>Welcome to RevUp</h3>
                        <h4>Make that reservation at your dream restaurant, any day, any time</h4>

                        <div className="searchbar--row">
                            <Searchbar
                                cuisineTypes={cuisineTypes}
                                chosenCuisine={chosenCuisine}
                                setChosenCuisine={setChosenCuisine}
                            />
                            <button className="btn--search" onClick={() => {if (chosenCuisine != null) setShowList(true)}}>Search</button>
                        </div>

                        <div className="btn-group">
                            <button className="btn--nearme">Near me</button>
                            <button className="btn--popular">Popular</button>
                        </div>
                    </div>
                </div>
            :
                <div>
                    <ResultsPage cuisineTypes={cuisineTypes}
                        chosenCuisine={chosenCuisine}
                        setChosenCuisine={setChosenCuisine} restaurantList={restaurantList} />
                </div>
            }
        </>
    )
}