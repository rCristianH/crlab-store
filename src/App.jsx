function App() {
  return (
    <>
      <div className="bg-red-100">Hello World, little friend</div>
    </>
  );
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js').then(
      function (registration) {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope,
        );
      },
      function (err) {
        console.log('ServiceWorker registration failed: ', err);
      },
    );
  });
}

export default App;
