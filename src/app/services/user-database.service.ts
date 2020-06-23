import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserDatabaseService {

  constructor(private afs: AngularFirestore) { }

  public GuardarUsuario(){

    const idUsuario =  this.afs.createId();
    const nuevoUsuario = {id: idUsuario, nombre: 'Cris'};

    this.afs.collection('Usuarios').add(nuevoUsuario);

  }


}
