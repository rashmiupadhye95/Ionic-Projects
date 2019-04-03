import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	username = '';
	password = '';

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {}

  onLogin(){
  	if(this.username == this.password){
  		this.router.navigate(['/dashboard']);
  	}
  	else{
  	this.presentAlert();
    this.username = '';
    this.password = '';
  	}
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'Invalid Username/Password',
      message: 'Please check your username or password.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
