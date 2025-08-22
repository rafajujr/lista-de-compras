import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemLista';




@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {



  item: string = '';
  lista: ItemLista[] = [];
  erro: string = 'Preencha o nome do item';


  adicionarItem() {
    if (this.item == '') {
      this.erro = 'Preencha o nome do item';
      return this.erro;
    }

    console.log(this.item);
    let item = new ItemLista();
    item.item = this.item;
    item.id = this.lista.length + 1;


    this.lista.push(item);
    this.item = '';
    console.log(this.lista);
    return this.lista;
  }

  riscarItem(item: ItemLista) {
    item.status = !item.status;
  }

  removerItem(item: ItemLista) {
    let index = this.lista.indexOf(item);
    this.lista.splice(index, 1);
  }

  limparLista() {
    this.lista = [];
  }

}
