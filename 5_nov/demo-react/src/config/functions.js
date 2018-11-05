
const fetchData = (state) => {
    fetch(state.url)
    .then( data=>data.json())
    .then(data =>  this.setState({data}))
    .catch(err => err.message)
}