import React, { Component } from 'react';
import axios from 'axios';

// Components
import Banner from './banner';
import ArtistsList from './artistList';

const URL_ARTISTS = 'http://localhost:3001/artists';

class Home extends Component {
	state = {
		artists: '',
	}

	componentDidMount() {
		axios.get(URL_ARTISTS)
			.then(response => {
				this.setState({
					artists: response.data
				})
			})
	}

	render() {
		return(
			<React.Fragment>
				<Banner />
				<ArtistsList allArtists={this.state.artists} />
			</React.Fragment>
		)
	}
}

export default Home;