import { LoginServiceService } from './../../services/loginService.service';;
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
login=[];
code:number;
res: any;
  todo = {
    usuario:'',
    pwd:'',
    device:'',

  }
  constructor(
   private httpClient:HttpClient,
   private loginService:LoginServiceService,
   private navCtrl: NavController,
   public alertController: AlertController,
   public toasteController:ToastController
   ) { }

  ngOnInit() {
  }

  

onLogin(){
  console.log("Aqui mirar usuario: "+this.todo.usuario);
  console.log("Aqui mirar pwd: "+this.todo.pwd);
  console.log("Aqui mirar device: "+this.todo.device);
  
    return this.loginService.onLogin(this.todo.usuario,this.todo.pwd,this.todo.device).subscribe(result=>{
      console.log("Respuesta del resultado: ",result);
      this.code=result.result.code;
      console.log("Verfica aqui por favor:: "+this.code);
     if(this.code>0){      
      console.log("Bienvenido Administrador");
      this.navCtrl.navigateForward('/administrador');
     }
     else{    
      console.log("Usuario Equivocado");
      


        }

      });

     }
    //     presentToast() {
    //   const toast = await this.toasteController.create({
    //     message: 'Hello World!',
    //     duration: 1500,
    //     icon: 'globe'
    //   });
  
    //   await toast.present();
    // }            
    }