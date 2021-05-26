import React, { Component } from 'react'
import '../styles/App.css';
import Searchbar from './Searchbar';
import Videodetails from './Videodetails';
import Videolist from './Videolist';



export default class App extends Component {

	search;
	url;
	
	constructor(){
		super();
		this.state = {
			searchInput : '',
			videos:[],
			selectedVideo :''
		}
	}

	//  BASE_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${rocket}&type=video&key=AIzaSyCONiWhX6PvYuffGYHNIGXFmNa6VsZa3ss"

	onSearchChange = (e) => {
		this.setState({searchInput:e.target.value})
	}

	onSearchClick = () => {
		this.search = this.state.searchInput;
		console.log(this.search)
		this.url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.search}&type=video&key=AIzaSyCONiWhX6PvYuffGYHNIGXFmNa6VsZa3ss`
		this.fetchApi();
	}

	fetchApi = async(i) => {
		const response = await fetch(this.url);
		const data = await response.json();
		console.log(data.items);
		// console.log(data.items[i])
		this.setState({videos:data.items})
	}

	handleVideoSelect = (video) => {
		this.setState({selectedVideo:video})
	}

	render() {
		return (
			<div>

				<div >
					<Searchbar searchChange={this.onSearchChange} searchClick={this.onSearchClick}/>
				</div>
				<div className="ui-video">
					<div>
						<Videodetails video={this.state.selectedVideo}/>
					</div>
					<div>
						<Videolist videos={this.state.videos} handleVideoSelect={this.handleVideoSelect}/>
					</div>
				</div>
			</div>
			
		)
	}
}

