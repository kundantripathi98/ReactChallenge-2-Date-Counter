let Text = ({ count, currentDate }) => {
  if (count === 0) {
    return <h1>Today is {currentDate.toDateString()}</h1>;
  } else if (count > 0) {
    return (
      <h1>
        {count} {count === 1 ? "day" : "days"} from today is{" "}
        {currentDate.toDateString()}
      </h1>
    );
  } else if (count < 0) {
    return (
      <h1>
        {count * -1} {count === -1 ? "day" : "days"} ago was{" "}
        {currentDate.toDateString()}
      </h1>
    );
  }
};
export default Text;
