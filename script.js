const terminalForm = document.querySelector('#terminal-form');
const terminalInput = document.querySelector('#terminal-input');
const terminalOutput = document.querySelector('#terminal-output');

if (terminalForm && terminalInput && terminalOutput) {
    const commandHistory = [];
    let historyIndex = 0;

    const commandResponses = {
        help: [
            'Available commands:',
            '  whoami          A quick introduction',
            '  education       Education and GPA',
            '  skills          IT and cybersecurity knowledge areas',
            '  certs           CompTIA certifications',
            '  interests       Current areas of interest',
            '  contact         Email and LinkedIn',
            '  clear           Clear the terminal'
        ],
        whoami: [
            'John Micah Mercado',
            'IT professional and U.S. Army veteran focused on cybersecurity and security operations (SOC).'
        ],
        education: [
            'B.S. Information Technology · University of North Florida (2026)',
            'GPA: 3.96'
        ],
        skills: [
            'Security: network traffic analysis (Wireshark), vulnerability assessment, intrusion detection, digital forensics, session security, and SQL injection remediation.',
            'Systems: Linux administration, Bash scripting, server administration, and cloud computing.',
            'Networking: TCP/IP, LAN, packet analysis, and network troubleshooting.',
            'Development: Python, Java, Kotlin, C#, JavaScript, TypeScript, SQL, React, Express, and Git.',
            'IT support: systematic troubleshooting, root-cause analysis, and technical documentation.'
        ],
        certs: [
            'CompTIA A+ · Network+ · Server+ · Security+ · Linux+ · CySA+'
        ],
        interests: [
            'Cybersecurity and security operations (SOC)',
            'Network analysis and defense',
            'Linux, systems, and IT support'
        ],
        contact: [
            'Email: mikkomercado97@gmail.com',
            'LinkedIn: linkedin.com/in/john-micah-mercado-03611624a'
        ]
    };

    function appendEntry(command, results) {
        const entry = document.createElement('div');
        entry.className = 'terminal-entry';

        const commandLine = document.createElement('p');
        commandLine.className = 'terminal-entry-command';

        const prompt = document.createElement('span');
        prompt.className = 'terminal-prompt';
        prompt.textContent = 'john@portfolio ~ $ ';

        const typedCommand = document.createElement('span');
        typedCommand.className = 'terminal-command';
        typedCommand.textContent = command;
        commandLine.append(prompt, typedCommand);
        entry.append(commandLine);

        results.forEach((result) => {
            const line = document.createElement('p');
            line.className = 'terminal-entry-result';
            if (command === 'certs' || command === 'certifications' || command === 'certifications --list') {
                line.classList.add('terminal-certifications');
            }
            line.textContent = result;
            entry.append(line);
        });

        terminalOutput.append(entry);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    terminalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const command = terminalInput.value.trim().toLowerCase().replace(/\s+/g, ' ');
        if (!command) return;

        commandHistory.push(command);
        historyIndex = commandHistory.length;
        terminalInput.value = '';

        if (command === 'clear' || command === 'cls') {
            terminalOutput.replaceChildren();
            terminalInput.focus();
            return;
        }

        const responseKey = command === 'about' ? 'whoami' :
            command === 'certifications' || command === 'certifications --list' ? 'certs' : command;
        const results = Object.prototype.hasOwnProperty.call(commandResponses, responseKey)
            ? commandResponses[responseKey]
            : [`Command not found: ${command}. Type "help" to see available commands.`];
        appendEntry(command, results);
        terminalInput.focus();
    });

    terminalInput.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (historyIndex > 0) {
                historyIndex -= 1;
                terminalInput.value = commandHistory[historyIndex];
            }
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex += 1;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
        }
    });
}
