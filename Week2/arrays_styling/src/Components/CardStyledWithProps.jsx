function CardStyledWithProps(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: props.backgroundColor,
          color: props.color,
          //If a border radius is passed use it
          //if not border radius is passed used 20 px
          //TorF ? ValueIfTrue : ValueIfFalse
          borderRadius: props.borderRadius ? props.borderRadius : "20px",
        }}
        className="card"
      >
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

export default CardStyledWithProps;
