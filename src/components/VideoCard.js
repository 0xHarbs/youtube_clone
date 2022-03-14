import React from 'react'
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';

function VideoCard({ hash, image, title, channel, id, tips, date, channelImage}) {
	return(
		<div className="videoCard" onClick={(e) => {
			let videostring = `videos?link=${id.toString()}`
			window.location.href=videostring
		}}>
			<video className="videoCard__thumbnail" src={`https://ipfs.infura.io/ipfs/${hash}`} alt="" />
			<div className="videoCard__info">
				<Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
				<div className="videoCard__text">
					<h4>{title}</h4>
					<p>{channel.length > 10 ? channel.substring(0,10) + "..." : channel}</p>
					<p>
					{tips > 0 ? tips : 0} tips · {date}
					</p>
				</div>
			</div>
		</div>
		)
}
export default VideoCard;