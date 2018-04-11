import React from 'react'

const Photo = (obj) => {

	console.log(obj);

	return (
		<div>
			<img src= {obj.nurl} 
				alt="Smiley face"
				onClick={obj.reexp} 
				height="200" width="200"/>
		</div>
	);
};

export default Photo;