/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        replicapoolupdater(version: string): any;
        replicapoolupdater(version: 'v1beta1'): replicapoolupdater.v1beta1.Replicapoolupdater;
    }

    namespace replicapoolupdater {
        namespace v1beta1 {
            export interface Replicapoolupdater {
                new(options: any): Replicapoolupdater;

                'rollingUpdates': {
                    'cancel': (parameters: {'project': string, 'rollingUpdate': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'rollingUpdate': string, 'zone': string}, callback: (error: any, body: RollingUpdate, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: RollingUpdateList, response: any) => void) => Request;
                    'listInstanceUpdates': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'rollingUpdate': string, 'zone': string}, callback: (error: any, body: InstanceUpdateList, response: any) => void) => Request;
                    'pause': (parameters: {'project': string, 'rollingUpdate': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'resume': (parameters: {'project': string, 'rollingUpdate': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'rollback': (parameters: {'project': string, 'rollingUpdate': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                };
                'zoneOperations': {
                    'get': (parameters: {'operation': string, 'project': string, 'zone': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    'list': (parameters: {'filter'?: string, 'maxResults'?: number, 'pageToken'?: string, 'project': string, 'zone': string}, callback: (error: any, body: OperationList, response: any) => void) => Request;
                };

            }

            interface InstanceUpdate {
                'error': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
                'instance': string;
                'status': string;
            }

            interface InstanceUpdateList {
                'items': InstanceUpdate[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface Operation {
                'clientOperationId': string;
                'creationTimestamp': string;
                'endTime': string;
                'error': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
                'httpErrorMessage': string;
                'httpErrorStatusCode': number;
                'id': string;
                'insertTime': string;
                'kind': string;
                'name': string;
                'operationType': string;
                'progress': number;
                'region': string;
                'selfLink': string;
                'startTime': string;
                'status': string;
                'statusMessage': string;
                'targetId': string;
                'targetLink': string;
                'user': string;
                'warnings': {
                    'code': string;
                    'data': {
                        'key': string;
                        'value': string;
                    }[];
                    'message': string;
                }[];
                'zone': string;
            }

            interface OperationList {
                'id': string;
                'items': Operation[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

            interface RollingUpdate {
                'actionType': string;
                'creationTimestamp': string;
                'description': string;
                'error': {
                    'errors': {
                        'code': string;
                        'location': string;
                        'message': string;
                    }[];
                };
                'id': string;
                'instanceGroup': string;
                'instanceGroupManager': string;
                'instanceTemplate': string;
                'kind': string;
                'oldInstanceTemplate': string;
                'policy': {
                    'autoPauseAfterInstances': number;
                    'instanceStartupTimeoutSec': number;
                    'maxNumConcurrentInstances': number;
                    'maxNumFailedInstances': number;
                    'minInstanceUpdateTimeSec': number;
                };
                'progress': number;
                'selfLink': string;
                'status': string;
                'statusMessage': string;
                'user': string;
            }

            interface RollingUpdateList {
                'items': RollingUpdate[];
                'kind': string;
                'nextPageToken': string;
                'selfLink': string;
            }

        }
    }
}