import React ,{useState,useEffect}from 'react'
import { Container,Row, Card , Button} from 'react-bootstrap'
import './Home.css';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Home() {

 
  const [city, setCity] = useState('kerala');
  const [weatherData, setWeatherData] = useState(null);

  const APIKey = 'af879ab6c3e971f4cc3079feb0f6e74a'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

  const getData = () => {
    axios.get(url)
      .then(res => setWeatherData(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
    document.getElementById("weatherInput").focus();
  }, [])

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = () => {
    getData();
  }

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      getData();
    }
  };

  const name = weatherData ? weatherData.name : '';
  const country = weatherData ? weatherData.sys.country : '';
  const humidity = weatherData ? weatherData.main.humidity : '';
  const pressure = weatherData ? weatherData.main.pressure : '';
  const temp = weatherData ? weatherData.main.temp : '';
  const weather = weatherData ? weatherData.weather[0].description : '';
  const iconcode = weatherData ? weatherData.weather[0].icon : '#';

  const d = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
 

  useEffect(()=>{
    Aos.init({duration:2000})
  })
 
  
  return (
    <div>
        <Container fluid className="content">
          <Row  data-aos='fade-up' className='justify-content-center'>
        <input className='search' id="weatherInput" type="text" name="city" placeholder="Search your city..."
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
      <Button className='search-btn' onClick={handleSubmit} >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
      </Button>
     </Row>
      <Row   className='justify-content-center'>

  
      <Card data-aos='fade-up'  className='card'  style={{ width: '18rem',borderRadius:'15px'}}>
      <div class="card-body text-center">
           

            <p className="h2">
            {name}, {country}
            </p>

            <div style={{ color: 'darkgrey', fontSize: 18 }}>{days[d.getDay()]}, {month[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</div>
            <div className="row mt-4">
           
               
          <div style={{ fontSize: 50, fontWeight: 'bold' }}>{Math.round(temp)}' C</div>
                 
             <img style={{width:'100px',height:'100px',marginLeft:'70px'}} src={`http://openweathermap.org/img/w/${iconcode}.png`} alt="Weather icon" />

             <div style={{ textTransform: 'capitalize', marginBottom: 20 }}>{weather}</div>

                    <div>Humidity : {humidity}%</div>
                    <div>Pressure : {pressure} hPa</div>
                
              </div>
            </div>
          
           
        </Card>
        </Row>
        </Container>
      </div>
  
  );
};

export default Home