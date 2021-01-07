import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import Countrypicker from './components/Countrypicker/Countrypicker';

import {Cards, Chart, Countrypicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api'
// dont need to specify the index files because it immediately goes to search
//for the index file 
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount (){
        const fetchedData = await fetchData();
        
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
        //fetch the data 
        // set the state
    }




    render(){

        const { data, country } = this.state;
        return(
            // this allows for you to use {} instead of className = "container" for styling 
            // using module.css makes it easier to refrain from using same styling names
            <div className={styles.container}>
                <Cards data= {data}/>
                <Countrypicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country= {country}/>

            </div>
        )
    }


}

export default App;