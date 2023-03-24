
const calculateTemp = () => {
    const input_number = document.getElementById('inputnumber').value;
    // console.log(input_number);

    const unitselected = document.getElementById('tempdiff');
    const unitvalue = tempdiff.options[unitselected.selectedIndex].value;
    console.log(unitvalue);
     
    const CelToFah = (cel) => {
        let Frenheit = Math.round((cel* 9/5) + 32);
        return Frenheit;
    }
    const FahToCel = (feh) => {
        let celcious = Math.round(  (feh - 32)/1.8 );
        return celcious;
    }
  
      
    var result;

    if( unitvalue == 'Celcioius' ) {
        result = CelToFah(input_number);
        document.getElementById('resultcontainer').innerHTML = `= to ${result} Farenheit`
    }
    else {
        result = FahToCel(input_number);
        document.getElementById('resultcontainer').innerHTML = `=  to ${result} celcious`
    }

}