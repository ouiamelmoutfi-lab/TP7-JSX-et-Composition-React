
function withTimestamp(WrappedComponent) {
  return function EnhancedComponent(props) {
    const timestamp = new Date().toLocaleString();

    return (
      <div>
        <WrappedComponent {...props} />
        <p>Date et heure du rendu : {timestamp}</p>
      </div>
    );
  };
}

export default withTimestamp;
