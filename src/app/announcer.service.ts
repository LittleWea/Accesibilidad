import { Injectable } from '@angular/core';
import { LiveAnnouncer} from '@angular/cdk/a11y'

@Injectable({
  providedIn: 'root'
})
export class AnnouncerService {

  constructor(private announcer: LiveAnnouncer) { }

  announce(message: string){
    let a: SpeechSynthesisUtterance
    a = new SpeechSynthesisUtterance(message)
    window.speechSynthesis.speak(a)
  }
}
