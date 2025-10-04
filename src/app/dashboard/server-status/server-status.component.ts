import { Component, DestroyRef, OnInit, inject, signal,effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{ //implement build-in interface for not make a typo for example ngonInit instead of ngOnInit
  currentStatus = signal<'online' | 'offline' | 'unknow'>('offline');
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus())
    });
  }

  /* constructor() {.   //option of using random without lifecycle hook of component
    setInterval(() => {
    ............
    }
  } */

  ngOnInit() {
      const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.9999999999

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknow');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

/*   ngOnDestroy() {
    clearTimeout(this.interval);
  } */
}
