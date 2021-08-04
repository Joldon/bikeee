
import bikesData from './bikes.json'

const getModels = bikesData.map(a => a.Model) //extracts the Model value from a given array
const getAggregated = getModels.map(x => x.replaceAll('-', '').replace(/\s+/g, '').toLowerCase()) //standarzises/unifies various spellings of the same models

const countFrequency = getAggregated.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || 0) + 1
 }), {}); // calculates the frequency of occurrences of similar strings in a given array

  const PopularBikes = Object.keys(countFrequency).sort((a,b) => countFrequency[b]-countFrequency[a]) // sorts the frequency of occurrences in a descending order
  
export default PopularBikes


