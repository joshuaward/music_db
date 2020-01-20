import React, { Component } from 'react';
import axios from 'axios';

// Components
import AlbumList from './albumList';

const REQUEST_URL = 'http://localhost:3001/artists';

class Artist extends Component {
	state = {
		artist: '',
	}

	componentDidMount() {
		axios.get(`${REQUEST_URL}/${this.props.match.params.artistid}`)
			.then(response => {
				this.setState({
					artist: response.data
				})
			})
	}

	render() {
		const artist = this.state.artist;
		return(
			<div className="artist_bio">
				<div className="avatar">
					<span style={{background: `url('/images/covers/${artist.cover}.jpg') no-repeat`}}></span>
				</div>
				<div className="bio">
					<h3>{artist.name}</h3>
					<div className="bio_text">
						{artist.bio}
					</div>
				</div>
				<AlbumList albumList={artist.albums} />
			</div>
		)
	}
}

export default Artist;