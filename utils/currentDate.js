function currentDate(){
     
    let date = new Date()

    let day = String(date.getDate()).padStart(2, '0')
    let month = String(date.getMonth() + 1).padStart(2, '0')
    let year = date.getFullYear()
    // return `${day}/${month}/${year}`
    return new Date(year, month-1, day)
}

module.exports = {
    currentDate
}