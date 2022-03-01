import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  listObservers$: Array<Subscription> = []
  state: string ='paused' ;


  // constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {

    // const observer1$ = this.multimediaService.playerStatus$
    // .subcribe(status => this.state = status)
    // this.listObservers$ = [observer1$]
  }
  // ngOnDestroy(): void {
  //   this.listObservers$.forEach(u => u.unsubscribe())
  //   console.log('BOOOOOOM');
  // }

  // handlePosition(even: MouseEvent):void{
  //   const elNative: HTMLElement = this.progressBar.nativeElement
  //   const { clientX} = event
  //   const { x, width} = elNative.getBoundingClientRect()
  //   const clickX = clientX - x //TODO: 1050 - x
  //   const percentageFromX = (clickX * 100 ) / width
  //   console.log(`click(x): ${percentageFromX}`);
  //   this.multimediaService.seekAudio(percentageFromX);
  // }
}
