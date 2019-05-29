export class LoggingService {

    logServiceStatus(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}