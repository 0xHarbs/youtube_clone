import React from 'react'
import Avatar from '@mui/material/Avatar';
import './WatchVideoCard.css';

function WatchVideoCard({ image, title, channel, tips, date, channelImage, currentHash, author}) {
	return(
		<div className="watchVideoCard">
			<video className="watchVideoCard__video" width="750" height="400" 
			src={`https://ipfs.infura.io/ipfs/${currentHash}`} controls>
			</video>
			<div className="watchVideoCard__info">
			<h3>{title}</h3>
				<div className="watchVideoCard__text">	
					<p>
					{tips > 0 ? tips : 0} tips · {date}
					</p>
				</div>
				<hr></hr>
				<div className="watchVideoCard__user">
					<Avatar />
					<p>{author > 10 ? author.substring(0,10) + "..." : author}</p>
					<div className="watchVideoCard__buttonContainer">
						<button className="watchVideoCard__tipButton">Tip</button>
					</div>
				</div>
			</div>
		</div>
		)
}
export default WatchVideoCard;