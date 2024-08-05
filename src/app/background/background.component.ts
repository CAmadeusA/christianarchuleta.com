import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { randomInt } from 'crypto';
import * as THREE from 'three';
import { randFloat } from 'three/src/math/MathUtils';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private cubes: { rand: number, mesh: THREE.Mesh }[] = [];
  private light!: THREE.DirectionalLight;

  private mouseX = 0;
  private mouseY = 0;

  raycaster = new THREE.Raycaster();

  private readonly colorPrimary = 0x5378A0;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.createScene();
    this.createCubes();
    this.animateCamera();
    this.animateCube();
  }

  private createScene(): void {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 50;

    this.light = new THREE.DirectionalLight(0xFFFFFF);
    this.light.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
    this.light.castShadow = true;
    this.scene.add(this.light);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(ambientLight);

    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  private createCubes(): void {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: this.colorPrimary });

    const gridSize = 50;
    for (let i = -gridSize * 2; i <= gridSize * 2; i += 5) {
      for (let j = -gridSize; j <= gridSize; j += 5) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(i, j, 0);
        this.scene.add(cube);
        this.cubes.push({ rand: randFloat(0.1, 3), mesh: cube });
      }
    }
  }

  private animateCube(): void {
    requestAnimationFrame(() => this.animateCube());
    let intersects = this.raycaster?.intersectObject(this.scene, true);
    this.cubes.forEach(cube => {
      if (intersects?.[0]?.object === cube.mesh) {
        let multiplier = 15;
        cube.mesh.rotation.x += 0.01 * multiplier;
        cube.mesh.rotation.y += 0.01 * multiplier;

      } else {
        cube.mesh.rotation.x += 0.01 * cube.rand;
        cube.mesh.rotation.y += 0.01 * cube.rand;
      }
    });
    this.renderer.render(this.scene, this.camera);
  }

  private animateCamera(): void {
    console.log(this.mouseX, this.camera.position.x);
    this.camera.position.x = ((this.mouseX * window.innerWidth) - this.camera.position.x) * 0.0004;
    this.camera.position.y = ((-this.mouseY * window.innerHeight) - this.camera.position.y) * 0.0004;

    this.light.position.x = this.camera.position.x;
    this.light.position.y = this.camera.position.y;
    this.camera.lookAt(this.scene.position);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  @HostListener('document:mousemove', ['$event'])
  private onDocumentMouseMove(event: MouseEvent): void {
    this.animateCamera();
    this.mouseX = ((event.clientX / window.innerWidth) * 2) - 1;
    this.mouseY = ((event.clientY / window.innerHeight) * -2) + 1;
    this.raycaster.setFromCamera(new THREE.Vector2(this.mouseX, this.mouseY), this.camera);
  }
}
