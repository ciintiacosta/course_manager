import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { StarComponent } from "../shared/component/star/star.component";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponet } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseListComponet,
        CourseInfoComponent,
        
                

    ], imports: [
        FormsModule,
        CommonModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponet
              },
              {
                path: 'courses/info/:id' , component: CourseInfoComponent
              }
        ])

    ]
})
export class CourseModule {

}