import React from "react";
import "./SearchBar.css";
const youTubeImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png'
  
class SearchBar extends React.Component{
  state={term:""};

  onInputChange=(event)=>{
    this.setState({term:event.target.value});
  };

  onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render(){
    return(
      <div className="search-bar ui segment">
        <div className="item">
          <div className="ui small image">

        <img  width="100%" src={youTubeImg} alt="youTube logo"/>
          </div>
          <h1 className="middle aligned content">
            Video Search 
          </h1>       
        </div>
      
        <div className="content">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
          <input type="text"
           value={this.state.term}
          onChange={this.onInputChange}
          />
          </div>
        </form>
        </div>
      </div>
      );    
  }
};
 
export default SearchBar;
