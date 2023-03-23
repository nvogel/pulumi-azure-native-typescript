import * as resources from '@pulumi/azure-native/resources'
import { getStack, getProject, Config } from '@pulumi/pulumi'

export const projectName = getProject()
export const stack = getStack()

const azureNativeConfig = new Config('azure-native')
export const subscriptionIdConfig = azureNativeConfig.require('subscriptionId')

const projectConfig = new Config('project')

export const tags = {
    'project:name': projectName,
    'project:url': projectConfig.require('url'),
    'pulumi:stack': stack,
}

const resourceGroupName = `rg-${projectName}-${stack}`
export const resourceGroup = new resources.ResourceGroup(resourceGroupName, {
    resourceGroupName: resourceGroupName,
    tags,
})
