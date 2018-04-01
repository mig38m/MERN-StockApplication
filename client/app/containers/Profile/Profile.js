import React from 'react';
import StockInfo from '../../components/Profile/StcokInfo'

export default class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      results: []
    }
    this.fetchProfileStockInfo = this.fetchProfileStockInfo.bind(this)
  }
componentDidMount(){
this.fetchProfileStockInfo();
}
fetchProfileStockInfo(){
  fetch('/api/stocks/portfolio', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            isLoading: false,
            results: json.results
          })
        }else{
          this.setState((state) => ({isLoading: false, 
                                    error: json.message}))
        }
      });
}
  
  render(){
    const {
      isLoading,
      error,
      results
    } = this.state;

    if(isLoading){
      return(
        <div>
          <p>Loading....</p>
        </div>
      );
    } else if(error){
        return(
          <div style={{backgroundColor:'#610B21'}}>
            <p style={{color: '#FFF'}}>{error}</p>
          </div>
        );
    }
    return(
      <div>
        <p>Profile</p>
        {results.map((result, index) => <StockInfo key={index} data={result}/>)}
      </div>
    );
  }
}
