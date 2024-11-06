import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], // Non Standalone Components
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        TasksModule
    ] // Can be used for Standalone Components as well
})

export class AppModule {

}