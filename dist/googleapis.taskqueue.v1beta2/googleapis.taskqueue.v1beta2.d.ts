// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        taskqueue(version: string): any;
        taskqueue(version: 'v1beta2'): taskqueue.v1beta2.Taskqueue;
    }

    namespace taskqueue {
        namespace v1beta2 {
            export interface Taskqueue {
                new(options: any): Taskqueue;

                'taskqueues': {
                    'get': (parameters: {'getStats'?: boolean, 'project': string, 'taskqueue': string}, callback: (error: any, body: TaskQueue, response: any) => void) => Request;
                };
                'tasks': {
                    'delete': (parameters: {'project': string, 'task': string, 'taskqueue': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'project': string, 'task': string, 'taskqueue': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'insert': (parameters: {'project': string, 'taskqueue': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'lease': (parameters: {'groupByTag'?: boolean, 'leaseSecs': number, 'numTasks': number, 'project': string, 'tag'?: string, 'taskqueue': string}, callback: (error: any, body: Tasks, response: any) => void) => Request;
                    'list': (parameters: {'project': string, 'taskqueue': string}, callback: (error: any, body: Tasks2, response: any) => void) => Request;
                    'patch': (parameters: {'newLeaseSeconds': number, 'project': string, 'task': string, 'taskqueue': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                    'update': (parameters: {'newLeaseSeconds': number, 'project': string, 'task': string, 'taskqueue': string}, callback: (error: any, body: Task, response: any) => void) => Request;
                };

            }

            export interface Task {
                'enqueueTimestamp': string;
                'id': string;
                'kind': string;
                'leaseTimestamp': string;
                'payloadBase64': string;
                'queueName': string;
                'retry_count': number;
                'tag': string;
            }

            export interface TaskQueue {
                'acl': {
                    'adminEmails': string[];
                    'consumerEmails': string[];
                    'producerEmails': string[];
                };
                'id': string;
                'kind': string;
                'maxLeases': number;
                'stats': {
                    'leasedLastHour': string;
                    'leasedLastMinute': string;
                    'oldestTask': string;
                    'totalTasks': number;
                };
            }

            export interface Tasks {
                'items': Task[];
                'kind': string;
            }

            export interface Tasks2 {
                'items': Task[];
                'kind': string;
            }

        }
    }
}