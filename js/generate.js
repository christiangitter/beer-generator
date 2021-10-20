//Das DOMContentLoaded-Event wird ausgelöst, wenn das initiale HTML-Dokument vollständig geladen und geparst ist
document.addEventListener('DOMContentLoaded', () => {
    //Hier werden die css bzw. html-klassen JS-Elemnten zugewiesen, damit diese innerhalb des Scriptes verwendet werden können
    const beerbutton = document.querySelector('.beer-button')
    const randombeer = document.querySelector('.random-beer')
    const beerdes = document.querySelector('.description')

    //die Funktion getBeer wird erstellt
    function getBeer(e) {
        e.preventDefault()
        
        //fetched die Daten von der URL und wird als json bzw. Array ausgegeben
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
           return response.json()
       })
       .then(data => {
           //hier werden die einzelnen Array-Elemnte der Variablen zur Verwendung zugewiesen
           const beername = data[0].name
           const beerdescription = data[0].description
           const {volume} = data[0]
           const volumeValue = volume.value
           const volumeUnit = volume.unit
           //Hier wird der Inhalt der JS-Variablen den oberen CSS bzw. HTML-Klassen zugewiesen
           randombeer.innerHTML = beername + ' ' + volumeValue + ' ' + volumeUnit
           beerdes.innerHTML = beerdescription
       })
    }
    //wenn der beerbutton geklickt wird, wird die Funktion getBeer ausgelöst
    beerbutton.addEventListener('click', getBeer)
  
})