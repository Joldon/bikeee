import React from 'react'
import PopularBikes from './PopularBikes'

const topThreeBikes = PopularBikes.slice(0, 3) // extracts first three elements from the array

const topFirstBike = topThreeBikes[0].toUpperCase()
const topSecondBike = topThreeBikes[1].toUpperCase()
const topThirdBike = topThreeBikes[2].toUpperCase() // disaggregates and assigns top three valuues to separate variables


export function BikeInfo() {

    return (
        <div>
          <h2>Bike info</h2>
          <div topFirstBike name={topFirstBike}><p>Top first bike is {topFirstBike}</p></div>
          <div topSecondBike name={topSecondBike}><p>Top second bike is {topSecondBike}</p></div>
          <div topThirdBike name={topThirdBike}><p>Top third bike is {topThirdBike}</p></div>
        </div>        
    )
}



