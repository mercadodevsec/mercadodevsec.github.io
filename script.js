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
            '  skills          IT knowledge areas',
            '  certifications  CompTIA certifications',
            '  interests       Current areas of interest',
            '  contact         Email address',
            '  clear           Clear the terminal'
        ],
        whoami: [
            'John Micah Mercado',
            'Information Technology alumnus focused on IT and cybersecurity.'
        ],
        education: [
            'Information Technology · University of North Florida',
            'GPA: 3.96'
        ],
        skills: [
            'IT support: troubleshooting, hardware, and operating system fundamentals.',
            'Networking: network fundamentals, connectivity, and infrastructure.',
            'Server systems: server hardware, administration concepts, and virtualization.',
            'Security: threat awareness, access control, and risk fundamentals.'
        ],
        certs: [
<<<<<<< HEAD
            'CompTIA A+ · Network+ · Security+ · Server+ · CySA+ '
=======
            'CompTIA A+ · Network+ · Server+ · Security+ · CySA+'
>>>>>>> dd449be08ffa1fbba30a0e86b52c47d87394380b
        ],
        interests: [
            'Cybersecurity',
            'Networks and infrastructure',
            'IT support and systems'
        ],
        contact: [
            'Email: mikkomercado97@gmail.com'
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
