import React from 'react'
import './SideBarVideo.css'

function SideBarVideo({title, author, hash, id, tips, date}) {
	return(
		<div className="sideBarVideo" onClick={(e) => {
			let videostring = `videos?link=${id.toString()}`
			window.location.href=videostring
		}}>
			<video src={`https://ipfs.infura.io/ipfs/${hash}`} alt=""/>
			<div className="sideBarVideo__text">
				<h3 className="sideBarVideo__title">{title}</h3>
				<p>{author > 10 ? author.substring(0,10) + "..." : author}</p>
				<p>{tips > 0 ? tips : 0} tips · {date}</p>
			</div>
		</div>
		);
}
export default SideBarVideo;