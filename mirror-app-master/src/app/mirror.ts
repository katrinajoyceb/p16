export class Health {
   type: String;
   weight: Number;
   Date: String;
}

export class Activity {
    date: String;
    steps: Number;
    active_hours: Number;
    flights: Number;
}

export class Sleep {
    date: String;
    total_hours: Number;
    rest_hours: Number;
    wake_hours: Number;
}

export class Messages{
    sender: String;
    message: String;
    priority: Number;
    status: String;
}

export class News {
    headline: String;
    photo: String;
}

export class Schedule {
   event: String;
   time: String;
}

export class Twitter {
    username: String;
    tweet: String;
    pfp: String;
    status: String;
}