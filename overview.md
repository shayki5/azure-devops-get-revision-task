Build | Release | Extension
:-----| :-------| :--------
[![Build Status](https://dev.azure.com/shaykia/AzureDevOpsExtensions/_apis/build/status/shayki5.AzureDevOps-CreatePRTask?branchName=master)](https://dev.azure.com/shaykia/AzureDevOpsExtensions/_build/latest?definitionId=34&branchName=master) | [![Release Status](https://vsrm.dev.azure.com/shaykia/_apis/public/Release/badge/3372e1d4-189a-4d9e-aa4d-0cb86eff3c2e/1/2)](https://vsrm.dev.azure.com/shaykia/_apis/public/Release/badge/3372e1d4-189a-4d9e-aa4d-0cb86eff3c2e/1/2) | [![Extnesion](https://vsmarketplacebadge.apphb.com/version/ShaykiAbramczyk.CreatePullRequest.svg)](https://vsmarketplacebadge.apphb.com/version/ShaykiAbramczyk.CreatePullRequest.svg)

## Get Revision Number 

Get the build revision number and set it as a variable - `$(Revision)` for the next tasks.

For example, if the build number is `3.6.1`, you will get a variable with the value `1`.

The build number should contains `$(Rev:.r)` in the end of the number, for example: `$(Date:yyyyMMdd)$(Rev:.r)`.

By default the variable name will be `$(Revision)` but you can determine the name in the task.
## Usage

//TODO: add this section

## Knowen Issues

 - None.

## Release Notes

### New in 1.0.0

 - First version.