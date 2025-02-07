```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render
    console.log('Count:', count); // This will log 0, then 1, then 2, etc.
    return () => {
      // Cleanup function: runs before the next effect runs, and when the component unmounts
      console.log('Cleanup');
    };
  }, [count]); // Add count to the dependency array to avoid infinite loop

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```