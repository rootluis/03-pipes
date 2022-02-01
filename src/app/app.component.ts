import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title        :  string = 'pipes';  
  nombre       :  string = 'Capitán América';
  nombre2      :  string = 'lUiS meJiA gaRciA';  
  arreglo      :  string[] =['Capitán América', 'Spiderman', 'Batman', 'Ironman'];
  PI           :  number = Math.PI;
  porcentaje   :  number= 0.234;
  salario      :  number=1234.5;
  fecha        :  Date=new Date();
  idioma       :  string='';
  videoUrl     :  string='https://www.youtube.com/embed/JTDZ5O5lH_0';
  activar      :  boolean =true;

  valorPromesa = new Promise( (resolve) =>{
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  heroe={
    nombre:'Spiderman',
    casa:'Marvel',
    edad: 17,
    direccion:{
      calle:'New York',
      numero:100,
      pais:'USA'
    }

  };


}
