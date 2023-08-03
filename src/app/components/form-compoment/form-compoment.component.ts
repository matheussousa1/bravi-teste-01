import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-compoment',
  templateUrl: './form-compoment.component.html',
  styleUrls: ['./form-compoment.component.css']
})
export class FormCompomentComponent {
  parametros: string = '(, ), {, }, [, ou ]';
  formColchetes!: FormGroup
  showOk: string = '';
  mensagem: string = '';

  inputColchetes: string = '';
  resultadoVerificacao: string = '';

  ngOnInit(): void{
    this.formColchetes = new FormGroup({
      colchetes: new FormControl('', [Validators.required])
    })
  }

  get colchetes(){
    return this.formColchetes.get('colchetes')!;
  }

  submit(){
    if(this.formColchetes.invalid){
      return;
    }

    const verificar: string[] = [];
    const colchetesAbertos = ['(', '[', '{'];
    const colchetesFechados = [')', ']', '}'];
    
    this.inputColchetes = this.formColchetes.value.colchetes
  
    for (const char of this.inputColchetes) {
      
      if (colchetesAbertos.includes(char)) {
        verificar.push(char);
      
      } else if (colchetesFechados.includes(char)) {
        
        const colcheteorrespondente = colchetesAbertos[colchetesFechados.indexOf(char)];

        if (verificar.length === 0 || verificar.pop() !== colcheteorrespondente) {
          this.showOk = 'nok';
          this.mensagem = 'Ordem inválida';
          return;
        }
      
      }
    }

    if (verificar.length === 0) {
      this.showOk = 'ok';
      this.mensagem = 'Ordem válida';
    } else {
      this.showOk = 'nok';
      this.mensagem = 'Ordem inválida';
    }

  }
}
