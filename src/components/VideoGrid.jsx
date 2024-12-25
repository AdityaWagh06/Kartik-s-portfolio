import React from 'react';

function VideoGrid({ videos }) {
  return (
    <div className="w-full h-full flex justify-center  space-x-4">
      {videos.map((video, index) => (
        <div key={index} className="relative w-full h-full">
          <video
            src={video}
            className="w-3/4 h-3/4 object-contain rounded-lg shadow-xl"
            controls
          />
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
