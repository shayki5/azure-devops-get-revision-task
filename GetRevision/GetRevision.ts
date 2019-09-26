import tl = require('vsts-task-lib/task');

let buildNumber: string = tl.getVariable("build_buildnumber");
let variableName = tl.getInput("VariableName", false);

async function run() {
    try {
        if(variableName == null){
            variableName = "Revision";
        }
        tl.debug("The build number is: " + buildNumber);
        let split: string[] = buildNumber.split('.');
        let revision = split[split.length - 1];
        tl.setVariable(variableName, revision, false);
        console.log("The revision is: " + revision)
        console.log("The variable is: " + variableName + " - you can use in the next steps with $("+variableName+")")
        tl.setResult(tl.TaskResult.Succeeded, "The revision is: " + revision + " The variable is: " + variableName);


    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
