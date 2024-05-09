import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../components/header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [HeaderComponent, NgIf],
  templateUrl: './global.component.html',
  styleUrl: './global.component.scss'
})
export class GlobalComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.authenticated.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

}
