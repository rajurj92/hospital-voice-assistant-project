export default function VoiceAssistant() {
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.start();

    recognition.onresult = (event) => {
      alert(event.results[0][0].transcript);
    };
  };

  return <button className="btn-primary" onClick={startListening}>🎤 Ask</button>;
}
