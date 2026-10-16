
const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

function runCommand() {
  if (!terminal || !input) return;

  const command = input.value.trim();
  if (!command) return;

  terminal.textContent += `\nKGT > ${command}\n`;

  const responses = {
    help: "Available: help, scan, radar, status, clear",
    scan: "SIMULATION ONLY: checking demo indicators...",
    radar: "Radar simulation activated.",
    status: "KGT Cyber Defense: systems operational (demo).",
    clear: ""
  };

  const key = command.toLowerCase();

  if (key === "clear") {
    terminal.textContent = "";
  } else {
    terminal.textContent +=
      (responses[key] || "Unknown command. Type help.") + "\n";
  }

  input.value = "";
}

if (input) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") runCommand();
  });
}

window.kgtRunCommand = runCommand;

console.log("KGT Cyber Defense demo loaded.");
    
