import { useRef, useState, useEffect } from "react";
function CameraRef() {
  //we need a reference to a video element
  const videoRef = useRef(null);
  //we will capture an image from the webcam and store it in state
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    // Get access to the camera
    //ask the user for permission to access the camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        //getUserMedia() method returns a promise that resolves to a MediaStream object
        .getUserMedia({ video: true })
        .then((stream) => {
          //set the srcObject property of the video element to the stream object
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err);
        });
    }
  }, []);
  //function that runs when the user clicks the capture image button
  const captureImage = () => {
    //check that the video element is not null
    if (videoRef.current) {
      //create a canvas element and draw the video frame on it
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setCapturedImage(canvas.toDataURL("image/png"));
    }
  };

  return (
    <div>
      <h1>Camera Feed</h1>
      <video ref={videoRef} style={{ width: "100%" }}></video>
      <button onClick={captureImage}>Capture Image</button>
      {capturedImage && (
        <div>
          <h2>Captured Image</h2>
          <img
            src={capturedImage}
            alt="Captured from camera"
            style={{ width: "100%" }}
          />
        </div>
      )}
    </div>
  );
}

export default CameraRef;
