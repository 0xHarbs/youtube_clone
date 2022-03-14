import React from 'react'
import './VideoSideBar.css'
import SideBarVideo from './SideBarVideo'

function VideoSideBar({videos}) {
	return(
		<div className="videoSideBar">
			{videos && videos.map((video, key) => (
				<SideBarVideo
				title={video.title}
				author={video.author}
				hash={video.hash}
				id={video.id}
				date={video.uploadDate}
				tips={video.tips}
				/>
			))}
		</div>
		);
}
export default VideoSideBar;