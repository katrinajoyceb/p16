import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { MirrorComponent } from './mirror/mirror.component';
import { ClockComponent } from './clock/clock.component';
import { MenuComponent } from './menu/menu.component';
import { ControlComponent } from './control/control.component';

import { NotificationsComponent } from './notifications/notifications.component';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';
import { MessagesComponent } from './messages/messages.component';
import { SocialComponent } from './social/social.component';
import { MusicComponent } from './music/music.component';
import { WeightComponent } from './weight/weight.component';
import { SleepComponent } from './sleep/sleep.component';
import { StepsComponent } from './steps/steps.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightsourceComponent } from './lightsource/lightsource.component';
import { MirrorTimeComponent } from './mirror-time/mirror-time.component';
import { HealthComponent } from './health/health.component';
import { HealthCategoriesComponent } from './health-categories/health-categories.component';
import { OverviewComponent } from './overview/overview.component';
import { ActivityComponent } from './activity/activity.component';
import { AnimateComponent } from './animate/animate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DateComponent } from './date/date.component';
import { MirrorService } from './mirror.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MirrorComponent,
    ClockComponent,
    MenuComponent,
    ControlComponent,
   
    NotificationsComponent,
    WeatherComponent,
    NewsComponent,
    MessagesComponent,
    SocialComponent,
    MusicComponent,
    WeightComponent,
    SleepComponent,
    StepsComponent,
    HealthCategoriesComponent,
    LightsourceComponent,
    OverviewComponent,
    MirrorTimeComponent,
    ActivityComponent,
    AnimateComponent,
    HealthComponent,
    ScheduleComponent,
    DateComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    ChartsModule,
    HttpClientModule
    
  ],
  providers: [MirrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
