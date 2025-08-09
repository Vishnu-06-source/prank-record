<img width="3188" height="1202" alt="frame (3)" src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" />


# PRANK RECORD 🎯


## Basic Details
### Team Name: ULTRA


### Team Members
- Team Lead: VISHNU S ASHI - Government Engineering College Kozhikode
- Member 2: AHAMMAD BILAL V N - Government Engineering College Kozhikode

### Project Description
This project is a fun, prank-style web application that mimics a voice listening and processing tool but instead plays random preloaded audio clips to amuse or prank the user. The interface features a polished, visually stunning design with an animated gradient background and glassmorphic UI elements for a futuristic, professional look.

Users interact with a single button labeled "Start Listening" which activates the microphone and displays a lively, animated volume meter to simulate real-time listening. When the user presses the button again to stop listening, the app simulates processing with a brief delay and then randomly plays one of four preloaded prank audio clips (such as dog barks or funny sounds).

If audio is playing and the user presses the button to start listening again, the audio stops immediately, and the mic reactivates, allowing seamless toggling between listening and playback states.

The project’s responsive design ensures usability across devices, and the neon glowing button, animated status text with dynamic dots, and color-rich animated backgrounds all contribute to an engaging, immersive user experience.

This project demonstrates proficient use of modern web technologies including the Web Audio API for live audio handling, multimedia playback control, and advanced CSS for stunning visuals and animations. It combines technical skills with creative UX to deliver a memorable and entertaining web application.

### The Problem (that doesn't exist)
In an age of rapid technological advancement, people are constantly seeking cutting‑edge tools to analyze speech patterns, understand voices, and provide instant feedback. Many believe they need powerful “listening” tools to assess the quality of their voice, improve public speaking, or even detect subtle vocal cues for communication skills.

However…
nobody actually asked for a browser‑based, real‑time voice analyzer for casual self‑introductions — and certainly not one that responds by playing random unrelated sounds.

But here we are, boldly addressing this non‑existent problem. This “listening tool” claims to capture and process your speech, but instead, it rewards (or confuses) you with a surprise: a completely random prank audio.

It’s a solution in search of a problem, and that’s the fun — you think you’re about to get some deep analysis of your voice… but the only response is a random bark, sound effect, or comedic clip, leaving you both puzzled and amused.

### The Solution (that nobody asked for)
In response to the imaginary demand for a high-tech voice analysis tool, we proudly present a solution that absolutely no one requested — a prank listening app that playfully mocks the seriousness of voice diagnostics.

Instead of complex algorithms or speech insights, this app turns the tables by capturing your voice… and then responding with an unpredictable, random audio clip ranging from dog barks to silly sounds. It embraces chaos and surprises rather than providing clarity, proving that sometimes the best solution is one that just makes you smile (or laugh).

With an immersive and futuristic interface, complete with a glowing button, animated listening indicators, and smooth transitions, the app creates the illusion of profound audio processing — but delivers harmless fun and surprise instead.

It’s a reminder that technology doesn’t always have to be serious or functional to be delightful. Sometimes, the best innovation is the ability to surprise, entertain, and break the mundane, giving users a moment of unexpected joy.

## Technical Details
### Technologies/Components Used
For Software:

Languages used:
HTML5 (for structure)
CSS3 (for styling and animations)
JavaScript (for logic, audio handling, and interaction)

Frameworks used: None (vanilla web technologies used for simplicity and universal compatibility)

Libraries used: None (pure Web Audio API and standard web APIs)

Tools used:
Web Audio API (for microphone access and audio playback control)
Modern browsers supporting MediaDevices API and AudioContext (e.g., Chrome, Firefox, Edge)

For Hardware:
List main components:

Microphone (built-in or external) for user audio input
Computer or device capable of running modern browsers and accessing mic

List specifications:
Any modern device with a microphone and internet browser supporting Web Audio API

List tools required:
Access to a device with microphone permission enabled
Web server or local environment (live server) to serve the HTML, CSS, JS, and audio files

### Implementation
For Software:
Installation and Setup Steps
Ensure you have the following project structure:
/project-root
  ├── index.html      (main webpage)
  ├── style.css       (complex, animated styling)
  ├── script.js       (JavaScript for prank logic)
  ├── audio1.mp3      (prank audio file 1)
  ├── audio2.mp3      (prank audio file 2)
  ├── audio3.mp3      (prank audio file 3)
  └── audio4.mp3      (prank audio file 4)
Place your chosen prank audio clips named exactly as above in the same folder.

To serve and test the app locally, use a live server environment like the VS Code Live Server extension or run a local HTTP server:
# If you have Python installed, you can quickly serve files with:
python3 -m http.server 8000

# Then open in browser:
http://localhost:8000

Open your browser (Chrome recommended for best Web Audio support) and navigate to the served page.

Click the Start Listening button. The app will request microphone access and simulate live listening volume in the UI.

Press the button again to stop listening; it will then wait 3 seconds before playing a randomly selected prank audio clip.

While a prank audio is playing, pressing Start Listening again will immediately stop playback and restart the mic listening.

# Installation

# Run
[commands]

### Project Documentation
For Software:

# Screenshots (Add at least 3)
+
website interface
<img width="1920" height="1080" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/d90c5c97-b455-4211-98b7-c8b04289d219" />

working
<img width="1920" height="1080" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/6c9fcca8-c141-49fe-bdf6-b157fa70efe7" />

<img width="1920" height="1080" alt="Screenshot (10)" src="https://github.com/user-attachments/assets/c7921bbe-76b1-4979-b701-13c956c0cef8" />

### Project Demo
# Video
Working of the project
https://github.com/user-attachments/assets/eca8d71d-1c39-4a9f-b218-da1567a238ca

