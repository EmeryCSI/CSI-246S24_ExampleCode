//Data is passed to componenta via props
function Heading(props) {
  return (
    <>
      <h2>{props.headingText}</h2>
    </>
  );
}
export default Heading;
