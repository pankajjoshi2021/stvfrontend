import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MyDocumentComponent } from '../../my-document/my-document.component';
import { UploadStudentInfoComponent } from '../../upload-student-info/upload-student-info.component';
import { StudentInfoComponent } from '../../student-info/student-info.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AuthGuardService}from'../../auth-guard.service';
export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',           component: DashboardComponent },  
    
];
