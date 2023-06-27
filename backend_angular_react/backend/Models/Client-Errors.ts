export class ClientError {
  public status: number;
  public message: string;

  public constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

//"child" client error class
export class RouteNotFoundError extends ClientError {
  public constructor(route: string) {
    super(404, `route ${route} not found`);
  }
}

//"child" video error class
export class VideoNotFoundError extends ClientError {
  public constructor(videoID: string) {
    super(404, `video id:${videoID} was not found`);
  }
}

//"child" user not logged
export class UserNotLoggedError extends ClientError {
  public constructor() {
    super(401, "User not authrized, please login...");
  }
}
