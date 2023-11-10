'use strict';

import { forEach } from 'lodash';
import { TextDecoder } from 'util';
import vscode = require('vscode');
import { URI } from 'vscode-uri';

export function runGopCommand(dir: string, command: string, args: string[]): boolean {
	if (command === 'run') {
		runGopTerminal(dir, 'gop run .');
		return true;
	}
	return false;
}

function createGopTerminal(dir: string): vscode.Terminal {
	for (var i in vscode.window.terminals) {
		if (vscode.window.terminals[i].name == '#gop') {
			const term = vscode.window.terminals[i];
			term.dispose();
		}
	}
	return vscode.window.createTerminal({name:"#gop",cwd: dir});
}

function runGopTerminal(dir: string, text: string) {
	var term = createGopTerminal(dir);
	term.show(false);
	term.sendText(text);
}
