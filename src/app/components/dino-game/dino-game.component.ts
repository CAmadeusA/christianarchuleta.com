import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-dino-game',
  templateUrl: './dino-game.component.html',
  styleUrls: ['./dino-game.component.scss']
})
export class DinoGameComponent implements OnInit {
  @ViewChild('dino') dino!: ElementRef;
  @ViewChild('cactus') cactus!: ElementRef;

  isJumping: boolean = false;
  isRunning: boolean = true;
  score: number = 0;
  isGameStarted: boolean = false;
  overlayText = "Click to Start, click to jump";


  constructor() { }

  ngOnInit(): void {
  }

  onJump(): void {
    if (!this.isJumping) {
      this.isJumping = true;
      setTimeout(() => this.isJumping = false, 500);
    }
  }

  startGame(): void {
    this.isGameStarted = true;
    this.isRunning = true;
    this.score = 0;
    this.runGameLoop();
  }
  
  runGameLoop(): void {
    const gameInterval = setInterval(() => {
      if (this.isRunning && this.isCollision()) {
        this.isRunning = false;
        clearInterval(gameInterval);
        this.overlayText = ('Game Over! Your score is: ' + this.score);
        this.isGameStarted = false;
      } else if (this.isRunning) {
        this.score++;
      }
    }, 50);
  }

  isCollision(): boolean {
    const dinoRect = this.dino.nativeElement.getBoundingClientRect();
    const cactusRect = this.cactus.nativeElement.getBoundingClientRect();
    return !(
      dinoRect.top > cactusRect.bottom ||
      dinoRect.bottom < cactusRect.top ||
      dinoRect.right < cactusRect.left ||
      dinoRect.left > cactusRect.right
    );
  }
}
