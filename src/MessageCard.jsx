function MessageCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      margin: "10px",
      borderRadius: "8px",
      width: "250px"
    }}>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default MessageCard;
