"use strict";

// KGT Cyber Defense — interactive demo
document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  // Radar animation
  const radar = $(".radar");
  if (radar) radar.classList.add("radar-active");

  // Animate counters and visual meters
  $$(".counter").forEach((element) => {
    const target = Number(element.dataset.target || 100);
    element.textContent = String(target);
  });

  $$(".progress-bar").forEach((bar) => {
    const value = Math.max(
      0,
      Math.min(100, Number(bar.dataset.value || 65))
    );
    bar.style.width = value + "%";
  });

  // Demo terminal
  const terminal = $("#terminal");
  const commandInput = $("#commandInput");
  const commandButton = $("#runCommand");

  function runCommand() {
    if (!terminal || !commandInput) return;

    const command = commandInput.value.trim();
    if (!command) return;

    const line = document.createElement("div");
    line.textContent = "KGT > " + command;
    terminal.appendChild(line);

    const output = document.createElement("div");
    const responses = {
      help: "Commands: help, scan, radar, status, clear",
      scan: "Demo scan complete. No real network was scanned.",
      radar: "Radar simulation is active.",
      status: "KGT Cyber Defense demo is running.",
      clear: ""
    };

    const key = command.toLowerCase();

    if (key === "clear") {
      terminal.textContent = "";
    } else {
      output.textContent = responses[key] ||
        "Unknown command. Type help.";
      terminal.appendChild(output);
    }

    terminal.scrollTop = terminal.scrollHeight;
    commandInput.value = "";
  }

  if (commandButton) {
    commandButton.addEventListener("click", runCommand);
  }

  if (commandInput) {
    commandInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") runCommand();
    });
  }

  // Password strength checker — local only
  const passwordInput = $("#passwordInput");
  const passwordResult = $("#passwordResult");
  const passwordBar = $("#passwordBar");

  function checkPassword() {
    if (!passwordInput) return;

    const value = passwordInput.value;
    let score = 0;

    if (value.length >= 8) score++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[^a-zA-Z0-9]/.test(value)) score++;

    const labels = [
      "Very weak",
      "Weak",
      "Medium",
      "Strong",
      "Very strong"
    ];

    if (passwordResult) {
      passwordResult.textContent = value
        ? labels[score]
        : "Enter a sample password";
    }

    if (passwordBar) {
      passwordBar.style.width = (score * 25) + "%";
      passwordBar.setAttribute("aria-valuenow", String(score * 25));
    }
  }

  if (passwordInput) {
    passwordInput.addEventListener("input", checkPassword);
  }

  // Demo buttons
  $$("[data-demo-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.demoAction;
      const result = $("#" + button.dataset.result);

      if (result) {
        result.textContent = {
          scan: "Simulation complete — no real scan performed.",
          satellite: "Satellite view is simulated.",
          sim: "SIM status is simulated; no device is tracked.",
          audio: "Audio visualization demo; no microphone is used.",
          website: "Website test simulation only; no external site was changed."
        }[action] || "Demo action completed.";
      }
    });
  });

  // Navigation links
  $$("[data-scroll]").forEach((link) => {
    link.addEventListener("click", () => {
      const target = $("#" + link.dataset.scroll);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  console.log("KGT Cyber Defense demo initialized.");
});
    
