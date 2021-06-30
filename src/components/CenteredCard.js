import "./styles.css";

function CenteredCard({ children }) {
  return (
    <div className="pai">
      <span>{children}</span>
    </div>
  );
}

export default CenteredCard;
