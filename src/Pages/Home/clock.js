// The <canvas /> DOM element, set after page load.
let _canvas;

// The last frame time, used to calculate delta time (dt).
let _lastFrameTime;

// A flag to indicate if the init() function has been called.
let _hasInited = false;

// The render loop. This is where all the magic happens.
const loop = (time) => {
  if (!_lastFrameTime) {
    _lastFrameTime = time;
  }

  // Calculate delta time (dt) and update the last frame time.
  const dt = time - _lastFrameTime;
  _lastFrameTime = time;

  // Resize the canvas to fill the screen.
  if (_canvas) {
    _canvas.width = _canvas.clientWidth
    _canvas.height = _canvas.clientHeight;
  }

  // Call the init() function once and only once.
  if (!_hasInited) {
    if (window.init) {
      _hasInited = true;
      
      window.init(_canvas);
    }
  }

  // Call the loop() function every frame.
  if (window.loop) {
    window.loop(dt, _canvas);
  }

  window.requestAnimationFrame(loop);
};

// Adds a script tag to the DOM with our solution.
const attachScript = () => {
  const url = `clocksol.js`;
  const scriptTag = document.createElement('script');
  scriptTag.src = url;
  document.head.appendChild(scriptTag);
  document.title = `Assignment Solution`;
};

// Add a listener to the global window object for the page load.
// See: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)
window.onload = () => {
  // get the <canvas /> DOM element
  _canvas = document.getElementById('canvas');

  // attach the solution script
  attachScript();

  // start render loop
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  window.requestAnimationFrame(loop);
};
export default attachScript;
