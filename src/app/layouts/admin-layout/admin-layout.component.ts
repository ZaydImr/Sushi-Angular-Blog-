import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from '../components/admin-sidebar/admin-sidebar.component';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, AdminSidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

  constructor(private authSrv: AuthService, private router: Router){}

  async ngOnInit(): Promise<void> {
    this.authSrv.authenticated.subscribe((loggedIn) => {      
      // if (!loggedIn) {
      //     this.router.navigate(['/login']);
      // }
    });
  }
}
