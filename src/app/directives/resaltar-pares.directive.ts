import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appResaltarPares]'
})
export class ResaltarParesDirective {

  constructor(private elRef: ElementRef) { }
  @Input() valor = '';

  ngOnInit(){
    const numero = this.obtenerNumero(this.valor);
    if((numero % 2)=== 0){
      this.elRef.nativeElement.style.backgroundColor= 'red';
    }
  }

  obtenerNumero(cadena: string): number{
      console.log("Esta se muestra");
      return parseInt(cadena.split('')[1]);
  }


}
