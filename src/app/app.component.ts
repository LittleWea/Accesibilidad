import { Component } from '@angular/core';
import { AnnouncerService } from './announcer.service';
import { InvokeFunctionExpr } from '@angular/compiler';
import { datos } from './b-acces/datos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'accesibilidad';
  sizeText: number = 0
  sizeTitle: number = 0
  colorB: number = 0

  yes: any = [4, 1, 2, 3]

  inf: datos[] = [
    { nombre: 'Cuñada Menor', info: 'Un día, su familia se reúne para una ofrenda y les preocupa que ella sea la única sin novio. Su cuñado, Ho-seok, le organiza una cita a ciegas con su colega, Min-soo, quien siempre ha sido amable con él. Cuanto más habla con Min-soo, más se da cuenta Seo-ri de que está interesada en su cuñado, Ho-seok. Luego trata de reunirse con él con frecuencia.', img: 'koreana1.jpg' },
    { nombre: 'Cráter', info: 'Cinco chicos de una colonia minera lunar roban un rover para poder explorar un misterioso cráter', img: 'crater.jpg' },
    { nombre: 'La Madre', info: 'Una asesina mortal sale de su escondite para proteger a la hija a la que entregó años antes, mientras huía de hombres peligrosos', img: 'lamadre.jpg' },
    { nombre: 'El Exsorcista del Papa', info: 'Película sobre Gabriele Amorth, un sacerdote que ejerció como exorcista principal del Vaticano, realizando más de cien mil exorcismos a lo largo de su vida. Amorth escribió dos libros de memorias donde detalló sus experiencias luchando contra Satanás.', img: 'elexorcistadelpapa.jpg' },
    { nombre: 'Suzume', info: 'Suzume, una joven chica de 17 años que vive en un pueblo tranquilo en la región de Kyushu, en el suroeste de Japón. La historia comienza cuando Suzume conoce a un misterioso joven que busca una "puerta". Los dos viajan juntos y encuentran una puerta vieja en una casa abandonada en las montañas. Como si algo tirara de ella, Suzume extiende su mano hacia la puerta, lo que comienza una serie de eventos desafortunados en todo Japón.', img: 'suzume.jpg' },
    { nombre: 'La Tierra Errante', info: 'Los humanos construyeron enormes motores en la superficie de la tierra para encontrar un nuevo hogar. Pero el camino al universo es peligroso. Para salvar la tierra, los jóvenes una vez más tienen que dar un paso al frente para iniciar una carrera contrarreloj a vida o muerte.', img: 'latierraerrante.jpg' }
  ]



  dyslexia: boolean = false
  screenReader: boolean = false
  reader: string = 'a'
  dys: string = 'a'
  desDalt: string = 'a'

  constructor(private announ: AnnouncerService) {
    this.sizeText = Number.parseInt(localStorage.getItem('text') || '14')
    this.sizeTitle = Number.parseInt(localStorage.getItem('title') || '20')
    this.colorB = Number.parseInt(localStorage.getItem('blind') || '0')

    if (localStorage.getItem('dyslex') === 'activado') {
      this.dyslexia = true
      this.dys = 'Activado'
    } else {
      this.dyslexia = false
      this.dys = 'No Activado'
    }
    if (localStorage.getItem('reader') === 'activado') {
      this.screenReader = true
      this.reader = 'Activado'
    } else {
      this.screenReader = false
      this.reader = 'No activado'
    }
  }

  increaseSize(): void {
    this.sizeText += 2
    localStorage.setItem('text', this.sizeText.toString())
    this.sizeTitle += 2
    localStorage.setItem('title', this.sizeTitle.toString())
  }

  decreaseSize(): void {
    if (this.sizeText <= 14) {
      this.sizeText = 14
      localStorage.setItem('text', this.sizeText.toString())
      this.sizeTitle = 20
      localStorage.setItem('title', this.sizeTitle.toString())
      return
    }
    this.sizeText -= 2
    localStorage.setItem('text', this.sizeText.toString())
    this.sizeTitle -= 2
    localStorage.setItem('title', this.sizeTitle.toString())
  }

  changeDyslexia(): void {
    this.dyslexia = !this.dyslexia
    if (this.dyslexia) {
      localStorage.setItem('dyslex', 'activado')
      this.dys = 'Activado'
    } else if (!this.dyslexia) {
      localStorage.setItem('dyslex', 'no activado')
      this.dys = 'No Activado'
    }

  }

  changeColor(): void {
    this.colorB += 1
    if (this.colorB >= 5) {
      this.colorB = 0
    }

    localStorage.setItem('blind', this.colorB.toString())
  }

  checkColorB(): string {
    switch (this.colorB) {
      case 1:
        this.desDalt = 'Deuteranopia'
        return 'buttonDeuteranopia'
      case 2:
        this.desDalt = 'Tritanopia'
        return 'buttonTritanopia'
      case 3:
        this.desDalt = 'Protanopia'
        return 'buttonProtanopia'
      case 4:
        this.desDalt = 'Achromatopsia'
        return 'buttonAchromatopsia'
      default:
        this.desDalt = 'Ninguno'
        return 'buttonWCAG'
    }
  }

  checkColorC(): string {
    switch (this.colorB) {
      case 1:
        return 'cardDeuteranopia'
      case 2:
        return 'cardTritanopia'
      case 3:
        return 'cardProtanopia'
      case 4:
        return 'cardAchromatopsia'
      default:
        return 'cardWCAG'
    }
  }

  checkBody(): string {

    if (this.colorB == 0 && this.dyslexia) {
      return 'bodyWCAG' + ' dysActive'
    } else if (this.colorB == 1 && this.dyslexia) {
      return 'bodyDeuteranopia' + ' dysActive'
    } else if (this.colorB == 2 && this.dyslexia) {
      return 'bodyTritanopia' + ' dysActive'
    } else if (this.colorB == 3 && this.dyslexia) {
      return 'bodyProtanopia' + ' dysActive'
    } else if (this.colorB == 4 && this.dyslexia) {
      return 'bodyAchromatopsia' + ' dysActive'
    } else if (this.colorB == 0 && !this.dyslexia) {
      return 'bodyWCAG' + ' dysNot'
    } else if (this.colorB == 1 && !this.dyslexia) {
      return 'bodyDeuteranopia' + ' dysNot'
    } else if (this.colorB == 2 && !this.dyslexia) {
      return 'bodyTritanopia' + ' dysNot'
    } else if (this.colorB == 3 && !this.dyslexia) {
      return 'bodyProtanopia' + ' dysNot'
    }
    return 'bodyAchromatopsia' + ' dysNot'

  }

  changeReader(): void {
    this.screenReader = !this.screenReader

    if (this.screenReader) {
      localStorage.setItem('reader', 'activado')
      this.reader = 'Activado'
      this.screenReader = true
    } else {
      localStorage.setItem('reader', 'no activado')
      this.reader = 'No activado'
      this.screenReader = false
    }

  }

  read(message: string) {
    if (this.screenReader) {
      this.announ.announce(message)
    }
  }

  getNumberArray(count: number): number[] {
    return Array(count).fill(0).map((_, index) => index + 1);
  }
}

