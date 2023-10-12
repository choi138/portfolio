export const animation = (id: string) => {
  (function () {
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      function (callback: FrameRequestCallback) {
        window.setTimeout(callback, 1000 / 60);
      };
    window.requestAnimationFrame = requestAnimationFrame;
  })();

  // Terrain stuff.
  const background = document.getElementById(id) as HTMLCanvasElement,
    bgCtx = background.getContext('2d') as CanvasRenderingContext2D,
    width = window.innerWidth;

  let height = document.body.offsetHeight;

  height < 400 ? (height = 400) : height;

  background.width = width;
  background.height = height;

  class Star {
    size: number;
    speed: number;
    x: number;
    y: number;

    constructor(options: { x: number; y: number }) {
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.094;
      this.x = options.x;
      this.y = options.y;
    }

    reset(): void {
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.05;
      this.x = width;
      this.y = Math.random() * height;
    }

    update(): void {
      this.x -= this.speed;
      if (this.x < 0) {
        this.reset();
      } else {
        bgCtx.fillRect(this.x, this.y, this.size, this.size);
      }
    }
  }

  class ShootingStar {
    x = 0;
    y = 0;
    len = 0;
    speed = 0;
    size = 0;
    waitTime = 0;
    active = false;

    constructor() {
      this.reset();
    }

    reset(): void {
      this.x = Math.random() * width;
      this.y = 0;
      this.len = Math.random() * 80 + 10;
      this.speed = Math.random() * 10 + 6;
      this.size = Math.random() * 1 + 0.1;
      // this is used so the shooting stars aren't constant
      this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
      this.active = false;
    }

    update(): void {
      if (this.active) {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y >= height) {
          this.reset();
        } else {
          bgCtx.lineWidth = this.size;
          bgCtx.beginPath();
          bgCtx.moveTo(this.x, this.y);
          bgCtx.lineTo(this.x + this.len, this.y - this.len);
          bgCtx.stroke();
        }
      } else {
        if (this.waitTime < new Date().getTime()) {
          this.active = true;
        }
      }
    }
  }

  const entities: (Star | ShootingStar)[] = [];

  // init the stars
  for (let i = 0; i < height; i++) {
    entities.push(
      new Star({
        x: Math.random() * width,
        y: Math.random() * height,
      }),
    );
  }

  // Add 2 shooting stars that just cycle.
  entities.push(new ShootingStar());
  entities.push(new ShootingStar());

  //animate background
  function animate(): void {
    bgCtx.clearRect(0, 0, width, height);
    bgCtx.fillStyle = '#ffffff';
    bgCtx.strokeStyle = '#ffffff';

    let entLen = entities.length;

    while (entLen--) {
      entities[entLen].update();
    }
    requestAnimationFrame(animate);
  }

  animate();
};
