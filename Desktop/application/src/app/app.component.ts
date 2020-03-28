import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

const config = {
  apiKey: "AIzaSyBa3eFYq1SqyuU8bUh8N_AVa8eWtAZ19nA",
  authDomain: "mydatabase-4be6d.firebaseapp.com",
  databaseURL: "https://mydatabase-4be6d.firebaseio.com",
  projectId: "mydatabase-4be6d",
  storageBucket: "mydatabase-4be6d.appspot.com",
  messagingSenderId: "618643324030",
  appId: "1:618643324030:web:a29162b0e463d6d8"
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public userDetails: any
  public appPages = [
    {
      title: 'Http',
      url: '/http',
      icon: 'server-outline'
    },
    {
      title: 'Firebase',
      url: '/firebase',
      icon: 'logo-firebase'
    },
    {
      title: 'SQLite',
      url: '/sqlite',
      icon: 'cloud-offline-outline'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'log-out-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.initializeApp(config);
      this.userDetails = this.authService.userDetails();
      console.log(this.userDetails)
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    this.authService.logoutUser();
  }
}
