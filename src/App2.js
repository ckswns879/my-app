
function App2() {
  let list = [1,2,3];
  return (
  <>
    <div>{list[0]}</div>
    <div>{list.map((n) =><h1>{n}</h1>)}</div>
</>
);

}

export default App2;
