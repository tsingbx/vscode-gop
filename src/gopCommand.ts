'use strict';

import vscode = require('vscode');

export function runGopCommand(dir: string, command: string, args: string[]): boolean {
	if (command === 'run') {
		runGopTerminal(dir, 'gop run .');
		return true;
	}
	return false;
}

function createGopTerminal(dir: string): vscode.Terminal {
	for (const i in vscode.window.terminals) {
		if (vscode.window.terminals[i].name === '#gop') {
			const term = vscode.window.terminals[i];
			term.dispose();
		}
	}
	return vscode.window.createTerminal({ name: '#gop', cwd: dir });
}

function runGopTerminal(dir: string, text: string) {
	const term = createGopTerminal(dir);
	term.show(false);
	term.sendText(text);
}
