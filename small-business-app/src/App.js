import Navigation from "./containers/navigation";

function App() {
  return (
    <Provider store={store}>
        <Navigation />
    </Provider>
  );
}

export default App;