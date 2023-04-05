function ParentComponent() {
    return (
      <div>
        <h1>This is the parent component</h1>
        <ChildComponent />
      </div>
    );
  }
  
  function ChildComponent() {
    return <p>This is the child component</p>;
  }
  