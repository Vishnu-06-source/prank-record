const btn = document.getElementById('toggle-btn');
const statusEl = document.getElementById('status');

const audios = [
  document.getElementById('audio1'),
  document.getElementById('audio2'),
  document.getElementById('audio3'),
  document.getElementById('audio4')
];

let listening = false;
let audioPlaying = false;
let mediaStream = null;
let audioContext = null;
let source = null;
let analyser = null;
let dataArray = null;
let rafId;
let currentAudio = null;
let prankTimeout = null;

// Start mic and show fake volume
async function startListening() {
  // If audio is playing, stop it first
  if (audioPlaying && currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    audioPlaying = false;
    if (prankTimeout) {
      clearTimeout(prankTimeout);
      prankTimeout = null;
    }
  }

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    source = audioContext.createMediaStreamSource(mediaStream);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    dataArray = new Uint8Array(analyser.fftSize);
    source.connect(analyser);

    statusEl.textContent = "Status: Listening...";
    btn.textContent = "Stop Recording";
    listening = true;

    detectVolume();
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Microphone access denied!";
  }
}

// Stop mic and after 3s play prank audio
function stopListeningAndPlayPrank() {
  listening = false;
  btn.textContent = "Start Recording";
  statusEl.textContent = "Processing your input...";

  if (rafId) cancelAnimationFrame(rafId);
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
    mediaStream = null;
  }
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }

  // Wait 3s then play prank audio
  prankTimeout = setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * audios.length);
    currentAudio = audios[randomIndex];
    currentAudio.currentTime = 0;
    currentAudio.play().catch(e => console.error("Playback blocked:", e));

    statusEl.textContent = `🎵 Playing Audio ${randomIndex + 1}`;
    audioPlaying = true;
  }, 3000);
}

// Show fake mic volume
function detectVolume() {
  if (!listening) return;
  analyser.getByteTimeDomainData(dataArray);

  let sumSq = 0;
  for (let i = 0; i < dataArray.length; i++) {
    let value = (dataArray[i] - 128) / 128;
    sumSq += value * value;
  }
  let volume = Math.sqrt(sumSq / dataArray.length);
  statusEl.textContent = `Status: Listening... Volume: ${volume.toFixed(3)}`;

  rafId = requestAnimationFrame(detectVolume);
}

// Button click logic
btn.addEventListener('click', () => {
  if (!listening && !audioPlaying) {
    // Idle state → start listening
    startListening();
  } else if (listening) {
    // Was listening → stop listening and schedule prank
    stopListeningAndPlayPrank();
  } else if (audioPlaying) {
    // While prank audio is playing → stop and start listening
    startListening();
  }
});
