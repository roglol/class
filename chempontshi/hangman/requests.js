const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry =  async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)
        if(response.status === 200) {
            const data = await response.json()
            return data.find((country) => country.alpha2Code === countryCode)
        } else {
            throw new Error('Unable to fech country')
    }
}