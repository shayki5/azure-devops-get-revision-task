Build | Release |
:-----| :-------|
[![Build Status](https://dev.azure.com/shaykia/AzureDevOpsExtensions/_apis/build/status/shayki5.Azure-DevOps-Get-Revision-Task?branchName=master)](https://dev.azure.com/shaykia/AzureDevOpsExtensions/_build/latest?definitionId=39&branchName=master) | [![Release Status](https://vsrm.dev.azure.com/shaykia/_apis/public/Release/badge/3372e1d4-189a-4d9e-aa4d-0cb86eff3c2e/2/5)](https://vsrm.dev.azure.com/shaykia/_apis/public/Release/badge/3372e1d4-189a-4d9e-aa4d-0cb86eff3c2e/2/5) 

## Get Revision Number 

Get the build revision number and set it as a variable - `$(Revision)` for the next tasks.

For example, if the build number is `3.6.1`, you will get a variable with the value `1`.

The build number should contains `$(Rev:.r)` in the end of the number, for example: `$(Date:yyyyMMdd)$(Rev:.r)`.

By default the variable name will be `$(Revision)` but you can determine the name in the task.
## Usage

**In the classic editor:**

![Task](https://i.imgur.com/6Ah0VDB.png)

- **Variable Name:** The variable name of the revision number for use in the next tasks, by default is `Revision`, you can use it in inline tasks - `$(Revision)`.

**In yaml piepline:**

```yaml
- task: GetRevision@1
  displayName: 'Get Revision'
  inputs:
    VariableName: Revision
```

## Knowen Issues

 - None.

## Release Notes

### New in 1.0.0

 - First version.
