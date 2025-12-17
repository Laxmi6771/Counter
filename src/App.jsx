import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h1>Reusable Message Cards</h1>

      <MessageCard
        title="Welcome"
        message="Welcome to the React props example."
      />

      <MessageCard
        title="Reminder"
        message="Don't forget to complete your assignments."
      />

      <MessageCard
        title="Success"
        message="You have successfully learned props in React!"
      />

      <MessageCard
        title="Tip"
        message="Reusable components save time and reduce code duplication."
      />
    </div>
  );
}

export default App;

