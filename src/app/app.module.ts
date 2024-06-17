import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { GraphComponent } from "./graph/graph.component";
import { DropDownComponent } from "./dropdown/dropdown.component";
import { SelectionComponent } from "./selection/selection.component";
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations:[
    ],
    imports:[BrowserModule,HttpClientModule,GraphComponent,SelectionComponent,FormsModule],
    providers:[],
    bootstrap:[]
})
export class AppModule{}