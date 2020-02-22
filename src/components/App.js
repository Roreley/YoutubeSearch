import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Github from "./Github";

class App extends React.Component{
  state={videos:[],selectedVideo:null};

  componentDidMount(){
    this.onTermSubmit("Bulgarian language");
  }

  onTermSubmit= async term=>{
    const response=await youtube.get("/search",{
      params:{
        q:term
      }
    })
    this.setState({videos:response.data.items,
    selectedVideo:response.data.items[0]
  })
  }

  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video});
  }
  buttonClickHandler=url=>{
    window.open(url,"_blank")
  }

  render(){
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
          <div className=" eleven wide column">

        <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="five wide column">
        <VideoList onVideoSelect={this.onVideoSelect}videos={this.state.videos}/>

          </div>
          </div>

        </div>
        <Github buttonClickHandler={this.buttonClickHandler}/>
      </div>  
    )
  }
};
 
export default App;