"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("vsts-task-lib/task");
let buildNumber = tl.getVariable("build_buildnumber");
let variableName = tl.getInput("VariableName", false);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (variableName == null) {
                variableName = "Revision";
            }
            tl.debug("The build number is: " + buildNumber);
            let split = buildNumber.split('.');
            let revision = split[split.length - 1];
            tl.setVariable(variableName, revision, false);
            console.log("The revision is: " + revision);
            console.log("The variable is: " + variableName);
            tl.setResult(tl.TaskResult.Succeeded, "The revision is: " + revision + "The variable is: " + variableName);
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    });
}
run();
