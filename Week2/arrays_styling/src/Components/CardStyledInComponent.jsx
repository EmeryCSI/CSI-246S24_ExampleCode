function CardStyledInComponent(props) {
  //You can write javascript here
  //I am going to create a style object
  const styleObject = {
    backgroundColor: "lightblue",
    padding: "15px",
    borderRadius: "20px",
  };

  return (
    <>
      {/* send the styleObject to the style prop */}
      <div style={styleObject} className="card">
        <h3 className="card-title">{props.userName}</h3>
        <div className="card-body">
          <p className="card-label">Email: </p>
          <p>{props.email}</p>
          <p className="card-label">Phone: </p>
          <p>{props.phone}</p>
          <p className="card-label">Address: </p>
          <p>{props.address}</p>
        </div>
      </div>
    </>
  );
}

export default CardStyledInComponent;
