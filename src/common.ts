import * as resources from '@pulumi/azure-native/resources'
import * as pulumi from '@pulumi/pulumi'

export const stack = pulumi.getStack()
export const projectName = pulumi.getProject()

export const projectConfig = new pulumi.Config('project')
export const projectUrl = projectConfig.require('url')

export const tags = {
    projectName,
    stack,
    projectUrl,
}

const resourceGroupName = `rg-${projectName}-${stack}`
export const resourceGroup = new resources.ResourceGroup(resourceGroupName, {
    resourceGroupName: resourceGroupName,
    tags: tags,
})

export const azureNativeConfig = new pulumi.Config('azure-native')
export const subscriptionIdConfig = azureNativeConfig.require('subscriptionId')